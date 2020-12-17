let weight = document.querySelector(".weight-choise__select"),
  finishButton = document.querySelector(".finish-button"),
  output = document.querySelector(".result"),
  growth = document.querySelector(".growth-choise__select"),
  imt;

function stopPrevDef(e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
}

growth.addEventListener("keydown", stopPrevDef);
weight.addEventListener("keydown", stopPrevDef);

finishButton.addEventListener("click", function () {
  if (output.innerHTML !== "") {
    output.innerHTML = "";
  }

  if (weight.value > 300 || weight.value < 40) {
    output.innerHTML = "Пожалуйста, введите свой настоящий вес.";
    return;
  }

  if (growth.value > 2.20 || growth.value < 1.4) {
    output.innerHTML = "Пожалуйста, введите свой настоящий рост.";
    return;
  }

  //ИМТ = вес (кг) / рост (м)2
  imt = Math.round(weight.value / growth.value ** 2);
  output.innerHTML += imt + ' ';
  if (imt < 16.5) {
    output.innerHTML += 'Выраженный дефицит массы';
  }else if (imt <= 18.49) {
    output.innerHTML += '(Недостаточная (дефицит) масса тела)'
  }else if (imt <= 24.99) {
    output.innerHTML += '(Норма)'
  }else if (imt <= 29.99) {
    output.innerHTML += '(Избыточная масса тела (предожирение))'
  }else if (imt <= 34.99) {
    output.innerHTML += '(Ожирение первой степени)'
  }else if (imt <= 39.99) {
    output.innerHTML += '(Ожирение второй степени)'
  }else {
    output.innerHTML += '(Ожирение третьей степени (морбидное))'
  }

});
