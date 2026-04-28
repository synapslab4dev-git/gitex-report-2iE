// ===== Données textuelles et références pour le rapport GITEX Africa 2026 =====

export const GITEX_INFO = {
  title: "GITEX Africa Morocco 2026",
  edition: "3ème édition",
  lieu: "Marrakech, Maroc",
  dates: "7 – 9 Avril 2026",
  description: `Le GITEX Africa Morocco est le plus grand salon technologique du continent africain. 
    Pour sa 3ème édition à Marrakech, il a réuni les acteurs majeurs de l'innovation, 
    de la tech et de l'entrepreneuriat venus de plus de 130 pays. L'événement s'est affirmé 
    comme une plateforme incontournable de networking, de showcase technologique et de dialogue 
    sur la transformation numérique du continent.`,
  stats: [
    { value: "1 500+", label: "Exposants" },
    { value: "130+", label: "Pays représentés" },
    { value: "50 000+", label: "Visiteurs" },
    { value: "3", label: "Jours de salon" },
  ]
};

export const INCUBATEUR_INFO = {
  title: "L'Incubateur 2iE",
  description: `L'Incubateur de l'Institut International d'Ingénierie de l'Eau et de l'Environnement (2iE), 
    basé à Ouagadougou au Burkina Faso, accompagne les porteurs de projets innovants dans les secteurs 
    de l'eau, de l'énergie, de l'environnement et du génie civil. Véritable catalyseur d'innovation 
    africaine, il transforme les idées de jeunes ingénieurs en entreprises viables à fort impact social.`,
  mission: `Dans le cadre du GITEX Africa Morocco 2026, l'Incubateur 2iE a envoyé une délégation de 
    trois projets porteurs d'innovation pour représenter l'excellence burkinabè et ouest-africaine sur 
    la scène internationale. Cette participation visait à accroître la visibilité des projets, 
    établir des partenariats stratégiques et explorer les opportunités de financement.`,
};

export const PROJECTS = [
  {
    id: "geseau",
    name: "Ges'Eau",
    tagline: "La gestion intelligente de l'eau",
    porteurs: "François KINDA",
    role: "Ingénieur en Eau & Assainissement – 2iE",
    color: "blue",
    icon: "💧",
    excerpt: "Solution numérique innovante de gestion intelligente des ressources en eau pour les collectivités et opérateurs.",
    description: `Ges'Eau est une solution numérique complète dédiée à la gestion intelligente des ressources en eau. 
      Le projet propose une plateforme permettant aux collectivités, aux opérateurs d'eau et aux gestionnaires 
      de réseaux de suivre en temps réel la distribution, la consommation et la qualité de l'eau potable.
      
      Grâce à des capteurs IoT connectés et un tableau de bord centralisé, Ges'Eau réduit les pertes d'eau et améliore l'accès à l'eau potable pour l'Afrique de l'Ouest.
      
      Le projet intègre également un volet d'orientation stratégique pour l'année 2025, visant à étendre 
      sa couverture à plusieurs communes du Burkina Faso et à développer des partenariats avec les bailleurs 
      de fonds internationaux.`,
    tags: ["IoT", "GreenTech", "Eau potable", "Burkina Faso"],
    photos: ["/photos/profiles/François KINDA (Ges'Eau).jpg"]
  },
  {
    id: "serrasafe",
    name: "SerraSafe",
    tagline: "L'agriculture protégée, connectée",
    porteurs: "Dany Anderson GUIMEFACK & Hyacinthe KOSSIVI",
    role: "Étudiants en Informatique (IA & Dev Fullstack) – 2iE",
    color: "green",
    icon: "🌿",
    excerpt: "Système de surveillance et d'automatisation pour serres agricoles utilisant l'IA et l'IoT.",
    description: `SerraSafe est un système intelligent de surveillance et de contrôle automatisé pour les serres 
      agricoles en Afrique. Le projet combine des capteurs environnementaux (température, humidité, luminosité, 
      CO2) avec des algorithmes d'intelligence artificielle pour optimiser les conditions de croissance 
      des cultures sous serre.
      
      La plateforme SerraSafe permet aux agriculteurs de monitorer à distance l'état de leurs serres via 
      une application mobile, de recevoir des alertes en cas d'anomalie et de piloter automatiquement 
      les systèmes d'irrigation, de ventilation et d'ombrage.
      
      L'objectif est d'augmenter les rendements agricoles de 30 à 50% tout en réduisant la consommation 
      d'eau et d'énergie, contribuant ainsi à la sécurité alimentaire du continent.`,
    tags: ["AgriTech", "IA", "Serres connectées", "Sécurité alimentaire"],
    photos: [
      "/photos/profiles/Dany Anderson (Serrasafe).jpg",
      "/photos/profiles/Hyacinth KOSSIVI (Serrasafe).jpg"
    ]
  },
  {
    id: "droneforwater",
    name: "Drone for Water",
    tagline: "Les yeux du ciel pour l'eau",
    porteurs: "DAO Zégué Guy Télesphore",
    role: "Ingénieur Géomètre & Pilote de drone – 2iE",
    color: "red",
    icon: "🚁",
    excerpt: "Drones spécialisés pour la cartographie et la surveillance des ressources en eau en Afrique.",
    description: `Drone for Water développe des solutions de télédétection par drones pour la cartographie, 
      la surveillance et la gestion durable des ressources en eau en Afrique. Le projet utilise des drones 
      équipés de caméras multispectrales et de capteurs LiDAR pour réaliser des relevés topographiques 
      de haute précision des bassins versants, des cours d'eau et des nappes phréatiques.
      
      Ces données aériennes sont ensuite traitées par des algorithmes de traitement d'image pour générer 
      des cartes hydrologiques, détecter les pollutions de surface, identifier les zones de recharge 
      des nappes et planifier l'implantation optimale de nouveaux forages.
      
      Drone for Water répond à un besoin critique en Afrique subsaharienne où les données hydrologiques 
      sont souvent insuffisantes ou obsolètes, freinant la planification efficace des projets d'accès à l'eau.`,
    tags: ["Drones", "Cartographie", "Hydrologie", "Télédétection"],
    photos: ["/photos/profiles/DAO Zegue Guy Telesphore (Drone for Water).jpg"]
  }
];

