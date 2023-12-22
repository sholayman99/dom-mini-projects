const list = document.querySelector("#list");
list.addEventListener("change", appendItem());

function appendItem() {
  // const itemName = document.querySelector("#item")

  let table = document.querySelector("table");
  let bodyNode = document.createElement("tbody");
  let tdPriceNode = appendPrice();
  let tdListNode = appendList();
  bodyNode.appendChild(tdListNode);
  bodyNode.appendChild(tdPriceNode);
  table.appendChild(bodyNode);
}

function appendList() {
  const inputValue = document.querySelector("#list").value;
  let tdNode = document.createElement("td");
  let textNode = document.createTextNode(inputValue);
  tdNode.appendChild(textNode);
  return tdNode;
}

function appendPrice() {
  const priceValue = document.querySelector("#price-value").value;
  let tdNode = document.createElement("td");
  let priceNode = document.createTextNode(priceValue);
  tdNode.appendChild(priceNode);
  return tdNode;
}
