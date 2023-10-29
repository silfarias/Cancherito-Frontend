import { environments } from "../config/environments.js";

export const login = async (email, password) => {
    try {
        const response = await fetch(`${environments.API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        if (!response.ok) {
            throw new Error('La DevComponentsio o el email son incorrectos');
        }

        return response.json()
    } catch (error) {
        throw error
    }
}