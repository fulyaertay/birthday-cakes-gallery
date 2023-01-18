import React, {useState} from 'react';
import Images from '../Images';
import "../index.css";
import "../output.css";

function ShowCakes() {

const [selectedImg,setSelectedImg]=useState(Images[0]);

  return (
    <div className="App  bg-gray-200 flex w-full mx-auto m-5 p-10 justify-center items-center flex-col">
      <h1 className='text-2xl'>Happy Birthday!</h1>
      <div className="container w-full w-max-width-[540px] mx-auto m-5 justify-center border border-4">
        <img src={selectedImg} alt="Selected" className="selected mx-auto w-[400px] h-[400px] object-cover"/>
      </div>
      <div className="imgContainer flex justify-center w-70 h-auto grid grid-cols-3 gap-4 object-cover m-10 ">
        {Images.map((img,index) =>(
          <img key={index} src={img} alt='birthday-cake' className='w-[200px] h-[200px] block cursor-pointer border border-2'
          onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default ShowCakes;