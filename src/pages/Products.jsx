import Card from "../components/Card";
import './style/style.css';
import {useLoaderData, useNavigate, useNavigation} from "react-router-dom"
import Loader from '../components/Loader';
import LINKS from "../LINKS";

export default function Products(){
    const navigate = useNavigate();
    const {products, loading} = useLoaderData(); 
    const navigation = useNavigation();
    
    if(loading){
        return <Loader></Loader>
    }

    return <div className={`products page 
    ${navigation.state === "loading" ? "loader" : ""}
    `} >
        <h1>Shop</h1>
        {products.map(item => {
            return <Card {...item} key={item.id} onClick={
                () => {
                navigate(`${LINKS.products}${item.id}`);
            }
        }></Card>
        }) 
        || Error('Not Found')
        }
        </div>
}