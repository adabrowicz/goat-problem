let resultArr = Array.from(Array(10000000).fill(3));

const chooseAnyDoor = function () {
  return Math.floor(Math.random() * 3);
};

const playGame = function (change = true) {
  let choiceArray = Array.from(Array(3).fill(0));

  const winningDoor = chooseAnyDoor();
  choiceArray[winningDoor] = 1;

  const initialChoice = chooseAnyDoor();
  choiceArray[initialChoice] = 1;

  const rejectedDoor = choiceArray.findIndex((e) => e === 0);
  choiceArray[rejectedDoor] = -1;

  let finalChoice;
  if (change) {
    // console.log(initialChoice);
    // console.log(choiceArray);

    finalChoice = choiceArray.findIndex(
      (e, i) => e !== -1 && i !== initialChoice
    );

    // console.log(finalChoice);
  } else finalChoice = initialChoice;

  return finalChoice === winningDoor ? 1 : 0;
};

const runStatistic = function (change = true) {
  resultArr.forEach((e, i) => {
    resultArr[i] = playGame(change);
  });
  let occur0;
  let occur1;

  occur0 = resultArr.reduce((acc, curr) => {
    return curr === 0 ? acc + 1 : acc;
  });
  occur1 = resultArr.reduce((acc, curr) => {
    return curr === 1 ? acc + 1 : acc;
  });
  console.log(
    `Win to lose ratio ${change ? "with" : "without"} change ${
      Math.round((100000 * occur1) / occur0) / 100000
    }`
  );
};

runStatistic(true);
runStatistic(false);
