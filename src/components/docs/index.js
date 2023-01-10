import React from "react";

export const flattenData = async (data, exampleOnly = false) => {
  const flat = [];
  await Promise.all(
    data.map(async dt => {
      if (dt.meta) {
        const temp = exampleOnly && dt.example ? {
          id: dt.id,
          example: dt.example,
        } : {
          id: dt.id,
          title: dt.title,
          desc: dt.desc,
        }
        flat.push(temp);
        if (dt.meta.hasChild) {
          await Promise.all(
            dt.meta.child.map(dt2 => {
              const temp2 = exampleOnly && dt2.example ? {
                id: dt2.id,
                example: dt2.example,
              } : {
                id: dt2.id,
                title: dt2.title,
                desc: dt2.desc,
              }
              flat.push(temp2);
            })
          )
        }
      }
    })
  );
  return flat;
}

const DocsBody = ({ data }) => {
  const { id, title, desc } = data;
  return (
    <div className="p-4 min-h-[200px]" id={id}>
      <div className="text-2xl font-semibold mb-2">{title}</div>
      <div className="bg-slate-200 p-2 rounded-md text-sm">{desc}</div>
    </div>
  )
}

export default DocsBody