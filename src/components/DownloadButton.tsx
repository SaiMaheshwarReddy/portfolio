import { getFileUrl } from "@/utils/contentful";
import Link from "next/link";
import React from "react";

const RESUME_DOC = process.env.RESUME_DOC;

const DownloadButton = async () => {
  const url = await getFileUrl(RESUME_DOC || "");
  return (
    <Link
      href={url || ""}
      target="_blank"
      rel="noopener noreferrer"
      download="Sai_Maheshwar_Resume.pdf"
    >
      <button className="bg-primary text-white font-semibold py-3 px-6 rounded-sm focus:outline-none  hover:bg-primaryDark focus:ring-4 focus:ring-red-200 ">
        Download Resume
      </button>
    </Link>
  );
};

export default DownloadButton;
