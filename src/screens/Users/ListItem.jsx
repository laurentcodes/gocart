import React from 'react';
import { FlexWrap } from './UserScreenStyle';

import { formatISO } from '../../util/date';

const ListItem = ({ item }) => {
	return (
		<tr>
			<td style={{ width: '30%' }}>
				<FlexWrap>
					<p>{item.user_id}</p>
				</FlexWrap>
			</td>
			<td style={{ width: '30%' }}>
				<p>{item.username}</p>
			</td>
			<td style={{ width: '30%' }}>{formatISO(item.createdAt)}</td>
			<td style={{ width: '10%' }}>
				<button
					onClick={() => {
						console.log(item);
					}}
				>
					Action
				</button>
			</td>
		</tr>
	);
};

export default ListItem;
