import React from 'react'

const page = () => {
  return (
    <>
<div className="grid lg:grid-cols-4 gap-6">
    <div className="bg-[#060B26] bg-opacity-95 p-5 rounded-2xl">1</div>
    <div className="bg-[#060B26] bg-opacity-95 p-5 rounded-2xl">2</div>
    <div className="bg-[#060B26] bg-opacity-95 p-5 rounded-2xl">3</div>
    <div className="bg-[#060B26] bg-opacity-95 p-5 rounded-2xl">4</div>
</div>
<div className="grid grid-cols-5 gap-5 my-7">
    <div className="col-span-2  p-9 rounded-2xl bg-gradient-to-t from-[#060B28] to-[#0A0E23]">8</div>
    <div className="bg-[#060B26] p-5 rounded-2xl">8</div>
    <div className="col-span-2 bg-[#060B26] p-5 rounded-2xl">6</div>
</div>

<div className="lg:flex gap-5 my-7 w-full">
    <div className="basis-[55%] p-9 rounded-2xl bg-gradient-to-t from-[#060B28] to-[#0A0E23]">8</div>
    <div className="bg-[#060B26] basis-[45%] p-5 rounded-2xl">8</div>
</div>
<div className="lg:flex gap-5 my-7 w-full">
    <div className="basis-[60%] p-9 rounded-2xl bg-gradient-to-t from-[#060B28] to-[#0A0E23]">8</div>
    <div className="bg-[#060B26] basis-[40%] p-5 rounded-2xl">8</div>
</div>
    </>
  )
}

export default page