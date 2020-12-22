import React from 'react'
import '../css/index.css'
export default function Footer() {
	return (
		<div className="footer">
			<div class="footer_icons"></div>

			<br /><br /><br /><br />
			<p></p>
			<a href="https://twitter.com/dil_se__" target="_blank" >
				<i class="fa fa-twitter fa-inverse" style={{ fontSize: "30px", color: "white", cursor: "pointer", marginRight: "50px" }} />
			</a>

			<a href="https://www.instagram.com/realprabhatkashyap/" target="_blank" >
				<i class="fa fa-instagram" style={{ fontSize: "30px", color: "white", cursor: "pointer", marginRight: "50px" }} />
			</a>

			<a href="https://github.com/prabhatkashyap902" target="_blank" >
				<i class="fa fa-github" style={{ fontSize: "30px", color: "white", cursor: "pointer" }} />
			</a>


			<hr style={{ width: "50%" }}></hr>
			<p style={{ color: "white" }}>©2020 Prabhat Kumar</p>


		</div>
	)
}
