interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

/* ======================
 * TEACHER IMPLEMENTATIONS
 * ====================== */

// 1. Koro-sensei (The Target)
const korosensei: Teacher = {
  firstName: 'Koro',
  lastName: 'Sensei',
  fullTimeEmployee: true,
  location: 'Classroom 3-E',
  isTarget: true,
  species: 'Artificial Tentacle Being',
  maxSpeed: 'Mach 20',
  weakness: 'Anti-Sensei Weapons',
  contract: false,
  teachingStyle: 'Unconventional Motivation'
};

// 2. Irina Jelavić (Assassination Instructor)
const irinaJelavic: Teacher = {
  firstName: 'Irina',
  lastName: 'Jelavić',
  fullTimeEmployee: true,
  yearsOfExperience: 8,
  location: 'Classroom 3-E',
  specialty: 'Seduction Tactics',
  weapons: ['Poisoned Lipstick', 'Fiber Wire'],
  contract: true,
  codename: 'Bitch-sensei',
  subject: 'English'
};

// 3. Tadaomi Karasuma (Military Instructor)
const tadaomiKarasuma: Teacher = {
  firstName: 'Tadaomi',
  lastName: 'Karasuma',
  fullTimeEmployee: true,
  yearsOfExperience: 6,
  location: 'Classroom 3-E',
  skills: ['Close Combat', 'Weapons Training'],
  contract: true,
  department: 'Ministry of Defense',
  subject: 'Physical Education'
};

/* ======================
 * DIRECTOR IMPLEMENTATIONS
 * ====================== */

// 1. Government Director overseeing the program
const directorShiro: Directors = {
  firstName: 'Yukimitsu',
  lastName: 'Shiro',
  fullTimeEmployee: true,
  location: 'Ministry of Defense HQ',
  numberOfReports: 31, // 28 students + 3 teachers
  securityClearance: 'Level 10',
  programBudget: '¥10 Billion',
  koroContainment: 'Priority Alpha'
};

// 2. School Principal (Antagonist)
const principalAsano: Directors = {
  firstName: 'Gakuhou',
  lastName: 'Asano',
  fullTimeEmployee: true,
  yearsOfExperience: 25,
  location: 'Kunugigaoka Junior High',
  numberOfReports: 48, // Faculty + staff
  educationPolicy: 'Meritocratic Extremism',
  isAntagonist: true,
  specialProject: 'Class 3-E Discrimination'
};

/* ======================
 * UTILITY FUNCTIONS
 * ====================== */

function printTeacherProfile(teacher: Teacher): void {
  console.log('\n=== TEACHER ===');
  console.log(`Name: ${teacher.lastName} ${teacher.firstName}`);
  console.log(`Role: ${teacher.fullTimeEmployee ? 'Full-time' : 'Part-time'}`);
  console.log(`Location: ${teacher.location}`);
  
  if (teacher.yearsOfExperience) {
    console.log(`Experience: ${teacher.yearsOfExperience} years`);
  }

  const dynamicProps = Object.entries(teacher)
    .filter(([key]) => !['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location'].includes(key));
  
  if (dynamicProps.length > 0) {
    console.log('Additional Properties:');
    dynamicProps.forEach(([key, value]) => {
      console.log(`  ${key}: ${Array.isArray(value) ? value.join(', ') : value}`);
    });
  }
}

function printDirectorProfile(director: Directors): void {
  console.log('\n=== DIRECTOR ===');
  console.log(`Name: ${director.lastName} ${director.firstName}`);
  console.log(`Reports: ${director.numberOfReports} personnel`);
  console.log(`Location: ${director.location}`);
  
  const dynamicProps = Object.entries(director)
    .filter(([key]) => !['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location', 'numberOfReports'].includes(key));
  
  if (dynamicProps.length > 0) {
    console.log('Additional Properties:');
    dynamicProps.forEach(([key, value]) => {
      console.log(`  ${key}: ${Array.isArray(value) ? value.join(', ') : value}`);
    });
  }
}

/* ======================
 * DEMONSTRATION
 * ====================== */

console.log('===== ASSASSINATION CLASSROOM STAFF DIRECTORY =====');

// Display all teacher profiles
printTeacherProfile(korosensei);
printTeacherProfile(irinaJelavic);
printTeacherProfile(tadaomiKarasuma);

// Display all director profiles
printDirectorProfile(directorShiro);
printDirectorProfile(principalAsano);

// Type safety demonstration
function validateDirector(director: Directors): boolean {
  if (typeof director.numberOfReports !== 'number') {
    throw new Error('Director must have numberOfReports!');
  }
  return true;
}

validateDirector(directorShiro); // Will pass
// validateDirector(korosensei); // Would fail if uncommented
