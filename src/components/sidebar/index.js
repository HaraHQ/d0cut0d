import React from "react";

const Sidebar = () => {
  const [active, setActive] = React.useState(0);

  const ActiveMenu = ({data}) => {
    return (
      <>
        {data.map((x) => {
          return (<MenuItem
            key={x.id}
            id={x.id}
            active={active === x.id ? true : false}
            set={setActive}
            data={x} />)
        })}
      </>
    )
  }
  
  const MenuItem = ({ active = false, set, id, data }) => {
    const [isOpen, setOpen] = React.useState(active);
    const [meta,] = React.useState(data.meta);
  
    const handleOpenChildMenu = () => {
      setOpen(!isOpen);
      set(id);
    }

    const handleOpenChildLink = (childId) => {
      set(id);
      alert(childId);
    }
  
    if (meta.hasChild) {
      return (
        <div>
          <div onClick={handleOpenChildMenu} className="cursor-pointer hover:font-semibold">{isOpen ? '📪' : '📫'} {data.title}</div>
          {isOpen ? (
            <div>
              {meta.child.map(c => <div key={c} onClick={() => handleOpenChildLink(c.id)} className="ml-4 text-xs font-light cursor-pointer">▶️ {c.title}</div>)}
            </div>
          ) : false}
        </div>
      )
    }
    else {
      return (
        <div>
          <div onClick={handleOpenChildMenu} className="cursor-pointer hover:font-semibold">{isOpen ? '📪' : '📫'} {data.title}</div>
        </div>
      )
    }
  }

  return (
    <div className="p-4 overflow-hidden">
      <div className="text-sm text-black">
        <div>
          <ActiveMenu data={[
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
          ]} />
        </div>
      </div>
      <hr className="my-2" />
      <div className="text-sm font-semibold text-black">Created by HaraHQ</div>
    </div>
  )
}

export default Sidebar