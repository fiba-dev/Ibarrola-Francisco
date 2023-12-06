// @ts-nocheck
// @ts-ignore
// @jsxImportSource @emotion/react
// @jsxImportSource @emotion/react
// @ts-ignore
// @ts-nocheck
// @jsxImportSource @emotion/react
"use client";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../es/Proyectos/index.css";
import { TypedReactHooksDemo } from "../../ui/typedJs";
import { CardProyects } from "../../ui/cards-proyects";
import { obtenerProyectos, obtenerProyectosEnglish } from "../../../apiURL";

function Proyects() {
	let [data, setData] = useState([]);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			let proyects = await obtenerProyectosEnglish();
			setData(proyects);
		};

		// call the function
		fetchData()
			// make sulre to catch any error
			.catch(console.error);
	}, []);

	return (
		<div className="containerProyectos" id="proyects">
			<div className="home__name__div">
				{data.map((r, index) => (
					<CardProyects
						title={r.title}
						pictureURL={r.pictureURL}
						info={r.info}
						GitHub={r.GitHub}
						webPage={r.webPage}
						id={r.key}
						key={index}
					></CardProyects>
				))}
			</div>
		</div>
	);
}

export { Proyects };
