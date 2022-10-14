import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../global/components/header.component";

const Home: NextPage = () => {
    return (
        <>
            <Header></Header>
            <div className="container-fluid">
                <Head>
                    <title>Presentation React Application</title>
                    <meta name="description" content="Presentation React Application"/>
                    <link rel="icon" href="/workspace/simple-react-project/src/public/favicon.ico"/>
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Welcome to my React App
                    </h1>
                </main>
            </div>
        </>
    )
}

export default Home
