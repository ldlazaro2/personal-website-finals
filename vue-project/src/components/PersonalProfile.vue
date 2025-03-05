<template>
    <div class="container">
      <h3>Leave a Comment</h3>
      <form @submit.prevent="submitComment">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" placeholder="Your name" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" placeholder="Your message" required></textarea>
        </div>
        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? "Submitting..." : "Submit" }}
        </button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="success" class="success">{{ success }}</p>
  
      <!-- Hobbies and Goals Section -->
      <div class="hobbies-goals">
        <div class="hobby">
          <img src="hobby1.jpg" alt="Hobby 1">
          <p>Reading Books</p>
        </div>
        <div class="hobby">
          <img src="hobby2.jpg" alt="Hobby 2">
          <p>Playing Guitar</p>
        </div>
        <div class="goal">
          <img src="goal1.jpg" alt="Goal 1">
          <p>Travel the World</p>
        </div>
        <div class="goal">
          <img src="goal2.jpg" alt="Goal 2">
          <p>Learn New Skills</p>
        </div>
      </div>
  
      <!-- Image Gallery Section -->
      <div class="image-gallery">
        <img src="gallery1.jpg" alt="Gallery Image 1">
        <img src="gallery2.jpg" alt="Gallery Image 2">
        <img src="gallery3.jpg" alt="Gallery Image 3">
        <img src="gallery4.jpg" alt="Gallery Image 4">
      </div>
    </div>
  </template>
  
  <script>
  import supabase from "../supabaseClient";
  
  export default {
    data() {
      return {
        name: "",
        message: "",
        isSubmitting: false,
        error: "",
        success: "",
      };
    },
    methods: {
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
  
  <style scoped>
  /* Comment Form Styling */
  .container {
    max-width: 600px;
    margin: 30px auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .container:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  h3 {
    text-align: center;
    margin-bottom: 15px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
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
    padding: 10px;
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
  
  .error {
    color: red;
    text-align: center;
    margin-top: 10px;
  }
  
  .success {
    color: green;
    text-align: center;
    margin-top: 10px;
  }

  .hobbies-goals {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    text-align: center;
    margin-top: 20px;
  }
  
  .hobby, .goal {
    flex: 1;
    min-width: 200px;
    max-width: 300px;
  }
  
  .hobby img, .goal img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .image-gallery {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 10px;
    padding: 10px;
    margin-top: 20px;
  }
  
  .image-gallery img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  </style>
  