import Styles from "@/styles/Contact.module.css";
import NavBar from "@/components/NavBar";
import { Input, Textarea, Button, Container } from '@mantine/core';
import Head from "next/head";
export default function Contact() {

    return (
        <>
            <Head>
                <title>Vashon Build | Contact</title>
                <meta name="description" content="Vashon Build is a full service general contracting company on Vashon Island, WA. We specialize in new construction, remodels, and additions. We are a small company that prides itself on quality work and excellent customer service." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className={Styles.body}>
                <NavBar />
                <div className={Styles.container}>
                    <div className={Styles.title}>
                        <h1>Contact</h1>
                    </div>
                    <div className={Styles.content}>
                        <div className={Styles.text}>
                            Contact us for more information, to see if we would be a good fit for your project, or if you’d like to chat more about what we do.  We’d love to connect with you!
                        </div>
                        <div className={Styles.contactInfo}>
                            <div className={Styles.phone}>
                                <h2>Phone</h2>
                                <p>(206) 794-9809</p>
                            </div>
                            <div className={Styles.email}>
                                <h2>Email</h2>
                                <p>
                                    <a href="mailto:  info@vashonbuild.com">
                                        info@vashonbuild.com
                                    </a>
                                </p>
                            </div>
                    </div>
                    </div>
                </div>
            </body>
        </>
    )
}