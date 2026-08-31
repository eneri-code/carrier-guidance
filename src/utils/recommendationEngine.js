import { collegeData } from '../data/colleges'

// Map answer IDs to course types
const answerToType = {
  // Technology
  cyber_network: 'sayansi',
  cyber_data: 'sayansi',
  cyber_forensics: 'sayansi',
  prog_web: 'sayansi',
  prog_mobile: 'sayansi',
  prog_ai: 'sayansi',
  game_design: 'sayansi',
  game_animation: 'sayansi',
  game_ai: 'sayansi',
  net_cloud: 'sayansi',
  net_security: 'sayansi',
  net_telecom: 'sayansi',
  
  // Education & Arts
  teach_primary: 'sanaa',
  teach_secondary: 'sanaa',
  teach_university: 'sanaa',
  write_stories: 'sanaa',
  write_journalism: 'sanaa',
  write_poetry: 'sanaa',
  art_fine: 'sanaa',
  art_design: 'sanaa',
  art_media: 'sanaa',
  lang_translation: 'sanaa',
  lang_media: 'sanaa',
  lang_literature: 'sanaa',
  
  // Business & People
  biz_management: 'biashara',
  biz_accounting: 'biashara',
  biz_entrepreneur: 'biashara',
  pol_public: 'sanaa',
  pol_diplomacy: 'sanaa',
  pol_policy: 'sanaa',
  comm_dev: 'huduma',
  comm_social: 'huduma',
  comm_ngo: 'huduma',
  mkt_digital: 'biashara',
  mkt_pr: 'biashara',
  mkt_brand: 'biashara',
  
  // Science
  chem_pharmacy: 'sayansi',
  chem_research: 'sayansi',
  chem_industry: 'sayansi',
  phys_astronomy: 'sayansi',
  phys_energy: 'sayansi',
  phys_mechanics: 'sayansi',
  bio_human: 'sayansi',
  bio_animals: 'sayansi',
  bio_plants: 'sayansi',
  eng_civil: 'sayansi',
  eng_mechanical: 'sayansi',
  eng_electrical: 'sayansi',
  
  // Health
  doc_general: 'huduma',
  doc_surgeon: 'huduma',
  doc_children: 'huduma',
  nurse_hospital: 'huduma',
  nurse_community: 'huduma',
  nurse_children: 'huduma',
  counsel_psych: 'huduma',
  counsel_edu: 'huduma',
  counsel_social: 'huduma',
  pharm_dispensing: 'huduma',
  pharm_research: 'huduma',
  pharm_business: 'biashara',
  
  // Nature
  farm_crops: 'sayansi',
  farm_organic: 'sayansi',
  farm_business: 'biashara',
  vet_animals: 'sayansi',
  vet_wild: 'sayansi',
  vet_pets: 'sayansi',
  cons_forest: 'sayansi',
  cons_water: 'sayansi',
  cons_wildlife: 'sayansi',
  fish_marine: 'sayansi',
  fish_farming: 'sayansi',
  fish_business: 'biashara'
}

