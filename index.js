const stringLength = (string) => {
    const count = string.length;

    if (count > 0 && count <= 10) {
        return count;
    } else {
        throw new Error('must be at least 1 character  and at maximan 10 characters');
    }
}

const reverseString = (string) => {
    return string.split('').reverse().join('');
}

const capitalize = (string) => {
    const value = string.charAt(0).toUpperCase() + string.slice(1);
    return value;
}

const Calculator = () => {
    const add = (value1, value2) => {
        return value1 + value2;
    }
    
    const subtract = (value1, value2) => {
        return value1 - value2;
    }
    
    const divide = (value1, value2) => {
         return value1 / value2;
    } 
       
    const multiply = (value1, value2) => {
        return value1 * value2;
    }
}

module.exports = {stringLength, reverseString, capitalize, Calculator};