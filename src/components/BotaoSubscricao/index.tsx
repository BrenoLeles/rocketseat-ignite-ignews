import estilos from './estilos.module.scss';

export function BotaoSubscricao() {
	return (
		<button
			type="button"
			className={estilos.botaoSubscricao}
		>
			Inscrever-se
		</button>
	)
}