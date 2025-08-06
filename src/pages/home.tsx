import { createSignal } from 'solid-js'
import { Sun } from 'lucide-solid'

function MainPage() {
  const [count, setCount] = createSignal(0)

  return (
    <main class="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col items-center justify-center px-4 py-8">
      <div class="flex items-center gap-2 mb-6">
        <Sun class="w-6 h-6 text-yellow-400" />
        <h1 class="text-3xl font-bold tracking-tight">SolidJS Boilderplate</h1>
      </div>

      <p class="mb-4 text-neutral-400">This page uses:</p>
      <ul class="list-disc text-left text-sm text-neutral-300 space-y-1 mb-6">
        <li>SolidJS</li>
        <li>TanStack Router</li>
        <li>Tailwind CSS (Dark Mode only)</li>
        <li>Lucide-Solid Icons</li>
        <li>Font Loader System</li>
      </ul>

      <button
        class="px-5 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-all duration-150 active:scale-95"
        onClick={() => setCount(count() + 1)}
      >
        Count: {count()}
      </button>
    </main>
  )
}

export default MainPage
