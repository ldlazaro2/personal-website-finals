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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: "Poppins", sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.welcome-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: white;
}

.main-content {
  flex: 1;
  padding: 20px;
  background: white;
}

.content-box {
  background: white;
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

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

.gallery {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 10px;
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

.no-bullets {
  list-style: none;
  padding-left: 0;
}

button {
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #2980b9;
}
</style>
