const studentDataFromServer = [
    { "student_id": "1","student_name":"Surajit" , "days_present": 70, "days_absent": 15 },
    { "student_id": "2","student_name":"Swarna" , "days_present": 65, "days_absent": 20 },
    { "student_id": "3","student_name":"Aryan" ,"days_present": 80, "days_absent": 5 }
  ];

  function fetchStudentData() {
    // Get the entered student ID
    const studentIdInput = document.getElementById("student-id").value;

    // Find the student data from the JSON array
    const student = studentDataFromServer.find(data => data.student_id === studentIdInput);

    // If the student exists, display their attendance data
    if (student) {
      document.getElementById("student-info").classList.remove("hidden");
      
      // Update student ID and totals
      document.getElementById("display-student-name").textContent = student.student_name;
      document.getElementById("display-student-id").textContent = student.student_id;
      document.getElementById("total-present").textContent = student.days_present;
      document.getElementById("total-absent").textContent   = student.days_absent;
    } else {
      alert("Student ID not found. Please try again.");
      document.getElementById("student-info").classList.add("hidden");
    }
  }