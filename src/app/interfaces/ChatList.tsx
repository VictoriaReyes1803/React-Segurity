import React from 'react';

const mockChats = [
  { id: 1, name: "Alice Johnson", avatar: "/avatar1.png", lastMessage: "Hey, how's it going?", timestamp: "10:30 AM", unread: 2 },
  { id: 2, name: "Bob Smith", avatar: "/avatar2.png", lastMessage: "Did you see the new movie?", timestamp: "Yesterday", unread: 0 },
  { id: 3, name: "Carol White", avatar: "/avatar3.png", lastMessage: "Meeting at 3 PM", timestamp: "Mon", unread: 1 },
  { id: 4, name: "David Brown", avatar: "/avatar4.png", lastMessage: "Thanks for your help!", timestamp: "Tue", unread: 0 },
];

const ChatList = () => {
  return (
    <div className="bg-base-200 w-80 h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Chats</h2>
      <ul className="menu bg-base-100 w-full rounded-box">
        {mockChats.map((chat) => (
          <li key={chat.id}>
            <a className="flex items-center p-3 hover:bg-base-200 transition-colors duration-200">
              <div className="avatar online mr-4">
                <div className="w-12 rounded-full">
                  <img src={chat.avatar} alt={chat.name} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold">{chat.name}</h3>
                  <span className="text-xs text-base-content/70">{chat.timestamp}</span>
                </div>
                <p className="text-sm text-base-content/70 truncate">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <div className="badge badge-primary badge-sm">{chat.unread}</div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;