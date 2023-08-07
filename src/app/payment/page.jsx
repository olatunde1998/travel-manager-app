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
import { BiPlus, BiSolidInbox } from "react-icons/bi";
import { SearchIcon } from "../../../assets/icons";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("All Status");
  const [selectedRow, setSelectedRow] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

  const router = useRouter();
  const handleSearchFilterChange = (event) => {
    setSearchFilter(event.target.value);
  };

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
      status: "Canceled",
    },
    {
      id: 5,
      name: "Adegoke Oluwadaire",
      item: "Registration Fee",
      createDate: "11/4/2021",
      amount: "N21,000",
      status: "Pending",
    },
  ];

  const filteredPaymentTypes =
    selectedTab === "All Status"
      ? paymentTypes
      : paymentTypes.filter(
          (payment) =>
            payment.status.toLowerCase() === selectedTab.toLowerCase()
        );

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
            <span className="text-lg font-bold">
              <PiDotsThreeVerticalBold className="font-bold text-black text-2xl" />
            </span>
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

  const filteredPaymentTypesData = filteredPaymentTypes?.filter((item) => {
    const searchQuery = searchFilter.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchQuery) ||
      item.item.toLowerCase().includes(searchQuery) ||
      item.createDate.toLowerCase().includes(searchQuery) ||
      item.amount.toLowerCase().includes(searchQuery) ||
      item.status.toLowerCase().includes(searchQuery)
    );
  });

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
              <div className="mb-2 md:p-2 md:w-full md:mb-0 md:pl-0 lg:mr-6">
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-3 pl-10 text-sm text-[#B2B6BA] border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#DDAA33] focus:border-[#DDAA33] dark:bg-[#FBFBFB] dark:border-[#B2B6BA] dark:placeholder-gray-400 dark:text-[#B2B6BA] dark:focus:ring-[#DDAA33] dark:focus:border-[#DDAA33]"
                    placeholder="Search item, name..."
                    required
                    onChange={handleSearchFilterChange}
                  />
                </div>
              </div>
              <div
                onClick={handleCreateInvoice}
                className="md:flex justify-end"
              >
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
            {filteredPaymentTypes.length > 0 ? (
              <TableMain
                data={filteredPaymentTypesData ? filteredPaymentTypesData : []}
                columns={columns}
                tableClass="font-medium text-small"
                filters={{
                  name: searchFilter,
                  item: searchFilter,
                  createDate: searchFilter,
                  amount: searchFilter,
                  status: searchFilter,
                }}
              />
            ) : (
              <p className="text-gray-500 flex justify-center items-center flex-col gap-6  mt-28">
                <BiSolidInbox className="text-6xl text-gray-400" />
                No payments found for the selected tab.
              </p>
            )}
          </div>
        </main>
      </AuthLayout>
    </>
  );
}
