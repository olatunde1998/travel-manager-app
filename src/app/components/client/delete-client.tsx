"use client";
interface deleteProps {
  deleteClientID?: string;
  clientDetails?: any;
  setShowDeleteClient?: any;
}
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { DeleteClientApi } from "@/app/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const successNotifying = () => {
  toast.success("Client Deleted Successfully", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
const errorNotifying = () => {
  toast.error("Client deleting  failed", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const DeleteClient = ({
  setShowDeleteClient,
  clientDetails,
  deleteClientID,
}: deleteProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const navigateToClientHome = () => {
    router.push("/client");
  };

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(DeleteClientApi, {
    onError: (error) => {
      errorNotifying();
      console.log(error);
    },
    onSuccess: async (data) => {
      const response = data;
      successNotifying();
      setShowDeleteClient(false);
      navigateToClientHome();
      await queryClient.invalidateQueries(["getClientsApi"]);
    },
    retry: 0,
  });

  const onSubmitHandler = () => {
    mutate({ data: {}, _id: deleteClientID });
    setIsDeleting(true)
  };

  return (
    <>
      <div className="bg-white p-8 rounded-[0.63rem] -z-50 lg:w-[70%] mx-auto">
        <div className="flex justify-end mb-3">
          <span
            className="cursor-pointer  font-bold"
            onClick={() => {
              setShowDeleteClient(false);
            }}
          >
            <GrFormClose size={30} />
          </span>
        </div>

        <h2 className="text-xl mb-2 text-[#D92D20]">Delete Client</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.
        </p>

        <p className="text-sm mt-8">
          Do you really want to delete{" "}
          <span className="text-[#D92D20]">{clientDetails?.fullName}</span> If
          you proceed, this cannot be reversed
        </p>
        {/* buttons */}
        <div className="mt-12">
          <button
            type="button"
            className={
              "bg-[#D92D20] rounded-[8px] text-white px-[28px] cursor-pointer py-[12px]  text-center  w-full"
            }
            onClick={onSubmitHandler}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>

          <div
            className="rounded-[8px] px-[28px] py-[12px] cursor-pointer text-center text-[#D92D20] w-full"
            onClick={() => setShowDeleteClient(false)}
          >
            Close
          </div>
        </div>
      </div>
    </>
  );
};
