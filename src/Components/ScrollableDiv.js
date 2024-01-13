import React from 'react';

const ScrollableDiv = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="overflow-y-scroll h-full w-full border  p-8">
                {/* Add your elements here */}

                <div className='bg-white h-48 w-full rounded-3xl my-4'>
                    <div className='flex flex-row h-12 border w-full bg-blue-200 px-6 items-center justify-between'>
                        <div className='flex items-center'>
                            <h1 className='font-bold text-xl'>12148 -</h1>
                            <p className='pl-2 font-extrabold text-xl'>MGR CHENNAI CENTRAL - AHMEDABAD SF Express</p>
                        </div>

                        <div className='flex items-center'>
                            <h1 className='underline'>View Route</h1>
                            <p className='pl-2 font-bold text-md'>Runs on</p>
                            <p className='pl-2 font-bold text-md'>M T W T F S S</p>

                        </div>


                    </div>
                    <div className='flex flex-col h-36 w-full bg-red-200 rounded-b-3xl  '>
                        <div className='h-3/4 w-full flex flex-row justify-between px-8 items-center bg-green-600'>
                            
                            <h1 className='text-4xl font-bold'>Pune</h1>
                            <h1 className='text-4xl font-bold'>---8h---</h1>
                            <h1 className='text-4xl font-bold'>Mumbai</h1>
                        </div>
                        <div className='h-1/4 w-full flex flex-row justify-between px-8 items-center pb-12 bg-green-600'>
                            <h1 className='text-2xl '>11:26</h1>
                            <h1 className='text-2xl '>01:12</h1>
                        </div>

                    </div>

                </div>



                <div className='bg-white h-48 w-full rounded-2xl my-4'>

                </div>
                <div className='bg-white h-48 w-full rounded-2xl my-4'>

                </div>
                <div className='bg-white h-48 w-full rounded-2xl my-4'>

                </div>

                {/* ... */}
            </div>
        </div>
    );
};

export default ScrollableDiv;
