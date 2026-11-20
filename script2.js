
// EXPLORE BUTTON
let explorebtn = document.getElementById("herobtn");
let exploresection = document.getElementById("explore-section");

explorebtn.addEventListener("click", function() {
    exploresection.style.display = "block";
});


// ASK QUESTION BUTTON
let askquestion = document.getElementById("question");
let footerbutton = document.getElementById("footer2");
let userinput = document.getElementById("user-question");

askquestion.addEventListener("click", function() {
    footerbutton.style.display = "block";
});


// EMAILJS INITIALIZATION
emailjs.init({
    publicKey: "6H3g9U0-u5E8R2RuR"
});


// SUBMIT QUESTION
let submitquestion = document.getElementById("submit-question");

submitquestion.addEventListener("click", function() {

    let question = userinput.value.trim();

    if (question === "") {
        alert("Please enter a question first!");
        return;
    }

    emailjs.send(
        "service_smk9fhp",
        "template_nu2jom9",
        {
            question: question
        }
    )

    .then(function(response) {
        alert("Your question has been submitted successfully!");
        userinput.value = "";
    })

    .catch(function(error) {
        alert("Something went wrong. Please try again.");
        console.log(error);
    });

});
