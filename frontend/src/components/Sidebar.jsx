import { useState } from 'react';
import './Sidebar.css';

export default function Sidebar({
  conversations,
  currentConversationId,
  onSelectConversation,
  onNewConversation,
  onDeleteConversation,
  onUpdateTitle,
}) {
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
            <circle cx="32" cy="32" r="8" fill="#e91e63" />

            {/* Outer circles - individual LLM models */}
            <circle cx="32" cy="12" r="6" fill="#f06292" />
            <circle cx="47" cy="22" r="6" fill="#f06292" />
            <circle cx="47" cy="42" r="6" fill="#f06292" />
            <circle cx="32" cy="52" r="6" fill="#f06292" />
            <circle cx="17" cy="42" r="6" fill="#f06292" />
            <circle cx="17" cy="22" r="6" fill="#f06292" />

            {/* Connection lines */}
            <line x1="32" y1="20" x2="32" y2="24" stroke="#e91e63" strokeWidth="2" />
            <line x1="41" y1="26" x2="38" y2="28" stroke="#e91e63" strokeWidth="2" />
            <line x1="41" y1="38" x2="38" y2="36" stroke="#e91e63" strokeWidth="2" />
            <line x1="32" y1="44" x2="32" y2="40" stroke="#e91e63" strokeWidth="2" />
            <line x1="23" y1="38" x2="26" y2="36" stroke="#e91e63" strokeWidth="2" />
            <line x1="23" y1="26" x2="26" y2="28" stroke="#e91e63" strokeWidth="2" />

            {/* Brain icons in circles */}
            <path d="M32 9c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill="#fff"/>
            <path d="M47 19c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill="#fff"/>
            <path d="M47 39c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill="#fff"/>
            <path d="M32 49c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill="#fff"/>
            <path d="M17 39c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill="#fff"/>
            <path d="M17 19c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill="#fff"/>
          </svg>
          <h1>LLM Baithak</h1>
        </div>
        <button className="new-conversation-btn" onClick={onNewConversation}>
          + New Conversation
        </button>
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
