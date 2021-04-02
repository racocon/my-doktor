export default {
  id: "1",
  users: [
    {
      id: "u1",
      name: "Dee",
    },
    {
      id: "u2",
      name: "Dr. Iqbal",
    },
  ],
  messages: [
    {
      id: "m1",
      content: "Hello and welcome! What can I do for you?",
      createdAt: "2020-10-10T12:48:00.000Z",
      user: {
        id: "u2",
        name: "Dr. Iqbal",
      },
    },
    {
      id: "m2",
      content: "Hello there! I have a few questions regarding my sinusitis.",
      createdAt: "2020-10-03T14:49:00.000Z",
      user: {
        id: "u1",
        name: "Dee",
      },
    },
    {
      id: "m3",
      content:
        "Alright, may I know your symptoms? Do you have any pain or fever?",
      createdAt: "2020-10-03T14:49:40.000Z",
      user: {
        id: "u2",
        name: "Dr. Iqbal",
      },
    },
    {
      id: "m4",
      content: "I have a slight sinus pain, a fever, and a stuffy nose.",
      createdAt: "2020-10-03T14:50:00.000Z",
      user: {
        id: "u1",
        name: "Dee",
      },
    },
    {
      id: "m5",
      content: "Have you had any vision changes?",
      createdAt: "2020-10-03T14:51:00.000Z",
      user: {
        id: "u2",
        name: "Dr. Iqbal",
      },
    },
    {
      id: "m6",
      content: "I don't think so. What should I look out for with my vision?",
      createdAt: "2020-10-03T14:52:00.000Z",
      user: {
        id: "u1",
        name: "Dee",
      },
    },
    {
      id: "m7",
      content:
        "I am also having a slight cough. Is it possible that I might have COVID?",
      createdAt: "2020-10-03T14:53:00.000Z",
      user: {
        id: "u1",
        name: "Dee",
      },
    },
  ],
};
