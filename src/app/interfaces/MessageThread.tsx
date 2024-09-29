'use client';

import React, { useRef, useEffect } from 'react';
import Message from './Message';
import mockMessages from './mockMessages';

const MessageThread = () => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [mockMessages]);

  return (
    <div className="message-thread p-4 h-[calc(100vh-200px)] overflow-y-auto">
      {mockMessages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageThread;