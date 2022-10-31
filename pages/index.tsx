import type { NextPage } from 'next'
import Head from 'next/head'
import CounterAccess from '../components/counter_access'
import { EthersAppContext } from 'eth-hooks/context';
import styles from '../styles/Home.module.css'
import ShowAccount from '../components/show_account';




const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <EthersAppContext disableDefaultQueryClientRoot={true}>
            <ShowAccount />
            <CounterAccess />
          </EthersAppContext>
      </main>
    </div>
  )
}

export default Home
