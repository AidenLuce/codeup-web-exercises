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

// Q1
let overThree = users.filter(function(e){
    return e.languages.length >= 3;
})
console.log(overThree)

// Q2
let emails = users.map(function(e){
    return e.email
});
console.log(emails)

// Q3

let totalYears = users.reduce((accumulator, years)  => {
    return accumulator + years.yearsOfExperience
}, 0)
console.log(totalYears/users.length)

// Q4
const longestEmail = users.reduce((accumulator, email) =>{
    return accumulator.length > email.length ? accumulator : email.email    /**========================== HELP ============================*/
    },);
console.log(longestEmail)

// Q5
let user = users.reduce((pre, user, index, usersArray) =>{
    return pre + `${pre ? ', ' : 'Your instructors: '}${user.name}${(index === (usersArray.length -1))? '.' :''}`
},'');
console.log(user)



