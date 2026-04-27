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
    photos: ["/photos/jour2/jour2-1.jpg"]
  },
  {
    id: "serrasafe",
    name: "SerraSafe",
    tagline: "L'agriculture protégée, connectée",
    porteurs: "Dany Anderson GUIMEFACK & Yacinthe KOSSIVI",
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
    photos: ["/photos/jour3/jour3-37.jpg"]
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
      text: "L'ambiance au GITEX Africa est électrisante. C'est une immense fierté de porter les couleurs du Burkina Faso et de montrer que notre expertise panafricaine peut apporter des solutions concrètes aux défis du continent.",
      author: "François KINDA, Porteur du projet Ges'Eau"
    },
    events: [
      {
        time: "Matinée",
        title: "Arrivée de la délégation à Marrakech",
        description: "La délégation de l'Incubateur 2iE est bien arrivée à Marrakech. Cette matinée a été entièrement consacrée à la logistique d'arrivée et à l'installation dans nos quartiers.",
      },
      {
        time: "Après-midi",
        title: "Déplacements et immersion",
        description: "Trajets en taxi à travers la ville de Marrakech pour se diriger vers le site de l'événement. L'occasion de découvrir l'effervescence de la ville hôte.",
      },
      {
        time: "Soirée",
        title: "Visite de repérage",
        description: "Première visite de repérage sur les lieux du GITEX Africa afin de prendre nos marques, d'identifier les différents pavillons et de préparer au mieux les journées intenses à venir.",
        image: "/photos/jour1/jour1-arrival.jpg"
      }
    ],
    galleryPhotos: ["/photos/jour1/jour1-arrival.jpg"]
  },
  {
    id: "jour2",
    number: 2,
    date: "Mercredi 08 Avril 2026",
    title: "Pitchs & Networking",
    headerImage: "/photos/jour2/jour2-7.jpg",
    quote: {
      text: "Les rencontres technologiques d'aujourd'hui confirment le potentiel de l'intelligence artificielle pour notre agriculture. Voir des investisseurs séduits par notre approche démontre que nous sommes sur la bonne voie.",
      author: "Dany Anderson GUIMEFACK, Co-porteur du projet SerraSafe"
    },
    events: [
      {
        time: "9h00 – 11h00",
        title: "Sessions de pitch",
        description: "Présentation des trois projets devant un jury d'investisseurs et d'experts internationaux. Chaque porteur a disposé de 5 minutes pour pitcher son innovation suivies de 3 minutes de Q&A.",
        image: "/photos/jour2/jour2-2.jpg"
      },
      {
        time: "11h30 – 13h00",
        title: "Networking & rencontres B2B",
        description: "Sessions de networking intensives avec des accélérateurs, des fonds d'investissement et des entreprises tech intéressées par les solutions eau, agriculture et environnement.",
        image: "/photos/jour2/jour2-7.jpg"
      },
      {
        time: "14h00 – 16h00",
        title: "Démonstrations sur le stand",
        description: "Démonstrations live des prototypes et plateformes devant les visiteurs du salon. Les visiteurs ont pu tester les interfaces de Ges'Eau, découvrir les capteurs SerraSafe et voir les cartes générées par Drone for Water.",
        image: "/photos/jour2/jour2-12.jpg"
      },
      {
        time: "16h30 – 18h00",
        title: "Conférences thématiques",
        description: "Participation aux panels sur les thématiques GreenTech et AgriTech en Afrique. Discussion sur les défis et opportunités de la transition numérique dans les secteurs de l'eau et de l'agriculture.",
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
    title: "Bilan & Perspectives",
    headerImage: "/photos/jour3/jour3-20.jpg",
    quote: {
      text: "L'utilisation des drones pour la gestion de l'eau suscite un vif intérêt. Ce salon nous a ouvert un réseau incroyable et tracé des perspectives d'avenir très prometteuses pour notre solution.",
      author: "DAO Zégué Guy Télesphore, Porteur du projet Drone for Water"
    },
    events: [
      {
        time: "9h00 – 12h00",
        title: "Dernières démonstrations",
        description: "Dernière journée de présentation au public. Accueil de nouvelles délégations et échanges approfondis avec des partenaires potentiels identifiés les jours précédents.",
        image: "/photos/jour3/jour3-5.jpg"
      },
      {
        time: "12h00 – 14h00",
        title: "Rencontres institutionnelles",
        description: "Rencontres avec des représentants d'institutions panafricaines et d'organismes de coopération internationale intéressés par le modèle d'incubation de 2iE.",
        image: "/photos/jour3/jour3-10.jpg"
      },
      {
        time: "14h00 – 16h00",
        title: "Visites d'autres stands innovants",
        description: "Exploration du salon pour découvrir les innovations présentées par d'autres startups et institutions africaines. Benchmarking et identification de synergies potentielles.",
        image: "/photos/jour3/jour3-20.jpg"
      },
      {
        time: "16h00 – 18h00",
        title: "Clôture et bilan de la mission",
        description: "Réunion de bilan de la délégation. Synthèse des contacts établis, des retours reçus et des opportunités identifiées. Préparation du rapport de mission.",
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
  intro: `La participation de l'Incubateur 2iE au GITEX Africa Morocco 2026 a été une réussite 
    sur plusieurs plans. Cette mission de trois jours a permis à la délégation burkinabè de se 
    positionner sur la scène internationale de l'innovation technologique et de renforcer la 
    visibilité des projets incubés.`,
  highlights: [
    { value: "25+", label: "Contacts stratégiques" },
    { value: "3", label: "Projets présentés" },
    { value: "8", label: "Pistes de partenariat" },
  ],
  sections: [
    {
      title: "Objectifs de la mission",
      content: `La mission au GITEX Africa avait pour principaux objectifs de présenter les innovations 
        développées au sein de l'Incubateur 2iE, d'identifier des partenaires techniques et financiers, 
        et de positionner l'Institut 2iE comme un acteur clé de l'innovation technologique en Afrique 
        de l'Ouest. Les trois projets sélectionnés — Ges'Eau, SerraSafe et Drone for Water — représentent 
        des réponses concrètes aux défis majeurs du continent en matière d'eau, d'agriculture et 
        d'environnement.`
    },
    {
      title: "Résultats obtenus",
      content: `Au terme des trois jours de participation, la délégation a pu établir plus de 25 contacts 
        stratégiques avec des investisseurs, des accélérateurs et des institutions. Huit pistes de 
        partenariat concrètes ont été identifiées, dont des opportunités de co-développement avec des 
        startups marocaines et des programmes d'accompagnement d'organismes internationaux. Les retours 
        des visiteurs et du jury sur les trois projets ont été très positifs, confirmant la pertinence 
        et le potentiel de marché des solutions proposées.`
    },
    {
      title: "Recommandations & perspectives",
      content: `Fort de cette expérience, l'Incubateur 2iE recommande de systématiser la participation 
        aux salons technologiques internationaux pour accroître la visibilité des projets. Un suivi rigoureux 
        des contacts établis et des pistes de partenariat est essentiel pour convertir ces opportunités. 
        Les prochaines étapes incluent l'organisation de rencontres de suivi avec les partenaires identifiés, 
        le développement des prototypes vers des versions commercialisables, et la préparation d'une 
        candidature pour la prochaine édition du GITEX Africa.`
    }
  ],
  pdfFilename: "Rapport Officiel de mission GITEX Africa au Maroc 2026 Incubateur 2iE-8 DEB.pdf"
};
