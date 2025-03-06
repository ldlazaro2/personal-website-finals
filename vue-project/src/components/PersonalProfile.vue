<template>
  <div class="container">
    <div v-if="showWelcomePage" class="welcome-page">
      <h1>Welcome to My Personal Profile</h1>
      <button @click="enterSite">Enter Site</button>
    </div>

    <div v-show="!showWelcomePage" class="main-content">
      <nav class="navbar">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#connect">Connect With Me</a></li>
          <li><a href="#hobbies">Hobbies & Goals</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#comment">Comment</a></li>
        </ul>
      </nav>

      <div class="grid-container">
        <div class="content-box" id="about">
          <h1>Personal Profile Web Page</h1>
        </div>
        <div class="content-box small-box" id="connect">
          <h2>Connect With Me</h2>
          <p>You can find me on 
            <a href="https://www.linkedin.com/in/luis-lazaro-b626a8286/" target="_blank">LinkedIn</a>.
          </p>
        </div>
        <div class="content-box">
          <h2>About Me</h2>
          <p>I am Luis Lorenzo D. Lazaro.</p>
          <p>I am currently enrolled at Asia Pacific College in BSCS-SF231. I live in Marikina City.</p>
          <p>Fun Fact: I have 3 dogs that are all girls.</p>
          
          <h3>Education / Achievements</h3>
          <p>Graduated preschool from ISYC.</p>
          <p>Graduated elementary from Marist School.</p>
          <p>Graduated senior high from Marikina Science High School.</p>

          <h3>IT Experience</h3>
          <ul class="no-bullets">
            <li>Contributed to a working website & app (Rams Pawtners) for a school project.</li>
            <li>Completed a course in Code Combat.</li>
          </ul>
        </div>
        <div class="content-box small-box" id="hobbies">
          <h3>Hobbies and Goals</h3>
          <table>
            <thead>
              <tr>
                <th>Hobbies & Interests</th>
                <th>Goals in Life / Dream</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>🏀 Playing Basketball</td>
                <td>🎓 Finish College</td>
              </tr>
              <tr>
                <td>🎮 Playing Video Games</td>
                <td>👨‍👩‍👧‍👦 Give back to my parents</td>
              </tr>
              <tr>
                <td>🎵 Listening to Music</td>
                <td>💼 Become a successful professional</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="content-box" id="gallery">
          <h3>Picture Gallery</h3>
          <div class="gallery">
            <img src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.15752-9/481865437_617940431220588_1566384181150925618_n.jpg" alt="Image 1">
            <img src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.15752-9/482194901_1164921068512703_5433057008602376022_n.jpg" alt="Image 2">
            <img src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.15752-9/482291816_2817193478463738_172566148447157408_n.jpg" alt="Image 3">
            <img src="https://scontent.fmnl30-3.fna.fbcdn.net/v/t1.15752-9/481401204_28578321155145885_5681485140275656498_n.png" alt="Image 4">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

/* Welcome Page */
.welcome-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
}

.welcome-page h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

/* Fixing the Enter Site Button */
.welcome-page button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s;
  width: auto; /* Make button size based on content */
}

.welcome-page button:hover {
  background: #c0392b;
  transform: scale(1.05);
}

/* Main Content */
.main-content {
  display: none; /* Hidden initially */
  padding: 20px;
}

/* Navigation Bar */
.navbar {
  background: #e74c3c;
  padding: 15px;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.navbar ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.navbar ul li a:hover {
  color: #f1c40f;
}

/* Grid Layout */
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
}

.content-box {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* About Me */
#about {
  grid-column: span 2;
  text-align: center;
}

/* Hobbies & Goals + Connect With Me (Side by Side) */
#hobbies,
#connect {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

#hobbies {
  grid-column: 1 / span 1;
}

#connect {
  grid-column: 2 / span 1;
}

/* Picture Gallery */
.gallery {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 10px;
  justify-content: center;
}

.gallery img {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  transition: transform 0.3s;
}

.gallery img:hover {
  transform: scale(1.1);
}

/* Comments Section */
#comment {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

form input,
form textarea {
  width: 90%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

form button {
  padding: 10px 15px;
  font-size: 1rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background: #c0392b;
}

/* Responsive Design */
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
  
  #about {
    grid-column: span 3;
  }

  #hobbies, #connect {
    grid-column: span 1;
  }
}
</style>


