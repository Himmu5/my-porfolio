import React from "react";

export default function MyProject({photo}) {
  return (
    <div className=" space-y-4 rounded-lg shadow-xl bg-white sm:space-y-0 sm:flex  sm:pl-5 sm:pr-5 sm:pt-10 sm:pb-10 ">
      <img
        src={photo}
        alt=""
        className="rounded-xl sm:w-1/2"
      />
      <div className="p-3 sm:pl-4 sm:pr-4 sm:pb-4 sm:pt-0 space-y-3 ">
        <h1 className="font-bold text-2xl">Creating responsive UI</h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nihil quos quisquam inventore ipsum. Est natus odit vero quo beatae dolorem adipisci minus consectetur velit voluptas inventore suscipit provident dolore aspernatur qui, ullam possimus reprehenderit earum error sint soluta eos? Quo ut veritatis, deleniti quas quidem consectetur explicabo rem sequi.
        </p>
      </div>
    </div>
  );
}


// "https://cdn.discordapp.com/attachments/1010741357431750817/1010741525732401233/Capture.JPG"