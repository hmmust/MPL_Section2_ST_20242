const calc_average = (...a)=>{
    let total =0;
    for(let s of a) total+=s;
    return total/a.length;
}
console.log(calc_average(10,30,15,17,15,25));
