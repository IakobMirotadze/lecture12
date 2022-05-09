var count= 24
// თუ იყოფა 2 ზე გავყო
// თუ არ იყოფა +1 *3
function numberAction (){
    for(var i = 0; i< 5; i++ ){
        if(count % 2 === 0){
            actionForEven()
        }else {
            actionForOdd()
        }
    }
    return count
}

function actionForEven(){
    count /= 2;
    console.log(count)
}

function actionForOdd() {
    count ++;
    count *=3
    console.log(count)
}


// var finalResult = numberAction()

console.log('საბოლოო პასუხი', numberAction() )