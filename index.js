let homeCounter = document.getElementById("home-text");
console.log(homeCounter);

let homeCount = 0;

let home_pts_1 =document.getElementById("home-1-point");

function incrementhomepts1(){
    homeCount++;
    homeCounter.textContent = homeCount;
}

let home_pts_2 =document.getElementById("home-2-point");
function incrementhomepts2(){
    homeCount += 2;
    homeCounter.textContent = homeCount;
}

let home_pts_3 =document.getElementById("home-3-point");
function incrementhomepts3(){
   homeCount += 3;
    homeCounter.textContent = homeCount;
}

let awayCounter = document.getElementById("away-text");
console.log(awayCounter);

let awayCount = 0;

let away_pts_1 =document.getElementById("away-1-point");

function incrementawaypts1(){
    awayCount++;
    awayCounter.textContent = awayCount;
}

let away_pts_2 =document.getElementById("away-2-point");
function incrementawaypts2(){
    awayCount += 2;
    awayCounter.textContent = awayCount;
}

let guest_pts_3 =document.getElementById("away-3-point");
function incrementawaypts3(){
   awayCount += 3;
   awayCounter.textContent = awayCount;
}