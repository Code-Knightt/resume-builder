import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/slices/ColorsSlice";


const Colors = () => {

    const colorss = useSelector((state) => state.colors);
    const [backGround, setBackGround] = useState(colorss)
    const dispatch = useDispatch();

    // console.log(colorss);

    useEffect(() => {
        dispatch(update(backGround));
      }, [backGround]);

    const colors = [
        'bg-orange-100',
        'bg-yellow-100',
        'bg-blue-100',
        'bg-red-100',
        'bg-lime-100',
        'bg-pink-100',
        'bg-white',
    ]


  return (
    <div className=' text-black dark:text-white absolute right-2 top-[40%] '>
        {colors.map((color) => (
      <div className={`rounded-full w-6 h-6 ${color} border-2 my-2 cursor-pointer`} onClick={() => setBackGround(color)} key={color}></div>
        ))}
    </div>
  )
}

export default Colors
