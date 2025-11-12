import { renderTable } from "../modules/renderTable.js";


const searchInput = document.getElementById('searchInput')


export function searchStudent(studentsArray) {
    const search = searchInput.value.trim().toLowerCase();
    const divNone = document.getElementById('none');

    divNone.innerHTML = '';

    if (search === '') {
        renderTable(studentsArray);
        return;
    }

    const filtered = studentsArray.filter(student => {
        return (
            student.name.toLowerCase().includes(search) ||
            student.surname.toLowerCase().includes(search) ||
            (student.patronymic || '').toLowerCase().includes(search) ||
            student.faculty.toLowerCase().includes(search)
        );
    });

    if (filtered.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'Студент не найден';
        message.style.color = 'red'; 
        divNone.appendChild(message);

        renderTable([]); 
    } else {
        renderTable(filtered);
    }
}