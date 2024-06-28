import { Option } from "@/app/typings";
import React from "react";

interface IInfoBox {
  title?: string;
  option?: string;
  info?: Option;
  multipleOption?: boolean;
  otherOptions?: Option[];
}

const InfoBox = ({
  title,
  option,
  info,
  multipleOption,
  otherOptions,
}: IInfoBox) => {
  return (
    <div className="border border-gray-800 rounded-lg p-4 flex flex-col gap-4">
      <div>{`${title}: ${option}`}</div>
      <div className="text-xs text-gray-200">{info?.info}</div>

      {multipleOption ? (
        <div className="text-xs flex flex-col gap-4">
          <div>The other options are:</div>
          <ul>
            {otherOptions?.map((item) => (
              <li key={item.title}>{`• ${item.title}`}</li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InfoBox;
