export const MPCreateOrderRequest =  async(mpOrder) => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch('http://localhost:4000/mp/createOrder', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(mpOrder)
        })
        if (response.status !== 200) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: response.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: response.message,
                showConfirmButton: false,
                timer: 1500
            });
            const data = await response.json();
            return data
        }

    } catch (error) {
        console.log(error);  
    }
}