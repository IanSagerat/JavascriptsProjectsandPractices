//12j
const multiply = (a, b) => console.log(a * b);

multiply(2,3);
multiply(7,10);

//12l

const countPositive = ((nums) => {
    let count = 0;

    nums.forEach(num => {
        if(num > 0){
            count++;
        }
    });
    return count;   
});

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

//12m
const addNum = ((array, num) => {
   return console.log(array.map((array) => array + num));
});
addNum([1,2,3], 2);
addNum([-2, -1, 0, 99], 2);

//12n
const removeEgg = ((foods) => {
    return console.log(foods.filter(food => food !== 'egg'));
});

removeEgg(['egg', 'egg', 'apple', 'orange', 'egg', 'ham']);

//12o
const removeTwoEgg = ((foods) => {
    let eggCount = 0;

    return console.log(foods.filter((food) => {
        if(food === 'egg' && eggCount < 2){
            eggCount++;
            return false;
        }
        return true;
    }));
});

removeTwoEgg(['egg', 'apple', 'apple', 'egg', 'orange', 'egg', 'ham']);

//12p


