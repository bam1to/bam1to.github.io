let finishButton = document.querySelector(".finish-button"),
  activity = document.querySelector(".activity-choise__select"),
  formula = document.querySelector(".formula-choise__select"),
  sex_choise = document.querySelectorAll(".sex-choise__button"),
  age = document.querySelector(".age-choise__select"),
  growth = document.querySelector(".growth-choise__select"),
  weight = document.querySelector(".weight-choise__select"),
  output = document.querySelector(".result"),
  result;

function stopPrevDef(e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
}

function checkEmpty(value, text) {
  if (value.innerHTML !== text) {
    value.innerHTML = text;
  }
}

let path = window.location.pathname.split("/"),
  pathPoint = path[path.length - 1];

age.addEventListener("keydown", stopPrevDef);
growth.addEventListener("keydown", stopPrevDef);
weight.addEventListener("keydown", stopPrevDef);

function calculateCalories() {
  if (formula.value == "miff") {
    if (sex_choise[0].classList.contains("selected")) {
      return (result =
        (10 * weight.value + 6.25 * growth.value - 5 * age.value - 161) *
        activity.value);
    } else {
      return (result =
        (10 * weight.value + 6.25 * growth.value - 5 * age.value + 5) *
        activity.value);
    }
  } else {
    if (sex_choise[0].classList.contains("selected")) {
      return (result =
        (447.593 +
          9.247 * weight.value +
          3.098 * growth.value -
          4.33 * age.value) *
        activity.value);
    } else {
      return (result =
        (88.362 +
          13.397 * weight.value +
          4.799 * growth.value -
          5.677 * age.value) *
        activity.value);
    }
  }
}

function calculateFizCalories(norm) {
  let point = document.querySelector(".point-choise__select");
  console.log(point.value);

  let idealProcent = 15,
    extrimProcent = 30,
    idealNorm,
    extrimNorm;

  if (point.value === "down") {
    idealNorm = norm - (idealProcent * norm) / 100;
    extrimNorm = norm - (extrimProcent * norm) / 100;
    return [idealNorm, extrimNorm];
  } else {
    idealNorm = norm + (idealProcent * norm) / 100;
    extrimNorm = norm + (extrimProcent * norm) / 100;
    return [idealNorm, extrimNorm];
  }
}

finishButton.addEventListener("click", () => {
  let norm;

  if (weight.value > 300 || weight.value < 40) {
    output.innerHTML = "Пожалуйста, введите свой настоящий вес.";
    return;
  }

  if (growth.value > 220 || growth.value < 140) {
    output.innerHTML = "Пожалуйста, введите свой настоящий рост.";
    return;
  }

  if (age.value < 13 || age.value > 80) {
    output.innerHTML = "Возраст должен быть больше 13 лет и меньше 80 лет.";
    return;
  }
  norm = calculateCalories();
  if (pathPoint === "fiz_index.html") {
    let fizResult,
      idealOutput = document.querySelector(".ideal"),
      extrimOutput = document.querySelector(".extrim");

    checkEmpty(idealOutput, "Идеальная диета: ");
    checkEmpty(extrimOutput, "Экстримальная диета: ");

    fizResult = calculateFizCalories(norm);
    console.log(fizResult);
    idealOutput.innerHTML += fizResult[0];
    extrimOutput.innerHTML += fizResult[1];
  } else {
    checkEmpty(output, "");
    output.innerHTML += norm + " ккал";
  }
});
