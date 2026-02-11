import './ConfirmationDialog.css';

export default function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title = 'Are you sure?',
  message = 'This action cannot be undone.',
  confirmText = 'Delete',
  cancelText = 'Cancel',
}) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="confirmation-dialog-overlay" onClick={handleBackdropClick}>
      <div className="confirmation-dialog">
        <div className="confirmation-dialog-header">
          <h3 className="confirmation-dialog-title">{title}</h3>
        </div>
        <div className="confirmation-dialog-body">
          <p className="confirmation-dialog-message">{message}</p>
        </div>
        <div className="confirmation-dialog-footer">
          <button
            className="confirmation-dialog-btn confirmation-dialog-btn-cancel"
            onClick={onClose}
          >
            {cancelText}
          </button>
          <button
            className="confirmation-dialog-btn confirmation-dialog-btn-confirm"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

