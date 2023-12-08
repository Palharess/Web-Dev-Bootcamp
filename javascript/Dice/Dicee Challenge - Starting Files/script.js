let dice = Math.random()* 6 + 1;
let dice2 = Math.random()* 6 + 1;
dice = Math.floor(dice);
dice2 = Math.floor(dice2);
console.log(dice);
let vetor = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png"
,"./images/dice5.png","./images/dice6.png"]

document.getElementById("p1").setAttribute("src",vetor[dice - 1]);
document.getElementById("p2").setAttribute("src",vetor[dice2 - 1]);

if(dice > dice2){
    document.getElementById("refresh").innerHTML = "PLAYER 1 WON!"
}
else if(dice < dice2){
    document.getElementById("refresh").innerHTML = "PLAYER 2 WON!"
}
else{
    document.getElementById("refresh").innerHTML = "DRAW!!!"
}