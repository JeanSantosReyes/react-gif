import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";



export const GifGrid = ({ category }) => {

    // eslint-disable-next-line
    const { images, isLoading } = useFetchGifs(category);

    /* SE UTILIZARA UN CUSTOM HOOK PARA QUE SEA REUTILIZABLE
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    };

    useEffect(() => {
        getImages();
        // eslint-disable-next-line
    }, []);
    */

    return (
        <>
            <h1>{'Categoria: ' + category}</h1>

            {
                // isLoading ? (<h2>Cargando...</h2>) : null;
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        // <li key={id}>{title}</li>
                        <GifItem
                            key={image.id}
                            // title={image.title}
                            // url={image.url}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
