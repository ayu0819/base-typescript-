// string
function phrase(w1, w2) {
    return w1 + w2;
}
var word1 = '犬も歩けば';
var word2 = '棒に当たる';
var all = phrase(word1, word2);
console.log(all);
// number
function addition(n1, n2) {
    return n1 + n2;
}
var number1 = 10;
var number2 = 2.5;
var answer = addition(number1, number2);
alert(answer);
// boolean
function match(play1, play2, out) {
    if (out) {
        console.log(play1 + play2);
    }
    else {
        return alert('試合結果を発表できません');
    }
    return alert('試合結果は' + play1 + play2 + '点です');
}
var game1 = 5;
var game2 = 8;
var gameResult = true;
match(game1, game2, gameResult);
// object
var hobbyObject = {
    hobby: 'sports',
    frequency: 'regular'
};
console.log(hobbyObject);
// array
var japan = {
    city1: 'Tokyo',
    city2: 'Osaka',
    Kyusyu: ['Fukuoka', 'Kumamoto', 'Kagoshima', 'Saga']
};
console.log(japan.Kyusyu);
