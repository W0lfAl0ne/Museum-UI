const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
//const timeLine = quiz_box.querySelector("header .time_line");
const img_box = document.querySelector(".img_box");
const block_list = img_box.querySelectorAll(".block");
const confirm_btn = document.querySelector(".ans_button");
const bottom_ques_counter = quiz_box.querySelector(".total_que");
const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart = result_box.querySelector(".buttons .restart");
const quit = result_box.querySelector(".buttons .quit");
const image = img_box.querySelector(".img");

let answer_list = ["Cồng chiêng","Nhảy sạp"];

var number_random = Math.floor(Math.random() * (answer_list.length)) + 0;
console.log(number_random);

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

console.log(answer_list.length);

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

/*continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(14);
    startTimerLine(0);
}*/

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    img_box.classList.add("activeImg");
    setBackgroundImage();
}

let que_count = 0;
let counter;
let score = 0;
let k = 0;
let array = [0,0,0,0,0,0];
let timeleft;
let index_count = 0;
let test_number;


/*next_btn.onclick = ()=>{
    if (que_count < questions.length - 1) {
        que_count++;
        showQuestions(que_count);
        queCounter(que_count + 1);
        clearInterval(counter);
        startTimer(14);
        clearInterval(counterLine);
        startTimerLine(0);
        next_btn.style.display = "none";
        k = 0;
    } else {
        console.log("Questions completed");
        showResultBox();
    }
}*/

function setBackgroundImage() {
    image.style.backgroundImage = images_list[number_random];
}

next_btn.onclick = ()=>{
    quiz_box.classList.remove("activeQuiz");
    img_box.classList.add("activeImg");
}

function showQuestions(index) {
    index_count = 0;
    test_number = index;
    if (array[index] == 0) {
        img_box.classList.remove("activeImg");
        quiz_box.classList.add("activeQuiz");
        startTimer(14);
        startTimerLine(0);
        next_btn.style.display = "none";
        queCounter(index + 1);
        que_count = index;
        const que_text = document.querySelector(".que_text");
        let que_tag = '<span>' + questions[number_random][index].question + '</span>';
        let option_tag = '<div class = "option">' + questions[number_random][index].options[0] + '<span></span></div>'
                      + '<div class = "option">' + questions[number_random][index].options[1] + '<span></span></div>'
                      + '<div class = "option">' + questions[number_random][index].options[2] + '<span></span></div>'
                      + '<div class = "option">' + questions[number_random][index].options[3] + '<span></span></div>'
        que_text.innerHTML = que_tag;
        option_list.innerHTML = option_tag;
        const option = option_list.querySelectorAll(".option");
        for (let i = 0; i < option.length; i++) {
            option[i].setAttribute("onclick", "optionSelected(this)");
        }
    }
    array[index]++;
}

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[number_random][que_count].answer;
    let allOptions = option_list.children.length;
    clearInterval(counter);
    clearInterval(counterLine);
    if(index_count == 0 && userAns == correctAns) {            
        answer.classList.add("correct");
        score += 5 * timeleft;
        block_list[que_count].classList.add("actBlock");
        next_btn.style.display = "block";
        index_count++;
        
    } else if (index_count == 0) {
        answer.classList.add("incorrect");
        block_list[que_count].classList.add("wrBlock");
        correctAnswer();
        next_btn.style.display = "block";
        index_count++;
    }
    k++;
    queCounter(test_number + 1);
}

function correctAnswer() {
    let correctAns = questions[number_random][que_count].answer;
    let allOptions = option_list.children.length;
    for (let i = 0; i < allOptions; i++) {
        if(option_list.children[i].textContent == correctAns) {
            option_list.children[i].setAttribute("class", "option correct");
        }
    }
    k++;
}

function startTimer(time) {
    //timeLine.classList.remove("timeup");
    counter = setInterval(timer, 1000);
    function timer() {
        timeleft = time;
        timeCount.textContent = time; 
        time--;
        if(time == 4) {
            //timeLine.classList.add("timeup");
        }
        if(time < 0) {
            clearInterval(counter);
            next_btn.style.display = "block";
            timeCount.textContent = "0";
            correctAnswer();
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 30);
    function timer() {
        time += 1;
       // timeLine.style.width = time + "px";
        if(time > 800) {
            clearInterval(counterLine);
        }
    }
}

function queCounter(index) {
    let totalQues = '<span>Câu hỏi số ' + index + '<br>Điểm: ' + score + '</span>' ;
    bottom_ques_counter.innerHTML = totalQues;
}

function showResultBox(text) {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const complete = result_box.querySelector(".complete_text");
    complete.innerHTML = text;
    const scoreText = result_box.querySelector(".score_text");
    let scoreTag = '<span>Tổng điểm: ' + score + '</span>';
    scoreText.innerHTML = scoreTag;
}

confirm_btn.onclick = ()=> {
    var text_answer = document.getElementById('answerImg').value;
    if (text_answer.length == 0) {
        alert("Bạn chưa nhập đáp án");
    } else if ((text_answer.toUpperCase()).indexOf(answer_list[number_random].toUpperCase()) != - 1) {
        if (k == 1) {
            score = score + 500;
        } else if (k == 2) {
            score = score + 420;
        } else if (k == 3) {
            score = score + 350;
        } else if (k == 4) {
            score = score + 280;
        } else if (k == 5) {
            score = score + 200;
        } else if (k == 6) {
            score = score + 120;
        }
        img_box.classList.remove("activeImg");
        showResultBox("Chúc mừng bạn đã hoàn thành Quiz");
    } else {
        if (k < 6) alert("Đáp án bạn nhập chưa đúng");
        else {
            img_box.classList.remove("activeImg");
            showResultBox("Rất tiếc bạn chưa hoàn thành Quiz");
        }
    }
} 


quit.onclick = ()=>{
    window.close();
}

restart.onclick = ()=>{
    result_box.classList.remove("activeResult");
    que_count = 0;
    score = 0;
    window.location.reload();
}