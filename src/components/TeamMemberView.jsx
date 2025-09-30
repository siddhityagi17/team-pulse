import React from 'react';
import { useSelector } from 'react-redux';
import StatusSelector from './StatusSelector';
import TaskList from './TaskList';

const TeamMemberView = () => {
    const currentUser = useSelector((state) => state.role.currentUser);
    const members = useSelector((state) => state.members.members);
    
    const user = members.find(member => member.name === currentUser);

    if (!user) {
        return <div className="p-4 text-center text-gray-500">User not found.</div>;
    }

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Welcome, {user.name}!</h2>
            <StatusSelector member={user} />
            <TaskList tasks={user.tasks} memberId={user.id} />
        </div>
    );
};

export default TeamMemberView;