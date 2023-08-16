import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";

export default function index(){
    return (
        <>
          <Header cartCount={useLoaderData()}></Header>
        <div className="content">
      
        <Outlet>
         
        </Outlet>
        </div>
        </>
      );
}