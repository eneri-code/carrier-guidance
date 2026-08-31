import React, { useState } from 'react'
import { questionTree } from '../../data/questions'
import { getRecommendations } from '../../utils/recommendationEngine'
import { allRegions } from '../../data/colleges'

const AdaptiveQuestionnaire = () => {
  const [step, setStep] = useState(1)
  const [formLevel, setFormLevel] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState('q1')
  const [answers, setAnswers] = useState({})
  const [regions, setRegions] = useState([])
  const [results, setResults] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [history, setHistory] = useState([])
  const [progress, setProgress] = useState(0)

  const handleLevelSelect = (level) => {
    setFormLevel(level)
    setStep(2)
    setProgress(10)
  }

  const handleAnswer = (questionId, optionId) => {
    const question = questionTree[questionId]
    const selectedOption = question.options.find(opt => opt.id === optionId)
    
    // Save answer
    const newAnswers = { ...answers, [questionId]: optionId }
    setAnswers(newAnswers)
    setHistory([...history, { questionId, answer: optionId }])
    
    // Update progress
    const totalQuestions = 3 // We have max 3 questions
    const answered = Object.keys(newAnswers).length
    setProgress(Math.min(10 + (answered / totalQuestions) * 80, 90))

    // Check if next is result
    if (selectedOption.next === 'result') {
      // Move to region selection
      setStep(3)
      setProgress(90)
    } else {
      // Go to next question
      setCurrentQuestion(selectedOption.next)
    }
  }

  const handleRegionChange = (index, value) => {
    const newRegions = [...regions]
    newRegions[index] = value
    setRegions(newRegions)
  }

  const handleSubmit = () => {
    const selectedRegions = regions.filter(r => r)
    if (selectedRegions.length === 0) {
      alert('Tafadhali chagua angalau mkoa mmoja!')
      return
    }

    const recommendations = getRecommendations(answers, selectedRegions, formLevel)
    setResults(recommendations)
    setSubmitted(true)
    setProgress(100)
  }

  const resetForm = () => {
    setStep(1)
    setFormLevel(null)
    setCurrentQuestion('q1')
    setAnswers({})
    setRegions([])
    setResults(null)
    setSubmitted(false)
    setHistory([])
    setProgress(0)
  }

  const goBack = () => {
    if (history.length > 0) {
      const last = history[history.length - 1]
      const newHistory = history.slice(0, -1)
      const newAnswers = { ...answers }
      delete newAnswers[last.questionId]
      setHistory(newHistory)
      setAnswers(newAnswers)
      setCurrentQuestion(last.questionId)
    }
  }

  // Results view
  if (submitted && results) {
    return (
      <div className="max-w-4xl mx-auto p-6 animate-fade-in">
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-2xl p-8 mb-8 text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-green-800">Majibu Yako Yamepokelewa!</h3>
          <p className="text-green-700 mt-2 text-lg">
            Maslahi yako yanaelekea katika fani ya: <strong className="text-green-900">{results.interestName}</strong>
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          📚 Mapendekezo Yetu Kwako
        </h3>
        
        {results.recommendations.length === 0 ? (
          <div className="card text-center p-8">
            <p className="text-gray-600">
              Hatukupata kozi mahususi katika mikoa uliyochagua. 
              Tafadhali chagua mikoa mingine au wasiliana nasi moja kwa moja.
            </p>
            <button onClick={resetForm} className="btn-primary mt-4">
              Anza Upya
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {results.recommendations.map((rec, index) => (
              <div key={index} className="card border-l-4 border-primary-600 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-bold text-primary-700">{rec.collegeName}</h4>
                  <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                    {rec.level}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">📍 {rec.region}</p>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Kozi Zinazopendekezwa:</p>
                  <div className="flex flex-wrap gap-2">
                    {rec.courses.map((course, i) => (
                      <span key={i} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <button onClick={resetForm} className="btn-primary mt-6 w-full">
          🔄 Anza Upya
        </button>
      </div>
    )
  }

  // Step 1: Choose education level
  if (step === 1) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center animate-fade-in">
        <div className="mb-8">
          <div className="text-5xl mb-4">🎓</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Chagua Ngazi Yako ya Elimu</h2>
          <p className="text-gray-600">Tafadhali chagua ngazi uliyoimaliza:</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => handleLevelSelect('form-four')}
            className="bg-primary-600 text-white px-8 py-6 rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
          >
            <span className="text-3xl">📘</span>
            Nimehitimu Kidato cha Nne
          </button>
          <button 
            onClick={() => handleLevelSelect('form-six')}
            className="bg-primary-600 text-white px-8 py-6 rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
          >
            <span className="text-3xl">📗</span>
            Nimehitimu Kidato cha Sita
          </button>
        </div>
      </div>
    )
  }

  // Step 2: Questions
  if (step === 2) {
    const question = questionTree[currentQuestion]
    
    return (
      <div className="max-w-3xl mx-auto p-6 animate-fade-in">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>Maendeleo</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-primary-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Back Button */}
        <button 
          onClick={goBack}
          className="text-primary-600 hover:text-primary-800 mb-4 flex items-center gap-2"
        >
          ← Rudi nyuma
        </button>

        {/* Question Card */}
        <div className="card p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">{question.text}</h3>
            {question.subtitle && (
              <p className="text-gray-500 mt-2">{question.subtitle}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(currentQuestion, option.id)}
                className="p-6 bg-gray-50 hover:bg-primary-50 rounded-2xl border-2 border-transparent hover:border-primary-400 transition-all transform hover:-translate-y-1 text-left flex items-center gap-4"
              >
                <span className="text-3xl">{option.icon || option.emoji}</span>
                <span className="font-medium text-gray-700">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Step 3: Region Selection
  if (step === 3) {
    return (
      <div className="max-w-3xl mx-auto p-6 animate-fade-in">
        <div className="card p-8">
          <div className="text-center mb-6">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl font-bold text-gray-800">Chagua Mikoa Unayopendelea</h3>
            <p className="text-gray-500 mt-2">Chagua hadi mikoa 3 unayotaka kusoma</p>
          </div>

          <div className="space-y-4">
            {[0, 1, 2].map((index) => (
              <select
                key={index}
                value={regions[index] || ''}
                onChange={(e) => handleRegionChange(index, e.target.value)}
                className="input-field"
              >
                <option value="">Chagua Mkoa {index + 1}{index > 0 ? ' (Hiari)' : ''}</option>
                {allRegions.map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            ))}
          </div>

          <button 
            onClick={handleSubmit}
            className="btn-primary w-full mt-6 text-lg py-4"
          >
            🚀 Tuma na Upate Mapendekezo
          </button>
        </div>
      </div>
    )
  }

  return null
}

export default AdaptiveQuestionnaire