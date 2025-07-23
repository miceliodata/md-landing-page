<script setup lang="ts">
</script>

<template>
  <body>

    <header class="site-header">
      <div class="logo">MICELIO DATA</div>
      <nav class="nav-primary">
        <ul>
          <li><a href="#">Platform</a></li>
          <li><a href="#">Suppliers</a></li>
          <li><a href="#">Brands</a></li>
          <li><a href="#">Partners</a></li>
        </ul>
      </nav>
      <a href="#" class="btn-demo">Request a demo</a>
    </header>

    <section class="hero">
      <h1>Make your products ready for European DPP Requirements</h1>
      <p style="margin-bottom: 2rem;">Explore compliant products from Asian manufacturers</p>
      <a href="#" class="btn-primary">Book a demo</a>
    </section>

    <section class="features">
      <div class="feature">
        <h2>Suppliers</h2>
        <p>Enter your product information to process it conforming to current European standards</p>
      </div>
      <div class="feature">
        <h2>Brands</h2>
        <p>Establish contact with DPP-compliant suppliers from Turkey and Bangldesh</p>
      </div>
    </section>

    <section class="use-cases">
      <h2>Platform</h2>
      <ul>
        <li>Our Approach</li>
        <li>MicelioData</li>
      </ul>

      <h2>Advantages</h2>
      <ul>
        <li>Guarantee Product Sustainability to Customers and Institutions</li>
        <li>Provide Manufacturing Data to Brands</li>
        <li>Ensure Regulatory Compliance</li>
        <li>Digital Partnership</li>
      </ul>
    </section>

    <section class="cases">
      <div class="case-item">
        <h3>Brand 1</h3>
        <p>Traceable products through Digital ID...</p>
      </div>
      <div class="case-item">
        <h3>Brand 2</h3>
        <p>Complete manufacturing information through QR codes...</p>
      </div>
      <div class="case-item">
        <h3>Brand 3</h3>
        <p>Access to entire textile industry sectors from Asian producers...</p>
      </div>
    </section>

    <section class="partner-logos">
      <span>Partner 1</span>
      <span>Partner 2</span>
      <span>Partner 3</span>
    </section>

    <section class="cta-final">
      <h2 style="margin-bottom: 2rem;">Ready to make the most of the European market?</h2>
      <a href="#" class="btn-demo">Request a demo</a>
    </section>

    <section class="newsletter">
      <h2>Contact Us</h2>
      <form>
        <label for="email">EMAIL</label>
        <input type="email" id="email" placeholder="you@example.com" />
        <button type="submit" class="btn-primary">Subscribe</button>
      </form>
    </section>

    <footer class="site-footer">
      <div class="footer-links">
        <div>
          <h3>Company</h3>
          <ul><li><a href="#">About</a></li><li><a href="#">Clients</a></li></ul>
        </div>
        <div>
          <h3>Technology</h3>
          <ul><li><a href="#">Product Cloud</a></li><li><a href="#">Developer Center</a></li><li><a href="#">Exchange</a></li></ul>
        </div>
        <div>
          <h3>Connect</h3>
          <ul><li><a href="#">Contact</a></li><li><a href="#">LinkedIn</a></li></ul>
        </div>
      </div>
      <div class="footer-meta">
        <ul>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Trust Center</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul>
        <p>© 2025 Micelio Inc.</p>
      </div>
    </footer>

  </body>
</template>

<style scoped>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: sans-serif;
        line-height: 1.6;
        color: #222;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      header {
        background: #fff;
        border-bottom: 1px solid #eee;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 10;
      }

      .nav-primary ul {
        list-style: none;
        display: flex;
        gap: 1.5rem;
      }

      .btn-demo,
      .btn-primary {
        background-color: #000;
        color: #fff;
        padding: 0.6rem 1.2rem;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
      }

      section {
        padding: 4rem 2rem;
        max-width: 1200px;
        margin: auto;
      }

      .hero {
        text-align: center;
        padding: 6rem 2rem;
        background: #f7f7f7;
      }

      .hero h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      .features,
      .cases,
      .use-cases {
        display: grid;
        gap: 2rem;
      }

      .features {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }

      .feature {
        background: #fafafa;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      }

      .cases {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }

      .case-item {
        background: #fff;
        padding: 1.5rem;
        border: 1px solid #eee;
        border-radius: 6px;
      }

      .use-cases h2 {
        margin-bottom: 0.5rem;
      }

      .use-cases ul {
        list-style: disc inside;
        margin-bottom: 2rem;
      }

      .partner-logos {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
      }

      .partner-logos span {
        background: #eee;
        padding: 1rem 2rem;
        border-radius: 6px;
        min-width: 100px;
        text-align: center;
      }

      .cta-final {
        text-align: center;
        background: #f0f0f0;
        padding: 3rem 2rem;
      }

      .newsletter form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 400px;
        margin: auto;
      }

      .newsletter input[type="email"] {
        padding: 0.6rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      .site-footer {
        background: #111;
        color: #fff;
        padding: 3rem 2rem;
      }

      .footer-links {
        display: flex;
        gap: 3rem;
        flex-wrap: wrap;
      }

      .footer-links h3 {
        margin-bottom: 0.5rem;  
      }

      .footer-links ul {
        list-style: none;
      }

      .footer-links a {
        color: #ccc;
      }

      .footer-meta {
        margin-top: 2rem;
        font-size: 0.9rem;
        color: #aaa;
        text-align: center;
      }

      .footer-meta ul {
        display: flex;
        gap: 1rem;
        justify-content: center;
        list-style: none;
        padding: 0;
      }
</style>