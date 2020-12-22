import React from 'react'

export default function ProjectInfo(props) {
	return (
		<div className="row projectInfo">
			<div className="projectInfo_non_image col-md-6 col-sm-12">
				<h3 className="projectInfo_title">{props.title}</h3>
				<p className="projectInfo_para">{props.info}</p>
				<div className="">
					<a className="projectInfo_live_btn" href={props.liveLink} target="_blank">See Live</a>
					<a className="projectInfo_source_btn" href={props.codeLink} target="_blank">Source Code</a>
				</div>
			</div>
			<br /><br />
			<div className="col-md-6 col-sm-12">
				<img className="projectInfo_image" src={props.image} alt="project_img"></img>
			</div>
			<br /><br />
		</div>
	)
}
