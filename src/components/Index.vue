<template>
	<section class="main" transition="main" v-cloak>
		<div class="hidden">
			<h1>Brandon Moore's Portfolio</h1>
			<h2>I am a web developer from upstate New York. Check out my stuff.</h2>
		</div>
		<div id="particles" class="top">
			<img class="logo-img" alt="Brandon Moore logo" height="75px" src="https://res.cloudinary.com/thatcube/image/upload/c_scale,h_150/v1515437182/logo_okvikf.png">
			<div class="topnav center-underline">
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</div>
			<div class="bannerText">
				<h1 class="title">brandon moore</h1><h2>web developer</h2>
			</div>
			<div class="learn">
			<a class="center-underline" href="#about">learn more about what I do<br><i class="fa fa-chevron-down"></i></a>
			</div>
		</div>
		<div id="about" class="about-background">
			<div class="about">
				<span>Bio</span>
				<div class="respond">
				<div class="img-respond">
					<img alt="Picture of Brandon Moore" src="https://res.cloudinary.com/thatcube/image/upload/v1513984172/me_500.jpg">
				</div>
				<p class="child">I'm a web developer from Upstate New York. I'm fresh out of college and currently looking for job or a spring internship. Feel free to check out my <a href="https://github.com/thatcube" target="_blank">Github</a>, <a href="https://linkedin.com/in/bmoore46" target="_blank">LinkedIn</a>, or <a href="/Resume.pdf" target="_blank">resume</a>.<br><br>
				When I'm not doing development work, I also enjoy running, playing soccer, and keeping up with the latest in technology.</p>
				</div>
			</div>
		</div>
		<div class="project">
			<div class="projects">
				<span id="projects">Projects</span>
			</div>
			<div class="container">
				<div class="card" v-for="project in filterItems | filterBy filterKey">
					<div v-show="filterItems.length" :class="'card-img'+ project.id + ' card-img'">
						<img :src="project.image" :alt="project.title">
					</div>
					<div class="card-bottom">
						<div class="card-bottom-header">{{ project.title }}</div><br>
						<div v-html="project.desc">{{ project.desc }}</div><br><br>
						<a v-if="project.github" class="github" target="_blank" href="{{ project.github }}"><button><i class="fab fa-github"></i>  GitHub</button></a>
						<a v-if="project.url" class="livedemo" target="_blank" href="{{ project.url }}"><button><i class="fas fa-external-link-alt"></i>  Demo</button></a>
					</div>
				</div>
			</div>
		</div>
		<div id="contact" class="contact">
			<span>Get in Touch</span>
			<div class="contactsection">
				<div class="form">
					<form method="POST" action="https://formspree.io/brandon-moore@live.com">
						<label for="name">Name</label>
						<input type="text" required name="name" placeholder="Jon Snow">
						<label for="email">Email</label>				
						<input required type="email" name="email" placeholder="example@email.com">
						<label for="message">Message</label>
						<textarea id="message" required name="message" placeholder="Type your message here..."></textarea>
						<div class="button-center"><button class="send-btn" type="submit">Send Message</button></div>
					</form>
				</div>
				<div class="contactinfo">
					<div class="email"><a href="mailto:hello@brandonmoore.co"><i class="far fa-envelope"></i> hello@brandonmoore.co</a></div>
					<div class="icons">
						<a href="https://github.com/thatcube/" target="_blank"><s>GitHub</s><br><i class="fab fa-github"></i></a>
						<a href="https://linkedin.com/in/bmoore46/" target="_blank"><s>LinkedIn</s><br><i class="fab fa-linkedin"></i></a>
						<a class="tooltip" id="resume" target="_blank" href="/Resume.pdf"><s>Resume</s><br><i class="far fa-file-alt"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
let filterKey
import imagesData from '../data/projects.json'
export default {
	data() {
		return {
			filterKey : '',
			projects: imagesData,
		}
	},
	computed: {
		filterItems: function () {
			return this.$eval('projects | filterBy filterKey')
		}
	}
}
</script>