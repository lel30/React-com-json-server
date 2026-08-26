import { useState } from "react";

function FormTarefa({ onAdicionar }) {
    const [titulo, setTítulo] = useState("");

    function enviar(event) {
        event.preventDefault();

        const tituloLipo = titulo.trim();

        if (!tituloLipo) {
            return;
        }

        onAdicionar(tituloLipo);
        setTítulo("");
    }

    return (
        <form className="forulario" onSubit= {enviar}>
            <input
             type="text"
             placeholder="Digite uma tarefa"
             value={titulo}
             onChange={(event) => setTítulo(event.target.value)}
             />

             <button type="subit">Adicionar</button>
        </form>
    );
}


export default FormTarefa;