import { useState } from "react";
import axios from "axios";


function FormReview({ movieId }) {
    const defaultValue = { name: "", text: "", vote: 1 };
    const [formData, setFormData] = useState(defaultValue);
    console.log(movieId)

    function setField(e) {
        let _formData = { ...formData };
        _formData[e.target.name] = e.target.value;
        setFormData(_formData);
    }
    const url = `http://localhost:3000/api/movies/${movieId}/reviews`;
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        axios.post(url, formData).then(res => {
            console.log("caricato");
        }).catch(err => {
            console.error("ops... C'è stato un errore!", err.message);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h5>autore</h5>
                <input type="text" name="name" placeholder="Inserisci il tuo nome" value={formData.name} onChange={setField} />
            </div>
            <div>
                <h5>Voto</h5>
                <input type="number" min={1} max={5} name="vote" value={formData.vote} onChange={setField} />
            </div>
            <div>
                <h5>Testo</h5>
                <textarea name="text" placeholder="Scrivi qui la tua recensione" value={formData.text} onChange={setField}></textarea>
            </div>
            <div>
                <button type="submit">Inserisci</button>
            </div>
        </form>
    )
}
export default FormReview