import React from "react";

const ShowDescriptiveInfo = ({ label, value, isMultiple }) => {
  return (
    <div className="space-x-2 flex gap-2">
      {" "}
      <p className="font-semibold text-[18px] text-nowrap">{label}:</p>{" "}
      {!isMultiple ? (
        <p className="text-[14px] text-[18px] capitalize">{value}</p>
      ) : (
        <p className="text-[14px] text-[18px]">
          {value?.map((item, index) => (
            <span className="capitalize">
              {item}
              {index !== value.length - 1 && ","}{" "}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default ShowDescriptiveInfo;
