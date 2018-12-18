
console.log("app.js")
let score = 0;
console.log(score)
var musicQuestion = [{
    question: "This famous band reached #1 in billboard charts in 1976 for their album “Rumours",
    choices: ["FleetwoodMac", "The Doors", "REO Speedwagon", "THe Doobie Brothers"],
    validAnswer: 0
}, {
    question: "This  band sang a popular played in many sports events, with a distinct ‘beat’ to it",
    choices: [" “Eye of the Tiger” by Survivor", " “The Final Countdown” by Europe", " “Space Jam”-Quad City DJ’s", "“We will Rock you” by Queen"],
    validAnswer: 3

}, {
    question: " This singer went solo in 1981 from a famous band that included Lindsey Buckingham.",
    choices: [" Robert Plant - Led Zeppelin", "Joan Jett - The Runaways", "Stevie Nicks - Fleetwood Mac", "Annie Lennox - Eurythmics"],
    validAnswer: 2

}, {
    question: "This member of this band left after releasing their album, “Raised On Radio”",
    choices: [" Axl Rose of Guns and Roses", "Don Felder of the Eagles", "Steve Perry of Journey", "Mick Jones of The Clash"],
    validAnswer: 2

}, {
    question: "This group was known for their hit “Disco Inferno” in the height of the disco era",
    choices: ["The Trammps", "The Begees", "Sister Sledge", "KC and the Sunshine Band"],
    validAnswer: 0

}]


var movieQuestion = [{
    question: "This Stephen King movie was famous for the line, “Here’s Johnny!”",
    choices: ["The Dead Zone", "Carrie", "The Shining", "IT"],
    validAnswer: 2

}, {
    question: "This movie was the first of many for actress Molly Ringwald",
    choices: ["Pretty In Pink", "The Breakfast Club", "Sixteen Candles", "Some Kind of Wonderful"],
    validAnswer: 2

}, {
    question: "This movie is known for the “Truffle Shuffle” preformed by Chunk",
    choices: ["Pretty in Pink", "Stand by Me”", "The Goonies", "Animal House"],
    validAnswer: 2

}, {
    question: " What popular movie did Patrick Swayze say, “Nobody puts Baby in a corner.",
    choices: ["Road House", "Dirty Dancing", "Red Dawn", "The Outsiders"],
    validAnswer: 1
},
{
    question: "What movie is this line from, said by John Travolta-Would you just watch the hair.  You know I work on my hair a long time…",
    choices: ["Grease", "Saturday Night Fever", "Urban Cowboy", "Pulp Fiction"],
    validAnswer: 1
}]

var eventQuestion = [{
    question: "This famous singer was shot in New York City, leaving behind partner Yoko Uno",
    choices: ["Marvin Gaye", "Sharon Tate", "John Lennon", "Karen Carpenter"],
    validAnswer: 2
}, {
    question: "Which 1980s US president survived an assassination attempt?",
    choices: ["John F. Kennedy", "George H. Bush", "Ronald Reagan", "Bill Clinton"],
    validAnswer: 2
},
{
    question: "Where were the 1980 Olympics held which were boycotted by American athletes?",
    choices: ["Moscow", "New Dehli", "Tokyo", "Berlin"],
    validAnswer: 0
},
{
    question: "Which volcano in Washington sate erupted in 1980?",
    choices: ["Mt. Rainer", "Mount St. Helens", "Mt. Everest", "Mount Washington"],
    validAnswer: 1
},
{
    question: "Where in the Ukraine was there a nuclear explosion in 1986?",
    choices: ["Moscow", "Siberia", "Chernobyl", "Prusia"],
    validAnswer: 2
}]

var tvQuestion = [{
    question: "In which Fox TV show did Johnny Depp play an undercover cop in high school?",
    choices: ["Punky Brewster", "Cosby Show", "21 Jump Street", "A Different World"],
    validAnswer: 2
},
{
    question: "What was the name of David Hasselhoff's talking car in Knight Ridder?",
    choices: ["Joe", "Alfred", "Jax", "Kit"],
    validAnswer: 3
},
{
    question: "What eighties TV show starred Tom Hanks in women's clothing?",
    choices: ["Three's Company", "Mort and Mindy", "Bosom Buddies", "Facts of Life"],
    validAnswer: 2
},
{
    question: "Which Golden Girls starred in two other shows before Golden Girls aired?",
    choices: ["Betty White", "Rue McClanahan", "Debbie Reynolds", "Bea Arthur"],
    validAnswer: 3
},
{
    question: "Which girl on 'Facts of Life' had braces?",
    choices: ["Blair", "Jo", "Natalie", "Tootie"],
    validAnswer: 3
}]

/* written by Noah Harvey for massive bug fix */
function removeSubmitAnswerButton() {
    let answerContainer = document.getElementById("pickAnswer");

    let submitButtons = answerContainer.getElementsByTagName('button');
    
    if(submitButtons.length > 0)
        answerContainer.removeChild(submitButtons[0]);
}

// create constructor intrsuctions
class QuestionBoxes {
    constructor(question, validAnswer, choices, pointValue) {
        this.question = question
        this.validAnswer = validAnswer
        this.pointValue = pointValue
        this.choices = choices
        this.dataChoice = 0;
        this.submitButton = this.createSubmitButton();

    }

    createSubmitButton() {
        let submitButton = document.createElement('button')
        submitButton.innerText = "Submit";

        submitButton.addEventListener('click', () => this.checkAnswer());

        return submitButton;
    }

    modalClick(category) {
        // console.log("clicked"+this.question)
        $('#showQ').html(this.question)
        $(category + this.pointValue).css("background-color", "yellow")
        this.showAnswer()

        removeSubmitAnswerButton();
        document.querySelector("#pickAnswer").appendChild(this.submitButton);

    }

    showAnswer() {
        for (i = 0; i < this.choices.length; i++) {
            $('#choice0' + i).html(this.choices[i])
        }
    }


    checkAnswer() {
        this.dataChoice = new Number($(".radio:checked").attr('data-choice')).valueOf();

        console.log("checkAnswer Ran");
        console.log("data choice: " + this.dataChoice)
        console.log("valid answer: " + this.validAnswer)
        console.log(typeof(this.dataChoice))
        console.log(typeof(this.validAnswer))


        if (this.dataChoice === this.validAnswer) {
            console.log(score + "score")
            score = (score + this.pointValue)
            console.log(score + "score")
            console.log(this.pointValue + "value")
            // initiate score in  


        } else {
            score = (score - this.pointValue)
            console.log(score + "score else state")
            console.log(this.pointValue + "pointvalue else state")
        }

        $('.playerOne').html(score)
    }






    playAnimation() {

    }

}
// set music show question and answer pull
let musicObjects = []
for (i = 0; i < 5; i++) {
    let workingObject = new QuestionBoxes(musicQuestion[i].question, musicQuestion[i].validAnswer, musicQuestion[i].choices, (i * 100 + (100)))
    musicObjects.push(workingObject)

    $("#music" + (i * 100 + (100))).on("click", () => workingObject.modalClick('#music'))

}
// set movie show question and answer pull
let movieObjects = []
for (i = 0; i < 5; i++) {
    let workingObject = new QuestionBoxes(movieQuestion[i].question, movieQuestion[i].validAnswer, movieQuestion[i].choices, (i * 100 + (100)))
    movieObjects.push(workingObject)

    $("#movie" + (i * 100 + (100))).on("click", () => workingObject.modalClick('#movie'))
}
// set Tv Show question and answer pull
let tvObjects = []
for (i = 0; i < 5; i++) {
    let workingObject = new QuestionBoxes(tvQuestion[i].question, tvQuestion[i].validAnswer, tvQuestion[i].choices, (i * 100 + (100)))
    tvObjects.push(workingObject)

    $("#tv" + (i * 100 + (100))).on("click", () => workingObject.modalClick('#tv'))
}
// set events question and answer pull
let eventObjects = []
for (i = 0; i < 5; i++) {
    let workingObject = new QuestionBoxes(eventQuestion[i].question, eventQuestion[i].validAnswer, eventQuestion[i].choices, (i * 100 + (100)))
    eventObjects.push(workingObject)

    $("#event" + (i * 100 + (100))).on("click", () => workingObject.modalClick('#event'))
}


