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
							<h3>Total Deliveries</h3>
							<h1>500</h1>
						</div>
					</Card>
				</CardContainer>

				<CardContainer>
					<Card>
						<img src={user} alt='' />
						<div>
							<h3>In Progress</h3>
							<h1>76</h1>
						</div>
					</Card>

					<Card>
						<img src={user} alt='' />
						<div>
							<h3>Completed Deliveries</h3>
							<h1>469</h1>
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
