const cardsArr = [
    {
        "name" : "dadeucer",
        "img" : "../DuhDeuce/images/dalogo.jpg",
        "reps" : 2,
        "sets" : 2
    },
    {
        "name" : "fifestarr stretch",
        "img" : "../DuhDeuce/images/invite-dadeuce.jpg",
        "reps" : 1,
        "sets" : 1
    },
    {
        "name" : "lunches",
        "img" : "../DuhDeuce/gifs/lunches.gif",
        "reps" : 25,
        "sets" : 2
    },
    {
      "name" : "push-ups",
      "img" : "../DuhDeuce/gifs/pushup.gif",
      "reps" : 25,
      "time" : null,
      "sets" : 2
    },
    {
      "name" : "Reverse Crunch",
      "img" : "../DuhDeuce/gifs/reverse-crunch.gif",
      "reps" : 50,
      "time" : null,
      "sets" : 2
    },
    {
      "name" : "L Side-Oblique-Crunch",
      "img" : "../DuhDeuce/gifs/Side-Oblique-Crunch.gif",
      "reps" : 40,
      "time" : null,
      "sets" : 1
    },
    {
      "name" : "Right side Crunck",
      "img" : "../DuhDeuce/gifs/side-crunch.gif",
      "reps" : 40,
      "time" : null,
      "sets" : 1
    },
    {
      "name" : "regular Crunch",
      "img" : "../DuhDeuce/images/mendelbrott-fractal.jpg",
      "reps" :50,
      "time" : null,
      "sets" : 2
    },
    {
      "name" : "close grip push ups",
      "img" : "../DuhDeuce/gifs/Close-Grip-Push-Ups.gif",
      "reps" : 25,
      "time" : null,
      "sets" : 2
    },
    {
      "name" : "standing squats",
      "img" : "../DuhDeuce/gifs/squats.gif",
      "reps" : 50,
      "time" : null,
      "sets" : 2
    }
]

var intensityX = prompt('intensity 0-1?');

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

// console.log(cardsArr)
// we are mapping from cardsArr into hero (key value pairs)
cardsArr.map(hero => {
    // in swell foop, declare OBJECT DESTRUCTURING
    const {name, img, reps, sets} = hero;
    setsLeft = sets
    console.log(sets)
    // if (sets >= 1){
        while (setsLeft >= 1){
            console.log("the first part works")
            makeDatCard(setsLeft, name, img, reps, sets);
            console.log("maked card")
            setsLeft--;
        }
    // }
    // else{
    //         makeDatCard(setsLeft, name, img, reps, sets)
    // }
})

function makeDatCard(setsLeft, name, src, reps, sets){
    console.log("makedat"+setsLeft);
    // this is the card div, the card itself one could say.
    const heroCard = document.createElement("div")
    // in javascript, id is like "name"
    heroCard.id = `${name}${setsLeft}`
    heroCard.draggable="true"
    // now we are filling the HTML in another feel swoop! ` c o  o   l` 
    heroCard.innerHTML = `
    <p> ${name} </p>
    <img src='${src}' height=69 width=69>
    <h3> ${reps*intensityX}=${reps}*${intensityX} reps <br>
    set ${setsLeft} of ${sets}</h3>
    `
    // give it some class
    heroCard.classList.add('card')
    // id is the sequential number dan added to the heroes.js to help identify this. 
    heroCard.classList.add(`set${setsLeft}`)
    heroCard.onclick = function(){
        heroCard.classList.add('hide')
      }
    // and append the card
    console.log("something wrong with list1"+heroCard)
    document.querySelector('#list1').appendChild(heroCard)
}



    
    
        
        

    // template i'm going for 
    // <div  id='card1' class="card" draggable="true" ondragstart="dragStart(event)">
    //         Work on article
    // <img id="card0" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">
