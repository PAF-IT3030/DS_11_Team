import React from "react";
import { statuses } from "../../constants/data";
import PostImageGallery from "./StatusImageGallery";
import { formatDistanceToNow, parseISO } from "date-fns";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

const Status = ({ status }) => {
  const deleteStatus = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:9191/status/${status.statusId}`
      );
      if (response.status === 200) {
        console.log("Status deleted successfully");
        window.location.reload();
      } else {
        console.error("Failed to delete the status:", response.data);
      }
    } catch (error) {
      console.error("Error deleting status:", error);
    }
  };

  const timeAgo = formatDistanceToNow(parseISO(status.time), { addSuffix: true });

  return (
    <div className="bg-white px-5 py-4 rounded-2xl drop-shadow gap-y-5">
      <div className="flex flex-col gap-y-3">
        {/* top */}
        <div className="flex gap-x-3">
          {/* image */}
          <div>
            <img
              className="rounded-full w-10 h-10"
              src={statuses[0].userImg}
              alt=""
            />
          </div>
          {/* owner details */}
          <div className="flex flex-col justify-center">
            <p className="font-medium">{status.userName}</p>
            <p className="text-xs text-gray-600">{timeAgo}</p>
          </div>
          {/* options */}
          <div className="flex flex-1 justify-end">
            <button
              className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-100"
              onClick={deleteStatus}
            >
              <IoMdClose size={20} />
            </button>
          </div>
        </div>
        {/* middle */}
        <div className="w-full">
          {/* content */}
          <div>
            <p className="text-sm">{status.content}</p>
          </div>
          {/* images */}
          {status.images.length !== 0 ? (
            <>
              <hr className="my-3" />
              <PostImageGallery images={status.images} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Status;
