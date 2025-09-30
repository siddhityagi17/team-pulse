import React from 'react';

const MemberCard = ({ member }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Working':
                return 'bg-green-500';
            case 'Break':
                return 'bg-yellow-500';
            case 'Meeting':
                return 'bg-purple-500';
            case 'Offline':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    const activeTasks = member.tasks.filter(task => !task.completed).length;

    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className={`w-4 h-4 rounded-full ${getStatusColor(member.status)}`}></div>
            <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
            <span className="text-sm text-gray-600">{member.status}</span>
            <p className="mt-2 text-sm text-gray-500">
                {activeTasks} Active Tasks
            </p>
        </div>
    );
};

export default MemberCard;