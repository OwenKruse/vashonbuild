import NavBar from "@/components/NavBar";
import BackgroundImage from "../../../public/images/background.jpg";
import Image from "next/image";
import {Button, Container} from "@mantine/core";
import Styles from "@/styles/About.module.css";
import {Avatar, Grid} from "@mui/material";
import {useRouter} from "next/router";
import Head from "next/head";
import {useMediaQuery} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function About() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/contact');
    }

    const IsMobile = useMediaQuery('(max-width: 600px)');


    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="About"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>


            <body className={Styles.body}>
                <NavBar />
                <div className={Styles.container}>
                    <Typography className={Styles.title}>
                        <h1>About</h1>
                    </Typography>
                    <div className={Styles.content}>
                        <Grid container className={Styles.grid}>
                                    <div className={Styles.text}>
                                        <p>
                                            At Vashon Build, we specialize in creating high-quality, custom-designed homes and remodels that prioritize health, comfort, durability, and efficiency. As a family-owned and operated company based on Vashon Island, WA, we serve the local communities of Vashon and Maury Islands, as well as the surrounding areas of Puget Sound. If you&apos;re ready to start planning your dream home or remodel, we&apos;d love to hear from you.
                                        </p>
                                        <Button className={Styles.button} onClick={
                                            handleClick
                                        } variant="filled" color="blue" size="md">Contact Us</Button>
                                    </div>

                            </Grid>
                    </div>
                </div>
            </body>
        </>
    )
}