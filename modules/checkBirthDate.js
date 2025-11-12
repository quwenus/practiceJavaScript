const birth_date = document.getElementById('birth_date');

export function checkBirthDate() {
    const birthDate = birth_date.value
    const inputDate = new Date(birthDate)

    const minDate = new Date('1990-01-01')
    const maxDate = new Date()

    if (inputDate > minDate && inputDate <= maxDate) {
        return true;
    }
    else {
        return false;
    }
}

