"use client";

import { children } from "@material-tailwind/react/types/components/accordion";
import { useState } from "react";

export const Slides = (props: { children: children[] }) => {
  const [selected, setSelcted] = useState(0);
  const leftClick = () => {
    if (selected <= 0) {
      setSelcted(props.children.length - 1);
    } else {
      setSelcted(selected - 1);
    }
  };
  const rightClick = () => {
    if (selected >= props.children.length - 1) {
      setSelcted(0);
    } else {
      setSelcted(selected + 1);
    }
  };
  const pointClick = (i: number) => {
    setSelcted(i);
  };
  return (
    <div className="relative duration-150">
      <button className="absolute left-1/4" onClick={leftClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 hover:-translate-x-1 duration-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </button>
      <button className="absolute right-1/4" onClick={rightClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 hover:translate-x-1 duration-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
      <div className="absolute top-10 bottom-0 left-0 right-0">
        {(function () {
          const list = [];
          for (let i = 0; i < props.children.length; i++) {
            if (i == selected) {
              list.push(
                <div className="p-2 bg-slate-400 rounded-full" key={i}></div>
              );
            } else {
              list.push(
                <button
                  className="p-2 bg-slate-200 rounded-full"
                  onClick={() => {
                    pointClick(i);
                  }}
                  key={i}
                ></button>
              );
            }
          }
          return (
            <div className="flex justify-center items-center gap-3">{list}</div>
          );
        })()}
      </div>
      <div className="flex justify-center items-centers w-screen">
        {props.children[selected]}
      </div>
    </div>
  );
};
