import { useParams } from "react-router-dom";

export const ArtistComponent = () => {
    const { id } = useParams()

    return(
        <>{id}</>
    )
};

export default ArtistComponent;