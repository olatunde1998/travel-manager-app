"use client";

import { AuthLayout, Button, HeaderCrumb, Input } from "../components/index";
import { GiCancel } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Create Invoice" nextLink="" />
          <p className="my-2 text-gray-500">Send messages to Clients</p>

          <div className=" mt-4 font-semibold bg-white p-2 md:p-4 md:pt-8 md:mt-8">
            <p>Enter message details</p>

            <form className="mt-4">
              <div className="block space-y-4  my-0 md:flex md:space-x-4 md:space-y-0 lg:space-x-10">
                {/* left input container */}
                <div className="w-full  space-y-6 md:w-1/2">
                  <div className="mt-12">
                    <ul className="font-normal text-[12px] flex gap-2">
                      <li className="bg-[#E3E3E3]  w-[140px] p-1  pl-2 flex items-center justify-between rounded-full">
                        Moremi Olareola{" "}
                        <span className="cursor-pointer mr-2">
                          <GiCancel />
                        </span>
                      </li>
                      <li className="bg-[#E3E3E3]  w-[140px] p-1  pl-2 flex items-center justify-between rounded-full">
                        Moremi Olareola{" "}
                        <span className="cursor-pointer mr-2">
                          <GiCancel />
                        </span>
                      </li>
                      <li className="bg-[#E3E3E3]  w-[140px] p-1  pl-2 flex items-center justify-between rounded-full">
                        Moremi Olareola{" "}
                        <span className="cursor-pointer mr-2">
                          <GiCancel />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Input type="text" label="Receiver(s)" />
                </div>
                {/* right input container */}

                <div className="w-full  space-y-6 md:w-1/2">
                  <Input type="text" label="Subject" />
                  <Input type="text" label="Description" />
                </div>
              </div>

              <div className="flex justify-between pr-0 mt-40 mb-10 lg:justify-end  gap-6">
                <Button
                  btnText="Send"
                  className="bg-[#DDAA33] justify-center flex rounded-md text-white cursor-pointer "
                />
              </div>
            </form>
          </div>
        </main>
      </AuthLayout>
    </>
  );
}
