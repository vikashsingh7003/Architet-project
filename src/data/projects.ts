export interface Project {
  id: string;
  slug: string;
  city: string;
  titleEn: string;
  titlePl: string;
  shortTextEn: string;
  shortTextPl: string;
  descriptionEn: string[];
  descriptionPl: string[];
  bgUrl: string;
  images: string[];
  tags: string[];
  specs: {
    year: string;
    type: string;
    area: string;
    location: string;
    status: string;
  };
}

export const projects: Project[] = [
  {
    id: "fp1",
    slug: "new-succession-tower",
    city: "City Alpha",
    titleEn: "New Succession — Mixed-Use Tower",
    titlePl: "New Succession — Wieżowiec Wielofunkcyjny",
    shortTextEn: "A landmark mixed-use development that redefines urban skylines with its sculptural form and sustainable design systems.",
    shortTextPl: "Ikoniczny projekt wielofunkcyjny redefiniujący panoramę miasta dzięki rzeźbiarskiej formie i zrównoważonym systemom projektowania.",
    descriptionEn: [
      "New Succession is a landmark mixed-use tower that stands as a bold statement of contemporary architecture. Rising 42 floors above the city, its faceted glass façade captures and reflects light throughout the day, creating a constantly changing visual experience.",
      "The building integrates commercial offices on the lower floors, transitioning into luxury residences above, with sky gardens at every fifth level providing residents with outdoor green spaces in the heart of the city.",
      "Sustainability was central to the design process. The tower features a double-skin façade for passive cooling, integrated photovoltaic panels, and rainwater collection systems — reducing its energy consumption by 40% compared to conventional towers.",
    ],
    descriptionPl: [
      "New Succession to ikoniczny wieżowiec wielofunkcyjny będący odważną manifestacją współczesnej architektury. Wznoszący się 42 piętra ponad miasto, jego wielopłaszczyznowa szklana fasada pochłania i odbija światło przez cały dzień.",
      "Budynek integruje biura komercyjne na niższych piętrach, przechodząc w luksusowe rezydencje powyżej, z ogrodami niebiańskimi na co piątym poziomie zapewniającymi mieszkańcom zielone przestrzenie w centrum miasta.",
      "Zrównoważony rozwój był centralnym elementem procesu projektowania. Wieża posiada podwójną fasadę do pasywnego chłodzenia, zintegrowane panele fotowoltaiczne i systemy zbierania wody deszczowej.",
    ],
    bgUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format&fit=crop",
    ],
    tags: ["Mixed-Use", "High-rise", "Sustainable"],
    specs: { year: "2023", type: "Mixed-Use Tower", area: "62,000 m²", location: "City Alpha", status: "Completed" },
  },
  {
    id: "fp2",
    slug: "retail-park-complex",
    city: "City Beta",
    titleEn: "Retail Park — Commercial Complex",
    titlePl: "Retail Park — Kompleks Handlowy",
    shortTextEn: "A contemporary retail destination integrating green spaces, open plazas, and seamless pedestrian flow.",
    shortTextPl: "Nowoczesna destynacja handlowa integrująca zielone przestrzenie, otwarte place i płynny ruch pieszy.",
    descriptionEn: [
      "The Retail Park redefines the conventional shopping center model by weaving nature and commerce together. The 35,000 m² complex is organized around a central green spine — a landscaped boulevard that draws visitors through the development.",
      "Rather than a single enclosed box, the scheme is broken into a series of pavilions connected by covered walkways, allowing natural light and ventilation to penetrate deep into the retail areas.",
      "The rooftop is entirely accessible to the public: a 4,000 m² park with seating, playgrounds, and seasonal markets. This civic gesture has made the Retail Park a genuine destination beyond just shopping.",
    ],
    descriptionPl: [
      "Retail Park redefiniuje konwencjonalny model centrum handlowego, łącząc naturę z handlem. Kompleks 35 000 m² zorganizowany jest wokół centralnego zielonego kręgosłupa — krajobrazowego bulwaru.",
      "Zamiast jednolitego zamkniętego pudełka, schemat podzielony jest na szereg pawilonów połączonych krytymi alejkami, co pozwala naturalnemu światłu i wentylacji wnikać głęboko w obszary handlowe.",
      "Dach jest w całości dostępny publicznie: 4 000 m² parku z miejscami do siedzenia, placami zabaw i sezonowymi rynkami.",
    ],
    bgUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580977251946-2e0d78b33489?w=1200&q=80&auto=format&fit=crop",
    ],
    tags: ["Commercial", "Retail", "Public Space"],
    specs: { year: "2022", type: "Retail Complex", area: "35,000 m²", location: "City Beta", status: "Completed" },
  },
  {
    id: "fp3",
    slug: "big-business-innovation-center",
    city: "City Gamma",
    titleEn: "BIG — Business Innovation Center",
    titlePl: "BIG — Centrum Innowacji Biznesowych",
    shortTextEn: "An award-winning business campus that fosters collaboration through thoughtful spatial design and natural light.",
    shortTextPl: "Wielokrotnie nagradzany kampus biznesowy wspierający współpracę poprzez przemyślany design przestrzenny i naturalne światło.",
    descriptionEn: [
      "The Business Innovation Center was conceived as an ecosystem for creativity and collaboration. Rather than traditional enclosed offices, the campus features a series of interconnected buildings arranged around shared courtyards and informal gathering spaces.",
      "The centrepiece is a soaring 18-metre atrium covered by a structural glass roof, which serves as the social heart of the campus. Startups, established firms, and research institutions share this space, creating a serendipitous environment for cross-pollination of ideas.",
      "BIG has received recognition from three international architecture bodies and has been published in numerous architectural journals.",
    ],
    descriptionPl: [
      "Centrum Innowacji Biznesowych zostało pomyślane jako ekosystem dla kreatywności i współpracy. Zamiast tradycyjnych zamkniętych biur, kampus oferuje szereg połączonych budynków rozmieszczonych wokół wspólnych dziedzińców.",
      "Centrum stanowi sięgające 18 metrów wysokości atrium przykryte strukturalnym szklanym dachem, które służy jako społeczne serce kampusu.",
      "BIG otrzymało uznanie od trzech międzynarodowych organizacji architektonicznych i zostało opublikowane w licznych czasopismach architektonicznych.",
    ],
    bgUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80&auto=format&fit=crop",
    ],
    tags: ["Office", "Campus", "Award-Winning"],
    specs: { year: "2021", type: "Business Campus", area: "28,500 m²", location: "City Gamma", status: "Completed" },
  },
  {
    id: "fp4",
    slug: "gateway-cultural-hub",
    city: "City Delta",
    titleEn: "Gateway — Cultural Hub",
    titlePl: "Gateway — Centrum Kultury",
    shortTextEn: "A gateway structure serving as the cultural and civic heart of the city, welcoming visitors with bold architectural language.",
    shortTextPl: "Budowla bramna służąca jako kulturalne i obywatelskie serce miasta, witające odwiedzających odważnym językiem architektonicznym.",
    descriptionEn: [
      "Gateway was designed to be more than a building — it is a threshold, a meeting point, and a civic landmark. Straddling the main city boulevard, its dramatic arched form creates a framed view of the historic city centre beyond.",
      "The interior programme includes a 600-seat concert hall, three flexible exhibition galleries, a rooftop amphitheatre, and a ground floor market hall that activates the street 7 days a week.",
      "Local stone and handcrafted ceramic tiles reference the city's manufacturing heritage, while the structural system — an exposed concrete diagrid — speaks to engineering ambition and contemporary construction methods.",
    ],
    descriptionPl: [
      "Gateway zostało zaprojektowane, aby być czymś więcej niż budynkiem — jest progiem, punktem spotkań i obywatelskim symbolem. Przekraczając główny bulwar miejski, jego dramatyczna forma łukowa tworzy kadrowany widok historycznego centrum.",
      "Program wewnętrzny obejmuje salę koncertową na 600 miejsc, trzy elastyczne galerie wystawiennicze, amfiteatr na dachu i halę rynkową na parterze.",
      "Lokalny kamień i ręcznie robione płytki ceramiczne nawiązują do dziedzictwa przemysłowego miasta, podczas gdy system konstrukcyjny — odsłonięta betonowa diagrida — mówi o ambicjach inżynierskich.",
    ],
    bgUrl: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1920&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580977251946-2e0d78b33489?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop",
    ],
    tags: ["Cultural", "Public", "Landmark"],
    specs: { year: "2024", type: "Cultural Hub", area: "18,200 m²", location: "City Delta", status: "Completed" },
  },
];

