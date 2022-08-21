import React from "react";

export default function Myskills() {
  return (
    <div className="m-5 bg-gray-200  pl-4 pr-4 pb-5 mt-10 mb-10 space-y-5 ">


      <h1 className="text-center text-black text-4xl pt-5">My Skills</h1>

      <div class="flex flex-col gap-3 flex-wrap justify-center sm:flex-row sm:gap-10">
          <div className="pl-4 pr-4 pt-2 pb-2 bg-blue-500 text-white flex gap-3 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              className="rounded-md h-8"
              alt=""
            />
            <p className="">CSS</p>
          </div>
        <div className="flex gap-3 items-center pl-4 pr-4 pt-2 pb-2 bg-blue-500 text-white">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            className="h-8 rounded-md"
            alt=""
          />
          <p>Javascript</p>
        </div>
        <div className="flex gap-3 items-center pl-4 pr-4 pt-2 pb-2 bg-blue-500 text-white">
          <img
            src="https://cdn.iconscout.com/icon/free/png-64/typescript-2336947-1982828.png"
            className="h-8 rounded-md"
            alt=""
          />
          <p>TypeScript</p>
        </div>
        <div className="flex gap-3 items-center pl-4 pr-4 pt-3 pb-3 bg-blue-500 text-white">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXNGIRnOmuOakU1Ta-Z921qmmxGcS2EeS9bALqojcRvhfb6aBuhbfB6sSTon15LDW3HluWxcuMRuBmKXprDVW_clEP8pL19qgBtjO04qIpVLxcM6RkoBwf4BeQDp_Nsmy3g6vb4STdDBv_0RDWLMUPRfqXDMpL3EmDKXVLaLEaXw6iDDIV7VP6VDwj/s320/file-type-tailwind.512x307.png"
            alt=""
            className="h-6 rounded-xl"
          />
          <p>Tailwind CSS</p>
        </div>

        <div className="flex gap-3 items-center pl-4 pr-4 pt-2 pb-2 bg-blue-500 text-white">
          <img
            src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
            className="h-8 rounded-lg"
            alt=""
          />
          <p>React Js</p>
        </div>
        <div className="flex gap-3 items-center pl-4 pr-4 pt-2 pb-2 bg-blue-500 text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rwMSTN2sKZQivG64hnJH1C3dWwJ3MwT_Rg&usqp=CAU"
            className="h-8 roudned-lg"
            alt=""
          />
          <p className="">Redux</p>
        </div>

        <div className="flex gap-3 items-center pl-4 pr-4 pt-2 pb-2 bg-blue-500 text-white">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="h-8 rounded-lg" alt="" />
          <p >
            Git & Github
          </p>
        </div>
      </div>
    </div>
  );
}
