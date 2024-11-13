import Image from "next/image";
import authorImage from '@/public/images/authors/globalfusion.jpeg'

export default function Intro() {
    return (
        <section className="flex flex-col-reverse item-start gap-x-10 gap-y-24 pb-24 md:flex-row md:items-center">
            <div className="mt-2 flex-1 md:mt-0">
                <h1 className="title no-underline">Insightful Reads for the Curious Mind.</h1>
                <p className="mt-3 font-light text-muted-foreground">
                Welcome to Fusion Global News, your trusted source for in-depth news, insightful 
                analysis, and stories that matter. Here, we go beyond the headlines to bring you 
                perspectives that inform, inspire, and engage. Whether you&#39;re looking for the latest 
                updates, expert opinions, or unique viewpoints on trending topics, we&#39;re here to keep 
                you connected with the world around you. Dive into our articles, discover fresh ideas, 
                and join the conversation – because informed voices shape a better tomorrow.
                </p>
            </div>
            <div className="relative">
                <Image 
                    className="flex-1 rounded-lg grayscale"
                    src={authorImage}
                    alt="Fusion Global News"
                    width={175}
                    height={175}
                    priority
                />
            </div>

        </section>
    )
}