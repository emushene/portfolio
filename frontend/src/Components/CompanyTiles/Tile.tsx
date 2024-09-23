import React from "react";

type Props = {
  title: string;
  subTitle: string;
};

const Tile = ({ title, subTitle }: Props) => {
  return (
    <div className=" border p-4 flex w-full lg:w-6/12 xl:w-3/12 px-4">
      <div className="relative flex border min-w-0 break-words  bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-fit pr-4 max-w-full flex-grow  flex-1">
              <h5 className="text-gray-700 uppercase font-bold text-sm">
                {title}
              </h5>

              <span className="text-sm text-yellow-800">{subTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
