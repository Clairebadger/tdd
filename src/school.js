class School {

  constructor(name, location, gradeLevels, numStudents, numTeachers, teachers, principal, grades, mascot) {
      this.name = name;
      this.location = location;
      this.gradeLevels = gradeLevels;
      this.numStudents = numStudents;
      this.numTeachers = numTeachers;
      this.teachers = teachers;
      this.principal = principal;
      this.grades = grades;
      this.mascot = mascot;
  }

  updateName(newName) {
    this.name = newName;
  }

  updateLocation(newLocation) {
    this.location = newLocation;
  }

  updateGradeLevels(newLevelsArray) {
    this.gradeLevels = newLevelsArray;
  }

  removeStudents(numToRemove) {
    this.numStudents -= numToRemove;
  }

  addStudents(numToAdd) {
    this.numStudents += numToAdd;
  }

  removeTeacher(teacher){
    let teacherToDelete = this.teachers.findIndex(x => x === teacher);
    this.teachers.splice(teacherToDelete, 1);   // .splice(elementToRemove, numToDelete)
    this.numTeachers -= 1
  }

  addTeacher(teacher){
      this.teachers.push(teacher)
      this.numTeachers ++ 
  }

  updatePrincipal(newprincipal){
      this.principal = newprincipal
  }

  updateMascot(newmascot){
    this.mascot = newmascot
}

  downSize(teacherToDelete) {
    // find teacher's corresponding class
    let teacherfound = false

    for (let grade of this.grades) {
      for (let myclass of grade.individualClasses) {
        if (JSON.stringify(myclass.teacher) ===  JSON.stringify(teacherToDelete)) {
          grade.removeIndividualClass(teacherToDelete);
          var studentsToDistribute = myclass.students;
          teacherfound = true
          break; // if teacher matches class's teacher, break out of loop
        }
      }

      if (teacherfound) {
          break;
      }
    }

    if (!teacherfound) { //if studentsToDistribute is undefined then it will raise errors so just exit if teacher not found
        return
    }

    // distribute students to each class
    while (studentsToDistribute.length > 0) {
      for (let grade of this.grades) {
        for (let myclass of grade.individualClasses) {
          let newStudent = studentsToDistribute.pop();
          myclass.students.push(newStudent);
          if (studentsToDistribute.length === 0) {
            break;
          }
        }

        if (studentsToDistribute.length === 0) {
          break;
        }
        
      }
    }


    
  }

}


module.exports = School; // keep at bottom