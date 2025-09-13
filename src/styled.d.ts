// src/styled.d.ts
import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		mode: "light" | "dark";
		background: string;
		backgroundAlt: string;
		text: string;
		textSecondary: string;
		accent: string;
		card: string;
		cardText: string;
	}
}
