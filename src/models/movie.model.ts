export interface Movie {
    id: string;
    title: string;
    description: string;
    releaseDate: string; 
    duration: number;
    img: string; 
    backdropImg?: string;  
    genre: string[];      
    rating: number; 
    director?: string;     
    cast?: string[];       
    budget?: string;      
    trailerUrl?: string;  
    language?: string;     
    status?: string;      
}