var questions = ["1. What is the supreme law of the land?",
    "2. What does the Constitution do?",
    "3. The idea of self-government is in the first three words of the Constitution. What are these words?",
    "4. What is an amendment?", "5. What do we call the first ten amendments to the Constitution?",
    "6. What is one right or freedom from the First Amendment?*", "7. How many amendments does the Constitution have?",
    "8. What did the Declaration of Independence do?", "9. What are two rights in the Declaration of Independence?",
    "10. What is freedom of religion?", "11. What is the economic system in the United States?*", "12. What is the “rule of law”?",
    "13. Name one branch or part of the government.*", "14. What stops one branch of government from becoming too powerful?",
    "15. Who is in charge of the executive branch?", "16. Who makes federal laws?",
    "17. What are the two parts of the U.S. Congress?*", "18. How many U.S. Senators are there?",
    "19. We elect a U.S. Senator for how many years?",
    "20. Who is one of your state’s U.S. Senators now?*",
    "21. The House of Representatives has how many voting members?",
    "22. We elect a U.S. Representative for how many years?", "23. Name your U.S. Representative.",
    "24. Who does a U.S. Senator represent?", "25. Why do some states have more Representatives than other states?",
    "26. We elect a President for how many years?", "27. In what month do we vote for President?*",
    "28. What is the name of the President of the United States now?*",
    "29. What is the name of the Vice President of the United States now?",
    "30. If the President can no longer serve, who becomes President?",
    "31. If both the President and the Vice President can no longer serve, who becomes President?",
    "32. Who is the Commander in Chief of the military?", "33. Who signs bills to become laws?",
    "34. Who vetoes bills?", "35. What does the President’s Cabinet do?", "36. What are two Cabinet-level positions?",
    "37. What does the judicial branch do?", "38. What is the highest court in the United States?",
    "39. How many justices are on the Supreme Court?", "40. Who is the Chief Justice of the United States now?",
    "41. Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    "42. Under our Constitution, some powers belong to the states. What is one power of the states?",
    "43. Who is the Governor of your state now?", "44. What is the capital of your state?*",
    "45. What are the two major political parties in the United States?*",
    "46. What is the political party of the President now?", "47. What is the name of the Speaker of the House of Representatives now?",
    "48. There are four amendments to the Constitution about who can vote. Describe one of them.",
    "49. What is one responsibility that is only for United States citizens?*", "50. Name one right only for United States citizens.",
    "51. What are two rights of everyone living in the United States?", "52. What do we show loyalty to when we say the Pledge of Allegiance?",
    "53. What is one promise you make when you become a United States citizen?", "54. How old do citizens have to be to vote for President?*",
    "55. What are two ways that Americans can participate in their democracy?", "56. When is the last day you can send in federal income tax forms?*",
    "57. When must all men register for the Selective Service?", "58. What is one reason colonists came to America?",
    "59. Who lived in America before the Europeans arrived?", "60. What group of people was taken to America and sold as slaves?",
    "61. Why did the colonists fight the British?", "62. Who wrote the Declaration of Independence?",
    "63. When was the Declaration of Independence adopted?", "64. There were 13 original states. Name three.",
    "65. What happened at the Constitutional Convention?", "66. When was the Constitution written?",
    "67. The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    "68. What is one thing Benjamin Franklin is famous for?", "69. Who is the Father of Our Country?",
    "70. Who was the first President?*", "71. What territory did the United States buy from France in 1803?",
    "72. Name one war fought by the United States in the 1800s.", "73. Name the U.S. war between the North and the South.",
    "74. Name one problem that led to the Civil War.", "75. What was one important thing that Abraham Lincoln did?*",
    "76. What did the Emancipation Proclamation do?", "77. What did Susan B. Anthony do?",
    "78. Name one war fought by the United States in the 1900s.*", "79. Who was President during World War I?",
    "80. Who was President during the Great Depression and World War II?", "81. Who did the United States fight in World War II?",
    "82. Before he was President, Eisenhower was a general. What war was he in?",
    "83. During the Cold War, what was the main concern of the United States?",
    "84. What movement tried to end racial discrimination?", "85. What did Martin Luther King, Jr. do?*",
    "86. What major event happened on September 11, 2001, in the United States?",
    "87. Name one American Indian tribe in the United States.", "88. Name one of the two longest rivers in the United States.",
    "89. What ocean is on the West Coast of the United States?", "90. What ocean is on the East Coast of the United States?",
    "91. Name one U.S. territory.", "92. Name one state that borders Canada.", "93. Name one state that borders Mexico.",
    "94. What is the capital of the United States?*", "95. Where is the Statue of Liberty?*",
    "96. Why does the flag have 13 stripes?", "97. Why does the flag have 50 stars?*",
    "98. What is the name of the national anthem?", "99. When do we celebrate Independence Day?*",
    "100. Name two national U.S. holidays."];

