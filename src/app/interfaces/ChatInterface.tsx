'use client';

import React, { useState } from 'react';
import ChatList from './ChatList';
import MessageThread from './MessageThread';

const mockMessages = {
  1: [
    { id: 1, content: "Hey, how's it going?", timestamp: "2023-09-29T10:30:00Z", isMine: false, sender: "Alice Johnson" },
    { id: 2, content: "I'm doing well, thanks! How about you?", timestamp: "2023-09-29T10:32:00Z", isMine: true, sender: "You" },
  ],
  2: [
    { id: 1, content: "Did you see the new movie?", timestamp: "2023-09-28T15:45:00Z", isMine: false, sender: "Bob Smith" },
    { id: 2, content: "Not yet, is it good?", timestamp: "2023-09-28T16:00:00Z", isMine: true, sender: "You" },
  ],
  // Add mock messages for other chats as needed
};

const ChatInterface = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
  };

  return (
    <div className="flex h-screen">
      <ChatList onSelectChat={handleSelectChat} selectedChatId={selectedChatId} />
      <div className="flex-1">
        <MessageThread selectedChatId={selectedChatId} messages={mockMessages[selectedChatId] || []} />
      </div>
    </div>
  );
};

export default ChatInterface;