const currentTime = new Date();

const mockMessages = [
  {
    id: 1,
    content: "Hey there! How's it going?",
    timestamp: new Date(currentTime.getTime() - 30 * 60000).toISOString(),
    isMine: false,
    sender: "Alice",
  },
  {
    id: 2,
    content: "Hi Alice! I'm doing well, thanks for asking. How about you?",
    timestamp: new Date(currentTime.getTime() - 28 * 60000).toISOString(),
    isMine: true,
    sender: "You",
  },
  // ... (remaining messages)
];

export default mockMessages;