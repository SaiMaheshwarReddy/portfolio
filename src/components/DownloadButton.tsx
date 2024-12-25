"use client";
import React from "react";

const RESUME_DOC_LINK = process.env.RESUME_DOC_LINK;

const DownloadButton = () => {
  const download = () => {
    const link = document.createElement("a");
    link.href = RESUME_DOC_LINK || "";
    link.download = "Resume.pdf"; // Optional: Set the file name for the download
    link.click();
  };
  return (
    <button
      onClick={download}
      className="bg-primary text-white font-semibold py-3 px-6 rounded-sm focus:outline-none  hover:bg-primaryDark focus:ring-4 focus:ring-red-200 "
    >
      Download Resume
    </button>
  );
};

export default DownloadButton;
