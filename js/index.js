import { drop } from "../modules/drop.js";
import { renderTable } from "../modules/renderTable.js";


document.addEventListener('DOMContentLoaded', () => {
    const studentsArray = drop();
    renderTable(studentsArray);
});


const toForm = document.getElementById('toForm');

toForm.addEventListener('click', (e) => {
    e.preventDefault()

    window.location.href = '../html/form.html'
})


