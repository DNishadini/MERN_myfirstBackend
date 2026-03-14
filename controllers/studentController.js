import Student from "../models/student.js";
export function getStudents(req, res) {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch();
}

export function createStudents(req, res) {
  console.log("Post request received");
  const student = new Student({
    name: req.body.name,
    age: req.body.age,
    city: req.body.city,
  });
  student
    .save()
    .then(() => {
      res.json({
        message: "student creation successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "student creation fail",
      });
    });
}
