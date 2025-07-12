interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  specialAbility?: string;
}

// Class 3-E students list
const studentsList: Student[] = [
  {
    firstName: 'Nagisa',
    lastName: 'Shiota',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Killing Intent Concealment'
  },
  {
    firstName: 'Karma',
    lastName: 'Akabane',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Psychological Warfare'
  },
  {
    firstName: 'Kaede',
    lastName: 'Kayano',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Tentacle Camouflage'
  },
  {
    firstName: 'Rio',
    lastName: 'Nakamura',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Gymnastics'
  },
  {
    firstName: 'Yuma',
    lastName: 'Isogai',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Class Representative'
  },
  {
    firstName: 'Yukiko',
    lastName: 'Kanzaki',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Swordsmanship'
  },
  {
    firstName: 'Tomohito',
    lastName: 'Sugino',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Baseball Fanatic'
  },
  {
    firstName: 'Ritsu',
    lastName: '',
    age: 1, // bro chill ik she looks 14-15 but its just Her operational age, being an AI
    location: 'Classroom 3-E',
    specialAbility: 'Information Gathering, Adaptive AI'
  },
  {
    firstName: 'Itona',
    lastName: 'Horibe',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Tentacle Manipulation'
  },
  {
    firstName: 'Ryunosuke',
    lastName: 'Chiba',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Marksmanship (Sniper)'
  },
  {
    firstName: 'Rinka',
    lastName: 'Hayami',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Marksmanship (Sniper)'
  },
  {
    firstName: 'Hiroto',
    lastName: 'Maehara',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Ladies Man, Agility'
  },
  {
    firstName: 'Manami',
    lastName: 'Okuda',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Chemistry Expertise'
  },
  {
    firstName: 'Meg',
    lastName: 'Kataoka',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Leadership, Swimming'
  },
  {
    firstName: 'Ryoma',
    lastName: 'Terasaka',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Strength, Intimidation'
  },
  {
    firstName: 'Koki',
    lastName: 'Mimura',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Filming, Editing'
  },
  {
    firstName: 'Yuzuki',
    lastName: 'Fuwa',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Manga Knowledge, Deduction'
  },
  {
    firstName: 'Sumire',
    lastName: 'Hara',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Homemaking, Cooking'
  },
  {
    firstName: 'Kotaro',
    lastName: 'Takebayashi',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Explosives, Scientific Insight'
  },
  {
    firstName: 'Hinata',
    lastName: 'Okano',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Gymnastics, Knife Combat'
  },
  {
    firstName: 'Hinano',
    lastName: 'Kurahashi',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Biology, Bug Expert'
  },
  {
    firstName: 'Taiga',
    lastName: 'Okajima',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Photography, Perversion'
  },
  {
    firstName: 'Masayoshi',
    lastName: 'Kimura',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Speed, Running'
  },
  {
    firstName: 'Sosuke',
    lastName: 'Sugaya',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Art, Disguise'
  },
  {
    firstName: 'Toka',
    lastName: 'Yada',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Negotiation, Seduction'
  },
  {
    firstName: 'Taisei',
    lastName: 'Yoshida',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Delinquency, Motor Skills'
  },
  {
    firstName: 'Takuya',
    lastName: 'Muramatsu',
    age: 15,
    location: 'Classroom 3-E',
    specialAbility: 'Cooking, Impersonation'
  }
];

// table
const table = document.createElement('table');
table.style.width = '100%';
table.style.borderCollapse = 'collapse';
table.style.margin = '20px 0';
table.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
table.style.fontFamily = '"Segoe UI", Tahoma, sans-serif';

// header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
headerRow.style.backgroundColor = '#e63946';
headerRow.style.color = 'white';

['Student', 'Age', 'Location', 'Special Ability'].forEach(headerText => {
  const th = document.createElement('th');
  th.textContent = headerText;
  th.style.padding = '15px';
  th.style.textAlign = 'left';
  th.style.borderBottom = '3px solid #a8dadc';
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

// body
const tbody = document.createElement('tbody');

studentsList.forEach((student, index) => {
  const row = document.createElement('tr');
  row.style.backgroundColor = index % 2 === 0 ? '#f1faee' : '#ffffff';
  row.style.transition = 'background-color 0.3s';

  row.onmouseover = () => row.style.backgroundColor = '#a8dadc';
  row.onmouseout = () => row.style.backgroundColor = index % 2 === 0 ? '#f1faee' : '#ffffff';

  // Name cell
  const nameCell = document.createElement('td');
  nameCell.textContent = `${student.lastName} ${student.firstName}`;
  nameCell.style.padding = '12px';
  nameCell.style.borderBottom = '1px solid #ddd';
  nameCell.style.fontWeight = '600';

  // Age cell
  const ageCell = document.createElement('td');
  ageCell.textContent = student.age.toString();
  ageCell.style.padding = '12px';
  ageCell.style.borderBottom = '1px solid #ddd';

  // Location cell
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  locationCell.style.padding = '12px';
  locationCell.style.borderBottom = '1px solid #ddd';

  // Special Ability cell
  const abilityCell = document.createElement('td');
  abilityCell.textContent = student.specialAbility || '-';
  abilityCell.style.padding = '12px';
  abilityCell.style.borderBottom = '1px solid #ddd';
  abilityCell.style.color = student.specialAbility ? '#457b9d' : '#999';

  row.appendChild(nameCell);
  row.appendChild(ageCell);
  row.appendChild(locationCell);
  row.appendChild(abilityCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);

// title and container
const container = document.createElement('div');
container.style.maxWidth = '900px';
container.style.margin = '20px auto';
container.style.padding = '30px';
container.style.borderRadius = '10px';
container.style.backgroundColor = '#fff';
container.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';

const title = document.createElement('h1');
title.textContent = 'Class 3-E Assassination Students';
title.style.color = '#1d3557';
title.style.textAlign = 'center';
title.style.fontFamily = '"Segoe UI", Tahoma, sans-serif';
title.style.marginBottom = '30px';
title.style.fontSize = '2.2em';

const subtitle = document.createElement('p');
subtitle.textContent = 'Kunugigaoka Junior High - Target: Koro-sensei';
subtitle.style.textAlign = 'center';
subtitle.style.color = '#457b9d';
subtitle.style.marginBottom = '30px';

container.appendChild(title);
container.appendChild(subtitle);
container.appendChild(table);
document.body.appendChild(container);

// global styles
document.body.style.backgroundColor = '#f8f9fa';
document.body.style.margin = '0';
document.body.style.padding = '0';

// animation
table.style.animation = 'fadeIn 1s ease-in';
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(style);

// hover effect to title
title.onmouseover = () => {
  title.style.animation = 'pulse 1.5s infinite';
};
title.onmouseout = () => {
  title.style.animation = '';
};
