import NavBar from "@/components/NavBar";
import Head from "next/head";
import Styles from "@/styles/Projects.module.css";
import Image from "next/image";
import { ImageList, ImageListItem } from "@mui/material";
import GetImageData from "@/components/imageData";
import {Key, useState} from "react";
import { Modal } from '@mantine/core';
import { useMediaQuery } from '@mui/material';

// @ts-ignore
export default function Denslow({imageData}) {
    // Get the image data only for this project
    const [opened, setOpened] = useState(false);
    const denslowImages = imageData[4];
    // @ts-ignore
    const handleClick = (index) => {
        setOpened(index);
    }
    let isMobile = useMediaQuery('(max-width:600px)');
    return (
        <>
            <Head>
                <title>Vashon Build | Single Story Open Design</title>
                <meta name="description" content="Vashon based construction company."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={Styles.container}>
                <NavBar/>
                <div className={Styles.title}>
                    <h1>Modern Single Story Home</h1>
                </div>
            </div>
            <div className={Styles.content}>
                <div className={Styles.text}>
                    <p>
                        This modern home on Vashon Island is a single-story open-concept design that features cedar
                        siding, large windows, a concrete slab foundation, a flat standing seam metal roof, high
                        ceilings, an abundance of natural light, a radiant heating system, and low-maintenance durable
                        materials. The home was built with a focus on energy efficiency, sustainable materials and
                        modern aesthetic. The result is a beautiful,
                        comfortable and sustainable home that is well-suited to the island lifestyle.
                    </p>
                </div>
                <ImageList variant="masonry" cols={isMobile ? 2 : 3} gap={8}>
                    {denslowImages.map((item: { img: Key | null | undefined; title: string | undefined; }, index: any) => (
                        <ImageListItem key={item.img} onClick={() => handleClick(index)}>                            <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            className={Styles.modal}
                        />
                            <Modal withCloseButton={true}
                                   onClose={() => setOpened(false)}
                                   opened={opened === index}
                                   transition="slide-down"
                                   transitionDuration={200}
                                   transitionTimingFunction="ease"
                                   size="lg"
                                   fullScreen={isMobile}
                                   padding="md"
                                   className={Styles.modal1}
                            >
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    width={'100%'}
                                    height={'100%'}
                                />
                            </Modal>
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>

        </>
    )


}

export async function getStaticProps() {
    const imageData = GetImageData();
    console.log(imageData);
    return {
        props: {
            imageData
        }
    }
}


