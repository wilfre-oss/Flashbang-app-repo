export function decimalToHex(number){
    if (number < 0){
        number = 0xFFFFFFFF + number + 1;
    }

     return '#' + number.toString(16).toUpperCase();
}

export function hexToDecimal(color){
    let decColor = color.slice(1)
    return parseInt(decColor, 16)
}
