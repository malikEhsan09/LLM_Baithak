"""Waitlist management with Google Sheets integration."""

import os
import json
from datetime import datetime
from pathlib import Path
from typing import Optional

import gspread
from google.oauth2.service_account import Credentials


def get_waitlist_client():
    """
    Get authenticated Google Sheets client.
    Uses service account credentials from llm-baithak.json or environment variable.
    """
    try:
        # Try to get credentials from file first (local development)
        cred_file_path = Path(__file__).parent.parent / "llm-baithak.json"

        if cred_file_path.exists():
            # Load from file for local development
            with open(cred_file_path, 'r') as f:
                credentials_info = json.load(f)
        else:
            # Fallback to environment variable for deployment
            credentials_json = os.getenv('GOOGLE_CREDENTIALS_JSON')
            if not credentials_json:
                raise ValueError(
                    "No credentials found. Either provide llm-baithak.json file "
                    "or set GOOGLE_CREDENTIALS_JSON environment variable"
                )
            credentials_info = json.loads(credentials_json)

        # Authenticate with Google
        scopes = ['https://www.googleapis.com/auth/spreadsheets']
        credentials = Credentials.from_service_account_info(
            credentials_info, scopes=scopes
        )

        # Authorize gspread client
        gc = gspread.authorize(credentials)

        # Get spreadsheet ID from environment
        spreadsheet_id = os.getenv('GOOGLE_SHEET_ID')
        if not spreadsheet_id:
            raise ValueError("GOOGLE_SHEET_ID environment variable not set")

        # Open spreadsheet
        spreadsheet = gc.open_by_key(spreadsheet_id)

        return spreadsheet

    except ImportError as e:
        raise ImportError(
            f"Required library not installed: {str(e)}. "
            "Run: pip install gspread google-auth"
        )
    except Exception as e:
        raise Exception(f"Failed to connect to Google Sheets: {str(e)}")


async def add_to_waitlist(name: str, email: str) -> dict:
    """
    Add a user to the waitlist.

    Args:
        name: User's full name
        email: User's email address

    Returns:
        dict with success status, waitlist position, and message
    """
    try:
        spreadsheet = get_waitlist_client()

        # Get or create 'Waitlist' worksheet
        try:
            worksheet = spreadsheet.worksheet('Waitlist')
        except gspread.exceptions.WorksheetNotFound:
            # Create worksheet if it doesn't exist
            worksheet = spreadsheet.add_worksheet(title='Waitlist', rows=1000, cols=5)

        # Check if headers exist, if not add them
        try:
            first_row = worksheet.row_values(1)
            if not first_row or first_row[0] != 'Timestamp':
                # Insert headers at the top
                worksheet.insert_row(['Timestamp', 'Name', 'Email', 'Position', 'Status'], 1)
        except:
            # If checking fails, just add headers
            worksheet.insert_row(['Timestamp', 'Name', 'Email', 'Position', 'Status'], 1)

        # Get current count to determine position
        all_records = worksheet.get_all_records()
        position = len(all_records) + 1

        # Get current timestamp
        timestamp = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')

        # Add new row
        worksheet.append_row([
            timestamp,
            name,
            email,
            str(position),
            'Waitlisted'
        ])

        return {
            'success': True,
            'position': position,
            'message': f'Successfully added to waitlist at position #{position}'
        }

    except ValueError as e:
        # Missing environment variables or credentials
        return {
            'success': False,
            'error': 'configuration_error',
            'message': str(e)
        }
    except Exception as e:
        # Other errors
        return {
            'success': False,
            'error': 'server_error',
            'message': f'Failed to add to waitlist: {str(e)}'
        }


async def get_waitlist_count() -> dict:
    """
    Get current number of people on waitlist.

    Returns:
        dict with count
    """
    try:
        spreadsheet = get_waitlist_client()

        # Get worksheet
        worksheet = spreadsheet.worksheet('Waitlist')

        # Get all rows (excluding header)
        records = worksheet.get_all_records()

        # Count entries
        count = len(records) if records else 0

        return {
            'success': True,
            'count': count
        }

    except Exception as e:
        return {
            'success': False,
            'error': str(e),
            'count': 0
        }
