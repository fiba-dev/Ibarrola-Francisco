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

import { TypedReactHooksDemo } from "../src/app/components/ui/typedJs/index";
import { Particulas } from "../src/app/components/ui/particles";
import { Contacto } from "../src/app/components/es/Contacto";
import { Proyectos } from "../src/app/components/es/Proyectos";
import { AboutMe } from "../src/app/components/es/AboutMe";
import { SelectLenguageDesktop } from "../src/app/components/selectLenguage";
import { MenuDesktop, MenuMobil } from "../src/app/components/es/framer-motion";
import { MenuToggle } from "../src/app/components/ui/buttons";
import { Analytics } from "@vercel/analytics/react";
import { Layout } from "../src/app/components/es/Layout/layout";
const HomePage: React.FC = () => {
	return (
		<>
			<MenuDesktop></MenuDesktop>
			<MenuMobil></MenuMobil>
			<Particulas />
			<div className="main" id="main">
				<Analytics />
				<div className="containerMain">
					<SelectLenguageDesktop></SelectLenguageDesktop>

					<div className="homeNameDiv">
						<h1 className="titulo">¡Hola Mundo!</h1>
						<div className="typed">
							<TypedReactHooksDemo velocidad={30} clase={"letra"} loop={false}>
								Soy Fran
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

					<AboutMe id="aboutme"></AboutMe>
				</div>

				<Proyectos></Proyectos>

				<Contacto></Contacto>
			</div>
		</>
	);
};

export default HomePage;
