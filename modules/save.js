export function save(students) {
    localStorage.setItem('students', JSON.stringify(students))
}