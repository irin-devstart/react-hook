import React, { memo } from "react";

const Page1 = () => {
  const data = [...new Array(9795500)];
  console.log("Page 1");
  console.log(data);

  const counter = data.map((val, key) => key + 2 * 5);
  const value = counter.reduce((val, newVal) => val + newVal);

  console.log(value);

  return (
    <div style={{ display: "flex" }}>
      <h6>{value}</h6>
    </div>
  );
};

//untuk mengingat value, jika render di parent, halaman ini tidak terender
export default memo(Page1);
// export default Page1;
