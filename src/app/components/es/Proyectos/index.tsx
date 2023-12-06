// @ts-nocheck
// @ts-ignore
// @jsxImportSource @emotion/react
// @jsxImportSource @emotion/react
// @ts-ignore
// @ts-nocheck
// @jsxImportSource @emotion/react
import React, { useEffect, useState } from "react";
import "./index.css";
import { CardProyects } from "../../ui/cards-proyects";
import { obtenerProyectos } from "../../../apiURL";

function Proyectos() {
	let [data, setData] = useState([]);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			let proyects = await obtenerProyectos();
			setData(proyects);
		};

		// call the function
		fetchData()
			// make sulre to catch any error
			.catch(console.error);
	}, []);

	return (
		<div className="containerProyectos" id="proyectos">
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

export { Proyectos };
