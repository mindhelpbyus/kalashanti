import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BrainWordCloud from '../components/BrainWordCloud'

const topics = [
  { title: "Depression", img: "🕊️" },
  { title: "Stress Management", img: "🌿" },
  { title: "Relationships", img: "🤝" },
  { title: "Sleep Disorders", img: "🛌" },
  { title: "Emotional Support", img: "💛" },
  { title: "Time Management", img: "⏰" }
]

export default function Landing(){
  return (
    <main>
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}
          className="text-3xl md:text-5xl font-bold text-gray-900">Mind Game Therapy</motion.h1>
        <p className="mt-3 text-gray-600">Soothing, supportive care rooted in South Indian culture.</p>

        <div className="mt-8">
          <BrainWordCloud/>
          <Link to="/doctors" className="inline-block mt-6 px-6 py-3 rounded-2xl bg-gray-900 text-white">Find Doctors</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {topics.map((t,i)=> (
            <div key={i} className="bg-white border rounded-2xl p-6 text-left card-hover">
              <div className="text-5xl">{t.img}</div>
              <h3 className="mt-3 text-lg font-semibold">{t.title}</h3>
              <p className="text-sm text-gray-600">Explore guidance, resources, and specialists.</p>
              <Link to="/doctors" className="mt-4 inline-block text-gray-900 underline">See specialists →</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
