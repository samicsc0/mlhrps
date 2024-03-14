import { Typography } from "@mui/material"

const Text = ({variant, text, gutterBottom = false, color ='#ffffff', textAlign})=>{
    return (
        <Typography variant={variant} gutterBottom = {gutterBottom} style={{ color:color,display:'block' }} textAlign={textAlign}>{text}</Typography>
    )
}

export default Text