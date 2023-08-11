import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '../App';
import PlanetContainer from '../features/planet/PlanetContainer';

const router = createBrowserRouter([
    {
        path: '/people',
        element: <App />,
    },
    {
        path: '/planets/:id',
        element: <PlanetContainer />,
    },
    {
        path: '*',
        element: <Navigate to="/people" />,
    },
]);

export default router;