var answers = ["the Constitution",
    "- sets up the government <br>- defines the government <br>- protects basic rights of Americans",
    "We the People", "- a change (to the Constitution)<br>- an addition (to the Constitution)",
    "the Bill of Rights", "- speech<br>- religion<br>- assembly<br>- press<br>- petition the government",
    "twenty-seven (27)", "- announced our independence (from Great Britain)<br>- declared our independence (from Great Britain)<br>- said that the United States is free (from Great Britain)",
    "- life<br>- liberty<br>- pursuit of happiness", "You can practice any religion, or not practice a religion.", "- capitalist economy<br>- market economy",
    "- Everyone must follow the law.<br>- Leaders must obey the law.<br>- Government must obey the law.<br>- No one is above the law.",
    "- Congress<br>- legislative<br>- President<br>- executive<br>- the courts<br>- judicial",
    "- checks and balances<br>- separation of powers", "the President",
    "- Congress<br>- Senate and House (of Representatives)<br>- (U.S. or national) legislature", "the Senate and House (of Representatives)", "one hundred (100)", "six (6)",
    "- John Cornyn<br>- Ted Cruz", "four hundred thirty-five (435)", "two (2)",
    "John R. Carter", "all people of the state",
    "- (because of) the state’s population<br>- (because) they have more people<br>- (because) some states have more people", "four (4)", "November", "Donald Trump", "JD Vance",
    "the Vice President", "the Speaker of the House", "the President", "the President", "the President", "advises the President",
    "- Secretary of Agriculture<br>-  Secretary of Commerce<br>-  Secretary of Defense<br>-  Secretary of Education<br>-  Secretary of Energy<br>-  Secretary of Health and Human Service" +
    "<br>-  Secretary of Homeland Security<br>-  Secretary of Housing and Urban Development<br>-  Secretary of the Interior<br>-  Secretary of Labor<br>-  Secretary of State" +
    " <br>-  Secretary of Transportation    <br>-  Secretary of the Treasury<br>-  Secretary of Veterans Affairs<br>-  Attorney General<br>-  Vice President",
    "- reviews laws<br>-  explains laws<br>-  resolves disputes (disagreements)<br>-  decides if a law goes against the Constitution", "the Supreme Court",
    "Nine (9)", "John Roberts", "- to print money<br>- to declare war<br>- to create an army<br>- to make treaties",
    "- provide schooling and education<br>- provide protection (police)<br>- provide safety (fire departments)<br>- give a driver’s license<br>- approve zoning and land use", "Greg Abbott",
    "Austin", "Democratic and Republican", "Republican (Party)", "- Mike Johnson<br>- James Michael Johnson (birth name)",
    "- Citizens eighteen (18) and older (can vote).<br>- You don’t have to pay (a poll tax) to vote.<br>- Any citizen can vote. (Women and men can vote.)<br>- A male citizen of any race (can vote)",
    "- serve on a jury<br>- vote in a federal election", "- vote in a federal election<br>- run for federal office",
    "-  freedom of expression<br>- freedom of speech<br>- freedom of assembly<br>- freedom to petition the government<br>- freedom of religion<br>- the right to bear arms",
    "- the United States<br>- the flag",
    "- give up loyalty to other countries<br>- defend the Constitution and laws of the United States<br>- obey the laws of the United States<br>- serve in the U.S. military (if needed)" +
    "<br>- serve (do important work for) the nation (if needed)<br>- be loyal to the United States", "eighteen (18) and older",
    "- vote<br>- join a political party<br>- help with a campaign<br>- join a civic group<br>-  join a community group<br>-  give an elected official your opinion on an issue" +
    "<br>- call Senators and Representatives<br>- publicly support or oppose an issue or policy<br>- run for office<br>- write to a newspaper", "April 15",
    "- at age eighteen (18)<br>- between eighteen (18) and twenty-six (26)",
    "- freedom<br>- political liberty<br>- religious freedom<br>- economic opportunity<br>- practice their religion<br>- escape persecution",
    "- American Indians<br>- Native Americans", "- Africans<br>- people from Africa",
    "- because of high taxes (taxation without representation)<br>- because the British army stayed in their houses (boarding, quartering)<br>- because they didn’t have self-government",
    "(Thomas) Jefferson", "July 4, 1776",
    "- New Hampshire<br>- Massachusetts<br>- Rhode Island<br>- Connecticut<br>- New York<br>- New Jersey<br>- Pennsylvania<br>- Delaware<br>- Maryland<br>- Virginia<br>- North Carolina" +
    "<br>- South Carolina<br>- Georgia", "- The Constitution was written.<br>- The Founding Fathers wrote the Constitution.", "1787",
    "- (James) Madison<br>- (Alexander) Hamilton<br>- (John) Jay<br>- Publius",
    "- U.S. diplomat<br>-  oldest member of the Constitutional Convention<br>-  first Postmaster General of the United States<br>-  writer of \"Poor Richard’s Almanac\"<br>-  started the first free libraries",
    "(George) Washington", "(George) Washington", "- the Louisiana Territory<br>- Louisiana", "- War of 1812<br>- Mexican-American War<br>- Civil War<br>- Spanish-American War",
    "- the Civil War<br>- the War between the States", "- slavery<br>- economic reasons<br>- states’ rights",
    "- freed the slaves (Emancipation Proclamation)<br>- saved (or preserved) the Union<br>- led the United States during the Civil War",
    "- freed the slaves<br>- freed slaves in the Confederacy<br>- freed slaves in the Confederate states<br>- freed slaves in most Southern states",
    "- fought for women’s rights<br>- fought for civil rights",
    "- World War I<br>- World War II<br>- Korean War<br>- Vietnam War<br>- (Persian) Gulf War", "(Woodrow) Wilson", "(Franklin) Roosevelt", "Japan, Germany, and Italy", "World War II",
    "Communism", "civil rights (movement)", "- fought for civil rights<br>- worked for equality for all Americans", "Terrorists attacked the United States.",
    "- Cherokee<br>- Navajo<br>- Sioux<br>- Chippewa<br>- Choctaw<br>- Pueblo<br>- Apache<br>- Iroquois<br>- Creek<br>- Blackfeet<br>- Seminole<br>- Cheyenne<br>- Arawak<br>- Shawnee<br>- Mohegan" +
    "<br>- Huron<br>- Oneida<br>- Lakota<br>- Crow<br>- Teton<br>- Hopi<br>- Inuit", "- Missouri (River)<br>- Mississippi (River)", "Pacific (Ocean)", "Atlantic (Ocean)",
    "- Puerto Rico<br>- U.S. Virgin Islands<br>- American Samoa<br>- Northern Mariana Islands<br>- Guam",
    "- Maine<br>- New Hampshire<br>- Vermont<br>- New York<br>- Pennsylvania<br>- Ohio<br>- Michigan<br>- Minnesota<br>- North Dakota<br>- Montana<br>- Idaho<br>- Washington<br>- Alaska",
    "- California<br>- Arizona<br>- New Mexico<br>- Texas", "Washington, D.C.", "- New York (Harbor)<br>- Liberty Island<br>- Also acceptable are New Jersey, near New York City, and on the Hudson (River).",
    "- because there were 13 original colonies<br>- because the stripes represent the original colonies",
    "- because there is one star for each state<br>- because each star represents a state<br>- because there are 50 states", "The Star-Spangled Banner", "July 4",
    "- New Year’s Day<br>- Martin Luther King, Jr. Day<br>- Presidents’ Day<br>- Memorial Day<br>- Juneteenth<br>- Independence Day<br>- Labor Day<br>- Columbus Day<br>- Veterans Day<br>- Thanksgiving<br>- Christmas"];

