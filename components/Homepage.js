import Navbar from "./Navbar"
import { useState } from "react";
import Card from "../pages/quiz/Card";
import Start from "../pages/quiz/Start";
import Link from "next/link";
import Instructions from "./Instructions";
const Homepage = () => {

    const [start, setStart] = useState(false)


    return (
        <div>
            <div>
                <Navbar />

                <div className="flex flex-col justify-center items-center">

                <Instructions />    
                <Link  href="/quiz/Start" 
                onClick={()=>setStart(!start)}><a class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-10">Start</a></Link>

                </div>

               
                

            </div>
        </div>
    )
}

export default Homepage