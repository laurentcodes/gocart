import React from 'react';
import { FlexWrap } from './OrderScreenStyle';

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
				<p>{item.order_id}</p>
			</td>
			<td
				style={{
					width: '20%',
					color: `${
						item.status === 'SUCCESS'
							? '#339900'
								? item.status === 'FAILED'
								: '#cc3300'
							: '#ffcc00'
					}`,
				}}
			>
				{item.status}
			</td>
			<td style={{ width: '20%' }}>{formatISO(item.createdAt)}</td>
		</tr>
	);
};

export default ListItem;
