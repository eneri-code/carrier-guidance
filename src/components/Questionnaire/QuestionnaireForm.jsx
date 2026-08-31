import React, { useState } from 'react'
import { getRecommendations } from '../../utils/recommendationEngine'
import { allRegions } from '../../data/colleges'

const questions = [
  {
    id: 'q1',
    text: '1. Ni lipi kati ya yafuatayo linakuvutia zaidi?',
    options: [
      { value: 'sayansi_cyber', label: 'Kuhakikisha usalama wa kompyuta au mitandao' },
      { value: 'biashara_logistics', label: 'Kusimamia hisa, manunuzi, na usafirishaji' },
      { value: 'sayansi_engineering', label: 'Kubuni barabara, reli, au majengo' },
      { value: 'sanaa_social', label: 'Kuzungumza na watu kuhusu masuala ya kisiasa' },
      { value: 'sayansi_robotics', label: 'Kujenga mashine kama roboti au drones' },
      { value: 'huduma_health', label: 'Kusaidia watu wenye matatizo ya kimatibabu' },
      { value: 'huduma_nutrition', label: 'Kujifunza jinsi chakula kinavyoathiri afya' },
      { value: 'sanaa_education', label: 'Kufundisha au kutoa mafunzo kwa wengine' },
      { value: 'biashara_management', label: 'Kuendesha au kusimamia biashara' },
      { value: 'sayansi_animal', label: 'Kutunza wanyama au kufanya kazi shambani' },
      { value: 'sayansi_technical', label: 'Kurekebisha ndege, magari, au mashine' },
      { value: 'sanaa_legal', label: 'Kutatua matatizo ya kisheria au ardhi' }
    ]
  },
  {
    id: 'q2',
    text: '2. Kama ungelazimika kuongoza mradi, ungelichagua lipi?',
    options: [
      { value: 'sayansi_cyber', label: 'Kampeni ya usalama wa mtandaoni' },
      { value: 'biashara_logistics', label: 'Kupanga vifaa na manunuzi kwa ajili ya tukio' },
      { value: 'sayansi_engineering', label: 'Kujenga daraja la mfano, roboti, au treni' },
      { value: 'sanaa_social', label: 'Kuendesha mdahalo wa kisiasa' },
      { value: 'sayansi_robotics', label: 'Kujenga roboti au mfumo wa kiufundi' },
      { value: 'huduma_health', label: 'Kuongoza kampeni ya afya au chanjo' },
      { value: 'huduma_nutrition', label: 'Kupanga kampeni ya mlo bora' },
      { value: 'sanaa_education', label: 'Kuandaa somo au mafunzo' },
      { value: 'biashara_management', label: 'Kuanzisha biashara au duka' },
      { value: 'sayansi_animal', label: 'Kliniki ndogo ya wanyama' },
      { value: 'sayansi_technical', label: 'Kusaidia kurekebisha vifaa' },
      { value: 'sanaa_legal', label: 'Kuelimisha jamii kuhusu haki za kisheria' }
    ]
  },
  {
    id: 'q3',
    text: '3. Ni aina gani ya kazi ungeifurahia zaidi?',
    options: [
      { value: 'sayansi_cyber', label: 'Kutatua matatizo ya teknolojia' },
      { value: 'biashara_logistics', label: 'Kupanga jinsi bidhaa zinavyosafirishwa' },
      { value: 'sayansi_engineering', label: 'Kuchora miundo ya kiufundi' },
      { value: 'sanaa_social', label: 'Kutoa hotuba au kuongoza tukio' },
      { value: 'sayansi_robotics', label: 'Kukusanya mashine au kuandika msimbo' },
      { value: 'huduma_health', label: 'Kusaidia mtu mgonjwa' },
      { value: 'huduma_nutrition', label: 'Kuunda mipango ya mlo' },
      { value: 'sanaa_education', label: 'Kuandaa mada au kufundisha' },
      { value: 'biashara_management', label: 'Kuuza bidhaa au kusimamia bajeti' },
      { value: 'sayansi_animal', label: 'Kulisha au kukagua wanyama' },
      { value: 'sayansi_technical', label: 'Kurekebisha hitilafu za kiufundi' },
      { value: 'sanaa_legal', label: 'Kufanya utafiti wa sheria' }
    ]
  },
  {
    id: 'q4',
    text: '4. Ni aina gani ya sehemu ungependelea kufanya kazi?',
    options: [
      { value: 'sayansi_cyber', label: 'Maabara ya kompyuta' },
      { value: 'biashara_logistics', label: 'Ghala au kampuni ya usafirishaji' },
      { value: 'sayansi_engineering', label: 'Warsha au eneo la ujenzi' },
      { value: 'sanaa_social', label: 'Ofisi ya serikali au baraza' },
      { value: 'sayansi_robotics', label: 'Maabara ya teknolojia' },
      { value: 'huduma_health', label: 'Hospitali au kliniki' },
      { value: 'huduma_nutrition', label: 'Kituo cha lishe' },
      { value: 'sanaa_education', label: 'Darasani au chuo kikuu' },
      { value: 'biashara_management', label: 'Ofisi ya biashara' },
      { value: 'sayansi_animal', label: 'Shamba au kliniki ya mifugo' },
      { value: 'sayansi_technical', label: 'Hanga ya ndege au gereji' },
      { value: 'sanaa_legal', label: 'Ofisi ya sheria au mahakama' }
    ]
  },
  {
    id: 'q5',
    text: '5. Ni thamani gani muhimu zaidi kwako katika taaluma?',
    options: [
      { value: 'sayansi_cyber', label: 'Kulinda data na mifumo' },
      { value: 'biashara_logistics', label: 'Kufanya shughuli ziwe na ufanisi' },
      { value: 'sayansi_engineering', label: 'Kutatua changamoto za miundombinu' },
      { value: 'sanaa_social', label: 'Kuleta mabadiliko ya kijamii' },
      { value: 'sayansi_robotics', label: 'Kubuni teknolojia ya baadaye' },
      { value: 'huduma_health', label: 'Kusaidia watu kuishi maisha bora' },
      { value: 'huduma_nutrition', label: 'Kuboresha mlo wa watu' },
      { value: 'sanaa_education', label: 'Kuelimisha wengine' },
      { value: 'biashara_management', label: 'Kukuza biashara' },
      { value: 'sayansi_animal', label: 'Kutunza wanyama' },
      { value: 'sayansi_technical', label: 'Kutunza mashine' },
      { value: 'sanaa_legal', label: 'Kukuza usawa na haki' }
    ]
  }
]

