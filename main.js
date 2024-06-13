points = 0;
clickers = 0;
clickerCost = 10;
clickerValue = 1
farmCost = 150;
farms = 0;
farmValue = 10;
function checkPoints(){
    unlockExtraClick();
};

function pointUpdate(value, number){
    points = points+(value*number);
    document.getElementById("points").innerHTML = points;
    checkPoints();
    uiUpdate();
}
function pointClick(number){
    points = points+number;
    document.getElementById("points").innerHTML = points;
    checkPoints();
    uiUpdate();
};

function unlockExtraClick(){
    if (points >=clickerCost)
        document.getElementById("buyClicker").style.display ="block";
    else
        document.getElementById("buyClicker").style.display = "none";
    if (points >= farmCost)
        document.getElementById("buyFarm").style.display = "block";
    else
        document.getElementById("buyFarm").style.display = "none";
};

function uiUpdate(){
    if (clickers == 0 && points < clickerCost){
        document.getElementById("clickerDiv").style.display = "none";
    }
    else{
        document.getElementById("clickerDiv").style.display = "block";
    }
    if (farms == 0 && points < farmCost){
        document.getElementById("farmDiv").style.display = "none";
    }
    else{
        document.getElementById("farmDiv").style.display = "block";
    }
}

function buyClick(){
    points = points-clickerCost;
    document.getElementById("points").innerHTML = points;
    clickers = clickers+1;
    document.getElementById("clickers").innerHTML = clickers;
    clickerCost = clickerCost+10;
    document.getElementById("clickerCost").innerHTML = clickerCost;

    checkPoints();
};

function buyFarm(){
    points = points-farmCost;
    document.getElementById("points").innerHTML = points;
    farms = farms+1;
    document.getElementById("farms").innerHTML = farms;
    farmCost = farmCost+100;
    document.getElementById("farmCost").innerHTML = farmCost;
    checkPoints();
}

window.setInterval(function(){
    pointUpdate(clickerValue, clickers);
    pointUpdate(farmValue, farms);

}, 1000);
