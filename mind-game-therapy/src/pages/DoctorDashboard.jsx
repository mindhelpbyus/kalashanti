import { useState } from 'react'
import { load, save } from '../utils/storage'
import { APPOINTMENTS } from '../data/appointments'

export default function DoctorDashboard(){
  const ses = load('session')
  const [availability, setAvailability] = useState(load('availability:'+ses?.id, []))

  const addSlot = ()=>{
    const when = prompt('Enter slot datetime (YYYY-MM-DD HH:MM)')
    if(!when) return
    const iso = when.replace(' ', 'T')
    const next = [...availability, iso]
    setAvailability(next)
    save('availability:'+ses.id, next)
    alert('Slot added (local only).')
  }

  const myAppts = load('appointments', [])
    .filter(a => a.doctorId===ses?.id)

  const bookPrevPatient = ()=>{
    const pid = prompt('Enter previous patient ID (e.g., p1):')
    if(!pid) return
    const id = 'a' + Math.random().toString(36).slice(2,7)
    const when = new Date(Date.now()+86400000).toISOString()
    const all = load('appointments', [])
    all.push({ id, doctorId: ses.id, patientId: pid, when, status:'scheduled' })
    save('appointments', all)
    alert('Booked follow-up with patient '+pid)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Doctor Dashboard</h2>
      <p className="text-gray-600 mt-1">Welcome Dr. {ses?.username || 'Guest'}.</p>

      <section className="mt-6 bg-white border rounded-2xl p-4">
        <h3 className="font-semibold">Calendar Availability</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {availability.map((s,i)=>(<span key={i} className="text-xs bg-gray-100 rounded-xl px-2 py-1">{new Date(s).toLocaleString()}</span>))}
          {availability.length===0 && <div className="text-sm text-gray-500">No custom availability yet.</div>}
        </div>
        <button onClick={addSlot} className="mt-3 px-3 py-1.5 rounded-xl bg-gray-900 text-white">Add Slot</button>
      </section>

      <section className="mt-6 bg-white border rounded-2xl p-4">
        <h3 className="font-semibold">My Appointments</h3>
        <div className="mt-2 grid md:grid-cols-2 gap-3">
          {myAppts.map(a => (
            <div key={a.id} className="border rounded-2xl p-3">
              <div className="text-sm">ID: {a.id}</div>
              <div className="text-sm">When: {new Date(a.when).toLocaleString()}</div>
              <div className="text-xs text-gray-500">Patient: {a.patientId}</div>
            </div>
          ))}
        </div>
        <button onClick={bookPrevPatient} className="mt-3 px-3 py-1.5 rounded-xl bg-brandPurple text-white">Book Follow‑up with Previous Patient</button>
      </section>
    </div>
  )
}
