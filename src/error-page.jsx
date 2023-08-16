import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();
    return (
        <div className="error">
            <div>
            <h1>404 Not found</h1>
        <div>
            {error.statusText || error.message}
        </div>
            </div>
        
        </div>
    )
}