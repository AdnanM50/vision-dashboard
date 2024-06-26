import React from 'react'

const RegulerCard = (props) => {
    const { title, amount, percentage, icon } = props;

    return (
        <>
            <div className="shadow-2xl bg-gradient-to-t from-[#131941] to-[#0A0E23]  px-4 py-3 rounded-xl flex justify-between">
                <div className="flex justify-center flex-col">
                    <h1 className="gray-text">{title}</h1>
                    <h1 className="text-[20px] text-white">{amount} <span className='green-text'>{percentage}</span></h1>
                </div>
                <div className="flex items-center">
                    <span className=' '>{icon}</span>
                </div>
            </div>
        </>
    )
}

export default RegulerCard