export const DAYS = [
  {
    id: "jour1",
    number: 1,
    date: "Mardi 07 Avril 2026",
    title: "Logistique & Repérage",
    headerImage: "/photos/jour1/jour1-arrival.jpg",
    quote: {
      text: "L'immersion au GITEX confirme une chose : la véritable innovation ne réside pas dans l'obstination à tout fabriquer soi-même, mais dans notre agilité à intégrer des technologies existantes pour résoudre un vrai problème, comme celui des pertes en eau.",
      author: "François KINDA, Porteur du projet Ges'Eau"
    },
    events: [
      {
        time: "Matinée",
        title: "Arrivée de la délégation à Marrakech",
        description: "La délégation de l'Incubateur 2iE est bien arrivée à Marrakech. Cette première demi-journée a été entièrement consacrée à la logistique d'arrivée et à l'installation.",
      },
      {
        time: "Après-midi",
        title: "Déplacements et immersion",
        description: "Trajets en taxi à travers la ville pour se diriger vers le site de l'événement. L'occasion de découvrir l'effervescence de la ville hôte avant le début des activités.",
      },
      {
        time: "Soirée",
        title: "Visite de repérage",
        description: "Première visite exploratoire sur les lieux du GITEX Africa afin de prendre nos marques, d'identifier les différents pavillons et de préparer au mieux les journées intenses à venir.",
        image: "/photos/jour1/gitex-exterior.jpg"
      }
    ],
    galleryPhotos: ["/photos/jour1/gitex-exterior.jpg"]
  },
  {
    id: "jour2",
    number: 2,
    date: "Mercredi 08 Avril 2026",
    title: "Veille, Rencontres & Stratégie",
    headerImage: "/photos/jour2/jour2-7.jpg",
    quote: {
      text: "Au-delà des startups et des géants de la tech, c'est surtout l'esprit entrepreneurial — ce désir de toujours vouloir repousser les limites — qui m'a le plus marqué durant cet événement.",
      author: "Dany Anderson GUIMEFACK, Co-porteur du projet SerraSafe"
    },
    events: [
      {
        time: "Matinée",
        title: "Veille Concurrentielle & Technologique",
        description: "La journée a débuté par une exploration ciblée des stands. Des rencontres clés ont eu lieu avec des acteurs de l'Agritech (PCS Agri, Agrogo) pour le projet SerraSafe, des spécialistes du traitement de l'eau pour Drone For Water, ainsi que des échanges constructifs avec des startups évoluant sur un segment similaire (WaterSec) pour Ges’Eau.",
        image: "/photos/jour2/jour2-1.jpg"
      },
      {
        time: "Après-midi",
        title: "Participation aux Conférences",
        description: "Participation à des sessions stratégiques, notamment une table ronde sur la \"fuite des cerveaux\", réunissant des personnalités influentes de l'écosystème tech marocain comme M. Jalal Charaf (École Centrale Casablanca), ainsi qu'un panel sur l'évolution des opérateurs télécoms.",
        image: "/photos/jour2/jour2-4.jpg"
      },
      {
        time: "Soirée",
        title: "Réseautage et Partenariats",
        description: "La journée s'est achevée par des discussions approfondies avec des partenaires potentiels, dont des fournisseurs de matériel IoT industriel (Ozon Connect) et des experts de l'IA comme Aristide Bandaogo (Go AI Corp), consolidant des pistes de collaboration concrètes.",
        image: "/photos/jour2/jour2-8.jpg"
      }
    ],
    galleryPhotos: [
      "/photos/jour2/jour2-1.jpg",
      "/photos/jour2/jour2-4.jpg",
      "/photos/jour2/jour2-6.jpg",
      "/photos/jour2/jour2-8.jpg",
      "/photos/jour2/jour2-9.jpg",
      "/photos/jour2/jour2-11.jpg",
    ]
  },
  {
    id: "jour3",
    number: 3,
    date: "Jeudi 09 Avril 2026",
    title: "Panels de Haut Niveau & Finale du Challenge",
    headerImage: "/photos/jour3/jour3-20.jpg",
    quote: {
      text: "Les projets liés à l'environnement et à l'eau suscitent un intérêt croissant à l'échelle africaine. Ce salon confirme que nos solutions sont non seulement pertinentes, mais aussi attendues par le marché.",
      author: "DAO Zégué Guy Télesphore, Porteur du projet Drone for Water"
    },
    events: [
      {
        time: "Matinée",
        title: "IA, Souveraineté & Données",
        description: "La matinée a été marquée par la participation à des panels de très haut niveau, notamment celui de Devoteam sur l'impact de l'IA en entreprise, et une conférence sur la protection des données en Afrique, rappelant les enjeux de conformité pour nos solutions.",
        image: "/photos/jour3/jour3-5.jpg"
      },
      {
        time: "Après-midi",
        title: "Pitchs & Inspiration",
        description: "Immersion au cœur de l'écosystème en assistant à la grande finale du Supernova Challenge. Les pitchs des startups finalistes, dont une sur la détection de fuites d'eau, ont validé la pertinence de nos propres projets. L'interview inspirante de l'entrepreneur et ex-footballeur Mamadou Sakho a clôturé cette phase.",
        image: "/photos/jour3/jour3-10.jpg"
      },
      {
        time: "Soirée",
        title: "Synthèse & Bilan",
        description: "Derniers échanges informels et consolidation des notes et contacts. Cette soirée a été dédiée à la synthèse des apprentissages et à la préparation du bilan de la mission.",
        image: "/photos/jour3/jour3-30.jpg"
      }
    ],
    galleryPhotos: [
      "/photos/jour3/jour3-2.jpg",
      "/photos/jour3/jour3-8.jpg",
      "/photos/jour3/jour3-12.jpg",
      "/photos/jour3/jour3-15.jpg",
      "/photos/jour3/jour3-25.jpg",
      "/photos/jour3/jour3-35.jpg",
    ]
  }
];

