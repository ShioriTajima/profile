import Favorite from "../components/Favorite";
import Image from "next/image";

export default function Page() {
  const favorites = [
    {
      name: "gongcha",
      src: "/images/gongcha.jpg",
      alt: "gongchaの画像",
    },
    {
      name: "amptak",
      src: "/images/amptak.jpg",
      alt: "amptakの画像",
    },
    {
      name: "disney",
      src: "/images/disney.jpg",
      alt: "disneyの画像",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 p-8">
      <Image
        src="/images/myImage.jpg" alt="私の画像" width={800} height={500} className="w-full max-w-4xl object-contain rounded-2xl object-cover aspect-[4/3]"
      />
      <h1 className="text-5xl text-blue-900 font-bold underline p-10">
        田島史織
      </h1>
      <h1 className="text-3xl text-blue-500 font-bold px-10 pt-10">好きなもの</h1>

      <div className="flex justify-center flex-wrap gap-10 bg-teal-500 p-10 m-5 rounded-2xl">
        {favorites.map((favorite, index) => (
          <Favorite
            key={index}
            name={favorite.name}
            src={favorite.src}
            alt={favorite.alt}
            className="w-60"
          />
        ))}
      </div>
    </div>
  );
}

