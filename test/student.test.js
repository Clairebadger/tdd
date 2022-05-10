const Student = require('../src').Student;

describe('Student', () => {
  describe('instantiates a new Student', () => {
    test('takes the following arguments: name, age, gradeLevel, testScore, gradYear, activities', () => {
      const student = new Student('Jane Doe', 12, 7, [100, 90], 2022, ['hiking', 'reading']);
      expect(student.name).toBe('Jane Doe');
      expect(student.age).toBe(12);
      expect(student.gradeLevel).toBe(7);
      expect(student.testScores).toEqual([100, 90]);
      expect(student.gradYear).toBe(2022);
      expect(student.activities).toEqual(['hiking', 'reading']);
    })
  })

  describe('updateStudentName()` which updates the student\'s name to the input argument', () => {
    test('student.name should be same as input argument', () => {
        const student = new Student('Jane Doe', 12, 7, [100, 90], 2022, ['hiking', 'reading']);
        student.updateStudentName('Bob');
        expect(student.name).toBe('Bob')
    })
  })

  describe('incrementAge()` which increments the student\'s age by 1 each time function is called', () => {
    test('student age increments by 1 with each call', () => {
      const student = new Student('Jane Doe', 12, 7, [100, 90], 2022, ['hiking', 'reading']);
      const previousAge = student.age;
      student.incrementAge();
      student.incrementAge();
      expect(student.age).toBe(previousAge + 2) 
      })
  })

  describe('incrementGradeLevel()` which increments the student\'s gradeLevel by 1 each time function is called', () => {
    test('grade level increments by 1 with each call', () => {
      const student = new Student('Jane Doe', 12, 7, [100, 90], 2022, ['hiking', 'reading']);
      const previousLevel = student.gradeLevel;
      student.incrementGradeLevel();
      student.incrementGradeLevel();
      expect(student.gradeLevel).toBe(previousLevel + 2) 
      })
  })

  describe('addTestScore()` which adds a given test score to the testScores array', () => {
    test('should add a new test score to student\'s testscores array', () => {
        const student = new Student('Jane Doe', 12, 7, [100, 90], 2022, ['hiking', 'reading']);
        student.addTestScore(75);
        expect(student.testScores).toEqual([100, 90, 75]);
    })
  })

  describe('calcTestAvgs()` which calculates the avg score of testScores array', () => {
    test('should average student\'s score array', () => {
        const student = new Student('Jane Doe', 12, 7, [100, 90], 2022, ['hiking', 'reading']);
        expect(student.calcTestAvgs()).toEqual(95);
    })
  })

    describe('changeGradYear()` which updates a student\'s gradYear to input arg', () => {
      test('student.gradYear should update to input', () => {
          const student = new Student('Jane Doe', 12, 7, [100, 90], 2022, ['hiking', 'reading']);
          student.changeGradYear(2023);
          expect(student.gradYear).toBe(2023);
      })
  })

  describe('addActivity()` which adds an activity to the activity array', () => {
    test('should add the input activity to activity array', () => {
        const student = new Student('Jane Doe', 12, 7, [100, 90], 2022, ['hiking', 'reading']);
        student.addActivity('swimming');
        expect(student.activities).toEqual(['hiking', 'reading', 'swimming']);
    })
})

describe('removeActivity()` which removes an activity from the activity array', () => {
  test('should remove the input activity from activity array', () => {
      const student = new Student('Jane Doe', 12, 7, [100, 90], 2022, ['hiking', 'reading']);
      student.removeActivity('reading');
      expect(student.activities).toEqual(['hiking']);
  })
})






})
  
