import { useState } from 'react'
import AgenticFactory3D, { type StationId } from '@/components/ui/agentic-factory-3d'
import { Sparkles, Layers, Eye, Cpu } from 'lucide-react'

export default function App() {
  const [activeStation, setActiveStation] = useState<StationId | null>(null)
  const [embedMode, setEmbedMode] = useState(false)

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black text-neutral-100 font-sans select-none">
      {/* Top Floating Badge & Mode Switcher */}
      <div className="absolute top-5 left-6 z-30 flex items-center gap-3 pointer-events-auto">
        <button
          onClick={() => setEmbedMode((prev) => !prev)}
          className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
            embedMode
              ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-lg shadow-amber-500/10'
              : 'bg-neutral-900/80 border-neutral-700/60 text-neutral-300 hover:text-white hover:border-neutral-500'
          } backdrop-blur-md cursor-pointer`}
          title="Toggle hero embed mode (shows headline room on left, shifts 3D machine)"
        >
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>{embedMode ? 'Embed Hero Mode ON' : 'Embed Mode OFF'}</span>
        </button>

        {activeStation && (
          <div className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-full bg-neutral-900/90 border border-amber-500/40 text-neutral-200 backdrop-blur-md animate-fade-in">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-neutral-400">Active Station:</span>
            <span className="font-semibold text-amber-400 uppercase tracking-wider">{activeStation}</span>
          </div>
        )}
      </div>

      {/* Hero Headline when in embed mode */}
      {embedMode && (
        <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20 max-w-md pointer-events-none p-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Sparkles className="w-3 h-3" /> Autonomous Agent Factory
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            From Raw Prompt <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              to Paid Product.
            </span>
          </h1>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Watch five synchronized AI stations turn ideas into script, render video, assemble storefronts, and process verified payments in real time.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500">
              <Eye className="w-3.5 h-3.5 text-amber-400" /> Procedural WebGL · No 3D files needed
            </span>
          </div>
        </div>
      )}

      {/* 3D Interactive Canvas Component */}
      <AgenticFactory3D
        height="100vh"
        embed={embedMode}
        onStation={(stationId) => {
          setActiveStation(stationId)
        }}
        onReady={() => {
          console.log('Agentic Factory 3D ready')
        }}
      />
    </main>
  )
}

