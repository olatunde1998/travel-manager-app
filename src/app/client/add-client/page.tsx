"use client";
import {
  AuthLayout,
  Button,
  HeaderCrumb,
  Input,
  Selector,
  TextArea,
} from "@/app/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleCancelBtn = () => {
    router.push("/client");
  };
  const handleSelect = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Add Client" nextLink="" />
          <p className="my-2 text-gray-500">Add a new Client here</p>

          <section className="bg-white pb-10 pt-10 px-3 mt-10 rounded-md md:px-6">
            <div className="mt-10 rounded-md pl-6 py-6 bg-gray-200/40">
              <p className="font-semibold ml-0 text-center md:ml-3 md:text-left">
                Client&apos;s Picture
              </p>
              <div className="md:flex items-center  mt-6 max-w-[400px]">
                <div className="relative h-[90px] w-[100px] mx-auto my-4 md:mx-0 md:my-0">
                  <Image
                    src="/images/brandLogo-removebg-preview.png"
                    fill
                    className="w-full h-full"
                    alt="client picture"
                  />
                </div>
                <div className="space-y-2 flex flex-col justify-center items-center">
                  <Button
                    btnText="Upload"
                    className="bg-[#DDAA33] rounded-xl justify-center flex text-white cursor-pointer"
                  />
                  <Button
                    btnText="Use Webcam"
                    className="justify-center flex rounded-xl border-[1.6px] border-red-700 text-red-700"
                  />
                </div>
              </div>
            </div>
            {/* client details */}
            <div className="block space-y-4  my-20 md:flex md:space-x-4 md:space-y-0 lg:space-x-10">
              <div className="w-full space-y-6 md:w-1/2">
                <Input type="text" label="Full Name" />
                <Input
                  type="text"
                  label="Applicant Fullname"
                  focusContent="(as shown in passport)"
                />
                <div className="space-y-4 md:flex md:justify-between gap-2 md:space-y-0">
                  <div className="w-full md:w-1/2">
                    <Input type="text" label="Place of Birth" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <Input type="date" label="Date of Birth" />
                  </div>
                </div>
                <Input type="text" label="Marital Status" />
                <Input type="text" label="Current Occupation" />
                <TextArea rows="6" label="Residental Address" />
                <Input type="text" label="Country of Interest" />
              </div>

              <div className="w-full space-y-6 md:w-1/2">
                <Input type="email" label="Email" />
                <Selector
                  label="Gender"
                  focusContent=""
                  placeholder="search"
                  onSelect={handleSelect}
                  selectOption=""
                />
                <Selector
                  label="Country of Citizenship"
                  focusContent=""
                  placeholder="search"
                  onSelect={handleSelect}
                  selectOption=""
                />
                <Selector
                  label="Education"
                  focusContent="(Client's highest level of Education)"
                  placeholder="search"
                  onSelect={handleSelect}
                  selectOption=""
                />
                <Input type="number" label="Phone Number" />
                <TextArea rows="6" label="Mailing Address" />
                <Input type="number" label="Purpose of Travaling" />
              </div>
            </div>
            <div className="flex justify-between pr-0 lg:justify-end  gap-6">
              <Button
                handleBtnClick={handleCancelBtn}
                btnText="Cancel"
                className="cursor-pointer justify-center flex rounded-md border-[1.6px] border-red-700 text-red-700"
              />
              <Button
                btnText="Save"
                className="bg-[#DDAA33] justify-center flex rounded-md text-white cursor-pointer "
              />
            </div>
          </section>
        </main>
      </AuthLayout>
    </>
  );
}
