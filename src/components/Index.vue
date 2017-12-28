<template>
	<section class="main" transition="main" v-cloak>
		<div class="hidden">
			<h1>Brandon Moore's Portfolio</h1>
			<h2>I am a web developer from upstate New York. Check out my stuff.</h2>
		</div>
		<div id="particles" class="top">
			<div class="topnav box">
				<a href="#about">About Me</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</div>
			<div class="link">
				<h1 class="title">BRANDON MOORE</h1><h2>Web Developer</h2>
			</div>
		</div>
		<div id="about" class="about-background">
			<div class="about">
				<span>About Me</span>
				<div class="respond">
				<div class="img-respond">
					<img src="https://res.cloudinary.com/thatcube/image/upload/v1513984172/me_500.jpg">
				</div>
				<p class="child">I'm a web developer from Upstate New York. I've just recently finished all of my classes at Alfred State College. I started Web Development a few years ago and I'm glad I did. I have a passion for development that I never really knew I had prior to my education. I'm currently looking for job or a spring internship. Feel free to check out my <a href="https://github.com/thatcube" target="_blank">Github</a>, <a href="https://linkedin.com/in/bmoore46" target="_blank">LinkedIn</a>, or <a href="/Resume.pdf" target="_blank">resume</a>.<br><br>
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
						<a v-if="project.url" class="livedemo" target="_blank" href="{{ project.url }}"><button><i class="fas fa-external-link-alt"></i>  Live Demo</button></a>
					</div>
				</div>
			</div>
		</div>
		<div id="contact" class="contact">
			<div class="contactsection">
			<span>Contact Me</span>
			<div class="form">
			<form method="POST" action="https://formspree.io/brandon-moore@live.com">
				<label for="name">Name</label>
				<textarea type="text" required name="name" placeholder="Jon Snow"></textarea>
				<label for="email">Email</label>				
				<textarea required type="email" name="email" placeholder="example@email.com"></textarea>
				<label for="message">Message</label>
				<textarea id="message" required name="message" placeholder="Type your message here..."></textarea>
				<button class="send-btn" type="submit">Send Message</button>
			</form>
			</div>
			</div>
		</div>
		<div class="icons">
			<a href="https://github.com/thatcube/" target="_blank"><i class="fab fa-github"></i></a>
			<a href="https://linkedin.com/in/bmoore46/" target="_blank"><i class="fab fa-linkedin"></i></a>
			<a href="mailto:brandon-moore@live.com"><i class="far fa-envelope"></i></a>
			<a class="tooltip" id="resume" target="_blank" href="/Resume.pdf"><b>Resume</b><i class="far fa-file-alt"></i></a>
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