// - This class has `individualClasses` (array of `IndividualClass` instances) and `graduationYear` (num) properties
// - This class has methods:
//   - `getStudentCount()` which returns the total number of students in all the classes of the `Grade`
//   - `calculateGradeAverage()` which returns the average of all test scores for all `Student`s in the `Grade`
//   - `addIndividualClass()` which adds an `IndividualClass` to the `individualClasses` array

class Grade {
    constructor(classes, graduationyear) {
        this.individualClasses = classes  // an array of individual class instances
        this.graduationYear = graduationyear  // a number
    }

    getStudentCount(){
        let count = 0;
        for(let myclass of this.individualClasses){
            count += myclass.students.length
        }
        return count
    }

    calculateGradeAverage() {
    let totalgrades = []
    for (let thisclass of this.individualClasses){
      for (let mystudent of thisclass.students) {
          totalgrades = totalgrades.concat(mystudent.testScores)
      }
    }

    return totalgrades.reduce((total, currentScore) => total += currentScore) / totalgrades.length;   // calculates average
    }

    
    addIndividualClass(newclass){
        this.individualClasses.push(newclass)
    }
    
    removeIndividualClass(classToRemove){
        /*
        for(let i = 0; i < this.individualClasses.length; i++){
            if (this.individualClasses[i].subject === classToRemove.subject &&
                this.individualClasses[i].teacher === classToRemove.teacher &&
                this.individualClasses[i].gradeLevel === classToRemove.gradeLevel &&
                this.individualClasses[i].students === classToRemove.students){
                    let index = i 
                }
        }*/
        let index = this.individualClasses.findIndex(x => x == classToRemove);
        this.individualClasses.splice(index, 1);
    }

  }

module.exports = Grade; // keep at bottom