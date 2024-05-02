# **TaskGenie**

TaskGenie is a task management application built with React. It allows users to create, delete, and view tasks.

## **Features**

- **Task Creation:** Users can create new tasks by filling out a form with the task details. The application validates the input to ensure that all required fields are filled in.

- **Task Deletion:** Users can delete tasks when they are completed. This helps keep the task list clean and manageable.

- **Task Viewing:** All tasks are displayed in a list format. This allows users to easily see all their tasks at a glance.

- **Responsive Design:** TaskGenie is designed to be responsive and works well on both desktop and mobile devices.

TaskGenie is a powerful tool for managing tasks. It simplifies task management and helps users stay organized and productive.



## **Installation**

To get started with TaskGenie, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/ZakiyaMiller/TaskGenie.git
    ```

2. **Install the dependencies**:

    ```bash
    npm install
    ```
    -install [MySQL server](https://dev.mysql.com/downloads/mysql/)

3. **Set up the local database:**
Create a local database named "tasks".
Within the "tasks" database, create a table named "tasks" with the following fields:
- id: Primary key, auto-incrementing.
- title: Title of the task.
- description: Description of the task.
- dueDate: Due date of the task.

4. **Configure the application:**
   - Open the `server.js` file and replace `<username>` and `<password>` with your MySQL username and password.
   - Alternatively, you can store these values in environment variables. Create a `.env` file in the root of your project and add the following lines:
     ```env
     DB_USERNAME=<username>
     DB_PASSWORD=<password>
     ```

5. **Start the server:**
```bash
node server.js
```

6. **Start the application**:

    ```bash
    npm start
    ```

After starting the application, navigate to [http://localhost:3000](http://localhost:3000/) in your web browser.
