// let Product1 = document.getElementById('Product1')
// let Product2 = document.getElementById('Product2')
let basket = document.getElementById('Demo')

let product1 = "Пленки для холодной ламинации, матовая 15 микрон и глянцевая 12 микрон."
let product2 = "Пленки для термальной ламинации, втулка 76 мм (3000 м)"
let product3 = "Пленки для термальной ламинации, втулка 25мм (200-300м)"
let product4 = "Скотч: упаковочный, бумажный, двухсторонний, на пористой основе"
let product5 = "Спираль переплетная металлическая шаг 2:1 и 3:1. Резанная и в бобинах."
let product6 = "Лаки, клея для ламинации"
let product7 = "Шнур-ручка с пластиковыми наконечниками для бумажных пакетов текстиль и крафт."
let product8 = "Материалы для скрепления блоков"
let product9 = "Механизмы для папок 123 мм, 210 мм, 290 мм. двух и четырёх кольцевые."
let product10 = "Плёнки Soft touch (Вельвет) втулка 25 мм, 76мм."
let product11 = "Плёнки для офисного ламинатора серия для цифровых печатей пр-ва Ю.Корея"
let product12 = "Плёнки для выборочной ламинации (для офисного ламинатора) в рулонах пр-во Ю. Корея"
let product13 = "Плёнки для выборочной ламинации (для офисного ламинатора) в листах А-4 пр-во Ю. Корея"
let product14 = "Фольга для горячего тиснения"
let product15 = "Пакеты для журналов"
let product16 = "Монтажный Астролон"

let count2 = []
let count1 = []
let count3 = []
let count4 = []
let count5 = []
let count6 = []
let count7 = []
let count8 = []
let count9 = []
let count10 = []
let count11 = []
let count12 = []
let count13 = []
let count14 = []
let count15 = []
let count16 = []

let quantity1 = 0;
let quantity2 = 0;
let quantity3 = 0;
let quantity4 = 0;
let quantity5 = 0;
let quantity6 = 0;
let quantity7 = 0;
let quantity8 = 0;
let quantity9 = 0;
let quantity10 = 0;
let quantity11 = 0;
let quantity12 = 0;
let quantity13 = 0;
let quantity14 = 0;
let quantity15 = 0;
let quantity16 = 0;

function add1() {
    count1.push(1)
    quantity1 = count1.length.toString()
    return document.getElementById("count1").innerHTML = quantity1;
}

function del1() {
    count1.pop()
    quantity1 = count1.length.toString()
    return document.getElementById("count1").innerHTML = quantity1;
}

function add2() {
    count2.push(1)
    quantity2 = count2.length.toString()
    return document.getElementById("count2").innerHTML = quantity2;
}

function del2() {
    count2.pop()
    quantity2 = count2.length.toString()
    return document.getElementById("count2").innerHTML = quantity2;
}

function add3() {
    count3.push(1)
    quantity3 = count3.length.toString()
    return document.getElementById("count3").innerHTML = quantity3;
}

function del3() {
    count3.pop()
    quantity3 = count3.length.toString()
    return document.getElementById("count3").innerHTML = quantity3;
}

function add4() {
    count4.push(1)
    quantity4 = count4.length.toString()
    return document.getElementById("count4").innerHTML = quantity4;
}

function del4() {
    count4.pop()
    quantity4 = count4.length.toString()
    return document.getElementById("count4").innerHTML = quantity4;
}

function add5() {
    count5.push(1)
    quantity5 = count5.length.toString()
    return document.getElementById("count5").innerHTML = quantity5;
}

function del5() {
    count5.pop()
    quantity5 = count5.length.toString()
    return document.getElementById("count5").innerHTML = quantity5;
}

function add6() {
    count6.push(1)
    quantity6 = count6.length.toString()
    return document.getElementById("count6").innerHTML = quantity6;
}

function del6() {
    count6.pop()
    quantity6 = count6.length.toString()
    return document.getElementById("count6").innerHTML = quantity6;
}

function add7() {
    count7.push(1)
    quantity7 = count7.length.toString()
    return document.getElementById("count7").innerHTML = quantity7;
}

function del7() {
    count7.pop()
    quantity7 = count7.length.toString()
    return document.getElementById("count7").innerHTML = quantity7;
}

function add8() {
    count8.push(1)
    quantity8 = count8.length.toString()
    return document.getElementById("count8").innerHTML = quantity8;
}

