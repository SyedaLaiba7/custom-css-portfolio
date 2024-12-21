import "../style/Header.css";
import Link from "next/link";

export default function Header(){
    return(
        <div className="header">
            {/* left */}
            <div>
   <h1 className="logo">SYEDA</h1>
            </div>
            {/* right */}
            <div className="header-right-div">
         <ul className="header-links">
        <li>
        <Link className="nav-links" href={"/"}>Home</Link>
        </li>
         <li>
        <Link className="nav-links" href={"/about"}>About</Link>
       </li>
        <li>
        <Link className="nav-links" href={"/contact"}>Contact</Link>
        </li>
        </ul>
            </div>

        </div>
    )
}