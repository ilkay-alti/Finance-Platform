import React from "react";
import { HeaderLogo } from "./Header/HeaderLogo";
import Navigation from "./Header/Navigation";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import WelcomeMwssage from "./WelcomeMwssage";

const Header = () => {
  return (
    <header className="bg-[#A19AD3]  w-full px-4 py-8 lg:px-14 pb-36">
      <div className=" max-w-screen-2xl mx-auto">
        <div className="w-full flex justify-between items-center mb-14">
          <div className="flex items-center lg:gap-x-16 ">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <WelcomeMwssage />
      </div>
    </header>
  );
};

export default Header;
