"use client";
import {
  AuthLayout,
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
  const [selectedTab, setSelectedTab] = useState("All Status");
  const [selectedRow, setSelectedRow] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const router = useRouter();
  const handleCreateInvoice = () => {
    router.push("/payment/create-invoice");
  };
  const paymentTypes = [
    {
      id: 1,
      name: "Adegoke Oluwadaire",
      item: "Registration Fee",
      createDate: "11/4/2021",
      amount: "N21,000",
      status: "Pending",
    },
    {
      id: 2,
      name: "Adegoke Oluwadaire",
      item: "Consultation Fee",
      createDate: "11/4/2021",
      amount: "N21,000",
      status: "Paid",
    },
    {
      id: 3,
      name: "Adegoke Oluwadaire",
      item: "Registration Fee",
      createDate: "11/4/2021",
      amount: "N21,000",
      status: "Draft",
    },
    {
      id: 4,
      name: "Adegoke Oluwadaire",
      item: "Consultation Fee",
      createDate: "11/4/2021",
      amount: "N21,000",
      status: "Rejected",
    },
    {
      id: 5,
      name: "Adegoke Oluwadaire",
      item: "Consultation Fee",
      createDate: "11/4/2021",
      amount: "N21,000",
      status: "Canceled",
    },
    {
      id: 6,
      name: "Adegoke Oluwadaire",
      item: "Registration Fee",
      createDate: "11/4/2021",
      amount: "N21,000",
      status: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "#74DE66";
      case "rejected":
        return "#D18382";
      case "draft":
        return "#A3A3A3";
      case "canceled":
        return "b#595959";
        case "pending":
        return "#EACB85";
      default:
        return "black"; // Default color for unknown status
    }
  };

  // create columnHelper
  const columnHelper = createColumnHelper();
  // Table columns
  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => <span className="pl-4">{info.renderValue()}</span>,
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
          className={`rounded-md w-[100px] p-2 text-center capitalize ${
            info.getValue().toLowerCase() === "pending"
              ? "bg-[#FBF6EB] text-[#EACB85] "
              : "bg-[#5252520f]"
          }`}
          style={{ color: getStatusColor(info.getValue()) }}
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
            <div className="my-8 lg:flex items-center justify-between">
              <div className="mb-2 md:p-2 md:w-full md:mb-0">
                <input
                  type="text"
                  placeholder="Search by name, item ...."
                  className="w-full border-2 border-gray-200 p-2 rounded-md"
                />
              </div>
              <div onClick={handleCreateInvoice}  className="md:flex justify-end">
                <IconButton
                  btnText="Create Invoice"
                  className="bg-[#DDAA33] justify-center flex text-white"
                  btnIcon={<BiPlus />}
                />
              </div>
            </div>
            {/* tabs */}
            <div className="border-b-[1.3px] border-gray-300 mb-4 overflow-auto ">
              <div className="flex justify-between md:w-[700px] text-sm md:text-base">
                <div
                  className={`px-3 cursor-pointer  text-gray-400 p-[2px] md:p-4 ${
                    selectedTab === "All Status" &&
                    "bg-[#DDAA33] w-fit rounded-sm text-center p-[6px] md:p-4 text-white"
                  }`}
                  onClick={() => {
                    setSelectedTab("All Status");
                  }}
                >
                  All Status
                </div>
                <div
                  className={`px-3 cursor-pointer p-4 text-gray-400 ${
                    selectedTab === "Draft" &&
                    "bg-[#DDAA33] w-fit rounded-sm text-center p-4 text-white"
                  }`}
                  onClick={() => {
                    setSelectedTab("Draft");
                  }}
                >
                  Draft
                </div>
                <div
                  className={`px-3 cursor-pointer p-4 text-gray-400 ${
                    selectedTab === "Pending" &&
                    "bg-[#DDAA33] w-fit rounded-sm text-center p-4 text-white"
                  }`}
                  onClick={() => {
                    setSelectedTab("Pending");
                  }}
                >
                  Pending
                </div>
                <div
                  className={`px-3 cursor-pointer p-4 text-gray-400 ${
                    selectedTab === "Paid" &&
                    "bg-[#DDAA33] w-fit rounded-sm text-center p-4 text-white"
                  }`}
                  onClick={() => {
                    setSelectedTab("Paid");
                  }}
                >
                  Paid
                </div>
                <div
                  className={`px-3 cursor-pointer p-4 text-gray-400 ${
                    selectedTab === "Rejected" &&
                    "bg-[#DDAA33] w-fit rounded-sm text-center p-4 text-white"
                  }`}
                  onClick={() => {
                    setSelectedTab("Rejected");
                  }}
                >
                  Rejected
                </div>
                <div
                  className={`px-3 cursor-pointer p-4 text-gray-400 ${
                    selectedTab === "Canceled" &&
                    "bg-[#DDAA33] w-fit rounded-sm text-center p-4 text-white"
                  }`}
                  onClick={() => {
                    setSelectedTab("Canceled");
                  }}
                >
                  Canceled
                </div>
              </div>
            </div>
            {selectedTab === "All Status" && (
              <TableMain
                data={paymentTypes ? paymentTypes : []}
                columns={columns}
                tableClass=" font-medium text-small"
              />
            )}
            
          </div>
        </main>
      </AuthLayout>
    </>
  );
}
