let names = ["Osama","Khalid","Malik"];
let mohammad = {fullname:'Mohammad Tafish',
                age : 19,major:'CS',
                courses : ['MPL',"DS",'NW',"ITEN"]
                };
for(let i=0;i<names.length;i++)
    console.log(names[i]);
for(let n of names)
    console.log(n);
for(let i in names)
    console.log(names[i]);