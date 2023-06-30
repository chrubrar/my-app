

import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

type Game = {
    id: number,
    background_image: string,
    rating: number,
    name: string,
}

const getGames = async (): Promise<Game[]> => {

    const res = await fetch(`https://api.rawg.io/api/games?key=8bd6a724fe2c48749db58956565ab9ed`)
    if (!res.ok) {
        throw new Error('failed to fetch')
        //console.log('${process.env.RAWG}')
    }
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const data = await res.json()
    //console.log("hello" + res.json())
    return data.results

}



export default async function SkeletonPage() {
    const games = await getGames()
    console.log(games)
    return (
        <main className="m-24 grid grid-cols-4 gap-12 rounded-md">
            {games.map((game) => (
                <div className="col-span-4 md:col-span-2 lg:col-span-1" key={game.id}>
                    <h1>{game.name}</h1>
                    <p>{game.rating}</p>
                    <div className="relative aspect-video">
                        <Image
                            src={game.background_image}
                            fill
                            className="rounded-md object-cover"
                            alt={game.name}
                        />
                    </div>
                </div>


            ))
            }
        </main>

    )
}