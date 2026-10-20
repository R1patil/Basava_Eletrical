"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Shield,
  Zap,
  Phone,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Building2,
  Cpu,
  Clock,
  Layers,
  Flame,
  ChevronRight,
  Menu,
  X,
  FileCheck2,
  MessageSquare,
  Sparkles,
  Award,
} from "lucide-react";

interface ProjectPhoto {
  id: string;
  category: "slab" | "motor" | "utility";
  title: string;
  location: string;
  image: string;
  tag: string;
  description: string;
  spec: string;
}

const PROJECTS: ProjectPhoto[] = [
  {
    id: "1",
    category: "slab",
    title: "Roof Slab Conduit Layout on Heavy Rebar",
    location: "Commercial Complex, Banahatti",
    image: "/photos/work_1.jpeg",
    tag: "Pre-Pour Casting",
    description:
      "25mm heavy FRLS conduit network routed across steel reinforcement prior to concrete pour. Laser-aligned fan points and vibration-proof wire anchors.",
    spec: "Heavy-Gauge 25mm FRLS • IS 732",
  },
  {
    id: "2",
    category: "slab",
    title: "Ceiling Fan Box Anchor & Slab Integration",
    location: "Residential Villa, Banahatti",
    image: "/photos/work_2.jpeg",
    tag: "Structural Anchor",
    description:
      "Deep-set fan hooks secured directly to rebar skeleton with high-density anti-slurry seals to prevent cement mortar clogging.",
    spec: "50kg Dynamic Load Rated • Slurry-Proof",
  },
  {
    id: "3",
    category: "utility",
    title: "Subterranean Utility Trench & Cable Sleeving",
    location: "Industrial Utility Site, Bagalkot Dist.",
    image: "/photos/work_trench.jpeg",
    tag: "Underground Power",
    description:
      "Excavated subterranean utility trench with mechanical PVC pipe sleeving for armored power feeder cables and safety warning sand capping.",
    spec: "1100V Armored Utility • Mechanical Sleeve",
  },
  {
    id: "4",
    category: "motor",
    title: "Precision Copper Stator Coil Rewinding",
    location: "Basava_Electrical Unit, Banahatti",
    image: "/photos/work_6.jpeg",
    tag: "Motor Remanufacture",
    description:
      "Complete stator overhaul using 99.99% pure electrolytic grade copper wire. Exact turn counts, slot wedge locking, and Class-F thermal paper.",
    spec: "99.99% ETP Copper • Class F 155°C",
  },
  {
    id: "5",
    category: "motor",
    title: "Remanufactured Stator with Insulated Leads",
    location: "Motor Workshop, Banahatti",
    image: "/photos/work_7.jpeg",
    tag: "Quality Verified",
    description:
      "High-tensile fiberglass cord binding and thermal lead termination prior to deep varnish impregnation and oven baking.",
    spec: "Surge Tested • Oven Baked Varnish",
  },
  {
    id: "6",
    category: "slab",
    title: "Wall Chasing & Feeder Drop Conduits",
    location: "Multi-Floor Residence, Banahatti",
    image: "/photos/work_3.jpeg",
    tag: "Smooth Chasing",
    description:
      "Concealed down-drop conduit routing with gradual sweeping 6D bends to allow smooth cable pulling with zero friction snag.",
    spec: "Smooth 6D Radius • Snag-Free",
  },
  {
    id: "7",
    category: "slab",
    title: "Final Pre-Pour QA Inspection on Roof Slab",
    location: "Commercial Site, Banahatti",
    image: "/photos/work_5.jpeg",
    tag: "Contractor QA",
    description:
      "On-site personal inspection by Praveen verifying conduit fixtures, terminal caps, and pipe elevation before concrete vibrators operate.",
    spec: "100% Vibro-Tested • Zero Slurry Ingress",
  },
];

