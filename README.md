# Module 4 Challenge - A Timed Coding Quiz

## Description

This week's challenge for class was to build a polished, timed coding quiz for users to test their coding knowledge. You can see specific requirements below in Acceptance Criteria. This project was challenging but so fun to put together. It allows users to test their coding knowledge against a timer, which decreases time if they answer a question wrong. It keeps track of questions answered correctly to present the user with a final score at the end. It also saves your score to local storage so users can see their scores saved to the highscores html page. One of my biggest challenges in building this was figuring out how to save to local storage without overriding previous scores. I learned so much about building a multi-faceted webpage using JavaScript that ties multiple functions and actions together.  

## User Story

AS A coding bootcamp student  
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores  
SO THAT I can gauge my progress compared to my peers  

## Acceptance Critera

GIVEN I am taking a code quiz  
WHEN I click the start button  
THEN a timer starts and I am presented with a question  
WHEN I answer a question  
THEN I am presented with another question  
WHEN I answer a question incorrectly  
THEN time is subtracted from the clock  
WHEN all questions are answered or the timer reaches 0  
THEN the game is over  
WHEN the game is over  
THEN I can save my initials and score  

## Usage

You can see the published GitHub page here: https://randirose.github.io/week-4-challenge

    ![Screen recording of quiz in action!](assets/screen-recording.webm)

## Credits

- AskBCS on Slack helped with my local storage function in my JavaScript  

## Features

- The quiz automatically deducts 10 seconds when the user answers incorrectly.  
- The quiz will not go into the negative if you answer a question wrong within the last 10 seconds, will just clear the interval right then.  
- It saves all user scores from local storage to a separate html document, highscores.  
- Hover qualities on buttons and use of hidden elements to make for a polished look.  
- Navigation links on all pages to go from highscores, back to quiz, back to highscores, seamlessly.  