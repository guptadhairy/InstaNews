import { useEffect, useState } from 'react';
import TrendCard from '../components/TrendCard';

const Home = () => {
    const [trends, setTrends] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTrends = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:5000/api/trends');
            if (!response.ok) {
                throw new Error('Failed to fetch trends');
            }
            const data = await response.json();
            setTrends(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTrends();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-6">Trending News</h1>
            <button
                onClick={fetchTrends}
                className="mb-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
                Refresh News
            </button>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trends.map((trend, index) => (
                    <TrendCard key={index} trend={trend} />
                ))}
            </div>
        </div>
    );
};

export default Home;