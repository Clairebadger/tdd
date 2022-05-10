const Grade = require('../src').Grade;  
const IndividualClass = require('../src').IndividualClass;
const Student = require('../src').Student;
const Teacher = require('../src').Teacher;

let mygrade, student1, student2, student3, student4, student5, students, myclass, myclass2

describe('Grade', () => {   // outer describe, for entire Grade class
  
  beforeEach(() => {    // class instantiations
    student1 = new Student('Jane', 12, 7, [100, 90], 2022, ['hiking', 'reading']);
    student2 = new Student('Jack', 12, 7, [80, 90], 2022, ['hiking', 'reading']);
    student3 = new Student('Alex', 12, 7, [80, 95], 2022, ['hiking', 'reading']);
    teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
    myclass = new IndividualClass('Biology', 9, teacher, [student1, student2, student3]);

    student4 = new Student('Jane', 12, 7, [60, 80], 2022, ['hiking', 'reading']);
    student5 = new Student('Jack', 12, 7, [30, 60], 2022, ['hiking', 'reading']);
    student6 = new Student('Alex', 12, 7, [100, 95], 2022, ['hiking', 'reading']);
    teacher2 = new Teacher('John Doe', 'Math', 'UCLA', 6);
    myclass2 = new IndividualClass('Math', 9, teacher, [student4, student5, student6]);

    mygrade = new Grade([myclass, myclass2], 2022)
  })
  
  //fill in this test for the Grade class constructor
  test('takes the following arguments: individualclass, graduation', () => {
     expect(mygrade.individualClasses).toEqual([myclass, myclass2]);
     expect(mygrade.graduationYear).toBe(2022);
   })


   // test passes
  test('getStudentCount returns total number of students in the Grade', () => {
     expect(mygrade.getStudentCount()).toBe(6);
  })


  // test passes 
 test('calculateGradeAverage()` which returns the average of all test scores for all `Student`s in the `Grade`', () => {
    expect(mygrade.calculateGradeAverage()).toBe(80);
  })

  // test passes
  test('addIndividualClass()` which adds an `IndividualClass` to the `individualClasses` array', () => {
    //call
    mygrade.addIndividualClass(myclass)
    expect(mygrade.individualClasses).toEqual([myclass, myclass2, myclass]);
  })

})

