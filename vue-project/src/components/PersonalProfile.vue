<template>
  <div>
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
          <div class="about-me-container">
            <div class="about-me-text">
              <p>Hi, my name is Luis Lorenzo D. Lazaro.</p>
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
            <div class="about-me-image">
              <img src="https://via.placeholder.com/200x400" alt="About Me Image">
            </div>
          </div>
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
            <img src="https://via.placeholder.com/300x200" alt="Image 1">
            <img src="https://via.placeholder.com/300x200" alt="Image 2">
            <img src="https://via.placeholder.com/300x200" alt="Image 3">
            <img src="https://via.placeholder.com/300x200" alt="Image 4">
          </div>
        </div>
        <div class="content-box" id="comment">
          <div class="comment-form">
            <h3>Leave a Comment</h3>
            <form @submit.prevent="submitComment">
              <div class="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  v-model="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea
                  id="message"
                  v-model="message"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? "Submitting..." : "Submit" }}
              </button>
            </form>
            <p v-if="error" class="error">{{ error }}</p>
            <p v-if="success" class="success">{{ success }}</p>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="footer">
        <div class="social-media">
          <a href="https://www.facebook.com" target="_blank">
            <img src="https://via.placeholder.com/40x40" alt="Facebook">
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src="https://via.placeholder.com/40x40" alt="Instagram">
          </a>
          <a href="https://www.linkedin.com/in/luis-lazaro-b626a8286/" target="_blank">
            <img src="https://via.placeholder.com/40x40" alt="LinkedIn">
          </a>
        </div>
        <p>&copy; 2025 Luis Lorenzo D. Lazaro. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script>
import supabase from "@/supabaseClient";

export default {
  data() {
    return {
      name: "",
      message: "",
      isSubmitting: false,
      error: "",
      success: "",
      showWelcomePage: true, // Added this since it's referenced
    };
  },
  methods: {
    enterSite() {
      this.showWelcomePage = false;
    },
    async submitComment() {
      this.isSubmitting = true;
      this.error = "";
      this.success = "";

      try {
        const { error } = await supabase
          .from("comments")
          .insert([{ name: this.name, message: this.message }]);

        if (error) {
          throw error;
        }

        this.name = "";
        this.message = "";
        this.success = "Comment submitted successfully!";
      } catch (error) {
        this.error = "Failed to submit comment. Please try again.";
        console.error("Error submitting comment:", error);
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>



      <footer class="footer">
        <div class="social-media">
          <a href="https://www.facebook.com" target="_blank">
            <img src="https://via.placeholder.com/40x40" alt="Facebook">
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src="https://via.placeholder.com/40x40" alt="Instagram">
          </a>
          <a href="https://www.linkedin.com/in/luis-lazaro-b626a8286/" target="_blank">
            <img src="https://via.placeholder.com/40x40" alt="LinkedIn">
          </a>
        </div>
        <p>&copy; 2025 Luis Lorenzo D. Lazaro. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

.welcome-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://static.vecteezy.com/system/resources/previews/022/812/247/non_2x/clouds-and-stars-the-sun-on-a-blue-background-children-s-illustration-of-the-sky-in-a-paper-decorative-style-3d-vector.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}

.welcome-page h1 {
  font-size: 4rem; 
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.welcome-page button {
  padding: 15px 30px; 
  font-size: 1.2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2); 
  width: fit-content;
  text-align: center;
}

.welcome-page button:hover {
  background-color: #2980b9;
}

.main-content {
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
}

.content-box {
  background: white;
  padding: 30px; 
  margin: 20px 0; 
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.navbar {
  background: #3498db;
  padding: 15px;
  text-align: center;
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
}

.navbar ul li {
  margin: 0 20px;
}

.navbar ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

.about-me-container {
  display: flex;
  gap: 20px;
  align-items: center;
}

.about-me-text {
  flex: 2;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 200px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  border: 5px solid #3498db;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

th, td {
  padding: 15px;
  border: 1px solid #ddd;
  font-size: 1.1rem;
}

th {
  background: #3498db;
  color: white;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.gallery img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  border: 3px solid #3498db;
  transition: transform 0.3s, border-color 0.3s;
}

.gallery img:hover {
  transform: scale(1.1);
  border-color: #2980b9; 
}

.comment-form {
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.comment-form:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

h3 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem; 
}

.form-group {
  margin-bottom: 20px; 
}

label {
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

input,
textarea {
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #3498db;
  outline: none;
}

button {
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:disabled {
  background: #95a5a6;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background: #2980b9;
}

.no-bullets {
  list-style-type: none;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 2rem; 
}

.footer {
  background: #3498db;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px; 
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 20px; 
  margin-bottom: 15px;
}

.social-media img {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
}

.social-media img:hover {
  transform: scale(1.2);
}

.footer p {
  margin: 0;
  font-size: 1.1rem; 
}
</style>