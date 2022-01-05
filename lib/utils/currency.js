export const getAmountFormatted = (lang, amount, currency) => {
    return new Intl.NumberFormat(lang, { style: 'currency', currency: currency }).format(amount)
}