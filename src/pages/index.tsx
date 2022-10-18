import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import List from "../components/UI/List";
import Link from "next/link";
import React from "react";

const IndexPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Redux Toolkit</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 py-md-5">
                        <h1>
                            All users post
                        </h1>
                    </div>
                    <div className="col-12 col-md-6 py-md-5 d-flex justify-content-end">
                        <button type="button" className="btn btn-primary">
                            <Link href="/postDetail">ADD NEW POST</Link>
                        </button>
                    </div>
                    <div className="col-12">
                        <List/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage