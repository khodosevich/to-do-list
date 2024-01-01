import { Box, Modal, TextField, Typography , Button , Checkbox} from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Task = ({ task, setTasks }) => {
    
    const [openModal,setOpenModal] = useState(false)
    
    const deleteTask = () => {
        setTasks(tasks => tasks.filter(t => t.id !== task.id))
    }

    const updateCheckbox = () => {
        setTasks(tasks => tasks.map(t => t.id === task.id ? {...task, status: !task.status} : t))
    }

    const [newName, setNewName] = useState(task.name)
    const [newDescription, setNewDescription] = useState(task.description)

    const updateTask = () => {
        setTasks(tasks => tasks.map(t => t.id === task.id ? {...task, name: newName, description: newDescription} : t))
        setOpenModal(false);
    }

    return (
        <Box display="flex" justifyContent="center" >

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
               <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                   
                   <Box display='flex' alignItems={'center'} justifyContent={'center'}  flexDirection='column' gap={2} p={2}>
                        <TextField onChange={e => setNewName(e.target.value)}  id='outlined-basic' label='Name' variant='outlined' value={newName}>
                              {task.name}
                        </TextField>
                        <TextField onChange={e => setNewDescription(e.target.value)} id='outlined-basic' label='Description' variant='outlined' value={newDescription}>
                            {task.description}
                        </TextField>

                        <Button variant='contained' onClick={updateTask}>Update</Button>
                   </Box>
                
               </Box>
            </Modal>

            <Box display='flex' alignItems="center" minWidth={300} maxWidth={1000} justifyContent="space-between">

                <Checkbox  onClick={updateCheckbox} checked={task.status} sx={{cursor: 'pointer'}} />

                {
                    task.status 
                    ?  <Typography sx={{textDecoration: 'line-through'}}>
                         {task.name}
                     </Typography>
                    :  <Typography style={{cursor: 'pointer'}} onClick={() => setOpenModal(true)} variant='body1'>
                    {task.name}
                 </Typography>
                }

               

                <Box display='flex' gap={1}>
                    <DeleteIcon sx={{cursor: 'pointer' , color: '#DE2626'}} onClick={deleteTask} />
                </Box>
            
            </Box>
           
        </Box>
    );
}

export default Task;