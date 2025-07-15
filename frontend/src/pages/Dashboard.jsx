import React, { useEffect, useState } from 'react';
import { fetchMemberships } from '../utils/api';
import MembershipCard from '../components/MembershipCard';

const Dashboard = () => {
    const [memberships, setMemberships] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMembershipsData = async () => {
            try {
                const data = await fetchMemberships();
                setMemberships(data);
            } catch (error) {
                console.error("Error fetching memberships:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMembershipsData();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4"> Management</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {memberships.map((membership) => (
                    <MembershipCard key={membership._id} membership={membership} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;