import { Outlet } from "react-router-dom"
import { NavBar } from "../../components/NavBar/NavBar.jsx"

export const Layout = () => {
    return (
     <>
     <NavBar/>
     <Outlet/>

     </>
    )
}
