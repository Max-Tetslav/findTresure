$(document).ready(function(){
    var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

var getDistance = function (event, goal) {
    var diffX = event.offsetX - goal.x;
    var diffY = event.offsetY - goal.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Обожжешься";
    } else if (distance < 20) {
        return "Очень горячо";
    } else if (distance < 40) {
        return "Горячо";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else {
        return "Замерзнешь";
    }
};

var width = 400; 
var height = 400;
var clicks = 0;
var limit = 10;

var goal = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$("#map").click(function (event) {
    clicks++;
    var distance = getDistance(event, goal);
    var distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);

    if (distanceHint === "Горячо"){
        alert("Вам осталось " + (limit - clicks) + " кликов");
    }

    if (clicks > 20) {
        alert ("Конец игры! Вы превысили лимит в 10 попыток")
    }
    if (distance < 10) {
        alert("Клад найден! Всего за " + clicks + " кликов!");
    }
});
});