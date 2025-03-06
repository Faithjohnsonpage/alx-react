import { Seq } from 'immutable';

export function printBestStudents (object) {
  // Convert object into an Immutable.js sequence
  const bestStudents = Seq(object)
    .filter(student => student.score >= 70) // Keep students with score >= 70
    .map(student => ({
      ...student,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1)
    }));

  return bestStudents;
}

// Expanded student dataset with varying scores
const grades = {
  1: { score: 99, firstName: 'guillaume', lastName: 'salva' },
  2: { score: 68, firstName: 'anna', lastName: 'johnson' }, // Should be filtered out
  3: { score: 85, firstName: 'mark', lastName: 'zucker' },
  4: { score: 75, firstName: 'jane', lastName: 'doe' },
  5: { score: 50, firstName: 'tom', lastName: 'hanks' }, // Should be filtered out
  6: { score: 90, firstName: 'elon', lastName: 'musk' },
  7: { score: 73, firstName: 'ada', lastName: 'lovelace' }
};

console.log(printBestStudents(grades).toJS());
