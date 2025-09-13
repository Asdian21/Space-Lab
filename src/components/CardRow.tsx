import { Component } from "react";
import { motion } from "framer-motion";
import {
	CardRowWrapper,
	CardText,
	CardImage,
} from "../pages/ModelingPage/ModelingPage.style";

type CardRowProps = {
	title: string;
	text: string;
	image: string;
	reverse?: boolean;
};

export class CardRow extends Component<CardRowProps> {
	render() {
		const { title, text, image, reverse } = this.props;

		return (
			<CardRowWrapper
				as={motion.div}
				reverse={reverse}
				initial={{ opacity: 0, x: reverse ? 50 : -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<CardText>
					<h2>{title}</h2>
					<p>{text}</p>
				</CardText>
				<CardImage>
					<img src={image} alt={title} />
				</CardImage>
			</CardRowWrapper>
		);
	}
}
