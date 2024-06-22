import { BASE_URL } from "./config"

export const getPokemons = async (limit) => {
    try {
        const res = await fetch(`${BASE_URL}/pokemon/?limit=${limit}`);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export const getPokemonsByType = async (type) => {
    try {
        const res = await fetch(`${BASE_URL}/type/${type}/`);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export const getPokemonDetails = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/pokemon/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
}