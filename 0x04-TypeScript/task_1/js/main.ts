interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

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
  contract: false
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
  codename: 'Bitch-sensei'
};

// 3. Tadaomi Karasuma (Military Instructor)
const tadaomiKarasuma: Teacher = {
  firstName: 'Tadaomi',
  lastName: 'Karasuma',
  fullTimeEmployee: false,
  location: 'Classroom 3-E',
  militaryRank: 'Special Forces Captain',
  skills: ['Close Quarters Combat', 'Weapons Expertise'],
  contract: true,
  assignment: 'Koro-sensei Supervision'
};

// Print teacher profiles
function printTeacherProfile(teacher: Teacher) {
  console.log('\n=== Teacher Profile ===');
  console.log(`Name: ${teacher.lastName} ${teacher.firstName}`);
  console.log(`Status: ${teacher.fullTimeEmployee ? 'Full-time' : 'Part-time'}`);
  console.log(`Location: ${teacher.location}`);
  
  // Display years of experience
  if (teacher.yearsOfExperience) {
    console.log(`Experience: ${teacher.yearsOfExperience} years`);
  }
  
  // Display dynamic properties
  const dynamicProps = Object.entries(teacher)
    .filter(([key]) => !['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location'].includes(key));
  
  if (dynamicProps.length) {
    console.log('Additional Properties:');
    dynamicProps.forEach(([key, value]) => {
      console.log(`  ${key}: ${value}`);
    });
  }
}

// Display all profiles
printTeacherProfile(korosensei);
printTeacherProfile(irinaJelavic);
printTeacherProfile(tadaomiKarasuma);
