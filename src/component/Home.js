import {Outlet} from "react-router-dom";
import Nav from "./Nav";

export default function Home() {
    return(
        <>
            <Nav></Nav>
            <hr/>
            <Outlet></Outlet>
        </>
    )
}