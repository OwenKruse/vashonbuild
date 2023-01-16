import NavBar from "@/components/NavBar";
import BackgroundImage from "../../../public/images/background.jpg";
import Image from "next/image";
import {Button, Container} from "@mantine/core";

import Styles from "@/styles/Employment.module.css";


export default function Employment() {

        return (
            <>
                <body className={Styles.body}>
                    <NavBar />
                    <div className={Styles.container}>
                        <div className={Styles.title}>
                            <h1>Vashon Build Is Hiring!</h1>
                        </div>
                        <div className={Styles.content}>
                            <div className={Styles.text}>
                                <p>
                                    We are looking for qualified applicants to join our team.  We offer competitive wages, paid vacation, as well as medical and dental insurance.  Give us a call if you think you’d be a great fit for our company!
                                </p>
                            </div>
                            <div className={Styles.contactInfo}>
                                <div className={Styles.phone}>
                                    <p>(206) 794-9809</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </>
        )
}