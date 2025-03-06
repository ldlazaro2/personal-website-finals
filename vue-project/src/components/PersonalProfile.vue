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
  font-family: "Poppins", sans-serif;
  background-color: #e9ecef;
  color: #333;
  overflow: hidden; /* Ensures no scrollbars for fullscreen */
}

.container {
  height: 100vh; /* Ensures full-screen height */
  display: flex;
  flex-direction: column;
}

/* Welcome Page */
.welcome-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  background: url('https://i.ytimg.com/vi/RIW_-Ph6DmU/maxresdefault.jpg') no-repeat center center/cover; /* Add your image URL here */
  color: white; /* Ensures visibility of text */
}

.welcome-page h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.welcome-page button {
  padding: 10px 20px;
  font-size: 1rem;
  background: rgba(52, 152, 219, 0.8);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.welcome-page button:hover {
  background: rgba(41, 128, 185, 0.9);
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 20px;
  background: #f4f4f4;
}

.content-box {
  background: white;
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Navigation Bar */
.navbar {
  background: #3498db;
  padding: 10px;
  text-align: center;
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

.navbar ul li {
  margin: 0 15px;
}

.navbar ul li a {
  color: white;
  text-decoration: none;
}

button {
  background: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>