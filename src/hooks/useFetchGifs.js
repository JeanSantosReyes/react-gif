// un hook es una funcion que regresa algo
/* 
useEffect sirve para disparar efectos secundarios, o para que sea disparado una sola vez
Si dejo las dependencias vacias "[]" ejemplo: useEffect(() => {codigo}, []) significa que solo se dispara una vez
*/

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
        // eslint-disable-next-line
    }, []);

    // Todo Hook personalizado retorna algo
    return {
        images,
        isLoading
    }
}
