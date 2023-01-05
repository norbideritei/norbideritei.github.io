var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Git"];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

function displayHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("projects").style.display = "none";
}

function displaySkills() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
  document.getElementById("languages").style.display = "none";
  document.getElementById("projects").style.display = "none";
}

function displayLanguages() {
  document.getElementById("languages").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
}

function displayProjects() {
  document.getElementById("languages").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "block";
}

displayHome();
