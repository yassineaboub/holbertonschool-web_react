interface Student {
	  firstName: string;
	  lastName: string;
	  age: number;
	  location: string;
}

const student1: Student  = {
      firstName: 'Suze',
      lastName: 'Q',
      age: 42,
      location: 'Yorba Linda, CA'
}

const student2: Student = {
      firstName: 'Buzz',
      lastName: 'Lightyear',
      age: 1427,
      location: 'Zurton'
}

const studentsList: Array<Student> = [student1, student2]
const table: HTMLTableElement = document.createElement('table')
const tableBod: HTMLTableSectionElement = table.createTBody();
studentsList.forEach(function(student) {
  const newRow: HTMLTableRowElement = table.insertRow();
  const newFirst: HTMLTableCellElement = newRow.insertCell();
  const newLoc: HTMLTableCellElement = newRow.insertCell();
  newFirst.innerHTML = student.firstName;
  newLoc.innerHTML = student.location;
  });
document.body.appendChild(table);
