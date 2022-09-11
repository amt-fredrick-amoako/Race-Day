let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
let runnerAge = 18;
if (registeredEarly == true && runnerAge > 18) {
  raceNumber += 1000;
}
if (registeredEarly == true && runnerAge > 18) {
  console.log(`Race number ${raceNumber}: You will race at 9:30am.`);
} else if (registeredEarly == false && runnerAge > 18) {
  console.log(`Race number ${raceNumber}: You will race at 11:00am.`);
}
if (runnerAge < 18) {
  console.log(`Race number ${raceNumber}: You will race at 12:00pm.`);
}
else{
  console.log('See the registration desk!');
}
