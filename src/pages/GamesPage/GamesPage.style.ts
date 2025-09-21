import styled, { css } from "styled-components";

export const StyleGamesPage = styled.div`
	padding: 2rem;
	background: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.text};
	min-height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	text-align: center;
	color: ${({ theme }) => theme.accent};
	margin-bottom: 3rem;
	font-weight: 700;
`;

export const PathWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;
	width: 100%;
	max-width: 600px;
`;

export const LevelNode = styled.button<{ side: "left" | "right" }>`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	border: none;
	background: #4caf50;
	color: #fff;
	font-size: 1.4rem;
	font-weight: bold;
	cursor: pointer;
	box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
	transition: transform 0.3s, background 0.3s;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		transform: scale(1.15) rotate(-2deg);
		background: #43a047;
	}

	${({ side }) =>
		side === "left"
			? css`
					margin-left: 2rem;
			  `
			: css`
					margin-right: 2rem;
			  `}
`;

export const Connector = styled.div<{ side: "left" | "right" }>`
	position: absolute;
	width: 2px;
	height: 4rem;
	background: #4caf50;
	left: 50%;
	transform: translateX(-50%);

	${({ side }) =>
		side === "left"
			? css`
					left: calc(100% + 35px);
			  `
			: css`
					right: calc(100% + 35px);
			  `}
`;

export const NavButtons = styled.div`
	display: flex;
	justify-content: center;
	gap: 1.5rem;
	margin-top: 4rem;
`;

export const NavButton = styled.button<{ color: string }>`
	padding: 0.8rem 1.5rem;
	border: none;
	border-radius: 12px;
	background: ${({ color }) => color};
	color: #fff;
	font-size: 1rem;
	cursor: pointer;
	transition: transform 0.3s;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

	&:hover {
		transform: scale(1.05);
	}
`;

export const ScrollTopButton = styled.button`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: none;
	background: ${({ theme }) => theme.accent};
	color: #fff;
	font-size: 1.2rem;
	cursor: pointer;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

	&:hover {
		transform: scale(1.1);
	}
`;
