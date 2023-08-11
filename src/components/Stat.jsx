const Stat = ({ planet }) => {
    const { name, diameter, climate, population } = planet;
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
            <div className="stat">
                <div className="stat-title">Name</div>
                <div className="stat-value">{name ?? '-'}</div>
            </div>

            <div className="stat">
                <div className="stat-title">Diameter</div>
                <div className="stat-value">{diameter ?? '-'}</div>
            </div>

            <div className="stat">
                <div className="stat-title">Climate</div>
                <div className="stat-value">{climate ?? '-'}</div>
            </div>

            <div className="stat">
                <div className="stat-title">Population</div>
                <div className="stat-value">{population ?? '-'}</div>
            </div>
        </div>
    );
};
export default Stat;
