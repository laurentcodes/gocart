import React from 'react';
import { FlexWrap } from './RiderScreenStyle';

const ListItem = ({ feedback }) => {
	return (
		<tr>
			<td style={{ width: '25%' }}>
				<FlexWrap>
					<p>{feedback.first_name}</p>
				</FlexWrap>
			</td>
			<td style={{ width: '25%' }}>
				<p>{feedback.last_name}</p>
			</td>
			<td style={{ width: '30%' }}>{feedback.email}</td>
			<td style={{ width: '20%' }}>{feedback.deliveries}</td>
		</tr>
	);
};

export default ListItem;
