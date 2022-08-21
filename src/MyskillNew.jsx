import React from "react";
import SkillCard from "./SkillCard";
export default function MyskillNew() {
  return (
    <div>
      <div className="m-5 sm:m-20 bg-white rounded-xl   pl-4 pr-4 pb-14 mt-10 mb-10 space-y-5 ">
        <h1 className="text-center text-black text-4xl pt-14 pb-10 ">My Skills</h1>

        <div className="space-y-4 sm:flex sm:gap-6 sm:flex-wrap sm:justify-center sm:space-y-0 ">
          <SkillCard
            photo="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            skill="CSS"
          />

          <SkillCard
            photo="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            skill="Javascript"
          />

          <SkillCard
            photo="https://cdn.iconscout.com/icon/free/png-64/typescript-2336947-1982828.png"
            skill="TypeScript"
          />

          <SkillCard
            photo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXNGIRnOmuOakU1Ta-Z921qmmxGcS2EeS9bALqojcRvhfb6aBuhbfB6sSTon15LDW3HluWxcuMRuBmKXprDVW_clEP8pL19qgBtjO04qIpVLxcM6RkoBwf4BeQDp_Nsmy3g6vb4STdDBv_0RDWLMUPRfqXDMpL3EmDKXVLaLEaXw6iDDIV7VP6VDwj/s320/file-type-tailwind.512x307.png"
            skill="Tailwind CSS"
          />

          <SkillCard
            photo="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
            skill="React"
          />

          <SkillCard
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rwMSTN2sKZQivG64hnJH1C3dWwJ3MwT_Rg&usqp=CAU"
            skill="Redux"
          />

          <SkillCard
            photo="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            skill="Git & Github"
          />
        </div>
      </div>
    </div>
  );
}
