// src/pages/Dashboard.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchRole, setUser } from '../redux/slices/roleSlice';
import TeamLeadView from '../components/TeamLeadView';
import TeamMemberView from '../components/TeamMemberView';

const Dashboard = () => {
    const dispatch = useDispatch();
    const currentRole = useSelector((state) => state.role.currentRole);
    const currentUser = useSelector((state) => state.role.currentUser);
    const members = useSelector((state) => state.members.members);

    const handleRoleSwitch = () => {
        const newRole = currentRole === 'lead' ? 'member' : 'lead';
        dispatch(switchRole(newRole));
    };

    const handleUserChange = (event) => {
        dispatch(setUser(event.target.value));
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="flex justify-between items-center p-4 bg-white shadow-md">
                <h1 className="text-2xl font-bold">Team Pulse Dashboard</h1>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <span>Select User:</span>
                        <select
                            onChange={handleUserChange}
                            value={currentUser}
                            className="p-2 border rounded-md"
                        >
                            {members.map(member => (
                                <option key={member.id} value={member.name}>
                                    {member.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <span className="text-lg">Current Role: {currentRole === 'lead' ? 'Team Lead' : 'Team Member'}</span>
                    <button
                        onClick={handleRoleSwitch}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Switch Role
                    </button>
                </div>
            </header>
            <main className="p-4">
                {currentRole === 'lead' ? <TeamLeadView /> : <TeamMemberView />}
            </main>
        </div>
    );
};

export default Dashboard;