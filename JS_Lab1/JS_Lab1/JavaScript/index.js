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

function Numbers() {
    var text = '';
    for (var i = 100; i > 0; i--) {
        text += i + ', ';
    }
    document.getElementById('result').innerHTML = text;
}

//Uppgift 3 
function IfHigh() {
    var first = document.getElementById('nr1').value;
    var second = document.getElementById('nr2').value;
    if (first > second) {
        document.getElementById('summa').innerHTML = first;
    }
}

//Uppgift 4
function ToHigh() {
    var first = document.getElementById('nummer1').value;
    var second = document.getElementById('nummer2').value;
    if (first / 2 > second) {
        document.getElementById('numberToHigh').innerHTML = 'För stort tal';
    }
}

//






//function ToHigh() {
//    var tal1 = document.getElementById('nummer1').value;
//    var tal2 = document.getElementById('nummer2').value;
//    if (tal1*2 < ) {
        
//    }
//}