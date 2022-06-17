import React, { useState } from 'react';

import { AlertContainer } from './AlertStyle';

const Alert = ({ text, type }) => {
	const [show, setShow] = useState(true);

	setTimeout(() => {
		setShow(false);
	}, 5000);

	return (
		<AlertContainer
			type={type}
			style={{
				display: show ? 'block' : 'none',
			}}
		>
			<div>{text}</div>
		</AlertContainer>
	);
};

export default Alert;
