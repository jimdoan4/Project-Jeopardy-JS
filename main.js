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
$(function() {
  $(".box").click(function() {
    $(this).addClass("disabled");
    $(this).remove();
    });
});

