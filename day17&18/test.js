   document.getElementById("move-btn").onclick = function() {
    var oldNum = -64;
    var newNum = oldNum >> 5;
    document.getElementById("moveright").innerHTML = newNum.toString();
}
document.getElementById("datatype-btn").onclick = function() {
    var b;
    var c = null;
    var d = true;
    document.getElementById("a").innerHTML = typeof(a);
    document.getElementById("b").innerHTML = typeof(b);
    document.getElementById("c").innerHTML = typeof(c);
    document.getElementById("d").innerHTML = typeof(d);
}
document.getElementById("calcha-btn").onclick = function() {
    var obj1 = new Object();
    var obj2 = new Object();
    var bool1 = true;
    var bool2 = false;
    var whatever = NaN;
    document.getElementById("bl1").innerHTML = obj1 && bool1;
    document.getElementById("bl2").innerHTML = bool1 && obj1;
    document.getElementById("bl2").innerHTML = bool2 && obj1;
    document.getElementById("obj").innerHTML = obj1 && obj2;
    document.getElementById("null1").innerHTML = whatever && bool1;
    document.getElementById("null2").innerHTML = bool1 && whatever;
}
document.getElementById("plusch-btn").onclick = function() {
    var num = 5;
    var stringnum = "5";
    document.getElementById("plusch1").innerHTML = num + num;
    document.getElementById("plusch2").innerHTML = num + stringnum;
    document.getElementById("plusch3").innerHTML = stringnum + num;
    console.log("Hello JavaScript!");
}
document.getElementById("comp-btn").onclick = function() {
    document.getElementById("comp1").innerHTML = 'a' < 'B';
    document.getElementById("comp2").innerHTML = 'A' < 'b';
    document.getElementById("comp3").innerHTML = 5 < "4";
    document.getElementById("comp4").innerHTML = 5 < a;
    document.getElementById("comp5").innerHTML = 'abc' < 'abd';
}


document.getElementById("add-btn").onclick = function() {
    var num1 = document.getElementById("first-number").value;
    var num2 = document.getElementById("second-number").value;
    var result = Number(num1) + Number(num2);
    document.getElementById("result").innerHTML = "运算结果为" + result;
}
document.getElementById("minus-btn").onclick = function() {
    var num1 = document.getElementById("first-number").value;
    var num2 = document.getElementById("second-number").value;
    var result = num1 - num2;
    document.getElementById("result").innerHTML = "运算结果为" + result;
}
document.getElementById("times-btn").onclick = function() {
    var num1 = document.getElementById("first-number").value;
    var num2 = document.getElementById("second-number").value;
    var result = num1 * num2;
    document.getElementById("result").innerHTML = "运算结果为" + result;
}
document.getElementById("divide-btn").onclick = function() {
    var num1 = document.getElementById("first-number").value;
    var num2 = document.getElementById("second-number").value;
    try {
        if (num2 == 0)  throw "除数不能为0!";
    }
    catch(err) {
        console.log("错误:" + err);
        return;
    }
    var result = num1 / num2;
    document.getElementById("result").innerHTML = "运算结果为" + result;
}

function isInteger(input) {
    return input % 1 === 0;
}

function dec2bin() {
// 在这里实现你的转化方法，注意需要判断输入必须为一个非负整数
    var decNumber = document.getElementById("dec-number").value;
    var bitLength = document.getElementById("binbit-length").value;
    decNumber = Number(decNumber);
    bitLength = parseInt(bitLength);
    var error_span = document.getElementById("dec-error");
    error_span.innerHTML = "";
    try {
        if (decNumber < 0 || !isInteger(decNumber))     throw "必须为非负整数!";
    }
    catch(err) {                    //不是非负整数则抛出异常信息
        error_span.innerHTML = err;
        return;
    }
    var result = new Array();
    var tempdec = decNumber;
    var remainder;
    while (tempdec > 0) {
        remainder = tempdec % 2;
        result.push(remainder);
        tempdec = parseInt(tempdec / 2);
    }
    result.reverse();
    for (var i = result.length; i <= bitLength; i++) {
        result.unshift(0);                  //数组长度小于指定二进制码宽度时在数组头部插入0
    }
    var result_str = result.join("");       //将数组所有的元素放入一个字符串中，使用""间隔(空字符串)
    document.getElementById("dec2bin-result").innerHTML = "运算结果为" + result_str;
    console.log("bin-bit length = " + result_str.length);
}

function Gameof3() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log("PA,");
        }
        else {
            console.log(i + ", ");
        }
    }
}

function sayHello() {
    var date = new Date();
    var curHours = date.getHours();
    if (curHours >= 18 && curHours <= 3)
        alert("晚上好");
    else if (curHours > 3 && curHours <= 9)
        alert("早上好");
    else if (curHours > 9 && curHours <= 14)
        alert("中午好");
    else 
        alert("下午好");
}
window.onload = sayHello();