var isQuestionAsked = [];
var question_number = -1;
var askedQuestions = [];
var userAnswers = [];
var askedQuestionIndex = 0;
var previousQuestion = -1;
var nextQuestion = -1;
var min = -1;
var max = -1;

$(document).ready(function () {
    $(".total-questions").hide();
    $('#question-playback').hide();
    $("#completion-dance").hide();
    $('#answer-btn').hide();
    $('#recordButton').hide();
    $('#stopButton').hide();
    $('#previousButton').hide();
    $('#nextButton').hide();
    $('#user-answer').hide();
    $('.playback').hide();
    $('#backButton').hide();
    $("#ask-question-btn").click(function () {
        initializeQuestionsFlags();
        getQuestion();
    });

    $("#answer-btn").click(function () {
        getAnswer();
    });

    $("#previousButton").click(function () {
        getPreviousQuestion();
    });

    $("#nextButton").click(function () {
        getNextQuestion();
    });

    $("#backButton").click(function () {
        $("#ask-question-btn").focus();
    });

    const textarea = document.getElementById('user-answer');

    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto'; // Reset height to recalculate
        textarea.style.height = textarea.scrollHeight + 'px';
    });

    // Set initial height on load
    textarea.style.height = textarea.scrollHeight + 'px';

});



function getQuestion() {
    if (question_number != -1) {
        userAnswers[question_number] = $('#user-answer').val();
    }
    $.ajax({
        type: 'GET',
        url: 'random_number.php',
        data: {
            fno: $("#fno").val(),
            lno: $("#lno").val(),
        },
        success: function (question_no) {
            if (!isQuestionAsked[question_no]) {
                question_number = question_no;
                isQuestionAsked[question_no] = true;
                askedQuestions[askedQuestionIndex] = question_no;
                if (askedQuestionIndex == 0) {
                    $('#previousButton').hide();
                }
                if (askedQuestionIndex > 0) {
                    $('#previousButton').show();
                    previousQuestion = askedQuestionIndex - 1;
                }
                askedQuestionIndex++;
                $(".total-questions").show();
                $(".total-questions #total-no-questions").html(askedQuestionIndex);
                $('#nextButton').hide();
                $('#show-question').html(questions[question_no]);
                $('#show-answer').html('');
                $('#user-answer').val(userAnswers[question_no]);
                $('#user-answer').show();
                $('#answer-btn').show();
                $('#recordButton').show();
                $('#stopButton').show();
                $('.playback').show();
                $('#backButton').show();
                $('textarea').css('height', 'auto');
                $("#completion-dance").hide();
                var temp_question_no = Number(question_no) + 1;
                $('#question-playback').attr('src', 'audio-questions/' + temp_question_no + '.wav');
                $('#question-playback').show();
                $('#question-playback')[0].play();
            }
            else if (checkIfAllQuestionsAreAsked()) {
                question_number = -1;
                $('#show-question').html("You've answered all questions!");
                $('#show-answer').html('');
                $('#user-answer').val('');
                $('#user-answer').hide();
                $('#answer-btn').hide();
                $('#recordButton').hide();
                $('#stopButton').hide();
                $('#previousButton').hide();
                $('#nextButton').hide();
                $('.playback').hide();
                $('#backButton').hide();
                $("#completion-dance").show();
                $('#question-playback').hide();
                $(".total-questions").hide();
                $(".total-questions #total-no-questions").html('');
            }
            else {
                getQuestion();
            }
        },
        error: function (xhr, status, error) {
            // Handle any errors during the AJAX request
            console.error(xhr.responseText);
        }
    });
}


