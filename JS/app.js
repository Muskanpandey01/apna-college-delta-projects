// let btn=document.querySelector("button");
// console.dir(btn);
// btn.onclick= function () {
//     alert("button was clicked");
// };

// let btn=document.querySelector("button");
// btn.addEventListener("click",function () {
//     let h3=document.querySelector("h3");
//     let randomColor=getRandomColor();
//     h3.innerText =randomColor;

//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomColor;
//     console.log("color updated");
// });

// function getRandomColor() {
//     let red=Math.floor(Math.random() * 255);
//     let green=Math.floor(Math.random() * 255);
//     let blue=Math.floor(Math.random() * 255);
//     let color=`rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");
// div.addEventListener("click",function() {
//     console.log("div was clicked")
// })
// ul.addEventListener("click",function(event) {
//     event.stopPropagation();
//     console.log("ul was clicked")
// })
// for(li of lis) {
//     li.addEventListener("click",function(event) {
//         event.stopPropagation();
//     console.log("li was clicked")
// })
// }

//To do app

// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let input=document.querySelector("input");

// btn.addEventListener("click",function() {
//     let item=document.createElement("li");
//     item.innerText=input.value;
//     let delBtn=document.createElement("button");
//     delBtn.innerText="delete";
//     delBtn.classList.add("delete");
//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     input.value="";
// })
//  ul.addEventListener("click",function(event) {
//     if(event.target.nodeName == "BUTTON") {
//         let listItem=event.target.parentElement;
//         listItem.remove();
//         console.log("deleted");
//     }
//  });

//simons game

// let gameSeq=[];
// let userSeq=[];

// let btns=["pink","green","yellow","red"];

// let started=false;
// let level=0;

// let h2=document.querySelector("h2");


// document.addEventListener("keypress",function() {
//    if (started ==false) {
//     console.log("game is started");
//     started = true;

//     levelUp();
//    }
// });

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     },250);
// }

// function userFlash(btn) {
//     btn.classList.add("userflash");
//     setTimeout(function () {
//         btn.classList.remove("userflash");
//     },250);
// }

// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     let randIdx= Math.floor(Math.random()* 3);
//     let randColor= btns[randIdx];
//     let randBtn=document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }

// function checkAns(idx) {
//    if(userSeq[idx] === gameSeq[idx]) {
//     if(userSeq.length == gameSeq.length) {
//        setTimeout(levelUp,1000);
//     }
//    } else {
//      h2.innerHTML = `Game Over! your score was <b>${level}<b/> <br>Press any key to start.`;
//      document.querySelector("body").style.backgroundColor = "red";
//      setTimeout(function() {
//         document.querySelector("body").style.backgroundColor = "white";
//      },150);
//      reset();
//    }
// }

// function btnPress() {
//     let btn=this;
//     userFlash(btn);

//     userColor= btn.getAttribute("id");
//     userSeq.push(userColor);

//     checkAns(userSeq.length-1);
// }

// let allBtns = document.querySelectorAll(".btn");
// for (btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }

// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }

//callstack

// function one() {
//    return 1;
// }

// function two() {
//     return one()+ one();
// }

// function three() {
//     let ans= two() + one();
//     console.log(ans);
// }

// three();

//callback hell

// h1=document.querySelector("h1");
// function changeColor(color,delay,nextColorChange) {
//     setTimeout(() => {
//          h1.style.color=color;
//          if(nextColorChange)nextColorChange();
//     },delay)
// }

// changeColor("red",1000,() => {
//     changeColor("orange",1000,() => {
//         changeColor("green",1000)
//     });
// });



// setTimeout(() => {
// h1.style.color="red";
// },1000);

// setTimeout(() => {
// h1.style.color="orange";
// },2000);


// API



let btn=document.querySelector("button");
btn.addEventListener("click",async() =>{
   let fact=await getFacts();
//    console.log(fact);
   let p=document.querySelector("#result");
   p.innerText=fact;
})
let url ="https://catfact.ninja/fact";
 async function getFacts() {
    try {
        let res= await axios.get(url);
        //  let data=await res.json();
          return res.data.fact;
        //   let res2=await fetch(url);
        //   let data2=await res.json();
        //   console.log(data2.fact);
    }catch (e) {
         console.log("error -",e);
         return "NO fact found";
    }
}
//     let res=await fetch(url);
//     let data=await res.json();
//     console.log(data.fact);
// }

// fetch(url)
// .then((res) => {
//     console.log(res);
//     res.json().then((data) =>{
//         console.log(data);
//     })
// })
// .catch((err) => {
//     console.log("ERROR -",err);
// });

