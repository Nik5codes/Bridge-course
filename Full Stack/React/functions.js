// function inc(a)
// {
//     return a++;
// }


// let x = 5;
// let incval=inc(x);
// console.log(incval);


function nesara(a = (m,n) => {let s = m+n; return s })
{
    let sum = a(5,6);
    let sum2 = a(10,11);
    console.log(sum,sum2);
}


let calculatedsum = nesara();
console.log(calculatedsum);
