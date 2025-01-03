import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="lg:pl-20">
      <div className="max-w-xs px-2.5 lg:max-w-none  mx-auto">
        <Image
          width={800}
          height={800}
          src="/me.jpeg"
          alt="My about image"
          className="aspect-square rotate-3 rounded-2xl bg-zinc-100 p-1 object-cover hover:scale-105 ease-in duration-300"
        />
      </div>
    </div>
  );
}
