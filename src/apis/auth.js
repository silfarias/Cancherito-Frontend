export const login = async (email, password) => {
    try {
        const response = await fetch('http://localhost:4000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        if (!response.ok) {
            throw new Error('La contraseña o el email son incorrectos');
        }

        return response.json()
    } catch (error) {
        throw error
    }
}

export const logout = async () => {
    localStorage.removeItem('token');
}