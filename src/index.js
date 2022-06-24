module.exports = function toReadable(number) {
    const numbers1 = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    }
    const numbers2 = {
        '1': 'ten',
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety'
    }
    const numbers3 = {
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    }
    let strNum = ''
    const arr = number.toString().split('');
    if (arr.length === 3) {
        if (number % 100 === 0) {
            strNum = numbers1[arr[0]] + ' hundred';
        } else if (arr[1] == '0') {
            strNum = numbers1[arr[0]] + ' hundred ' + numbers1[arr[2]];
        } else if (arr[2] == '0') {
            strNum = numbers1[arr[0]] + ' hundred ' + numbers2[arr[1]];
        } else if (arr[1] == '1') {
            strNum = numbers1[arr[0]] + ' hundred ' + numbers3[arr[1] + arr[2]];
        } else {
            strNum = numbers1[arr[0]] + ' hundred ' + numbers2[arr[1]] + ' ' + numbers1[arr[2]];
        }
    }
    if (arr.length === 2) {
        if (number % 10 === 0) {
            strNum = numbers2[arr[0]];
        } else if (arr[0] == '1') {
            strNum = numbers3[arr[0] + arr[1]];
        }
        else {
            strNum = numbers2[arr[0]] + ' ' + numbers1[arr[1]];
        }
    }
    if (arr.length === 1) {
        strNum = numbers1[arr[0]];
    }
    return strNum;
}

