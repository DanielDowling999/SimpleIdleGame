points = 0;
clickers = 0;
clickerCost = 10

function checkPoints(){
    
    unlockExtraClick();
};

function pointClick(number){
    points = points+number;
    document.getElementById("points").innerHTML = points;
    checkPoints();
};

function unlockExtraClick(){
    if (points >=clickerCost)
        document.getElementById("buyClicker").style.display ="block";
    else
        document.getElementById("buyClicker").style.display = "none";
    
};

function buyClick(){
    points = points-clickerCost;
    document.getElementById("points").innerHTML = points;
    clickers = clickers+1;
    document.getElementById("clickers").innerHTML = clickers;
    clickerCost = clickerCost+10;
    document.getElementById("clickerCost").innerHTML = clickerCost;

    checkPoints();
};

window.setInterval(function(){
    pointClick(clickers);
    checkPoints();
}, 1000);
