import { useMemo } from 'react';
import { useGetPeopleQuery } from '../../services/people';

import Table from '../../components/Table/Table';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import useFilterHook from '../../hook/filter';

const PeopleContainer = () => {
    const { data, error, isLoading, refetch } = useGetPeopleQuery();
    const { result } = useFilterHook({ data: data?.results });

    const emptyResult = useMemo(() => {
        return !result || result.length === 0;
    }, [data]);

    const handleRefetch = () => {
        refetch();
    };

    return (
        <section className="h-container w-full">
            {!emptyResult && !isLoading && (
                <h3>
                    Result (<span className="font-bold">{`${result.length}`}</span> people):
                </h3>
            )}

            {!emptyResult && !isLoading && <Table data={result} />}
            {error && !isLoading && <Error refetch={handleRefetch} />}
            {isLoading && <Loader />}
        </section>
    );
};
export default PeopleContainer;
