import estilos from './estilos.module.scss';
import {BotaoAcessar} from "./BotaoSignIn";

export function Header() {
	return (
		<header className={estilos.headerContainer}>
			<div className={estilos.headerContent}>
				<img src="/images/logo.svg" alt="ig.news"/>
				<nav>
					<a className={estilos.ativo}>Home</a>
					<a>Posts</a>
				</nav>
				
				<BotaoAcessar />
			</div>
		</header>
	);
}