import React, { useDeferredValue, useEffect, useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterName } from '../../store/filterReducer';
import Row from './Row';

const Table = ({ data }) => {
    const dispatch = useDispatch();

    const [searchName, setSearchName] = useState('');
    const id = useId();
    const deferredSearch = useDeferredValue(searchName);

    const performSearch = (search) => {
        dispatch(filterName(search));
    };
    useEffect(() => {
        performSearch(deferredSearch);
    }, [deferredSearch]);

    return (
        <div className="overflow-x-auto h-table">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th className="space-x-4 pr-12">
                            <span>Name</span>{' '}
                            <input
                                type="text"
                                placeholder="Filter by name:"
                                className="input input-bordered input-sm w-full max-w-xs"
                                onChange={(e) => setSearchName(e.target.value)}
                            />
                        </th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Created</th>
                        <th>Edited</th>
                        <th>Planet</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <Row row={row} key={`${id}-${row?.name}`} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Table;
