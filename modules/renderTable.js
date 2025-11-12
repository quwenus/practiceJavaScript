export function renderTable(students) {
    const tBody = document.getElementById('tBody');
    tBody.innerHTML = '';

    students.forEach(student => {
        let row = document.createElement('tr')
        row.innerHTML = `<td>${student.surname} ${student.name} ${student.patronymic}</td>
                        <td>${student.birth_date} </td>
                        <td>${student.start}</td>
                        <td>${student.faculty}</td>`;
        tBody.appendChild(row)
    })
}

