const dice_one = '<div class="dice-1"></div>';
const dice_two = '<div class="dice-2a"></div><div class="dice-2b"></div>';
const dice_three = '<div class="dice-3a"></div><div class="dice-3b"></div><div class="dice-3c"></div>';
const dice_four = '<div class="dice-4a"></div><div class="dice-4b"></div><div class="dice-4c"></div><div class="dice-4d"></div>';
const dice_five = '<div class="dice-5a"></div><div class="dice-5b"></div><div class="dice-5c"></div><div class="dice-5d"></div><div class="dice-1"></div>';
const dice_six = '<div class="dice-6a"></div><div class="dice-6b"></div><div class="dice-6c"></div><div class="dice-6d"></div><div class="dice-6e"></div><div class="dice-6f"></div>';

let User = document.getElementById('User_choice');
let PC = document.getElementById('IA_choice');
let rollDice = document.getElementById('dice_roll')

rollDice.addEventListener('click', function () {
    let PCoption = Math.ceil(Math.random() * 6);
    let USERoption = Math.ceil(Math.random() * 6);
    let result = document.getElementById('end_game')
    console.log(result);
    if (PCoption < USERoption) {
        result.innerHTML = 'You Win!!!';
        console.log(result);
    } else if (PCoption == USERoption) {
        result.innerHTML = 'Game ended in a tie.'
    } else {
        result.innerHTML = 'You Lose, try again..'
    }

    switch (PCoption) {
        case 1:
            PC.innerHTML = dice_one;
            break;

        case 2:
            PC.innerHTML = dice_two;
            break;

        case 3:
            PC.innerHTML = dice_three;
            break;

        case 4:
            PC.innerHTML = dice_four;
            break;

        case 5:
            PC.innerHTML = dice_five;
            break;

        case 6:
            PC.innerHTML = dice_six;
            break;
    }

    switch (USERoption) {
        case 1:
            User.innerHTML = dice_one;
            break;

        case 2:
            User.innerHTML = dice_two;
            break;

        case 3:
            User.innerHTML = dice_three;
            break;

        case 4:
            User.innerHTML = dice_four;
            break;

        case 5:
            User.innerHTML = dice_five;
            break;

        case 6:
            User.innerHTML = dice_six;
            break;
    }
})