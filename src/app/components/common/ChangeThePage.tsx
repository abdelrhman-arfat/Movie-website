import React, { memo } from "react";

const ChangeThePage = ({
  setPage,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="perv-next-div w-full flex justify-between ">
      <button
        key={"Pervious-page"}
        onClick={() => {
          setPage((p: number) => {
            if (p > 1) {
              return p - 1;
            }
            return p;
          });
        }}
      >
        pervious
      </button>
      <button
        key={"next-page"}
        onClick={() => {
          setPage((p: number) => p + 1);
        }}
      >
        next
      </button>
    </div>
  );
};

export default memo(ChangeThePage);
