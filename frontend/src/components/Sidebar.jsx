import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './Sidebar.css';

export default function Sidebar({
  conversations,
  currentConversationId,
  onSelectConversation,
  onNewConversation,
  onDeleteConversation,
  onUpdateTitle,
}) {
  const { theme, toggleTheme } = useTheme();
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleStartEdit = (conv, e) => {
    e.stopPropagation();
    setEditingId(conv.id);
    setEditValue(conv.title || 'New Conversation');
  };

  const handleSaveEdit = async (convId) => {
    if (editValue.trim()) {
      await onUpdateTitle(convId, editValue.trim());
    }
    setEditingId(null);
    setEditValue('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  const handleKeyDown = (convId, e) => {
    if (e.key === 'Enter') {
      handleSaveEdit(convId);
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">
          <svg className="sidebar-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Center circle - main council hub */}
            <circle cx="32" cy="32" r="8" fill={theme === 'retro' ? '#00ff00' : '#8b5cf6'} />

            {/* Outer circles - individual LLM models */}
            <circle cx="32" cy="12" r="6" fill={theme === 'retro' ? '#00aa00' : '#a78bfa'} />
            <circle cx="47" cy="22" r="6" fill={theme === 'retro' ? '#00aa00' : '#a78bfa'} />
            <circle cx="47" cy="42" r="6" fill={theme === 'retro' ? '#00aa00' : '#a78bfa'} />
            <circle cx="32" cy="52" r="6" fill={theme === 'retro' ? '#00aa00' : '#a78bfa'} />
            <circle cx="17" cy="42" r="6" fill={theme === 'retro' ? '#00aa00' : '#a78bfa'} />
            <circle cx="17" cy="22" r="6" fill={theme === 'retro' ? '#00aa00' : '#a78bfa'} />

            {/* Connection lines */}
            <line x1="32" y1="20" x2="32" y2="24" stroke={theme === 'retro' ? '#00ff00' : '#8b5cf6'} strokeWidth="2" />
            <line x1="41" y1="26" x2="38" y2="28" stroke={theme === 'retro' ? '#00ff00' : '#8b5cf6'} strokeWidth="2" />
            <line x1="41" y1="38" x2="38" y2="36" stroke={theme === 'retro' ? '#00ff00' : '#8b5cf6'} strokeWidth="2" />
            <line x1="32" y1="44" x2="32" y2="40" stroke={theme === 'retro' ? '#00ff00' : '#8b5cf6'} strokeWidth="2" />
            <line x1="23" y1="38" x2="26" y2="36" stroke={theme === 'retro' ? '#00ff00' : '#8b5cf6'} strokeWidth="2" />
            <line x1="23" y1="26" x2="26" y2="28" stroke={theme === 'retro' ? '#00ff00' : '#8b5cf6'} strokeWidth="2" />

            {/* Brain icons in circles */}
            <path d="M32 9c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill={theme === 'retro' ? '#000' : '#fff'}/>
            <path d="M47 19c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill={theme === 'retro' ? '#000' : '#fff'}/>
            <path d="M47 39c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill={theme === 'retro' ? '#000' : '#fff'}/>
            <path d="M32 49c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill={theme === 'retro' ? '#000' : '#fff'}/>
            <path d="M17 39c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill={theme === 'retro' ? '#000' : '#fff'}/>
            <path d="M17 19c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill={theme === 'retro' ? '#000' : '#fff'}/>
          </svg>
          <h1>LLM Baithak</h1>
        </div>
        <div className="sidebar-buttons">
          <button className="new-conversation-btn" onClick={onNewConversation}>
            + New Conversation
          </button>
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'simple' ? 'Retro Terminal' : 'Simple'} theme`}
            aria-label={`Switch to ${theme === 'simple' ? 'Retro Terminal' : 'Simple'} theme`}
          >
            {theme === 'simple' ? (
              // Terminal/Computer icon for switching to retro
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
                <path d="M6 9l.5-2.5L8 9"/>
                <path d="M10 9l.5-2.5L12 9"/>
                <path d="M14 9l.5-2.5L16 9"/>
                <path d="M18 9l.5-2.5L20 9"/>
              </svg>
            ) : (
              // Sun/brightness icon for switching to simple
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="conversation-list">
        {conversations.length === 0 ? (
          <div className="no-conversations">No conversations yet</div>
        ) : (
          conversations.map((conv) => (
            <div
              key={conv.id}
              className={`conversation-item ${
                conv.id === currentConversationId ? 'active' : ''
              }`}
              onClick={() => onSelectConversation(conv.id)}
            >
              <div className="conversation-content">
                {editingId === conv.id ? (
                  <input
                    type="text"
                    className="conversation-title-input"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => handleSaveEdit(conv.id)}
                    onKeyDown={(e) => handleKeyDown(conv.id, e)}
                    onClick={(e) => e.stopPropagation()}
                    autoFocus
                  />
                ) : (
                  <>
                    <div className="conversation-title-wrapper">
                      <div className="conversation-title">
                        {conv.title || 'New Conversation'}
                      </div>
                      <button
                        className="edit-title-btn"
                        onClick={(e) => handleStartEdit(conv, e)}
                        title="Edit title"
                        aria-label="Edit title"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.146 1.146a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-10 10a.5.5 0 01-.168.11l-5 2a.5.5 0 01-.65-.65l2-5a.5.5 0 01.11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 015 12.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.468-.325z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="conversation-meta">
                      {conv.message_count} messages
                    </div>
                  </>
                )}
              </div>
              <button
                className="delete-conversation-btn"
                onClick={(e) => onDeleteConversation(conv.id, e)}
                title="Delete conversation"
                aria-label="Delete conversation"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12M4 4L12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
