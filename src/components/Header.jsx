import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
            <nav>
                <Link to="/" style={{padding: 10}}>Home</Link>
                <Link to="/potions" style={{padding: 10}}>Potions</Link>
                {/* <Link to="/spells" style={{padding: 10}}>Spells</Link> */}
            </nav>
        </>
    )
}