//uppgift 1

var kronorIDollar = MoneyDollar(sekKronor);
//var kronorIPund = MoneyPund(kronor, pund);
//document.getElementById("resultDollar").innerHTML = kronorIDollar;

function MoneyDollar(sekKronor) {
    var kronor = document.getElementById('pickANumber').value;
    var kalle = kronor * 6;
    document.getElementById("resultDollar").innerHTML = kalle;
}

//function MoneyPund(kronor, pund) {

//}