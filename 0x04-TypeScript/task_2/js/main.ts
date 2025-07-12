// Interfaces and Classes
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home (monitoring Class 3-E cameras)';
  }
  
  getCoffeeBreak(): string {
    return 'Taking a coffee break (while reviewing assassination plans)';
  }
  
  workDirectorTasks(): string {
    return 'Directing assassination training programs';
  }

  toString(): string {
    return 'Director (Ministry of Defense)';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home (must be present in Classroom 3-E)';
  }
  
  getCoffeeBreak(): string {
    return 'Cannot have a break (students might try to kill Koro-sensei)';
  }
  
  workTeacherTasks(): string {
    return 'Teaching assassination techniques';
  }

  toString(): string {
    return 'Teacher (Class 3-E)';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type Predicates
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// String Literal Types (Ylh With Bonus Subject a Sidi)
type Subjects = 'Math' | 'History' | 'Assassination Theory';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math (with explosive calculations)';
  } else if (todayClass === 'History') {
    return 'Teaching History (of famous assassinations)';
  }
  return 'Conducting assassination training';
}

// Test Cases
console.log('=== ASSASSINATION CLASSROOM STAFF SYSTEM ===\n');

console.log('Task 5: Employee Creation');
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log('\nTask 6: Execute Work');
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

console.log('\nTask 7: Teaching Classes');
console.log(teachClass('Math'));
console.log(teachClass('History'));
console.log(teachClass('Assassination Theory'));
console.log('\n=== END OF ASSASSINATION CLASSROOM STAFF SYSTEM ===');
