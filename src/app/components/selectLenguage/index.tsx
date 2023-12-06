import { UsaFlag, SpainFlag } from "../ui/buttons";
import React from "react";
import "./index.css";
import { useRouter } from "next/router";
export function SelectLenguageDesktop(props: any) {
	const router = useRouter();
	return (
		<div onClick={props.onClick} className="container_lenguage_desktop">
			<button
				className="lenguage"
				onClick={() => {
					router.push("/en");
				}}
			>
				EN
			</button>
			<button
				className="lenguage"
				onClick={() => {
					router.push("/");
				}}
			>
				ES
			</button>
		</div>
	);
}
export function SelectLenguageMobile(props: any) {
	return (
		<div onClick={props.onClick} className="container_lenguage_mobile">
			<a className="lenguage" href="/en">
				EN
			</a>
			<a className="lenguage" href="/">
				ES
			</a>
		</div>
	);
}
