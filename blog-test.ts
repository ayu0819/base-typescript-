// string
function phrase(w1: string,w2: string) {
    return w1 + w2;
}

const word1 = '犬も歩けば';
const word2 = '棒に当たる';

const all = phrase(word1, word2);

console.log(all);


// number
function addition(n1: number,n2: number) {
    return n1 + n2;
   }
   
   const number1 = 10;
   const number2 = 2.5;

   const answer = addition(number1,number2); 

   alert(answer);


// boolean
function match(play1: number, play2: number, out: boolean) {

    if (out) {
        console.log(play1 + play2);
    } else {
        return alert('試合結果を発表できません')
    }

    return alert('試合結果は' + play1 + play2 + '点です');
}

const game1 = 5;
const game2 = 8;
const gameResult = true;

match(game1,game2, gameResult);


   // object
   const hobbyObject: Object = {
    hobby: 'sports',
    frequency: 'regular'
   }
   console.log(hobbyObject);


// array
   const japan: {
       city1: string,
       city2: string,
       Kyusyu: string[]
   } = {
       city1: 'Tokyo',
       city2: 'Osaka',
       Kyusyu: ['Fukuoka','Kumamoto','Kagoshima','Saga']
   }

   console.log(japan.Kyusyu);