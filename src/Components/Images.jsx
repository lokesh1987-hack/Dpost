import React, { useState ,useEffect } from 'react'
import { projectstorage } from "../fire"

import "../Deign/Image.css"

function Images() {


    const [file, setfile] = useState(null)
    const [error, seterror] = useState("")

    const types = ['image/png', 'image/jpeg']

    const img_handler=(e)=>{
        let selected = e.target.files[0];
       
        if(selected && types.includes(selected.type))
        {
            setfile(selected)
            console.log(file)
            seterror("")
        }
        else
        {
            setfile(null)
            seterror("please choose file png or jpeg")
        }

    }
    useEffect(() => {
        
        // put data oon storage  
        const storageRef = projectstorage.ref("file");
        storageRef.put(file)

        //get data from storage
    }, [file])

    return (
        <div className="upload" >
            <h1>Images PAge</h1>
            <form>
                <input type="file" onChange={img_handler} />
                {error && <div className="error">
                    {error}
                </div>}
                <div>{file && <div>{ file.name }</div> }</div>
            </form>
            
        </div>
    )
}

export default Images
