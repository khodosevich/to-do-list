import { Box, Container, CssBaseline , Typography } from "@mui/material";
import CreateTask from "./CreateTask";
import Tasks from "./Tasks";
import { useState } from "react";

const ToDoList = () => {

    const tasks = [
        {
            id:1,
            name: 'Task 1',
            description: 'Task 1 description',
            status: false
        },
        {
            id:2,
            name: 'Task 2',
            description: 'Task 2 description',
            status: true
        },
        {
            id:3,
            name: 'Task 3',
            description: 'Task 3 description',
            status: false
        }
    ]

    const [tasksState,setTasksState] = useState(tasks);


    return(
        <Box>
            <Container>
                <CssBaseline/>
                <Box>
                    <Typography align="center" mt={2} mb={2} variant="h3">To Do List</Typography>
                </Box>
                <Box>
                    <CreateTask tasks={tasksState} setTasks={setTasksState}/>
                    <Tasks tasks={tasksState} setTasks={setTasksState} />
                </Box>
            </Container>
        </Box>
    )
}

export default ToDoList;