import { useParams } from "react-router-dom";

export default function MovieDetails(){
    const{id} = useParams <{id: string}>();
    return(
        <div>
            <h1>Movie Details</h1>
            <p>Movie ID: {id}</p>
        </div>
    );
}