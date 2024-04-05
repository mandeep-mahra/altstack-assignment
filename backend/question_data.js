const questions = [
  {
    id: 1,
    question: "What does the term 'Node.js' refer to?",
    options: [
      { id: 'A', text: "A web browser" },
      { id: 'B', text: "A JavaScript runtime built on Chrome's V8 JavaScript engine" },
      { id: 'C', text: "A relational database management system" },
      { id: 'D', text: "An operating system" }
    ]
  },
  {
    id: 2,
    question: "Which module in Node.js is commonly used for building web servers?",
    options: [
      { id: 'A', text: "fs" },
      { id: 'B', text: "http" },
      { id: 'C', text: "path" },
      { id: 'D', text: "os" }
    ]
  },
  {
    id: 3,
    question: "Which of the following statements about Node.js is true?",
    options: [
      { id: 'A', text: "Node.js is single-threaded, which means it can't handle concurrent requests." },
      { id: 'B', text: "Node.js is primarily used for client-side scripting." },
      { id: 'C', text: "Node.js provides a non-blocking, event-driven architecture." },
      { id: 'D', text: "Node.js is only compatible with MongoDB as a database." }
    ]
  },
  {
    id: 4,
    question: "What is npm?",
    options: [
      { id: 'A', text: "Node Package Module" },
      { id: 'B', text: "Node Programming Module" },
      { id: 'C', text: "Node Project Manager" },
      { id: 'D', text: "Node Package Manager" }
    ]
  },
  {
    id: 5,
    question: "Which command is used to initialize a Node.js project?",
    options: [
      { id: 'A', text: "npm start" },
      { id: 'B', text: "node init" },
      { id: 'C', text: "npm init" },
      { id: 'D', text: "node start" }
    ]
  },
  {
    id: 6,
    question: "What is the purpose of the `require()` function in Node.js?",
    options: [
      { id: 'A', text: "To execute a JavaScript file" },
      { id: 'B', text: "To define a new variable" },
      { id: 'C', text: "To include modules" },
      { id: 'D', text: "To create a new Node.js process" }
    ]
  },
  {
    id: 7,
    question: "Which event is emitted when an unhandled exception occurs in a Node.js application?",
    options: [
      { id: 'A', text: "error" },
      { id: 'B', text: "exception" },
      { id: 'C', text: "unhandledException" },
      { id: 'D', text: "crash" }
    ]
  },
  {
    id: 8,
    question: "What is the purpose of the `Buffer` class in Node.js?",
    options: [
      { id: 'A', text: "To manipulate strings" },
      { id: 'B', text: "To read and write files" },
      { id: 'C', text: "To handle binary data" },
      { id: 'D', text: "To define custom data types" }
    ]
  },
  {
    id: 9,
    question: "Which of the following is a built-in module for working with file system operations in Node.js?",
    options: [
      { id: 'A', text: "http" },
      { id: 'B', text: "fs" },
      { id: 'C', text: "url" },
      { id: 'D', text: "path" }
    ]
  },
  {
    id: 10,
    question: "Which of the following methods is used to include external middleware in an Express.js application?",
    options: [
      { id: 'A', text: "app.use()" },
      { id: 'B', text: "app.include()" },
      { id: 'C', text: "app.middleware()" },
      { id: 'D', text: "app.mount()" }
    ]
  }
];

const correctOptions = {
  1: 'B',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'C',
  6: 'C',
  7: 'A',
  8: 'C',
  9: 'B',
  10: 'A',
};

module.exports = {correctOptions, questions};
