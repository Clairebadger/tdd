const Grade = require('../src').Grade;  
const IndividualClass = require('../src').IndividualClass;
const Student = require('../src').Student;
const Teacher = require('../src').Teacher;

let mygrade, student1, student2, student3, student4, student5, students, myclass, myclass2

describe('Grade', () => {
  
  beforeEach(() => {
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
  
  describe('instantiates a new Grade Class', () => {
    test('Grade takes the following arguments: individualClass, gradYear', () => {
        expect(mygrade.individualClasses).toEqual([myclass, myclass2])
        console.log(mygrade)
        expect(mygrade.graduationYear).toBe(2022)
    })
  })

  describe('instantiates a new Grade Class', () => {
    test('Grade takes the following arguments: individualClass, gradYear', () => {
        
    })
  })

  describe('instantiates a new Grade Class', () => {
    test('Grade takes the following arguments: individualClass, gradYear', () => {
        
    })
  })



})

