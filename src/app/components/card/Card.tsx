export const AgendaCard = () => {
  return (
    <>
      <main className="text-gray-600">
        <div className="max-w-[400px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="p-[4px] bg-[#DDAA33]"></div>
          <p className="p-2 bg-[#FBF6EB] font-semibold">Today&apos;s Agenda</p>
          <p></p>
          <p className="text-[12px] text-center py-16">
            You don&apos;t have any event schedule for today.{" "}
            <span className="cursor-pointer">Add</span>
          </p>
        </div>
      </main>
    </>
  );
};

export const ReportCard = () => {
  return (
    <>
      <main className="mt-8  text-gray-600">
        <div className="max-w-[400px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] pb-14">
          <div className="p-[4px] bg-[#DDAA33]"></div>
          <p className="p-2 bg-[#FBF6EB] font-semibold">Activity Report</p>
          <div className="p-2 text-[14px]">
            <p>------------------------Tuesday (18th september 2019)</p>
            <p>You added a new client</p>
            <p className="ml-8 text-[#DEAB36]">Odusote Mayokun</p>
            <p className="ml-8 p-1 bg-[#FBF6EB] w-fit">Status: Pending</p>
          </div>
        </div>
      </main>
    </>
  );
};

export const DueCard = () => {
  return (
    <>
      <main className="mt-8  text-gray-600">
        <div className="max-w-[400px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] pb-12">
          <div className="p-[4px] bg-[#DDAA33]"></div>
          <p className="p-2 bg-[#FBF6EB] font-semibold">Task that are due</p>
          <p></p>
          <div className="p-4 bg-[#FBF6EB] text-[12px]  m-6">
            <p className="font-bold">Follow up with <span className="text-[#DDAA33]">Odusote</span></p>
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
