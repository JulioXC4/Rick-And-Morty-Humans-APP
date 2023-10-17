export interface Character {
    id: string;
    name: string;
    species: string;
    status: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Origin;
    image: string;
  }
  
  export interface Origin {
    name: string;
  }
export interface Characters {
    characters: Character[];
  }