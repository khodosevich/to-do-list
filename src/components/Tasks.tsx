import { Box, Typography } from "@mui/material";
import Task from "./Task";

const Tasks = ({tasks,setTasks, colorType}) => {

    return(
        <Box>
            <Typography align="center" mt={5} variant="h4">Tasks:</Typography>
            {
                tasks.map((task, index) => (
                    <Task key={index} task={task}  setTasks={setTasks} colorType={colorType}/>
                ))
            }
        </Box>
    )
}


export default Tasks;