<template>
  <div>
    <div v-if="showWelcomePage" class="welcome-page">
      <h1>Welcome to My Personal Profile</h1>
      <button @click="enterSite">Enter Site</button>
    </div>

    <div v-show="!showWelcomePage" class="main-content">
      <nav class="navbar">
        <ul class="no-bullets">
          <li><a href="#about">About Me</a></li>
          <li><a href="#connect">Connect With Me</a></li>
          <li><a href="#hobbies">Hobbies & Goals</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#comment">Comment</a></li>
        </ul>
      </nav>

      <div class="grid-container">
        <section id="about" class="content-box fade-in">
          <h1>Personal Profile Web Page</h1>
        </section>
        
        <section id="connect" class="content-box fade-in">
          <h2>Connect With Me</h2>
          <p>You can find me on 
            <a href="https://www.linkedin.com/in/luis-lazaro-b626a8286/" target="_blank">LinkedIn</a>.
          </p>
        </section>

        <section class="content-box fade-in">
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
              <img src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.15752-9/360048605_962855171658580_3508757474358519529_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGlPp8lxf37rfYBnRcJ5hOw3J8tNEpLnpTcny00SkuelOatLTrr-WsgSaVfFAU-XlRKDxCnEWdQoOWf5TlQV5vH&_nc_ohc=XxOuIOLxq2cQ7kNvgH-ieyF&_nc_oc=AdjZmnis40UAXjhQJZW2r0A_jl4HDkIOmjQ71_Qw3AISPlObiU09-d0OD_xTWit_gKM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&oh=03_Q7cD1wFqCnQx1B_qHNRyXt8dGLOAOVSJCCEjCLZ06KpQ0C1T7A&oe=67F089F4" alt="About Me Image" class="styled-image">
            </div>
          </div>
        </section>

        <section id="hobbies" class="content-box fade-in">
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
                <td>👨‍👩‍👧👦 Give back to my parents</td>
              </tr>
              <tr>
                <td>🎵 Listening to Music</td>
                <td>💼 Become a successful professional</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="gallery" class="content-box fade-in">
          <h3>Picture Gallery</h3>
          <div class="gallery">
            <img src="https://scontent.fmnl17-7.fna.fbcdn.net/v/t1.15752-9/370282104_247747214898949_683149009952512446_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHv3eKmTHTqpgW3MtsCcsxE4urA0xp9l_bi6sDTGn2X9gklL68r1ozPF13Slm0SAQ8BoLKSi3KOww-wp7NHaGSt&_nc_ohc=YpiCw9rLxYwQ7kNvgE-tBk6&_nc_oc=AdhZbP9X5Q3lOOX6GSO_1H1VINRM2jc9ZBphyKKqwqXqroF0KZRMArYvX_QHceH5p_s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&oh=03_Q7cD1wGNDwuRFVkFxlOcqjXtQ5HgxyqDi4dyUAkCvj-cs-0zCQ&oe=67F08376" alt="Image 1" class="styled-image">
            <img src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.15752-9/481401204_28578321155145885_5681485140275656498_n.png?stp=dst-png_s640x640&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFEIh7ilYSHmJ6A-Vs8e-bcWY3R4qe2JFJZjdHip7YkUqmIXLzwFcYa08nI7DSsPa7AO-px62fRapZ9dMTOFvTL&_nc_ohc=_dBfwO1m2rMQ7kNvgGbjedk&_nc_oc=AdgGuY_SN2Ss-n2qmgdhA3uFYXmssfa-JTBPTb5q_FuAYT9LtZa6fv21_76gYKsZmvY&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&oh=03_Q7cD1wFZCtV4UC3hhDoVIgR1l9KA3XY-6YoTJolkJPxzaG76xw&oe=67F0808C" alt="Image 2" class="styled-image">
            <img src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.15752-9/481482043_1348484519684429_420080895588121485_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHBxf2c5SkuciBNyOur9lbBN4zeE7QTLXU3jN4TtBMtdVhMUpKg8zexQq4Tpng5HUZj-3EoRi6ge0f2xhJ-Hi59&_nc_ohc=xWX8EhfOKdEQ7kNvgGiBNUV&_nc_oc=AdijkSSIGGd0AeGRqrFndlKowidwiyQ1CUz3Su8T9d27PIRoCzdERMUb1Qw4d2l_MPU&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&oh=03_Q7cD1wG_ZWvAP_q1QHHC7Y7LbzLEQ-fFlVuSAosTzP4KpHsijA&oe=67F07F10" alt="Image 3" class="styled-image">
          </div>
        </section>

        <section id="comment" class="content-box fade-in">
          <h3>Leave a Comment</h3>
          <form @submit.prevent="addComment">
            <input v-model="newName" type="text" placeholder="Your name..." required>
            <input v-model="newComment" type="text" placeholder="Write a comment..." required>
            <button type="submit">Submit</button>
          </form>
          <ul class="no-bullets">
            <li v-for="(comment, index) in comments" :key="index"><strong>{{ comment.name }}:</strong> {{ comment.text }}</li>
          </ul>
        </section>
      </div>

      <footer class="footer">
        <div class="social-media">
          <a href="https://www.facebook.com" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="Facebook" class="styled-image">
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" class="styled-image">
          </a>
          <a href="https://www.linkedin.com/in/luis-lazaro-b626a8286/" target="_blank">
            <img src="https://static.vecteezy.com/system/resources/previews/023/986/926/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="LinkedIn" class="styled-image">
          </a>
        </div>
        <p>&copy; 2025 Luis Lorenzo D. Lazaro. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showWelcomePage: true,
      newName: "",
      newComment: "",
      comments: []
    };
  },
  methods: {
    enterSite() {
      this.showWelcomePage = false;
    },
    addComment() {
      if (this.newName.trim() !== "" && this.newComment.trim() !== "") {
        this.comments.push({ name: this.newName, text: this.newComment });
        this.newName = "";
        this.newComment = "";
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

body {
  font-family: "Inter", sans-serif;
  background-color: #f5f5f5; 
  color: #333; 
  line-height: 1.6;
}

.welcome-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
  text-align: center;
}

.welcome-page h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.welcome-page button {
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #fff; 
  color: #000; 
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.welcome-page button:hover {
  background-color: #333; 
  color: #fff;
}

.main-content {
  padding: 20px;
  background-color: #fff;
  display: flex;
  gap: 20px;
}

.navbar {
  background-color: #333; /* Darker background for better contrast */
  padding: 15px;
  text-align: center;
  margin-bottom: 20px;
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.navbar ul li a {
  color: #fff; /* White text for better contrast */
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar ul li a:hover {
  color: #ccc; /* Lighter color on hover */
}

.content-box {
  background-color: #fff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1;
}

.content-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); 
}

.about-me-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.about-me-text {
  flex: 2;
}

.about-me-image img {
  width: 200px;
  height: 600px; /* Adjusted height to align with all three boxes */
  object-fit: cover;
  border-radius: 8px;
  border: 4px solid #000; 
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #000; 
  color: #fff; 
}

.gallery {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  border: 4px solid #000; 
  transition: transform 0.3s ease;
}

.gallery img:hover {
  transform: scale(1.05);
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

input, textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  border-color: #000; 
  outline: none;
}

button {
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #333; 
}

.no-bullets {
  list-style: none;
  padding: 0;
}

.no-bullets li {
  background-color: #f5f5f5; 
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ddd; 
}

.footer {
  background-color: #000; 
  color: #fff; 
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
  transform: scale(1.1);
}

.footer p {
  margin: 0;
  font-size: 0.9rem;
  color: #ccc; 
}
</style>