import { useMemo, useState } from 'react'
import { DOCTORS, SPECIALTIES } from '../data/doctors'
import DoctorCard from '../components/DoctorCard'
import FilterBar from '../components/FilterBar'

export default function DoctorsList(){
  const [filters, setFilters] = useState({ specialty:'', price:'', experience:'', rating:'' })

  const filtered = useMemo(()=>{
    return DOCTORS.filter(d => (
      (!filters.specialty || d.specialty===filters.specialty) &&
      (!filters.price || d.price <= Number(filters.price)) &&
      (!filters.experience || d.experience >= Number(filters.experience)) &&
      (!filters.rating || d.rating >= Number(filters.rating))
    ))
  }, [filters])

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Doctors</h2>
      <FilterBar filters={filters} setFilters={setFilters} specialties={SPECIALTIES}/>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {filtered.map(d => <DoctorCard d={d} key={d.id}/>)}
      </div>
    </div>
  )
}
