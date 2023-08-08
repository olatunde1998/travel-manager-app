"use client";
import Image from "next/image";
import { Button, Input } from "./components/index";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginBackgroundImage } from "../../assets/icons";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email(" Invalid Email format"),
  password: yup
    .string()
    .required("password is required")
    .min(6, "password must be at least 6 characters")
    .max(20, "password must not exceed 15 characters"),
});

export default function Home() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const successNotifying = () => {
    toast("Login Successful", { position: toast.POSITION.TOP_RIGHT });
  };

  const onSubmitHandler = () => {
    console.log("submitted");
    setIsFormSubmitted(true);
    successNotifying();
    setTimeout(() => {
      router.push("/workspace");
    }, 2000);
  };
  return (
    <>
      <div className="absolute top-[-60px] left-0 w-full">
        <LoginBackgroundImage/>
      </div>

      <main className="flex  px-2 flex-col items-center bg-white justify-between py-8 md:p-24 lg:justify-center xl:pt-52">
        <div className="p-6 pb-10 bg-white w-full  md:w-[500px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] z-10 ">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="flex items-center justify-between">
              <div className="">
                <p className="font-bold">Login</p>
                <p className="text-[10px] mt-2 md:text-[12px]">
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
            {/* email */}
            <div>
              <Input
                type="email"
                inputName="email"
                label="Email"
                className="mt-8"
                register={{ ...register("email") }}
              />
              <p className="text-red-500 text-[0.75rem] text-right">
                {errors.email?.message}
              </p>
            </div>
            {/* password */}
            <div>
              <Input
                type="password"
                inputName="password"
                label="Password"
                className="mt-6"
                register={{ ...register("password") }}
              />
              <p className="text-red-500 text-[0.75rem] text-right">
                {errors.password?.message}
              </p>
            </div>
            <Button
              className="bg-[#DDAA33] w-full rounded-none text-white mt-6 flex justify-center mx-auto md:w-[350px] md:mt-8 "
              btnText="Login"
            />
          </form>
        </div>
      </main>
      <ToastContainer />
    </>
  );
}
