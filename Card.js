let btn = document.getElementById("btn");
let display = document.getElementById("showData");
let hdd = document.getElementById("hdd");
let form = document.querySelector("#form");

const configs = () => {
  const cardData = JSON.parse(localStorage.getItem("cardData"));
  if (!cardData) {
    localStorage.setItem("cardData", JSON.stringify([]));
  } else {
    cardData.forEach((d) => {
      addInnerHTML(d);
    });
  }
};


function clickEvent(first, last) {
  if (first.value.length) {
    document.getElementById(last).focus();
  }
}

function addCard(event){
    //event.preventDefault();
  var inp = document.getElementsByName('card');
  var result = "";
  for (var i = 0; i < inp.length; i++){
    result += inp[i].value +"";
  }


  if(result.length<16){
      alert("Please fill all the data")
  }
  else{
    var data = {
    text: result,
  };
  }
  
  let cardDetail = JSON.parse(localStorage.getItem("cardData"));
  cardDetail.push(data);
  localStorage.setItem("cardData", JSON.stringify(cardDetail));
  addInnerHTML(data);
  for (var i = 0; i < inp.length; i++){
    inp[i].value=null;
  }
};

addInnerHTML = (data) => {
const listItem = document.createElement("div");

const span = document.createElement("span");
span.textContent = data.text;
span.className = "spanTag";
const a = document.createElement("BUTTON");
a.textContent = "delete";
a.className = "delbtn";
a.addEventListener("click", deleteBtn);
listItem.appendChild(span);
listItem.appendChild(a);
display.append(listItem);
};

const deleteBtn = (e)=>{
const t = e.target.parentElement;
const text = t.firstChild.textContent;
let cards = JSON.parse(localStorage.getItem("cardData"));
cards = cards.filter((td) => td.text != text);
localStorage.setItem("cardData", JSON.stringify(cards));
t.remove();
};

configs()