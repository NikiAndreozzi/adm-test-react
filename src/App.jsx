import { useGetPeopleQuery } from './services/people';

function App() {
    const { data, error, isLoading } = useGetPeopleQuery();
    return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
