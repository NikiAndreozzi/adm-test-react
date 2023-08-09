const PublicContainer = ({ children }) => {
    return (
        <section className="mx-auto container py-[2rem] h-screen w-screen">
            <h1 className="text-3xl font-bold underline">Welcome to the test webapp!</h1>

            {children}
        </section>
    );
};
export default PublicContainer;
