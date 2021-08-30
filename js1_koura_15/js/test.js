console.log("はじめまして！");
console.log("ここから頑張らないといけない")


console.log(23+5);
console.log(2000-1800);
console.log("18+5");

console.log("1000+100")

// 変数の練習

var test = "変数の練習をしています！"
console.log(test);


// if文のお話し


var point = 90;

if ( point >= 1000) {
    alert("素晴らしい！おめでとう！");
} else {
    alert("マッチしていません！");
}

var point = 90;

if ( point >= 180) {
    console.log("素晴らしい！おめでとう！");
} else {
    console.log("マッチしていません！");
}

var omikuji = Math.floor( Math.random() *5);
console.log( omikuji );


if ( omikuji === 0) {
    console.log("アタリ");
} else if ( omikuji === 1 ) {
    console.log("アタリ");
} else if ( omikuji === 2 ) {
    console.log("はずれ");
} else if ( omikuji === 3 ) {
    console.log("はずれ");
} else if ( omikuji === 4 ) {
    console.log("はずれ");
} 



var omikuji = Math.floor( Math.random() *3);
console.log( omikuji );


if ( omikuji === 0) {
    alert("ぐー");
} else if ( omikuji === 1 ) {
    alert("ちょき");
} else if ( omikuji === 2 ) {
    alert("ぱー");}


// 足し算する関数を定義します

function add (a1,a2,en){
    if (en === "+"){
        var n = a1 + a2;
    } else {
        var n = a1 - a2;
    }
    return n;
}

var t = add (50,120,"-");
alert (t);


// Math オブジェクト

function rand(n){
    var num = Math.round( Math.random()*n+1);
    return num;
}

var t = rand(5)
alert ( t );