module.exports = function toReadable (number) {
    const units = [
        '', 'one', 'two', 'three', 'four', 
        'five', 'six', 'seven', 'eight', 'nine'
    ];
    
    const teens = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    
    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    
    const hundreds = 'hundred';
    
    // Early return for zero
    if (number === 0) {
        return 'zero';
    }

    let result = '';

    // Get hundreds place
    if (number >= 100) {
        result += units[Math.floor(number / 100)] + ' ' + hundreds + ' ';
        number %= 100; // Reduce number to below 100
    }

    // Get tens and units
    if (number >= 20) {
        result += tens[Math.floor(number / 10)] + ' ';
        number %= 10; // Reduce number to below 10
    } else if (number >= 10) {
        result += teens[number - 10] + ' ';
        return result.trim(); // Return immediately for teens
    }

    // Get units
    if (number > 0) {
        result += units[number] + ' ';
    }
    
    return result.trim(); // Trim any extra spaces and return
}
