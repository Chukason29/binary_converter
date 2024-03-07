
const countDown = (num) => {
    console.log(num)
    if(num === 0){
        return;
    }else{ 
        countDown(num - 1);
    }
}
countDown(5);