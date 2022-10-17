import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import List from "../components/UI/List";

const IndexPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Redux Toolkit</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="container">
                <h1 className="py-5">
                    All users post
                </h1>
                <List/>
            </div>

        </div>
    )
}

export default IndexPage