const QuestionnaireForm = () => {
  const [step, setStep] = useState(1)
  const [formLevel, setFormLevel] = useState(null)
  const [answers, setAnswers] = useState({})
  const [regions, setRegions] = useState([])
  const [results, setResults] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleLevelSelect = (level) => {
    setFormLevel(level)
    setStep(2)
  }

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value })
  }

  const handleRegionChange = (index, value) => {
    const newRegions = [...regions]
    newRegions[index] = value
    setRegions(newRegions)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Check if all questions answered
    const allAnswered = questions.every(q => answers[q.id])
    if (!allAnswered) {
      alert('Tafadhali jibu maswali yote!')
      return
    }

    const selectedRegions = regions.filter(r => r)
    if (selectedRegions.length === 0) {
      alert('Tafadhali chagua angalau mkoa mmoja!')
      return
    }

    const answerValues = questions.map(q => answers[q.id])
    const recommendations = getRecommendations(answerValues, selectedRegions, formLevel)
    setResults(recommendations)
    setSubmitted(true)
  }

  const resetForm = () => {
    setStep(1)
    setFormLevel(null)
    setAnswers({})
    setRegions([])
    setResults(null)
    setSubmitted(false)
  }

  if (submitted && results) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-green-100 border border-green-300 rounded-xl p-6 mb-6">
          <h3 className="text-2xl font-bold text-green-800">✅ Majibu Yako Yamepokelewa!</h3>
          <p className="text-green-700 mt-2">
            Maslahi yako yanaelekea katika fani ya: <strong>{results.interestName}</strong>
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">📚 Mapendekezo Yetu Kwako:</h3>
        
        {results.recommendations.length === 0 ? (
          <p className="text-gray-600">
            Hatukupata kozi mahususi katika mikoa uliyochagua. Tafadhali chagua mikoa mingine au wasiliana nasi moja kwa moja.
          </p>
        ) : (
          <div className="space-y-4">
            {results.recommendations.map((rec, index) => (
              <div key={index} className="card border-l-4 border-primary-600">
                <h4 className="text-lg font-bold text-primary-700">{rec.collegeName}</h4>
                <p className="text-sm text-gray-500">📍 {rec.region} • {rec.level}</p>
                <div className="mt-2">
                  <p className="text-sm font-semibold text-gray-700">Kozi Zinazopendekezwa:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {rec.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        <button onClick={resetForm} className="btn-primary mt-6">
          Anza Upya
        </button>
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎓 Chagua Ngazi Yako ya Elimu</h2>
        <p className="text-gray-600 mb-8">Tafadhali chagua ngazi uliyoimaliza:</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => handleLevelSelect('form-four')}
            className="btn-primary text-lg px-8 py-4"
          >
            Nimehitimu Kidato cha Nne
          </button>
          <button 
            onClick={() => handleLevelSelect('form-six')}
            className="btn-primary text-lg px-8 py-4"
          >
            Nimehitimu Kidato cha Sita
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {formLevel === 'form-four' ? '📘 Kidato cha Nne' : '📗 Kidato cha Sita'}
        </h2>
        <button onClick={() => setStep(1)} className="text-primary-600 hover:text-primary-800">
          ← Rudi
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={q.id} className="card mb-6">
            <p className="font-semibold text-gray-800 mb-3">{q.text}</p>
            <div className="space-y-2">
              {q.options.map((opt) => (
                <label key={opt.value} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name={q.id}
                    value={opt.value}
                    checked={answers[q.id] === opt.value}
                    onChange={(e) => handleAnswer(q.id, e.target.value)}
                    className="mt-1"
                    required
                  />
                  <span className="text-gray-700">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="card mb-6">
          <p className="font-semibold text-gray-800 mb-3">
            6. Chagua mikoa unayopendelea kusoma (Chagua hadi 3)
          </p>
          {[0, 1, 2].map((index) => (
            <select
              key={index}
              value={regions[index] || ''}
              onChange={(e) => handleRegionChange(index, e.target.value)}
              className="input-field mb-3"
            >
              <option value="">Chagua Mkoa {index + 1}{index > 0 ? ' (Hiari)' : ''}</option>
              {allRegions.map((region) => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          ))}
        </div>

        <button type="submit" className="btn-primary w-full text-lg py-4">
          🚀 Tuma na Upate Mapendekezo
        </button>
      </form>
    </div>
  )
}

export default QuestionnaireForm