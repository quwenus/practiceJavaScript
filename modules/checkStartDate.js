const start = document.getElementById('start');

export function checkStartDate() {
    const startDate = start.value
    const inputDate = new Date(startDate)

    const minDate = new Date('2000-09-01')
    const maxDate = new Date()

    if (inputDate > minDate && inputDate <= maxDate) {
        return true;
    }
    else {
        return false;
    }
}