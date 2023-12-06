import React from "react";
import { TypedReactHooksDemo } from "../../ui/typedJs";
import "../../es/AboutMe/index.css";
function AboutMeEn(props: any) {
	return (
		<div className="container" id={props.id}>
			<div className="containerColumn">
				<div className="column">
					<p>
						{"I'm Web Developer in tecnologies like"}
						<b> JAVASCRIPT, React.js, Node.js, HTML, CSS</b>. With knowledge in
						Firebase, Express, Next.js, Vercel, Heroku, Postgress, Dropbox,
						Airtable, Cloudinary, Contenful, Mapbox, Algolia,
						<b> Excel.js, PdfKit, Moment.js</b>. Documentation using
						<b> Postman</b>. Version control in
						<b> Github, GitLab</b> and working whit agile methodologies{" "}
						<b>(SCRUM)</b>
					</p>
				</div>
				<a
					className="cvlink"
					href="https://drive.google.com/uc?export=download&id=1XF7igf8YJhlMDPCrNVrB1v4hZescssNU"
				>
					Resumé
				</a>{" "}
			</div>
		</div>
	);
}

export { AboutMeEn };
