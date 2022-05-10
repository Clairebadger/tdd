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
        return 
    }
    calculateGradeAverage(){
        return
    }
    addIndividualClass(newclass){
        this.individualClasses(newclass)
    }
  }

module.exports = Grade; // keep at bottom