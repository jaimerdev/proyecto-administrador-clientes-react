import {useNavigate, Form, redirect} from "react-router-dom"
import { destroyClient } from "../data/clients";

export async function action({params}) {
    await destroyClient(params.clientID)
    return redirect('/')
}

function Client({client}) {
    const navigate = useNavigate();
    const {nombre, empresa, email, telefono, id} = client;
    return (
        <tr className="border-b">
            <td className='p-6 space-y-2'>
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className="p-6">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
            </td>
            <td className="p-6 flex gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clients/${id}/edit`)}
                >
                    Editar
                </button>
                <Form
                    method="POST"
                    action={`/clients/${id}/destroy`}
                    onSubmit={(e) => {
                        if(!confirm('¿Deseas eliminar este registro?')) {
                            e.preventDefault();
                        }
                    }}
                >
                    <button
                        type="submit"
                        className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                    >
                        Eliminar
                    </button>
                </Form>
                
            </td>
        </tr>
  )
}

export default Client