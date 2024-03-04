"use client"
import { useParams } from 'next/navigation'

export default function UserPage() {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>Página del Usuario</h1>
            <button onClick={()=>{
                console.log('works!!!')
            }}>
                Click
            </button>
        </div>
    )
}