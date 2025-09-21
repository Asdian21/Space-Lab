import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
	StyleGamesPage,
	Title,
	PathWrapper,
	LevelNode,
	Connector,
	NavButtons,
	NavButton,
	ScrollTopButton,
} from "./GamesPage.style";

export const GamesPage = () => {
	const navigate = useNavigate();
	const levels = Array.from({ length: 10 }, (_, i) => i + 1);

	return (
		<StyleGamesPage>
			<Title>Игры от KНАYOTT</Title>

			<PathWrapper>
				{levels.map((level, idx) => (
					<motion.div
						key={level}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: idx * 0.15 }}
						style={{
							display: "flex",
							justifyContent: idx % 2 === 0 ? "flex-start" : "flex-end",
							width: "100%",
						}}
					>
						<div style={{ position: "relative" }}>
							<LevelNode
								onClick={() => alert(`Уровень ${level}`)}
								side={idx % 2 === 0 ? "left" : "right"}
							>
								{level}
							</LevelNode>
							{/* Соединительная линия */}
							{idx < levels.length - 1 && (
								<Connector side={idx % 2 === 0 ? "left" : "right"} />
							)}
						</div>
					</motion.div>
				))}
			</PathWrapper>

			{/* Кнопки навигации */}
			<NavButtons>
				<NavButton
					color="#FFD700"
					onClick={() => {
						navigate("/theory");
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					Курсы
				</NavButton>
				<NavButton
					color="#9370DB"
					onClick={() => {
						navigate("/");
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					Главный экран
				</NavButton>
				<NavButton
					color="#87CEFA"
					onClick={() => {
						navigate("/modeling");
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					Мастерская
				</NavButton>
			</NavButtons>

			<ScrollTopButton
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			>
				⬆
			</ScrollTopButton>
		</StyleGamesPage>
	);
};
