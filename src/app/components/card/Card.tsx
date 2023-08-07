import { GoArrowRight } from "react-icons/go";

export const AgendaCard = () => {
  return (
    <>
      <main className="text-gray-600">
        <div className="max-w-[400px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="p-[4px] bg-[#DDAA33]"></div>
          <p className="p-2 bg-[#FBF6EB] font-semibold text-[14px]">
            Today&apos;s Agenda
          </p>
          <p></p>
          <p className="text-[12px] text-center py-12">
            You don&apos;t have any event schedule for today.{" "}
            <span className="cursor-pointer text-[#DDAA33]">Add</span>
          </p>
        </div>
      </main>
    </>
  );
};

export const ReportCard = () => {
  return (
    <>
      <main className="mt-12 md:mt-0  text-gray-600">
        <div className="max-w-[400px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] pb-14">
          <div className="p-[4px] bg-[#DDAA33]"></div>
          <div className="flex justify-between bg-[#FBF6EB]">
            <p className="p-2 text-[14px] bg-[#FBF6EB] font-semibold">
              Activity Report
            </p>
            <p className="text-[12px] text-[#DDAA33] flex items-center pr-4">
              View full activity report <GoArrowRight color="#DDAA33" />
            </p>
          </div>
          <div className="p-2 text-[14px]">
            <div className="flex items-center text-[12px] md:text-[14px]">
              <hr className=" inline-block border-[1px] w-[80px] md:w-[150px]  border-[##D6D6D6]" />
              Tuesday (18th september 2019)
            </div>
            <p>You added a new client</p>
            <p className="ml-8 text-[#DEAB36]">Odusote Mayokun</p>
            <p className="ml-8 p-1 bg-[#fbf2df] text-gray-500 border-l-2 border-[#DEAB36] font-semibold text-[12px] w-fit">
              Status: Pending
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export const DueCard = () => {
  return (
    <>
      <main className="mt-12  text-gray-600">
        <div className="max-w-[400px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] pb-12">
          <div className="p-[4px] bg-[#DDAA33]"></div>
          <div className="flex justify-between bg-[#FBF6EB]">
            <p className="p-2 text-[14px] font-semibold">Task that are due</p>
            <p className="text-[12px] text-[#DDAA33] flex items-center pr-4">
              Create Task
              <GoArrowRight color="#DDAA33" className="ml-4" />
            </p>
          </div>
          <div className="p-2 md:p-4  bg-[#fbf2df] text-[12px]  m-6 rounded-md ">
            <p className="font-bold">
              Follow up with <span className="text-[#DDAA33]">Odusote</span>
            </p>
            <div className="">
              {" "}
              <span className="cursor-pointer">Due on: 1/21/2021</span>{" "}
              <span className="ml-6 cursor-pointer">Created On: 1/15/2021</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
