import { useMemo } from 'react';
import { useGetPeopleQuery } from '../../services/people';

import Table from '../../components/Table/Table';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const PeopleContainer = () => {
    const { data, error, isLoading, refetch } = useGetPeopleQuery();

    const emptyResult = useMemo(() => {
        return !data || !data?.results || data?.results.length === 0;
    }, [data]);

    return (
        <section className="h-container w-full">
            {!emptyResult && !isLoading && (
                <h3>
                    Result (<span className="font-bold">{`${data.results.length}`}</span> people):
                </h3>
            )}

            {!emptyResult && !isLoading && <Table data={data.results} />}
            {error && !isLoading && <Error refetch={refetch} />}
            {isLoading && <Loader />}
        </section>
    );
};
export default PeopleContainer; 
