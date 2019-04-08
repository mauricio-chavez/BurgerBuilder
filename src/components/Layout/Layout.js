import React from 'react';

import styles from './Layout.module.sass';

const Layout = props => {
	return (
		<div>
			<div>Toolbar, Sidedrawer, Backdrop</div>
			<main className={styles.Content}>
				{props.children}
			</main>
		</div>
	);
}

export default Layout;