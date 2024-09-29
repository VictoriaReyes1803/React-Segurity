// Message.jsx
import React from 'react';

function Message({ message }) {
  return (
    <div className={`message ${message.isMine ? 'message-mine' : 'message-other'}`}>
      {message.content}
    </div>
  );
}

export default Message;