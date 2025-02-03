import Link from "next/link";
import React from "react";

const NotFoundPages = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <p className="text-2xl font-bold">Not found</p>
        <Link href="/">Go back to home</Link>
      </div>
    </div>
  );
};

export default NotFoundPages;
