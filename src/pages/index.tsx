import Head from 'next/head';

import estilos from './inicio.module.scss';
import {BotaoSubscricao} from "../components/BotaoSubscricao";

export default function Home() {
	return (
		<>
		  <Head>
        <title>Início | ig.news</title>
      </Head>
      
      <main className={estilos.contentContainer}>
        <section className={estilos.hero}>
          <span>😉 Olá, bem vindo!</span>
          <h1>Novas notícias do mundo <span>React</span></h1>
          <p>
            Veja todas as publicações <br/>
            <span>por R$ 99,00/mês</span>
          </p>
	        <BotaoSubscricao />
        </section>
  
        <img src="/images/avatar.svg" alt="Garota Codando"/>
      </main>
		</>
	)
}
