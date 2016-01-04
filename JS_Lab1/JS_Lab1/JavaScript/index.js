//uppgift 1
var kronorIDollar = MoneyDollar(sekKronor);
var kronorIPund = MoneyPund(sekKronor);

function MoneyDollar(sekKronor) {
    var kronor = document.getElementById('pickANumber').value;
    var result = kronor / 6 + ' dollar';
    document.getElementById("resultDollar").innerHTML = result;
}

function MoneyPund(sekKronor) {
    var kronor = document.getElementById('pickANumber').value;
    var result = kronor / 12 + ' pund';
    document.getElementById("resultPund").innerHTML = result;
}