import { Alert } from "@mui/material"

const AlertComponent = ({severity, message})=>{
    return (
        <Alert severity={severity} style={{ marginTop:'20px' }}>{message}</Alert>
    )
}
export default AlertComponent