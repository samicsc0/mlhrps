const Image = ({src, height, width})=>{
    return (
        <img src={src} style={{ height:{height}, width:{width}, objectFit:'contain'}}/>
    )
}

export default Image