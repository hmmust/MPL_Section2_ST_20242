const calc_nos = (a,b=50)=>{
    let total =0;
    for(let i=a;i<=b;i++) total+=i;
    return total;
}
console.log(calc_nos(10,30));
