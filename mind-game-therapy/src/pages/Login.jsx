import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { save, load } from '../utils/storage'
import { toast } from '../utils/notifications'

export default function Login(){
  const [role, setRole] = useState('patient')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  const submit = (e)=>{
    e.preventDefault()
    const key = role === 'patient' ? 'patients' : 'doctors'
    const list = load(key, [])
    const found = list.find(u => u.username === username)
    if(found){
      save('session', { role, id: found.id, username })
      toast(`Welcome back, ${username}!`)
      nav(role==='patient'?'/patient':'/doctor')
    }else{
      toast('User not found. Try Sign Up.')
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Login</h2>
      <div className="mt-4 flex gap-4">
        <button onClick={()=>setRole('patient')} className={"px-3 py-1.5 rounded-xl " + (role==='patient'?'bg-brandPurple text-white':'bg-white border')}>Patient</button>
        <button onClick={()=>setRole('doctor')} className={"px-3 py-1.5 rounded-xl " + (role==='doctor'?'bg-brandPurple text-white':'bg-white border')}>Doctor</button>
      </div>
      <form onSubmit={submit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border">
        <input required placeholder="Username" className="border rounded-xl p-2" onChange={e=>setUsername(e.target.value)}/>
        <input required placeholder="Password" type="password" className="border rounded-xl p-2" onChange={e=>setPassword(e.target.value)}/>
        <button className="mt-2 px-4 py-2 rounded-xl bg-gray-900 text-white md:col-span-2">Submit</button>
      </form>
    </div>
  )
}
