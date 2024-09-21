import React from "react";

export const ClBoxCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-green-600 text-white p-6 rounded-md text-lg font-normal min-h-[160px] flex justify-center items-center">
      {children}
    </div>
  );
};
