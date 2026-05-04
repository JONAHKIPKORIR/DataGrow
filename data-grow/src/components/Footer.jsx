import React from 'react'

const Footer = () => {
    return (
        <section className='bg-white '>
            <div className="grid md: grid-cols-2 flex flex-row">
                <div>
                    <h1 className='w-full text-5xl md:text-6xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-bold'>DataGrow.</h1>
                    <ul className='flex flex-col'>
                        <li className='p-4'>Home</li>

                        <li className='p-4'>Resources</li>

                        <li className='p-4'>About</li>

                        <li className='p-4'>Contact</li>

                    </ul>

                </div>

                <div>
                    <h1 className='w-full text-5xl md:text-6xl font-bold'>Solutions</h1>
                    <ul className='md:flex'>
                        <li className='p-4'>Home</li>

                        <li className='p-4'>Resources</li>

                        <li className='p-4'>About</li>

                        <li className='p-4'>Contact</li>

                    </ul>

                    <h1 className='w-full text-2xl md:text-4xl font-bold'>Solutions</h1>
                    <ul className='md:flex'>
                        <li className='p-4'>Home</li>

                        <li className='p-4'>Resources</li>

                        <li className='p-4'>About</li>

                        <li className='p-4'>Contact</li>

                    </ul>
                    <h1 className='w-full text-5xl md:text-6xl font-bold'>Solutions</h1>
                    <ul className='md:flex'>
                        <li className='p-4'>Home</li>

                        <li className='p-4'>Resources</li>

                        <li className='p-4'>About</li>

                        <li className='p-4'>Contact</li>

                    </ul>
                </div>


            </div>

        </section>
    )
}

export default Footer