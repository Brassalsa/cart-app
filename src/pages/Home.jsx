import { useNavigate } from "react-router-dom";
import LINKS from "../LINKS";

export default function Home(){
    const navigate = useNavigate();
    return (<>
    <div className="page home column">
     
       <button className="neon-button" onClick={
        () => setTimeout(() => navigate(LINKS.products), 300)
    }>
      Shop Now
    </button>
    <h3 className="text">Welcome to compromise.io Click here to get started</h3>
    </div>
    </>
    );
}