function del8() {
    count8.pop()
    quantity8 = count1.length.toString()
    return document.getElementById("count8").innerHTML = quantity8;
}

function add9() {
    count9.push(1)
    quantity9 = count9.length.toString()
    return document.getElementById("count9").innerHTML = quantity9;
}

function del9() {
    count9.pop()
    quantity9 = count9.length.toString()
    return document.getElementById("count9").innerHTML = quantity9;
}

function add10() {
    count10.push(1)
    quantity10 = count10.length.toString()
    return document.getElementById("count10").innerHTML = quantity10;
}

function del10() {
    count10.pop()
    quantity10 = count10.length.toString()
    return document.getElementById("count10").innerHTML = quantity10;
}

function add11() {
    count11.push(1)
    quantity11 = count11.length.toString()
    return document.getElementById("count11").innerHTML = quantity11;
}

function del11() {
    count11.pop()
    quantity11 = count11.length.toString()
    return document.getElementById("count11").innerHTML = quantity11;
}

function add12() {
    count12.push(1)
    quantity12 = count12.length.toString()
    return document.getElementById("count12").innerHTML = quantity12;
}

function del12() {
    count12.pop()
    quantity12 = count12.length.toString()
    return document.getElementById("count12").innerHTML = quantity12;
}

function add13() {
    count13.push(1)
    quantity13 = count13.length.toString()
    return document.getElementById("count13").innerHTML = quantity13;
}

function del13() {
    count13.pop()
    quantity13 = count13.length.toString()
    return document.getElementById("count13").innerHTML = quantity13;
}

function add14() {
    count14.push(1)
    quantity14 = count14.length.toString()
    return document.getElementById("count14").innerHTML = quantity14;
}

function del14() {
    count14.pop()
    quantity14 = count14.length.toString()
    return document.getElementById("count14").innerHTML = quantity14;
}

function add15() {
    count15.push(1)
    quantity15 = count15.length.toString()
    return document.getElementById("count15").innerHTML = quantity15;
}

function del15() {
    count15.pop()
    quantity15 = count15.length.toString()
    return document.getElementById("count15").innerHTML = quantity15;
}

function add16() {
    count16.push(1)
    quantity16 = count16.length.toString()
    return document.getElementById("count16").innerHTML = quantity16;
}

function del16() {
    count16.pop()
    quantity16 = count16.length.toString()
    return document.getElementById("count16").innerHTML = quantity16;
}


function purchases() {

    basket = []

    if (count1.length !== 0) {
        basket.push(product1 + ': ' + quantity1 + '<br>')
    }

    if (count2.length !== 0) {
        basket.push(product2 + ': ' + quantity2 + '<br>')
    }

    if (count3.length !== 0) {
        basket.push(product3 + ': ' + quantity3 + '<br>')
    }

    if (count4.length !== 0) {
        basket.push(product4 + ': ' + quantity4 + '<br>')
    }

    if (count5.length !== 0) {
        basket.push(product5 + ': ' + quantity5 + '<br>')
    }

    if (count6.length !== 0) {
        basket.push(product6 + ': ' + quantity6 + '<br>')
    }

    if (count7.length !== 0) {
        basket.push(product7 + ': ' + quantity7 + '<br>')
    }

    if (count8.length !== 0) {
        basket.push(product8 + ': ' + quantity8 + '<br>')
    }

    if (count9.length !== 0) {
        basket.push(product9 + ': ' + quantity9 + '<br>')
    }

    if (count10.length !== 0) {
        basket.push(product10 + ': ' + quantity10 + '<br>')
    }

    if (count11.length !== 0) {
        basket.push(product11 + ': ' + quantity11 + '<br>')
    }

    if (count12.length !== 0) {
        basket.push(product12 + ': ' + quantity12 + '<br>')
    }

    if (count13.length !== 0) {
        basket.push(product13 + ': ' + quantity13 + '<br>')
    }

    if (count14.length !== 0) {
        basket.push(product14 + ': ' + quantity14 + '<br>')
    }

    if (count15.length !== 0) {
        basket.push(product15 + ': ' + quantity15 + '<br>')
    }

    if (count16.length !== 0) {
        basket.push(product16 + ': ' + quantity16 + '<br>')
    }


    document.getElementById("Demo").innerHTML = basket.join('')

}


function onMain() {
    window.location = 'C:/projects/web/public/index.html'
}