import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import ConfirmationDialog from './components/ConfirmationDialog';
import LandingPage from './components/LandingPage';
import WaitlistPage from './components/WaitlistPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import { ThemeProvider } from './contexts/ThemeContext';
import { api } from './api';
import './App.css';

function AppContent() {
  // Page state: 'landing', 'waitlist', 'signup', 'login', 'dashboard'
  const [currentPage, setCurrentPage] = useState('landing');
  const [conversations, setConversations] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [conversationToDelete, setConversationToDelete] = useState(null);

  // Navigation handlers
  const handleGetStarted = () => {
    setCurrentPage('waitlist');
  };

  const handleShowSignup = () => {
    setCurrentPage('signup');
  };

  const handleShowLogin = () => {
    setCurrentPage('login');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  const handleLoginSuccess = async () => {
    setCurrentPage('dashboard');
    // Load conversations when entering dashboard
    await loadConversations();
    // Create a new conversation if none exists
    if (conversations.length === 0) {
      setTimeout(() => handleNewConversation(), 100);
    }
  };

  // Load conversations when on dashboard
  useEffect(() => {
    if (currentPage === 'dashboard') {
      loadConversations();
    }
  }, [currentPage]);

  // Load conversation details when selected
  useEffect(() => {
    if (currentConversationId) {
      loadConversation(currentConversationId);
    }
  }, [currentConversationId]);

  const loadConversations = async () => {
    try {
      const convs = await api.listConversations();
      setConversations(convs);
    } catch (error) {
      console.error('Failed to load conversations:', error);
    }
  };

  const loadConversation = async (id) => {
    try {
      const conv = await api.getConversation(id);
      setCurrentConversation(conv);
    } catch (error) {
      console.error('Failed to load conversation:', error);
    }
  };

  const handleNewConversation = async () => {
    try {
      const newConv = await api.createConversation();
      setConversations([
        { id: newConv.id, created_at: newConv.created_at, message_count: 0 },
        ...conversations,
      ]);
      setCurrentConversationId(newConv.id);
    } catch (error) {
      console.error('Failed to create conversation:', error);
    }
  };

  const handleSelectConversation = (id) => {
    setCurrentConversationId(id);
  };

  const handleDeleteConversation = (id, e) => {
    e.stopPropagation();
    setConversationToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteConversation = async () => {
    if (!conversationToDelete) return;

    try {
      await api.deleteConversation(conversationToDelete);
      setConversations(conversations.filter(conv => conv.id !== conversationToDelete));
      if (currentConversationId === conversationToDelete) {
        setCurrentConversationId(null);
        setCurrentConversation(null);
      }
      setDeleteDialogOpen(false);
      setConversationToDelete(null);
    } catch (error) {
      console.error('Failed to delete conversation:', error);
      alert('Failed to delete conversation. Please try again.');
      setDeleteDialogOpen(false);
      setConversationToDelete(null);
    }
  };

  const cancelDeleteConversation = () => {
    setDeleteDialogOpen(false);
    setConversationToDelete(null);
  };

  const handleUpdateTitle = async (conversationId, newTitle) => {
    try {
      await api.updateConversationTitle(conversationId, newTitle);
      setConversations(conversations.map(conv =>
        conv.id === conversationId
          ? { ...conv, title: newTitle }
          : conv
      ));
      if (currentConversation && currentConversation.id === conversationId) {
        setCurrentConversation({ ...currentConversation, title: newTitle });
      }
    } catch (error) {
      console.error('Failed to update title:', error);
      alert('Failed to update title. Please try again.');
    }
  };

  const handleSendMessage = async (content) => {
    if (!currentConversationId) return;

    setIsLoading(true);
    try {
      const userMessage = { role: 'user', content };
      setCurrentConversation((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage],
      }));

      const assistantMessage = {
        role: 'assistant',
        stage1: null,
        stage2: null,
        stage3: null,
        metadata: null,
        loading: {
          stage1: false,
          stage2: false,
          stage3: false,
        },
      };

      setCurrentConversation((prev) => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
      }));

      await api.sendMessageStream(currentConversationId, content, (eventType, event) => {
        switch (eventType) {
          case 'stage1_start':
            setCurrentConversation((prev) => {
              const messages = [...prev.messages];
              const lastMsg = messages[messages.length - 1];
              lastMsg.loading.stage1 = true;
              return { ...prev, messages };
            });
            break;

          case 'stage1_complete':
            setCurrentConversation((prev) => {
              const messages = [...prev.messages];
              const lastMsg = messages[messages.length - 1];
              lastMsg.stage1 = event.data;
              lastMsg.loading.stage1 = false;
              return { ...prev, messages };
            });
            break;

          case 'stage2_start':
            setCurrentConversation((prev) => {
              const messages = [...prev.messages];
              const lastMsg = messages[messages.length - 1];
              lastMsg.loading.stage2 = true;
              return { ...prev, messages };
            });
            break;

          case 'stage2_complete':
            setCurrentConversation((prev) => {
              const messages = [...prev.messages];
              const lastMsg = messages[messages.length - 1];
              lastMsg.stage2 = event.data;
              lastMsg.metadata = event.metadata;
              lastMsg.loading.stage2 = false;
              return { ...prev, messages };
            });
            break;

          case 'stage3_start':
            setCurrentConversation((prev) => {
              const messages = [...prev.messages];
              const lastMsg = messages[messages.length - 1];
              lastMsg.loading.stage3 = true;
              return { ...prev, messages };
            });
            break;

          case 'stage3_complete':
            setCurrentConversation((prev) => {
              const messages = [...prev.messages];
              const lastMsg = messages[messages.length - 1];
              lastMsg.stage3 = event.data;
              lastMsg.loading.stage3 = false;
              return { ...prev, messages };
            });
            break;

          case 'title_complete':
            loadConversations();
            break;

          case 'complete':
            loadConversations();
            setIsLoading(false);
            break;

          case 'error':
            console.error('Stream error:', event.message);
            setIsLoading(false);
            break;

          default:
            console.log('Unknown event type:', eventType);
        }
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      setCurrentConversation((prev) => ({
        ...prev,
        messages: prev.messages.slice(0, -2),
      }));
      setIsLoading(false);
    }
  };

  // Render based on current page
  switch (currentPage) {
    case 'landing':
      return <LandingPage onGetStarted={handleGetStarted} />;

    case 'waitlist':
      return (
        <WaitlistPage
          onBack={handleBackToLanding}
          onSignup={handleShowSignup}
          onLogin={handleShowLogin}
        />
      );

    case 'signup':
      return (
        <SignupPage
          onBack={handleBackToLanding}
          onLogin={handleShowLogin}
        />
      );

    case 'login':
      return (
        <LoginPage
          onBack={handleBackToLanding}
          onSignup={handleShowSignup}
          onLoginSuccess={handleLoginSuccess}
        />
      );

    case 'dashboard':
      return (
        <div className="app">
          <Sidebar
            conversations={conversations}
            currentConversationId={currentConversationId}
            onSelectConversation={handleSelectConversation}
            onNewConversation={handleNewConversation}
            onDeleteConversation={handleDeleteConversation}
            onUpdateTitle={handleUpdateTitle}
          />
          <ChatInterface
            conversation={currentConversation}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
          />
          <ConfirmationDialog
            isOpen={deleteDialogOpen}
            onClose={cancelDeleteConversation}
            onConfirm={confirmDeleteConversation}
            title="Delete Conversation"
            message="Are you sure you want to delete this conversation? This action cannot be undone and all messages will be permanently deleted."
            confirmText="Delete"
            cancelText="Cancel"
          />
        </div>
      );

    default:
      return <LandingPage onGetStarted={handleGetStarted} />;
  }
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
