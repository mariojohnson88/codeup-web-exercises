"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const languages = users.filter(function(user) {
    return user.languages.length >= 3;
});
 console.log(languages);


 const emails = users.map(function(user){
    return user.email;
 });
 console.log(emails);


 const totalYears = users.reduce(function(accumulation, currentNumber){
     return accumulation + currentNumber.yearsOfExperience;
 },0);
 console.log(totalYears);
 console.log(totalYears / users.length);


const longestEmail = users.reduce(function(previous,current){
    const currentEmail = current.email;
    if(currentEmail.length > previous.length){
        return currentEmail;
    }else {
        return previous;
    }
},"");
console.log(longestEmail);


const instructors= users.reduce(function(total,instructor) {
    return `${total} ${instructor.name},`;
},"Your instructors are:");

console.log(instructors);

// Bonus
