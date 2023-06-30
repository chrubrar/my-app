
import Image from "next/image";
import styles from "@/app/header.module.css"

const { heroContent, heroWrapper, imageWrapper } = styles;

const IMAGE_URL = "/public/heroimages/Life_Banner_Hero.png";

export default function Life() {

    return (
        <div className="border-2 border-red-500">
            <div className={heroWrapper}>
                <div className="gap-4 border-2 border-blue-500">
                    <Image className={imageWrapper}
                        src={IMAGE_URL}
                        alt="life banner image"
                        loading='eager'
                        fill
                        style={{ objectFit: "cover" }}
                        quality={100}
                    />


                </div>


                <div className={heroContent}>
                    <h1>hero Image</h1>
                    <span>Next.js hero iamge example</span>
                </div>

            </div>
        </div>
    );


};