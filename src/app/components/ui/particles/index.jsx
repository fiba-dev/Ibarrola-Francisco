import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
//import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
//import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const Particulas = (props) => {
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};

	return (
		{ init } && (
			<Particles
				id="tsparticles"
				particlesLoaded={particlesLoaded}
				options={{
					background: {
						color: {
							value: "transparent",
						},
					},
					emitters: {
						position: {
							x: 50,
							y: 100,
						},
						rate: {
							quantity: 5,
							delay: 0.15,
						},
					},
					fpsLimit: 60,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: false,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: ["#ffffff", "rgb(0, 53, 54)"],
						},
						links: {
							color: "#ffffff",
							distance: 150,
							enable: false,
							opacity: 0.5,
							width: 1,
						},
						move: {
							direction: "left",
							enable: true,
							outModes: {
								default: "out",
								position: {
									x: 500,
								},
							},
							random: false,
							speed: 0.5,
							straight: true,
						},
						number: {
							// density: {
							// 	enable: true,
							// 	area: 800,
							// },
							value: 200,
						},
						tilt: {
							direction: "random",
							enable: true,
							value: {
								min: 0,
								max: 360,
							},
							animation: {
								enable: true,
								speed: 30,
							},
						},
						opacity: {
							value: { min: 0.1, max: 0.8 },
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 2 },
						},
					},
					detectRetina: true,
				}}
			/>
		)
	);
};
