import { Link, Image } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="flex items-center w-full max-w-[1200px] max-[1200px]:px-4 mx-auto justify-start">
      <Link
        color="foreground"
        href="/"
        className="flex gap-2 items-center cursor-pointer my-[100px]"
      >
        <Image src="logo.png" alt="alt" width={40} />
        <p className="font-semibold text-2xl text-inherit">Dripbit</p>
      </Link>
    </footer>
  );
}
