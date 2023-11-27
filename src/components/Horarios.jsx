import CustomModal from './modal/Modal.jsx';

function Modal() {
    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
}


const BotonReserva = ({ hora }) => {
    return (
        <button
            className="btn"
        >
            {hora}
        </button>
    )
}

export const Horarios = ({ cantcanchas }) => {

    function vectorHoras(num) {
        const arrayUnaCancha = [
            ["18:00 a 19:00"],
            ["19:00 a 20:00"],
            ["20:00 a 21:00"],
            ["21:00 a 22:00"],
            ["22:00 a 23:00"]
        ]
        const arrayDosCanchas = [
            ["18:00 a 19:00", "18:00 a 19:00"],
            ["19:00 a 20:00", "19:00 a 20:00"],
            ["20:00 a 21:00", "20:00 a 21:00"],
            ["21:00 a 22:00", "21:00 a 22:00"],
            ["22:00 a 23:00", "22:00 a 23:00"]
        ]
        const arrayTresCanchas = [
            ["18:00 a 19:00", "18:00 a 19:00", "18:00 a 19:00"],
            ["19:00 a 20:00", "19:00 a 20:00", "19:00 a 20:00"],
            ["20:00 a 21:00", "20:00 a 21:00", "20:00 a 21:00"],
            ["21:00 a 22:00", "21:00 a 22:00", "21:00 a 22:00"],
            ["22:00 a 23:00", "22:00 a 23:00", "22:00 a 23:00"]
        ]
        const arrayCuatroCanchas = [
            ["18:00 a 19:00", "18:00 a 19:00", "18:00 a 19:00", "18:00 a 19:00"],
            ["19:00 a 20:00", "19:00 a 20:00", "19:00 a 20:00", "19:00 a 20:00"],
            ["20:00 a 21:00", "20:00 a 21:00", "20:00 a 21:00", "20:00 a 21:00"],
            ["21:00 a 22:00", "21:00 a 22:00", "21:00 a 22:00", "21:00 a 22:00"],
            ["22:00 a 23:00", "22:00 a 23:00", "22:00 a 23:00", "22:00 a 23:00"]
        ]
        if (num == 1) {
            return arrayUnaCancha
        } else if (num == 2) {
            return arrayDosCanchas
        } else if (num == 3) {
            return arrayTresCanchas
        } else {
            return arrayCuatroCanchas
        }
    }
    const arrayHorarios = vectorHoras(cantcanchas);

    return (
        <div>
            <h5>Turnos disponibles</h5>
            <table className="table" id="tabla">
                <thead>
                    <tr>
                        {
                            arrayHorarios[0].map((_, index) => (
                                <th key={index} scope="col">{`Cancha ${index + 1}`}</th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>

                    {

                        arrayHorarios.map((fila) => (

                            <tr>
                                {fila.map((horario) => (

                                    <td>
                                        <BotonReserva hora={horario} />
                                    </td>
                                ))}

                            </tr>
                        ))
                    }



                </tbody>
            </table>
        </div>

    );
};