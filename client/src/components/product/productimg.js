import React, { useState,useEffect } from 'react'


const Productimg = ({productDetailsData}) => {
    console.log(productDetailsData,"productDetailsData MNP")

    const [images, setImages] = useState({
        img1 : "http://localhost:3000/static/media/intermediate.23788ee2676dfdb033ef.jpg",
        img2 : "http://localhost:3000/static/media/basic.c6fb1d1adda9a5ab0f9a.jpg",
        img3 : "http://localhost:3000/static/media/advanced.78c6d61b3dd3db5aa528.jpg",
        img4 : "http://localhost:3000/static/media/iot_basic.718bd36aaf7612cd0c5c.png",
       
    })

    useEffect(()=>{
       setImages({
           img1 : "http://localhost:3000/static/media/intermediate.23788ee2676dfdb033ef.jpg",
           img2 : productDetailsData?.photo,
           img3 : "http://localhost:3000/static/media/advanced.78c6d61b3dd3db5aa528.jpg",
           img4 : "http://localhost:3000/static/media/iot_basic.718bd36aaf7612cd0c5c.png",

       })
    },[productDetailsData])
    const [activeImg, setActiveImage] = useState(images.img1)




    return (
        <>
       

       <div className='flex flex-col justify-between lg:flex-row'>
            <div className='flex flex-col gap-6'>
                <img src={activeImg} alt="bv" height={300} width={300} className='w-full h-full aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                <img src={images.img1} alt="hbdfd" height={70} width={70} className='w-10 h-10 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                <img src={images.img2} alt="sd" height={70} width={70} className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                <img src={images.img1} alt="wd" height={70} width={70} className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                <img src={images.img3} alt="wwd" height={70} width={70} className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Productimg

