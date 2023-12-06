import React from "react";

import "./index.css";

function AboutMe(props: any) {
	return (
		<div className="container" id={props.id}>
			<div className="containerColumn">
				<div className="column">
					<p>
						{" "}
						Soy Desarrollador web en tecnologías como
						<b> JAVASCRIPT, React.js, Node.js, HTML, CSS</b>. Con conocimiento
						en Firebase, Express, Next.js, Vercel, Heroku, Postgress, Dropbox,
						Airtable, Cloudinary, Contenful, Mapbox, Algolia, Excel.js, PdfKit,
						Moment.js. Documentación usando Postman. Control de Versiones en
						Github, GitLab y trabajando con metodologías Agiles (SCRUM)
					</p>
				</div>
				<a
					className="cvlink"
					href="https://drive.google.com/uc?export=download&id=1xtU4JfywLBZbjl5KtRzPISEhHD3GrSHn"
				>
					CURRICULUM
				</a>{" "}
			</div>
		</div>
	);
}

export { AboutMe };
