import { useGetPeopleQuery } from '../../services/people';

const PeopleContainer = () => {
    const { data, error, isLoading } = useGetPeopleQuery();

    return <section>PeopleContainer</section>;
};
export default PeopleContainer;
