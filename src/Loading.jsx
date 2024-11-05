import React from 'react'
import { RingLoader } from 'react-spinners';



export const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        height: "100vh",
      }}
    >
      <RingLoader size={90}color='white'/>{" "}
    </div>
  );
}
