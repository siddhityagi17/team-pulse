# Team Pulse Dashboard

A productivity monitoring tool for an internal team, built with a focus on role-based views using React and Redux Toolkit. This dashboard allows team leads to monitor member statuses and assign tasks, while team members can update their own status and manage their task progress.

### 🚀 Features

* **Role-Based Views:** A toggle allows users to switch between a **Team Lead** view and a **Team Member** view.
* **Status Monitoring:** Team Leads can see the real-time status of all team members (Working, Break, Meeting, Offline).
* **Task Management:**
    * Leads can assign new tasks to team members.
    * Members can update the progress of their assigned tasks using a progress bar.
* **Data Visualization:** A pie chart visualizes the distribution of team member statuses.
* **Dark Mode:** A toggle allows users to switch between light and dark themes.
* **Auto-Reset:** A user's status is automatically reset to "Offline" after 10 minutes of inactivity.
* **State Management:** All application state is managed globally using **Redux Toolkit**.

### 💻 Tech Stack

* **React:** For building the user interface.
* **Redux Toolkit:** For efficient and scalable state management.
* **Tailwind CSS:** For fast and utility-first styling.
* **Recharts:** For creating the data visualization chart.

### ⚙️ Setup Instructions

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/siddhityagi17/team-pulse.git](https://github.com/siddhityagi17/team-pulse.git)
    cd team-pulse
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.