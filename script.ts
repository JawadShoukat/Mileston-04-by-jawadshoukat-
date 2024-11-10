// document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get references to form elements
//     const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
//     const nameElement = document.getElementById('name') as HTMLInputElement;
//     const lastNameElement = document.getElementById('lastName') as HTMLInputElement;
//     const emailElement = document.getElementById('email') as HTMLInputElement;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement;
//     const educationElement = document.getElementById('education') as HTMLTextAreaElement;
//     const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
//     const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

//     if (profilePictureInput && nameElement && lastNameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//         const name = nameElement.value;
//         const lastName = lastNameElement.value;
//         const email = emailElement.value;
//         const phone = phoneElement.value;
//         const education = educationElement.value;
//         const experience = experienceElement.value;
//         const skills = skillsElement.value;

//         // Profile Picture
//         const profilePictureFile = profilePictureInput.files?.[0];
//         const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

//         // Create Resume Output
//         const resumeOutput = `
//         <h2>Resume</h2>
//         ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
//         <p><strong>Name:</strong> <span id="edit-name" class="editable">${name} ${lastName}</span></p>
//         <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
//         <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>

//         <h3>Education</h3>
//         <p id="edit-education" class="editable">${education}</p>

//         <h3>Experience</h3>
//         <p id="edit-experience" class="editable">${experience}</p>

//         <h3>Skills</h3>
//         <p id="edit-skills" class="editable">${skills}</p>
//         `;

//         // Display Resume Output
//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//             makeEditable();
//         }
//     } else {
//         console.error('One or more required elements are missing.');
//     }
// });

// function makeEditable() {
//     const editableElements = document.querySelectorAll('.editable');
//     editableElements.forEach(element => {
//         element.addEventListener('click', function() {
//             const currentElement = element as HTMLElement;
//             const currentValue = currentElement.textContent || "";

//             if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
//                 const input = document.createElement('input');
//                 input.type = 'text';
//                 input.value = currentValue;
//                 input.classList.add('editing-input');

//                 input.addEventListener('blur', function() {
//                     currentElement.textContent = input.value;
//                     currentElement.style.display = 'inline';
//                     input.remove();
//                 });

//                 currentElement.style.display = 'none';
//                 currentElement.parentNode?.insertBefore(input, currentElement);
//                 input.focus();
//             }
//         });
//     });
// }








document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const lastNameElement = document.getElementById('lastName') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    if (profilePictureInput && nameElement && lastNameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const lastName = lastNameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
            <p><strong>Name:</strong> ${name} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
});

function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');

                input.addEventListener('blur', function() {
                    currentElement.textContent = input.value;
                    input.remove();
                });

                currentElement.replaceWith(input);
                input.focus();
            }
        });
    });
}