export default function HomePage() {
  const [selectedPhoto, setSelectedPhoto] = useState<ProjectPhoto | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState<number>(0);

  // Form State
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formService, setFormService] = useState("Roof Slab Conduit Engineering");
  const [formLocation, setFormLocation] = useState("");
  const [formDetails, setFormDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hello Praveen (Basava_Electrical),\n\nI want to schedule an engineering consultation / site inspection.\n\n*Name:* ${formName}\n*Phone:* ${formPhone}\n*Service Required:* ${formService}\n*Site Location:* ${formLocation}\n*Project Details:* ${formDetails || "N/A"}\n\nPlease let me know your availability.`
    );

    window.open(`https://wa.me/917090243948?text=${message}`, "_blank");
  };

  const engineeringServices = [
    {
      title: "Multi-Story Roof Slab Conduit Engineering",
      subtitle: "Pre-pour rebar conduit architecture with zero pipe choking",
      image: "/photos/work_1.jpeg",
      caption: "Commercial Complex: 25mm FRLS Conduit Grid Prior to Pour",
      description:
        "Every floor slab conduit layout is calculated to integrate seamlessly between top and bottom reinforcement rebar. We deploy heavy-duty 25mm FRLS conduits, laser-aligned fan hooks, and vibration-proof galvanized tie anchors. Before concrete pumps start, every junction is mechanically sealed to guarantee zero cement slurry ingress.",
      bullets: [
        "Heavy-duty 25mm Fire Retardant Low Smoke (FRLS) conduits",
        "Anti-slurry paper & tape mechanical packing on all fan boxes",
        "Vibrator needle-proof galvanized steel wire binding every 1 meter",
        "Gradual 6D sweeping bends for frictionless subsequent wire pulling",
      ],
      badge: "Pre-Pour Slab Specialty",
    },
    {
      title: "Pure Copper Motor & Stator Rewinding",
      subtitle: "Electromechanical overhaul for fans, pumps, and industrial motors",
      image: "/photos/work_6.jpeg",
      caption: "Banahatti Workshop: 99.99% Pure Copper Dual-Coat Stator Winding",
      description:
        "We reject commercial copper alloys. Stators are rewound strictly using 99.99% pure electrolytic grade (ETP) dual-coat enameled copper wire. Every slot is lined with Nomex/Mylar composite insulation, secured with hard wedges, tightly bound with fiberglass cord, and subjected to deep varnish oven baking for maximum torque and thermal endurance.",
      bullets: [
        "100% Pure ETP dual-coat modified polyester copper wire",
        "Class F (155°C) & Class H (180°C) high-temperature insulation",
        "Nomex slot liners & phase separation barrier papers",
        "Complete varnish dipping and controlled oven bake curing",
      ],
      badge: "Class-F Thermal Winding",
    },
    {
      title: "Subterranean Utility Power Trenching",
      subtitle: "Armored transmission sleeving and certified sub-1-ohm earthing",
      image: "/photos/work_trench.jpeg",
      caption: "Utility Site: Mechanical PVC Sleeving for Armored Cables",
      description:
        "Heavy power feeds require mechanical ground protection. We execute excavated underground trenches with heavy-wall PVC conduit sleeving for armored power cables, cushioned with sand bedding and safety marker tape. Integrated with chemical bentonite pipe earthing pits that maintain ground resistance strictly below 1 Ohm.",
      bullets: [
        "Heavy armored power cable mechanical pipe sleeving",
        "Sand cushion layer and protective concrete tile capping",
        "Chemical pipe earthing pits with resistance < 1.0 Ohm",
        "Zero-compromise earth fault return path protection",
      ],
      badge: "Underground Infrastructure",
    },
    {
      title: "Commercial Building Electrical & Switchgear",
      subtitle: "3-phase load balancing, MCB distribution, and surge protection",
      image: "/photos/work_3.jpeg",
      caption: "Commercial Showroom: Wall Chasing & Feeder Drops",
      description:
        "Structured wiring for commercial showrooms, residential complexes, and workshops. Phase load balancing across 3-phase incoming supplies prevents neutral overheating and circuit trips. Equipped with branded MCBs, MCCBs, and Type-2 Surge Protection Devices (SPD).",
      bullets: [
        "Full 3-phase load balancing calculation by Diploma Engineer",
        "Fire-retardant distribution boards with isolated neutral links",
        "Surge protection devices (SPD) safeguarding sensitive electronics",
        "100% megger insulation test (>1 MΩ) prior to power energization",
      ],
      badge: "IS 732 Code Compliant",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#f3f4f6] font-sans selection:bg-[#00d2ff] selection:text-[#0b0f19]">
      {/* 1. TOP MINIMALIST STATUS STRIP */}
      <div className="border-b border-[#1e2640]/70 bg-[#070b13]/80 backdrop-blur-sm text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[#9ca3af]">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#f3f4f6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-pulse"></span>
              Praveen, Diploma Electrical Engineer
            </span>
            <span className="hidden sm:inline text-[#1e2640]">•</span>
            <span className="hidden sm:inline">3+ Years Field Experience</span>
            <span className="hidden md:inline text-[#1e2640]">•</span>
            <span className="hidden md:inline text-xs">Rabakavi Banahatti &amp; Bagalkot Dist.</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href="tel:+917090243948"
              className="text-[#f3f4f6] hover:text-[#00d2ff] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#00d2ff]" />
              <span>+91 70902 43948</span>
            </a>
            <span className="text-[#1e2640]">|</span>
            <a
              href="https://wa.me/917090243948"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00d2ff] hover:underline flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 2. REFINED MINIMALIST HEADER */}
      <header className="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md border-b border-[#1e2640]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-[#2e3b60] bg-black shadow-md group-hover:border-[#00d2ff] transition-colors">
              <Image
                src="/logo.jpg"
                alt="Basava_Electrical Monogram"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#f3f4f6] flex items-center gap-1">
                Basava<span className="text-[#00d2ff]">_Electrical</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-[#9ca3af] font-mono">
                Power &amp; Contracting
              </span>
            </div>
          </a>

          {/* Clean Text Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#9ca3af]">
            <a href="#services" className="hover:text-[#00d2ff] transition-colors">
              Services
            </a>
            <a href="#evidence" className="hover:text-[#00d2ff] transition-colors">
              Field Evidence
            </a>
            <a href="#workflow" className="hover:text-[#00d2ff] transition-colors">
              Quality Protocol
            </a>
            <a href="#standards" className="hover:text-[#00d2ff] transition-colors">
              Standards
            </a>
            <a href="#contact" className="hover:text-[#00d2ff] transition-colors">
              Consultation
            </a>
          </nav>

          {/* Action */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00d2ff] hover:bg-[#00b8e6] text-[#0b0f19] font-bold text-xs tracking-wide shadow-lg shadow-[#00d2ff]/20 transition-all active:scale-95"
            >
              <span>Consult Engineer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#9ca3af] hover:text-[#f3f4f6]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#1e2640] bg-[#0b0f19] px-6 py-6 space-y-4">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#f3f4f6] hover:text-[#00d2ff] font-medium"
            >
              Services
            </a>
            <a
              href="#evidence"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#f3f4f6] hover:text-[#00d2ff] font-medium"
            >
              Field Evidence
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#f3f4f6] hover:text-[#00d2ff] font-medium"
            >
              Quality Protocol
            </a>
            <a
              href="#standards"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#f3f4f6] hover:text-[#00d2ff] font-medium"
            >
              Standards
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-[#00d2ff] text-[#0b0f19] font-bold text-xs"
              >
                Consult Engineer
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. FLUID HERO SECTION (NO BOX SHAPES, PURE EDITORIAL CLARITY) */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00d2ff]/8 blur-[140px] pointer-events-none rounded-full"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10 space-y-8">
          {/* Subtle Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIPLOMA ELECTRICAL ENGINEER • 3+ YEARS FIELD MASTERY</span>
          </div>

          {/* Fluid Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#f3f4f6] leading-[1.15] text-balance">
            Precision Electrical Infrastructure{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-cyan-300 to-sky-400">
              Engineered for Decades.
            </span>
          </h1>

          {/* Simple, Engaging Narrative */}
          <p className="text-base sm:text-lg md:text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed text-balance font-normal">
            Led by <strong className="text-[#f3f4f6] font-semibold">Praveen</strong>, a qualified{" "}
            <strong className="text-[#f3f4f6] font-semibold">Diploma Electrical Engineer</strong>{" "}
            with 3+ years of specialized on-site execution in Rabakavi Banahatti and Bagalkot district.
            We specialize in pre-pour roof slab conduit routing, pure copper motor rewinding,
            underground power utilities, and commercial electrical wiring.
          </p>

          {/* Fluid Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00d2ff] hover:bg-[#00b8e6] text-[#0b0f19] font-bold text-sm shadow-xl shadow-[#00d2ff]/25 transition-all active:scale-95"
            >
              <span>Schedule Site Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#evidence"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[#f3f4f6] hover:text-[#00d2ff] transition-colors text-sm font-medium"
            >
              <span>Explore Verified Field Proof</span>
              <ChevronRight className="w-4 h-4 text-[#00d2ff]" />
            </a>
          </div>

          {/* Minimalist Inline Metric Strip (Dividers instead of Box Shapes) */}
          <div className="pt-14 border-t border-[#1e2640]/80 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-1">
              <div className="text-3xl font-extrabold font-mono text-[#f3f4f6]">Diploma</div>
              <div className="text-xs text-[#9ca3af]">Electrical Engineer</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl font-extrabold font-mono text-[#00d2ff]">3+</div>
              <div className="text-xs text-[#9ca3af]">Years Field Experience</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl font-extrabold font-mono text-[#f3f4f6]">0%</div>
              <div className="text-xs text-[#9ca3af]">Choked Conduits Standard</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl font-extrabold font-mono text-[#00d2ff]">99.9%</div>
              <div className="text-xs text-[#9ca3af]">Pure ETP Copper Wire</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLUID SERVICE DISCIPLINES (INTERACTIVE TABS, NO BOX GRIDS) */}
      <section id="services" className="py-24 border-t border-[#1e2640]/70 bg-[#070b13]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[#00d2ff] font-mono text-xs uppercase tracking-widest font-semibold">
              Specialized Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f3f4f6] tracking-tight mt-2">
              Engineering Disciplines
            </h2>
            <p className="text-[#9ca3af] text-sm sm:text-base mt-2">
              Clean technical execution where structural integrity and fire safety are non-negotiable.
            </p>
          </div>

          {/* Fluid Nav Tabs */}
          <div className="flex overflow-x-auto pb-4 gap-2 border-b border-[#1e2640] mb-12 scrollbar-none">
            {engineeringServices.map((service, idx) => (
              <button
                key={service.title}
                onClick={() => setActiveServiceTab(idx)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeServiceTab === idx
                    ? "bg-[#00d2ff] text-[#0b0f19] shadow-md shadow-[#00d2ff]/25"
                    : "text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#1e2640]/40"
                }`}
              >
                <span>0{idx + 1}.</span>
                <span>{service.title.split(" ")[0]} {service.title.split(" ")[1]}</span>
              </button>
            ))}
          </div>

          {/* Interactive Feature Stage (Spacious Editorial Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-mono font-semibold px-3 py-1 rounded-full border border-[#00d2ff]/30 text-[#00d2ff] bg-[#00d2ff]/10">
                {engineeringServices[activeServiceTab].badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#f3f4f6] tracking-tight">
                {engineeringServices[activeServiceTab].title}
              </h3>

              <p className="text-sm font-medium text-[#00d2ff]/90 font-mono">
                {engineeringServices[activeServiceTab].subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed">
                {engineeringServices[activeServiceTab].description}
              </p>

              <div className="space-y-3 pt-2">
                {engineeringServices[activeServiceTab].bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00d2ff] shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-[#f3f4f6]">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#2e3b60]/80 group bg-black/60">
                <Image
                  src={engineeringServices[activeServiceTab].image}
                  alt={engineeringServices[activeServiceTab].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-[11px] font-mono text-[#00d2ff] uppercase font-bold">
                    Field Demonstration
                  </div>
                  <div className="text-sm font-semibold text-[#f3f4f6] mt-0.5">
                    {engineeringServices[activeServiceTab].caption}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED FIELD EVIDENCE (FLUID MASONRY, NO BOX FRAMES) */}
      <section id="evidence" className="py-24 border-t border-[#1e2640]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#00d2ff] font-mono text-xs uppercase tracking-widest font-semibold">
                Authentic Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f3f4f6] tracking-tight mt-2">
                Verified Field Evidence
              </h2>
              <p className="text-[#9ca3af] text-sm mt-2 max-w-xl">
                Every photo below represents actual on-site craftsmanship by Praveen in Rabakavi
                Banahatti and Bagalkot district. Zero stock photos.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Evidence" },
                { id: "slab", label: "Roof Slab Layout" },
                { id: "motor", label: "Motor Rewinding" },
                { id: "utility", label: "Underground Utility" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    activeCategory === tab.id
                      ? "bg-[#00d2ff] text-[#0b0f19] font-bold shadow-md shadow-[#00d2ff]/30"
                      : "text-[#9ca3af] hover:text-[#f3f4f6] bg-[#1e2640]/30 hover:bg-[#1e2640]/60"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Fluid Visual Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedPhoto(project)}
                className="group cursor-pointer space-y-4"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-[#2e3b60]/60 group-hover:border-[#00d2ff] transition-all duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#0b0f19]/80 backdrop-blur-md text-[10px] font-mono text-[#00d2ff] font-bold border border-[#00d2ff]/30">
                      {project.tag}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 px-1">
                  <div className="text-[11px] font-mono text-[#9ca3af] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#00d2ff]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#f3f4f6] group-hover:text-[#00d2ff] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#9ca3af] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-1 flex items-center gap-1 text-xs font-mono text-[#00d2ff] font-medium group-hover:translate-x-1 transition-transform">
                    <span>Inspect details</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MODAL INSPECTION */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-[#1e2640] border border-[#2e3b60] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-[#f3f4f6] hover:text-[#00d2ff] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#00d2ff] font-bold">{selectedPhoto.tag}</span>
                <span className="text-[#9ca3af]">{selectedPhoto.spec}</span>
              </div>
              <h3 className="text-xl font-bold text-[#f3f4f6]">{selectedPhoto.title}</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">{selectedPhoto.description}</p>
              <div className="pt-3 flex justify-between items-center text-xs font-mono text-[#9ca3af]">
                <span>Location: {selectedPhoto.location}</span>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-5 py-2 rounded-full bg-[#00d2ff] text-[#0b0f19] font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. STEP-BY-STEP QUALITY PROTOCOL (FLUID TIMELINE, NO BOX CARDS) */}
      <section id="workflow" className="py-24 border-t border-[#1e2640]/70 bg-[#070b13]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-[#00d2ff] font-mono text-xs uppercase tracking-widest font-semibold">
              Quality Assurance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f3f4f6] tracking-tight mt-2">
              The Zero-Defect Concrete Pour Protocol
            </h2>
            <p className="text-[#9ca3af] text-sm mt-2">
              How Diploma Engineer Praveen safeguards your roof slab conduits from permanent choking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="space-y-3">
              <div className="text-3xl font-extrabold font-mono text-[#00d2ff]">01</div>
              <h4 className="text-base font-bold text-[#f3f4f6]">Load &amp; Gauge Calculation</h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Wire gauges and circuit conduit diameters are mathematically calculated to prevent
                overheating, respecting the 40% maximum conduit fill ratio.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-3xl font-extrabold font-mono text-[#00d2ff]">02</div>
              <h4 className="text-base font-bold text-[#f3f4f6]">Rebar Web Integration</h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Pipes are slotted strictly between top and bottom rebar meshes. Zero beam crushing,
                preserving concrete structural strength.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-3xl font-extrabold font-mono text-[#00d2ff]">03</div>
              <h4 className="text-base font-bold text-[#f3f4f6]">Anti-Slurry Packing</h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Every ceiling fan box and junction point is tightly packed with high-density tape
                to block wet liquid cement from entering during pumping.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-3xl font-extrabold font-mono text-[#00d2ff]">04</div>
              <h4 className="text-base font-bold text-[#f3f4f6]">Vibrator-Proof Clamping</h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Galvanized steel wire ties spaced every 1 meter anchor the conduit grid so heavy
                needle vibrators cannot displace or crack the pipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SAFETY COMPLIANCE ROW */}
      <section id="standards" className="py-20 border-t border-[#1e2640]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-[#1e2640]/80">
            <div>
              <span className="text-[#00d2ff] font-mono text-xs uppercase tracking-widest font-semibold">
                Technical Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#f3f4f6] mt-1">
                Engineering Safety Codes Strictly Enforced
              </h2>
            </div>
            <div className="flex items-center gap-6 text-xs font-mono text-[#9ca3af]">
              <span className="text-[#f3f4f6]">IS 732 (Wiring Standard)</span>
              <span>•</span>
              <span className="text-[#f3f4f6]">IS 694 (Conductor Quality)</span>
              <span>•</span>
              <span className="text-[#f3f4f6]">IEC 60364</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-[#f3f4f6] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00d2ff]" />
                Zero Short-Circuit Guarantee
              </h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Every branch circuit is megger tested for insulation resistance exceeding 1.0 MΩ
                before power energization.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-[#f3f4f6] flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#00d2ff]" />
                FRLS Flame Retardant Assurance
              </h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Exclusively self-extinguishing Fire Retardant Low Smoke conduits and cabling to
                prevent electrical fire propagation.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-[#f3f4f6] flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#00d2ff]" />
                Personal On-Site Supervision
              </h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Direct on-site presence by Praveen for all critical slab pours, motor rewinding
                checks, and underground cable trenching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SEAMLESS CONSULTATION TERMINAL (NO BOX FLUFF, DIRECT ACTION) */}
      <section id="contact" className="py-24 border-t border-[#1e2640]/70 bg-gradient-to-b from-[#0b0f19] to-[#070b13]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="text-[#00d2ff] font-mono text-xs uppercase tracking-widest font-semibold">
              Direct Engineering Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f3f4f6] tracking-tight">
              Schedule Your Site Survey or Motor Inspection
            </h2>
            <p className="text-[#9ca3af] text-sm max-w-xl mx-auto leading-relaxed">
              Pouring a roof slab next week or need motor stator rewinding? Connect directly with
              lead engineer <strong className="text-[#f3f4f6]">Praveen</strong> in Rabakavi Banahatti.
            </p>
          </div>

          {/* Minimalist Inquiry Form */}
          <form
            onSubmit={handleConsultationSubmit}
            className="space-y-6 bg-[#1e2640]/40 p-6 sm:p-10 rounded-3xl border border-[#2e3b60]/60 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#f3f4f6]">Your Name / Company *</label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Ramesh Patil / Site Owner"
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-[#2e3b60] text-sm text-[#f3f4f6] placeholder-[#9ca3af]/50 focus:outline-none focus:border-[#00d2ff] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#f3f4f6]">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-[#2e3b60] text-sm text-[#f3f4f6] placeholder-[#9ca3af]/50 focus:outline-none focus:border-[#00d2ff] transition-colors font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#f3f4f6]">Engineering Service Needed *</label>
                <select
                  value={formService}
                  onChange={(e) => setFormService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-[#2e3b60] text-sm text-[#f3f4f6] focus:outline-none focus:border-[#00d2ff] transition-colors"
                >
                  <option value="Roof Slab Conduit Engineering">Roof Slab Conduit Engineering (Pre-Pour)</option>
                  <option value="Motor Stator Copper Rewinding">Motor / Stator Copper Rewinding</option>
                  <option value="Underground Power Trenching & Earthing">Underground Utility Trenching &amp; Earthing</option>
                  <option value="Complete Building Electrical Wiring">Complete Building Electrical Wiring</option>
                  <option value="Industrial Switchgear & 3-Phase Panels">Industrial Switchgear &amp; Panels</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#f3f4f6]">Site Location / City *</label>
                <input
                  type="text"
                  required
                  value={formLocation}
                  onChange={(e) => setFormLocation(e.target.value)}
                  placeholder="e.g. Rabakavi Banahatti, Bagalkot"
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-[#2e3b60] text-sm text-[#f3f4f6] placeholder-[#9ca3af]/50 focus:outline-none focus:border-[#00d2ff] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#f3f4f6]">Project Details (Optional)</label>
              <textarea
                rows={3}
                value={formDetails}
                onChange={(e) => setFormDetails(e.target.value)}
                placeholder="Briefly describe your project (e.g. 2400 sq.ft residential roof slab scheduled for concrete casting next week)."
                className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-[#2e3b60] text-sm text-[#f3f4f6] placeholder-[#9ca3af]/50 focus:outline-none focus:border-[#00d2ff] transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#00d2ff] hover:bg-[#00b8e6] text-[#0b0f19] font-bold text-sm shadow-xl shadow-[#00d2ff]/25 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Transmit Request to WhatsApp Dispatch (+91 70902 43948)</span>
            </button>

            {submitted && (
              <div className="p-4 rounded-xl bg-[#00d2ff]/10 border border-[#00d2ff]/40 text-[#00d2ff] text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Inquiry formatted and dispatched. WhatsApp window launched.
              </div>
            )}
          </form>

          {/* Quick Direct Hotline Strip */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9ca3af] border-t border-[#1e2640]/60 pt-8">
            <div className="flex items-center gap-2 text-[#f3f4f6]">
              <Phone className="w-4 h-4 text-[#00d2ff]" />
              <span>Direct Call:</span>
              <a href="tel:+917090243948" className="text-[#00d2ff] font-bold hover:underline">
                +91 70902 43948
              </a>
            </div>
            <div>Rabakavi Banahatti • Bagalkot Dist., Karnataka</div>
            <div>
              Instagram:{" "}
              <a
                href="https://instagram.com/Basava_Electrical"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d2ff] hover:underline"
              >
                @Basava_Electrical
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. REFINED MINIMALIST FOOTER */}
      <footer className="border-t border-[#1e2640]/80 py-12 text-xs text-[#9ca3af] bg-[#070b13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-[#2e3b60] bg-black">
              <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-bold text-[#f3f4f6]">
              Basava<span className="text-[#00d2ff]">_Electrical</span>
            </span>
            <span className="text-slate-700">•</span>
            <span>Praveen (Diploma Electrical Engineer)</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>© 2026 Basava_Electrical</span>
            <span>•</span>
            <span>Rabakavi Banahatti</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
