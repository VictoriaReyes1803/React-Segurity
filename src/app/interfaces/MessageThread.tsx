'use client';

import React, { useRef, useEffect } from 'react';
import Message from './Message';

const MessageThread = ({ selectedChatId, messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  if (!selectedChatId) {
    return <div className="flex items-center justify-center h-full">Select a chat to start messaging</div>;
  }

  return (
    <div className="message-thread p-4 h-[calc(100vh-200px)] overflow-y-auto">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageThread;