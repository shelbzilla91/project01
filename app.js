
console.log("app.js")

var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var question = 0;


var count=24;

var musicQuestion = [{
question: "This famous band reached #1 in billboard charts in 1976 for their album “Rumours",
choices: ["FleetwoodMac", "The Doors", "REO Speedwagon", "THe Doobie Brothers" ],
validAnswer: 0
}, {
question:"This  band sang a popular played in many sports events, with a distinct ‘beat’ to it",
choices: [" “Eye of the Tiger” by Survivor", " “The Final Countdown” by Europe", " “Space Jam” (Quad City DJ’s)", "“We will Rock you” by Queen"],
validAnswer: 3

}, {
question:" This singer went solo in 1981 from a famous band that included Lindsey Buckingham.",
choices: [" Robert Plant - Led Zeppelin", "Joan Jett - The Runaways", "Stevie Nicks - Fleetwood Mac", "Annie Lennox - Eurythmics"],
validAnswer: 2

}, {
question:"This member of this band left after releasing their album, “Raised On Radio”",
choices: [" Axl Rose of Guns and Roses", "Don Felder of the Eagles", "Steve Perry of Journey", "Mick Jones of The Clash"],
validAnswer: 2

}, {
question:"This group was known for their hit “Disco Inferno” in the height of the disco era",
choices: ["The Trammps", "The Begees", "Sister Sledge", "KC and the Sunshine Band"],
validAnswer: 0

 }]


var movieQuestion=[{
question:"This Stephen King movie was famous for the line, “Here’s Johnny!”",
choices: ["The Dead Zone", "Carrie", "The Shining", "IT"],
validAnswer: 2

}, {
question:"This movie was the first of many for actress Molly Ringwald",
choices: ["Pretty In Pink", "The Breakfast Club", "Sixteen Candles”", "Some Kind of Wonderful"],
validAnswer: 2

}, {
question:"This movie is known for the “Truffle Shuffle” preformed by Chunk",
choices: ["Pretty in Pink", "Stand by Me”", "The Goonies", "Animal House"],
validAnswer: 2

},{
question:" What popular movie did Patrick Swayze say, “Nobody puts Baby in a corner.",
choices: ["Road House", "Dirty Dancing", "Red Dawn", "The Outsiders"],
validAnswer: 1
},
{
 question:"What movie is this line from, said by John Travolta-Would you just watch the hair.  You know I work on my hair a long time…",
choices: ["Grease", "Saturday Night Fever", "Urban Cowboy", "Pulp Fiction"],
 validAnswer: 1
}]

var eventQuestion=[{
question:"This famous singer was shot in New York City, leaving behind partner Yoko Uno",
choices: ["Marvin Gaye.", "Sharon Tate.", "John Lennon", "Karen Carpenter"],
validAnswer: 2
},{
question:"Which 1980s US president survived an assassination attempt?",
choices: ["John F. Kennedy", "George H. Bush", "Ronald Reagan", "Bill Clinton"],
validAnswer: 2
},
{
question:"Where were the 1980 Olympics held which were boycotted by American athletes?",
choices: ["Moscow", "New Dehli", "Tokyo", "Berlin"],
validAnswer: 0
},
{
question:"Which volcano in Washington sate erupted in 1980?",
choices: ["Mt. Rainer", "Mount St. Helens", "Mt. Everest", "Mount Washington"],
validAnswer: 1
},
{
question:"Where in the Ukraine was there a nuclear explosion in 1986?",
choices: ["Moscow", "Siberia", "Chernobyl", "Prusia"],
validAnswer: 2
}]

var showQuestion=[{
question:"In which Fox TV show did Johnny Dep play an undercover cop in high school?",
choices: ["Punky Brewster", "Cosby Show", "21 Jump Street", "A Different World"],
validAnswer: 2   
},
{
question:"What was the name of David Hasselhoff's talking car in Knight Ridder?",
choices: ["Joe", "Alfred", "Jax", "Kit","Van"],
validAnswer: 3
},
{
question:"What eighties TV show starred Tom Hanks in women's clothing?",
choices: ["Three's Company", "Mort and Mindy", "Bosom Buddies", "Girl Talk","Facts of Life"],
validAnswer: 2
},
{
question:"Which Golden Girls starred in two other shows before they aired?",
choices: ["Betty White", "Rue McClanahan", "Debbie Reynolds", "Bea Arthur","Estelle Getty"],
validAnswer: 3
},
{
question:"Which girl on 'Facts of Life' had braces?",
choices: ["Blair", "Jo", "Natalie", "Tootie","Edna"],
validAnswer: 3
}]


