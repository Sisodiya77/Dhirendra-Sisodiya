import React from "react";

export default function Project(props) {
  return (
    <>
     <div className="w-full bg-violet-800 mt-14 flex justify-center items-center flex-col">
        <div className="md:w-8/12 text-center text-white font3 md:p-24 font-bold">
          <div>
            <p className="text-lg md:text-2xl p-2">Hi, I’m Dhirendra. Nice to meet you. </p>
          </div>
          <div>
            <p className="text-sm md:text-lg p-2">
              I am a Web Developer looking to secure a role as an Frontend
              Developer. While I have no real time experience in this field and
              am a dedicated individual and a keen learner. My enjoyment in
              learning new technologies used in websites will help me excel in
              your company.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute w-full -z-50 bg-violet-800 h-56"></div>
    <div className="flex justify-center flex-col my-12 md:my-24 w-full md:w-9/12 m-auto rounded-lg bg-white sh">
      <p className="font2 text-center text-2xl">My Recent Work</p>
      <p className="font3 p-4 text-center">Here are a few past design projects I've worked on. </p>
      <div className="grid grid-auto justify-items-center pb-12">
        <div className="md:w-9/12 w-6/12 h-9/12 overflow-hidden rounded-lg mt-4">
          <a href="https://sisodiya77.github.io/Ichiraku-Ramen/">
            <img className="hover:scale-105 ease-in duration-300" src={props.Ichiraku} alt="Loading..." />
            <p className="text-center font3 p-2">Ichiraku Ramen</p>
          </a>
        </div>
        <div className="md:w-9/12 w-6/12 h-9/12 overflow-hidden rounded-lg mt-4">
          <a href="https://sisodiya77.github.io/TextEditor/">
            <img className="hover:scale-105 ease-in duration-300" src={props.Text} alt="Loading..." />
            <p className="text-center font3 p-2">Text Editor</p>
          </a>
        </div>
        <div className="md:w-9/12 w-6/12 h-9/12 overflow-hidden rounded-lg mt-4">
          <a href="https://sisodiya77.github.io/Royal-Enfield-Clone/">
            <img className="hover:scale-105 ease-in duration-300" src={props.Royal} alt="Loading..." />
            <p className="text-center font3 p-2">Royal Enfield Clone</p>
          </a>
        </div>
      </div>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Martian+Mono:wght@500&display=swap');
      .font2{
        font-family: 'Martian Mono', monospace;
      }
      .sh{
        box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
      }
      .grid-auto{
        grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
      }
      `}</style>
    </div>
      </>
  );
}
