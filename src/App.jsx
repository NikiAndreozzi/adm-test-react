import PublicContainer from './layouts/PublicLayout';
import PeopleContainer from './features/people/PeopleContainer';

const App = () => {
    return (
        <PublicContainer>
            <PeopleContainer />
        </PublicContainer>
    );
}

export default App;
