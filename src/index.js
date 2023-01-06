function getFirstTwenty(n) {
    return ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'][n]
}

function getTens(n) {
    switch (n) {
        case 20:
            return 'twenty';
        case 30:
            return 'thirty';
        case 40:
            return 'forty';
        case 50:
            return 'fifty';
        case 60:
            return 'sixty';
        case 70:
            return 'seventy';
        case 80:
            return 'eighty';
        case 90:
            return 'ninety';
    }
}
function getHundred(n) {
    return `${getFirstTwenty(Number(n.toString().split('')[0]))} hundred`;
}

function geTwoDigitNumber(n) {
    let arrayDigit = n.toString().split('');

    return `${getTens(Number(arrayDigit[0]) * 10)} ${getFirstTwenty(Number(arrayDigit[1]))}`
}

module.exports = function toReadable(number) {
    if (number < 20) {
        return getFirstTwenty(number);
    } else if (number < 100 && number % 10 !== 0) {
        return geTwoDigitNumber(number);
    } else if (number < 100 && number % 10 === 0) {
        return getTens(number);
    } else if (number % 100 === 0) {
        return getHundred(number);
    } else {
        let arrayDigit2 = number.toString().split('');
        let tens = Number(arrayDigit2.slice(1).join(''));
        if (tens < 20) {
            return `${getFirstTwenty(Number(arrayDigit2[0]))} hundred ${getFirstTwenty(tens)}`
        } else if (tens % 10 === 0){
            return `${getFirstTwenty(Number(arrayDigit2[0]))} hundred ${getTens(tens)}`
        } else {
            return `${getFirstTwenty(Number(arrayDigit2[0]))} hundred ${geTwoDigitNumber(tens)}`
        }
    }
}
