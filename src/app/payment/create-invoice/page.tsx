"use client";
import { AuthLayout, Button, HeaderCrumb, Input } from "@/app/components";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Create Invoice" nextLink="" />
          <p className="my-2 text-gray-500">Create a new invoice here</p>

          <div className=" mt-4 font-semibold bg-white p-2 md:p-4 md:pt-8 md:mt-8">
            <p>Enter Invoice details</p>

            <form className="mt-4">
              <div className="block space-y-4  my-0 md:flex md:space-x-4 md:space-y-0 lg:space-x-10">
                {/* left input container */}
                <div className="w-full  space-y-6 md:w-1/2">
                  <Input type="text" label="Client's Name" />

                  <div className="space-y-4 md:flex md:justify-between gap-2 md:space-y-0">
                    <div className="w-full md:w-1/2">
                      <Input type="text" label="Amount" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <Input type="text" label="Date" />
                    </div>
                  </div>
                  <Input type="text" label="Description" />
                </div>
                {/* right input container */}

                <div className="w-full  space-y-6 md:w-1/2">
                  <Input type="text" label="Status" />
                  <Input type="text" label="Purpose" />
                </div>
              </div>

              <div className="flex justify-between pr-0 lg:justify-end  gap-6">
                <Button
                  handleBtnClick={() => router.back()}
                  btnText="Cancel"
                  className="cursor-pointer justify-center flex rounded-md border-[1.6px] border-red-700 text-red-700"
                />
                <Button
                  handleBtnClick={() => router.back()}
                  btnText="Save"
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
