const School = require('../src').School; // keep at top
const Grade = require('../src').Grade;  
const IndividualClass = require('../src').IndividualClass;
const Student = require('../src').Student;
const Teacher = require('../src').Teacher;

let mygrade, student1, student2, student3, student4, student5, students, teacher, teacher2, myclass2
let mygrade2, student6, student7, student8, student9, student10, teacher3, teacher4, myclass3, myclass4
let school

describe('School', () => {   // outer describe, for entire School class
  
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
    myclass2 = new IndividualClass('Math', 9, teacher2, [student4, student5, student6]);

    mygrade = new Grade([myclass, myclass2], 2022)

    student7 = new Student('Claire', 12, 7, [80, 90], 2023, ['hiking', 'reading']);
    student8 = new Student('Collin', 12, 7, [50, 90], 2023, ['hiking', 'reading']);
    student9 = new Student('Kelsey', 12, 7, [90, 95], 2023, ['hiking', 'reading']);
    teacher3 = new Teacher('Ms. Clark', 'English', 'UCLA', 6);
    myclass3 = new IndividualClass('English', 8, teacher3, [student7, student8, student9]);

    student10 = new Student('Jane', 12, 7, [50, 80], 2023, ['hiking', 'reading']);
    student11 = new Student('Jack', 12, 7, [40, 60], 2023, ['hiking', 'reading']);
    student12 = new Student('Alex', 12, 7, [30, 95], 2023, ['hiking', 'reading']);
    teacher4 = new Teacher('Mr. Rogers', 'Science', 'UCLA', 6);
    myclass4 = new IndividualClass('Science', 8, teacher4, [student10, student11, student12]);

    mygrade = new Grade([myclass, myclass2], 2022)
    mygrade2 = new Grade([myclass3, myclass4], 2023)
    
    school = new School("high school", "california", [8,9,10,11,12], 12, 4, [teacher, teacher2, teacher3, teacher4], "Mr. Herman", [mygrade, mygrade2], 'eagle')

  })

  //fill in this test for the School class constructor
  test('takes the following arguments: name, location, gradeLevels, numStudents, numTeachers, teachers, principal, grades, mascot', () => {

    expect(school.name).toBe('high school');
    expect(school.location).toBe('california');
    expect(school.gradeLevels).toEqual([8,9,10,11,12]);
    expect(school.numStudents).toBe(12);
    expect(school.numTeachers).toBe(4);
    expect(school.teachers).toEqual([teacher, teacher2, teacher3, teacher4]);
    expect(school.principal).toBe("Mr. Herman");
    expect(school.grades).toEqual([mygrade, mygrade2]);
    expect(school.mascot).toBe('eagle');
  
  })

  // updateName() method, passes
  test('updateName updates name of school with given argument', () => {
    school.updateName('middle school')
    expect(school.name).toBe('middle school');
 })

 // updateLocation() method, passes
 test('updateLocation updates location of school with given argument', () => {
  school.updateLocation('Texas')
  expect(school.location).toBe('Texas');
})

// updateGradeLevels() method, passes
test('updateGradeLevels updates grade levels array of school with given array', () => {
  school.updateGradeLevels([6, 7 , 8])
  expect(school.gradeLevels).toEqual([6, 7 , 8]);
})

// removeStudents() method, passes
test('removeStudents subtracts a given number of students from school\'s number of students', () => {
  school.removeStudents(2)
  expect(school.numStudents).toBe(10);
})

// addStudents() method, passes
test('addStudents adds a given number of students to school\'s number of students', () => {
  school.addStudents(2)
  expect(school.numStudents).toBe(14);
})

//two tests for removeteacher()
test('removes given teacher from the teachers array', () => {
    school.removeTeacher(teacher)
    expect(school.teachers).toEqual([teacher2,teacher3,teacher4])
})

test('decrements the number of teachers property', () => {
    school.removeTeacher(teacher)
    expect(school.numTeachers).toBe(3)
})


// two tests for addTeacher()
test('removes given teacher from the teachers array', () => {
    school.addTeacher(teacher)
    expect(school.teachers).toEqual([teacher, teacher2,teacher3,teacher4, teacher])
})

test('increments the number of teachers property', () => {
    school.addTeacher(teacher)
    expect(school.numTeachers).toBe(5)
})
//`updatePrincipal()` which updates the `principal` value to the function't input string

test('updatePrincipal which updates principal to val of input string', () => {
    school.updatePrincipal('Caswell')
    expect(school.principal).toBe('Caswell')

})

//`changeMascot()` which updates the `mascot` to the input value
test('updateMascot which updates mascot to val of input string', () => {
    school.updateMascot('Falcon')
    expect(school.mascot).toBe('Falcon')

})

// downsize() which removes a class from the teacher inputted
test('downSize which removes an IndividualClass from a given Teacher', () => {
  school.downSize(teacher2)
  expect(school.grades[0].individualClasses).toEqual([myclass])
})

// downsize() distributes students from deleted class to remaining classes
test('should evenly distribute students from deleted class to remaining class', () => {
  school.downSize(teacher2)
  expect(myclass3.students).toEqual([student7, student8, student9, student5])
  expect(myclass.students).toEqual([student1, student2, student3, student6])
  expect(myclass4.students).toEqual([student10, student11, student12, student4])
})


})