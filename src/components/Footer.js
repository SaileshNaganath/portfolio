import React from 'react';
import '../css-files/Footer.css';

function Footer(){
    return(
<div>
<footer class="footer">

  <section class="sm-box">
    <div class="sm-info">
      <span>Get connected with me on social networks:</span>
    </div>
    <div>
      <a href="" class="sm-icon">
        <i class="fab fa-github"></i>
      </a>
      <a href="" class="sm-icon">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="sm-icon">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="sm-icon">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="sm-icon">
        <i class="fab fa-twitter"></i>
      </a>
    </div>
  </section>

  
    <div class="footer-container">
      
        <div class="column1">
          <h6 class="name"style={{fontSize:"xx-large"}}>and one more thing...</h6>
          <p>
            This website was created out of curiosity to make myself inspired to become a full stack developer.
          </p>
        </div>
        
        <div class="column2">
          <h6 class="name">PROJECTS</h6>
          <hr class="columns" />
          <p>
            <a href="#!" class="link-text">React Projects</a>
          </p>
          <p>
            <a href="#!" class="link-text">JS Projects</a>
          </p>
          <p>
            <a href="#!" class="link-text">Backend Projects</a>
          </p>
          <p>
            <a href="#!" class="link-text">Client Projects</a>
          </p>
        </div>
       
        <div class="column3">
          <h6 class="name">CONTACT</h6>
          <p><i class="fas fa-envelope mr-3"></i> saileshnaganath@gmail.com</p>
          <p style={{fontSize:"small"}}>Please don't send spam emails :)</p>
        </div>
    </div>
 

  <div class="end-line">
   Coded by Sailesh Naganath.
  </div>
  
</footer>
</div>
 );
}

export default Footer;

