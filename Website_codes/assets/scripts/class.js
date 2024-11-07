
const classAttendanceData = [
  { "student_id": "12345", "name": "John Doe", "days_present": 70 },
  { "student_id": "67890", "name": "Jane Smith", "days_present": 65 },
  { "student_id": "54321", "name": "Emily Johnson", "days_present": 80 },
  // Add more student records as needed
];

// Function to populate the table with student attendance data
function displayClassAttendance() {
  const attendanceTable = document.getElementById("class-attendance-data");
  attendanceTable.innerHTML = ""; // Clear any previous data

  classAttendanceData.forEach(student => {
    const row = document.createElement("tr");
    row.classList.add("border-b", "border-gray-200", "hover:bg-gray-100");

    row.innerHTML = `
      <td class="py-3 px-6 text-left whitespace-nowrap">${student.student_id}</td>
      <td class="py-3 px-6 text-left">${student.name}</td>
      <td class="py-3 px-6 text-left">${student.days_present}</td>
    `;
    attendanceTable.appendChild(row);
  });
}

// Call the function to display data when the page loads
displayClassAttendance();
