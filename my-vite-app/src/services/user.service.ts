import type { User } from "../models/user.model";

const USERS_URL = "../../data/users.json"; 

export async function getUsers(): Promise<User[]>{
    const response = await fetch(USERS_URL);

    if (!response.ok) {
        throw new Error(
        `No se pudo cargar users.json (status ${response.status})`,
        );
    }
    const data = await response.json();
    console.log("Usuarios cargadas:", data);
    return data as User[];
}

export async function getUsersById(id: string): Promise<User | null>{
    const users = await getUsers();

    const found = users.find((m) => String (m.id) === String (id));

    return found ?? null;

}