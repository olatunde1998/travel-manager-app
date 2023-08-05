"use client";
import { AuthLayout, Button, HeaderCrumb, Input } from "../components/index";

export default function Home() {
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Create Task" nextLink="" />
          <p className="my-2 text-gray-500">Create a new task here</p>

          <div className=" mt-4 font-semibold bg-white p-2 md:p-4 md:pt-8 md:mt-8">
            <p>Enter task details</p>

            <form className="mt-4">
              <div className="block space-y-4  my-0 md:flex md:space-x-4 md:space-y-0 lg:space-x-10">
                {/* left input container */}
                <div className="w-full  space-y-6 md:w-1/2">
                  <Input type="text" label="Title" />
                  <p className="text-gray-400 my-4">Duration</p>
                  <div className="space-y-4 md:flex md:justify-between gap-2 md:space-y-0">
                    <div className="w-full md:w-1/2">
                      <Input type="date" label="Start Date" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <Input type="text" label="Time" />
                    </div>
                  </div>
                  <div className="space-y-4 md:flex md:justify-between gap-2 md:space-y-0">
                    <div className="w-full md:w-1/2">
                      <Input type="date" label="Due Date" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <Input type="text" label="Time" />
                    </div>
                  </div>
                  <Input type="text" label="Description" />
                </div>
                {/* right input container */}

                <div className="w-full  space-y-6 md:w-1/2">
                  {/* <Input type="text" label="Date" /> */}
                  <Input type="text" label="Assign Travel Consultant" />
                  <p className="my-4 text-white">Duration</p>
                  <div className="space-y-4 md:flex md:justify-between gap-2 md:space-y-0">
                    <div className="w-full md:w-1/2">
                      <Input type="date" label="Status" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <Input type="text" label="Priority" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6 pr-0 lg:justify-end  gap-6 md:my-14">
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
