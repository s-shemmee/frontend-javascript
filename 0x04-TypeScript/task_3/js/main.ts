/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Add Nagisa's record
const nagisa: RowElement = {
  firstName: 'Nagisa',
  lastName: 'Shiota',
  age: 15,
  assassinationSkill: 92,
  specialAbility: 'Killing Intent Concealment',
  weakness: 'Too empathetic',
  status: 'Active'
};

const nagisaID: RowID = CRUD.insertRow(nagisa);
console.log(`Assigned Student ID: ${nagisaID}`);

// Update with evaluation results
const updatedNagisa: RowElement = {
  ...nagisa,
  assassinationSkill: 95,
  lastEvaluationDate: new Date().toISOString() // Changed to match interface
};

CRUD.updateRow(nagisaID, updatedNagisa);

// Add Karma's record
const karma: RowElement = {
  firstName: 'Karma',
  lastName: 'Akabane',
  assassinationSkill: 89,
  specialAbility: 'Psychological Warfare',
  status: 'Active'
};

const karmaID = CRUD.insertRow(karma);

// Expel a student (for dramatic effect)
CRUD.deleteRow(karmaID);
console.log('Karma was temporarily expelled for bad behavior!');

// Bonus: Evaluate a student
console.log(CRUD.evaluateStudent(nagisaID));
