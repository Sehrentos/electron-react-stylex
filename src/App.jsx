import React from "react";
import * as stylex from '@stylexjs/stylex';

// define styles
const styles = stylex.create({
	base: {
		fontSize: 16,
		lineHeight: 1.5,
		color: 'rgb(60,60,60)',
	},
	highlighted: {
		color: 'rebeccapurple',
	},
});

export default function App() {
	return (
		<div {...stylex.props(styles.base)}>
			<h1 {...stylex.props(styles.highlighted)}>App</h1>
		</div>
	)
}
