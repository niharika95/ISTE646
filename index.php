<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Merienda+One&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>Niharika Dalal - IST646</title>
  </head>
  <body>
    <!-- navigation bar -->
    <div class="navigation">
      <a class="brandName" href="#firstScreen">Niharika Dalal</a>
      <div class="navLinks">
        <a class="link" href="#secondScreen">About me</a>
        <a class="link" href="#thirdScreen">Projects</a>
      </div>
      <!-- hamburger icon for responsive design -->
      <div class="hamburgerIconContainer">
        <div class="hamburgerIconDiv">
          <img
            src="assets/hamburgerMenu.png"
            alt="Menu Options Icon"
            class="hamburgerIcon"
          />
        </div>
        <div class="navLinksHamburger">
          <a class="linkHamburger" href="#secondScreen">About me</a>
          <a class="linkHamburger" href="#thirdScreen">Projects</a>
        </div>
      </div>
    </div>
    <!-- first screen - image and name -->
    <section id="firstScreen">
      <div class="firstScreenContent">
        <div class="profileImageContainer">
          <div class="overlay"></div>
          <img
            src="assets/profileImage.png"
            alt="Profile Image"
            class="profileImage"
          />
        </div>
        <div class="nameIntro">
          <p class="hi">Hi! I'm</p>
          <h5 class="name">Niharika Dalal</h5>
        </div>
      </div>
    </section>
    <!-- second screen - description -->
    <section id="secondScreen">
      <div class="secondScreenContent">
        <h4 class="aboutMe">About me</h4>
        <p class="information">
          Born on September 13th, 1995, I've lived most of my life in Mumbai,
          India. Earned a bachelor's degree in computer engineering from NMIMS
          University (India), and am currently pursuing a master's degree in
          software engineering at Rochester Institute of Technology. As a design
          enthusiast, I enjoy doing graphic, interaction and user experience
          design; and mystery/crime is my go-to genre when it comes to novels
          and movies!<br /><br />
          <a href="mailto:nrd8504@g.rit.edu" class="email" target="_blank"
            >Let's chat!</a
          >
        </p>
      </div>
    </section>
    <!-- third screen - projects -->
    <section id="thirdScreen">
      <div class="thirdScreenContent">
        <h4 class="projects">Projects</h4>
        <div class="tabs">
          <div class="tabLink" id="tabLink1">
            <p>Homework &<br />Class Assignments</p>
            <hr class="tabUnderline" id="tabUnderline1" />
          </div>
          <p>|</p>
          <div class="tabLink" id="tabLink2">
            <p>Individual<br />Projects</p>
            <hr class="tabUnderline" id="tabUnderline2" />
          </div>
          <p>|</p>
          <div class="tabLink" id="tabLink3">
            <p>Group<br />Projects</p>
            <hr class="tabUnderline" id="tabUnderline3" />
          </div>
        </div>
        <hr />
        <div class="projectsSection">
          <div id="homeworkSection">
            <a href="http://serenity.ist.rit.edu/~nrd8504/646/HW1/" class="taskLink" target="_blank">Homework 1</a>
            <a href="http://serenity.ist.rit.edu/~nrd8504/646/HW2B/" class="taskLink" target="_blank">Homework 2B</a>
            <a href="http://serenity.ist.rit.edu/~nrd8504/646/HW2C/" class="taskLink" target="_blank">Homework 2C</a>
            <a href="http://serenity.ist.rit.edu/~nrd8504/646/HW3A/" class="taskLink" target="_blank">Homework 3A</a>
            <a href="http://serenity.ist.rit.edu/~nrd8504/646/HW3B/" class="taskLink" target="_blank">Homework 3B</a>
            <a href="http://serenity.ist.rit.edu/~nrd8504/646/HW4A/" class="taskLink" target="_blank">Homework 4A</a>
            <a href="http://serenity.ist.rit.edu/~nrd8504/646/HW4B/" class="taskLink" target="_blank">Homework 4B</a>
            <a href="http://serenity.ist.rit.edu/~nrd8504/646/HW5/" class="taskLink" target="_blank">Homework 5</a>
            <a href="http://serenity.ist.rit.edu/~nrd8504/646/HW6B/" class="taskLink" target="_blank">Homework 6B</a>
            <a href="http://serenity.ist.rit.edu/~nrd8504/646/HW7/" class="taskLink" target="_blank">Homework 7</a>
            <a href="http://serenity.ist.rit.edu/~nrd8504/646/HW10A/" class="taskLink" target="_blank">Homework 10A</a>
          </div>
          <div id="individualProjectsSection">
            <a href="http://serenity.ist.rit.edu/~nrd8504/646/individual_project/" class="taskLink" target="_blank">Individual Project</a>
          </div>
          <div id="groupProjectsSection">
            <a href="http://serenity.ist.rit.edu/~nrd8504/646/GroupProjectII/" class="taskLink" target="_blank">Group Project II</a>
          </div>
        </div>
      </div>
    </section>
    <!-- footer - indicates the last modified date -->
    <footer>
      <?php $filename = 'index.php';
        if (file_exists($filename))
          {
            echo "Last modified: " . date ("l, F d Y h:ia", filemtime($filename));
          }
      ?>
    </footer>
    <script src="javascript.js"></script>
  </body>
</html>
