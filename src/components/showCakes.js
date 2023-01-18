import React, {useState} from 'react';
import Images from '../Images';
import "../index.css";
import "../output.css";

function ShowCakes() {

const [selectedImg,setSelectedImg]=useState(Images[0]);

  return (
    <div className="App  bg-gray-200 flex w-full mx-auto m-5 p-10 justify-center items-center flex-col">
      <h1 className='font-extrabold text-transparent md:text-4xl sm:text-sm bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Happy Birthday!❤️</h1>
      <div className="container w-full w-max-width-[540px] mx-auto m-5 justify-center">
        <img src={selectedImg} alt="Selected" className="selected mx-auto md:w-[400px] rounded md:h-[400px] sm:w-[200px] md:h-[200px] object-cover"/>
      </div>
      <div className="imgContainer flex justify-center w-70 h-auto grid grid-cols-3 md:gap-4 sm:gap-2 m-10 ">
        {Images.map((img,index) =>(
          <img key={index} src={img} alt='birthday-cake' className='md:w-[200px] md:h-[200px] sm:w-[50px] sm:h-[50px] md:block md:cursor-pointer object-cover  border border-2'
          onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default ShowCakes;