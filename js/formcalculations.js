var pizza_prices = new Array();
pizza_prices["Petite"]=3;
pizza_prices["Moyenne"]=6;
pizza_prices["G&eacuteante"]=9;

var filling_prices= new Array();
filling_prices["None"]=0;
filling_prices["Pizza aux legumes d'ete"]=12;
filling_prices["Pizza aux legumes d'hiver"]=12;
filling_prices["Pizza Reine"]=15;
filling_prices["Pizza Pepperoni"]=14;
filling_prices["Calzone Paysanne"]=12;
filling_prices["Calzone"]=11;
filling_prices["Pizza au chocolat et bonbons"]=11;
filling_prices["Pizza nutella banane"]=11;
filling_prices["Pizza cake salami"]=17;
filling_prices["Pizza cake pepperoni"]=18;

function getPizzaSizePrice() {
  var pizzaSizePrice=0;
  var theForm = document.forms["comande"];
  var selectedPizza = theForm.elements["selectedpizza"];
  for(var i = 0; i < selectedPizza.length; i++) {
    if(selectedPizza[i].checked) {
      pizzaSizePrice = pizza_prices[selectedPizza[i].value];
      break;
    }
  }
  return pizzaSizePrice;
}

function getFillingPrice() {
  var pizzaFillingPrice=0;
  var theForm = document.forms["comande"];
  var selectedFilling = theForm.elements["filling"];
  pizzaFillingPrice = filling_prices[selectedFilling.value];
  return pizzaFillingPrice;
}

function fromagePrice() {
  var fromagePrice=0;
  var theForm = document.forms["comande"];
  var includeFromage = theForm.elements["includefromage"];
  if(includeFromage.checked==true) {
    fromagePrice=3;
  }
  return fromagePrice;
}

function calculateTotal() {
  var pizzaPrice = getPizzaSizePrice() + getFillingPrice() + fromagePrice();
  var divobj = document.getElementById('totalPrice');
  divobj.style.display='block';
  divobj.innerHTML = "Prix total: " + pizzaPrice + " €";
}

function hideTotal() {
  var divobj = document.getElementById('totalPrice');
  divobj.style.display='none';
}
