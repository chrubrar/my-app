
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRaio() {
    return (
        <div className="divide-y divide-dashed">
            <div className="items-center gap-10 border-2 border-red-500 p-10" >

                <AspectRatio ratio={16 / 9}>
                    <Image
                        src="/heroimages/Life_Banner_Hero.png"
                        alt="Image"
                        className="justify-center rounded-md object-cover"
                        width={1440}
                        height={400}

                    />
                </AspectRatio>

            </div>
            <div>
                <span>hello</span>
            </div>
        </div>
    )


}

