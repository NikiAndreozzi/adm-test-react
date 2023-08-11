import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLazyGetPlanetsQuery } from '../../services/planets';

import Stat from '../../components/Stat';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const PlanetContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [getPlanet, { data: planet, isLoading, isError }] = useLazyGetPlanetsQuery();

    useEffect(() => {
        if (id) getPlanet(+id);
    }, [id]);

    const handleRefetch = () => {
        getPlanet(+id);
    };

    return (
        <section className="h-container w-full mx-auto container">
            <button className="btn btn-link" onClick={() => navigate(-1)}>
                &#8592; Go back
            </button>

            {planet && !isLoading && <Stat planet={planet} />}
            {isLoading && <Loader />}
            {isError && !isLoading && <Error refetch={handleRefetch} />}
        </section>
    );
};
export default PlanetContainer;
