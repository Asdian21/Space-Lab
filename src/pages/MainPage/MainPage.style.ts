import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.5s, color 0.5s;
  }
`;

export const MainPageStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4rem;
	padding: 2rem;
`;

export const ThemeButton = styled.button`
	position: absolute;
	top: 1rem;
	right: 1rem;
	background: ${({ theme }) => theme.accent};
	color: #fff;
	border: none;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	font-size: 1.3rem;
	cursor: pointer;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	transition: transform 0.3s;
	&:hover {
		transform: rotate(15deg) scale(1.1);
	}
`;

/* Hero-зона */
export const Hero = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;

	.left {
		flex: 1;

		.description {
			padding: 1.5rem;
			//border: 2px solid ${({ theme }) => theme.accent};
			border-radius: 1rem;
			background: ${({ theme }) => theme.backgroundAlt};
			font-size: 1.2rem;
			line-height: 1.8rem;
			text-align: justify;
			text-indent: 2em; /* красная строка */
		}
	}

	.right {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;

		.logo {
			text-align: center;

			.triangle {
				width: 0;
				height: 0;
				margin: 0 auto 1rem;
				border-left: 40px solid transparent;
				border-right: 40px solid transparent;
				border-bottom: 70px solid ${({ theme }) => theme.accent};
			}

			h1 {
				font-size: 2.5rem;
				font-weight: bold;
			}
		}
	}
`;

/* Карточки */
export const CardsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 2rem;
`;

export const Card = styled.div`
	background: ${({ theme }) => theme.card};
	border-radius: 1rem;
	overflow: hidden;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
	transition: transform 0.3s ease, box-shadow 0.3s ease;

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	h3 {
		margin: 1rem;
		color: ${({ theme }) => theme.accent};
	}

	p {
		margin: 0 1rem 1rem;
		color: ${({ theme }) => theme.cardText};
	}

	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 0 20px ${({ theme }) => theme.accent};
	}
`;

export const SectionsDescription = styled.section`
	margin: 2rem auto;
	max-width: 1500px;
	padding: 3rem;
	border-radius: 1.5rem;
	background: ${({ theme }) => theme.card};
	//box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
	//border: 2px solid ${({ theme }) => theme.accent};

	h2 {
		text-align: center;
		margin-bottom: 3rem;
		font-size: 2.5rem;
		color: ${({ theme }) => theme.accent};
	}

	.section {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		margin-bottom: 2.5rem;

		.icon {
			font-size: 2.5rem;
			flex-shrink: 0;
		}

		p {
			font-size: 1.3rem;
			line-height: 2.1;
			margin: 0;
			color: ${({ theme }) => theme.cardText};
		}

		strong {
			color: ${({ theme }) => theme.accent};
		}
	}

	@media (max-width: 768px) {
		.section {
			flex-direction: column;
			text-align: center;

			.icon {
				margin-bottom: 0.5rem;
			}
		}
	}
`;

export const DevGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 1.5rem;
	max-width: 1000px;
	margin: 0 auto;
`;

export const DevCard = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	background: ${({ theme }) => theme.card};
	border-radius: 1rem;
	padding: 1rem 1.5rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	transition: transform 0.3s, box-shadow 0.3s;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 0 15px ${({ theme }) => theme.accent};
	}

	img {
		width: 70px;
		height: 70px;
		border-radius: 50%;
		object-fit: cover;
		flex-shrink: 0;
	}

	.info {
		display: flex;
		flex-direction: column;
	}

	h4 {
		margin: 0;
		color: ${({ theme }) => theme.accent};
		font-size: 1.1rem;
	}

	p {
		margin: 0.2rem 0 0;
		color: ${({ theme }) => theme.cardText};
		font-size: 0.9rem;
	}

	@media (max-width: 500px) {
		flex-direction: column;
		text-align: center;

		img {
			margin-bottom: 0.5rem;
		}
	}
`;

export const SectionTitle = styled.h2`
	text-align: center;
	font-size: 2rem;
	font-weight: 700;
	margin-bottom: 2rem;
	position: relative;
	color: ${({ theme }) => theme.text};
`;

/* Описание команды */
export const TeamDescription = styled.section`
	text-align: center;
	font-size: 1.2rem;
	line-height: 1.8rem;
	max-width: 900px;
	margin: 0 auto;
	text-indent: 2em; /* красная строка */

	.stars {
		display: inline-block;
		font-weight: bold;
		color: ${({ theme }) => theme.accent};
		animation: twinkle 1.5s infinite alternate;
	}

	@keyframes twinkle {
		from {
			opacity: 0.6;
		}
		to {
			opacity: 1;
		}
	}
`;
