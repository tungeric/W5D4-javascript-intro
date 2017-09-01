function Student(fname,lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}


Student.prototype.name = function () {
  return `${this.fname} ${this.lname}`;
};

Student.prototype.courseLoad = function () {
  let courseHash = {};
  this.courses.forEach((course) =>{
    courseHash[course.department] =(courseHash[course.department] || 0);
    courseHash[course.department] += course.credits;
  });
  return courseHash;
};

function Course(name,department,credits, days, timeBlock) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.days = days;
  this.timeBlock = timeBlock;
}

Course.prototype.addStudent = function (student) {
  student.enroll(this);

};

Course.prototype.conflictsWith = function (course) {
  let result = false;
  course.days.forEach((courseday)=> {
    if (this.days.includes(courseday)) {
      if (this.timeBlock === course.timeBlock) {
        result = true;
      }
    }
  });
  return result;
};

Student.prototype.enroll = function (course) {
  let conflicts = false;
  if (this.courses.includes(course)===false) {
    this.courses.forEach ((schoolthing) => {
      if(schoolthing.conflictsWith(course)) {
        conflicts = true;
      }
    });
    if(conflicts === false) {
      this.courses.push(course);
    } else {
      alert("there's a conflict");
    }
  }

};

const eric = new Student("eric","tung");
const jesse = new Student("jesse","skeets");
const javascript = new Course("javascript","programming",4,['mon','wed','fri'],6);
const nuclear = new Course("Nuclear Physics","physics",4,['tue','wed','thu'],3);
const ruby = new Course("Ruby","programming",3,['tue','fri','mon'],3);


javascript.addStudent(eric);
ruby.addStudent(eric);
console.log(eric);

nuclear.addStudent(eric);
console.log(eric);
// console.log(eric.courseLoad());
// console.log(javascript);

// nuclear.addStudent(jesse);




// console.log(ruby.conflictsWith(javascript));
// console.log(ruby.conflictsWith(nuclear));
