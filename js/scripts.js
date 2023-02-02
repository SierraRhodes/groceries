function handleForm(event) {
  event.preventDefault();

  //Creating Array
  const userSelections = document.querySelectorAll("input[name=groceries]:checked");
  const userSelectionsArray = Array.from(userSelections);
  userSelectionsArray.sort();
  
  const userSelectionsArray2 = String.prototype.toUpperCase.apply(userSelectionsArray).split(",");
  console.log(userSelectionsArray2)

  //Looping Through Array
  userSelectionsArray.forEach(function(element) {
    const list1 = document.createElement("li");
    list1.append(element.value);
    const firstUl = document.createElement("ul");
    firstUl.prepend(list1);
    document.body.append(firstUl);

  });

}

window.addEventListener("load", function() {
  document.querySelector("form")
addEventListener("submit", handleForm)

});