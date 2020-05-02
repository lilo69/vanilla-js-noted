function dayOfYear(date) {
    return Math.floor(date - new Date(date.getFullYear(), 0, 0));
}