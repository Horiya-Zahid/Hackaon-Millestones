var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect input values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate resume
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>  ".concat(name, "</p>\n    <p><b>Whatsapp No:</b>  ").concat(phone, "</p>\n    <p><b>Email:</b>  ").concat(email, "</p>\n    <p><b>LinkedIn:</b>  ").concat(linkedin, "</p>\n\n    <h3>Academic Qualification</h3>\n    <p><b>Academic Qualification:</b>  ").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p><b>Experience:</b>  ").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p><b>Skills:</b>  ").concat(skills, "</p>\n    ");
    //Display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("Please submit all required fields.");
    }
});
