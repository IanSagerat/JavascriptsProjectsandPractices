function arraySearch(string){
let foundSearch = -1;
for(let i = 0; i < string.length; i++){
    if(string[i] === 'search'){
        foundSearch = i;
        break;
    }
}
return foundSearch;
}

console.log(arraySearch(['not', 'world', 'not', 'found']));

function findIndex(array, word){
    for(let i = 0; i < array.length; i++){
        if(array[i] === word){
            return i;
        }
    }
    return -1;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'blue'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'green'));



function removeEgg(foods){
    const result = [];
    for(let i = 0; i < foods.length; i++){
        if(foods[i] === 'egg'){
            continue;
        }
        result.push(foods[i]);
    }
    return result;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

function removeFood(foods, toRemove){
    return foods.filter(food => food !== toRemove);
}
console.log(removeFood(['egg', 'apple', 'egg', 'egg', 'ham'], 'egg'));

function removeEggy(foods){
    let removedCount = 0;

    const reversed = foods.slice().reverse();
    const result = [];

    for(let i = 0; i < reversed.length; i++){
        if(reversed[i] === 'egg' && removedCount < 2){
            removedCount++;
            continue;
        }
        result.push(reversed[i]);
    }
    return result.reverse();
}

console.log(removeEggy(['egg', 'apple', 'egg', 'egg', 'ham']));
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEggy(foods));
console.log(foods);

let num = [];
for(let i = 1; i <= 20; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        num[i] = 'FizzBuzz';
    }else if(i % 3 === 0){
        num[i] = 'Fizz';
    }else if(i % 5 === 0){
        num[i] = 'Buzz';
    }else{
        num[i] = i;
    }
    console.log(num[i])
}

function unique(array){
    const result = [];

    for(let i = 0; i < array.length; i++){
        const word = array[i];
        if(findIndex(result, word) === -1){
            result.push(word);
        }
    }

    return result;
}

console.log(unique(['red', 'red', 'blue', 'green', 'white', 'blue', 'green']))