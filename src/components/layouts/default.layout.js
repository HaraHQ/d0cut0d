import React from "react";
import DocsBody from "../docs";
import ExampleDoc from "../docs/example";

import Navbar from "../navbar";
import Sidebar from "../sidebar";

const DefaultLayout = () => {
  return (
    <main className="grid grid-rows-[40px_minmax(900px,_1fr)_100px] min-h-screen">
      <div className="row-span-1 bg-red-500 min-w-screen">
        <Navbar />
      </div>
      <div className="row-span-5 grid grid-cols-12">
        <div className="col-span-2 bg-blue-200">
          <Sidebar />
        </div>
        <div className="col-span-5 bg-yellow-500">
          <DocsBody />
        </div>
        <div className="col-span-5 bg-slate-700">
          <ExampleDoc />
        </div>
      </div>
    </main>
  )
}

export default DefaultLayout