function checkIfAllQuestionsAreAsked() {
    var fno = $("#fno").val();
    var lno = $("#lno").val();
    for (var i = fno - 1; i < lno; i++) {
        if (!isQuestionAsked[i]) {
            return false;
        }
    }
    return true;
}

function getAnswer() {
    if (question_number != -1) {
        $('#show-answer').html("Answer:<br><br>" + answers[question_number]);
        var targetDiv = $('#show-answer');
        var targetPosition = targetDiv.offset().top;
        $('html, body').animate({
            scrollTop: targetPosition
        }, 1000, function () {
            targetDiv.focus(); // Focus on the div
        });
    }
}

function initializeQuestionsFlags() {
    var temp_min = min;
    var temp_max = max;
    min = $("#fno").val();
    max = $("#lno").val();

    if (min < 1 || min > 100 || min === null || typeof min === "undefined") {
        min = 1;
        $("#fno").val(min);
    }

    if (max > 100 || max < 1 || max === null || typeof max === "undefined") {
        max = 100;
        $("#lno").val(max);
    }
    if (temp_min == min && temp_max == max) {
        return;
    }

    askedQuestionIndex = 0;
    previousQuestion = -1;
    nextQuestion = -1;
    question_number = -1;

    for (var i = 0; i < 100; i++) {
        askedQuestions[i] = -1;
        userAnswers[i] = '';
    }

    if (min == 1 && max == 100) {
        for (var i = 0; i < 100; i++) {
            isQuestionAsked[i] = false;
        }
        return;
    }

    if (min > 1) {
        for (var i = min; i >= 0; i--) {
            isQuestionAsked[i] = true;
        }
    }

    for (var i = min - 1; i < max; i++) {
        isQuestionAsked[i] = false;
    }

    if (max < 100) {
        for (var i = max; i < 100; i++) {
            isQuestionAsked[i] = true;
        }
    }

}

