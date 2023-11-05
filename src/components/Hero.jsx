import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] ">
      <img src="https://images.unsplash.com/flagged/photo-1557804521-990f076ccb96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnJvbW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="/"
      className="w-full h-full object-cover" />
      <div className="max-w-[1140px] m-auto ">
        <div className="absolute top-[45%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
        <h1 className="font-bold font-sans text-4xl">Tentukan Perjalanan Terbaikmu</h1>
        <h2 className="text-4xl py-4 italic">Bersama Weekaway</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, 
          temporibus repellat delectus excepturi quas eos beatae voluptatibus
           officiis expedita tempora nihil minus? Modi explicabo quidem veniam
            pariatur quod corrupti
          architecto.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

