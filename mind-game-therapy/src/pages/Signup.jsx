import { useState } from 'react'
import { save } from '../utils/storage'
import { toast } from '../utils/notifications'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
  const nav = useNavigate()
  const [role, setRole] = useState('patient')
  const [form, setForm] = useState({})

  const submit = (e)=>{
    e.preventDefault()
    const key = role === 'patient' ? 'patients' : 'doctors'
    const list = JSON.parse(localStorage.getItem(key) || '[]')
    const id = (role[0] + Math.random().toString(36).slice(2,7))
    const record = { id, ...form, username: form.username, role }
    list.push(record)
    save(key, list)
    save('session', { role, username: form.username, id })
    toast(`Signed up as ${role}. Redirecting…`)
    nav(role==='patient' ? '/patient' : '/doctor')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Sign Up</h2>
      <div className="mt-4 flex gap-4">
        <button onClick={()=>setRole('patient')} className={"px-3 py-1.5 rounded-xl " + (role==='patient'?'bg-brandPurple text-white':'bg-white border')}>Patient</button>
        <button onClick={()=>setRole('doctor')} className={"px-3 py-1.5 rounded-xl " + (role==='doctor'?'bg-brandPurple text-white':'bg-white border')}>Doctor</button>
      </div>
      <form onSubmit={submit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border">
        <input required placeholder="Username" className="border rounded-xl p-2" onChange={e=>setForm({...form, username:e.target.value})}/>
        <input required placeholder="Password" type="password" className="border rounded-xl p-2" onChange={e=>setForm({...form, password:e.target.value})}/>
        <input required placeholder="Email" type="email" className="border rounded-xl p-2" onChange={e=>setForm({...form, email:e.target.value})}/>
        <input required placeholder="Date of Birth" type="date" className="border rounded-xl p-2" onChange={e=>setForm({...form, dob:e.target.value})}/>
        <input required placeholder="Phone Number" className="border rounded-xl p-2" onChange={e=>setForm({...form, phone:e.target.value})}/>
        <input required placeholder="First Name" className="border rounded-xl p-2" onChange={e=>setForm({...form, firstName:e.target.value})}/>
        <input required placeholder="Last Name" className="border rounded-xl p-2" onChange={e=>setForm({...form, lastName:e.target.value})}/>
        <input required placeholder="Address" className="border rounded-xl p-2 md:col-span-2" onChange={e=>setForm({...form, address:e.target.value})}/>
        {role==='doctor' && <input required placeholder="Sign Up Code" className="border rounded-xl p-2 md:col-span-2" onChange={e=>setForm({...form, signupCode:e.target.value})}/>}
        <button className="mt-2 px-4 py-2 rounded-xl bg-gray-900 text-white md:col-span-2">Submit</button>
      </form>
    </div>
  )
}