export const gridProjects = [
  {
    id: "grid1",
    slug: "new-succession-tower",
    title: "Project #1",
    tags: ["Office", "Poland", "High-rise"],
    description: "The Creative Harbor office project combines modern aesthetics with thoughtful functionality, creating an inspiring work environment.",
    bgUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
    bgAlt: "Skyscraper at night",
    delay: "",
  },
  {
    id: "grid2",
    slug: "retail-park-complex",
    title: "Project #2",
    tags: ["Apartments", "Capital City"],
    description: "Panorama Residence is a synonym of luxury and comfort, offering residents a refined living space with panoramic views.",
    bgUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format&fit=crop",
    bgAlt: "Modern apartments",
    delay: "reveal-delay-1",
  },
  {
    id: "grid3",
    slug: "big-business-innovation-center",
    title: "Project #3",
    tags: ["Shopping Center", "City Center"],
    description: "Metropolia is a modern shopping center redefining the retail and entertainment experience through spacious interiors and innovative design.",
    bgUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop",
    bgAlt: "Shopping center",
    delay: "reveal-delay-1",
  },
  {
    id: "grid4",
    slug: "gateway-cultural-hub",
    title: "Project #4",
    tags: ["Public Space", "Urban"],
    description: "Green Market is an urban public space project that becomes the heart of the local community, inviting relaxation and interaction.",
    bgUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80&auto=format&fit=crop",
    bgAlt: "Public space",
    delay: "reveal-delay-2",
  },
];
