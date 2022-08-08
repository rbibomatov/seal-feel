let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        message: "Я тюлень и мне лень!",
        likesCount: 1,
        dislikeCount: 1,
      },
      {
        id: 2,
        message: "Поел очень вкусную рыбу.",
        likesCount: 1,
        dislikeCount: 1,
      },
      { id: 3, message: "Лежал. Устал.", likesCount: 1, dislikeCount: 1 },
      { id: 4, message: "Я IT-тюлень.", likesCount: 1, dislikeCount: 1 },
      { id: 5, message: "Ихихихихи.", likesCount: 1, dislikeCount: 1 },
    ],
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: "Диана" },
      { id: 2, name: "Кристина" },
      { id: 3, name: "Даня" },
      { id: 4, name: "Дианазавр" },
      { id: 5, name: "Ди" },
      { id: 6, name: "Даша" },
    ],
    messages: [
      { id: 1, message: "Халло" },
      { id: 2, message: "Хаю а ю" },
      { id: 3, message: "Нормес" },
    ],
  },
};

export default state;
