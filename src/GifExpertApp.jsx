import { useState } from "react";
// importacion usando el archivo de barril
import { AddCategory, GifGrid } from './components';
// hOaIur9cGWbanR0slKy95scBB4l82efB

export const GifExpertApp = () => {

    const listInit = ['One Punch'];

    const [categories, setCategories] = useState(listInit);

    const onAddCategory = (newCategory) => {

        // Si existe el valor no insertar
        if (categories.includes(newCategory)) return;

        // setCategories(cat => [...cat, newCategory]);
        // Insertar de primero
        setCategories([newCategory, ...categories]);
        // Insertar de ultimo
        // setCategories([...categories, newCategory]);
    }

    return (
        <>
            <h1>GifExpertApp | Jean Santos ©</h1>

            {/* Componente para agregar categoria */}
            <AddCategory
                // Mandar la funcion SetCategories para Añadir categoria
                // setCategories={setCategories}
                // Recibir parametro a guardar
                // onNewCategory={onAddCategory}
                // o
                onNewCategory={(eRecibido) => onAddCategory(eRecibido)}
            />

            {/* Componente para listar categoria */}
            {
                /* UNA FORMA DE RECORRER OBJETO 
                categories.map(category => {
                    return (
                        <div key={category}>
                            <li>{category}</li>
                        </div>
                    )
                })
                */

                /* OTRA FORMA DE RECORRER OBJETO
                    categories.map(category => (
                        <div key={category}>
                            <li>{category}</li>
                        </div>
                    ))
                */

                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))

            }

        </>
    )
}
