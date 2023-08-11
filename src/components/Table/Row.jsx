import { useNavigate } from 'react-router-dom';
import imgUrl from '/assets/external-link.svg';

import { formatDate } from '../../utils/date';
import { getId } from '../../utils/url';

const Row = ({ row }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        const id = getId(row?.url);
        if (id) navigate(`/planets/${id}`);
    };

    return (
        <tr>
            <th></th>
            <td>{row?.name}</td>
            <td>{row?.height}</td>
            <td>{row?.mass}</td>
            <td>{formatDate(row?.created)}</td>
            <td>{formatDate(row?.edited)}</td>
            <td>
                <a className='link link-hover'>{row?.url}</a>
            </td>
            <th>
                <button className="btn btn-square btn-sm p-1" onClick={handleNavigate}>
                    <img src={imgUrl} alt="external-link" title="external-link" className="object-contain" />
                </button>
            </th>
        </tr>
    );
};
export default Row;
