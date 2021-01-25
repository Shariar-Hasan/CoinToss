const getHead = document.getElementById("head");
const getTail = document.getElementById("tail");
const getCoin = document.getElementById("coin");
const getResult = document.getElementById("win-lose");  
const getFlipAgain = document.getElementById("reset");  
getHead.onclick;

getHead.addEventListener('click',flip1);
getTail.addEventListener('click',flip2);
getFlipAgain.addEventListener('click',flipAgain);


function flip1(){
    let n = (5 + Math.floor(Math.random()*5));
    console.log(getHead.clicked == true);
    getCoin.style.transform = 'rotateY('+n*180+'deg)';
    getHead.style.display = 'none';
    getTail.style.display = 'none';
    getFlipAgain.style.display = 'block';
    if(n%2==0){
        getResult.innerHTML = "You WON";
    }
    else{
        getResult.innerHTML = "You LOSE";
    }
}

function flip2(){
    let n = (5 + Math.floor(Math.random()*5));
    console.log(getHead.clicked == true);
    getCoin.style.transform = 'rotateY('+n*180+'deg)';
    getHead.style.display = 'none';
    getTail.style.display = 'none';
    getFlipAgain.style.display = 'block';
    if(n%2==1){
        getResult.innerHTML = "You WON";
    }
    else{
        getResult.innerHTML = "You LOSE";
    }
}
function flipAgain(){
    getHead.style.display = 'block';
    getTail.style.display = 'block';
    getFlipAgain.style.display = 'none';
    getCoin.style.transform = 'rotateY(0deg)';
    getResult.innerHTML = "RESULT";
}