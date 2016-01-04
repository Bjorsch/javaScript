//Uppgift 1
var kronorIDollar = MoneyDollar(sekKronor);
var kronorIPund = MoneyPund(sekKronor);

function MoneyDollar(sekKronor) {
    var kronor = document.getElementById('pickANumberForDollar').value;
    var result = kronor / 6 + ' dollar';
    document.getElementById("resultDollar").innerHTML = result;
}

function MoneyPund(sekKronor) {
    var kronor = document.getElementById('pickANumberForPund').value;
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
        document.getElementById('summa').innerHTML = 'Första talet var störst: ' + +first;
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

//Uppgift 5
function Submit() {
    var first = document.getElementById('number1').value;
    var second = document.getElementById('number2').value;
    var three = document.getElementById('number3').value;

    var calc = 'Summa: ' + (+first + +second + +three);
    document.getElementById('sum').innerHTML = calc;

    var average = 'Medelvärde: ' + (+first + +second + +three) / 3;
    document.getElementById('average').innerHTML = average;
}
