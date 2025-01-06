// const big = confirm('Is it big say?');
// const livesInWater = confirm('Does it live in water?');
// if(big && livesInWater){
//     alert('Your favorite animal is a whale!');
// }
//     else if(big && !livesInWater){
//         alert('Your favorite animal is an elephant!');
//     }
//     else if(!big && livesInWater){
//         alert('Your favorite animal is a fish!');
//         }
//         else if(!big && !livesInWater){
//             alert('Your favorite animal is a mouse!');
//         }
//         else {
//             alert('Your favorite animal is a mouse!');
//             }

const player = prompt('Choose rock, paper or scissors').toLowerCase().trim();``
const number = Math.ceil(3*Math.random());
let computer;
switch(number){
case 1:
computer = 'rock'; break;
case 2:
computer = 'paper'; break;
case 3:
computer ='scissors';
}
if (player === computer){
    alert(`It was a draw, we both chose ${player}`);
    }
    else if(player==='rock' && computer==='scissors'
||
player==='paper' && computer==='rock'
||
player==='scissors' && computer==='paper'){
alert(`You win! ${player} always beats ${computer}!`)}
else {
    alert(`You lose! ${player} will never beat ${computer}!`);
    }