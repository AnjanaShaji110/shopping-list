var listOfNeeds = [
  {
    key: "egg",
    name: "Egg",
  },
  {
    key: "kittenfood",
    name: "Kitten Food",
  },
  {
    key: "bacon",
    name: "Bacon",
  },
  {
    key: "rice",
    name: "Rice",
  },
];
var listOfNeedsMap = listOfNeeds.map((val, i) => {
  return (
    "<li id=" +
    val.key +
    '><input type="checkbox">&nbsp;' +
    val.name +
    '<a href="#" id=' +
    i +
    ' onclick="removeItemFromNeedsList(' +
    i +
    ')">&#10006;</a></li>'
  );
});
// To Add Items
function addItems(type) {
  let textValue = document.getElementById("label1").value.toLowerCase();
  let id = textValue.toLowerCase().replace(/\s/g, "");

  if (textValue === "") {
    alert("Please give an Input");
  } else {
    if (type === "need") {
      listOfNeeds.push({ key: id, name: textValue });
      let lengthOfNeeds = listOfNeeds.length - 1;
      let ul = document.getElementById("needs");
      let li = document.createElement("li");
      li.setAttribute("id", id);

      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      li.appendChild(input);
      li.appendChild(document.createTextNode("\u00A0"));

      let link = document.createElement("a");
      link.setAttribute("id", lengthOfNeeds);
      link.appendChild(document.createTextNode("✖"));
      link.setAttribute(
        "onclick",
        "removeItemFromNeedsList(" + lengthOfNeeds + ")"
      );

      li.appendChild(document.createTextNode(textValue));
      li.appendChild(link);
      ul.appendChild(li);
    } else {
      listOfHave.push({ key: id, name: textValue });
      let lengthOfHave = listOfHave.length - 1;
      let ul = document.getElementById("have");
      let li = document.createElement("li");
      li.setAttribute("id", id);

      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("checked", "true");
      li.appendChild(input);
      li.appendChild(document.createTextNode("\u00A0"));

      let link = document.createElement("a");
      link.setAttribute("id", lengthOfHave);
      link.appendChild(document.createTextNode("✖"));
      link.setAttribute(
        "onclick",
        "removeItemFromHaveList(" + lengthOfHave + ")"
      );
      li.appendChild(document.createTextNode(textValue));
      li.appendChild(link);
      ul.appendChild(li);
    }
  }
}
//   Listing for Have
var listOfHave = [
  {
    key: "steak",
    name: "Steak",
  },
  {
    key: "cream",
    name: "Cream",
  },
  {
    key: "cheese",
    name: "Cheese",
  },
  {
    key: "apples",
    name: "Apples",
  },
  {
    key: "milk",
    name: "Milk",
  },
];

var listOfHaveMap = listOfHave.map((val, i) => {
  return (
    "<li id=" +
    val.key +
    '><input type="checkbox" checked>&nbsp;' +
    val.name +
    '<a href="#" id=' +
    i +
    ' onclick="removeItemFromHaveList(' +
    i +
    ')">&#10006;</a></li>'
  );
});
function removeItemFromNeedsList(index) {
  var elem = document.getElementById(listOfNeeds[index].key);
  elem.parentNode.removeChild(elem);
}
function removeItemFromHaveList(index) {
  var rm = document.getElementById(listOfHave[index].key);
  rm.parentNode.removeChild(rm);
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("needs").innerHTML = listOfNeedsMap.join(" ");
  document.getElementById("have").innerHTML = listOfHaveMap.join(" ");
});
