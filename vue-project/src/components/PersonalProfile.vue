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
          </ul>
        </nav>
  
        <div class="grid-container">
          <div class="item1" id="about">
            <h1>Personal Profile Web Page</h1>
          </div>
          <div class="item2" id="connect">
            <h2>Connect With Me</h2>
            <p>You can find me on 
              <a href="https://www.linkedin.com/in/luis-lazaro-b626a8286/" target="_blank">LinkedIn</a>.
            </p>
          </div>
          <div class="item3">
            <h2>About Me</h2>
            <p>I am Luis Lorenzo D. Lazaro.</p>
            <p>I am currently enrolled at Asia Pacific College in BSCS-SF231. I live in Marikina City.</p>
            <p>Fun Fact: I have 3 dogs that are all girls.</p>
            
            <h3>Education / Achievements</h3>
            <p>Graduated preschool from ISYC.</p>
            <p>Graduated elementary from Marist School.</p>
            <p>Graduated senior high from Marikina Science High School.</p>
  
            <h3>IT Experience</h3>
            <ul>
              <li>Contributed to a working website & app (Rams Pawtners) for a school project.</li>
              <li>Completed a course in Code Combat.</li>
            </ul>
          </div>
          <div class="item4" id="hobbies">
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
          <div class="item5" id="gallery">
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
  
  <script>
  export default {
    data() {
      return {
        showWelcomePage: true,
      };
    },
    methods: {
      enterSite() {
        this.showWelcomePage = false;
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Poppins", sans-serif;
    background-color: #f4f4f4;
    background-image: url("https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
    background-size: cover;
    background-attachment: fixed;
    color: #333;
  }

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
  }
  
  .welcome-page button {
    padding: 10px 20px;
    font-size: 1.2rem;
    background: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .welcome-page button:hover {
    background: #2980b9;
  }

  .navbar {
    background: rgba(52, 152, 219, 0.9);
    padding: 10px 20px;
    position: sticky;
    top: 0;
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
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
  }
  
  .navbar ul li a:hover {
    color: #f1c40f;
  }

  .grid-container {
    display: grid;
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 20px auto;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
  }
  
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  th {
    background: #3498db;
    color: white;
  }
  
  td {
    background: rgba(255, 255, 255, 0.8);
  }
  
  .gallery {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding: 10px;
    white-space: nowrap;
  }
  
  .gallery img {
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
    transition: transform 0.3s ease;
  }
  
  .gallery img:hover {
    transform: scale(1.1);
  }
  
  @media (min-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  </style>
  