import React from 'react';
import { FlexWrap, StyledLink } from './UserScreenStyle';

import { formatISO } from '../../util/date';

const ListItem = ({ item }) => {
	return (
		<tr>
			<td style={{ width: '35%' }}>
				<FlexWrap>
					<StyledLink to={`/users/${item.user_id}`}>
						<p>{item.user_id}</p>
					</StyledLink>
				</FlexWrap>
			</td>
			<td style={{ width: '45%' }}>
				<p>{item.username}</p>
			</td>
			<td style={{ width: '20%' }}>{formatISO(item.createdAt)}</td>
		</tr>
	);
};

export default ListItem;
