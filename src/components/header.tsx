import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        {/* <Image
          alt="header text"
          src="/writingIcon.png"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={32}
          height={32}
        /> */}
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight text-white">
          Flex Box
        </h1>
      </Link>
      <div>

      </div>

      <div className="flex">
        <a
          href="https://twitter.com/jeffrey75755118"
          target="_blank"
          rel="noreferrer"
          className="mr-2"
        >
          <Image
            alt="twitter Icon"
            src="/twitter.png"
            width={25}
            height={25}
          />
        </a>
        <a
          href="https://github.com/Jeffrey-mu/flex_box"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="github Icon"
            src="/github.png"
            width={25}
            height={25}
          />
        </a></div>
    </header>
  );
}
