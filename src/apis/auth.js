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

        const data = await response.json()

        localStorage.setItem('token', JSON.stringify(data.token))

    } catch (error) {
        throw error
        alert('La contraseña o el email son incorrectos')
    }
}

export const logout = async () => {
    localStorage.removeItem('token');
}