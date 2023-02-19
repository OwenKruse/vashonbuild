import NavBar from "@/components/NavBar";
import Head from "next/head";
import Styles from "@/styles/Projects.module.css";
import { ImageList, ImageListItem } from "@mui/material";
import GetImageData from "@/components/imageData";
import {Key, useState} from "react";
import { Modal } from '@mantine/core';
import { useMediaQuery } from '@mui/material';

// @ts-ignore
export default function Denslow({imageData}) {
    // Get the image data only for this project
    const [opened, setOpened] = useState(false);
    console.log(imageData)
    // Images are in
    const denslowImages = imageData[1].images;
    // @ts-ignore
    const handleClick = (index) => {
        setOpened(index);
    }
    let isMobile = useMediaQuery('(max-width:600px)');
    return (
        <>
            <Head>
                <title>Vashon Build | Timber Frame on South Vashon Island</title>
                <meta name="description" content="Vashon based construction company."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavBar/>
            <div className={Styles.container}>
                <div className={Styles.title}>
                    <h1>Timber Frame on South Vashon Island</h1>
                </div>
            </div>
            <div className={Styles.content}>
                <div className={Styles.text}>
                    <p>
                        Energy Efficiency and Architecture were the client goals for this home.  Butterfly rooflines accommodate high window openings on both sides of the home for excellent daylighting.  The exterior shell is constructed with structural insulated panels (SIPs) and the interior and exterior finishes were beautifully designed and executed with craft and care. Fabcab Design.
                    </p>
                </div>
                <ImageList variant="masonry" cols={isMobile ? 2 : 3} gap={8}>
                    {denslowImages.map((item: { img: Key | null | undefined; title: string | undefined; }, index: any) => (
                        <ImageListItem key={item.img} onClick={() => handleClick(index)}>
                            <img
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
    const imageData = await GetImageData();
    return {
        props: {
            imageData
        }
    }
}


