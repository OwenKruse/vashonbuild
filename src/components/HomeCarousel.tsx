import { Carousel } from '@mantine/carousel';
import {Button, createStyles, MantineProvider} from '@mantine/core';
import Image from "next/image";
import {useRef} from "react";
import Autoplay from 'embla-carousel-autoplay'
import styles from "@/styles/HomeCarousel.module.css";
import {useRouter} from "next/router";

const useStyles = createStyles((_theme, _params, getRef) => ({
    controls: {
        ref: getRef('controls'),
        transition: 'opacity 150ms ease',
        opacity: 0,
    },

}));
export default function HomeCarousel() {
    const autoplay = useRef(Autoplay({ delay: 5000 }));
    const router = useRouter();
    const handleClick = () => {
        router.push('/portfolio');
    }
    const { classes } = useStyles();
    return (
        <MantineProvider>
                <div className={styles.absolute}>
                    <div className={styles.container}>
                        <div className={styles.text}>
                            <h1 className={styles.title}>Vashon Build</h1>
                            <p className={styles.description}>Serving Vashon Island</p>
                            <div>
                            <Button className={styles.button} onClick={handleClick} variant="filled" color="orange" size="md">Portfolio</Button>
                            <Button className={styles.button} onClick={
                                        () => {
                                            //Scroll 100vh with smooth behavior
                                            window.scrollBy({
                                                top: window.innerHeight,
                                                left: 0,
                                                behavior: 'smooth'
                                            });
                                        }
                            } sx={{
                                marginLeft: '1rem'
                            }} variant="filled" color="blue" size="md">Learn More</Button>
                            </div>
                        </div>

                    </div>
                </div>
            <Carousel
                //Keep the element from scolling
                sx={{ width: "100vw",overflow: "hidden" }}
                mx="auto"
                loop
                draggable={false}
                speed={5}
                classNames={classes}
                height={'100vh'}
                plugins={[autoplay.current]}>
                <Carousel.Slide>
                    <Image className={styles.image} fill src="https://vashonbuild-com.nyc3.cdn.digitaloceanspaces.com/production/app/uploads/2020/04/50-FabCab-Vashon-Home-Swift-Studio-2048px.jpg" alt={"Image"}/>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image className={styles.image} fill src="https://vashonbuild-com.nyc3.cdn.digitaloceanspaces.com/production/app/uploads/2020/04/DSC3430-2016-09-22-at-12-41-47-scaled.jpg" alt={"Image"}/>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image className={styles.image} fill src="https://vashonbuild-com.nyc3.cdn.digitaloceanspaces.com/production/app/uploads/2018/04/DSC_2826-e1528320760597.jpg" alt={"Image"}/>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image className={styles.image} fill src="https://vashonbuild-com.nyc3.cdn.digitaloceanspaces.com/production/app/uploads/2018/06/Vashon-Build-1-3-scaled.jpg" alt={"Image"}/>
                </Carousel.Slide>
                {/* ...other slides */}
            </Carousel>
        </MantineProvider>

    );
}