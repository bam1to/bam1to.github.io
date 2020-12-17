let choiseButtons = document.querySelectorAll(".sex-choise__button");

function addClass(selector1, selector2, className, action) {
    selector1.addEventListener(action, () => {
      if (selector1.classList.contains(className)) {
        return;
      }
  
      selector1.classList.add(className);
      selector2.classList.remove("selected");
    });
  }
  addClass(choiseButtons[0], choiseButtons[1], "selected", "click");
  addClass(choiseButtons[1], choiseButtons[0], "selected", "click");
