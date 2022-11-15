import React from "react";
import '../css-files/Hero.css';
function Hero(){
    return (

<div class="hero-container">
			<img class="image" src="https://images.pexels.com/photos/6424589/pexels-photo-6424589.jpeg?auto=compress&cs=tinysrgb&w=600"  alt="Coding Image" loading="lazy"/>
		<div class="content">
			<h2 class="heading">Responsive Web App Creation Roadmap</h2>
			<div class="lead">
           <p> Become a full stack developer, by this roadmap which is practiced by myself. The languages and frameworks mainly used are HTML, CSS, JavaScript, React.js, Node.js, Express.js, Sql.</p>
			<br/>
            <p style={{fontSize:"x-large",fontWeight:"bold"}}>Download the roadmap and become a PRO!!!</p>
            </div>
			<div class="buttons">
            <button class="button1" href="#">Get it!</button>
		    <button class="button2" href="#">Donate</button>
			</div>
		</div>
	
</div>
    );
}

export default Hero;