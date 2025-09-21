import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
	StyleTheoryPage,
	Section,
	SectionTitle,
	CardGrid,
	Card,
	NavButtons,
	NavButton,
	ScrollTopButton,
} from "./TheoryPage.style";

const sectionsData = [
	{
		title: "Астрономия",
		items: Array.from({ length: 8 }).map((_, i) => ({
			title: `Курс ${i + 1}`,
			description:
				"Изучи основы астрономии с помощью простых уроков и практики.",
			image: "src/assets/theory/astronomy.webp",
		})),
	},
	{
		title: "Научные статьи",
		items: Array.from({ length: 8 }).map((_, i) => ({
			title: `Статья ${i + 1}`,
			description:
				"Последние открытия в космосе и инженерии в доступной форме.",
			image: "src/assets/theory/articles.webp",
		})),
	},
	{
		title: "Инструкции и конструкторы",
		items: Array.from({ length: 6 }).map((_, i) => ({
			title: `Гайд ${i + 1}`,
			description: "Пошаговые инструкции по сборке моделей и схем.",
			image: "src/assets/theory/guides.webp",
		})),
	},
];

export const TheoryPage = () => {
	const navigate = useNavigate();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<StyleTheoryPage>
			<motion.div
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h1>Курсы от KHAYOTT</h1>
				<p className="intro">
					<strong>Описание нашего проекта:</strong> KHAYOTT — это
					образовательная онлайн-платформа для школьников и молодёжи,
					интересующихся космосом и технологиями. Проект объединяет три
					направления: игры, моделирование и знания. Здесь ты сможешь учиться,
					экспериментировать и развивать инженерные навыки будущего.
				</p>
			</motion.div>

			{sectionsData.map((section, idx) => (
				<Section key={idx}>
					<SectionTitle>{section.title}</SectionTitle>
					<CardGrid>
						{section.items.map((item, i) => (
							<Card
								key={i}
								as={motion.div}
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
							>
								<img src={item.image} alt={item.title} />
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</Card>
						))}
					</CardGrid>
				</Section>
			))}

			{/* Центрированные кнопки */}
			<NavButtons>
				<NavButton
					color="#87CEFA"
					onClick={() => {
						navigate("/modeling");
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					Мастерская
				</NavButton>
				<NavButton
					color="#BA55D3"
					onClick={() => {
						navigate("/");
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					Главный экран
				</NavButton>
				<NavButton
					color="#32CD32"
					onClick={() => {
						navigate("/games");
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					Игры
				</NavButton>
			</NavButtons>

			{/* Кнопка вверх */}
			<ScrollTopButton onClick={scrollToTop}>↑</ScrollTopButton>
		</StyleTheoryPage>
	);
};
