import React from 'react'
import AdaptiveQuestionnaire from '../components/Questionnaire/AdaptiveQuestionnaire'

const Questionnaire = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🎯 Mwongozo wa Taaluma
          </h1>
          <p className="text-lg text-gray-600">
            Jibu maswali machache na upate mapendekezo ya kozi na vyuo vinavyokufaa
          </p>
        </div>
        <AdaptiveQuestionnaire />
      </div>
    </div>
  )
}

export default Questionnaire