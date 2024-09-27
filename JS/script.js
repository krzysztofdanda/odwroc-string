function reverseString(string) {
    return string.split('').reverse().join('');
}

// Wywołanie funkcji i odwrócenie stringa "Akademia108"
const reversed = reverseString("Akademia108");

// Wyświetlenie wyniku w konsoli
console.log(reversed);