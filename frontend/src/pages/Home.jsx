import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import MembershipCard from '../components/MembershipCard';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="text-center py-10">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to N17 Fit</h1>
                <p className="mt-4 text-lg text-gray-600">Your premium fitness destination</p>
            </header>
            <AnimatedSection>
                <section className="py-10">
                    <h2 className="text-3xl font-semibold text-gray-800">Our Features</h2>
                    <ul className="mt-6 space-y-4">
                        <li className="text-lg text-gray-600">State-of-the-art equipment</li>
                        <li className="text-lg text-gray-600">Personalized training programs</li>
                        <li className="text-lg text-gray-600">Group classes and workshops</li>
                        <li className="text-lg text-gray-600">Nutrition and wellness guidance</li>
                    </ul>
                </section>
            </AnimatedSection>
            <AnimatedSection>
                <section className="py-10">
                    <h2 className="text-3xl font-semibold text-gray-800">Membership Plans</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        <MembershipCard planName="Basic" price="$29/month" duration="1 Month" />
                        <MembershipCard planName="Standard" price="$49/month" duration="3 Months" />
                        <MembershipCard planName="Premium" price="$99/month" duration="12 Months" />
                    </div>
                </section>
            </AnimatedSection>
            <footer className="py-10">
                <h2 className="text-3xl font-semibold text-gray-800">Join Us Today!</h2>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Sign Up Now
                </button>
            </footer>
        </div>
    );
};

export default Home;