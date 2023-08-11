import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLazyGetPlanetsQuery } from '../services/planets';
import { close } from '../store/popupReducer';
import Loader from './Loader';
import Error from './Error';
import Stat from './Stat';

const Popup = () => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.popup.id);

    const [getPlanet, { data: planet, isLoading, isError }] = useLazyGetPlanetsQuery();

    useEffect(() => {
        if (id) getPlanet(id);
    }, [id]);

    useEffect(() => {
        window.planet_modal.showModal();
    }, []);

    const handleRefetch = () => {
        getPlanet(id);
    };

    return (
        <dialog id="planet_modal" className="modal">
            <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 focus:outline-none" onClick={() => dispatch(close())}>
                    ✕
                </button>
                <div className="mt-8">
                    {planet && !isLoading && <Stat planet={planet} />}
                    {isLoading && <Loader />}
                    {isError && !isLoading && <Error refetch={handleRefetch} />}
                </div>
            </form>
        </dialog>
    );
};
export default Popup;
