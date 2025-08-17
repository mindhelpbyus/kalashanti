import { useParams, useNavigate } from 'react-router-dom'
import { load, save } from '../utils/storage'
import { DOCTORS } from '../data/doctors'

export default function Appointment(){
  const { id } = useParams()
  const nav = useNavigate()
  const appts = load('appointments', [])
  const appt = appts.find(a => a.id === id)
  const doc = DOCTORS.find(d => d.id === appt?.doctorId)

  const pay = ()=>{
    nav(`/payment/${id}`)
  }

  if(!appt) return <div className="max-w-3xl mx-auto px-4 py-10">Appointment not found.</div>

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white border rounded-2xl p-6">
        <h2 className="text-2xl font-bold">Confirm Appointment</h2>
        <p className="mt-2">Doctor: <b>{doc?.name}</b></p>
        <p>Date & Time: <b>{new Date(appt.when).toLocaleString()}</b></p>
        <p>Fee: <b>₹{doc?.price}</b></p>
        <button onClick={pay} className="mt-4 px-4 py-2 rounded-xl bg-gray-900 text-white">Continue to Payment</button>
      </div>
    </div>
  )
}
