
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    members: [
        { id: 1, name: 'Alice', status: 'Working', tasks: [] },
        { id: 2, name: 'Bob', status: 'Offline', tasks: [] },
    ]
};

const membersSlice = createSlice({
    name: 'members',
    initialState,
    reducers: {
        updateStatus: (state, action) => {
            const { id, newStatus } = action.payload;
            const memberToUpdate = state.members.find(member => member.id === id);
            if (memberToUpdate) {
                memberToUpdate.status = newStatus;
            }
        },
        assignTask: (state, action) => {
            const { memberId, taskTitle, dueDate } = action.payload;
            const member = state.members.find(m => m.id === memberId);
            if (member) {
                member.tasks.push({
                    id: member.tasks.length + 1,
                    title: taskTitle,
                    dueDate: dueDate,
                    progress: 0,
                    completed: false
                });
            }
        },
        updateTaskProgress: (state, action) => {
            const { memberId, taskId, newProgress } = action.payload;
            const member = state.members.find(m => m.id === memberId);
            if (member) {
                const task = member.tasks.find(t => t.id === taskId);
                if (task) {
                    task.progress = newProgress;
                    if (newProgress >= 100) {
                        task.completed = true;
                    } else {
                        task.completed = false;
                    }
                }
            }
        }
    }
});

export const { updateStatus, assignTask, updateTaskProgress } = membersSlice.actions;
export default membersSlice.reducer;