import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className=" items-center hidden  lg:flex cursor-pointer text-white">
        <Image src="/logo.png" alt="logo" width={30} height={30} />
        <p className="font-semibold text-2xl ml-2.5">Finance</p>
      </div>
    </Link>
  );
};
