import React from "react";
import { flattenData } from ".";

export const NaviButton = ({ category, setup, value }) => {
  return (
    <div className="inline-flex -space-x-0 divide-x divide-yellow-300 overflow-hidden rounded-lg border border-yellow-300 shadow-sm">
      {category.map(cat => {
        return (
          <button
            onClick={() => setup(cat)}
            type="button"
            className={`cursor-pointer ${cat === value ? 'bg-white' : 'bg-yellow-500'} px-4 py-2.5 text-center font-medium text-secondary-700 hover:bg-gray-100`}>{cat}</button>
        )
      })}
    </div>
  )
}

const ExampleDoc = () => {
  const [data, setData] = React.useState([
    {
      id: 1,
      title: "Bikin buku cerita",
      desc: `Mantap`,
      meta: {
        hasChild: false
      }
    },
    {
      id: 2,
      title: "Bikin buku karate",
      desc: `Mantap`,
      meta: {
        hasChild: true,
        child: [
          {
            id: 3,
            title: "Karate Chop",
            desc: `Mantap`
          },
          {
            id: 55,
            title: "Axe Kick",
            desc: `Mantap`
          },
        ]
      }
    },
  ]);
  const [category, setCategory] = React.useState(false);
  const [exampleType, setExampleType] = React.useState([]);
  React.useEffect(async () => {
    setExampleType(['JS','PHP','GO']);
    const organize = await flattenData(data);
    setData(organize);
  }, []);
  return (
    <>
      {data.map(dt => {
        return (
          <div>
            <div className="text-xs p-4">
              <NaviButton setup={setCategory} value={category} category={exampleType} />
            </div>
            <div className="flex p-4 items-center w-full bg-black">
              <div className="bg-pink-500 p-2 rounded-md mr-4 text-sm text-white">GET</div>
              <div className="text-lg text-white">https://example.com/api/blank</div>
            </div>
            <div className="p-4 text-white">
              example here
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ExampleDoc