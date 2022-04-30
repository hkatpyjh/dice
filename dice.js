var dices = [1, 2, 3, 4, 5, 6];
var dices_remain = [];
var takens = [];
let dice_placeholder = document.getElementById('dice_placeholder');
let taken_placeholder = document.getElementById('taken_placeholder');
let msg_placeholder = document.getElementById('msg_placeholder');
let button = document.getElementById('button');
let reset = document.getElementById('reset');

function roll() {
  dices_remain = dices.filter(n => !takens.includes(n));

  if (dices.length === takens.length) {
    msg_placeholder.innerHTML = 'All numbers has been taken.';
    return;
  }

  var randomNumber = dices_remain[Math.floor(Math.random() * dices_remain.length)];
  takens.push(randomNumber);
  
  dice_placeholder.innerHTML = `<img src='./img/dice${randomNumber}.png'/>`;
  taken_placeholder.innerHTML = `${takens.join(", ")}`;
}

button.onclick = function() {
  rolldice();
};

reset.onclick = function() {
  takens.splice(0);
  taken_placeholder.innerHTML = "";
  msg_placeholder.innerHTML = "";
};

function rolldice(){
  var num = 0;
  var interval = setInterval(function(){
      num +=1;
      var num1 = dices[Math.floor(Math.random() * dices.length)];
      if(num == 60){
        roll();
        clearInterval(interval);
        return;
      }

      dice_placeholder.innerHTML = `<img src='./img/dice${num1}.png'/>`;
  }, 15);

}

