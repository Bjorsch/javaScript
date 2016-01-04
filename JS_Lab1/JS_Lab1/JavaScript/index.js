//Uppgift 1
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

//Uppgift 2

function numbers() {
    var text = '';
    var i;
    for (i = 100; i > 0; i--) {
        text += i + '<br>';
    }
    document.getElementById('result').innerHTML = text;
}








//function ToHigh() {
//    var tal1 = document.getElementById('nummer1').value;
//    var tal2 = document.getElementById('nummer2').value;
//    if (tal1*2 < ) {
        
//    }
//}