const Error = ({ refetch }) => {
    return (
        <div className="flex flex-col items-center space-y-8">
            <p className="text-xl font-bold">Error in retrieving data</p>
            <button className="btn btn-outline btn-primary" onClick={refetch}>
                try again
            </button>
        </div>
    );
};
export default Error;
