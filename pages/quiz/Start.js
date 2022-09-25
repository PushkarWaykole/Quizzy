import Card from "./Card";
import { useEffect,useState } from "react"
const Start = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)

    const [score, setScore] = useState(0)



    useEffect(()=>{
        setLoading(true);
        fetch('https://opentdb.com/api.php?amount=10')
        .then(response=>{
            if(response.ok){
                return response.json();
            }
            throw response;
        })
        .then(data=>{
            setData(data)
            setLoading(false)
        });    
    },[])
  return (
    <div>
        <div>

        <h2 className="fixed top-0 left-0 right-0 bg-white text-2xl">Your score is: {score}</h2>
        <div className="flex flex-col gap-10">

        {data && data.results.map((obj)=>{
            return <Card question={obj} score={score} setScore={setScore} />
        })}
        </div>
        </div>
    </div>
  )
}

export default Start