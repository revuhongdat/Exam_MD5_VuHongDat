import {Link, NavLink} from "react-router-dom";

export default function Nav() {
    return(
        <>
            <Link className="btn btn-primary ml-2 mt-2" to={'list'}>Tất cả blog</Link>
            <Link className="btn btn-primary ml-2 mt-2" to={'create'}>Tạo blog</Link>
        </>
    )
}