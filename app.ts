//name
let me = "kaley scheid";
me.toUpperCase()
console.log("Name: " + me)
//carer/field
console.log("Career: Full stack developer")
//description of yourself
console.log("Description: I love World of Warcraft")
//list of interests
let interests = ["* test 1", "* test 2", "* test 3"];
console.log(interests[0]);
console.log(interests[1]);
console.log(interests[2]);
//list of past positions company/place name title description
function displayPosition(Name:string, title:string, des:string) {
if (Name) {console.log(Name, title, des);}}
displayPosition("* name1", "title1", "des1");
displayPosition("* name2", "title2", "des2");
displayPosition("* name3", "title3", "des3");


//list of skills
function displaySkill(skillName:string, cool:string) {
if (cool=="yes") {console.log("* BAM "+skillName)}
else {console.log(skillName)}
}
displaySkill(" skill 1", "yes");
displaySkill(" skill 2", "yes");
displaySkill("skill 3", "no");