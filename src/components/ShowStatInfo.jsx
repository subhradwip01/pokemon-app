import React from "react";

const ShowStatInfo = ({ label, value }) => {
  return (
    <div className="space-y-1 w-full">
      <p className="font-semibold text-[18px] text-nowrap capitalize">
        {label}:
      </p>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          class={`${value > 100 ? " bg-red-600 " :' bg-blue-600 '} h-2.5 rounded-full`}
          style={{ width: `${Math.min(value, 100)}%` }}
          title={`value:${value}`}
        ></div>
      </div>
    </div>
  );
};

export default ShowStatInfo;
