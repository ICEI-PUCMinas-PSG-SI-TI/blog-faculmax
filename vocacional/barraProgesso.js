console.log("Hello World!! hahaha!");
button1.onclick=function(){
    questionIndex = 0;
    questionIndex++;
    question.style.display="none";
    question2.style.display="inline";
    progressBar.style.width=(questionIndex/3)*100+ "%";
}

button2_1.onclick=function(){
    questionIndex--;
    question2.style.display="none";
    question.style.display="inline";
    progressBar.style.width=(questionIndex/3)*100+ "%";
}

button2_2.onclick=function(){
    questionIndex++;
    question2.style.display="none";
    question3.style.display="inline";
    progressBar.style.width=(questionIndex/3)*100+ "%";
}

button3_1.onclick=function(){
    questionIndex--;
    question3.style.display="none";
    question2.style.display="inline";
    progressBar.style.width=(questionIndex/3)*100+ "%";
}

button3_2.onclick=function(){
    questionIndex++;
    question3.style.display="none";
    question4.style.display="inline";
    progressBar.style.width=(questionIndex/3)*100+ "%";
}

button4_1.onclick=function(){
    questionIndex--;
    question4.style.display="none";
    question3.style.display="inline";
    progressBar.style.width=(questionIndex/3)*100+ "%";
}

buttonReset.onclick=function(){
    location.reload();
}