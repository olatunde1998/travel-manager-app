"use client";
import {
  AuthLayout,
  Button,
  HeaderCrumb,
  IconButton,
  TableMain,
} from "../components/index";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

export default function Home() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const router = useRouter();
  const handleCreateInvoice = () => {
    router.push("/payment/create-invoice");
  };
  const paymentTypes = [
    {
      id: 1,
      name: "Mayokun Odusote",
      item: "odusote@gmail.com",
      createDate: "08012345678",
      amount: "No 1, Opebi Road, Ikeja, Lagos",
      status: "Active",
    },
    {
      id: 2,
      name: "Mayokun Odusote",
      item: "mayokun@gmail.com",
      createDate: "08012345678",
      amount: "No 1, Opebi Road, Ikeja, Lagos",
      status: "Active",
    },
    {
      id: 3,
      name: "Mayokun Odusote",
      item: "odusote@gmail.com",
      createDate: "08012345678",
      amount: "No 1, Opebi Road, Ikeja, Lagos",
      status: "Pending",
    },
    {
      id: 4,
      name: "Mayokun Odusote",
      item: "mayokun@gmail.com",
      createDate: "08012345678",
      amount: "No 1, Opebi Road, Ikeja, Lagos",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Mayokun Odusote",
      item: "odusote@gmail.com",
      createDate: "08012345678",
      amount: "No 1, Opebi Road, Ikeja, Lagos",
      status: "Active",
    },
    {
      id: 6,
      name: "Mayokun Odusote",
      item: "mayokun@gmail.com",
      createDate: "08012345678",
      amount: "No 1, Opebi Road, Ikeja, Lagos",
      status: "Pending",
    },
  ];

  // create columnHelper
  const columnHelper = createColumnHelper();
  // Table columns
  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => <span className="p-6">{info.renderValue()}</span>,
      header: () => <span>Name</span>,
    }),

    columnHelper.accessor("item", {
      cell: (info) => <span>{info.renderValue()}</span>,
      header: () => <span>Item</span>,
    }),
    columnHelper.accessor("createDate", {
      cell: (info) => <span>{info.renderValue()}</span>,
      header: () => <span>Create Date</span>,
    }),
    columnHelper.accessor("amount", {
      cell: (info) => <span>{info.renderValue()}</span>,
      header: () => <span> Amount</span>,
    }),
    columnHelper.accessor("status", {
      header: () => "Status",
      cell: (info) => (
        <div
          className={`rounded-full w-[100px] text-center capitalize ${
            info.getValue().toLowerCase() === "active"
              ? "bg-[#39cd620f]"
              : "bg-[#5252520f]"
          }`}
        >
          {info.renderValue()}
        </div>
      ),
    }),
    columnHelper.accessor("view detail", {
      cell: ({ row }) => (
        <div className="relative">
          <div
            onClick={() => {
              setSelectedRow(row.original);
              setShowActions(!showActions);
            }}
            className="cursor-pointer"
          >
            <span className="text-lg font-bold">:</span>
          </div>
          {showActions && row?.original?.id === selectedRow?.id && (
            <div className="bg-white cursor-pointer shadow-shadowOne rounded-[.25rem] border border-[#213f7d0f] p-2 space-y-3 absolute z-[1] top-[36px] right-[20px] w-[140px]  md:p-3">
              <Link href="#">
                <span>View</span>
              </Link>
            </div>
          )}
        </div>
      ),
      header: () => <></>,
    }),
  ];

  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Payment" nextLink="" />
          <p className="my-2 text-gray-500">
            Here&apos;s the history of payments
          </p>

          <div>
            <div className="my-8 flex items-center justify-between">
              <div className="p-2 w-full">
                <input
                  type="text"
                  placeholder="Search by name, item ...."
                  className="w-full border-2 border-gray-200 p-2 rounded-md"
                />
              </div>
              <div onClick={handleCreateInvoice}>
                <IconButton
                  btnText="Create Invoice"
                  className="bg-[#DDAA33] justify-center flex text-white"
                  btnIcon={<BiPlus />}
                />
              </div>
            </div>
            <TableMain
              data={paymentTypes ? paymentTypes : []}
              columns={columns}
              tableClass=" font-medium text-small"
            />
          </div>
        </main>
      </AuthLayout>
    </>
  );
}
