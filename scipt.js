let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".box");
let show=document.querySelector(".msg");
let userpara=document.querySelector(".user-score");
let comppara=document.querySelector(".comp-score");
let head2=document.querySelector(".head2");
let head1=document.querySelector(".head1");



let compchoice=()=>{
    let option=["Rock","Paper","Scissor"]
    let idx=Math.floor(Math.random()*3);
    return option[idx];
}

let winner=(userwin)=>{
    if(userwin)
       {
        userScore++;
        userpara.innerText=userScore;
        show.innerText="user win";
        show.style.color="green";

       }
       else{
        compScore++;
        comppara.innerText=compScore;
        
        show.innerText="computer win";
        show.style.color="red";
       }

};

let result=(userchoice)=>{
    console.log("user choice is:" +userchoice);
        let computchoice=compchoice();
         head2.innerText=computchoice;
        
    if(userchoice===computchoice){
        show.innerText="the game is draw";
        show.style.color="white";
    
    
    }
    else
    {
        let userwin=true;
        if(userchoice==="Rock"){
            userwin=computchoice==="Paper"?false:true;
        }
        else if(userchoice==="Paper"){
            userwin=computchoice==="Scissor"?false:true;
        }
        else{
            userwin=computchoice==="Rock"?false:true;
        }
        winner(userwin);

       
    }
}




for(let choice of choices){
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
           head1.innerText=userchoice;
        result(userchoice);
        
    
    });
}





