/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export function List ({getItems}) {
    const [myItems,setMyItems] = useState([])

    useEffect(() => {
        console.log("Buscando os dados do DB...")

        setMyItems(getItems)
     
    }, [getItems])

    return (
        <div>
            {myItems?.map((item) => <p key={item}>{item}</p>)}
        </div>
    )
}