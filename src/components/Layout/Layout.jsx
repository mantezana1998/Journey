import { Outlet } from 'react-router-dom'

export default function Layout(){
    return(
    <>
        <header>This is the header</header>
        <Outlet />
        <footer>This is the footer</footer>
    </>
    )
}