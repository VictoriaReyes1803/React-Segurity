import React from 'react';
import ChatList from './interfaces/ChatList';
import MessageThread from './interfaces/MessageThread';
function App() {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <ChatList />
        <MessageThread messages={undefined} />
      </div>
    </div>
  );
}

export default App;