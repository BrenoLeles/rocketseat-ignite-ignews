import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import estilos from './estilos.module.scss'

export function BotaoAcessar() {
	
	const seLogado = true;
	
	return seLogado ? (
		<button
			className={estilos.botaoAcessar}
			type="button">
			<FaGithub color="#04d361"/>
			Breno Leles
			<FiX color="737380" className={estilos.iconeFechar}/>
		</button>
	) : (
		<button
			className={estilos.botaoAcessar}
			type="button">
			<FaGithub color="#eba417"/>
			Entrar com Github
		</button>
	);
	
}