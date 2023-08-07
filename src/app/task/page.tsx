"use client";
import {
  AuthLayout,
  Button,
  HeaderCrumb,
  Input,
  Selector,
  TextArea,
} from "../components/index";

export default function Home() {
  const consultantData = ["John Doe", "Jane Doe", "John Doe", "Jane Doe", "John Doe", "Jane Doe"];
  const statusData = ["Not started", "Started", "Completed", "Cancelled", "Declined"];
  const priorityData = ["Low", "Normal", "High", "Urgent"];

  const handleSelect = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Create Task" nextLink="" />
          <p className="my-2 text-gray-500">Create a new task here</p>

          <div className=" mt-4 font-semibold bg-white p-2 md:p-4 md:pt-8 md:mt-8">
            <p className="font-bold mb-10">Enter task details</p>

            <form className="mt-4">
              <div className="block space-y-4  my-0 md:flex md:space-x-4 md:space-y-0 lg:space-x-10">
                {/* left input container */}
                <div className="w-full  space-y-6 md:w-1/2">
                  <Input type="text" label="Title" />
                  <p className="text-gray-400 my-4">Duration</p>
                  <div className="space-y-4 md:flex md:justify-between gap-2 md:space-y-0">
                    <div className="w-full md:w-1/2">
                      <Input type="date" label="Start Date" className="font-normal" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <Input type="time" label="Time" />
                    </div>
                  </div>
                  <div className="space-y-4 md:flex md:justify-between gap-2 md:space-y-0">
                    <div className="w-full md:w-1/2">
                      <Input type="date" label="Due Date" className="font-normal" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <Input type="time" label="Time" />
                    </div>
                  </div>
                  <TextArea rows="6" label="Description" />
                </div>
                {/* right input container */}

                <div className="w-full  space-y-6 md:w-1/2">
                  <Selector
                    label="Assign Travel Consultant"
                    focusContent=""
                    placeholder="search"
                    onSelect={handleSelect}
                    selectOption=""
                    inputData={consultantData}
                  />
                  {/* <Input type="text" label="Assign Travel Consultant" /> */}
                  <p className="my-4 text-white">Duration</p>
                  <div className="space-y-4 md:flex md:justify-between gap-2 md:space-y-0">
                    <div className="w-full md:w-1/2">
                      <Selector
                        label="Status"
                        focusContent=""
                        placeholder="search"
                        onSelect={handleSelect}
                        selectOption=""
                        inputData={statusData}
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <Selector
                        label="Priority"
                        focusContent=""
                        placeholder="search"
                        onSelect={handleSelect}
                        selectOption=""
                        inputData={priorityData}
                      />
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
