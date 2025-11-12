import { drop } from "../modules/drop.js";
import { renderTable } from "../modules/renderTable.js";
import { searchStudent } from "../modules/searchStudent.js";

const toForm = document.getElementById('toForm');
const searchInput = document.getElementById('searchInput')


document.addEventListener('DOMContentLoaded', () => {
    const studentsArray = drop();
    renderTable(studentsArray);
    searchInput.addEventListener('input', () => {
        searchStudent(studentsArray);
    })
    toForm.addEventListener('click', (e) => {
        e.preventDefault()

        window.location.href = '../html/form.html'
    })

});



