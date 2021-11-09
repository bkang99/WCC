function vendingMachine(input, productNumber) {
  let setChange = [500, 200, 100, 50, 20, 10]
  
  let productList = [
    {
      name : "Cracker", 
      price : 100
    },
    {
      name : "Candy", 
      price : 200
    },
    {
      name : "Chips", 
      price : 300
    },
    {
      name : "Gum", 
      price : 400
    },
    {
      name : "Soda", 
      price : 500
    }
  ]
  
  let productPrice;
  
  if (productNumber >= 0 && productNumber < 5){
    productPrice = productList[productNumber].price;
    if (productPrice > input){
    return "Not enough money for this product"
    }
    else if (productPrice == input){
      return "{" + productList[productNumber].name + " , change: []}"
    }
    else {
      let change = [];
      remainder = input-productPrice;
      for (let i = 0; i < 6; i++){
        while (setChange[i] <= remainder){
          change.push(setChange[i]);
          remainder -= setChange[i];
        }
      }
      return "{" + productList[productNumber].name + ", change: [" + change + "]}"
    }
  }
  else {
    return "Enter a valid product number."
  }
  
  
}

console.log(vendingMachine(200, 2));
console.log(vendingMachine(400, 3));
console.log(vendingMachine(400, 8));
console.log(vendingMachine(780, 4))