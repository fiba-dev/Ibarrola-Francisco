// @ts-nocheck
// @ts-ignore
// @jsxImportSource @emotion/react
// @jsxImportSource @emotion/react
// @ts-ignore
// @ts-nocheck
// @jsxImportSource @emotion/react
"use client";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Particulas } from "../../ui/particles";
import { MenuDesktop, MenuMobil } from "../framer-motion";
import { Header } from "../header";

function Layout(props) {
	return (
		<div>
			<MenuMobil></MenuMobil>
			<MenuDesktop></MenuDesktop>
		</div>
	);
}

export { Layout };
