// @ts-nocheck
// @ts-ignore
// @jsxImportSource @emotion/react
// @jsxImportSource @emotion/react
// @ts-ignore
// @ts-nocheck
// @jsxImportSource @emotion/react
// @use-client
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { TypedReactHooksDemo } from "../src/app/components/ui/typedJs";
import { Particulas } from "../src/app/components/ui/particles";
import { Contact } from "../src/app/components/en/Contact";
import { Proyects } from "../src/app/components/en/Proyectos";
import { AboutMeEn } from "../src/app/components/en/AboutMe";
import { SelectLenguageDesktop } from "../src/app/components/selectLenguage";
import {
	MenuDesktopEn,
	MenuMobilEn,
} from "../src/app/components/en/framer-motion";
const HomePageEn: React.FC = () => {
	return (
		<>
			<MenuDesktopEn></MenuDesktopEn>
			<MenuMobilEn></MenuMobilEn>
			<Particulas />

			<div className="main" id="main">
				<div className="containerMain">
					<SelectLenguageDesktop></SelectLenguageDesktop>
					<Analytics />
					<div className="homeNameDiv">
						<h1 className="titulo">¡Hello World!</h1>
						<div className="typed">
							<TypedReactHooksDemo velocidad={30} clase={"letra"} loop={false}>
								{`I'm Fran`}
							</TypedReactHooksDemo>

							<TypedReactHooksDemo
								velocidad={20}
								comenzar={2000}
								clase={"letra2"}
								loop={true}
							>
								React.js Css Html Typescript Firebase Vercel Postman Scrum
								Github
							</TypedReactHooksDemo>
						</div>
					</div>

					<AboutMeEn id="aboutme"></AboutMeEn>
				</div>

				<Proyects></Proyects>
				<Contact></Contact>
			</div>
		</>
	);
};

export default HomePageEn;
