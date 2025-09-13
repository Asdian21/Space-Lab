import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import { MainPage } from "./pages/MainPage/MainPage";
import { GlobalStyle } from "./pages/MainPage/MainPage.style";
import { TheoryPage } from "./pages/TheoryPage/TheoryPage";
import { ModelingPage } from "./pages/ModelingPage/ModelingPage";
import { GamesPage } from "./pages/GamesPage/GamesPage";

function App() {
	const [theme, setTheme] = useState<"light" | "dark">("dark");

	// При первой загрузке проверяем localStorage
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, []);

	// Функция переключения
	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme); // сохраняем
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
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyle />
			<div className="App">
				<RouterProvider router={routerConfig} />
			</div>
		</ThemeProvider>
	);
}

export default App;
