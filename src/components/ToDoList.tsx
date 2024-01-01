import { Box, Container, CssBaseline , Typography } from "@mui/material";
import CreateTask from "./CreateTask";
import Tasks from "./Tasks";
import { useState } from "react";
import Theme from "./Theme";

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

    const themes = [
    {
        name:"MidnightBlue",
        color:"#4682B4"
    },
    {
        name:"Snow",
        color:"#FFFAFA"
    },
    {
        name:"DimGrey",
        color:"#696969"
    },{
        name:"DarkSlateBlue",
        color:"#483D8B"
    },
    {
        name:"Dark",
        color:"#2d272f"
    }
    ]

    const [currnentColor,setCurrentColor] = useState(themes[1])

    const colorType = currnentColor.color === themes[0].color || currnentColor.color === themes[2].color || currnentColor.color === themes[3].color || currnentColor.color === themes[4].color

    return(
        <Box bgcolor={currnentColor.color} height="100vh" color={ colorType ? "white" : "black"}>
            <Container>
                <CssBaseline/>
                <Box  sx={{display:"flex" , justifyContent:"end" , gap:"10px", padding:"10px"}}>
                    {
                        themes.map((item,index) => (
                            <Theme key={index} props={item} currnentColor={currnentColor} setCurrentColor={setCurrentColor} /> 
                        ))
                    }
                </Box>
                <Box>
                    <Typography align="center" mt={2} mb={2} variant="h3">To Do List</Typography>
                </Box>
                <Box>
                    <CreateTask tasks={tasksState} setTasks={setTasksState}/>
                    <Tasks tasks={tasksState} setTasks={setTasksState} colorType={colorType} />
                </Box>
            </Container>
        </Box>
    )
}

export default ToDoList;