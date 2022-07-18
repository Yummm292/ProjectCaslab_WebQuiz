const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeCount = quiz_box.querySelector(".timer .time_sec");
const next_btn = document.querySelector(".next_btn");//next untuk soal selanjutnya
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
const lololo = document.querySelector(".container");

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let witdhValue = 0;


start_btn.onclick = ()=>{//Start sebelum info
    info_box.classList.add("activeInfo"); //show info box
}


exit_btn.onclick= ()=>{//Tombol exit
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick= ()=>{//Tombol continue
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");//ke box quiz
    showQuestionWr(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

next_btn.onclick= () =>{
    if (que_count < questionwrs.length - 1){
        que_count++;
        que_numb++;
        showQuestionWr(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(witdhValue);
        next_btn.style.display = "none";
    }else{
        console.log("Question Completed")
        showResultBox();
    }
}
quit_quiz.onclick= ()=>{
    window.location.replace("/index.html");
}

function showQuestionWr(index){//ngambil soal
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + questionwrs[index].numb +". " + questionwrs[index].question + '</span>';
    let option_tag ='<div class="option">'+questionwrs[index].options[0]+'<span></span></div>'
                     +'<div class="option">'+questionwrs[index].options[1]+'<span></span></div>'
                     +'<div class="option">'+questionwrs[index].options[2]+'<span></span></div>'
                     +'<div class="option">'+questionwrs[index].options[3]+'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick","optionSelected(this)");
    }
}

let tickIcon = '';

function optionSelected(answer){ // warna benar dan salah
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns= answer.textContent;
    let correctAns = questionwrs[que_count].answer;

    const allOptions = option_list.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is Correct");
        userScore +=1;
        console.log(userScore);
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");

    }   
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //click 1 yang lain gk bisa dipencet
    
    }
    next_btn.style.display = "block";
}

function showResultBox(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
     const scoreText = result_box.querySelector(".score_text");
    if(userScore > 9){
        let scoreTag = '<span>Perfect , You got <p>'+ userScore +'</p> out of <p>'+ questionwrs.length +'</p></span>';
        scoreText.innerHTML = scoreTag; 
    }
    else {
        let scoreTag = '<span>Nice Try, You got <p>'+ userScore +'</p> out of <p>'+ questionwrs.length +'</p></span>';
        scoreText.innerHTML = scoreTag; 
    }
}

 function startTimer(time){
     counter = setInterval(timer, 1000);
     function timer(){
         timeCount.textContent = time; //changing the value of timeCount with time value
         time--; 
         if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent ='0' + addZero;
         }
         if(time < 0 ){
            clearInterval(counter);
            timeCount.textContent = "00";
         }
     }
 }

function startTimerLine(time){
     counterLine = setInterval(timer, 29);
     function timer(){
         time += 1;
        time_line.style.width = time + "px";
        if (time > 549){
            clearInterval(counterLine);
         }
 }
}

function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuestcountTag = '<span><p>'+ index +'<p></p>of</p>'+ questionwrs.length +'</p>Question</span>';
    bottom_ques_counter.innerHTML = totalQuestcountTag;
}

