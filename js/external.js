console.log("Hello from external JavaScript")
alert("Welcome to my Website!")
let favoriteColor = prompt("What is your favorite color?");
alert(favoriteColor + " is my favorite color too!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

    let daysWithTheLittleMermaid = prompt("How long did you rent The Little Mermaid")
    let daysWithBrotherBear = prompt("How long did you rent Brother Bear? ")
    let daysWithHercules = prompt("How long did you rent Hercules")
        alert(daysWithTheLittleMermaid * 3 + daysWithBrotherBear * 3 + daysWithHercules * 3)

//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

    let googleHours = prompt("How many hours did you work at Google?")
    let googlePay = prompt("What was you pay at Google?" )
    let amazonHours = prompt("How many hours did you work at Amazon?")
    let amazonPay = prompt("What was you pay at Amazon?")
    let facebookHours = prompt("How many hours did you work at Facebook?")
    let facebookPay= prompt("What was you pay at FaceBook?")
        alert("Your total pay for this week is $" + (Number(googleHours * googlePay) + Number(amazonHours * amazonPay) + Number(facebookHours * facebookPay)) )

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
    let classNotFull = confirm("Is there space available in the class")
    let noScheduleConflict = confirm("Do you have time in your schedule for this class?")
 if (classNotFull === true && noScheduleConflict === true){
     alert("You can enroll in the class!")
 }else{
     alert("You cannot enroll in the class :(")
 }

//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
     let items = confirm("Are you buying more than two items?")
    let offer = confirm("Is the offer still valid?")
    let premium = confirm("Are you a premium member")
if(premium && offer || (offer && items)){
    alert("The product offer can be applied!")
} else{
    alert("The product offer cannot be applied :(")
}

