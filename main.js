var questions = [
  // HTML Category 1 Questions 
  {
    prompt: 'What is the expansion of HTML?',
    options: ['Hyper Text Markup Language', 'Holding Text Marker Language', 'Hyperlink Text Management Language', 'Holding Text Modal Language'],
    correctAnswer: 'Hyper Text Markup Language',
    points: 10
  },
  {
    prompt: 'What is the current version of HTML?',
    options: ['HTMLv5.1', 'HTML5', 'HTML2016', 'HTMLC'],
    correctAnswer: 'HTML5',
    points: 50
  },
  {
    prompt: 'How to apply Hyperlink in an HTML page?',
    options: ['<ahref> tag', '<p> tag', '<input> tag', '<h1> tag'],
    correctAnswer: '<ahref> tag',
    points: 100
  },
  {
    prompt: 'What are the storage types of HTML5?',
    options: ['Session Storage', 'Main Storage', 'Varied Storage', 'Storage Notation'],
    correctAnswer: 'Session Storage',
    points: 500
  },
  {
    prompt: 'HTML is the principal source for attributes of Nodes in the DOM. Browsers do not usually allow cross-site actions but there is one major exception:',
    options: ['Get Requests', 'Ping Commands', 'iFrames', 'XSS '],
    correctAnswer: 'iFrames',
    points: 1000
  },
  // CSS Category 2 Questions 
  {
    prompt: 'What is the expansion of CSS?',
    options: ['Cascading Style Sheets', 'Central Style Server', 'Control Set Styles', 'C Safe Server'],
    correctAnswer: 'Cascading Style Sheets',
    points: 10
  },
  {
    prompt: 'The "<Span> </Span>" has what kind of default property?',
    options: ['set-length', 'block', 'timestamp', 'inline'],
    correctAnswer: 'inline',
    points: 50
  },
  {
    prompt: 'The * selector applies to what?',
    options: ['Everything', 'Wildcard elements', 'Multiplication Functions', 'Elements with the Id of *'],
    correctAnswer: 'Everything',
    points: 100
  },
  {
    prompt: 'What feature recently introduced in CSS 3 addresses issues with "floats"?',
    options: ['Center Flagpoints', 'Flexbox', 'Flexpoints', 'FloatV2.0'],
    correctAnswer: 'Flexbox',
    points: 500
  },
  {
    prompt: 'CSS is hard. What is one feature that makes it hard compared to other languages? ',
    options: ['Lack of Case Examples', 'No Error Output', 'Inclusion of complex variable functions', 'Lack of documentation'],
    correctAnswer: 'No Error Output',
    points: 1000
  },
  // JAVASCRIPT Category 3 Questions 
  {
    prompt: 'Which is a coding language or library not relevant to modern Javascript?',
    options: ['Java', 'ECMAScript', 'Ajax', 'JQuery'],
    correctAnswer: 'Java',
    points: 10
  },
  {
    prompt: 'Javascript is usually described as a " "-based language?',
    options: ['Relational', 'COBOL', 'Object', 'Directional'],
    correctAnswer: 'Object',
    points: 50
  },
  {
    prompt: 'JSON is: ',
    options: ['A Javascript engine', 'A text format readable by Javascript', 'A Javascript library', 'A Javascript function'],
    correctAnswer: 'A text format readable by Javascript',
    points: 100
  },
  {
    prompt: 'Angular JS is an example of:',
    options: ['A JS Framework', 'an open-source, cross-platform runtime environment for developing server-side web applications', 'A JS library', 'An AJAX library'],
    correctAnswer: 'A JS Framework',
    points: 500
  },
  {
    prompt: 'Imagine one hundred Samurai are standing in a circle each holding a sword. The first samurai kills the samurai next to them (the second).  The third Samurai then kills the forth Samurai and this process of Samurai killing the Samurai directly next to them continues until there is only one Samurai left standing at the end. You write a JS program with these Samurai in an Array and use functions to determine which of the Samurai will be the last one alive. What JS functions are required to do this?',
    options: ['For Loop, If Else Function, Array Shift, Array Splice', 'Fizzbuzz, Else Statements', 'Loop Functions with Calculator Integers', 'Array Reduce'],
    correctAnswer: 'For Loop, If Else Function, Array Shift, Array Splice',
    points: 1000
  },
  // REACT Category 4 Questions 
  {
    prompt: 'What is React?',
    options: ['React is a front-end JavaScript library developed by Facebook in 2011.', 'Read-Eval-Print-Loop', 'C++ Library Object', 'Skynet'],
    correctAnswer: 'React is a front-end JavaScript library developed by Facebook in 2011.',
    points: 10
  },
  {
    prompt: 'What are the limitations of React?',
    options: ['Using React, writing UI test cases become extremely easy', 'React is easy to integrate with other frameworks like Meteor, Angular, etc', 'Coding gets complex as it uses inline templating and JSX', 'Ubuntu'],
    correctAnswer: 'Coding gets complex as it uses inline templating and JSX',
    points: 50
  },
  {
    prompt: 'Why can’t browsers read JSX?',
    options: ['Bring up the task manager for x', 'Modularize x', 'Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.', 'Make x mandatory on startup'],
    correctAnswer: 'Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.',
    points: 100
  },
  {
    prompt: 'Explain the purpose of render() in React?',
    options: ['Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked.', 'Rename your file register', 'Recursively rename all your files with the tag rm', 'Irreparably damage your file system'],
    correctAnswer: 'Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked.',
    points: 500
  },
  {
    prompt: 'What is Props?',
    options: ['Quickly search files for specific items of text', 'They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. ', 'Gauge RAM event parameters', 'Group related events in the processor'],
    correctAnswer: 'They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. ',
    points: 1000
  },
  // MONGODB Category 5 Questions 
  {
    prompt: 'What is “Namespace” in MongoDB?',
    options: ['The concatenation of the collection name and database name.', 'Document database which provides high performance, high availability and easy scalability.', 'Following are frequently asked questions in interviews for freshers as well experienced developer.', 'Syntax to create collection in MongoDB is db.createCollection(name,options)'],
    correctAnswer: 'The concatenation of the collection name and database name.',
    points: 10
  },
  {
    prompt: 'While creating Schema in MongoDB what are the points need to be taken in consideration?',
    options: ['Combine objects into one document if you use them together. Otherwise, separate them', 'Syntax to create collection in MongoDB is db.createCollection(name,options)', 'General-Index-Tracker', 'A Revision Editor'],
    correctAnswer: 'Combine objects into one document if you use them together. Otherwise, separate them',
    points: 50
  },
  {
    prompt: 'What is Objecld composed of?',
    options: ['ECMAScript', 'Timestamp', 'HTML3', 'WavMLE'],
    correctAnswer: 'Timestamp',
    points: 100
  },
  {
    prompt: 'Explain what are indexes in MongoDB?',
    options: ['Special structures in MongoDB, which stores a small portion of the data set in an easy to traverse form. Ordered by the value of the field specified in the index, the index stores the value of a specific field or set of fields.', 'Angular', 'JQuery', 'Whitespace'],
    correctAnswer: 'Special structures in MongoDB, which stores a small portion of the data set in an easy to traverse form. Ordered by the value of the field specified in the index, the index stores the value of a specific field or set of fields.',
    points: 500
  },
  {
    prompt: 'Explain what is GridFS in MongoDB?',
    options: ['The basic syntax to use in MongoDB is >db.COLLECTION_NAME.ensureIndex ( {KEY:1} ). In here the key is the the name of the COLUMN (or KEY:VALUE pair) which is present in the documents.', 'Telnet', 'For storing and retrieving large files such as images, video files and audio files GridFS is used. By default, it uses two files fs.files and fs.chunks to store the file’s metadata and the chunks.', 'C--'],
    correctAnswer: 'For storing and retrieving large files such as images, video files and audio files GridFS is used. By default, it uses two files fs.files and fs.chunks to store the file’s metadata and the chunks.',
    points: 1000
  }
];

// Initializing the score at 0
var score = 0;

// Hide the Modal after clicking SUBMIT button
$(function () {
  $("#hide-modal").click(function () {
    $("#myModal").modal("hide");
  });
});

// Hiding/Removing Element when SUBMIT button is clicked
$(function () {
  $(".box").click(function () {
    $(this).addClass("disabled");
    $(this).remove();
  });
});