import React from 'react';

import styles from './Layout.module.sass';

const Layout = props => {
	return (
		<>
			<div>Toolbar, Sidedrawer, Backdrop</div>
			<main className={styles.Content}>
				{props.children}
			</main>
		</>
	);
}

export default Layout;