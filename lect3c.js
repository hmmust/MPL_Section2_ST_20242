let names = ["Osama","Khalid","Malik"];
let names2 = ["Sereen","Nour","Mariam"];
let name_all = names.concat(names2);
name_all = name_all.concat("Hasan");

name_all2 = [...names,...names2];
name_all3 = [...names2,...names];
name_all4 = ["Rama",...names2,...names];
console.log(name_all,name_all2);
console.log(name_all,name_all.indexOf("Nour"));
console.log(name_all.indexOf("NourSalaq"));


