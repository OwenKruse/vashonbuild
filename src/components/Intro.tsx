import Styles from "@/styles/Intro.module.css";
import {createStyles} from '@mantine/core';
import { Container } from '@mantine/core';
import Image from "next/image";
import {Button, useMediaQuery} from "@mui/material";
import {Carousel} from "@mantine/carousel";
import {Paper} from "@mantine/core";
import {Text} from "@mantine/core";
import {Title} from "@mantine/core";
import {useRouter} from "next/router";
import {Grid} from "@mantine/core";
import {Center} from "@mantine/core";
import Head from "next/head";

export default function Intro() {

    const useStyles = createStyles((theme) => ({
        card: {
            height: "100%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },

        title: {
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
            color: theme.white,
            lineHeight: 1.2,
            fontSize: 32,
            marginTop: theme.spacing.xs,
        },

        description: {
            color: theme.white,
            fontWeight: 700,
        },
    }));
    interface CardProps {
        image: string;
        title: string;
        description: string;
    }

    const data = [
        {
            image:
                'https://vashonbuild-com.nyc3.cdn.digitaloceanspaces.com/production/app/uploads/2018/06/Vashon-1-Original-Edit-Req-15.jpg',
            title: 'Quality First',
            description: 'We pride ourselves on our deep understanding of the unique challenges that come with building on Vashon Island and in the greater Puget Sound region. Whether it\'s navigating the complex zoning regulations or dealing with the unique weather conditions, we have the experience and expertise to get the job done right.',
        },
        {
            image:
                'https://vashonbuild-com.nyc3.cdn.digitaloceanspaces.com/production/app/uploads/2020/04/26-FabCab-Vashon-Home-Swift-Studio-2048px.jpg',
            title: 'Vashon Community',
            description: 'Building on Vashon Island is not just about putting up structures, it\'s about creating spaces that reflect and enhance the unique community that exists here. The island is known for its tight-knit community, and it\'s vital that any building project is in line with that community\'s values and priorities. This is why at Vashon Build we prioritize using locally sourced materials and working with local tradespeople when possible. By utilizing the talents and resources of the island community, we ensure that our projects are not only functional but also a reflection of the community.',
        },
        {
            image:
                'https://vashonbuild-com.nyc3.cdn.digitaloceanspaces.com/production/app/uploads/2018/06/Vashon-Build-1-3-scaled.jpg',
            title: 'Sustainable Design',
            description: 'The island is known for its natural beauty, and it\'s essential that any building project is in harmony with the environment. Vashon Build is committed to sustainable building practices, and we strive to minimize our impact on the island\'s natural resources. By being mindful of the island\'s ecology, we ensure that our projects are not only beautiful but also responsible.',
        },
    ];
    function Card({ image, title, description }: CardProps) {
        const { classes } = useStyles();

        return (
            <Paper
                shadow="md"
                p="xl"
                radius="md"
                //make the image darker but not the text
                sx={{ backgroundImage: `url(${image})`,  }}
                className={classes.card}
            >
                <div className={Styles.containerMobile}>
                    <Title order={3} className={Styles.mobileTitle}>
                        {title}
                    </Title>
                    <div className={Styles.CardDescription}>
                    <Text className={classes.description}>{description}</Text>
                    </div>
                </div>
            </Paper>
        );
    }


    const isMobile = useMediaQuery('(max-width: 600px)');
    const router = useRouter();
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));
    if (isMobile) {
        return (
            <div className={Styles.introMobile}>
                    <Carousel
                        slideSize="100%"
                        align="start"
                        loop
                        draggable={true}
                        withIndicators={true}
                        slidesToScroll={1}
                    >
                        {slides}
                    </Carousel>
            </div>
        )
    }
    return (
        <div className={Styles.body}>
            <Center className={Styles.container} sx={{
                backgroundColor: 'rgba(0,0,0,0.25)',
                width: '100%',
            }}>
                <Container size={'lg'}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
                >
                    <Container className={Styles.grid}>
                    <h1 className={Styles.title}>Quality First</h1>
                    <p className={Styles.description}>                                             At Vashon Build, we specialize in creating high-quality, custom-designed homes and remodels that prioritize health, comfort, durability, and efficiency. As a family-owned and operated company based on Vashon Island, WA, we serve the local communities of Vashon If you&apos;re ready to start planning your dream home or remodel, we&apos;d love to hear from you.
                    </p>
                    </Container>
                    <Image src={'https://vashonbuild-com.nyc3.cdn.digitaloceanspaces.com/production/app/uploads/2018/06/Vashon-1-Original-Edit-Req-15.jpg'} alt={"Home"} width={550} height={450} className={Styles.image}/>
                </Container>
            </Center>
            <Center className={Styles.container} sx={{
                width: '100%',
            }} >
            <Container size={'lg'} sx={{
                display: 'flex',
                flexDirection: 'row',
            }} >
                <Image src={'https://vashonbuild-com.nyc3.cdn.digitaloceanspaces.com/production/app/uploads/2020/04/26-FabCab-Vashon-Home-Swift-Studio-2048px.jpg'} alt={'Home'} width={500} height={500} className={Styles.image}/>
                <Container className={Styles.grid} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '3rem',
                }}>
                <h1 className={Styles.title}>Our Team</h1>
                <p className={Styles.description}>Vashon Build is a family-owned and operated business, and we take pride in our commitment to the island community. We are a small team of experienced professionals who are passionate about building and remodeling. We are committed to providing our clients with the highest quality workmanship and customer service. We are proud to be a part of the Vashon community, and we look forward to working with you on your next project.</p>
                </Container>
            </Container>

            </Center>
            <Center className={Styles.container} sx={{
                backgroundColor: 'rgba(0,0,0,0.25)',
                width: '100%',

            }}>
                <Container size={'lg'} sx={{
                    display: 'flex',

                }}>
                <Container className={Styles.grid} sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                    }
                }>
                <h1 className={Styles.title}>Vashon Build Is Hiring!</h1>
                <p className={Styles.description}> We are looking for qualified applicants to join our team. We offer competitive wages, paid vacation, as well as medical and dental insurance. Give us a call if you think you’d be a great fit for our company! </p>
                <Button variant="contained"
                        onClick={() => {
                            router.push('/contact');
                        }

                }
                        color="secondary" sx={
                    {
                        color: 'white',
                        justifySelf: 'center',
                        alignSelf: 'center',
                        marginTop: '1rem',
                        marginBottom: '1rem',
                    }
                }>
                    Contact Us
                    </Button>
                </Container>
                <Image src={'https://vashonbuild-com.nyc3.cdn.digitaloceanspaces.com/production/app/uploads/2018/06/Vashon-Build-1-3-scaled.jpg'} alt={'Home'} width={500} height={500} className={Styles.image}/>
                </Container>
            </Center>

        </div>
    );

}