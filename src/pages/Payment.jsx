import { useParams, useNavigate } from 'react-router-dom'
import { load, save } from '../utils/storage'
import { toast } from '../utils/notifications'

export default function Payment(){
  const { id } = useParams()
  const nav = useNavigate()
  const appts = load('appointments', [])
  const appt = appts.find(a => a.id === id)

  const submit = (e)=>{
    e.preventDefault()
    // dummy "success"
    const receipt = 'R' + Math.random().toString(36).slice(2,10).toUpperCase()
    appt.status = 'paid'
    save('appointments', appts)
    save('lastReceipt', { id, receipt, at: new Date().toISOString() })
    toast('Payment successful. Receipt: '+receipt)
    nav('/patient')
  }

  if(!appt) return <div className="max-w-3xl mx-auto px-4 py-10">Appointment not found.</div>

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Payment</h2>
      <form onSubmit={submit} className="mt-4 grid grid-cols-1 gap-3 bg-white border rounded-2xl p-6">
        <input required placeholder="Cardholder Name" className="border rounded-xl p-2"/>
        <input required placeholder="Card Number" className="border rounded-xl p-2"/>
        <div className="grid grid-cols-2 gap-3">
          <input required placeholder="MM/YY" className="border rounded-xl p-2"/>
          <input required placeholder="CVV" className="border rounded-xl p-2"/>
        </div>
        <button className="mt-2 px-4 py-2 rounded-xl bg-gray-900 text-white">Pay Now</button>
      </form>
    </div>
  )
}
