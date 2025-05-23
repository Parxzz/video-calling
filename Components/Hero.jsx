import React from 'react'

const Hero = () => {
  const [input, setInput] = React.useState('');
  const submitHandler = (e) => {
    if(input){
      window.location.href = `/room/${input}`;
    }
  }
  return (
<div className="bg-gray-50">


  <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
        <div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">Meet with your Family and Friends</h1>
            <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Start a free conference call with your friends, family and team members. no sign up required.</p>

           <div className="mt-8 sm:mt-10">
              <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                <input type="text" value={input}
                onChange={(e) => setInput(e.target.value)}
                name="" id="" placeholder="Enter your room ID" className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent" required="" />
                <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                  <button onClick={submitHandler} className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">Join Us Now</button>
                </div>
              </div>
            </div>
          </div>

          

            <div className="flex items-center">
              <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">$5M+</p>
              <p className="ml-3 text-sm text-gray-900 font-pj">Investment<br />Supported</p>
            </div>
          </div>
        </div>

        
      </div>
  </section>
  </div>
  )
}

export default Hero