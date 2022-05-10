class Student {
  constructor(name, age, gradeLevel, testScores, gradYear, activities) {
    this.name = name;
    this.age = age;
    this.gradeLevel = gradeLevel;
    this.testScores = testScores;
    this.gradYear = gradYear;
    this.activities = activities;
  }

  updateStudentName(name) {
    this.name = name;
  }

  incrementAge() {
    this.age += 1;
  }

  incrementGradeLevel() {
    this.gradeLevel += 1;
  }

  addTestScore(score) {
    this.testScores.push(score);
  }

  calcTestAvgs() {
    const avg = this.testScores.reduce((total, currentScore) => total += currentScore) / this.testScores.length;
    return avg;
  }

  changeGradYear(newYear) {
    this.gradYear = newYear;
  }

  addActivity(activity) {
    this.activities.push(activity);
  }

  removeActivity(activity) {
    let activityToDelete = this.activities.findIndex(x => x == 'reading');
    this.activities.splice(activityToDelete, 1);
  }

}

module.exports = Student;