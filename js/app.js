let questions=document.getElementsByClassName('question');
let arrow=document.getElementsByClassName('img-arrow')
let answer=document.getElementsByClassName('answer')

for (let i=0; i<arrow.length; i++){
    arrow[i].onclick=function(){
            if (answer[i].style.maxHeight){
                answer[i].style.maxHeight=null;
                questions[i].style.fontWeight='lighter';
                arrow[i].style.transform='rotate(360deg)';
                arrow[i].style.justifyContent='flex-end';
               
            } else {
                answer[i].style.maxHeight = answer[i].scrollHeight + "px";
                questions[i].style.fontWeight='bold';
                answer[i].style.color='#6c757d';
                arrow[i].style.transform='rotate(180deg)';
                arrow[i].style.justifyContent='flex-start';
    }
}
    
}


for (let i=0; i<questions.length; i++){
    questions[i].onclick=function(){
    
if (answer[i].style.maxHeight){
    answer[i].style.maxHeight=null;
    questions[i].style.fontWeight='lighter';
    arrow[i].style.transform='rotate(360deg)';
    arrow[i].style.justifyContent='flex-end';
   
} else {
    answer[i].style.maxHeight = answer[i].scrollHeight + "px";
    questions[i].style.fontWeight='bold';
    answer[i].style.color='#6c757d';
    arrow[i].style.transform='rotate(180deg)';
    arrow[i].style.justifyContent='flex-start';
 
}
    }
};

