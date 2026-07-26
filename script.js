// ===============================
// PAGE SWITCHING
// ===============================


function nextPage(number){


    document
    .querySelectorAll(".page")
    .forEach(page=>{

        page.classList.remove("active");

    });



    const next =
    document.getElementById("page"+number);



    if(next){

        next.classList.add("active");

    }


}







// ===============================
// PROPOSAL TYPEWRITER
// ===============================


const letterText =

"Labubu too beo, way more than you ever could. Now since you're already here, I'd like to let you know that you're one of the most precious things that ever happened to me. I love you so much that even the universe with its infinite wisdom and eons of ancient lexicon struggles to put up a definition of just how inexplicably inconceivable that amount is. Hence, with all due dilly dally, would you let me call you my Beoberry? Would you be my girlfriend? Grant me the honor so I can proudly parade you around in front of everyone calling you mine while you'd agree to do the same until God does us part?";



let typed = false;



function typeLetter(){


    if(typed) return;


    typed=true;


    const box =
    document.getElementById("letter");



    if(!box) return;



    let i=0;



    function typing(){


        if(i < letterText.length){


            box.innerHTML +=
            letterText.charAt(i);



            i++;


            setTimeout(
                typing,
                18
            );


        }


    }


    typing();


}






// Detect proposal page opening


const observer =

new MutationObserver(()=>{


    const proposal =

    document.getElementById("page7");



    if(
        proposal &&
        proposal.classList.contains("active")
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

}

);








// ===============================
// YES BUTTON
// ===============================


function yesRedirect(){


    heartExplosion();


    confetti();



    setTimeout(()=>{


        window.location.href =

        "https://www.youtube.com/watch?v=NQp3cbSkqbo&list=RDNQp3cbSkqbo&start_radio=1";



    },2500);



}







// ===============================
// HEART EXPLOSION
// ===============================


function heartExplosion(){



    for(let i=0;i<40;i++){


        const heart =
        document.createElement("div");



        heart.innerHTML="💜";



        heart.style.position="fixed";

        heart.style.left="50%";

        heart.style.top="50%";

        heart.style.fontSize=

        Math.random()*20+20+"px";


        heart.style.zIndex="100";

        heart.style.pointerEvents="none";



        const x =
        (Math.random()-0.5)*700;


        const y =
        (Math.random()-0.5)*700;



        heart.animate(

        [

            {
                transform:
                "translate(0,0)",
                opacity:1
            },


            {
                transform:
                `translate(${x}px,${y}px)`,
                opacity:0
            }

        ],

        {

            duration:1500,

            easing:"ease-out"

        }


        );



        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },1600);


    }


}









// ===============================
// CONFETTI
// ===============================


function confetti(){


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



    for(let i=0;i<250;i++){


        pieces.push({


            x:
            Math.random()*canvas.width,


            y:
            Math.random()*canvas.height
            -canvas.height,


            size:
            Math.random()*10+5,


            speed:
            Math.random()*5+2,


            color:

            [
                "#ff9de2",
                "#d8a4ff",
                "#ffffff",
                "#ffc8f5"
            ]
            [
                Math.floor(
                Math.random()*4
                )
            ]

        });


    }





    function animate(){


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



        requestAnimationFrame(animate);


    }



    animate();


}







// ===============================
// RESIZE
// ===============================


window.addEventListener(

"resize",

()=>{


    const canvas =
    document.getElementById("confettiCanvas");



    if(canvas){


        canvas.width =
        window.innerWidth;


        canvas.height =
        window.innerHeight;


    }


}

);
