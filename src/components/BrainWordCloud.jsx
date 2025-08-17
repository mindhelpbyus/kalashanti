import { motion } from 'framer-motion'

const words = [
  // Tamil, Telugu, Kannada, Malayalam therapy terms / supportive words
  "அமைதி","ஆதரவு","மனநலம்","கவனம்","சிகிச்சை",
  "శాంతి","ఆత్మస్థైర్యం","థెరపీ","నిద్ర","ఆరోగ్యం",
  "ಶಾಂತಿ","ಆಧಾರ","ಚಿಕಿತ್ಸೆ","ಮನಸಾಃ","ನಿದ್ರೆ",
  "ശാന്തി","ചികിത്സ","ആശ്വാസം","ധ്യാനം","ആരോഗ്യം",
  "CBT","Mindfulness","Care","Hope","Support"
]

export default function BrainWordCloud(){
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* simple brain-ish shape */}
      <svg viewBox="0 0 600 360" className="w-full drop-shadow-lg rounded-3xl bg-white/70">
        <defs>
          <clipPath id="brain">
            <path d="M300 50c-90 0-160 40-180 110-25 90 50 150 180 150s205-60 180-150c-20-70-90-110-180-110z"/>
          </clipPath>
        </defs>
        <rect x="0" y="0" width="600" height="360" fill="transparent"/>
        <g clipPath="url(#brain)">
          <rect x="0" y="0" width="600" height="360" className="brand-gradient opacity-30"/>
          {
            words.map((w, i) => (
              <motion.text
                key={i}
                x={(i*53)%540 + 30}
                y={(i*31)%300 + 40}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i*0.05 }}
                fontSize={18 + (i%4)*4}
                fill={ i%3===0 ? "#6DD6F8" : i%3===1 ? "#B18AE6" : "#F8D66D" }
              >
                {w}
              </motion.text>
            ))
          }
        </g>
        <path d="M300 50c-90 0-160 40-180 110-25 90 50 150 180 150s205-60 180-150c-20-70-90-110-180-110z"
              fill="none" stroke="#9ca3af" strokeWidth="3"/>
      </svg>
    </div>
  )
}
