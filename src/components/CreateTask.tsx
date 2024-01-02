import { Box, Button, TextField, Typography , Alert } from "@mui/material";
import { TaskType } from "../types/type";
import { useState } from "react";

const CreateTask = ({tasks, setTasks}) => {

  
    const [task,setTask] = useState<TaskType>({
        id:Math.floor(Math.random() * 1000),
        name: '',
        description: '',
        status:false
    });

    const updateTask = () => {

        if(!task.name || !task.description) {
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 3000);
            return;
        }

        console.log(task);
        setTasks([...tasks, task]); 
        setTask({
            id:Math.floor(Math.random() * 1000),
            name: '',
            description: '',
            status:false
        });
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" >

                {
                   isOpen && <Alert severity="error">Please fill all the fields!</Alert>
                }

            <Typography mb={2} variant="h5">Create Task:</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 300 , mb: 2, p:"10px" , borderRadius:"5px", bgcolor:"white" }}>
                <TextField 

                 sx={{
                    color:"white",
                    border:"1px solid white",
                    background:"white",
                    borderRadius:"5px", 
                }}
                onChange={(e) => setTask({...task, name: e.target.value})}
                value={task.name} 
                id="outlined-basic" 
                type="text" label="Name" 
                variant="outlined" />
                

                <TextField 
                sx={{
                    color:"white",
                    border:"1px solid white",
                    background:"white"
                }}
                onChange={(e) => setTask({...task, description: e.target.value})}
                value={task.description} 
                id="outlined-basic" 
                type="text" label="Description" 
                variant="outlined" />
                
                <Button variant="contained" 
                sx={{
                    bgcolor:"black",
                    transition:"all 0.5s ease",
                    "&:hover": {
                        bgcolor:"#404040"
                    }
                }}
                onClick={updateTask}>Create</Button>

            </Box>
        </Box>
    )
}

export default CreateTask;