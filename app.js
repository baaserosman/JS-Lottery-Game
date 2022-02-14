let lotteryNumbers = () => {
  let myArray = [];
  let i = 0;

  while (myArray.length < 6) {
    const number = Math.floor(Math.random() * 90) + 1;

    if (!myArray.includes(number)) {
      myArray.push(number);
    }
  }
  myArray.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  while (myArray.length < 7) {
    const number7 = Math.floor(Math.random() * 90) + 1;
    if (!myArray.includes(number7)) {
      myArray.push(number7);
    }
  }

  while (myArray.length < 8) {
    const number8 = Math.floor(Math.random() * 90) + 1;
    {
      myArray.push(number8);
    }
  }
  let text = "";
  for (let i in myArray) {
    if (i < 5) {
      text += myArray[i] + " - ";
    } else if (i == 5 || i == 6) {
      text += myArray[i] + " | ";
    }
    if (i == 7) {
      text += myArray[i];
    }
  }

  return text;
};

const howTimes = document.querySelector("#number");
const button = document.querySelector(".btn");
const liste = document.getElementById("liste");

button.addEventListener("click", () => {
  let i = 0;
  liste.innerHTML = "";
  const enteredNumber = howTimes.value;
  console.log(enteredNumber);
  let listArray;
  while (i < enteredNumber) {
    listArray = document.createElement("li");
    listArray.textContent = lotteryNumbers();
    liste.appendChild(listArray);
    i++;
  }

  if (i == 8) {
    liste.style.backgroundColor = "#22BABB";
    liste.style.color = "#023535";
    liste.style.textShadow = "1px 1px";
  }
});
