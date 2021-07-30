import React from 'react';


function App() {
  return (
    <div className="container px-4 py-10 mx-auto">    
      <div className="bg-gray-100 border p-2">

          <div className="flex flex-row-reverse text-black">
              <div class="relative">
                  <div class="absolute flex border border-transparent left-0 top-0 h-full w-10">
                      <div className="flex items-center  rounded-tl rounded-bl z-0 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      </div>
                      <input type="search" className="mx-2 my-1 px-10 py-1 text-gray bg-white font-semibold focus:outline-none focus:text-gray-900 focus:bg-gray-300" placeholder="Search Tags"  />
              </div>    
              </div>
          
          <div className="block rounded-md text-black bg-gray-300 mx-2 my-2 p-2">
            <div className="flex flex-wrap">
                <dl>
                  <dd className="flex-auto text-sm font-semibold mb-1 mt-1">Mango</dd>
                  <dd className="flex-auto text-sm">Date: 26/05/2014</dd>        
                </dl>
                <div className="flex-auto mt-3  space-x-2  text-right">
                  <input type="text" className="rounded text-black font-semibold px-7 py-1 mb-2" placeholder="Placeholder"/>
                  <button className=" rounded text-gray-200  bg-green-900 font-semibold  px-5 py-2 text-sm">Add Tag</button>
                </div>
            </div>  
            
          </div>
      <li className="block rounded-md text-black  bg-gray-300 mx-2 my-2 p-6">2</li>
      <li className="block rounded-md text-black p-6">4</li>
      <li className="block rounded-md text-black p-6">5</li>
      <li className="block rounded-md text-black p-6">6</li>
      <li className="block rounded-md text-black p-6">7</li>
     
    </div>
    </div>
    
  );
}

export default App;



