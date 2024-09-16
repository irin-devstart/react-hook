import React, { FC, memo } from "react";
interface Props {
  nilai: number;
  page2: number;
}
const Page2: FC<Props> = ({ nilai, page2 }) => {
  console.log("Page 2");
  console.log("nilai ", nilai);

  return (
    <div>
      Page2<h6>{nilai}</h6>
      <h6>nilai props berubah{page2}</h6>
    </div>
  );
};

export default memo(Page2);
