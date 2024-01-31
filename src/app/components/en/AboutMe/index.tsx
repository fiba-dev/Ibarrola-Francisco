/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TypedReactHooksDemo } from "../../ui/typedJs";
import "../../es/AboutMe/index.css";
function AboutMeEn(props: any) {
	return (
		<div className="container" id={props.id}>
			<div className="containerColumn">
				<div className="column">
					<p>
						I'm Web Developer with more than 2 years of experience in
						Javascript. Working with agile methodologies (SCRUM) with
						multidisciplinary teams, automating tasks, actively participating in
						the definition of models and new features according to customer
						needs, using React.js, Node.js, sequelize, Postgress and libraries
						like Bootstrap, excel.js, pdfkit, bull (cronjobs), moment.js etc..
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
