import React from 'react';
import { useDispatch } from 'react-redux';
import { updateStatus } from '../redux/slices/membersSlice';

const StatusSelector = ({ member }) => {
    const dispatch = useDispatch();
    const statuses = ['Working', 'Break', 'Meeting', 'Offline'];

    const handleStatusChange = (newStatus) => {
        dispatch(updateStatus({ id: member.id, newStatus }));
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Update Your Status</h3>
            <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                    <button
                        key={status}
                        onClick={() => handleStatusChange(status)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                            ${member.status === status
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {status}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StatusSelector;