import styled from "styled-components";

export const StyleTheoryPage = styled.div`
	padding: 3rem 2rem;
	background: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.text};
	min-height: 100vh;

	h1 {
		text-align: center;
		font-size: 2.8rem;
		margin-bottom: 1.5rem;
		color: ${({ theme }) => theme.accent};
	}

	.intro {
		max-width: 900px;
		margin: 0 auto 3rem;
		font-size: 1.2rem;
		line-height: 1.8;
		text-align: justify;
		padding: 1rem 1.5rem;
		border-left: 5px solid ${({ theme }) => theme.accent};
		border-radius: 0.5rem;
		background: ${({ theme }) => theme.card};
	}
`;

export const Section = styled.section`
	margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
	font-size: 2rem;
	margin-bottom: 2rem;
	text-align: center;
	color: ${({ theme }) => theme.accent};
`;

export const CardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 1.5rem;
`;

export const Card = styled.div`
	background: ${({ theme }) => theme.card};
	border-radius: 1rem;
	padding: 1rem;
	text-align: center;
	box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	cursor: pointer;

	&:hover {
		transform: translateY(-7px);
		box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
	}

	img {
		width: 100%;
		max-height: 140px;
		object-fit: cover;
		border-radius: 0.8rem;
		margin-bottom: 1rem;
	}

	h3 {
		font-size: 1.2rem;
		color: ${({ theme }) => theme.accent};
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 0.95rem;
		line-height: 1.5;
		color: ${({ theme }) => theme.cardText};
	}
`;

export const NavButtons = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin: 3rem 0;
`;

export const NavButton = styled.button<{ color: string }>`
	background: ${({ color }) => color};
	border: none;
	border-radius: 1rem;
	padding: 1rem 2rem;
	font-size: 1.2rem;
	color: #fff;
	font-weight: bold;
	cursor: pointer;
	transition: transform 0.3s ease, box-shadow 0.3s ease;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
	}
`;

export const ScrollTopButton = styled.button`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	background: ${({ theme }) => theme.accent};
	color: #fff;
	border: none;
	border-radius: 50%;
	width: 55px;
	height: 55px;
	font-size: 1.5rem;
	cursor: pointer;
	box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.1);
	}
`;
