import React from "react";

export const flattenData = async (data) => {
  const flat = [];
  await Promise.all(
    data.map(async dt => {
      if (dt.meta) {
        flat.push({
          id: dt.id,
          title: dt.title,
          desc: dt.desc,
        });
        if (dt.meta.hasChild) {
          await Promise.all(
            dt.meta.child.map(dt2 => {
              flat.push({
                id: dt2.id,
                title: dt2.title,
                desc: dt2.desc,
              });
            })
          )
        }
      }
    })
  );
  return flat;
}

const DocsBody = () => {
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
  React.useEffect(async () => {
    const organizeData = await flattenData(data);
    setData(organizeData);
  }, []);
  return (
    <>
      {data.map(dt => {
        return (
          <div className="p-4" id={dt.id}>
            <div className="text-2xl font-semibold mb-2">{dt.title}</div>
            <div className="bg-slate-200 p-2 rounded-md text-sm">{dt.desc}</div>
          </div>
        )
      })}
    </>
  )
}

export default DocsBody