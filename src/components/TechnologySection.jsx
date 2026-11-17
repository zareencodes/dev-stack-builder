
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import technologiesData from '../data/technologies.json'
import TechnologyCard from './TechnologyCard'
import YourStack from './YourStack'

function TechnologySection() {

  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)

  // Load JSON data
  useEffect(() => {
    setTechnologies(technologiesData)
    setLoading(false)
  }, [])

  // Add technology
  const handleAdd = (technology) => {

    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    )

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`)
      return
    }

    setStack([...stack, technology])

    toast.success(`${technology.name} added to your stack!`)
  }

  // Remove one technology
  const handleRemove = (id) => {

    const updatedStack = stack.filter(
      (technology) => technology.id !== id
    )

    setStack(updatedStack)

    toast.info('Technology removed from your stack!')
  }

  // Remove all technologies
  const handleRemoveAll = () => {

    if (stack.length === 0) return

    setStack([])

    toast.success('Your stack has been cleared!')
  }

  
// Loading state
if (loading) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      role="status"
      aria-live="polite"
    >
      <div className="w-12 h-12 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin mb-4"></div>

      <p className="text-gray-600 text-lg font-medium">
        Loading technologies...
      </p>
    </div>
  )
}


  return (
    <section
      id="technologies"
      className="bg-gray-50 py-20 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">

          <p className="text-pink-500 font-semibold mb-3">
            EXPLORE THE ECOSYSTEM
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Technologies
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover the tools and technologies that power
            modern web development.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Technology Cards */}
          <div className="lg:col-span-3">

            <p className="text-gray-600 mb-6 font-medium">
              Showing {technologies.length} Technologies
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {technologies.map((technology) => (

                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some(
                    (item) => item.id === technology.id
                  )}
                  onAdd={handleAdd}
                />

              ))}

            </div>

          </div>

          {/* Your Stack Sidebar */}
          <div className="lg:col-span-1">

            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default TechnologySection
