const maths = (number1, number2, number3, number4)=>{
    let a = number1+number2*2;
    if(number3){
        a += number3 - 5;
    }
    if(number4){
            a *= number4; 
    }

    return a;
}

const abc = () => {};
const aaa = () => {};
const ddd = () => {};
const fff = () => {};

const main = {
    abc,aaa,ddd,fff
}

export default main;

export {abc, aaa, ddd, ff };