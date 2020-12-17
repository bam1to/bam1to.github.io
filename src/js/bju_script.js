let valueFields = document.querySelectorAll(".output-values"),
  valueInputs = document.querySelectorAll(".inputs-values"),
  fatsOutput = document.querySelector(".fats-choise__select");

function addEvent(arr, vals) {
  for (let i = 0; i < arr.length; i++) {
    vals[i].addEventListener("input", () => {
      arr[i].innerHTML = vals[i].value;
      fatsOutput.value = 100 - (+arr[0].innerHTML + +arr[1].innerHTML);
    });
  }
}

addEvent(valueFields, valueInputs);

let finishButton = document.querySelector(".finish-button"),
  firstFieldCal = document.querySelector(".calories-choise__select"),
  procentResult,
  output,
  modal = document.querySelector(".result");

let standarts = {
  prot: 4.1,
  carbs: 4.1,
  fats: 9.29,
};

finishButton.addEventListener("click", () => {
  let p = modal.querySelector("p");

  if (modal.contains(p)) {
    let paragraphs = modal.getElementsByTagName("p");
    for (let i = 2; i >= 0; i--) {
      modal.removeChild(paragraphs[i]);
    }
  }

  let protVal = Math.round(
    (firstFieldCal.value * valueFields[0].innerHTML) / 100 / standarts.prot
  );
  let carbsVal = Math.round(
    (firstFieldCal.value * valueFields[1].innerHTML) / 100 / standarts.carbs
  );
  let fatsVal = Math.round(
    (firstFieldCal.value * fatsOutput.value) / 100 / standarts.fats
  );

  let resultsArr = [protVal, carbsVal, fatsVal];
  let meanings = ["белков", "углеводов", "жиров"];

  for (let i = 0; i < 3; i++) {
    let newBlock = document.createElement("p");
    newBlock.innerHTML = `Норма ${meanings[i]}: ` + resultsArr[i] + "г";
    modal.appendChild(newBlock);
  }
});
