const IndividualClass = require('../src').IndividualClass;
const Student = require('../src').Student;
const Teacher = require('../src').Teacher;

let myclass, student1, student2, student3, teacher;

describe('individualClass', () => {
  
  beforeEach(() => {
    student1 = new Student('Jane', 12, 7, [100, 90], 2022, ['hiking', 'reading']);
    student2 = new Student('Jack', 12, 7, [80, 90], 2022, ['hiking', 'reading']);
    student3 = new Student('Alex', 12, 7, [80, 95], 2022, ['hiking', 'reading']);
    teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
    myclass = new IndividualClass('Math', 9, teacher, [student1, student2, student3]);
  })

  test('takes the following arguments: subject, gradeLevel, teacher, and students', () => {
      expect(myclass.subject).toBe('Math');
      expect(myclass.gradeLevel).toBe(9);
      expect(myclass.teacher).toBe(teacher);
      expect(myclass.students).toEqual([student1, student2, student3]);
  })

  test('myclass.subject is same as input string', () => {
      myclass.updateSubject('History')
      expect(myclass.subject).toBe('History');
  })

    test('myclass.teacher is same value as input string', () => {
        const teacher2 = new Teacher('John Doe', 'Math', 'UCLA', 6);
        myclass.changeTeacher(teacher2)
        expect(myclass.teacher).toBe(teacher2);
    })

    test('myclass.students has new student in the students array', () => {
      const student4 = new Student('Larry', 12, 7, [70, 90], 2022, ['hiking', 'reading']);
        myclass.addStudent(student4)
        expect(myclass.students).toEqual([student1, student2, student3, student4]);
    })

    test('myclass.students has the corresponding student removed from students array', () => {
        myclass.removeStudent(student1)
        expect(myclass.students).toEqual([student2, student3]);
    })
  
})
  