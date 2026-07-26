// ===============================
// PAGE SWITCHING
// ===============================


function nextPage(number){

    document
    .querySelectorAll(".page")
    .forEach(page=>{

        page.classList.remove("active");

    });


    document
    .getElementById("page"+number)
    .classList.add("active");


}





// ===============================
// YES BUTTON REDIRECT
// ===============================


function yesRedirect(){

    startConfetti();


    setTimeout(()=>{


        window.location.href =
        "https://www.youtube.com/watch?v=NQp3cbSkqbo&list=RDNQp3cbSkqbo&start_radio=1";


    },2500);


}







// ===============================
// CONFETTI EFFECT
// ===============================


const canvas =
document.createElement("canvas");


canvas.id="confettiCanvas";


document.body.appendChild(canvas);



const ctx =
canvas.getContext("2d");



canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;



let pieces=[];



function startConfetti(){


    pieces=[];


    for(let i=0;i<180;i++){


        pieces.push({

            x:
            Math.random()*canvas.width,


            y:
            Math.random()*canvas.height
            -canvas.height,


            size:
            Math.random()*8+4,


            speed:
            Math.random()*4+2,


            color:
            [
            "#ff8de8",
            "#c78cff",
            "#ffffff",
            "#ffd1f7"
            ]
            [
            Math.floor(Math.random()*4)
            ]

        });


    }


    animateConfetti();


}





function animateConfetti(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    pieces.forEach(p=>{


        ctx.fillStyle=p.color;


        ctx.fillRect(
            p.x,
            p.y,
            p.size,
            p.size
        );


        p.y+=p.speed;


        if(p.y>canvas.height){

            p.y=-20;

        }


    });


    requestAnimationFrame(
        animateConfetti
    );


}





// ===============================
// TYPEWRITER EFFECT FOR PROPOSAL
// ===============================


const letterText =
`Labubu too beo, way more than you ever could. Now since you're already here, I'd like to let you know that you're one of the most precious things that ever happened to me. I love you so much that even the universe with its infinite wisdom and eons of ancient lexicon struggles to put up a definition of just how inexplicably inconceivable that amount is. Hence, with all due dilly dally, would you let me call you my Beoberry? Would you be my girlfriend? Grant me the honor so I can proudly parade you around in front of everyone calling you mine while you'd agree to do the same until God does us part?`;



let typed=false;



function typeLetter(){


    if(typed) return;


    typed=true;


    let box =
    document.getElementById("letter");


    if(!box) return;



    let index=0;



    function write(){


        if(index < letterText.length){


            box.innerHTML +=
            letterText.charAt(index);


            index++;


            setTimeout(
                write,
                25
            );


        }


    }


    write();


}





// detect proposal page


const observer =
new MutationObserver(()=>{


    let page7 =
    document
    .getElementById("page7");


    if(
    page7.classList.contains("active")
    ){

        typeLetter();

    }


});



observer.observe(
document.body,
{
    attributes:true,
    subtree:true,
    attributeFilter:["class"]
});







// ===============================
// MUSIC BUTTON
// ===============================


const music =
document.getElementById("bgmusic");


const musicButton =
document.getElementById("musicButton");



if(musicButton){


musicButton.onclick=()=>{


    if(music.paused){


        music.play();


        musicButton.innerHTML=
        "🔊 Music";


    }

    else{


        music.pause();


        musicButton.innerHTML=
        "🎵 Music";


    }


};


}






// ===============================
// RESIZE CANVAS
// ===============================


window.addEventListener(
"resize",
()=>{


canvas.width=
window.innerWidth;


canvas.height=
window.innerHeight;


});