// Map answer IDs to course keywords
const answerKeywords = {
  // Technology
  cyber_network: ['cyber', 'security', 'network', 'information'],
  cyber_data: ['cyber', 'security', 'data', 'protection'],
  cyber_forensics: ['cyber', 'forensics', 'security', 'investigation'],
  prog_web: ['computer', 'web', 'development', 'software'],
  prog_mobile: ['mobile', 'app', 'development', 'software'],
  prog_ai: ['artificial', 'intelligence', 'data', 'computer'],
  game_design: ['game', 'design', 'multimedia', 'animation'],
  game_animation: ['animation', 'multimedia', 'design'],
  game_ai: ['artificial', 'intelligence', 'computer', 'game'],
  net_cloud: ['network', 'cloud', 'server', 'infrastructure'],
  net_security: ['security', 'network', 'cyber', 'information'],
  net_telecom: ['telecom', 'network', 'communication', 'engineering'],
  
  // Education & Arts
  teach_primary: ['education', 'teaching', 'primary', 'child'],
  teach_secondary: ['education', 'teaching', 'secondary'],
  teach_university: ['education', 'teaching', 'university'],
  write_stories: ['writing', 'literature', 'arts', 'communication'],
  write_journalism: ['journalism', 'communication', 'writing', 'media'],
  write_poetry: ['literature', 'arts', 'writing'],
  art_fine: ['arts', 'fine', 'design', 'painting'],
  art_design: ['design', 'arts', 'multimedia'],
  art_media: ['media', 'multimedia', 'communication', 'arts'],
  lang_translation: ['language', 'translation', 'communication'],
  lang_media: ['media', 'communication', 'language'],
  lang_literature: ['literature', 'language', 'arts'],
  
  // Business & People
  biz_management: ['business', 'management', 'administration'],
  biz_accounting: ['accounting', 'finance', 'business'],
  biz_entrepreneur: ['business', 'entrepreneurship', 'management'],
  pol_public: ['public', 'administration', 'policy', 'government'],
  pol_diplomacy: ['international', 'diplomacy', 'relations', 'political'],
  pol_policy: ['policy', 'public', 'administration'],
  comm_dev: ['community', 'development', 'social'],
  comm_social: ['social', 'work', 'community', 'development'],
  comm_ngo: ['community', 'development', 'ngo', 'social'],
  mkt_digital: ['marketing', 'digital', 'business'],
  mkt_pr: ['public', 'relations', 'marketing', 'communication'],
  mkt_brand: ['marketing', 'branding', 'business'],
  
  // Science
  chem_pharmacy: ['chemistry', 'pharmacy', 'pharmaceutical'],
  chem_research: ['chemistry', 'research', 'science'],
  chem_industry: ['chemistry', 'industrial', 'science'],
  phys_astronomy: ['physics', 'astronomy', 'science'],
  phys_energy: ['physics', 'energy', 'engineering'],
  phys_mechanics: ['physics', 'mechanics', 'engineering'],
  bio_human: ['biology', 'human', 'science'],
  bio_animals: ['biology', 'animal', 'veterinary'],
  bio_plants: ['biology', 'plant', 'agriculture'],
  eng_civil: ['civil', 'engineering', 'construction'],
  eng_mechanical: ['mechanical', 'engineering'],
  eng_electrical: ['electrical', 'engineering', 'energy'],
  
  // Health
  doc_general: ['medicine', 'doctor', 'health', 'clinical'],
  doc_surgeon: ['medicine', 'surgery', 'health'],
  doc_children: ['medicine', 'pediatrics', 'health'],
  nurse_hospital: ['nursing', 'health', 'clinical'],
  nurse_community: ['nursing', 'community', 'health'],
  nurse_children: ['nursing', 'pediatrics', 'health'],
  counsel_psych: ['psychology', 'counselling', 'health'],
  counsel_edu: ['education', 'counselling', 'guidance'],
  counsel_social: ['social', 'work', 'counselling'],
  pharm_dispensing: ['pharmacy', 'pharmaceutical', 'health'],
  pharm_research: ['pharmacy', 'research', 'pharmaceutical'],
  pharm_business: ['pharmacy', 'business', 'health'],
  
  // Nature
  farm_crops: ['agriculture', 'farming', 'crops'],
  farm_organic: ['agriculture', 'organic', 'farming'],
  farm_business: ['agriculture', 'business', 'farming'],
  vet_animals: ['veterinary', 'animal', 'livestock'],
  vet_wild: ['veterinary', 'wildlife', 'animal'],
  vet_pets: ['veterinary', 'animal', 'small'],
  cons_forest: ['forestry', 'environment', 'conservation'],
  cons_water: ['water', 'environment', 'conservation'],
  cons_wildlife: ['wildlife', 'conservation', 'environment'],
  fish_marine: ['fisheries', 'marine', 'aquatic'],
  fish_farming: ['fisheries', 'aquaculture', 'farming'],
  fish_business: ['fisheries', 'business', 'marine']
}

export const getRecommendations = (answers, selectedRegions, formLevel) => {
  // Get the final answer IDs
  const answerIds = Object.values(answers)
  
  // Determine interest type from the final answer
  const lastAnswer = answerIds[answerIds.length - 1]
  const interestType = answerToType[lastAnswer] || 'mchanganyiko'
  
  // Collect all keywords from answers
  const keywords = new Set()
  answerIds.forEach(id => {
    const words = answerKeywords[id] || []
    words.forEach(word => keywords.add(word.toLowerCase()))
  })

  // Find matching colleges
  const recommendations = []
  selectedRegions.forEach(region => {
    const colleges = collegeData[region] || []
    colleges.forEach(college => {
      if (college.type === interestType || college.type === 'mchanganyiko') {
        const matchingCourses = college.courses.filter(course => {
          const courseLower = course.toLowerCase()
          return Array.from(keywords).some(keyword => courseLower.includes(keyword))
        })

        if (matchingCourses.length > 0) {
          recommendations.push({
            collegeName: college.name,
            region: region,
            courses: matchingCourses.slice(0, 5),
            level: formLevel === 'form-four' ? 'Cheti/Diploma' : 'Shahada'
          })
        }
      }
    })
  })

  const interestNames = {
    sayansi: 'Sayansi na Teknolojia',
    sanaa: 'Sanaa na Elimu',
    biashara: 'Biashara na Uchumi',
    huduma: 'Huduma na Afya'
  }

  return {
    interestType: interestType,
    interestName: interestNames[interestType] || 'Mchanganyiko',
    recommendations: recommendations.slice(0, 10)
  }
}