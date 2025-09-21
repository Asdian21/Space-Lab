import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
	ModelingWrapper,
	Hero,
	Description,
	CardsGrid,
	Card,
	Section,
	NavButtons,
	NavButton,
	ScrollTopButton,
} from "./ModelingPage.style";

import { CardRow } from "../../components/CardRow";

const cardsData = [
	{
		title: "3D-модели",
		text: "Создавай виртуальные 3D-модели ракет, спутников и космических аппаратов. Экспериментируй с конструкциями, проверяй идеи и визуализируй космос.",
		image: "src/assets/modeling_card_images/3D.webp",
	},
	{
		title: "Схемы",
		text: "Собирай схемы спутников, ракет и простых механизмов. Интерактивные блоки помогут понять устройство космических технологий.",
		image: "src/assets/modeling_card_images/sheme.webp",
		reverse: true,
	},
	{
		title: "Анимации",
		text: "Смотри, как оживают твои проекты. Анимации помогут лучше понять процессы, которые невозможно увидеть в реальности.",
		image: "src/assets/modeling_card_images/animation.webp",
	},
	{
		title: "Инструменты Autodesk",
		text: "Используй профессиональные инструменты моделирования, такие как Autodesk, для создания реалистичных проектов.",
		image: "src/assets/modeling_card_images/autodesk.webp",
		reverse: true,
	},
	{
		title: "Create & Build",
		text: "Делись своими проектами, собирай отзывы и создавай новые модели вместе с сообществом.",
		image: "src/assets/modeling_card_images/create_build.webp",
	},
];

export const ModelingPage = () => {
	const navigate = useNavigate();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<ModelingWrapper>
			{/* Hero-зона */}
			<Hero
				as={motion.section}
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<div className="hero-text">
					<h1>Моделирование</h1>
					<p>
						Добро пожаловать в мастерскую <strong>Space Lab</strong>! Здесь ты
						сможешь создавать виртуальные 3D-модели ракет, спутников и
						механизмов, экспериментировать с симуляциями и воплощать свои
						инженерные идеи в жизнь.
					</p>
				</div>
			</Hero>

			{/* Описание */}
			<Description>
				<p>
					Наши инструменты моделирования позволяют школьникам и студентам
					погрузиться в мир <strong>астрономии и инженерии</strong>. Создавай
					3D-модели, работай с анимациями и схемами, используй интерактивные
					лаборатории и делись результатами с командой.
				</p>
			</Description>

			{/* Карточки */}
			<CardsGrid>
				<Card
					as={motion.div}
					whileHover={{ scale: 1.05 }}
					onClick={() => navigate("/modeling/3d")}
				>
					<h2>🛰 3D-модели</h2>
					<p>
						Создавай и изучай космические объекты в трёхмерном пространстве.
					</p>
				</Card>

				<Card
					as={motion.div}
					whileHover={{ scale: 1.05 }}
					onClick={() => navigate("/modeling/schemes")}
				>
					<h2>📐 Схемы</h2>
					<p>Собирай схемы спутников, ракет и простых механизмов.</p>
				</Card>

				<Card
					as={motion.div}
					whileHover={{ scale: 1.05 }}
					onClick={() => navigate("/modeling/animations")}
				>
					<h2>🎞 Анимации</h2>
					<p>Визуализируй процессы и наблюдай физику в действии.</p>
				</Card>

				<Card
					as={motion.div}
					whileHover={{ scale: 1.05 }}
					onClick={() => navigate("/modeling/tools")}
				>
					<h2>🛠 Инструменты</h2>
					<p>Используй Autodesk и другие софты прямо в браузере.</p>
				</Card>

				<Card
					as={motion.div}
					whileHover={{ scale: 1.05 }}
					onClick={() => navigate("/modeling/projects")}
				>
					<h2>🚀 Проекты</h2>
					<p>Создавай свои собственные сборки и делись ими с друзьями.</p>
				</Card>
			</CardsGrid>

			<Section>
				{cardsData.map((card, index) => (
					<CardRow
						key={index}
						title={card.title}
						text={card.text}
						image={card.image}
						reverse={card.reverse}
					/>
				))}
			</Section>

			{/* Центрированные кнопки */}
			<NavButtons>
				<NavButton
					color="#c8e03f"
					onClick={() => {
						navigate("/theory");
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
		</ModelingWrapper>
	);
};
