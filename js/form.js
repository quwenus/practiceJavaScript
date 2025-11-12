const name = document.getElementById('name');
const surname = document.getElementById('surname');
const patronymic = document.getElementById('patronymic');
const birth_date = document.getElementById('birth_date');
const start = document.getElementById('start');
const faculty = document.getElementById('faculty');
const addStudent = document.getElementById('addStudent');
const studentForm = document.getElementById('studentForm');


import { checkBirthDate } from "/modules/checkBirthDate.js";
import { checkStartDate } from "/modules/checkStartDate.js";
import { markAsInvalid } from "/modules/markAsInvalid.js";
import { markAsValid } from "/modules/markAsValid.js";
import { save } from "/modules/save.js";
import { drop } from "/modules/drop.js";



const requiredFields = [
    name, surname, birth_date, start, faculty
]

const studentsArray = drop();


addStudent.addEventListener('click', (e) => {
    e.preventDefault()

    let hasError = false;

    requiredFields.forEach(el => markAsValid(el));
    for (const field of requiredFields) { //let i=0; i < array.length; i++
        if (field.value.trim() === '') {
            markAsInvalid(field)
            hasError = true;
        }
    }

    if (!hasError) {
        if (!checkBirthDate()) {
            markAsInvalid(birth_date)
            hasError = true;
        }
        if (!checkStartDate()) {
            markAsInvalid(start)
            hasError = true;
        }
    }
    if (!hasError) {
        let student = {
            name: name.value.trim(),
            surname: surname.value.trim(),
            patronymic: patronymic.value.trim(),
            birth_date: birth_date.value,
            start: start.value,
            faculty: faculty.value.trim()
        }
        studentsArray.push(student)
        save(studentsArray)
        studentForm.reset()
        window.location.href = '../html/index.html'
    }
    console.log(studentsArray);

})


