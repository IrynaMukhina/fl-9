let startQuestion = confirm('Do you want to play a game?');

let condition = {
    max_random: 5,
    attempt: 3,
    prize: 10,
    current_prize: 10,
    win_amount: 0,
    total_prize: 0
}

let userMessage = (random, attempt, prize, current) =>
'Enter a number from 0 to ' + random +
'\nAttempts left: ' + attempt +
'\nTotal prize: ' + prize + '$' +
'\nPosible on current attempt: ' + Math.floor(current);

function newGame() {
    for(condition.attempt; condition.attempt > 0;) {
        let one = 1;
        let randomNumber = Math.floor(Math.random() * (condition.max_random + one));
        let playAction = +prompt(userMessage(condition.max_random, condition.attempt, 
            condition.win_amount, condition.current_prize));
        if (randomNumber === playAction) {
            condition.win_amount += Math.floor(condition.current_prize);
            let userAlert = confirm('Congratulation! Your prize is: ' + condition.win_amount + '$' +
            ' . Do you want to continue?');
            if (userAlert) {
                condition.max_random *= 2;
                condition.prize *= 3;
                condition.attempt = 3;
                condition.current_prize = condition.prize;
            } else {
                replay();
                break;
            }
        } else {
            condition.attempt --;
            condition.current_prize /= 2;

            if (condition.attempt === 0) {
                replay();
            }
        }
    }
}

function replay() {
    alert('Thank you for a game. Your prize is: ' + condition.win_amount) + '$';
    let tryAgain = confirm('Do you want to play again?');
    if (tryAgain) {
        condition.attempt = 3;
        condition.win_amount = 0;
        condition.prize = 10;
        condition.current_prize = 10;
        condition.max_random = 5;
    } else {
        alert('You did not become a millionaire, but can.');
    }
}

if (startQuestion) {
    newGame();    
} else {
    alert('You did not become a millionaire, but can.');
}
