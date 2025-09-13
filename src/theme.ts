// theme.ts
import { type DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
	mode: "light",
	background: "#f5f7fa",
	backgroundAlt: "#ffffff",
	text: "#222",
	textSecondary: "#444",
	accent: "#0077ff",
	card: "#fff",
	cardText: "#444",
};

export const darkTheme: DefaultTheme = {
	mode: "dark",
	background: "radial-gradient(circle at top, #0b0c10, #000)",
	backgroundAlt: "#111",
	text: "#fff",
	textSecondary: "#bbb",
	accent: "#61dafb",
	card: "#111",
	cardText: "#bbb",
};
