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
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Your Workspace" nextLink="" />
          <p className="my-4">Welcome, XXX</p>
          <div className="mt-16">
            <p className="font-bold mb-4">Overview</p>
            <AgendaCard />
            <ReportCard />
            <DueCard />
          </div>
        </main>
      </AuthLayout>
    </>
  );
}