function getPreviousQuestion() {
    userAnswers[question_number] = $('#user-answer').val();
    question_number = askedQuestions[previousQuestion];
    $('#show-question').html(questions[question_number]);
    var tempquestion_no = Number(question_number) + 1;
    $('#question-playback').attr('src', 'audio-questions/' + tempquestion_no + '.wav');
    $('#question-playback')[0].play();
    $('#show-answer').html('');
    $('#user-answer').val(userAnswers[question_number]);
    $('textarea').css('height', 'auto');

    if (previousQuestion == (askedQuestionIndex - 1)) {
        nextQuestion = previousQuestion;
        $('#nextButton').hide();
        $('#previousButton').hide();
    }

    if (previousQuestion <= 0) {
        $('#previousButton').hide();
        previousQuestion = 0;
        if ((previousQuestion + 1) <= (askedQuestionIndex - 1)) {
            nextQuestion = previousQuestion + 1;
            $('#nextButton').show();
        }
        return;
    }

    nextQuestion = previousQuestion + 1;
    previousQuestion--;
    $('#previousButton').show();
    $('#nextButton').show();
}

function getNextQuestion() {
    userAnswers[question_number] = $('#user-answer').val();
    question_number = askedQuestions[nextQuestion];
    $('#show-question').html(questions[question_number]);
    var temp_questionno = Number(question_number) + 1;
    $('#question-playback').attr('src', 'audio-questions/' + temp_questionno + '.wav');
    $('#question-playback')[0].play();
    $('#show-answer').html('');
    $('#user-answer').val(userAnswers[question_number]);
    $('textarea').css('height', 'auto');

    if (nextQuestion == (askedQuestionIndex - 1)) {
        $('#nextButton').hide();
        previousQuestion = nextQuestion - 1;
        $('#previousButton').show();
        return;
    }

    if (nextQuestion <= 0) {
        $('#nextButton').hide();
        previousQuestion = 0;
        nextQuestion = 0;
        $('#previousButton').hide();
        return;
    }

    previousQuestion = nextQuestion - 1;
    nextQuestion++;
    $('#previousButton').show();
    $('#nextButton').show();

}
