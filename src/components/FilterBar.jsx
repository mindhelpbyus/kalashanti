export default function FilterBar({ filters, setFilters, specialties }){
  return (
    <div className="bg-white border rounded-2xl p-4 grid md:grid-cols-4 gap-3">
      <select value={filters.specialty} onChange={e=>setFilters({...filters, specialty:e.target.value})} className="border rounded-xl p-2">
        <option value="">All Specialties</option>
        {specialties.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
      <input type="number" placeholder="Max Price (₹)" value={filters.price}
        onChange={e=>setFilters({...filters, price:e.target.value})}
        className="border rounded-xl p-2"/>
      <input type="number" placeholder="Min Experience (yrs)" value={filters.experience}
        onChange={e=>setFilters({...filters, experience:e.target.value})}
        className="border rounded-xl p-2"/>
      <input type="number" step="0.1" placeholder="Min Rating" value={filters.rating}
        onChange={e=>setFilters({...filters, rating:e.target.value})}
        className="border rounded-xl p-2"/>
    </div>
  )
}
