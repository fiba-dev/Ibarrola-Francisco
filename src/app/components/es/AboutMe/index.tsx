import React from "react";

import "./index.css";

import { Particulas } from "../../ui/particles";

function AboutMe(props: any) {
	return (
		<div className="container" id={props.id}>
			<div className="containerColumn">
				<div className="column">
					<p>
						{" "}
						Soy Desarrollador web con más de 2 años de experiencia en
						Javascript. Trabajando con metodologías ágiles (SCRUM) con equipos
						multidisciplinares, automatizando tareas, participando activamente
						en la definición de modelos y nuevas funcionalidades según
						necesidades del cliente, utilizando React.js, Node.js, sequelize,
						Postgress y librerías como Bootstrap excel.js pdf.kit bull
						(cronjobs) moment.js etc.
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
