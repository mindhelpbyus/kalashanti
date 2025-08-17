import { load } from '../utils/storage'
import { DOCTORS } from '../data/doctors'

export default function PatientDashboard(){
  const ses = load('session')
  const appts = load('appointments', []).filter(a => a.patientId === ses?.id)
  const past = appts.filter(a => a.status!=='scheduled')
  const upcoming = appts.filter(a => a.status==='scheduled')
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold">Patient Dashboard</h2>
      <p className="text-gray-600 mt-1">Welcome {ses?.username || 'Guest'}.</p>

      <section className="mt-6">
        <h3 className="font-semibold">Upcoming Appointments</h3>
        <div className="mt-2 grid md:grid-cols-2 gap-3">
          {upcoming.map(a => {
            const d = DOCTORS.find(x => x.id===a.doctorId)
            return <div key={a.id} className="bg-white border rounded-2xl p-4">
              <div className="font-medium">{d?.name}</div>
              <div className="text-sm text-gray-600">{new Date(a.when).toLocaleString()}</div>
              <div className="text-xs text-gray-500">Status: {a.status}</div>
            </div>
          })}
          {upcoming.length===0 && <div className="text-sm text-gray-500">No upcoming appointments.</div>}
        </div>
      </section>

      <section className="mt-6">
        <h3 className="font-semibold">Past Visits</h3>
        <div className="mt-2 grid md:grid-cols-2 gap-3">
          {past.map(a => {
            const d = DOCTORS.find(x => x.id===a.doctorId)
            return <div key={a.id} className="bg-white border rounded-2xl p-4">
              <div className="font-medium">{d?.name}</div>
              <div className="text-sm text-gray-600">{new Date(a.when).toLocaleString()}</div>
              <div className="text-xs text-gray-500">Summary: {a.notes || '—'}</div>
            </div>
          })}
          {past.length===0 && <div className="text-sm text-gray-500">No past visits.</div>}
        </div>
      </section>
    </div>
  )
}
