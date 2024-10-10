function getStudentsByLocation(studentList, city) {
    return studentList.filter(student => student.city === city);
}

// Example usage
const studentsInNewYork = getStudentsByLocation(students, 'New York');
console.log(studentsInNewYork);
