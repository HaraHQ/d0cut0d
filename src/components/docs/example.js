import React from "react";
import { flattenData } from ".";
import art from "../../content/article.yaml";

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

export const ExampleByCategory = ({ defaultCategory, category, stacks }) => {
  const data = {}
  stacks.map(stack => {
    data[stack.id] = stack.example;
  });
  return (
    <div>{data[category]}</div>
  )
}

const ExampleDoc = ({ doc }) => {
  const [data, setData] = React.useState([]);
  const [category, setCategory] = React.useState(false);
  const [exampleType, setExampleType] = React.useState([]);
  React.useEffect(() => {
    setExampleType(art.category);
    setData(doc);
  }, []);
  return (
    <div className="min-h-[200px]" id={`example_${data.id}`}>
      <div className="text-xs p-4">
        <NaviButton setup={setCategory} value={category} category={exampleType} />
      </div>
      {data.example ? (
        <div className="flex p-4 items-center w-full bg-black">
          {data.example.method ? (
            <div className="bg-pink-500 p-2 rounded-md mr-4 text-sm text-white">{data.example.method.toUpperCase()}</div>
          ) : false}
          {data.example.route ? (
            <div className="text-lg text-white">{data.example.route}</div>
          ) : false}
        </div>
      ) : false}
      <div className="p-4 text-white text-sm">
        {data.example && data.example.stacks ? (
          <ExampleByCategory defaultCategory={art.category[0]} category={category} stacks={data.example.stacks} />
        ) : false}
      </div>
    </div>
  )
}

export default ExampleDoc