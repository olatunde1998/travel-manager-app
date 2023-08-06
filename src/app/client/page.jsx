"use client";
import { useState } from "react";
import {
  AuthLayout,
  Button,
  HeaderCrumb,
  TableMain,
} from "../components/index";
import { createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const handleAddNewClient = () => {
    router.push("/client/add-client");
  };
  const paymentTypes = [
    {
      name: "Mayokun Odusote",
      email: "odusote@gmail.com",
      phone: "08012345678",
      address: "No 1, Opebi Road, Ikeja, Lagos",
    },
    {
      name: "Mayokun Odusote",
      email: "mayokun@gmail.com",
      phone: "08012345678",
      address: "No 1, Opebi Road, Ikeja, Lagos",
    },
    {
      name: "Mayokun Odusote",
      email: "odusote@gmail.com",
      phone: "08012345678",
      address: "No 1, Opebi Road, Ikeja, Lagos",
    },
    {
      name: "Mayokun Odusote",
      email: "mayokun@gmail.com",
      phone: "08012345678",
      address: "No 1, Opebi Road, Ikeja, Lagos",
    },
    {
      name: "Mayokun Odusote",
      email: "odusote@gmail.com",
      phone: "08012345678",
      address: "No 1, Opebi Road, Ikeja, Lagos",
    },
    {
      name: "Mayokun Odusote",
      email: "mayokun@gmail.com",
      phone: "08012345678",
      address: "No 1, Opebi Road, Ikeja, Lagos",
    },
  ];

  // create columnHelper
  const columnHelper = createColumnHelper();
  // Table columns
  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => (
        <Link href="/client/client-profile" className="xl:p-4">
          {" "}
          <span className="px-2 xl:p-4">{info.renderValue()}</span>
        </Link>
      ),
      header: () => <span>Name</span>,
    }),

    columnHelper.accessor("email", {
      cell: (info) => (
        <Link href="/client/client-profile" className=" xl:p-4">
          {" "}
          <span className="px-2 xl:p-4">{info.renderValue()}</span>
        </Link>
      ),
      header: () => <span>Email</span>,
    }),
    columnHelper.accessor("phone", {
      cell: (info) => (
        <Link href="/client/client-profile" className="xl:p-4">
          {" "}
          <span className="px-2 xl:p-4">{info.renderValue()}</span>
        </Link>
      ),
      header: () => <span>Phone</span>,
    }),
    columnHelper.accessor("address", {
      cell: (info) => (
        <Link href="/client/client-profile" className=" xl:p-4">
          {" "}
          <span className="px- xl:p-4">{info.renderValue()}</span>
        </Link>
      ),
      header: () => <span>Residential Address</span>,
    }),
  ];

  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Client" nextLink="" />
          <p className="my-4">Here&apos;s the clients list</p>

          <div className="my-8 flex items-center justify-between">
            <div className="p-2 w-full">
              <input
                type="text"
                placeholder="Search by name, email ...."
                className="w-full border-2 border-gray-200 p-2 rounded-md"
              />
            </div>
            <div onClick={handleAddNewClient}>
              <Button
                btnText="Add new Client"
                className="bg-[#DDAA33] justify-center flex text-white"
              />
            </div>
          </div>
          <TableMain
            data={paymentTypes ? paymentTypes : []}
            columns={columns}
            tableClass=" font-medium text-small"
          />
        </main>
      </AuthLayout>
    </>
  );
}
