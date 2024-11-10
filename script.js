// document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
//     event.preventDefault();
var _a;
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
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var lastNameElement = document.getElementById('lastName');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var profilePictureInput = document.getElementById('profilePicture');
    if (profilePictureInput && nameElement && lastNameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var lastName = lastNameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n            <h2>Generated Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n\n            <div class=\"resume-section\">\n                <h3>Personal Information</h3>\n                <p><strong>Name:</strong> ").concat(name_1, " ").concat(lastName, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n            </div>\n\n            <div class=\"resume-section\">\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n            </div>\n\n            <div class=\"resume-section\">\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n            </div>\n\n            <div class=\"resume-section\">\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </div>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
