// src/pages/MainPage/MainPage.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
	MainPageStyle,
	Hero,
	CardsGrid,
	Card,
	SectionsDescription,
	DevGrid,
	DevCard,
	TeamDescription,
	ThemeButton,
	SectionTitle,
} from "./MainPage.style";

interface MainPageProps {
	toggleTheme: () => void;
	theme: "light" | "dark"; // только эти варианты
}

export const MainPage = ({ toggleTheme, theme }: MainPageProps) => {
	const navigate = useNavigate();

	return (
		<MainPageStyle>
			<ThemeButton onClick={toggleTheme}>
				{theme === "dark" ? "☀️" : "🌙"}
			</ThemeButton>
			{/* Hero-зона */}
			<Hero
				as={motion.section}
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<div className="left">
					<div className="description">
						<p>
							Добро пожаловать в KhayotT — инновационную платформу, где теория
							встречается с практикой, а знания оживают в играх и моделях. Мы
							создаем пространство для всех, кто хочет не просто учиться, а
							понимать мир глубже: от школьников и студентов до профессионалов и
							энтузиастов. Здесь вы найдете фундаментальные концепции,
							инструменты для симуляции реальности и интерактивные приключения,
							которые превращают сложные идеи в захватывающий опыт.
							Присоединяйтесь, экспериментируйте и открывайте новые горизонты —
							потому что настоящее обучение начинается, когда вы играете с
							идеями!
						</p>
					</div>
				</div>

				<div className="right">
					<div className="logo">
						<div className="triangle"></div>
						<h1>KhayotT</h1>
					</div>
				</div>
			</Hero>

			{/* Карточки */}
			<CardsGrid>
				<Card onClick={() => navigate("/theory")}>
					<img
						src="https://static.vecteezy.com/system/resources/thumbnails/003/549/556/small_2x/space-galaxy-background-free-vector.jpg"
						alt="Теория"
					/>
					<h3>Теория</h3>
					<p>Фундамент знаний о Вселенной...</p>
				</Card>

				<Card onClick={() => navigate("/modeling")}>
					<img
						src="https://images.squarespace-cdn.com/content/v1/61c90cc82cac1e10a9f42dd7/1640568346579-6YPNGURQILFWSZOG8LTD/TMA-04.jpg"
						alt="Моделирование"
					/>
					<h3>Моделирование</h3>
					<p>Визуализация космических процессов...</p>
				</Card>

				<Card onClick={() => navigate("/games")}>
					<img
						src="https://media.istockphoto.com/id/1370914934/vector/multicolored-nebula.jpg?s=612x612&w=0&k=20&c=5NATUqknQr_xkWJDgpQOc-3GQqcA6fWHggc-9ifk8H8="
						alt="Игры"
					/>
					<h3>Игры</h3>
					<p>Интерактивные задания для обучения...</p>
				</Card>
			</CardsGrid>

			{/* Подробное описание разделов */}
			<SectionsDescription
				as={motion.section}
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<h2>О разделах</h2>

				<div className="section">
					<span className="icon">📚</span>
					<p>
						<strong>Курсы</strong> — основа инженерии и робототехники. Мы просто
						рассказываем: как работают механизмы движения, электроника в схемах,
						управление роботами и базовые алгоритмы. С картинками и тестами. Вы
						научитесь собирать и программировать простые роботы.
					</p>
				</div>

				<div className="section">
					<span className="icon">🛰️</span>
					<p>
						<strong>Конструктор</strong> — проверяй идеи на компьютере без
						риска. Строй виртуальные роботы: симулируй движение, датчики и
						схемы. Шаблоны и уроки помогут протестировать, как робот берёт
						предметы или едет по пути. Увидишь ошибки заранее и улучшишь дизайн.
						Идеально для инженеров, кто любит планировать!
					</p>
				</div>

				<div className="section">
					<span className="icon">🎮</span>
					<p>
						<strong>Игры</strong> — соревнуйся и строй роботов в команде!
						Программируй на вызовы: роботы дерутся, бегают по лабиринтам или
						решают задачи. От простых матчей для новичков до турниров для профи.
						Учись на поражениях, празднуй победы и развивай креатив. Весело, как
						в реальном проекте!
					</p>
				</div>
			</SectionsDescription>

			{/* Разработчики */}
			<section>
				<SectionTitle>Наша команда</SectionTitle>
				<DevGrid>
					{[
						{ name: "Нурсултан", role: "Frontend Developer" },
						{ name: "Феруза", role: "UI/UX Designer" },
						{ name: "Хаёт", role: "Backend Developer" },
						{ name: "Саид", role: "Project Manager" },
						{ name: "Ахмад", role: "Data Scientist" },
						{ name: "Шухрат", role: "QA Engineer" },
					].map((dev, i) => (
						<DevCard
							key={i}
							as={motion.div}
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: i * 0.1 }}
							viewport={{ once: true }}
						>
							<img
								src={`https://i.pravatar.cc/150?img=${i + 1}`}
								alt={dev.name}
							/>
							<div className="info">
								<h4>{dev.name}</h4>
								<p>{dev.role}</p>
							</div>
						</DevCard>
					))}
				</DevGrid>
			</section>

			{/* Описание команды */}
			<TeamDescription
				as={motion.section}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<p>
					Хотя мы молодая команда, наша инициативность и междисциплинарный
					подход позволяют нам решить сложную задачу. Мы участвуем в конкурсе
					NASA Space Apps Challenge, чтобы внести свой вклад в будущее космоса,
					используя открытые данные и креативные идеи. <br />
					<span className="stars">Вперёд, к звёздам!</span>
				</p>
			</TeamDescription>
		</MainPageStyle>
	);
};
