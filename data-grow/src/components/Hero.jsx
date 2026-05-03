import React from 'react'
import { ReactTyped } from "react-typed";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";



const Hero = () => {
    return (
        <div className="container mx-auto px-6 py-20 text-center">
            <div className="max-w-3xl mx-auto">

                <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
                    Turn Your Data Into
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {" "}
                        <ReactTyped
                            strings={[
                                "Business Growth",
                            ]}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                        ></ReactTyped>
                    </span>

                </h1>

                <p className="text-xl text-slate-600 mb-8">
                    DataGrow helps businesses unlock powerful insights, track real-time metrics,
                    and scale with confidence using smart data analytics.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-8">
                    <p className="text-blue-800 font-medium">
                        Join 10+ businesses already growing with DataGrow
                    </p>
                </div>

                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg text-lg font-semibold">
                    Start Growing Free → 
                </button>

            </div>
        </div>
    )
}

export default Hero