import React from "react";

const ImageList=(props)=>{
    const image = props.image.map((image)=>{
        return(
            <div style={{paddingBottom:'15px'}}>
                <img class='ui centered image' key={image.id} src={image.webformatURL} alt='images' />
            </div>
        )
    })

    return(
        <div>
            {image}
        </div>
    )
}

export default ImageList;