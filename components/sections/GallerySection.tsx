'use client'

import { useState } from 'react'
import { Images } from '@/lib/server-data'

interface GallerySectionProps {
  images: Images
}

export function GallerySection({ images }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = ['All', ...Array.from(new Set(images.gallery.map((img: any) => img.category)))]
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages = activeCategory === 'All' 
    ? images.gallery 
    : images.gallery.filter((img: any) => img.category === activeCategory)

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white">
            Photo <span className="text-yellow-400">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Professional moments and team collaborations showcasing the journey of innovation and leadership
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image: any, index: number) => (
            <div 
              key={index}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedImage(index)
                setIsModalOpen(true)
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-700 hover-glow transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-medium">View Full Size</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-white font-semibold mb-2">{image.alt}</h3>
                <span className="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm border border-yellow-400/30">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={filteredImages[selectedImage]?.src}
              alt={filteredImages[selectedImage]?.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{filteredImages[selectedImage]?.alt}</h3>
              <span className="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm border border-yellow-400/30">
                {filteredImages[selectedImage]?.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}