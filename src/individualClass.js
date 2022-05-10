class IndividualClass {
    constructor(subject, gradeLevel, teacher, students) {
        this.subject = subject
        this.teacher = teacher
        this.gradeLevel = gradeLevel
        this.students = students
    }
    updateSubject(newSubj){
        this.subject =newSubj
    }
    changeTeacher(teacher){
        this.teacher = teacher
    }
    addStudent(newstudent){
        this.students.push(newstudent)
    }
    removeStudent(student){
        let i = this.students.findIndex(x => x == student);
        this.students.splice(i, 1);
    }
  }
  
  module.exports = IndividualClass;