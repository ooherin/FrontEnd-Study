const number = Number(prompt('몇명이 참가하나요?'));
const $button = document.querySelector('button');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order')
const $input = document.querySelector('input');
let word; //제시어
let newWord; //단어
let order= 1;


//제시어가 있는가? 비어있으면 제시어가 된다. 비어있지 않으면 진행한다.
const onBtnClick = () => {
    if(!word){
        word = newWord;//1. 입력한 단어가 제시어가 된다.
        $word.textContent = word;//2. 화면에 단어가 제시어로 나온다.
        $input.value = '';//input은 비어진다.
        $input.focus();
    } else{
        //비어있지 않다 ->판단필요
        //함수안에 함수
        //단어가 올바른지 알려주는 함수
    if(word[word.length-1] === newWord[0])
    //제시어의 마지막 글자가 새단어의 첫글자와 같은가?
    { word = newWord;
        $word.textContent = word;
        $input.value = '';
        $input.focus();
    }
        //올바르다, 게임 계속
    else {
        //올바르지 않다, 게임 중지
    alert('올바르지 않은 단어입니다!게임이 끝났습니다.');  
};}}

//현재 참가자 순서를 알려주는 함수
const onOrder = () => {
    //참가자수만큼 계속 1씩 늘어난다
    if(order < number){
        order += 1;
        $order.textContent = order;
    }
    else{
        $order.textContent = 1;
    }
    //참가자수 이상이 되면 다시 1이 된다.
}


const onInput = (event) => {
    newWord = event.target.value; //input에써진 값이 newWord가 된다. 
}

//addEventListener
$button.addEventListener('click',onBtnClick);
$button.addEventListener('click',onOrder);
$input.addEventListener('input',onInput);
