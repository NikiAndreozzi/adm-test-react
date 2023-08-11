import { useSelector } from 'react-redux';

import PublicContainer from './layouts/PublicLayout';
import PeopleContainer from './features/people/PeopleContainer';
import Popup from './components/Popup';

const App = () => {
    const isOpen = useSelector((state) => state.popup.isOpen);

    return (
        <>
            {isOpen && <Popup />}
            <PublicContainer>
                <PeopleContainer />
            </PublicContainer>
        </>
    );
};

export default App;
