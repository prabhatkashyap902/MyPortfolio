import React from 'react'
import '../css/index.css'

export default function About() {
	return (
		<div className="about">
			<h2 className="about_title">ABOUT ME</h2><br />
			<div className="about_row row">
				<div className="about_img_div col-md-6 col-sm-12">
					<img className="about_img" src="/images/pic.jpeg" alt="about_img" />
				</div>
				<div className="about_para_div col-md-6 col-sm-12">
					<p className="about_me_para">Hi! I graduated in 2019, and currently working in Vitt.ai as Software developer, My skill sets are FrontEnd(Reactjs) and Android(Java and Kotlin).
					I also do competitive Coding on codechef and codeforces and leetcode. I am a 3 star coder on codechef and specialist.
					I have done many projects like mande chatbot from scratch for Aditya Birla Wealth Management Company.

						</p>
					<br />
					<a className="about_resume_button" target="_blank" href="https://drive.google.com/file/d/1Twvl2uAw2ZzlKC0_Ko1J1ZJLPg8NmKv3/view?usp=sharing">
						Resume
					</a>
				</div>
				<p></p>
			</div>
		</div>
	)
}
