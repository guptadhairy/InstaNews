const TrendCard = ({ trend }) => {
    return (
        <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-bold">{trend.title}</h2>
            <a href={trend.link} className="text-blue-500 hover:underline">Read more</a>
            <p className="mt-2 text-gray-700">Summary: {trend.summary}</p>
            <p className={`mt-1 font-semibold ${trend.sentiment === 'positive' ? 'text-green-500' : trend.sentiment === 'negative' ? 'text-red-500' : 'text-yellow-500'}`}>
                Sentiment: {trend.sentiment}
            </p>
        </div>
    );
};

export default TrendCard;