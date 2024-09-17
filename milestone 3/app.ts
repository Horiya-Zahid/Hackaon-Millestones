const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit', (event: Event) =>{
    event.preventDefault();

    // collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //Generate resume
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>  ${name}</p>
    <p><b>Whatsapp No:</b>  ${phone}</p>
    <p><b>Email:</b>  ${email}</p>
    <p><b>LinkedIn:</b>  ${linkedin}</p>

    <h3>Academic Qualification</h3>
    <p><b>Academic Qualification:</b>  ${education}</p>
    
    <h3>Experience</h3>
    <p><b>Experience:</b>  ${experience}</p>

    <h3>Skills</h3>
    <p><b>Skills:</b>  ${skills}</p>
    `;

    //Display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
       console.error("Please submit all required fields.");
    }
})