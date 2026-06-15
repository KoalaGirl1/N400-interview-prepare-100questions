<!DOCTYPE html>
<html>
    <head>
        <title>N400 interview prepare: 100 questions</title>
        <script src="jquery.min.js"></script>
        <script src="questions.js" defer></script>
        
        <style>

                body {
                display: flex;
                justify-content: center; /* Center horizontally */
                align-items: center;   /* Center vertically */
                margin: 0;             /* Remove default body margin */
                }   
                
                input{
                  margin: 10px 5px;
                }
                button {
                  margin: 10px 5px;
                }
                .fuchsia-btn {
                    background-color: #FF00FF;
                }
                .red-btn {
                    background-color: #B22222;
                }                
                .goldenrod-btn {
                    background-color: #DAA520;
                }
                .blueviolet-btn {
                   background-color: #8A2BE2;
                }
                .green-btn {
                    background-color: #4CAF50; /* Green background */
                }
                .indigo-btn{
                   background-color:  #4B0082;
                }
                .olive-btn {
                   background-color:  #808000; 
                }
                .stylish-button {                   
                    color: white; /* White text */
                    padding: 15px 30px; /* Spacing inside the button */
                    border: none; /* No border */
                    border-radius: 8px; /* Rounded corners */
                    font-family: Arial, sans-serif; /* Font style */
                    font-size: 20px; /* Font size */
                    font-weight: bold;
                    cursor: pointer; /* Change cursor on hover */
                    transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transitions */
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
                }

                .stylish-button:hover {
                    transform: translateY(-2px); /* Slight lift on hover */
                    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
                }

                .stylish-button:active {
                    transform: translateY(0); /* Return to original position when clicked */
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Reduced shadow when clicked */
                } 
                
                .container {
                    background-color: #4169E1;
                    color: white;
                    padding: 50px;
                    width: 80%;
                }

                .US-logo {
                    float: left;
                    margin-top: -195px;
                    margin-left: 58%;
                    width: 150px;
                    height: auto;
                }

                .logo {
                    float: left;
                    margin-top: -215px;
                    margin-left: 75%;
                    border: 10px solid #FFB6C1;
                }

                #show-question{
                    font-weight: bold;
                }
                #show-answer,
                #show-question {
                    margin-top: 20px;
                    margin-bottom: 20px;
                    font-size: 25px;
                }

                #user-answer {
                    font-size: 25px;
                    width: 90%;  
                    min-height: 5em;                    
                }

                #startButton { 
                    margin-right: 10px;
                }

                .inactive {
                    background-color: #eee !important;
                    color: #666 !important;
                    cursor: default !important;
                }

                .total-questions {
                    font-size: 20px;
                }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>N400 interview prepare: 100 questions</h1>
            <form>
                <label for="fno">First number:</label>
                <input type="text" id="fno" name="fno">
                <label for="lno">Last number:</label>
                <input type="text" id="lno" name="lno">                
                <div>
                    <input type="button" id="ask-question-btn" class="stylish-button green-btn" value="Ask question">
                    <input type="button" id="previousButton" class="stylish-button blueviolet-btn" value="Previous" >
	                <input type="button" id="nextButton" class="stylish-button goldenrod-btn" value="Next" >    
                </div>
            </form> 
            <div class="total-questions">Total no of questions asked: <span id="total-no-questions" > </span></div>
            <img class="US-logo" src="images/Flag_of_the_United_States.png" />
            <div id="show-question"></div><div><audio src="audio-questions/1.wav" controls id="question-playback" class="hidden"></audio></div>
            <div class="audio-record" >
                <button id="recordButton" class="stylish-button red-btn"  >Start recording</button>
	            <button id="stopButton" class="stylish-button  fuchsia-btn inactive">Stop recording</button>                
            </div>
            <div class="playback">
                <audio src="" controls id="audio-playback" class="hidden"></audio>
            </div>      
            <div><input type="button" id="answer-btn" class="stylish-button indigo-btn" value="Show answer"></div>  
            <textarea id="user-answer" name="user_answer"></textarea>
            <div id="show-answer"></div>
            <div><input type="button" id="backButton" class="stylish-button olive-btn" value="Go back to ask question" ></div>
            <div id="completion-dance" >
                <img src="images/Eagle.jpg" />
            </div>            
          </div>
          <script src="manage-audio.js" ></script>          
    </body>
</html> 
