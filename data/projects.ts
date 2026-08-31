export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
}

export const projectsData: Project[] = [
  // Petroleum
  {
    id: "petro-1",
    title: "Offshore Platform Upgrade",
    client: "Global Petroleum",
    category: "petroleum",
    location: "Aberdeen, UK",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2000&auto=format&fit=crop",
    description: "Complete upgrade of offshore platform processing units to handle increased extraction rates safely and efficiently."
  },
  {
    id: "petro-2",
    title: "Refinery Expansion Project",
    client: "Euro Oil",
    category: "petroleum",
    location: "Kakinada, India",
    year: "Ongoing",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop",
    description: "Expanding the main refinery facility by adding a new distillation tower and advanced filtration systems."
  },
  {
    id: "petro-3",
    title: "Pipeline Network Installation",
    client: "North Sea Energy",
    category: "petroleum",
    location: "Aberdeen, UK",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop",
    description: "Installed over 120km of high-pressure pipeline network to connect new extraction points to the main processing hub."
  },
  {
    id: "petro-4",
    title: "Tank Farm Construction",
    client: "Bharat Petro",
    category: "petroleum",
    location: "Mangalore, India",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
    description: "Constructed a state-of-the-art tank farm with 10 large capacity storage units equipped with automated monitoring."
  },
  {
    id: "petro-5",
    title: "Petrochemical Plant Modernization",
    client: "Reliance Ind",
    category: "petroleum",
    location: "Jamnagar, India",
    year: "Ongoing",
    image: "https://images.unsplash.com/photo-1503762687835-12997a9753a3?q=80&w=2000&auto=format&fit=crop",
    description: "Modernizing the control systems and structural integrity of the petrochemical plant for optimal output."
  },
  
  // Wind Construction
  {
    id: "wind-1",
    title: "North Sea Offshore Wind Farm",
    client: "UK Green Energy",
    category: "wind",
    location: "Aberdeen, UK",
    year: "Ongoing",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop",
    description: "Erecting 50 advanced offshore wind turbines capable of powering over 200,000 homes annually."
  },
  {
    id: "wind-2",
    title: "Coastal Wind Park",
    client: "Andhra Renewables",
    category: "wind",
    location: "Kakinada, India",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2000&auto=format&fit=crop",
    description: "Installation of onshore wind turbines along the coastal belt, maximizing energy capture from sea breezes."
  },
  {
    id: "wind-3",
    title: "Highland Wind Turbine Installation",
    client: "Scottish Power",
    category: "wind",
    location: "Scottish Highlands, UK",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1473663677333-e18e87413d3f?q=80&w=2000&auto=format&fit=crop",
    description: "Complex logistical operation to transport and install high-capacity wind turbines in rugged terrain."
  },
  {
    id: "wind-4",
    title: "Wind Farm Substation",
    client: "EuroGrid",
    category: "wind",
    location: "Liverpool, UK",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop",
    description: "Built a massive offshore substation to collect and route power generated from the wind farm to the mainland grid."
  },
  {
    id: "wind-5",
    title: "Turbine Maintenance & Upgrade",
    client: "Suzlon",
    category: "wind",
    location: "Jaisalmer, India",
    year: "Ongoing",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000&auto=format&fit=crop",
    description: "Upgrading legacy wind turbines with modern carbon-fiber blades and improved drivetrain systems."
  },

  // Power Energy
  {
    id: "power-1",
    title: "Combined Cycle Power Plant",
    client: "National Grid",
    category: "power",
    location: "Manchester, UK",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000&auto=format&fit=crop",
    description: "Constructed a 500MW combined cycle gas turbine power plant to provide reliable baseline energy."
  },
  {
    id: "power-2",
    title: "Thermal Plant Emission Control",
    client: "NTPC",
    category: "power",
    location: "Ramagundam, India",
    year: "Ongoing",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000&auto=format&fit=crop",
    description: "Installing advanced scrubber units and electrostatic precipitators to drastically reduce emissions."
  },
  {
    id: "power-3",
    title: "Hydroelectric Dam Upgrade",
    client: "HydroUK",
    category: "power",
    location: "Wales, UK",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1505051508008-923feaf90180?q=80&w=2000&auto=format&fit=crop",
    description: "Upgraded the penstocks and turbine generators of an aging hydroelectric facility to boost efficiency."
  },
  {
    id: "power-4",
    title: "Substation Expansion",
    client: "APTRANSCO",
    category: "power",
    location: "Kakinada, India",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1541888087405-1a823e1e69b5?q=80&w=2000&auto=format&fit=crop",
    description: "Expanded a critical 400kV substation to handle increased load from newly commissioned renewable sources."
  },
  {
    id: "power-5",
    title: "Nuclear Facility Cooling Tower",
    client: "UK Atomic",
    category: "power",
    location: "Sellafield, UK",
    year: "Ongoing",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2000&auto=format&fit=crop",
    description: "Structural reinforcement and interior refinishing of a massive cooling tower at a nuclear power generation site."
  },

  // Offshore Projects
  {
    id: "offshore-1",
    title: "Deepwater Drilling Rig Assembly",
    client: "Oceanic Drillers",
    category: "offshore",
    location: "Aberdeen, UK",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2000&auto=format&fit=crop",
    description: "Assembled and commissioned a next-generation semi-submersible deepwater drilling rig."
  },
  {
    id: "offshore-2",
    title: "Subsea Cable Laying",
    client: "Global Connect",
    category: "offshore",
    location: "North Sea",
    year: "Ongoing",
    image: "https://images.unsplash.com/photo-1551690559-00ab57e8d5e8?q=80&w=2000&auto=format&fit=crop",
    description: "Laying thousands of kilometers of subsea high-voltage DC cables connecting offshore energy to grids."
  },
  {
    id: "offshore-3",
    title: "FPSO Vessel Conversion",
    client: "Marine Energy",
    category: "offshore",
    location: "Kochi, India",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1533060085876-0f732450ff80?q=80&w=2000&auto=format&fit=crop",
    description: "Converted a supertanker into a fully functional Floating Production Storage and Offloading (FPSO) vessel."
  },
  {
    id: "offshore-4",
    title: "Offshore Helipad Construction",
    client: "PetroUK",
    category: "offshore",
    location: "Aberdeen, UK",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1569428034239-f9565e32e224?q=80&w=2000&auto=format&fit=crop",
    description: "Designed and constructed a heavily reinforced aluminum helipad for an offshore production facility."
  },
  {
    id: "offshore-5",
    title: "Platform Decommissioning",
    client: "North Sea Energy",
    category: "offshore",
    location: "North Sea",
    year: "Ongoing",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop",
    description: "Safe and environmentally conscious dismantling and removal of an end-of-life offshore oil platform."
  },

  // Civil Infrastructure
  {
    id: "civil-1",
    title: "Port Expansion and Dredging",
    client: "Kakinada Seaports",
    category: "civil",
    location: "Kakinada, India",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=2000&auto=format&fit=crop",
    description: "Expanded port facilities with new cargo terminals and extensive channel dredging for larger vessels."
  },
  {
    id: "civil-2",
    title: "Industrial Logistics Hub",
    client: "UK Freight",
    category: "civil",
    location: "Birmingham, UK",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
    description: "Built a massive 1-million sq ft industrial logistics hub with automated warehousing capabilities."
  },
  {
    id: "civil-3",
    title: "Coastal Highway Bridge",
    client: "NHAI",
    category: "civil",
    location: "Vizag, India",
    year: "Ongoing",
    image: "https://images.unsplash.com/photo-1473138883733-4fecbb99ebf0?q=80&w=2000&auto=format&fit=crop",
    description: "Constructing a 5km long suspension bridge over coastal backwaters to improve industrial transit."
  },
  {
    id: "civil-4",
    title: "Heavy Equipment Foundry",
    client: "SteelWorks",
    category: "civil",
    location: "Sheffield, UK",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2000&auto=format&fit=crop",
    description: "Erected a custom foundry facility capable of casting extreme heavy components for offshore use."
  },
  {
    id: "civil-5",
    title: "Water Treatment Facility",
    client: "City Council",
    category: "civil",
    location: "Aberdeen, UK",
    year: "Ongoing",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
    description: "Developing a massive industrial water treatment and desalination facility for regional heavy industries."
  },

  // Industrial Manufacturing
  {
    id: "ind-1",
    title: "Automated Assembly Line",
    client: "AutoMakers",
    category: "industrial",
    location: "Coventry, UK",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2000&auto=format&fit=crop",
    description: "Installed a fully robotic assembly line for electric vehicle component manufacturing."
  },
  {
    id: "ind-2",
    title: "Steel Smelting Furnace",
    client: "Tata Steel",
    category: "industrial",
    location: "Kalinganagar, India",
    year: "Ongoing",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop",
    description: "Building and commissioning a new blast furnace to increase overall steel output."
  },
  {
    id: "ind-3",
    title: "Chemical Processing Unit",
    client: "ChemCorp",
    category: "industrial",
    location: "Teesside, UK",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1582214959146-231cb6353d71?q=80&w=2000&auto=format&fit=crop",
    description: "Constructed specialized chemical reactors and processing units with extreme corrosion resistance."
  },
  {
    id: "ind-4",
    title: "Cement Silo Construction",
    client: "Ambuja Cement",
    category: "industrial",
    location: "Bhatapara, India",
    year: "Completed",
    image: "https://images.unsplash.com/photo-1590483866160-52fbce2d921b?q=80&w=2000&auto=format&fit=crop",
    description: "Erected four 50-meter tall reinforced concrete silos for bulk cement storage."
  },
  {
    id: "ind-5",
    title: "Pharmaceutical Plant Setup",
    client: "BioPharm",
    category: "industrial",
    location: "Hyderabad, India",
    year: "Ongoing",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=2000&auto=format&fit=crop",
    description: "Designing and building specialized clean rooms and manufacturing floors for vaccine production."
  }
];
