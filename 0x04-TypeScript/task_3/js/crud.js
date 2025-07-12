export function insertRow(row) {
  console.log(`[Class 3-E] New student registered: ${row.firstName} ${row.lastName}`);
  console.log(`Special Ability: ${row.specialAbility}`);
  return Math.floor(Math.random() * 1000);
}

export function deleteRow(rowId) {
  console.log(`[Class 3-E] Student ID ${rowId} expelled!`);
}

export function updateRow(rowId, row) {
  console.log(`[Class 3-E] Updating ${row.firstName}'s record (ID: ${rowId})`);
  if (row.assassinationSkill > 90) {
    console.log('>>> Potential Koro-sensei killer detected!');
  }
  return rowId;
}

// Bonus function to evaluate students
export function evaluateStudent(rowId) {
  return `Evaluating student ID ${rowId} for assassination potential...`;
}
