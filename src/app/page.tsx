"use client";
import Image from "next/image";
import { Button, Input } from "./components/index";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen px-2 flex-col items-center bg-gray-300 justify-between py-8 md:p-24">
        <div className="p-6 bg-white w-full  md:w-[500px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <form action="">
            <div className="flex items-center justify-between">
              <div className="">
                <p className="font-bold">Login</p>
                <p className="text-[12px] md:text-[14px]">
                  Login to your account
                </p>
              </div>
              <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]">
                <Image
                  src="/images/brandLogo-removebg-preview.png"
                  alt="picture of brand logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <Input type="text" label="Email" className="mt-8" />
            <Input type="password" label="Password" className="mt-6" />
            <Link href="/workspace">
              <Button
                className="bg-[#DDAA33] w-full rounded-none text-white mt-6 flex justify-center mx-auto md:w-[350px] md:mt-8 "
                btnText="Login"
              />
            </Link>
          </form>
        </div>
      </main>
    </>
  );
}
