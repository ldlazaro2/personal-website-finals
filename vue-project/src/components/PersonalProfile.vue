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
        <div class="content-box" id="connect">
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
        <div class="content-box" id="hobbies">
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
                <td>🏆 Improve physical fitness and teamwork skills</td>
              </tr>
              <tr>
                <td>🎮 Playing Video Games</td>
                <td>🖥️ Enhance problem-solving and strategic thinking</td>
              </tr>
              <tr>
                <td>🎵 Listening to Music</td>
                <td>🎸 Learn to play a musical instrument</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="content-box" id="gallery">
          <h3>Picture Gallery</h3>
          <div class="gallery">
            <!-- Add images here -->
          </div>
        </div>
        <div class="content-box" id="comment">
          <h3>Leave a Comment</h3>
          <form @submit.prevent="submitComment">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="comment.name" required>
            
            <label for="message">Message:</label>
            <textarea id="message" v-model="comment.message" required></textarea>

            <button type="submit">Submit</button>
          </form>

          <div class="comments">
            <h4>Comments:</h4>
            <ul class="no-bullets">
              <li v-for="(comment, index) in comments" :key="index">
                <strong>{{ comment.name }}:</strong> {{ comment.message }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showWelcomePage: true,
      comment: {
        name: '',
        message: ''
      },
      comments: []
    };
  },
  methods: {
    enterSite() {
      this.showWelcomePage = false;
    },
    submitComment() {
      if (this.comment.name && this.comment.message) {
        this.comments.push({ 
          name: this.comment.name, 
          message: this.comment.message 
        });
        this.comment.name = '';
        this.comment.message = '';
      }
    }
  }
};
</script>



<style scoped>
/* General Styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  font-family: "Poppins", sans-serif;
  background-color: #e9ecef;
  color: #333;
}

.container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

/* Navigation Bar */
.navbar {
  background: #3498db;
  padding: 15px;
  text-align: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.navbar ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

/* Main Content */
.main-content {
  width: 90%;
  max-width: 1200px;
  margin-top: 80px; /* Prevents overlap with navbar */
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Section Styling */
.about-section,
.education-section,
.experience-section {
  background: white;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* IT Experience (Remove Bullets) */
.experience-section ul {
  list-style: none;
  padding: 0;
}

.experience-section ul li {
  padding: 5px 0;
}

/* Responsive Design */
@media (min-width: 768px) {
  .main-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .about-section {
    grid-column: span 2;
  }
}

@media (min-width: 1024px) {
  .main-content {
    grid-template-columns: repeat(3, 1fr);
  }

  .about-section {
    grid-column: span 3;
  }
}
</style>

