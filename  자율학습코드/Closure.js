function closer(){
    let cnt = 0;
    function cntPlus(){
        cnt += 1;
    }
    return cntPlus; //cntPlus를 반환
}
const cntCloser = closer();
cntCloser.cntPlus();