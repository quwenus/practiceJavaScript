export function drop() {
    const info = localStorage.getItem('students')
    if (info) {
        return JSON.parse(info)
    }
    else {
        return [];
    }
}