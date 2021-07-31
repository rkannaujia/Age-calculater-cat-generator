//Challange 1: Your age in days
function ageInDays(){
let birthYear = prompt("What year were you born..")
let totalDays = (2021-birthYear)*365;
let h1 = document.createElement('h1');
let txtAnswer = document.createTextNode(`you are ${totalDays} days old.`);
h1.setAttribute('id','ageInDays');
h1.appendChild(txtAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//Challange 2: Cat Generator

function generateCat() {
    let image = document.createElement('img');
    let div =document.getElementById('flex-cat-gen');
    image.src = "./static/images/tenor.gif"
    div.appendChild(image);
}

