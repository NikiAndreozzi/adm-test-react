import App from '../App';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/people',
        element: <App />,
    },
    {
        path: '/planets/:id',
        element: <div>planets</div>,
    },
    {
        path: '*',
        element: <Navigate to="/people" />,
    },
]);

export default router;
