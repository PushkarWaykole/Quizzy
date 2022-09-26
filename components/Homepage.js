import Navbar from "./Navbar"
import { useState } from "react";
import Card from "../pages/quiz/Card";
import Start from "../pages/quiz/Start";
import Link from "next/link";
import Instructions from "./Instructions";
import Head from "next/head";
const Homepage = () => {

    const [start, setStart] = useState(false)

    const url="https://source.unsplash.com/random/900×700/?landscape"
    return (
        <div className="bg-cover bg-center bg-no-repeat h-screen" style={{backgroundImage:`url(${url})`}} >
            <Head>
        <title>Quizzy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <div >
                <Navbar />

                <div className="flex flex-col justify-center items-center">

                <Instructions />    
                <Link  href="/quiz/Start" 
                onClick={()=>setStart(!start)}><a class="bg-blue-600 hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-10 text-2xl">Start</a></Link>

                </div>

               
                

            </div>
        </div>
    )
}

export default Homepage