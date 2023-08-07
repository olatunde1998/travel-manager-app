"use client";
import {
  AuthLayout,
  Button,
  ClientDetails,
  HeaderCrumb,
} from "@/app/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Client Profile" nextLink="" />
          <p className="my-2 text-gray-500">View Client Profile here</p>

          <section className="bg-white pb-20 pt-10 px-4 md:px-6 mt-10 rounded-md">
            <div className="mt-10 rounded-md pl-4 md:pl-6 py-6 bg-gray-200/40">
              <p className="font-bold ml-2 text-black">Client&apos;s Picture</p>
              <div className="md:flex items-center  mt-6 max-w-[400px]">
                <div className="relative mr-0 w-[90px] h-[100px] md:h-[100px] md:w-[90px] md:mr-6">
                  <Image
                    src="/images/clientImg.png"
                    fill
                    className="w-full"
                    alt="client picture"
                  />
                </div>
                <div className="space-y-2 font-semibold">
                  <p className="font-bold text-black ">Odusote Mayokun</p>
                  <p className="text-gray-400  text-[14px] md:text-[16px]">
                    adegoketemitope1909@gmial.com
                  </p>
                  <div className=" text-[14px] md:text-[16px] md:flex gap-4 text-gray-400">
                    <p>Female</p>
                    <p>54years old</p> <p>Nigerian</p>
                  </div>
                </div>
              </div>
            </div>
            {/* client details */}

            <div className="ml-1 md:flex md:space-x-40 md:ml-4 my-20">
              <div className="space-y-6">
                <ClientDetails
                  title="Full Name"
                  content="Odusote Mayokun"
                  focusContent=""
                />
                <ClientDetails
                  title="Applicant Fullname"
                  content="Odusote Mayokun Kemi"
                  focusContent="(as shown in passport)"
                />{" "}
                <div className="flex gap-8">
                  <ClientDetails
                    title="Place of Birth"
                    content="Nigeria"
                    focusContent=""
                  />{" "}
                  <ClientDetails
                    title="Date of Birth"
                    content="04/11/2012"
                    focusContent=""
                  />{" "}
                </div>
                <ClientDetails
                  title="Marital Status"
                  content="Married"
                  focusContent=""
                />{" "}
                <ClientDetails
                  title="Current Occupation"
                  content="Engineer"
                  focusContent=""
                />
                <ClientDetails
                  title="Residental Address"
                  content="No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria"
                  focusContent=""
                />
                <ClientDetails
                  title="Country of Interest"
                  content="Iceland"
                  focusContent=""
                />
              </div>

              <div className="mt-6 space-y-6 md:mt-0">
                <ClientDetails
                  title="Email"
                  content="adegoketemitope1909@abc.om"
                  focusContent=""
                />
                <ClientDetails
                  title="Gender"
                  content="Female"
                  focusContent=""
                />{" "}
                <ClientDetails
                  title="Country of Citizenship"
                  content="Nigeria, Uganda"
                  focusContent=""
                />{" "}
                <ClientDetails
                  title="Education"
                  content="Bachelor's Degree"
                  focusContent="(Client's highest level of Education)"
                />{" "}
                <ClientDetails
                  title="Phone Number"
                  content="+234(0)8160730668"
                  focusContent=""
                />
                <ClientDetails
                  title="Mailing Address"
                  content="No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria"
                  focusContent=""
                />
                <ClientDetails
                  title="Purpose of Travaling"
                  content="Trading"
                  focusContent=""
                />
              </div>
            </div>
            <div className="justify-center md:justify-end flex pr-8">
              <Button
                btnText="Back"
                className="bg-[#DDAA33] text-white justify-center flex"
                handleBtnClick={handleBack}
              />
            </div>
          </section>
        </main>
      </AuthLayout>
    </>
  );
}
