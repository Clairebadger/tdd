const Teacher = require('../src').Teacher;

describe('Teacher', () => {
  describe('insantiates a new Teacher', () => {
    test('takes the following arguments: name, subjectTaught, universityAttended, yearsAsTeacher', () => {
      const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
      expect(teacher.name).toBe('Jane Doe');
      expect(teacher.subjectTaught).toBe('Biology');
      expect(teacher.universityAttended).toBe('UCLA');
      expect(teacher.yearsAsTeacher).toBe(6);
    })
  })
  describe('updateTeacherName()` which updates the teacher\'s name to the input argument', () => {
    test('teacher.name should be same as input argument', () => {
        const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
        teacher.updateTeacherName('Bob');
        expect(teacher.name).toBe('Bob')
    })
  })
  describe('changeSubjectTaught() which changes the teacher\'s `subjectTaught` to the input string', () => {
    test('should update teacher.subjectTaught to input arg', () => {
        const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
        teacher.changeSubjectTaught('Math')        
        expect(teacher.subjectTaught).toBe('Math');    
      })
    
      })
  describe('updateYearsAsTeacher() which increments the `yearsAsTeacher` property by 1 each time it is called', () => {
    test('yearsAsTeacher incremements by one with function call', () => {
        const teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
        const previousYears = teacher.yearsAsTeacher;
        teacher.updateYearsAsTeacher();
        expect(teacher.yearsAsTeacher).toBe(previousYears + 1) 
        teacher.updateYearsAsTeacher();
        teacher.updateYearsAsTeacher();
        expect(teacher.yearsAsTeacher).toBe(previousYears + 3);
      })
  })
})