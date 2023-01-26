

// EVENT L ON THE START BUTTON -----------------------------------

// REMOVING START PAGE
$('#start-button').click(function() {
    $('#start-screen').fadeOut()
    $('.scores').fadeOut()
    $('.timer').fadeIn();

// CHANGE BACKGROUND IMAGE
    var imageUrl = "assets/images/stars.jpeg";
    $('body').css("background-image", "url(" + imageUrl + ")").fadeIn()

// UNHIDE QUESTION DIV
$('#questions').show()

// START THE COUNTDOWN
countdown();

questions()
});
// EVENT L ON THE START BUTTON (end) -----------------------------------


// EVENT L ON THE LIST ITEMS -----------------------------------
$('#choices').on('click', 'li', function() {
    questionCheck(this);

});
// EVENT L ON THE LIST ITEMS (end) -----------------------------------




// CURRENT QUESTION
var currentQNum = 0


// QUESTIONS FOR USERS
function questions() {
    
    // Parse .question (child to questionData) into questionTitle
    $("#question-title").html(questionData[currentQNum].question);
    
    $("#choices ul").append("<li>" + questionData[currentQNum].possibleAnswers[0] + "</li>");
    $("#choices ul").append("<li>" + questionData[currentQNum].possibleAnswers[1] + "</li>");
    $("#choices ul").append("<li>" + questionData[currentQNum].possibleAnswers[2] + "</li>");
    $("#choices ul").append("<li>" + questionData[currentQNum].possibleAnswers[3] + "</li>");
    
}

let clockStart = 60;
let sec = clockStart;
let timer;

// START THE COUNTDOWN
function countdown() {
    sec = clockStart;
    timer = setInterval(() => {
        if (sec > 0) {
            $('#time').html(sec + ' sec');
            sec--;
        } else {
            clearInterval(timer);
        }
    }, 1000);
}

// REDUCE THE COUNTDOWN ON WRONG ANSWER
function reduceCountdown() {
    if (sec > 10) { // remove > after
        sec -= 10;
    }
}

// CHANGE THE QUESTION
function changeQ() {
    if (currentQNum != 9) {
        currentQNum++
    } 
}


// QUESTION VALIDATOR
function questionCheck(listItem) {
    
    var clickedItemValue = $(listItem).text();
    
    console.log("Answer should match: " + questionData[currentQNum].answer)
    
    if (clickedItemValue == questionData[currentQNum].answer) {
        $(listItem).css("background-color", "#32de84"); // colour the li green if correct
        // changeQ()
    } else {
        $(listItem).css("background-color", "red");
        // changeQ()
        reduceCountdown()
        
    }
}





// DATA SOURCE
var questionData = [
    {
        question: "How can you check if a variable is an array?",
        possibleAnswers: ["variable.isArray()", "Array.isArray(variable)", "variable instanceof Array", "typeof variable === 'array'"],
        answer: "Array.isArray(variable)",
    },

    {
        question: "What is the difference between == and === ?",
        possibleAnswers: ["== compares values, === compares values and types", "== compares types, === compares values", "== compares values and types, === compares values", "There is no difference between the two"],
        answer: "== compares values, === compares values and types",
    },

    {
        question: "How do you set a variable to undefined?",
        possibleAnswers: ["variable = null", "variable = undefined", 'variable = ""', "variable = NaN"],
        answer: "variable = undefined",
    },

    {
        question: "What is the difference between var, let, and const?",
        possibleAnswers: ["var is global scope, let is block scope, const is constant", "var is function scope, let is block scope, const is constant", "var is function scope, let is global scope, const is constant", "var is block scope, let is function scope, const is constant"],
        answer: "var is function scope, let is block scope, const is constant",
    },

    {
        question: "How can you check if a string is empty?",
        possibleAnswers: ["string.isEmpty()", "string.length === 0", "string === ''", "string == null"],
        answer: "string.length === 0",
    },

    {
        question: "How can you create a copy of an array?",
        possibleAnswers: ["array.clone()", "array.copy()", "array.slice()", "[...array]"],
        answer: "[...array]",
    },

    {
        question: "What is the correct way to increment a variable?",
        possibleAnswers: ["x = x + 1", "x += 1", "x++", "x = x++"],
        answer: "x++",
    },
    
    {
        question: "How can you remove an element from the end of an array?",
        possibleAnswers: ["array.pop()", "array.remove()", "array.splice(-1, 1)", "array[array.length - 1] = null"],
        answer: "array.pop()",
    },

    {
        question: "How can you reverse the order of an array?",
        possibleAnswers: ["array.reverse()", "array.flip()", "array.invert()", "There is no built-in function to reverse an array in JavaScript"],
        answer: "array.reverse()",
    },

    {
        question: "What is the correct way to write an object?",
        possibleAnswers: ['var person = {firstName:"John", lastName:"Doe"};', 'var person = "firstName:John, lastName:Doe"', 'var person = (firstName:"John", lastName:"Doe")', 'var person = "firstName=John lastName=Doe"'],
        answer: 'var person = {firstName:"John", lastName:"Doe"};',
    },
]
