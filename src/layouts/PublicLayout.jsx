const PublicContainer = ({ children }) => {
    return (
        <section className="mx-auto container py-[2rem] h-screen w-screen overflow-hidden">
            <h1 className="text-5xl font-bold">Welcome to the test webapp!</h1>

            <div className="mt-12">{children}</div>
        </section>
    );
};
export default PublicContainer;
