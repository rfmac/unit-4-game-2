$(document).ready(loadPage);

var wins=0;
var losses=0;
var totalScore=0;
var rubyValue=0;
var emeraldValue=0;
var diamondValue=0;
var saphireValue=0;
var targetScore=0;

function loadPage() {
    $("#numWins").text(wins);
    $("#numLosses").text(losses);
    setUpEventListeners();
    startGame();
}

function setUpEventListeners(){
    $("#ruby").click(function(){
        totalScore += rubyValue;
        checkScore();
    });

    $("#emerald").click(function(){
        totalScore += emeraldValue;
        checkScore();
    });

    $("#saphire").click(function(){
        totalScore += saphireValue;
        checkScore();
    });

    $("#diamond").click(function(){
        totalScore += diamondValue;
        checkScore();
    });
}

function startGame(){

    targetScore = getRandomIntInclusive(19,120);
    $('#targetScore').text(targetScore);

    rubyValue = getRandomIntInclusive(1,12);
    $('#ruby').text(rubyValue);

    emeraldValue = getRandomIntInclusive(1,12);
    $('#emerald').text(emeraldValue);

    saphireValue = getRandomIntInclusive(1,12);
    $('#saphire').text(saphireValue);

    diamondValue = getRandomIntInclusive(1,12);
    $('#diamond').text(diamondValue);

    totalScore=0;
    $("#totalScore").text(totalScore);
}

function checkScore(){
    $("#totalScore").text(totalScore);
    if(totalScore>targetScore){
        alert("You are a loser");
        losses++;
        $("#numLosses").text(losses);
        startGame();
    
    }else if(totalScore===targetScore){
        alert("you win!");
        wins++
        $("#numWins").text(wins);
        startGame();
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
