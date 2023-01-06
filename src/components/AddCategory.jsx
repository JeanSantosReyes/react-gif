import { useState } from 'react'

// Recibe la funcion setCategories
// export const AddCategory = ({ setCategories }) => {
// Emite el valor a añadir
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        // Cambiar el valor cada que se teclea algo
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // evitar que se recarge el navegador al dar enter
        event.preventDefault();

        //Para guardar al menos debe tener un caracter
        if (inputValue.trim().length <= 1) return;

        // Guardar en la lista, a traves de la props recibida
        // setCategories(categories => [inputValue, ...categories]);

        // Limpiar input
        setInputValue('');

        // Mandar el valor o emitir valor al componente padre
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
