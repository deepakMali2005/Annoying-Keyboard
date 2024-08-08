window.oncontextmenu = ()=>{
    return false;
}

window.onload = ()=>{
    document.querySelector(".text").focus();
}


let keys = document.querySelectorAll(".key");
let main = document.querySelector(".main");
let myaudio1 = document.getElementById("sound1");
let myaudio2 = document.getElementById("sound2");
let myaudio3 = document.getElementById("sound3");
let myaudio4 = document.getElementById("sound4");


// myaudio.SetRate(1);

window.addEventListener("keydown", (e)=>{
    // e.preventDefault();

    let choice = Math.random() * 30;
    let trip = Math.random()
    console.log(trip)
    if(trip >= 0.75){
        myaudio4.play();
        alert("You got tripped...");
        
    }

    if(choice >= 0 && choice < 8){
        myaudio1.playbackRate = 1;    
        myaudio1.play();
    }
    else if(choice >= 8 && choice < 22){
        myaudio3.playbackRate = 2;    
        myaudio3.play();
    }
    else{
        myaudio2.playbackRate = 1;    
        myaudio2.play();
    }
    
 

    if(e.code == "Space"){
        let space = document.getElementById("space");
        space.style.color = "white";
        space.style.backgroundColor = "black";
        setTimeout(() => {
            space.style.color = "rgb(88, 73, 152)";
            space.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        }, 100);
    }
    for(const it of keys){
        if(it.classList.contains(e.key)){

        it.style.color = "white";
        it.style.backgroundColor = "black";
        setTimeout(() => {
            it.style.color = "rgb(88, 73, 152)";
            it.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        }, 100);
        }
    }
    
})

for(const it of keys){
    it.addEventListener("click", (e)=>{
        it.style.color = "white";
        it.style.backgroundColor = "black";
        setTimeout(() => {
            it.style.color = "rgb(88, 73, 152)";
            it.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        }, 100);
    })
}