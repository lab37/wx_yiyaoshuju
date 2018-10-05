function invoice(low,hight,lowP,diffP,allP) {
  var diffPrice = 0.0;
  var profit = 0.0;
  if (allP=="") {
    diffPrice = low * lowP + (hight - low) * diffP;
  } else if (diffP=="") {
    diffPrice = low*lowP + hight*allP;
  } else {
    diffPrice = (hight - low) * diffP + hight * allP;
  }
  profit = hight - diffPrice - low;


  return [diffPrice, profit];
}


module.exports = {
  Invoice: invoice
}
