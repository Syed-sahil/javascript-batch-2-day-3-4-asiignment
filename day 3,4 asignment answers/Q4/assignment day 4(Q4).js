let obj =[
    {
        name:"Navin",
        age:20,
        country:"India",
        hobbies:["Coding","Writing"]
    },

    {
        name:"Jay",
        age:20,
        country:"India",
        hobbies:["Drawing","Binge watching"]
    },
    
    {
        name:"Charles",
        age:28,
        country:"USA",
        hobbies:["cycling","Reading"]
    },

    {
        name:"Cristian",
        age:31,
        country:"USA",
        hobbies:["walking","Gymnastics"]
    },

    {
        name:"Chris",
        age:35,
        country:"USA",
        hobbies:["Acting","Maths"]
    },

    {
        name:"Cristian",
        age:31,
        country:"USA",
        hobbies:["walking","Gymnastics"]
    },

    {
        name:"Alexender",
        age:14,
        country:"Russia",
        hobbies:["Sports","Eating"]
    },

    {
        name:"Vedang",
        age:20,
        country:"India",
        hobbies:["Cricket","Humor"]
    },

    {
        name:"Anasthesia",
        age:26,
        country:"USA",
        hobbies:["Learning","Reading"]
    },
]


function ques1(){
    obj.forEach(function(ageof){
        if (ageof.age < 30){
            console.log(ageof)
        }
    }) 
}



   
function ques2(){
    obj.forEach(function(location){
        if (location.country == "India"){
            console.log(location)
        }
    }) 
}