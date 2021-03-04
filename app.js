// Assignment 1: Function and Array
function max(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    return max;
}

console.log("Assignment 1")
console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));

// ================================================

// Assignment 2: Object
function calculate(args) {
    let result;
    if(args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported"
    }
    return result;
}

console.log("Assignment 2")

// Assignment 2 - solution 1
const arg1 = {
    n1: 3,
    n2: 5,
    op: "+"
}

console.log(calculate(arg1));
// Assignment 2 - solution 2
class Arg{
    constructor(n1, n2, op) {
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
    }
}

const arg2 = new Arg(3, 5, "-");

console.log(calculate(arg2));

// ================================================

// Assignment 3: Function, Array, and Object
function avg(data) {
    let sum = 0;
    const productList = data.products;
    const size = data.size;
    for (let i = 0; i < productList.length; i++) {
        sum += productList[i].price;
    }
    return sum / size;
}

console.log("Assignment 3")

console.log(avg({
    size: 3,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
}));

// ================================================

// Assignment 5: Algorithm Practice (Advanced Optional)
function twoSum(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let rest = target - nums[i];
        if (nums.includes(rest)) {
            result.push(i);
        }
    }
    return result;
}

console.log("Assignment 5")
console.log(twoSum([2, 7, 11, 15], 9));

// ================================================