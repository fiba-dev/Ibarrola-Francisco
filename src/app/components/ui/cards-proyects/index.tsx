/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
function CardProyects(props: any) {
	return (
		<div className="containerCards">
			<div className="card">
				<div className="cardFront face">
					<img
						loading="lazy"
						onClick={props.handlerImage}
						src={props.pictureURL}
						className="imagenCard"
						alt={props.pictureURL}
					/>
				</div>

				<div className="cardBack face">
					<h1>{props.title}</h1>
					<p>{props.info}</p>

					<div className="linksContainer">
						<a href={props.webPage} target="_blank" className="informacion">
							Web-Page
						</a>

						<a className="informacion" target="_blank" href={props.GitHub}>
							Git-Hub
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export { CardProyects };
