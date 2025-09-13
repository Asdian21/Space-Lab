import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import { MainPage } from "./pages/MainPage/MainPage";
import { GlobalStyle } from "./pages/MainPage/MainPage.style";
import { TheoryPage } from "./pages/TheoryPage/TheoryPage";
import { ModelingPage } from "./pages/ModelingPage/ModelingPage";
import { GamesPage } from "./pages/GamesPage/GamesPage";

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
		{
			path: "/theory",
			element: <TheoryPage />,
		},
		{
			path: "/modeling",
			element: <ModelingPage />,
		},
		{
			path: "/games",
			element: <GamesPage />,
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
