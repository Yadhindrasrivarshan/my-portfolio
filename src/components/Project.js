import React from 'react';

import {useState,useEffect} from 'react'
import sanityClient from '../client.js'
function Project(){

    const [projectData,setProjectData]=useState(null)

    useEffect(()=>{
        sanityClient.fetch(`*[_type=="prpject"]{
            title,
            date,
            place,
            descriptions,
            projectType,
            link,
            tags
        }`)
        .then((data)=>setProjectData(data))
        .catch(console.log(error))
    },[]
        )
    return(
       <main>
           <section>
               <h1></h1>
               <h2></h2>
               <section>
                   <article>
                       <h3></h3>
                       <div>
                           <span></span>
                       </div>
                   </article>
               </section>
           </section>
       </main>

    )
}

export default Project