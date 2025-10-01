import React from 'react';
import { useSelector } from 'react-redux';
import MemberCard from './MemberCard';
import TaskForm from './TaskForm';
import StatusChart from './StatusChart';

const TeamLeadView = () => {
    const members = useSelector((state) => state.members.members);

    const statusCounts = members.reduce((acc, member) => {
        acc[member.status] = (acc[member.status] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.entries(statusCounts).map(([name, value]) => ({
        name,
        value,
    }));

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
                <h2 className="text-xl font-semibold">Team Status Monitor</h2>
                <div className="flex space-x-4">
                    {Object.entries(statusCounts).map(([status, count]) => (
                        <span key={status} className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                            {count} {status}
                        </span>
                    ))}
                </div>
                {/* Add the chart component */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Status Distribution</h3>
                    <StatusChart data={chartData} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {members.map((member) => (
                        <MemberCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
            <div className="md:col-span-1">
                <TaskForm members={members} />
            </div>
        </div>
    );
};

export default TeamLeadView;