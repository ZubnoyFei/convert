const usdCurr = 28;
const eurCurr = 31;
const discount =  0.9;

function convert (amount, curr) {
   return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);