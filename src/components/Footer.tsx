import Styles from "@/styles/Footer.module.css";

export default function Footer() {
    return (
        <>
            <footer className={Styles.footer}>
                <div className={Styles.container}>
                    <div className={Styles.content}>
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
                    </div>
                </div>
            </footer>
        </>
    )
}
