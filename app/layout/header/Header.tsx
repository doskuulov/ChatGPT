import { FC } from 'react'
import styles from './Header.module.scss'
import HeaderMenu from './menu/HeaderMenu'
import Language from './language/language'
import HeaderProfile from './profile/HeaderProfile'
import Adaptive from './adaptive-menu/adaptive'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			{/* <Language />
			<HeaderMenu />
			<HeaderProfile /> */}
			<Adaptive />
		</header>
	)
}

export default Header
