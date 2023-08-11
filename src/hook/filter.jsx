import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useFilterHook = ({ data }) => {
    const searchName = useSelector((state) => state.filter.name);

    const result = useMemo(() => {
        if (searchName && data && data.length > 0) {
            const search = data.map((d) => {
                if (d?.name.replace(/\s/g, '').toLowerCase().includes(searchName.replace(/\s/g, '').toLowerCase())) return d;
            });

            return search.filter((s) => s);
        }

        return data;
    }, [data, searchName]);

    return {
        result,
    };
};

export default useFilterHook;
