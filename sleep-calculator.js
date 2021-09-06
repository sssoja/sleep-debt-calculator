const getSleepHours = day => {
  switch (day) {
    case "Monday":
      return 8;
      break;
    case "Tuesday":
      return 9;
      break;
    case "Wednesday":
      return 7;
      break;
    case "Thursday":
      return 4;
      break;
    case "Friday":
      return 5;
      break;
    case "Saturday":
      return 9;
      break;
    case "Sunday":
      return 10;
      break;
  }
};

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

const getIdealSleepHours = () => {
  const idealHours = 9;
  return idealHours * 7;
};

console.log(`Your actual sleep hours are ${getActualSleepHours()}`);
console.log(`Your ideal sleep hours are ${getIdealSleepHours()}`);

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${actualSleepHours - idealSleepHours} more hours than needed`
    );
  } else {
    console.log(
      `You got ${
        idealSleepHours - actualSleepHours
      } less hours than needed. You should get some rest`
    );
  }
};

calculateSleepDebt();
