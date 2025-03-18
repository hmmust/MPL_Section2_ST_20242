const calc_average = (a,b,printHashes)=>{
    printHashes();
    console.log((a+b)/2);
    printHashes();
}
calc_average(10,30,()=>{console.log("############");});
calc_average(10,30,()=>{
    console.log("*****Welcome******");
    console.log("**************");

});

