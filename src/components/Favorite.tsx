import Image from "next/image"

type FavoriteProps = {
    className?: string;
    name: string;
    src: string;
    alt: string;
}

export default function Favorite({ className, name, src, alt }: FavoriteProps) {
    return (
        <div className={`${className} flex flex-col items-center `}>
            <Image src={src} alt={alt} width={800} height={500} className="w-full object-contain" />
            <h3 className="text-xl">{name}</h3>
        </div>
    )
}