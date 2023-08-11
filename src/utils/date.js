import { format } from 'date-fns';

const formatDate = (date) => {
    const formattedDate = format(new Date(date), 'dd-MM-yyyy');

    return date ? formattedDate : '';
};

export { formatDate };
