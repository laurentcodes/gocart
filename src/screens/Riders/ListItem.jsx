import React from 'react';
import { FlexWrap, StyledLink } from './RiderScreenStyle';

import { formatISO } from '../../util/date';

const ListItem = ({ item }) => {
	return (
		<tr>
			<td style={{ width: '20%' }}>
				<FlexWrap>
					<StyledLink to={`/riders/${item.rider_id}`}>
						<p>{item.rider_id}</p>
					</StyledLink>
				</FlexWrap>
			</td>
			<td style={{ width: '30%' }}>
				<p>{item.username}</p>
			</td>
			<td style={{ width: '30%' }}>{item.email}</td>
			<td style={{ width: '20%' }}>{formatISO(item.createdAt)}</td>
		</tr>
	);
};

export default ListItem;
