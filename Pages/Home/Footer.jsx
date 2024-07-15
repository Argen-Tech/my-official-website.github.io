import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact Info</h4>
          <ul>
            <li><a href="#">ArgenTech</a></li>
            <li><a href="#">argentorrse01@gmail.com</a></li>
            <li><a href="#">+251947792801</a></li>
            <li><a href="#">Kera, Addis Ababa </a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
            <a href="https://www.tiktok.com"><i class="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
    </div>
 </footer>
  );
}

export default Footer;
