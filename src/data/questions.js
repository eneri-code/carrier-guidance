export const questionTree = {
  // SWALI LA KWANZA
  q1: {
    id: 'q1',
    text: 'Unapenda kufanya nini zaidi maishani?',
    subtitle: 'Chagua kitu unachokipenda sana',
    options: [
      { 
        id: 'tech', 
        label: 'Kutumia kompyuta na teknolojia', 
        icon: '💻',
        emoji: '🖥️',
        next: 'q2_tech'
      },
      { 
        id: 'education', 
        label: 'Kusoma, kuandika na kujifunza', 
        icon: '📚',
        emoji: '📖',
        next: 'q2_education'
      },
      { 
        id: 'people', 
        label: 'Kuzungumza na kushirikiana na watu', 
        icon: '👥',
        emoji: '🤝',
        next: 'q2_people'
      },
      { 
        id: 'science', 
        label: 'Kuchunguza na kugundua vitu vipya', 
        icon: '🔬',
        emoji: '🧪',
        next: 'q2_science'
      },
      { 
        id: 'health', 
        label: 'Kusaidia wengine na kuwatunza', 
        icon: '❤️',
        emoji: '🏥',
        next: 'q2_health'
      },
      { 
        id: 'nature', 
        label: 'Kufanya kazi nje ya nyumba', 
        icon: '🌿',
        emoji: '🌳',
        next: 'q2_nature'
      }
    ]
  },

  // SWALI LA PILI - TEKNOLOJIA
  q2_tech: {
    id: 'q2_tech',
    text: 'Unapenda kompyuta kwa ajili ya nini?',
    subtitle: 'Ni kitu gani kinakuvutia zaidi?',
    options: [
      { 
        id: 'cyber', 
        label: 'Kulinda data na usalama wa mtandao', 
        icon: '🔐',
        emoji: '🛡️',
        next: 'q3_cyber'
      },
      { 
        id: 'programming', 
        label: 'Kutengeneza programu na apps', 
        icon: '📱',
        emoji: '💻',
        next: 'q3_programming'
      },
      { 
        id: 'gaming', 
        label: 'Kucheza na kubuni michezo', 
        icon: '🎮',
        emoji: '🎯',
        next: 'q3_gaming'
      },
      { 
        id: 'networking', 
        label: 'Kutumia internet na mitandao', 
        icon: '🌐',
        emoji: '📡',
        next: 'q3_networking'
      }
    ]
  },

  // SWALI LA TATU - TEKNOLOJIA (Cyber Security)
  q3_cyber: {
    id: 'q3_cyber',
    text: 'Ungependa kulinda nini zaidi?',
    subtitle: 'Ni kitu gani muhimu kwako?',
    options: [
      { 
        id: 'cyber_network', 
        label: 'Kulinda mitandao ya kompyuta', 
        icon: '🛡️',
        emoji: '🌐',
        next: 'result'
      },
      { 
        id: 'cyber_data', 
        label: 'Kulinda taarifa na data', 
        icon: '🔒',
        emoji: '📊',
        next: 'result'
      },
      { 
        id: 'cyber_forensics', 
        label: 'Kuchunguza uhalifu wa mtandao', 
        icon: '🔍',
        emoji: '🕵️',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - TEKNOLOJIA (Programming)
  q3_programming: {
    id: 'q3_programming',
    text: 'Ungependa kutengeneza nini?',
    subtitle: 'Ni aina gani ya programu?',
    options: [
      { 
        id: 'prog_web', 
        label: 'Tovuti na apps za mtandao', 
        icon: '🌍',
        emoji: '🌐',
        next: 'result'
      },
      { 
        id: 'prog_mobile', 
        label: 'Simu programu (Mobile Apps)', 
        icon: '📱',
        emoji: '📲',
        next: 'result'
      },
      { 
        id: 'prog_ai', 
        label: 'Akili Bandia (AI) na Data', 
        icon: '🤖',
        emoji: '🧠',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - TEKNOLOJIA (Gaming)
  q3_gaming: {
    id: 'q3_gaming',
    text: 'Unapenda michezo ya aina gani?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'game_design', 
        label: 'Kubuni michezo mipya', 
        icon: '🎨',
        emoji: '✏️',
        next: 'result'
      },
      { 
        id: 'game_animation', 
        label: 'Uhuishaji na graphics', 
        icon: '🎬',
        emoji: '🖌️',
        next: 'result'
      },
      { 
        id: 'game_ai', 
        label: 'Akili ya mchezo (Game AI)', 
        icon: '🧠',
        emoji: '🤖',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - TEKNOLOJIA (Networking)
  q3_networking: {
    id: 'q3_networking',
    text: 'Unapenda mitandao ya aina gani?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'net_cloud', 
        label: 'Mitandao ya Cloud na Server', 
        icon: '☁️',
        emoji: '☁️',
        next: 'result'
      },
      { 
        id: 'net_security', 
        label: 'Usalama wa mitandao', 
        icon: '🔐',
        emoji: '🛡️',
        next: 'result'
      },
      { 
        id: 'net_telecom', 
        label: 'Mawasiliano na simu', 
        icon: '📡',
        emoji: '📞',
        next: 'result'
      }
    ]
  },

  // SWALI LA PILI - ELIMU NA SANAA
  q2_education: {
    id: 'q2_education',
    text: 'Unapenda sana kufanya nini?',
    subtitle: 'Ni kitu gani kinakufurahisha?',
    options: [
      { 
        id: 'edu_teaching', 
        label: 'Kufundisha na kuelimisha wengine', 
        icon: '📖',
        emoji: '👨‍🏫',
        next: 'q3_teaching'
      },
      { 
        id: 'edu_writing', 
        label: 'Kuandika hadithi au mashairi', 
        icon: '✍️',
        emoji: '📝',
        next: 'q3_writing'
      },
      { 
        id: 'edu_art', 
        label: 'Kuchora, kubuni au kazi za sanaa', 
        icon: '🎨',
        emoji: '🖌️',
        next: 'q3_art'
      },
      { 
        id: 'edu_language', 
        label: 'Kujifunza lugha na mawasiliano', 
        icon: '🗣️',
        emoji: '🌍',
        next: 'q3_language'
      }
    ]
  },

  // SWALI LA TATU - UALIMU
  q3_teaching: {
    id: 'q3_teaching',
    text: 'Ungependa kufundisha wapi?',
    subtitle: 'Ni mazingira gani unayopenda?',
    options: [
      { 
        id: 'teach_primary', 
        label: 'Shule ya Msingi (Watoto)', 
        icon: '👶',
        emoji: '🏫',
        next: 'result'
      },
      { 
        id: 'teach_secondary', 
        label: 'Shule ya Sekondari (Vijana)', 
        icon: '🧑‍🎓',
        emoji: '📚',
        next: 'result'
      },
      { 
        id: 'teach_university', 
        label: 'Chuo Kikuu (Watu wazima)', 
        icon: '🎓',
        emoji: '🏛️',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - UANDISHI
  q3_writing: {
    id: 'q3_writing',
    text: 'Ungependa kuandika nini?',
    subtitle: 'Ni aina gani ya uandishi?',
    options: [
      { 
        id: 'write_stories', 
        label: 'Hadithi za kubuni', 
        icon: '📖',
        emoji: '✍️',
        next: 'result'
      },
      { 
        id: 'write_journalism', 
        label: 'Habari na Uandishi wa Gazeti', 
        icon: '📰',
        emoji: '🗞️',
        next: 'result'
      },
      { 
        id: 'write_poetry', 
        label: 'Mashairi na Ushairi', 
        icon: '🎭',
        emoji: '📝',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - SANAA
  q3_art: {
    id: 'q3_art',
    text: 'Ungependa kufanya sanaa ya aina gani?',
    subtitle: 'Ni kitu gani kinakufurahisha?',
    options: [
      { 
        id: 'art_fine', 
        label: 'Kuchora na uchoraji', 
        icon: '🎨',
        emoji: '🖼️',
        next: 'result'
      },
      { 
        id: 'art_design', 
        label: 'Kubuni (Design) na michoro', 
        icon: '✏️',
        emoji: '📐',
        next: 'result'
      },
      { 
        id: 'art_media', 
        label: 'Multimedia na Video', 
        icon: '🎬',
        emoji: '📹',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - LUGHA
  q3_language: {
    id: 'q3_language',
    text: 'Ungependa kutumia lugha kwa nini?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'lang_translation', 
        label: 'Kutafsiri na Utafsiri', 
        icon: '🌐',
        emoji: '🗣️',
        next: 'result'
      },
      { 
        id: 'lang_media', 
        label: 'Utangazaji na Mawasiliano', 
        icon: '📺',
        emoji: '🎙️',
        next: 'result'
      },
      { 
        id: 'lang_literature', 
        label: 'Fasihi na Vitabu', 
        icon: '📚',
        emoji: '📖',
        next: 'result'
      }
    ]
  },

  // SWALI LA PILI - JAMII NA BIASHARA
  q2_people: {
    id: 'q2_people',
    text: 'Unapenda kufanya nini na watu?',
    subtitle: 'Ni kitu gani kinakufurahisha?',
    options: [
      { 
        id: 'people_business', 
        label: 'Kuendesha biashara', 
        icon: '💼',
        emoji: '🏪',
        next: 'q3_business'
      },
      { 
        id: 'people_politics', 
        label: 'Kushiriki katika siasa na utawala', 
        icon: '🗳️',
        emoji: '🏛️',
        next: 'q3_politics'
      },
      { 
        id: 'people_community', 
        label: 'Kusaidia maendeleo ya jamii', 
        icon: '🤝',
        emoji: '🌍',
        next: 'q3_community'
      },
      { 
        id: 'people_marketing', 
        label: 'Kutangaza na kushawishi', 
        icon: '📢',
        emoji: '📣',
        next: 'q3_marketing'
      }
    ]
  },

  // SWALI LA TATU - BIASHARA
  q3_business: {
    id: 'q3_business',
    text: 'Ungependa kuendesha biashara ya aina gani?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'biz_management', 
        label: 'Usimamizi na Menejimenti', 
        icon: '📊',
        emoji: '📈',
        next: 'result'
      },
      { 
        id: 'biz_accounting', 
        label: 'Uhasibu na Fedha', 
        icon: '💰',
        emoji: '💵',
        next: 'result'
      },
      { 
        id: 'biz_entrepreneur', 
        label: 'Ujasiriamali (Kuanzisha biashara)', 
        icon: '🚀',
        emoji: '💡',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - SIASA
  q3_politics: {
    id: 'q3_politics',
    text: 'Ungependa kufanya nini katika siasa?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'pol_public', 
        label: 'Kuhudumia umma', 
        icon: '👤',
        emoji: '🤵',
        next: 'result'
      },
      { 
        id: 'pol_diplomacy', 
        label: 'Diplomasia na Uhusiano wa Kimataifa', 
        icon: '🌍',
        emoji: '🤝',
        next: 'result'
      },
      { 
        id: 'pol_policy', 
        label: 'Kuunda sera na sheria', 
        icon: '📜',
        emoji: '⚖️',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - JAMII
  q3_community: {
    id: 'q3_community',
    text: 'Ungependa kusaidia jamii vipi?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'comm_dev', 
        label: 'Maendeleo ya Jamii', 
        icon: '🌱',
        emoji: '🌾',
        next: 'result'
      },
      { 
        id: 'comm_social', 
        label: 'Kazi za Jamii (Social Work)', 
        icon: '🤗',
        emoji: '💕',
        next: 'result'
      },
      { 
        id: 'comm_ngo', 
        label: 'Kazi za Mashirika ya Kijamii (NGO)', 
        icon: '🏗️',
        emoji: '🏠',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - MARKETING
  q3_marketing: {
    id: 'q3_marketing',
    text: 'Ungependa kutangaza nini?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'mkt_digital', 
        label: 'Marketing ya Mitandao (Digital)', 
        icon: '📱',
        emoji: '🌐',
        next: 'result'
      },
      { 
        id: 'mkt_pr', 
        label: 'Uhusiano na Umma (PR)', 
        icon: '🗣️',
        emoji: '📢',
        next: 'result'
      },
      { 
        id: 'mkt_brand', 
        label: 'Kujenga Chapa (Branding)', 
        icon: '🏷️',
        emoji: '🎯',
        next: 'result'
      }
    ]
  },

  // SWALI LA PILI - SAYANSI
  q2_science: {
    id: 'q2_science',
    text: 'Unavutiwa na nini katika sayansi?',
    subtitle: 'Ni kitu gani kinakufurahisha?',
    options: [
      { 
        id: 'science_chemistry', 
        label: 'Kemia na Madawa', 
        icon: '🧪',
        emoji: '⚗️',
        next: 'q3_chemistry'
      },
      { 
        id: 'science_physics', 
        label: 'Fizikia na Anga', 
        icon: '🔭',
        emoji: '🌌',
        next: 'q3_physics'
      },
      { 
        id: 'science_biology', 
        label: 'Biolojia na Viumbe Hai', 
        icon: '🧬',
        emoji: '🌿',
        next: 'q3_biology'
      },
      { 
        id: 'science_engineering', 
        label: 'Uhandisi na Ujenzi', 
        icon: '🏗️',
        emoji: '🛠️',
        next: 'q3_engineering'
      }
    ]
  },

  // SWALI LA TATU - KEMIA
  q3_chemistry: {
    id: 'q3_chemistry',
    text: 'Ungependa kufanya nini na kemia?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'chem_pharmacy', 
        label: 'Dawa na Pharmacy', 
        icon: '💊',
        emoji: '⚕️',
        next: 'result'
      },
      { 
        id: 'chem_research', 
        label: 'Utafiti wa Kisayansi', 
        icon: '🔬',
        emoji: '🧪',
        next: 'result'
      },
      { 
        id: 'chem_industry', 
        label: 'Viwanda na Uzalishaji', 
        icon: '🏭',
        emoji: '⚙️',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - FIZIKIA
  q3_physics: {
    id: 'q3_physics',
    text: 'Ungependa kuchunguza nini?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'phys_astronomy', 
        label: 'Nafasi na Nyota', 
        icon: '🌠',
        emoji: '⭐',
        next: 'result'
      },
      { 
        id: 'phys_energy', 
        label: 'Nishati na Mwanga', 
        icon: '⚡',
        emoji: '💡',
        next: 'result'
      },
      { 
        id: 'phys_mechanics', 
        label: 'Mitambo na Uhandisi', 
        icon: '⚙️',
        emoji: '🛠️',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - BIOLOJIA
  q3_biology: {
    id: 'q3_biology',
    text: 'Ungependa kusoma nini kuhusu viumbe?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'bio_human', 
        label: 'Mwili wa Binadamu', 
        icon: '🧍',
        emoji: '👤',
        next: 'result'
      },
      { 
        id: 'bio_animals', 
        label: 'Wanyama na Mifugo', 
        icon: '🐾',
        emoji: '🐄',
        next: 'result'
      },
      { 
        id: 'bio_plants', 
        label: 'Mimea na Kilimo', 
        icon: '🌱',
        emoji: '🌾',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - UHANDISI
  q3_engineering: {
    id: 'q3_engineering',
    text: 'Ungependa kuunda nini?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'eng_civil', 
        label: 'Majengo na Miundombinu', 
        icon: '🏗️',
        emoji: '🏢',
        next: 'result'
      },
      { 
        id: 'eng_mechanical', 
        label: 'Mashine na Mitambo', 
        icon: '🔧',
        emoji: '⚙️',
        next: 'result'
      },
      { 
        id: 'eng_electrical', 
        label: 'Umeme na Nishati', 
        icon: '💡',
        emoji: '⚡',
        next: 'result'
      }
    ]
  },

  // SWALI LA PILI - AFYA
  q2_health: {
    id: 'q2_health',
    text: 'Ungependa kusaidia vipi?',
    subtitle: 'Ni kitu gani kinakufurahisha?',
    options: [
      { 
        id: 'health_doctor', 
        label: 'Kutibu wagonjwa', 
        icon: '👨‍⚕️',
        emoji: '🏥',
        next: 'q3_doctor'
      },
      { 
        id: 'health_nurse', 
        label: 'Kuwatunza wagonjwa', 
        icon: '👩‍⚕️',
        emoji: '💉',
        next: 'q3_nurse'
      },
      { 
        id: 'health_counselling', 
        label: 'Kusaidia na ushauri nasaha', 
        icon: '🧠',
        emoji: '💬',
        next: 'q3_counselling'
      },
      { 
        id: 'health_pharmacy', 
        label: 'Kutoa dawa na matibabu', 
        icon: '💊',
        emoji: '⚕️',
        next: 'q3_pharmacy'
      }
    ]
  },

  // SWALI LA TATU - UDAKTARI
  q3_doctor: {
    id: 'q3_doctor',
    text: 'Ungependa kuwa daktari wa aina gani?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'doc_general', 
        label: 'Daktari Mkuu (General)', 
        icon: '👨‍⚕️',
        emoji: '🩺',
        next: 'result'
      },
      { 
        id: 'doc_surgeon', 
        label: 'Upasuaji (Surgeon)', 
        icon: '🔪',
        emoji: '🏥',
        next: 'result'
      },
      { 
        id: 'doc_children', 
        label: 'Daktari wa Watoto', 
        icon: '👶',
        emoji: '🧒',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - UUGUZI
  q3_nurse: {
    id: 'q3_nurse',
    text: 'Ungependa kuwa muuguzi wa aina gani?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'nurse_hospital', 
        label: 'Hospitali', 
        icon: '🏥',
        emoji: '🩺',
        next: 'result'
      },
      { 
        id: 'nurse_community', 
        label: 'Jamii na Zahanati', 
        icon: '🏡',
        emoji: '🌍',
        next: 'result'
      },
      { 
        id: 'nurse_children', 
        label: 'Watoto na Wazazi', 
        icon: '👶',
        emoji: '🤱',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - USAIDIZI
  q3_counselling: {
    id: 'q3_counselling',
    text: 'Ungependa kusaidia watu na nini?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'counsel_psych', 
        label: 'Saikolojia na Afya ya Akili', 
        icon: '🧠',
        emoji: '💭',
        next: 'result'
      },
      { 
        id: 'counsel_edu', 
        label: 'Ushauri wa Elimu', 
        icon: '📚',
        emoji: '🎓',
        next: 'result'
      },
      { 
        id: 'counsel_social', 
        label: 'Ushauri wa Jamii', 
        icon: '🤝',
        emoji: '💕',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - FAMASIA
  q3_pharmacy: {
    id: 'q3_pharmacy',
    text: 'Ungependa kufanya nini katika famasia?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'pharm_dispensing', 
        label: 'Kutoa dawa', 
        icon: '💊',
        emoji: '⚕️',
        next: 'result'
      },
      { 
        id: 'pharm_research', 
        label: 'Kutengeneza dawa', 
        icon: '🔬',
        emoji: '🧪',
        next: 'result'
      },
      { 
        id: 'pharm_business', 
        label: 'Biashara ya Dawa', 
        icon: '🏪',
        emoji: '💰',
        next: 'result'
      }
    ]
  },

  // SWALI LA PILI - MAZINGIRA NA KILIMO
  q2_nature: {
    id: 'q2_nature',
    text: 'Unapenda kufanya nini nje ya nyumba?',
    subtitle: 'Ni kitu gani kinakufurahisha?',
    options: [
      { 
        id: 'nature_farming', 
        label: 'Kulima na kukuza mazao', 
        icon: '🌾',
        emoji: '🚜',
        next: 'q3_farming'
      },
      { 
        id: 'nature_animals', 
        label: 'Kutunza wanyama', 
        icon: '🐄',
        emoji: '🐮',
        next: 'q3_animals'
      },
      { 
        id: 'nature_conservation', 
        label: 'Kuhifadhi mazingira', 
        icon: '🌳',
        emoji: '🌍',
        next: 'q3_conservation'
      },
      { 
        id: 'nature_fishing', 
        label: 'Uvuvi na bahari', 
        icon: '🐟',
        emoji: '🎣',
        next: 'q3_fishing'
      }
    ]
  },

  // SWALI LA TATU - KILIMO
  q3_farming: {
    id: 'q3_farming',
    text: 'Ungependa kulima nini?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'farm_crops', 
        label: 'Mazao ya chakula', 
        icon: '🌽',
        emoji: '🌾',
        next: 'result'
      },
      { 
        id: 'farm_organic', 
        label: 'Kilimo hai (Organic)', 
        icon: '🌱',
        emoji: '🍃',
        next: 'result'
      },
      { 
        id: 'farm_business', 
        label: 'Biashara ya kilimo', 
        icon: '💰',
        emoji: '🏪',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - WANYAMA
  q3_animals: {
    id: 'q3_animals',
    text: 'Ungependa kutunza wanyama aina gani?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'vet_animals', 
        label: 'Mifugo (Ng\'ombe, mbuzi)', 
        icon: '🐄',
        emoji: '🐮',
        next: 'result'
      },
      { 
        id: 'vet_wild', 
        label: 'Wanyama pori', 
        icon: '🦁',
        emoji: '🐘',
        next: 'result'
      },
      { 
        id: 'vet_pets', 
        label: 'Wanyama wa kufugwa (Mbwa, paka)', 
        icon: '🐕',
        emoji: '🐈',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - MAZINGIRA
  q3_conservation: {
    id: 'q3_conservation',
    text: 'Ungependa kuhifadhi nini?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'cons_forest', 
        label: 'Misitu na Miti', 
        icon: '🌲',
        emoji: '🌳',
        next: 'result'
      },
      { 
        id: 'cons_water', 
        label: 'Maji na Mito', 
        icon: '💧',
        emoji: '🌊',
        next: 'result'
      },
      { 
        id: 'cons_wildlife', 
        label: 'Wanyama pori', 
        icon: '🦒',
        emoji: '🐘',
        next: 'result'
      }
    ]
  },

  // SWALI LA TATU - VUVI
  q3_fishing: {
    id: 'q3_fishing',
    text: 'Ungependa kufanya nini kwenye uvuvi?',
    subtitle: 'Ni kitu gani kinakuvutia?',
    options: [
      { 
        id: 'fish_marine', 
        label: 'Uvuvi wa baharini', 
        icon: '🐟',
        emoji: '🌊',
        next: 'result'
      },
      { 
        id: 'fish_farming', 
        label: 'Ufugaji wa samaki', 
        icon: '🐠',
        emoji: '🏊',
        next: 'result'
      },
      { 
        id: 'fish_business', 
        label: 'Biashara ya samaki', 
        icon: '💰',
        emoji: '🏪',
        next: 'result'
      }
    ]
  }
}