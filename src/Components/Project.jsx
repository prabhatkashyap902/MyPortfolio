import React from 'react'
import '../css/index.css'
import ProjectInfo from './ProjectInfo';

export default function Project() {
	return (
		<div className="project">
			<h1 className="project_title">Project</h1><br /><br />
			<ProjectInfo
				title="Confessionary"
				codeLink="https://github.com/prabhatkashyap902/ConfessionaryApp"
				liveLink="https://play.google.com/store/apps/details?id=com.prodev.io.confessionary&hl=en&gl=US"
				image="https://play-lh.googleusercontent.com/x5Ipc6T_uvmD8HWp199XrpcJ_7u78c2hEBt1LdVRlLrEGySpLemWwUBuky5n_Pl2a80=w3072-h1444-rw"
				info="Confessionary is an app with which you can confess anything with your college mates or batch mates.

				Confess it Anonymously, we don't tell anyone, you love simran!

				Welcome To Confessionary!
				There are few Steps with which you can confess anything from this app.
				--- Click on Your University on Home Page.
				--- Click on the college in which you are in.
				--- Click on + sign to add your own secrets!
				--- Confess on the blank sheet and Press Confess button!

				Great! Its done! Voila!!

				You can also view confessions of different colleges."/>
			<br />

			<ProjectInfo title="ChatBot"
				codeLink="https://github.com/prabhatkashyap902/ChatBotClone"
				liveLink="https://portal.vitt.ai/App"
				image="/Images/chatbotImage.PNG"
				info="This is chatbot made for our own Portal, as well as for many other Clients like
				Aditya Birla Wealth Management and IIFL. This has been made from Scratch. 
				I was the only one made this whole chatbot, i added functionality like chatbot with loading animation, you can 
				also search any mutual fund just by using @ and you can minimize as well as maximize to whole screen, this is also mobile
				responsive."
			/>
		</div>
	)
}
