'use client';

import React from 'react';

const Message = ({ message }) => {
  const { content, timestamp, isMine, sender } = message;
  
  const messageClass = isMine 
    ? 'chat-end' 
    : 'chat-start';
  
  const bubbleClass = isMine
    ? 'chat-bubble chat-bubble-primary'
    : 'chat-bubble chat-bubble-secondary';

  // Format the timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`chat ${messageClass}`}>
      <div className="chat-header">
        {sender}
      </div>
      <div className={bubbleClass}>
        <p>{content}</p>
        <time className="text-xs opacity-50">
          {formatTimestamp(timestamp)}
        </time>
      </div>
    </div>
  );
};

export default Message;