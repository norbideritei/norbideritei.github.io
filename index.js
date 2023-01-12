var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Git"];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

var pageIds = ["home", "skills", "languages", "projects"];

function hideAllPages() {
  pageIds.forEach(function (pageId) {
    hide(pageId);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayLanguages() {
  displayPage("languages");
}

function displayProjects() {
  displayPage("projects");
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

displayPage("home");
