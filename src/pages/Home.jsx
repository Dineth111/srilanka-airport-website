import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Plane, 
  Search,
  X,
  Clock, 
  MapPin, 
  ShoppingBag, 
  Shield, 
  Wifi, 
  Headphones, 
  ChevronRight,
  Users,
  BaggageClaim,
  Utensils,
  Car,
  Cloud,
  Thermometer,
  Wind,
  Play,
  AlertCircle,
  CheckCircle,
  Radio,
  BarChart3
} from "lucide-react";

/* ------------------------------ Aviation-Focused Images ------------------------------ */
// Use assets that exist in /public/images (CRA serves these at runtime)
const aviationImages = [
  {
    src: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1600&q=80",
    alt: "Airport terminal interior",
    title: "Terminal • Passenger Services",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
    alt: "Aircraft wing above clouds",
    title: "Arrivals • Departures • Connections",
  },
 
];

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather] = useState({ temp: 28, condition: "Sunny", humidity: 65 });
  const [activeTab, setActiveTab] = useState("departures");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      hour12: false 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="aviation-home">
      <HeroSection 
        currentTime={currentTime}
        formatTime={formatTime}
        formatDate={formatDate}
        weather={weather}
      />
      
      <LiveFlightDashboard 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <AviationStats />
      
      <QuickNavigation />
      
      <TerminalServices />
      
      <RealTimeUpdates />
      
      <TransportationHub />
      
      <AirportMapPreview />
    </div>
  );
}

