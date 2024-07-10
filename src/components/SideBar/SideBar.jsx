import './SideBar.css'

function SideBar ({ children, modifire }) {
  return (
    <>
      <div className={`SideBar SideBar--${modifire}`}>
        <div className={`SideBar-container SideBar--${modifire}`}>
          {children && (children)}
        </div>
        <div className={`SideBar-cancelBar SideBar-cancelBar--${modifire}`} />
      </div>
    </>
  )
}

export default SideBar
