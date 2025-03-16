let mohammad = {fullname:'Mohammad Tafish',
    age : 19,major:'CS',
    courses : ['MPL',"DS",'NW',"ITEN"] };
let students = [{fullname:'Mohammad Tafish',age : 19,
    major:'CS',courses : ['MPL',"DS",'NW',"ITEN"]
},{fullname:'Hamzah Tafish',age : 19,
    major:'CS',courses : ['MPL',"DS",'NW',"ITEN"]
} ]
students.push({fullname:'Mohannad Azazneh',age:20});
students[0].fullname = 'Ahmad Shaheen';
//console.log(students[0].fullname,students[0]['fullname']);
console.table(students)