/* ------------------------------ Hero Section ------------------------------ */
function HeroSection({ currentTime, formatTime, formatDate, weather }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    // Preload hero background images so the slider doesn't look blank/late.
    aviationImages.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aviationImages.length);
      setProgress(0);
    }, 8000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 0.125, 100));
    }, 10);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <section className="aviation-hero" ref={heroRef}>
      <div className="hero-background-container">
        {aviationImages.map((img, index) => (
          <div
            key={img.src}
            className={`hero-bg-layer ${index === currentImageIndex ? "active" : ""}`}
            style={{
              backgroundImage: `linear-gradient(rgba(240, 249, 255, 0.65), rgba(186, 230, 253, 0.35)), url(${img.src})`,
            }}
          >
            <div className="image-overlay">
              <span className="image-title">{img.title}</span>
              <span className="image-counter">
                {index + 1} / {aviationImages.length}
              </span>
            </div>
          </div>
        ))}

        <div className="progress-indicator">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="hero-content">
        <div className="airport-header">
          <div className="badge-container">
            <span className="live-badge">
              <span className="pulse-dot"></span>
              LIVE STATUS
            </span>
            <span className="weather-badge">
              <Thermometer size={14} />
              Weather: {weather.temp}°C • {weather.condition}
            </span>
          </div>
          
          <h1 className="main-title">
            <Plane className="title-icon" size={48} />
            <div className="title-content">
              <span className="airport-name">Bandaranaike International Airport</span>
              <span className="airport-code">BIA</span>
            </div>
          </h1>
          
          <p className="hero-subtitle">
            Sri Lanka’s Main International Airport • Katunayake, Colombo
          </p>
        </div>

        <div className="info-dashboard">
          <div className="info-card time-card">
            <div className="info-header">
              <Clock className="info-icon" size={24} />
              <span>Local Time</span>
            </div>
            <div className="time-display">
              <div className="digital-clock">{formatTime(currentTime)}</div>
              <div className="date-display">{formatDate(currentTime)}</div>
            </div>
          </div>

          <div className="info-card weather-card">
            <div className="info-header">
              <Cloud className="info-icon" size={24} />
              <span>Weather</span>
            </div>
            <div className="weather-info">
              <div className="temp-display">{weather.temp}°C</div>
              <div className="weather-details">
                <span><Wind size={16} /> 12 km/h</span>
                <span>Humidity: {weather.humidity}%</span>
              </div>
            </div>
          </div>

          <div className="info-card operations-card">
            <div className="info-header">
              <Radio className="info-icon" size={24} />
              <span>Operations</span>
            </div>
            <div className="ops-status">
              <div className="status-item active">
                <div className="status-indicator"></div>
                Runway 04/22 — Active
              </div>
              <div className="status-item">
                <div className="status-indicator"></div>
                ATC — Normal
              </div>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <Link to="/flights" className="action-btn primary">
            <Play size={20} />
            <div className="btn-content">
              <span className="btn-title">Flights</span>
              <span className="btn-subtitle">Arrivals & departures</span>
            </div>
          </Link>
          
          <Link to="/services" className="action-btn secondary">
            <div className="btn-content">
              <span className="btn-title">Services</span>
              <span className="btn-subtitle">Lounges, Wi‑Fi, facilities</span>
            </div>
          </Link>
          
          <Link to="/airports" className="action-btn outline">
            <MapPin size={20} />
            Airports & terminals
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Live Flight Dashboard ------------------------------ */
function LiveFlightDashboard({ activeTab, setActiveTab, searchQuery, setSearchQuery }) {
  const flights = {
    departures: [
      { id: 1, airline: "SriLankan Airlines", flight: "UL 225", destination: "Chennai (MAA)", time: "10:55", status: "BOARDING", gate: "B12", terminal: "1", checkIn: "K-L" },
      { id: 2, airline: "Emirates", flight: "EK 649", destination: "Dubai (DXB)", time: "11:30", status: "ON TIME", gate: "A08", terminal: "2", checkIn: "A-B" },
      { id: 3, airline: "Qatar Airways", flight: "QR 668", destination: "Doha (DOH)", time: "12:45", status: "FINAL CALL", gate: "C15", terminal: "1", checkIn: "M-N" },
      { id: 4, airline: "Singapore Airlines", flight: "SQ 469", destination: "Singapore (SIN)", time: "13:20", status: "DELAYED", gate: "A21", terminal: "2", checkIn: "C-D" },
      { id: 5, airline: "Etihad Airways", flight: "EY 275", destination: "Abu Dhabi (AUH)", time: "14:35", status: "SCHEDULED", gate: "B07", terminal: "1", checkIn: "E-F" },
    ],
    arrivals: [
      { id: 6, airline: "SriLankan Airlines", flight: "UL 403", origin: "Singapore (SIN)", time: "10:20", status: "LANDED", gate: "A15", terminal: "1", baggage: "Carousel 3" },
      { id: 7, airline: "Emirates", flight: "EK 650", origin: "Dubai (DXB)", time: "11:05", status: "ON TIME", gate: "B22", terminal: "2", baggage: "Carousel 5" },
      { id: 8, airline: "Qatar Airways", flight: "QR 662", origin: "Doha (DOH)", time: "12:10", status: "IN AIR", gate: "C08", terminal: "1", baggage: "Carousel 2" },
      { id: 9, airline: "Cathay Pacific", flight: "CX 611", origin: "Hong Kong (HKG)", time: "13:45", status: "DELAYED", gate: "A12", terminal: "2", baggage: "Carousel 4" },
      { id: 10, airline: "Thai Airways", flight: "TG 307", origin: "Bangkok (BKK)", time: "14:30", status: "SCHEDULED", gate: "B18", terminal: "1", baggage: "Carousel 1" },
    ]
  };

  const filteredFlights = flights[activeTab].filter((flight) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;

    const searchable = [
      flight.airline,
      flight.flight,
      flight.destination,
      flight.origin,
      flight.status,
      flight.gate,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchable.includes(query);
  });

  const getStatusColor = (status) => {
    const colors = {
      'BOARDING': '#10b981',
      'ON TIME': '#3b82f6',
      'FINAL CALL': '#ef4444',
      'DELAYED': '#f59e0b',
      'SCHEDULED': '#6b7280',
      'LANDED': '#8b5cf6',
      'IN AIR': '#6366f1'
    };
    return colors[status] || '#6b7280';
  };

  const totalDepartures = flights.departures.length;
  const totalArrivals = flights.arrivals.length;
  const locationLabel = activeTab === 'departures' ? 'Destination' : 'Origin';

  const getAirlineInitials = (airlineName) => {
    return String(airlineName)
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  };

  const parseCityCode = (text) => {
    const raw = String(text ?? "");
    const match = raw.match(/^(.*)\s+\(([^)]+)\)\s*$/);
    if (!match) return { city: raw, code: "" };
    return { city: match[1], code: match[2] };
  };

  return (
    <section className="flight-dashboard">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h2>
            <Plane size={28} />
            Live Flight Board
          </h2>
          <p className="dashboard-subtitle">Search by flight number, airline, or city.</p>
        </div>
        <div className="dashboard-controls">
          <div className="search-box">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search by flight, airline, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery.trim().length > 0 && (
              <button
                type="button"
                className="search-clear"
                aria-label="Clear search"
                onClick={() => setSearchQuery("")}
              >
                <X size={18} />
              </button>
            )}
          </div>
          <Link to="/flights" className="view-all-link">
            Full schedule <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'departures' ? 'active' : ''}`}
            onClick={() => setActiveTab('departures')}
          >
            Departures
            <span className="count-badge">{totalDepartures}</span>
          </button>
          <button 
            className={`tab ${activeTab === 'arrivals' ? 'active' : ''}`}
            onClick={() => setActiveTab('arrivals')}
          >
            Arrivals
            <span className="count-badge">{totalArrivals}</span>
          </button>
        </div>

        <div className="flight-table-container">
          <div className="flight-table-header">
            <div className="header-cell">Airline / Flight</div>
            <div className="header-cell">{locationLabel}</div>
            <div className="header-cell">Time</div>
            <div className="header-cell">Status</div>
            <div className="header-cell">Gate / Terminal</div>
          </div>

          {filteredFlights.map((flight) => {
            const locationText = activeTab === 'departures' ? flight.destination : flight.origin;
            const { city, code } = parseCityCode(locationText);
            const metaText = activeTab === 'departures'
              ? (flight.checkIn ? `Check‑in: ${flight.checkIn}` : "")
              : (flight.baggage ? `Baggage: ${flight.baggage}` : "");

            return (
              <div key={flight.id} className="flight-row">
                <div className="cell airline-cell">
                  <div className="airline-info">
                    <div className="airline-badge" aria-hidden="true">
                      {getAirlineInitials(flight.airline)}
                    </div>
                    <div className="airline-text">
                      <div className="flight-number">{flight.flight}</div>
                      <div className="airline-name">{flight.airline}</div>
                    </div>
                  </div>
                </div>

                <div className="cell destination-cell" data-label={locationLabel}>
                  <div className="route">
                    <span className="route-city">{city}</span>
                    {code && <span className="route-code">{code}</span>}
                  </div>
                  {metaText && <div className="route-meta">{metaText}</div>}
                </div>

                <div className="cell time-cell" data-label="Time">
                  <div className="time">{flight.time}</div>
                </div>

                <div className="cell status-cell" data-label="Status">
                  <span
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(flight.status) + '20', color: getStatusColor(flight.status) }}
                  >
                    {flight.status}
                  </span>
                </div>

                <div className="cell gate-cell" data-label="Gate / Terminal">
                  <div className="gate-badges">
                    <span className="chip chip-gate">{flight.gate}</span>{" "}
                    <span className="chip chip-terminal">T{flight.terminal}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredFlights.length === 0 && (
            <div className="flight-empty">
              <AlertCircle size={18} />
              No results for “{searchQuery}”.
            </div>
          )}
        </div>

        <div className="flight-stats">
          <div className="flight-kpi">
            <div className="flight-kpi-icon"><Plane size={18} /></div>
            <div className="flight-kpi-value">42</div>
            <div className="flight-kpi-label">Flights / day</div>
          </div>
          <div className="flight-kpi">
            <div className="flight-kpi-icon"><BarChart3 size={18} /></div>
            <div className="flight-kpi-value">28</div>
            <div className="flight-kpi-label">Airlines</div>
          </div>
          <div className="flight-kpi">
            <div className="flight-kpi-icon"><MapPin size={18} /></div>
            <div className="flight-kpi-value">65</div>
            <div className="flight-kpi-label">Destinations</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Aviation Stats ------------------------------ */
function AviationStats() {
  const formatStatValue = (value) => {
    if (typeof value === "number") return value.toLocaleString("en-US");
    return String(value);
  };

  const stats = [
    { icon: <Plane />, value: "5M+", label: "Annual passengers", change: "+12%" },
    { icon: <BarChart3 />, value: "42", label: "Daily flights", change: "+5%" },
    { icon: <MapPin />, value: "65", label: "Destinations", change: "+3" },
    { icon: <Users />, value: 2500, valueSuffix: "+", label: "On‑duty staff", change: "" }
  ];

  return (
    <section className="aviation-stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="kpi-value">
                {formatStatValue(stat.value)}
                {stat.valueSuffix && <span className="kpi-suffix">{stat.valueSuffix}</span>}
              </div>
              <div className="kpi-label">{stat.label}</div>
              {stat.change && <div className="kpi-change positive">{stat.change}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Quick Navigation ------------------------------ */
function QuickNavigation() {
  const navItems = [
    { icon: <MapPin size={24} />, title: "Airports", desc: "Terminals & airport details", color: "#3b82f6", to: "/airports" },
    { icon: <ShoppingBag size={24} />, title: "Services", desc: "Shops, lounges, facilities", color: "#8b5cf6", to: "/services" },
    { icon: <Shield size={24} />, title: "Passenger Guide", desc: "Security & travel guidance", color: "#10b981", to: "/passenger-guide" },
    { icon: <Wifi size={24} />, title: "Connectivity", desc: "Wi‑Fi and information desks", color: "#f59e0b", to: "/services" },
    { icon: <Headphones size={24} />, title: "Contact", desc: "Support and inquiries", color: "#ef4444", to: "/contact" },
    { icon: <BaggageClaim size={24} />, title: "Baggage", desc: "Arrival & baggage guidance", color: "#6366f1", to: "/passenger-guide" },
    { icon: <Utensils size={24} />, title: "Dining", desc: "Food & beverage options", color: "#ec4899", to: "/services" },
  ];

  return (
    <section className="quick-nav">
      <div className="section-header">
        <h2>Quick Links</h2>
        <p className="section-subtitle">Plan your journey in seconds</p>
      </div>
      
      <div className="nav-grid">
        {navItems.map((item, index) => (
          <Link key={index} to={item.to} className="nav-card">
            <div className="nav-icon-wrapper" style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)` }}>
              <div className="nav-icon" style={{ color: item.color }}>
                {item.icon}
              </div>
            </div>
            <div className="nav-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <ChevronRight className="nav-arrow" size={20} />
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Terminal Services ------------------------------ */
function TerminalServices() {
  const services = [
    {
      category: "Premium Services",
      icon: <Shield size={20} />,
      items: [
        { name: "Serendib Lounge", status: "OPEN", capacity: "60%", hours: "24/7", premium: true },
        { name: "VIP Meet & Greet", status: "AVAILABLE", capacity: "-", hours: "06:00-23:00", premium: true },
        { name: "Fast Track Security", status: "15 MIN WAIT", capacity: "40%", hours: "All day" },
      ]
    },
    {
      category: "Passenger Facilities",
      icon: <Users size={20} />,
      items: [
        { name: "Baggage Services", status: "NORMAL", capacity: "-", hours: "24/7" },
        { name: "Medical Center", status: "OPEN", capacity: "-", hours: "Emergency 24/7" },
        { name: "Prayer Rooms", status: "AVAILABLE", capacity: "-", hours: "24/7" },
      ]
    },
    {
      category: "Terminal Operations",
      icon: <BarChart3 size={20} />,
      items: [
        { name: "Terminal 1", status: "NORMAL", capacity: "70%", hours: "24/7" },
        { name: "Terminal 2", status: "MODERATE", capacity: "55%", hours: "24/7" },
        { name: "Immigration", status: "20 MIN WAIT", capacity: "65%", hours: "All day" },
      ]
    }
  ];

  return (
    <section className="terminal-services">
      <div className="section-header">
        <h2>Service Status</h2>
        <p className="section-subtitle">Availability and estimated wait times</p>
      </div>

      <div className="services-grid">
        {services.map((category, idx) => (
          <div key={idx} className="service-category">
            <div className="category-header">
              {category.icon}
              <h3>{category.category}</h3>
            </div>
            <div className="service-list">
              {category.items.map((service, sIdx) => (
                <div key={sIdx} className="service-item">
                  <div className="service-main">
                    <div className="service-name">{service.name}</div>
                    <div className={`service-status ${service.status.toLowerCase().includes('open') ? 'open' : 
                      service.status.toLowerCase().includes('normal') ? 'normal' : 
                      service.status.toLowerCase().includes('wait') ? 'wait' : 'available'}`}>
                      {service.status}
                    </div>
                  </div>
                  <div className="service-details">
                    {service.capacity !== "-" && (
                      <div className="capacity">
                        <div className="capacity-bar">
                          <div 
                            className="capacity-fill" 
                            style={{ width: service.capacity }}
                          />
                        </div>
                        <span>{service.capacity}</span>
                      </div>
                    )}
                    <div className="service-hours">{service.hours}</div>
                  </div>
                  {service.premium && <div className="premium-tag">PREMIUM</div>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Real-Time Updates ------------------------------ */
function RealTimeUpdates() {
  const updates = [
    { 
      type: "security", 
      icon: <AlertCircle size={20} />,
      title: "Security Update", 
      message: "Enhanced screening in Terminal 1 - East Wing",
      time: "10 min ago",
      priority: "high"
    },
    { 
      type: "flight", 
      icon: <Plane size={20} />,
      title: "Flight Advisory", 
      message: "Flights to Middle East may experience delays due to weather",
      time: "45 min ago",
      priority: "medium"
    },
    { 
      type: "facility", 
      icon: <CheckCircle size={20} />,
      title: "New Facility", 
      message: "Lotus Lounge now open in Terminal 2 - Level 3",
      time: "2 hours ago",
      priority: "low"
    },
  ];

  return (
    <section className="real-time-updates">
      <div className="updates-header">
        <h2>Latest Updates</h2>
        <div className="update-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Security</button>
          <button className="filter-btn">Flights</button>
          <button className="filter-btn">Facilities</button>
        </div>
      </div>

      <div className="updates-grid">
        {updates.map((update, index) => (
          <div key={index} className={`update-card priority-${update.priority}`}>
            <div className="update-icon">{update.icon}</div>
            <div className="update-content">
              <div className="update-header">
                <h3>{update.title}</h3>
                <span className="update-time">{update.time}</span>
              </div>
              <p className="update-message">{update.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Transportation Hub ------------------------------ */
function TransportationHub() {
  const transportOptions = [
    { icon: <Car size={24} />, type: "Taxi", time: "5-10 min", cost: "LKR 2,500+", location: "Arrivals Gate 3" },
    { icon: <Users size={24} />, type: "Ride Share", time: "8-15 min", cost: "LKR 2,000+", location: "Zone B" },
    { icon: <Car size={24} />, type: "Car Rental", time: "On-site", cost: "From LKR 8,000", location: "Terminal 1" },
    { icon: <Car size={24} />, type: "Airport Bus", time: "Every 30 min", cost: "LKR 500", location: "Bus Terminal" },
  ];

  return (
    <section className="transportation-hub">
      <div className="section-header">
        <h2>Transport Options</h2>
        <p className="section-subtitle">Getting to and from the airport</p>
      </div>

      <div className="transport-grid">
        {transportOptions.map((option, index) => (
          <div key={index} className="transport-card">
            <div className="transport-icon">{option.icon}</div>
            <div className="transport-info">
              <h3>{option.type}</h3>
              <div className="transport-details">
                <div className="detail">
                  <span className="detail-label">Wait:</span>
                  <span className="detail-value">{option.time}</span>
                </div>
                <div className="detail">
                  <span className="detail-label">Price:</span>
                  <span className="detail-value">{option.cost}</span>
                </div>
                <div className="detail">
                  <span className="detail-label">Pick‑up:</span>
                  <span className="detail-value">{option.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Airport Map Preview ------------------------------ */
function AirportMapPreview() {
  return (
    <section className="map-preview">
      <div className="map-container">
        <div className="map-content">
          <div className="map-info">
            <h2>Navigate the Airport</h2>
            <p className="map-description">
              Find your way through terminals, gates, and key services with a simple map overview.
            </p>
            <div className="map-stats">
              <div className="map-stat">
                <div className="map-stat-number">2</div>
                <div className="map-stat-label">Terminals</div>
              </div>
              <div className="map-stat">
                <div className="map-stat-number">48</div>
                <div className="map-stat-label">Gates</div>
              </div>
              <div className="map-stat">
                <div className="map-stat-number">65+</div>
                <div className="map-stat-label">Shops & Dining</div>
              </div>
              <div className="map-stat">
                <div className="map-stat-number">24/7</div>
                <div className="map-stat-label">Operations</div>
              </div>
            </div>
            <Link to="/airports" className="map-cta">
              <MapPin size={20} />
              View airports & terminals
            </Link>
          </div>
          <div className="map-visual">
            <div className="terminal-visual">
              <div className="terminal terminal-1">
                <div className="terminal-label">Terminal 1</div>
                <div className="gates">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`gate ${i % 3 === 0 ? 'active' : ''}`}>A{i+1}</div>
                  ))}
                </div>
              </div>
              <div className="terminal terminal-2">
                <div className="terminal-label">Terminal 2</div>
                <div className="gates">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`gate ${i % 4 === 0 ? 'active' : ''}`}>B{i+1}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Enhanced CSS ------------------------------ */
const style = document.createElement("style");
style.id = "aviation-home-styles";
style.innerHTML = `
  .aviation-home {
    --primary: #0284c7;
    --primary-dark: #0369a1;
    --secondary: #38bdf8;
    --accent: #10b981;
    --accent-gold: #f59e0b;
    --warning: #f59e0b;
    --danger: #ef4444;
    --success: #10b981;
    --dark: #0f172a;
    --light: #f6fbff;
    --surface: #ffffff;
    --surface-muted: #eaf6ff;
    --gray-50: #f8fafc;
    --gray-100: #f1f5f9;
    --gray-200: #e2e8f0;
    --gray-300: #cbd5e1;
    --gray-400: #94a3b8;
    --gray-500: #64748b;
    --gray-600: #475569;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
    --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1);
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    color: var(--dark);
    background:
      radial-gradient(1400px 600px at 20% 0%, rgba(56, 189, 248, 0.22), transparent 60%),
      radial-gradient(1100px 520px at 85% 18%, rgba(2, 132, 199, 0.18), transparent 58%),
      linear-gradient(180deg, #e8f6ff 0%, var(--light) 55%);
  }

  /* Hero Section */
  .aviation-hero {
    position: relative;
    min-height: 90vh;
    overflow: hidden;
    color: var(--dark);
  }

  .hero-background-container {
    position: absolute;
    inset: 0;
  }

  .hero-bg-layer {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
  }

  .hero-bg-layer::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(900px 420px at 75% 10%, rgba(255,255,255,0.55), transparent 55%),
      radial-gradient(900px 420px at 10% 25%, rgba(255,255,255,0.35), transparent 60%),
      linear-gradient(180deg, rgba(226, 246, 255, 0.55), rgba(186, 230, 253, 0.35));
    pointer-events: none;
  }

  .hero-bg-layer.active {
    opacity: 1;
  }

  .image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(transparent, rgba(2, 132, 199, 0.12));
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .image-title {
    font-size: 14px;
    font-weight: 500;
    color: rgba(15, 23, 42, 0.85);
  }

  .image-counter {
    font-size: 12px;
    color: rgba(15, 23, 42, 0.65);
  }

  .progress-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(255,255,255,0.1);
    z-index: 10;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #38bdf8, #1e88e5);
    transition: width 0.1s linear;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 24px 60px;
  }

  .airport-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .badge-container {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-bottom: 32px;
    flex-wrap: wrap;
  }

  .live-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(239, 68, 68, 0.12);
    color: #991b1b;
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid rgba(239, 68, 68, 0.25);
  }

  .weather-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(2, 132, 199, 0.12);
    color: #075985;
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid rgba(2, 132, 199, 0.25);
  }

  .pulse-dot {
    width: 8px;
    height: 8px;
    background: #ef4444;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.1); }
    100% { opacity: 1; transform: scale(1); }
  }

  .main-title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-bottom: 16px;
  }

  .title-icon {
    color: var(--primary);
    transform: translateY(6px); /* icon එක text baseline එකට align වෙන්න */
  }

  .title-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .airport-name {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    background: linear-gradient(135deg, #0f172a 0%, #075985 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .airport-code {
    display: inline-block;
    background: var(--primary);
    color: white;
    padding: 4px 24px;
    border-radius: 12px;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin-top: 12px;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: rgba(15, 23, 42, 0.75);
    max-width: 600px;
    margin: 0 auto;
  }

  .info-dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    max-width: 900px;
    margin: 0 auto 56px;
  }

  .info-card {
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(2, 132, 199, 0.18);
    border-radius: var(--radius-lg);
    padding: 24px;
    transition: all 0.3s ease;
  }

  .info-card:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 10px 40px rgba(0,0,0,0.28);
  }

  .info-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    color: var(--gray-600);
    font-size: 14px;
    font-weight: 600;
  }

  .info-icon {
    color: var(--primary);
  }

  .digital-clock {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
    color: var(--dark);
    margin-bottom: 8px;
  }

  .date-display {
    font-size: 14px;
    color: var(--gray-600);
  }

  .temp-display {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--dark);
    margin-bottom: 8px;
  }

  .weather-details {
    display: flex;
    gap: 16px;
    font-size: 14px;
    color: var(--gray-600);
  }

  .ops-status {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .status-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: rgba(2, 132, 199, 0.06);
    border-radius: 8px;
    font-size: 14px;
  }

  .status-item.active {
    background: rgba(16, 185, 129, 0.1);
    border-left: 3px solid var(--accent);
  }

  .status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
  }

  .action-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .action-btn {
    padding: 20px 32px;
    border-radius: var(--radius-lg);
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
    min-width: 200px;
    justify-content: center;
  }

  .action-btn.primary {
    background: var(--primary);
    color: white;
    box-shadow: 0 4px 20px rgba(0, 102, 204, 0.4);
  }

  .action-btn.primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 102, 204, 0.5);
  }

  .action-btn.secondary {
    background: rgba(255, 255, 255, 0.8);
    color: var(--dark);
    border: 1px solid rgba(2, 132, 199, 0.18);
  }

  .action-btn.secondary:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }

  .action-btn.outline {
    background: transparent;
    color: var(--dark);
    border: 2px solid rgba(2, 132, 199, 0.35);
  }

  .action-btn.outline:hover {
    background: rgba(255, 255, 255, 0.55);
    border-color: rgba(2, 132, 199, 0.6);
    transform: translateY(-2px);
  }

  .btn-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-title {
    font-size: 16px;
    font-weight: 600;
  }

  .btn-subtitle {
    font-size: 12px;
    opacity: 0.9;
    margin-top: 2px;
  }

  /* Flight Dashboard */
  .flight-dashboard {
    background: linear-gradient(180deg, var(--surface-muted) 0%, var(--light) 60%);
    padding: 80px 24px;
  }

  .dashboard-header {
    max-width: 1200px;
    margin: 0 auto 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .dashboard-title {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 240px;
  }

  .dashboard-subtitle {
    margin: 0;
    color: var(--gray-600);
    font-size: 0.95rem;
  }

  .dashboard-header h2 {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 2rem;
    color: var(--dark);
  }

  .dashboard-controls {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .search-box {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(2, 132, 199, 0.18);
    border-radius: 999px;
    padding: 10px 12px;
    min-width: 320px;
    box-shadow: var(--shadow-sm);
  }

  .search-icon {
    color: var(--gray-500);
    flex: 0 0 auto;
  }

  .search-box input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    width: 100%;
  }

  .search-box:focus-within {
    border-color: rgba(2, 132, 199, 0.55);
    box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.12);
  }

  .search-clear {
    border: none;
    background: transparent;
    padding: 4px;
    border-radius: 999px;
    cursor: pointer;
    color: var(--gray-500);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-clear:hover {
    background: var(--gray-100);
    color: var(--gray-700);
  }

  .view-all-link {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
  }

  .tabs-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .tabs {
    display: inline-flex;
    background: var(--gray-100);
    padding: 6px;
    border-radius: 12px;
    margin-bottom: 32px;
  }

  .tab {
    padding: 12px 32px;
    border: none;
    background: none;
    border-radius: 8px;
    font-weight: 600;
    color: var(--gray-500);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
  }

  .tab.active {
    background: white;
    color: var(--primary);
    box-shadow: var(--shadow-sm);
  }

  .count-badge {
    background: var(--gray-200);
    color: var(--gray-600);
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 12px;
  }

  .tab.active .count-badge {
    background: var(--primary);
    color: white;
  }

  .flight-table-container {
    background: white;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    margin-bottom: 40px;
  }

  .flight-empty {
    padding: 28px 20px;
    color: var(--gray-600);
    text-align: center;
    background: var(--gray-50);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .flight-table-header {
    display: grid;
    grid-template-columns: 2fr 1.6fr 0.9fr 1fr 1.1fr;
    background: var(--gray-50);
    padding: 20px;
    border-bottom: 2px solid var(--gray-100);
    font-weight: 600;
    color: var(--gray-600);
    font-size: 13px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .flight-row {
    display: grid;
    grid-template-columns: 2fr 1.6fr 0.9fr 1fr 1.1fr;
    padding: 20px;
    border-bottom: 1px solid var(--gray-100);
    transition: all 0.3s ease;
  }

  .flight-row:hover {
    background: var(--gray-50);
  }

  .cell {
    display: flex;
    align-items: center;
  }

  .airline-info {
    display: flex;
    align-items: center;
    gap: 16px;
    min-width: 0;
  }

  .airline-badge {
    width: 42px;
    height: 42px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(2, 132, 199, 0.2), rgba(11, 58, 111, 0.18));
    border: 1px solid rgba(2, 132, 199, 0.22);
    color: rgba(11, 58, 111, 0.95);
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 0.06em;
    flex: 0 0 auto;
  }

  .airline-text {
    min-width: 0;
  }

  .flight-number {
    font-weight: 700;
    color: var(--dark);
    font-size: 18px;
  }

  .airline-name {
    font-size: 14px;
    color: var(--gray-500);
  }

  .destination-cell {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    min-width: 0;
    overflow: hidden;
  }

  .route {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    flex-wrap: wrap;
  }

  .route-city {
    font-weight: 700;
    color: var(--dark);
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }

  .route-code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 999px;
    background: rgba(2, 132, 199, 0.12);
    color: rgba(11, 58, 111, 0.95);
    border: 1px solid rgba(2, 132, 199, 0.18);
    flex: 0 0 auto;
  }

  .route-meta {
    font-size: 12px;
    color: var(--gray-500);
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  .time {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    font-size: 16px;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .status-badge {
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .gate-badges {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  .chip-gate {
    background: rgba(99, 102, 241, 0.12);
    color: rgba(67, 56, 202, 0.95);
    border: 1px solid rgba(99, 102, 241, 0.18);
    font-family: 'JetBrains Mono', monospace;
  }

  .chip-terminal {
    background: rgba(2, 132, 199, 0.12);
    color: rgba(11, 58, 111, 0.95);
    border: 1px solid rgba(2, 132, 199, 0.18);
    font-family: 'JetBrains Mono', monospace;
  }

  .flight-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .flight-kpi {
    background: rgba(255, 255, 255, 0.92);
    color: var(--dark);
    padding: 26px;
    border-radius: var(--radius-lg);
    text-align: center;
    border: 1px solid rgba(2, 132, 199, 0.16);
    box-shadow: var(--shadow-md);
    display: grid;
    place-items: center;
    gap: 10px;
  }

  .flight-kpi-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(2, 132, 199, 0.18), rgba(99, 102, 241, 0.12));
    border: 1px solid rgba(2, 132, 199, 0.18);
    color: rgba(11, 58, 111, 0.95);
  }

  .flight-kpi-value {
    font-size: 2.6rem;
    font-weight: 900;
    letter-spacing: -0.03em;
    font-variant-numeric: tabular-nums;
  }

  .flight-kpi-label {
    font-size: 14px;
    color: var(--gray-600);
  }

  /* Aviation Stats */
  .aviation-stats {
    background: linear-gradient(180deg, #eaf6ff 0%, #ffffff 100%);
    color: var(--dark);
    padding: 60px 24px;
  }

  .stats-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }

  .stat-item {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 30px;
    background: rgba(255,255,255,0.8);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(2, 132, 199, 0.16);
    transition: all 0.3s ease;
  }

  .stat-content {
    min-width: 0;
  }

  .stat-item:hover {
    background: rgba(255,255,255,0.92);
    transform: translateY(-2px);
  }

  .stat-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kpi-value {
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 4px;
    letter-spacing: -0.02em;
    font-variant-numeric: tabular-nums;
    display: flex;
    align-items: baseline;
    gap: 2px;
  }

  .kpi-suffix {
    font-size: 0.55em;
    font-weight: 900;
    opacity: 0.85;
  }

  .kpi-label {
    font-size: 14px;
    color: var(--gray-600);
  }

  .kpi-change {
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 10px;
    background: var(--accent);
    color: white;
    margin-top: 8px;
    display: inline-block;
  }

  /* Flight dashboard responsive */
  @media (max-width: 980px) {
    .dashboard-controls {
      width: 100%;
      justify-content: space-between;
    }
    .search-box {
      min-width: 0;
      width: 100%;
      max-width: 520px;
    }
  }

  @media (max-width: 860px) {
    .flight-table-header {
      display: none;
    }

    .flight-row {
      grid-template-columns: 1fr;
      gap: 12px;
      padding: 18px;
    }

    .cell {
      justify-content: space-between;
      gap: 16px;
    }

    .cell[data-label]::before {
      content: attr(data-label);
      font-size: 12px;
      font-weight: 700;
      color: var(--gray-500);
      letter-spacing: 0.02em;
      text-transform: uppercase;
      flex: 0 0 auto;
    }

    .airline-cell {
      justify-content: flex-start;
    }

    .destination-cell {
      align-items: flex-end;
      text-align: right;
    }

    .route-city {
      white-space: normal;
      text-align: right;
    }

    .flight-stats {
      grid-template-columns: 1fr;
    }
  }

  /* Quick Navigation */
  .quick-nav, .terminal-services, .real-time-updates, .transportation-hub, .map-preview {
    padding: 80px 24px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    margin-bottom: 48px;
  }

  .section-header h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--dark);
    margin-bottom: 12px;
  }

  .section-subtitle {
    color: var(--gray-500);
    font-size: 1.125rem;
  }

  .nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .nav-card {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 24px;
    background: white;
    border-radius: var(--radius-lg);
    text-decoration: none;
    color: var(--dark);
    border: 1px solid var(--gray-200);
    transition: all 0.3s ease;
  }

  .nav-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary);
  }

  .nav-icon-wrapper {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-content h3 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .nav-content p {
    font-size: 14px;
    color: var(--gray-500);
  }

  .nav-arrow {
    margin-left: auto;
    color: var(--gray-300);
  }

  /* Terminal Services */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
  }

  .service-category {
    background: white;
    border-radius: var(--radius-lg);
    padding: 30px;
    box-shadow: var(--shadow-md);
  }

  .category-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--gray-100);
  }

  .category-header h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--dark);
  }

  .service-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .service-item {
    padding: 20px;
    border-radius: 12px;
    background: var(--gray-50);
    position: relative;
    border: 1px solid var(--gray-200);
  }

  .service-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .service-name {
    font-weight: 600;
    color: var(--dark);
  }

  .service-status {
    font-size: 12px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 20px;
  }

  .service-status.open {
    background: #d1fae5;
    color: #065f46;
  }

  .service-status.normal {
    background: #dbeafe;
    color: #1e40af;
  }

  .service-status.wait {
    background: #fef3c7;
    color: #92400e;
  }

  .service-status.available {
    background: #f3e8ff;
    color: #6d28d9;
  }

  .service-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: var(--gray-500);
  }

  .capacity {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .capacity-bar {
    width: 60px;
    height: 4px;
    background: var(--gray-200);
    border-radius: 2px;
    overflow: hidden;
  }

  .capacity-fill {
    height: 100%;
    background: var(--primary);
    border-radius: 2px;
  }

  .premium-tag {
    position: absolute;
    top: -8px;
    right: 16px;
    background: var(--primary);
    color: white;
    font-size: 10px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 4px;
    letter-spacing: 0.5px;
  }

  /* Real-Time Updates */
  .real-time-updates {
    background: var(--surface-muted);
  }

  .updates-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }

  .update-filters {
    display: flex;
    gap: 8px;
  }

  .filter-btn {
    padding: 8px 16px;
    border: 1px solid var(--gray-300);
    background: white;
    border-radius: 20px;
    font-size: 14px;
    color: var(--gray-600);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .filter-btn.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .updates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
  }

  .update-card {
    background: white;
    border-radius: var(--radius-lg);
    padding: 24px;
    display: flex;
    gap: 20px;
    box-shadow: var(--shadow-sm);
  }

  .update-card.priority-high {
    border-left: 4px solid var(--danger);
  }

  .update-card.priority-medium {
    border-left: 4px solid var(--warning);
  }

  .update-card.priority-low {
    border-left: 4px solid var(--success);
  }

  .update-icon {
    color: var(--primary);
  }

  .update-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .update-header h3 {
    font-size: 1rem;
    font-weight: 600;
  }

  .update-time {
    font-size: 12px;
    color: var(--gray-400);
  }

  .update-message {
    color: var(--gray-600);
    font-size: 14px;
  }

  /* Transportation Hub */
  .transport-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .transport-card {
    background: white;
    border-radius: var(--radius-lg);
    padding: 24px;
    display: flex;
    gap: 20px;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--gray-200);
    transition: all 0.3s ease;
  }

  .transport-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary);
  }

  .transport-icon {
    color: var(--primary);
  }

  .transport-info h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .transport-details {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .detail {
    display: flex;
    justify-content: space-between;
  }

  .detail-label {
    color: var(--gray-500);
    font-size: 14px;
  }

  .detail-value {
    font-weight: 600;
    color: var(--dark);
  }

  /* Airport Map Preview */
  .map-preview {
    background: var(--light);
    color: var(--dark);
  }

  .map-container {
    background: linear-gradient(135deg, #eaf6ff 0%, #ffffff 100%);
    border-radius: var(--radius-xl);
    overflow: hidden;
    border: 1px solid rgba(2, 132, 199, 0.16);
  }

  .map-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    padding: 60px;
  }

  @media (max-width: 1024px) {
    .map-content {
      grid-template-columns: 1fr;
    }
  }

  .map-description {
    color: var(--gray-600);
    margin: 20px 0 32px;
    line-height: 1.6;
  }

  .map-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin: 32px 0;
  }

  .map-stat {
    text-align: center;
  }

  .map-stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 4px;
  }

  .map-stat-label {
    font-size: 14px;
    color: var(--gray-600);
  }

  .map-cta {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: white;
    color: var(--dark);
    padding: 16px 32px;
    border-radius: var(--radius-lg);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .map-cta:hover {
    background: #f1f5f9;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }

  .terminal-visual {
    display: flex;
    gap: 20px;
    background: rgba(2, 132, 199, 0.06);
    border-radius: 12px;
    padding: 30px;
  }

  .terminal {
    flex: 1;
  }

  .terminal-label {
    font-weight: 600;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid rgba(2, 132, 199, 0.16);
  }

  .gates {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .gate {
    background: rgba(2, 132, 199, 0.08);
    padding: 8px;
    border-radius: 6px;
    text-align: center;
    font-size: 12px;
  }

  .gate.active {
    background: var(--primary);
    color: white;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .airport-name {
      font-size: 2.5rem;
    }
    
    .airport-code {
      font-size: 1.5rem;
    }
    
    .hero-content {
      padding: 80px 20px 40px;
    }
    
    .flight-table-header, .flight-row {
      grid-template-columns: 1fr;
      gap: 10px;
    }
    
    .dashboard-controls {
      flex-direction: column;
      align-items: stretch;
    }
    
    .search-box input {
      min-width: auto;
      width: 100%;
    }
    
    .action-buttons {
      flex-direction: column;
    }
    
    .action-btn {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .info-dashboard {
      grid-template-columns: 1fr;
    }
    
    .stats-grid, .nav-grid, .services-grid, .updates-grid, .transport-grid {
      grid-template-columns: 1fr;
    }

    .map-content {
      padding: 30px 20px;
    }
  }
`;
if (typeof document !== "undefined" && !document.getElementById("aviation-home-styles")) {
  document.head.appendChild(style);
}