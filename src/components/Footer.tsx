import Styles from "@/styles/Footer.module.css";
import {Center, Container} from "@mantine/core";

export default function Footer() {
    return (
        <>
            <footer className={Styles.footer} style={{
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.75)',
            }}>
                <div className={Styles.container}>
                    <Container size={'lg'} className={Styles.content}>
                        <div className={Styles.text}>
                            <p>
                                Vashon Build LLC
                            </p>
                            <div className={Styles.contactInfo}>
                            <p>
                                206-794-9809
                            </p>
                            <p>
                                <a href="mailto:  info@vashonbuild.com">
                                    info@vashonbuild.com
                                </a>
                            </p>
                            </div>
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    )
}
