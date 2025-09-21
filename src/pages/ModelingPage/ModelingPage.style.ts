import styled from "styled-components";

export const ModelingWrapper = styled.div`
	padding: 3rem 2rem;
	color: ${({ theme }) => theme.text};
	background: ${({ theme }) => theme.background};
	min-height: 100vh;

	h1 {
		text-align: center;
		margin-bottom: 2rem;
		color: ${({ theme }) => theme.accent};
		font-size: 2.8rem;
	}
`;

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4rem;
	margin-top: 4rem;
`;

export const CardRowWrapper = styled.div<{ reverse?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 3rem;
	flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

	@media (max-width: 900px) {
		flex-direction: column;
		text-align: center;
	}
`;

export const CardText = styled.div`
	flex: 1;
	padding: 2rem;
	border-radius: 1.2rem;
	/* background: ${({ theme }) => theme.card};
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25); */
	transition: transform 0.3s ease;

	&:hover {
		transform: translateY(-5px);
	}

	h2 {
		margin-bottom: 1rem;
		color: ${({ theme }) => theme.accent};
		font-size: 1.8rem;
	}

	p {
		line-height: 1.7;
		color: ${({ theme }) => theme.cardText};
		font-size: 1.1rem;
	}
`;

export const CardImage = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;

	img {
		width: 100%;
		max-width: 400px;
		border-radius: 1.2rem;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;

		&:hover {
			transform: scale(1.05);
		}
	}
`;

export const Hero = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 3rem;

	.hero-text {
		max-width: 850px;
		/* background: ${({ theme }) => theme.card}; */
		padding: 2.5rem;
		border-radius: 1.5rem;
		/* box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3); */
		animation: fadeIn 1s ease;

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: translateY(-20px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		color: ${({ theme }) => theme.accent};
	}

	p {
		font-size: 1.25rem;
		line-height: 1.7;
		color: ${({ theme }) => theme.text};
	}
`;

export const Description = styled.div`
	max-width: 950px;
	margin: 3rem auto;
	text-align: justify;
	font-size: 1.15rem;
	line-height: 1.8;
	padding: 1.5rem 2rem;
	border-left: 5px solid ${({ theme }) => theme.accent};
	border-radius: 0.5rem;
	/* background: ${({ theme }) => theme.card};
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); */
`;

export const CardsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
	margin-top: 3rem;
`;

export const Card = styled.div`
	background: ${({ theme }) => theme.card};
	padding: 2rem;
	border-radius: 1.2rem;
	cursor: pointer;
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
	transition: transform 0.3s ease, box-shadow 0.3s ease;

	&:hover {
		transform: translateY(-7px) scale(1.03);
		box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
	}

	h2 {
		margin-bottom: 0.8rem;
		color: ${({ theme }) => theme.accent};
		font-size: 1.4rem;
	}

	p {
		color: ${({ theme }) => theme.cardText};
		line-height: 1.6;
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
