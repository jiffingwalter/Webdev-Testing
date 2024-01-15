// dice roller logic
function rollDice(){
    const numOfDice = document.getElementById("inputNum").value;
    const diceResult = document.getElementById("diceResult");
    const diceRolls = document.getElementById("diceRolls");
    const values = [];
    const dice = [];

    for (let i=0;i<numOfDice;i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        dice.push(getDice(value));
    }

    diceResult.innerHTML = `Dice: ${values.join(', ')}<br>Total: ${getTotal(values)}` ;
    diceRolls.innerHTML = dice.join('');
}

// get total value of dice
function getTotal(values){
    let num = 0;
    values.forEach((element) => {
        num += element;
    });
    return num;
}

// returns html content for dice set to the given number
function getDice(num){
    switch(num){
        case 1:
            num = 'one';
            break;
        case 2:
            num = 'two';
            break;
        case 3:
            num = 'three';
            break;
        case 4:
            num = 'four';
            break;
        case 5:
            num = 'five';
            break;
        case 6:
            num = 'six';
            break;
        default:
            console.log('Got invalid value in getDice function')
    }
    let output = `<div class="die ${num}"> 
                    <div class="top-row">
                        <div class="one"><div class="dot">⚫</div></div>
                        <div class="two"><div class="dot">⚫</div></div>
                        <div class="three"><div class="dot">⚫</div></div>
                    </div>
                    <div class="mid-row">
                        <div class="four"><div class="dot">⚫</div></div>
                        <div class="five"><div class="dot">⚫</div></div>
                        <div class="six"><div class="dot">⚫</div></div>
                    </div>
                    <div class="bot-row">
                        <div class="seven"><div class="dot">⚫</div></div>
                        <div class="eight"><div class="dot">⚫</div></div>
                        <div class="nine"><div class="dot">⚫</div></div>
                    </div>
                </div>`;
    return output;
}