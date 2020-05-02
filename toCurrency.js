function toCurrency(number, currency, LanguageFormat = undefined) {
    return Intl.NumberFormat(LanguageFormat, { style: 'currency', currency }).format(number);
}