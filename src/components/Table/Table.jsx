import React, { useId } from 'react';
import Row from './Row';

const Table = ({ data }) => {
    const id = useId();

    return (
        <div className="overflow-x-auto h-table">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
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
