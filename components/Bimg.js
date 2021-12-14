import Image from "next/image";

function Bimg() {
  return (
    <div className="absolute">
      <Image
        className="filter blur-lg"
        alt="Mountains"
        src="/bgup.jpg"
        width="1920"
        height="1080"
        // layout="fill"
        objectFit="cover"
        quality={100}
      />
      <p className="relative">
        Image Component
        <br />
        as a Background
      </p>
    </div>
  );
}

export default Bimg;
