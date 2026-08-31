import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            Safari Yako ya Elimu
            <span className="block text-yellow-300">Inaanzia Hapa!</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Tupo kukusaidia kuchagua kozi na chuo kinachokufaa kulingana na vipaji na maslahi yako.
          </p>
          <Link to="/questionnaire" className="inline-block bg-yellow-400 text-primary-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all transform hover:-translate-y-1 shadow-lg text-lg">
            Anza Sasa →
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-gray-800">Elimu Inayokufaa</h3>
            <p className="text-gray-600 mt-2">Pata mwongozo wa kozi na chuo kinacholingana na maslahi yako</p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-xl font-bold text-gray-800">Mwongozo wa Kitaalam</h3>
            <p className="text-gray-600 mt-2">Tunakusaidia kufanya maamuzi sahihi kuhusu taaluma yako</p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-gray-800">Mustakabali Mwema</h3>
            <p className="text-gray-600 mt-2">Jenga maisha ya baadaye kwa kuchagua elimu inayokufaa</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home