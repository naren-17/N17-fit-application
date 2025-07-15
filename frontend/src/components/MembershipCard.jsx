import React from 'react';

const MembershipCard = ({ membership }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{membership.planName}</div>
                <p className="text-gray-700 text-base">
                    Price: ${membership.price}
                </p>
                <p className="text-gray-700 text-base">
                    Duration: {membership.duration} months
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Join Now
                </button>
            </div>
        </div>
    );
};

export default MembershipCard;