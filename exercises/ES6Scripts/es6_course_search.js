
let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];
//When does the PROG200 course start?
let searchCourseId = "PROG200"
// look through the courses
function searchCourses(course) {
    return course.CourseId === searchCourseId;
}
let course = courses.find(searchCourses);
console.log(`${searchCourseId} starts on ${course.StartDate}`);

// look for the property name of courseid
// look for PROG200 value in it
// look for start date in the course

// What is the title of the PROJ500 course?
let searchId1 = "PROJ500";
//look for course id 
// look for PROG500 value in it
function searchCourses(course) {
    let foo = "PROJ500"

}


// What are the titles of the courses that cost $50 or less?

// What classes meet in "Classroom 1"
