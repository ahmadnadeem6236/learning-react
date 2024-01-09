/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Btns() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="flex justify-center items-end w-full h-screen"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col justify-center w-fit h-20 px-10 py-4 mb-4 flex-wrap rounded-md shadow-md bg-zinc-800 space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <button
            type="button"
            onClick={() => setColor("black")}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Black
          </button>
          <button
            type="button"
            onClick={() => setColor("yellow")}
            className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Yellow
          </button>
          <button
            type="button"
            onClick={() => setColor("red")}
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Red
          </button>
          <button
            type="button"
            onClick={() => setColor("green")}
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Green
          </button>
        </div>
      </div>
    </>
  );
}

export default Btns;
