"use client";
import {
  AgendaCard,
  AuthLayout,
  DueCard,
  HeaderCrumb,
  ReportCard,
} from "../components/index";

export default function Home() {
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 px-6 md:p-8">
          <HeaderCrumb prevLink="Your Workspace" nextLink="" />
          <p className="my-4 text-gray-500 text-[12px] md:text-[18px]">Welcome, XXX</p>
          <div className="mt-16">
            <p className="font-bold mb-4">Overview</p>
            <div className="md:grid grid-cols-2 gap-4">
              <div className="">
                <AgendaCard />
                <DueCard />
              </div>
              <div>
                <ReportCard />
              </div>
            </div>
          </div>
        </main>
      </AuthLayout>
    </>
  );
}
