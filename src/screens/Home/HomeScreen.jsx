import React from 'react';

import { Container, Card, CardContainer } from './HomeScreenStyle.js';

import user from '../../assets/icons/group.svg';

const HomeScreen = () => {
	return (
		<div>
			<Container>
				<CardContainer>
					<Card>
						<img src={user} alt='' />
						<div>
							<h3>Users</h3>
							<h1>2000</h1>
						</div>
					</Card>
					<Card>
						<img src={user} alt='' />

						<div>
							<h3>Riders</h3>
							<h1>350</h1>
						</div>
					</Card>
					<Card>
						<img src={user} alt='' />
						<div>
							<h3>Deliveries</h3>
							<h1>500</h1>
						</div>
					</Card>
				</CardContainer>

				<div>
					<h1>Welcome to GoCart</h1>
				</div>
			</Container>
		</div>
	);
};

export default HomeScreen;
