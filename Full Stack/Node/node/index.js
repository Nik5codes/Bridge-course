const solving = () => {
    var {add,sub} = require('./math.js');

    let sum = add(10, 20);
    let subtract = sub(20,10)
    return subtract;
}




const newsolve = () => {
    var math = require('./math.js'); 
    var add = math.add;
    var sub = math.sub;

    let sum = add(10, 20);
    let subtract = sub(20, 10);

    return subtract;
}


console.log(newsolve());