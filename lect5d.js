const calc_average = (...a)=>{
    const printHashes=()=>{console.log("############");}
    let total =0;
    for(let s of a) total+=s;
    printHashes();
    console.log( total/a.length);
    printHashes();
}
calc_average(10,30,15,17,15,25);
