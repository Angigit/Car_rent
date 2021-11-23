const price_1 = "500 $";
const price_2 = "1000 $";
const price_3 = "3500 $";

const prices = document.querySelectorAll(".price");

function priceNull() {
    for (let p of prices) {
        if (document.getElementById('select-1').value == "null" || document.getElementById('select-2').value == "null" || document.getElementById('select-3').value == "null" || document.getElementById('select-4').value == "null" || document.getElementById('select-5').value == "null" || document.getElementById('select-6').value == "null" || document.getElementById('select-7').value == "null" || document.getElementById('select-8').value == "null" || document.getElementById('select-9').value == "null" || document.getElementById('select-10').value == "null") {
            p.innerHTML = "";
        } 
    }
}

function showPrice_1() {    
    if(document.getElementById('select-1').value == "twentyfour-hours") {
        prices[0].innerHTML = price_1;
    }
    else if (document.getElementById('select-1').value == "two-days") {
        prices[0].innerHTML = price_2;
    }
    else if (document.getElementById('select-1').value == "one-week") {
        prices[0].innerHTML = price_3;
    }
    else
        priceNull();
}

function showPrice_2() {
    if(document.getElementById('select-2').value == "twentyfour-hours") {
        prices[1].innerHTML = price_1;
    }
    else if (document.getElementById('select-2').value == "two-days") {
        prices[1].innerHTML = price_2;
    }
    else if (document.getElementById('select-2').value == "one-week") {
        prices[1].innerHTML = price_3;
    }
    else
        priceNull();
}

function showPrice_3() {
    if(document.getElementById('select-3').value == "twentyfour-hours") {
        prices[2].innerHTML = price_1;
    }
    else if (document.getElementById('select-3').value == "two-days") {
        prices[2].innerHTML = price_2;
    }
    else if (document.getElementById('select-3').value == "one-week") {
        prices[2].innerHTML = price_3;
    }
    else
        priceNull();
}

function showPrice_4() {
    if(document.getElementById('select-4').value == "twentyfour-hours") {
        prices[3].innerHTML = price_1;
    }
    else if (document.getElementById('select-4').value == "two-days") {
        prices[3].innerHTML = price_2;
    }
    else if (document.getElementById('select-4').value == "one-week") {
        prices[3].innerHTML = price_3;
    }
    else
        priceNull();
}

function showPrice_5() {
    if(document.getElementById('select-5').value == "twentyfour-hours") {
        prices[4].innerHTML = price_1;
    }
    else if (document.getElementById('select-5').value == "two-days") {
        prices[4].innerHTML = price_2;
    }
    else if (document.getElementById('select-5').value == "one-week") {
        prices[4].innerHTML = price_3;
    }
    else
        priceNull();
}

function showPrice_6() {
    if(document.getElementById('select-6').value == "twentyfour-hours") {
        prices[5].innerHTML = price_1;
    }
    else if (document.getElementById('select-6').value == "two-days") {
        prices[5].innerHTML = price_2;
    }
    else if (document.getElementById('select-6').value == "one-week") {
        prices[5].innerHTML = price_3;
    }
    else
        priceNull();
}

function showPrice_7() {
    if(document.getElementById('select-7').value == "twentyfour-hours") {
        prices[6].innerHTML = price_1;
    }
    else if (document.getElementById('select-7').value == "two-days") {
        prices[6].innerHTML = price_2;
    }
    else if (document.getElementById('select-7').value == "one-week") {
        prices[6].innerHTML = price_3;
    }
    else
        priceNull();
}

function showPrice_8() {
    if(document.getElementById('select-8').value == "twentyfour-hours") {
        prices[7].innerHTML = price_1;
    }
    else if (document.getElementById('select-8').value == "two-days") {
        prices[7].innerHTML = price_2;
    }
    else if (document.getElementById('select-8').value == "one-week") {
        prices[7].innerHTML = price_3;
    }
    else
        priceNull();
}

function showPrice_9() {
    if(document.getElementById('select-9').value == "twentyfour-hours") {
        prices[8].innerHTML = price_1;
    }
    else if (document.getElementById('select-9').value == "two-days") {
        prices[8].innerHTML = price_2;
    }
    else if (document.getElementById('select-9').value == "one-week") {
        prices[8].innerHTML = price_3;
    }
    else
        priceNull();
}

function showPrice_10() {
    if(document.getElementById('select-10').value == "twentyfour-hours") {
        prices[9].innerHTML = price_1;
    }
    else if (document.getElementById('select-10').value == "two-days") {
        prices[9].innerHTML = price_2;
    }
    else if (document.getElementById('select-10').value == "one-week") {
        prices[9].innerHTML = price_3;
    }
    else
        priceNull();
}