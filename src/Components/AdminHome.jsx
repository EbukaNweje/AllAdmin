import {Outlet} from "react-router-dom";


const AdminHome = () => {
  return (
    <>
      <div>
        <h1>Hello Admin</h1>
        <Outlet />
      </div>
    </>
  )
}

export default AdminHome