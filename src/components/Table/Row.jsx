import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import imgUrl from '/assets/external-link.svg';

import { open } from '../../store/popupReducer';

import { formatDate } from '../../utils/date';
import { getId } from '../../utils/url';

const Row = ({ row }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const id = getId(row?.url);

    const handleNavigate = () => {
        if (id) navigate(`/planets/${id}`);
    };

    const handleOpenPopup = () => {
        if (id) {
            dispatch(open(+id));
        }
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
                <a className="link link-hover" onClick={handleOpenPopup}>
                    {row?.url}
                </a>
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
