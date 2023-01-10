import React from "react";
import DocsBody, { flattenData } from "../docs";
import ExampleDoc from "../docs/example";

import Navbar from "../navbar";
import Sidebar from "../sidebar";

import art from "../../content/article.yaml";

const DefaultLayout = () => {
  const [data, setData] = React.useState([]);
  const [example, setExample] = React.useState([]);
  React.useEffect(async () => {
    const organizeData = await flattenData(art.articles);
    const organizeExample = await flattenData(art.articles, true);
    setData(organizeData);
    setExample(organizeExample);
  }, []);
  return (
    <main className="bg-slate-800 grid grid-rows-[40px_minmax(900px,_1fr)_100px] min-h-screen relative">
      <div className="row-span-1 bg-red-500 w-screen fixed z-50">
        <Navbar />
      </div>
      <div className="row-span-5 grid grid-cols-12 mt-10 relative">
        <div className="col-span-2 bg-blue-200 h-screen w-[250px] fixed z-40">
          <Sidebar />
        </div>
        <div className={`col-span-12 ml-[250px] z-10`}>
          {data.map(dt => {
            return (
              <div className="grid grid-cols-2 border-b-2 border-dashed" id={`tod_${dt.id}`}>
                <div className="bg-yellow-500">
                  <DocsBody data={dt} />
                </div>
                <div className="bg-slate-600">
                  <ExampleDoc doc={example.find(f => f.id === dt.id)} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default DefaultLayout