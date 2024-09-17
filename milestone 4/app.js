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
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>  <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Whatsapp No:</b>  <span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><b>Email:</b>  <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>LinkedIn:</b>  <span contenteditable=\"true\">").concat(linkedin, "</span></p>\n\n    <h3>Academic Qualification</h3>\n    <p><b>Academic Qualification:</b>  <span contenteditable=\"true\">").concat(education, "</span></p>\n    \n    <h3>Experience</h3>\n    <p><b>Experience:</b>  <span contenteditable=\"true\">").concat(experience, "</span></p>\n\n    <h3>Skills</h3>\n    <p><b>Skills:</b>  <span contenteditable=\"true\">").concat(skills, "</span></p>\n    ");
    //Display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("Please submit all required fields.");
    }
});
