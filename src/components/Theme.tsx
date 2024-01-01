import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const Theme = ({props,currnentColor,setCurrentColor}) => {


    const [isCurrent,setIsCurrent] = useState(false);

    const setBorder = () => {
        if(props.color === currnentColor.color) {
            setIsCurrent(true)
        }else {
            setIsCurrent(false)
        }
    }

    useEffect(()=>(
        setBorder()
    ),[currnentColor])


    return(
        <Box  onClick={() => setCurrentColor(props) } 
        sx={{borderRadius:"20px",
            bgcolor:`${props.color}`,
            height:"30px" , 
            width:"30px",
            border: isCurrent ? "2px solid green" : ""
            }}>
        </Box>
    )

} 

export default Theme;