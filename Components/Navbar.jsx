import React from "react";
import Link from "next/link";

const Header=()=> {
    return(
          <header className="pb-6 bg-white lg:pb-0" x-data="{expanded: false}">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    
    <nav className="flex items-center justify-between h-16 lg:h-20">
      <div className="flex-shrink-0">
        <a href="#" title="" className="flex">
          <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-black'>LOGO</div>
          <img className="w-auto h-8 lg:h-10" src="LOGO" alt="" />
        </a>
      </div>

      

      <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </a>

        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Brands Section </a>

        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Feedback </a>

        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Questioning </a>
      </div>

      <a href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started </a>
    </nav>
  </div>
</header>
    )
}
export default Header