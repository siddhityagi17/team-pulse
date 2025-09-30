import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { assignTask } from '../redux/slices/membersSlice';

const TaskForm = ({ members }) => {
    const dispatch = useDispatch();
    const [taskTitle, setTaskTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [selectedMemberId, setSelectedMemberId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitle && dueDate && selectedMemberId) {
            dispatch(assignTask({
                memberId: parseInt(selectedMemberId),
                taskTitle,
                dueDate
            }));
            // Reset form
            setTaskTitle('');
            setDueDate('');
            setSelectedMemberId('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h3 className="text-xl font-semibold">Assign a New Task</h3>
            <div>
                <label className="block text-sm font-medium text-gray-700">Task Title</label>
                <input
                    type="text"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="e.g., Fix homepage bug"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Due Date</label>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Assign to Member</label>
                <select
                    value={selectedMemberId}
                    onChange={(e) => setSelectedMemberId(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                >
                    <option value="">-- Select Member --</option>
                    {members.map(member => (
                        <option key={member.id} value={member.id}>{member.name}</option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
                Assign Task
            </button>
        </form>
    );
};

export default TaskForm;