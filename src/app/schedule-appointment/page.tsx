"use client";

import { useRouter } from "next/navigation";
import {
  AuthLayout,
  Button,
  HeaderCrumb,
  Input,
  Selector,
  TextArea,
} from "../components/index";

export default function Home() {
  const router = useRouter();
  const handleSaveBtn = () => {
    router.back();
  };
  const handleSelect = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Add Appointment" nextLink="" />
          <p className="my-2 text-gray-500">Add a new Appointment here</p>

          <div className=" mt-4 font-semibold bg-white p-2 md:p-4 md:pt-8 md:mt-8">
            <p>Enter Appointment details</p>

            <form className="mt-4">
              <div className="block space-y-4  my-0 md:flex md:space-x-4 md:space-y-0 lg:space-x-10">
                {/* left input container */}
                <div className="w-full  space-y-6 md:w-1/2">
                  <Input type="text" label="Title" />
                  <p className="text-gray-400 my-4">Duration</p>
                  <div className="space-y-4 md:flex md:justify-between gap-2 md:space-y-0">
                    <div className="w-full md:w-1/2">
                      <Input type="text" label="From" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <Input type="text" label="To" />
                    </div>
                  </div>
                  <TextArea rows="6" label="Description" />
                </div>
                {/* right input container */}
                <div className="w-full  space-y-6 md:w-1/2">
                  <Input type="text" label="Date" />
                  <p className="my-4 text-white">Duration</p>
                    <Selector
                      label="Assign Travel Consultant"
                      placeholder="search"
                      onSelect={handleSelect}
                      selectOption=""
                      focusContent=""
                    />
                </div>
              </div>
              <div
                onClick={handleSaveBtn}
                className="flex justify-center mt-6 pr-0 lg:justify-end  gap-6 md:my-14"
              >
                <Button
                  btnText="Save"
                  className="bg-[#DDAA33] rounded-md cursor-pointer justify-center flex text-white "
                />
              </div>
            </form>
          </div>
        </main>
      </AuthLayout>
    </>
  );
}
