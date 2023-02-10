import NavBar from "@/components/NavBar";
import Image from "next/image";
import {Button, Card, Container} from "@mantine/core";
import Styles from "@/styles/Portfolio.module.css";
import {Carousel} from "@mantine/carousel";
import {Grid} from "@mui/material";
import { useMediaQuery} from "@mui/material";

import denslow1 from "../../../public/projects/Denslow/denslow1.jpg";
import denslow2 from "../../../public/projects/Denslow/denslow2.jpg";
import denslow3 from "../../../public/projects/Denslow/denslow3.jpg";
import denslow4 from "../../../public/projects/Denslow/denslow4.jpg";
import denslow5 from "../../../public/projects/Denslow/denslow5.jpg";

import GordonManetti1 from "../../../public/projects/GordonManetti/GordonManetti1.jpg";
import GordonManetti2 from "../../../public/projects/GordonManetti/GordonManetti2.jpg";
import GordonManetti3 from "../../../public/projects/GordonManetti/GordonManetti3.jpg";
import GordonManetti4 from "../../../public/projects/GordonManetti/GordonManetti4.jpg";

import knight1 from "../../../public/projects/Knight/knight1.jpg";
import knight2 from "../../../public/projects/Knight/knight2.jpg";
import knight3 from "../../../public/projects/Knight/knight3.jpg";
import knight4 from "../../../public/projects/Knight/knight4.jpg";
import knight5 from "../../../public/projects/Knight/knight5.jpg";

import mcculley1 from "../../../public/projects/McCulley/mcculley1.jpg";
import mcculley2 from "../../../public/projects/McCulley/mcculley2.jpg";
import mcculley3 from "../../../public/projects/McCulley/mcculley3.jpg";
import mcculley4 from "../../../public/projects/McCulley/mcculley4.jpg";

import burtonloop1 from "../../../public/projects/BurtonLoop/DSC331120160917at153827.jpg";
import burtonloop2 from "../../../public/projects/BurtonLoop/DSC335720160917at155608.jpg";
import burtonloop3 from "../../../public/projects/BurtonLoop/JDG5751.jpg";
import burtonloop4 from "../../../public/projects/BurtonLoop/JDG5764.jpg";
import burtonloop5 from "../../../public/projects/BurtonLoop/JDG5782.jpg";
import {useRouter} from "next/router";
import { MantineProvider } from "@mantine/core";
import { createStyles} from "@mantine/core";
import handler from "@/pages/api/hello";
import Head from "next/head";


export default function Portfolio() {
    const IsMobile = useMediaQuery('(max-width: 600px)');
    const useStyles = createStyles((_theme, _params, getRef) => ({
        controls: {
            ref: getRef('controls'),
            transition: 'opacity 150ms ease',
            opacity: 0,
        },

        root: {
            '&:hover': {
                [`& .${getRef('controls')}`]: {
                    opacity: 1,
                },
            },
        },
    }));
    const projects = [
        {
            title: 'Modern Single Story ',
            description: 'This modern home on Vashon Island is a single-story, open-concept design with clean lines and an abundance of natural light. The exterior is constructed of cedar siding and large windows that provide stunning views of the surrounding forest.',
            images: [denslow1, denslow2, denslow3, denslow4, denslow5],
            link: '/projects/1'
        },
        {
            title: 'Two Story Contemporary',
            description: 'This modern home on Vashon Island is a two-story contemporary design built with wood and metal elements, featuring large windows for stunning views of the water and natural light. ',
            images: [GordonManetti1, GordonManetti2, GordonManetti3, GordonManetti4],
            link: '/projects/2'
        },
        {
            title: 'Knight',
            description: 'this is a description',
            images: [knight3, knight2, knight1, knight4, knight5],
            link: '/projects/3'
        },
        {
            title: 'McCulley',
            description: 'this is a description',
            images: [mcculley1, mcculley2, mcculley3, mcculley4],
            link: '/projects/4'
        },
        {
            title: 'Burton Loop',
            description: 'this is a description',
            images: [burtonloop1, burtonloop2, burtonloop3, burtonloop4, burtonloop5],
            link: '/projects/5'

        }
    ]
    const { classes } = useStyles();
    const router = useRouter();
    function handleClick( link: string) {
        router.push(link).then(r => console.log(r))
    }

    //Use Media Query to determine if mobile or desktop
    console.log(IsMobile);
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <NavBar />
                <div className={Styles.container}>
                    <div className={Styles.titleContainer}>
                    <div className={Styles.title}>
                        <h1>Portfolio</h1>
                    </div>
                    </div>
                        <div className={Styles.content}>
                            <Grid container className={Styles.grid}>
                                {projects.map((project) => (
                                    <Grid item className={Styles.gridItem} key={project.title}>
                                    <Card className={Styles.card}>
                                        <div className={Styles.images}>
                                            <Carousel

                                                    classNames={classes}
                                                      slideSize={IsMobile ? '30px' : '500px'}
                                                      height={500}
                                                      slideGap="lg"
                                                      loop={true}
                                                      withIndicators
                                            >
                                                {project.images.map((image) => (
                                                    <Carousel.Slide onClick={() => handleClick(project.link)} key={image.src} className={Styles.carouselSlide}>
                                                    <Image src={image} alt
                                                    ={project.title} className={Styles.image}/>
                                                    </Carousel.Slide>
                                                ))}
                                            </Carousel>
                                        </div>
                                        <div className={Styles.lowerContainer}>
                                        <div className={Styles.text}>
                                            <h2>{project.title}</h2>
                                        </div>
                                            <Button className={Styles.button} onClick={() => handleClick(project.link)} variant="filled" color="blue" size="md">View Project</Button>

                                        </div>
                                    </Card>
                                    </Grid>
                                ))}

                            </Grid>
                        </div>
                </div>
        </>
    )
}
