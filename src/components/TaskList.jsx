import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTaskProgress } from '../redux/slices/membersSlice';

const TaskList = ({ tasks, memberId }) => {
    const dispatch = useDispatch();

    const handleProgressChange = (taskId, change) => {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            const newProgress = Math.min(Math.max(0, task.progress + change), 100);
            dispatch(updateTaskProgress({ memberId, taskId, newProgress }));
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
            <h3 className="text-lg font-semibold">Your Assigned Tasks</h3>
            {tasks.length === 0 ? (
                <p className="text-gray-500">You have no tasks assigned.</p>
            ) : (
                <ul className="space-y-4">
                    {tasks.map((task) => (
                        <li key={task.id} className="p-4 border border-gray-200 rounded-md">
                            <div className="flex justify-between items-center">
                                <span className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                                    {task.title}
                                </span>
                                <span className="text-sm text-gray-500">Due: {task.dueDate}</span>
                            </div>
                            <div className="mt-2">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-blue-500 h-2.5 rounded-full"
                                        style={{ width: `${task.progress}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xs text-gray-600">{task.progress}% Complete</span>
                                    <div className="space-x-2">
                                        <button
                                            onClick={() => handleProgressChange(task.id, -10)}
                                            disabled={task.progress <= 0}
                                            className="px-2 py-1 bg-gray-200 rounded-md text-sm disabled:opacity-50"
                                        >
                                            -10%
                                        </button>
                                        <button
                                            onClick={() => handleProgressChange(task.id, 10)}
                                            disabled={task.progress >= 100}
                                            className="px-2 py-1 bg-gray-200 rounded-md text-sm disabled:opacity-50"
                                        >
                                            +10%
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;