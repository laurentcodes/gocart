import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './app/store';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App tab='home' />
	</Provider>
);
