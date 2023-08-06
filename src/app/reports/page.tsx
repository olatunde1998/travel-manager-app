"use client";

import { AuthLayout, HeaderCrumb } from "../components/index";

export default function Home() {
  const reportData = [
    {
      name: "Odusote Mayokun",
      dueDate: "Due on: 1/15/2021",
      createdOn: "Created on: 1/12/2021",
      date: "Due Today",
      email: "example@platform.com",
      phone: "+234(0)8160730668",
    },
    {
      name: "Odusote Mayokun",
      dueDate: "Due on: 1/15/2021",
      createdOn: "Created on: 1/12/2021",
      date: "Due in 4 days",
      email: "example@platform.com",
      phone: "+234(0)8160730668",
    },
    {
      name: "Odusote Mayokun",
      dueDate: "Due on: 1/15/2021",
      createdOn: "Created on: 1/12/2021",
      date: "Due in 7 days",
      email: "example@platform.com",
      phone: "+234(0)8160730668",
    },
  ];
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Task Reports" nextLink="" />
          <p className="my-2 text-gray-500">View all tasks reports</p>

          <div className="mt-4 md:mt-20">
            {reportData.map((data, index) => (
              <div key={index}>
                <div
                  key={index}
                  className={`leading-8 p-4 grid lg:grid-cols-3 gap-4 ${
                    index % 2 !== 0 ? "bg-white" : "bg-gray-200"
                  }`}
                >
                  <p className="col-span-1">
                    <span className="font-semibold">Follow up with</span>{" "}
                    <span className="text-[#DDAA33] ">{data.name}</span> <br />
                    <span className="text-gray-400">
                      {data.email}
                      <br />
                      {data.phone}
                    </span>
                  </p>
                  <p className="col-span-1 text-gray-400">
                    {data.dueDate} <br />
                    {data.createdOn}
                  </p>
                  <p
                    className={`col-span-1 text-right mr-4 ${
                      data.date === "Due in 7 days"
                        ? "text-yellow-500"
                        : "text-red-700"
                    } font-semibold`}
                  >
                    {data.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
         
        </main>
      </AuthLayout>
    </>
  );
}
