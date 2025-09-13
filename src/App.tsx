import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import { MainPage } from "./pages/MainPage/MainPage";
import { GlobalStyle } from "./pages/MainPage/MainPage.style";

function App() {
	const [theme, setTheme] = useState<"light" | "dark">("dark");

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const routerConfig = createBrowserRouter([
		{
			path: "/",
			element: <MainPage toggleTheme={toggleTheme} theme={theme} />,
		},
	]);

	return (
		<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
			<GlobalStyle />
			<div className="App">
				<RouterProvider router={routerConfig} />
			</div>
		</ThemeProvider>
	);
}

export default App;
