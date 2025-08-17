import { Link } from 'react-router-dom'

export default function DoctorCard({ d }){
  return (
    <div className="bg-white rounded-2xl p-4 card-hover border">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandYellow via-brandCyan to-brandPurple" />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{d.name}</h3>
          <p className="text-sm text-gray-600">{d.specialty} • {d.experience} yrs • ₹{d.price}</p>
          <p className="text-sm text-gray-600">⭐ {d.rating} • {d.location} • {d.languages.join(", ")}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Link to={`/doctors/${d.id}`} className="px-3 py-1.5 rounded-xl bg-gray-900 text-white">View Profile</Link>
      </div>
    </div>
  )
}