export const GLOBAL_REPORT = {
  title: "Rapport Global de Mission",
  intro: `La participation de la délégation de l'Incubateur 2iE au GITEX Africa 2026 a été une expérience d'une richesse exceptionnelle. Plus qu'un simple salon technologique, cette mission a servi de puissant catalyseur, permettant de confronter les ambitions de nos projets à la réalité du marché continental et mondial.`,
  highlights: [
    { value: "25+", label: "Contacts Stratégiques Établis" },
    { value: "3", label: "Projets Innovants Présentés" },
    { value: "8", label: "Pistes de Partenariat Qualifiées" },
  ],
  sections: [
    {
      title: "Objectifs de la Mission",
      content: `La mission visait avant tout à immerger les porteurs de projets au cœur de l'écosystème pour leur permettre de :\n\n- Effectuer une veille technologique et concurrentielle de pointe.\n- Identifier et rencontrer des partenaires potentiels (investisseurs, fournisseurs, experts).\n- Renforcer la vision stratégique de chaque projet en le confrontant aux standards internationaux.\n- Capitaliser sur les apprentissages pour accélérer le développement des startups.`
    },
    {
      title: "Résultats et Opportunités",
      content: `Au terme des trois jours, la délégation a non seulement atteint ses objectifs mais les a dépassés. Plus de 25 contacts stratégiques ont été établis et huit pistes de partenariat concrètes ont été identifiées, incluant des opportunités de co-développement, d'approvisionnement matériel et des programmes d'accompagnement. Les retours sur les trois projets ont confirmé la pertinence de leurs propositions de valeur et leur fort potentiel de marché.`
    },
    {
      title: "Perspectives d'Avenir",
      content: `Fort de cette expérience, l'Incubateur 2iE et ses porteurs de projets s'engagent dans une phase active de conversion de ces opportunités. Les prochaines étapes incluent un suivi rigoureux des contacts établis, la consolidation des feuilles de route techniques et commerciales, et la préparation d'une présence encore plus forte lors des futurs événements technologiques panafricains.`
    }
  ],
  pdfFilename: "Rapport Officiel de mission GITEX Africa au Maroc 2026 Incubateur 2iE-8 DEB.pdf"
};
