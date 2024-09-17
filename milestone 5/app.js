// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        phone: phone,
        email: email,
        linkedin: linkedin,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHTML = "\n<h2>Editable Resume</h2>\n<h3>Personal Information</h3>\n    <p><b>Name:</b>  <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Whatsapp No:</b>  <span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><b>Email:</b>  <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>LinkedIn:</b>  <span contenteditable=\"true\">").concat(linkedin, "</span></p>\n\n    <h3>Academic Qualification</h3>\n    <p><b>Academic Qualification:</b>  <span contenteditable=\"true\">").concat(education, "</span></p>\n    \n    <h3>Experience</h3>\n    <p><b>Experience:</b>  <span contenteditable=\"true\">").concat(experience, "</span></p>\n\n    <h3>Skills</h3>\n    <p><b>Skills:</b>  <span contenteditable=\"true\">").concat(skills, "</span></p>\n    ");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('linkedin').value = resumeData.linkedin;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
