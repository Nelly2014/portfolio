window.onload = () => {
    const journey = document.getElementById("journey");
    const workExperience = document.getElementById("work-experience");
    const skillsList = document.getElementById("skills-list");
    const projects = document.getElementById("projects");
  
    // Display career journey
    setTimeout(() => {
      journey.innerHTML = `
        <p>Starting with a Diploma in ICT from Walter Sisulu University, I have gained hands-on experience in software development.</p>
        <p>Interned at Deviare, where I worked on web development and backend solutions using Node.js, Angular, and Spring Boot.</p>
      `;
      journey.classList.add("fade-in");
    }, 500);
  
    // Display work experience
    setTimeout(() => {
      workExperience.innerHTML = `
        <h3>Deviare (PTY) LTD | IT Intern</h3>
        <p><strong>2024 - April 2025 | Fourways, Gauteng</strong></p>
        <ul>
          <li>Developed interactive web applications using HTML, CSS, JavaScript, and Angular.</li>
          <li>Designed and deployed scalable backend solutions using Node.js and Spring Boot.</li>
          <li>Participated in Agile development processes, collaborating with cross-functional teams to ensure timely delivery.</li>
          <li>Worked with AWS, Jenkins, and Docker for cloud services and DevOps practices.</li>
          <li>Gained hands-on experience in API development and testing with Postman.</li>
        </ul>
  
        <h3>Department of Social Development | IT Intern (Network Technician)</h3>
        <p><strong>2023 - 2024 | Mthatha</strong></p>
        <ul>
          <li>Provided technical support for end-users and resolved issues related to network connectivity.</li>
          <li>Installed, configured, and maintained operating systems and network infrastructure.</li>
        </ul>
      `;
      workExperience.classList.add("fade-in");
    }, 1500);
  
    // Display skills
    setTimeout(() => {
      skillsList.innerHTML = `
        <ul>
          <li>Java, JavaScript, Node.js, Spring Boot</li>
          <li>MySQL, Oracle Apex</li>
          <li>API Development, Postman</li>
          <li>Cloud Services: AWS, Docker</li>
        </ul>
      `;
      skillsList.classList.add("fade-in");
    }, 2500);
  
    // Display projects
    setTimeout(() => {
      projects.innerHTML = `
        <p>One of my proudest projects is a <a href="https://github.com/Nelly2014/Final-Project/tree/57121b95d82c956714d07b187407c423cf8e0d95/vehicletracking">Vehicle Tracking System</a>.</p>
        <p>Developed both the frontend and backend, integrating real-time tracking and improving system performance.</p>
      `;
      projects.classList.add("fade-in");
    }, 3500);
  };
  