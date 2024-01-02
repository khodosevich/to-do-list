import { Box, Typography } from "@mui/material";
import Task from "./Task";

const Tasks = ({tasks,setTasks, colorType}) => {

    return(
        <Box>
            <Typography align="center" mt={5} mb={2} variant="h5">Tasks:</Typography>
            {
                tasks.length === 0 ? <Typography align="center" mt={5} mb={2} variant="h5">No tasks</Typography> :
                tasks.map((task, index) => (
                    <Task key={index} task={task}  setTasks={setTasks} colorType={colorType}/>
                ))
            }
        </Box>
    )
}


export default Tasks;