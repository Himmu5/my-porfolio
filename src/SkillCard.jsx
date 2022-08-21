import React from "react";

export default function SkillCard({photo,skill}) {
  return (
    <div>
      <div className="pl-4 pr-4 pt-2 pb-2 bg-blue-500 text-white flex gap-3 items-center sm:rounded-xl sm:pl-28 sm:pr-28 sm:pt-3 sm:pb-3 ">
        <img
          src={photo}
          className="rounded-md h-7"
          alt=""
        />
        <p className="">{skill}</p>
      </div>
    </div>
  );
}
