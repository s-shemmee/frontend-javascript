import { Cpp, CppTeacher } from './subjects/Cpp';
import { Java, JavaTeacher } from './subjects/Java';
import { React, ReactTeacher } from './subjects/React';
import { Teacher } from './subjects/Teacher';

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Define a teacher with experience in all subjects
export const cTeacher: Teacher & CppTeacher & JavaTeacher & ReactTeacher = {
  firstName: 'Koro',
  lastName: 'Sensei',
  experienceTeachingC: 10,
  experienceTeachingJava: 7,
  experienceTeachingReact: 5,
  experienceTeachingAssassination: 20
};

console.log('=== Assassination Classroom Subjects ===\n');

// C++ Subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject
console.log('\nJava');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject
console.log('\nReact');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
