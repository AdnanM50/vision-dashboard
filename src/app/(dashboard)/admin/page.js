import RegulerCard from '@/components/common/card/regulerCard'
import React from 'react'
import { FaFileAlt, FaHome } from 'react-icons/fa'
import { AiOutlineGlobal } from "react-icons/ai";
import { IoCartSharp } from 'react-icons/io5';
import { Progress } from 'antd';
import dynamic from "next/dynamic";
import CardTable from '@/components/common/table/cardTable.js';
import Table from '@/components/common/table/table.js';
import ProjectTable from '@/components/common/table/table.js';
import ProjectsTable from '@/components/common/table/table.js';
// import Areachart from '@/components/common/chart/areaChart';
const Areachart = dynamic(
  () => import("../../../components/common/chart/areaChart.js"),
  {
    ssr: false,
  }
);
const Barchart = dynamic(
  () => import("../../../components/common/chart/barchart.js"),
  {
    ssr: false,
  }
);


const page = () => {

  // const columns = [
  //   {
  //     text: "product_name",
  //     dataField: "product_name",
     
  //   },
  //   {
  //     text: "withdraw date",
  //     dataField: "withdraw_date",
     
  //   },
  //   {
  //     text: "customer name",
  //     dataField: "customer_name",
      
  //   },
  //   {
  //     text: "Amount",
  //     dataField: "amount",
    
  //   },
  //   {
  //     text: "Account Details",
  //     dataField: "payment_method",
      
  //   },
  
  // ];
  // const data = [
  //   {
  //     product_name: "Ninja Turtles",
  //     withdraw_date: "2023-05-01",
  //     customer_name: "John Doe",
  //     amount: "$100",
  //     payment_method: "Credit Card",
  //   },
  //   {
  //     product_name: "Harry Potter",
  //     withdraw_date: "2023-05-02",
  //     customer_name: "Jane Smith",
  //     amount: "$200",
  //     payment_method: "PayPal",
  //   },
  //   {
  //     product_name: "Superman",
  //     withdraw_date: "2023-05-03",
  //     customer_name: "Bob Johnson",
  //     amount: "$300",
  //     payment_method: "Bank Transfer",
  //   },
  // ];


  const projectsData = [
    {
        company: "Chakra Soft UI Version",
        members: [{ avatar: "path_to_avatar1.png" }, { avatar: "path_to_avatar2.png" }],
        budget: "$14,000",
        completion: 40
    },
    {
        company: "Add Progress Track",
        members: [{ avatar: "path_to_avatar1.png" }, { avatar: "path_to_avatar2.png" }],
        budget: "$3,000",
        completion: 10
    },
    {
        company: "Fix Platform Errors",
        members: [{ avatar: "path_to_avatar1.png" }, { avatar: "path_to_avatar2.png" }],
        budget: "Not set",
        completion: 100
    },
    {
        company: "Launch our Mobile App",
        members: [{ avatar: "path_to_avatar1.png" }, { avatar: "path_to_avatar2.png" }],
        budget: "$32,000",
        completion: 100
    },
    {
        company: "Add the New Pricing Page",
        members: [{ avatar: "path_to_avatar1.png" }, { avatar: "path_to_avatar2.png" }],
        budget: "$400",
        completion: 25
    },
    {
        company: "Redesign New Online Shop",
        members: [{ avatar: "path_to_avatar1.png" }, { avatar: "path_to_avatar2.png" }],
        budget: "$7,600",
        completion: 40
    },
];
  return (
    <>
<div className="grid lg:grid-cols-4 gap-6">
    
    <RegulerCard title='Today Money' amount='$2,300' percentage='+55%' icon={<FaHome size={35} color="white" className='p-2 bg-bgicon rounded-xl' />} />
      <RegulerCard title='Today users' amount='2,300' percentage='+55%' icon={<AiOutlineGlobal size={35} color="white" className='p-2 bg-bgicon rounded-xl' />} /> 
    <RegulerCard title='New client' amount='2,300' percentage='+55%' icon={<FaFileAlt size={35} color="white" className='p-2 bg-bgicon rounded-xl' />} />
    <RegulerCard title='Email' amount='2,300' percentage='+55%' icon={<IoCartSharp size={35} color="white" className='p-2 bg-bgicon rounded-xl' />} />
</div>
<div className="grid lg:grid-cols-11 gap-5 my-7">
    <div className="col-span-4  p-9 rounded-2xl bg-gradient-to-t from-[#060B28] to-[#0A0E23]">
      {/* <video src="/videos/jellyfish.mp4" autoPlay className='w-full h-full' />
      <h1>Admin Introduction</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam, id lacinia nunc nunc auctor erat. Sed euismod, mauris id luctus tincidunt, velit nunc tincidunt nunc, nec lacinia nunc nunc auctor erat.</p> */}
       {/* <video width="320" height="240" autoPlay >
      <source src="/videos/jellyfish1.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video> */}
    </div>
    <div className="bg-[#060B26] col-span-4 lg:col-span-3 p-5 rounded-2xl ">
    <div className="flex justify-center items-center">
    {/* <Progress type="dashboard" percent={100} gapDegree={50} /> */}
    </div>
    </div>
    <div className="col-span-4 bg-[#060B26] p-5 rounded-2xl">6</div>
</div>

<div className="lg:flex gap-5 my-7 w-full">
    <div className="basis-[57%]">
      <Areachart/>
    </div>
    <div className="bg-[#060b26bb] basis-[43%] p-3 rounded-2xl">
      <Barchart/>
    </div>
</div>
<div className="lg:flex gap-5 my-7 w-full">
    <div className="basis-[60%] p-9 rounded-2xl bg-gradient-to-t from-[#060B28] to-[#0A0E23]">
    {/* <CardTable/> */}
    {/* <Table 
    pagination={false}
    columns={columns}
    data={data}
    /> */}
    {/* <ProjectTable /> */}
    {/* <ProjectsTable projects={projectsData} /> */}
    </div>
    <div className="bg-[#060B26] basis-[40%] p-5 rounded-2xl">8</div>
</div>
    </>
  )
}

export default page