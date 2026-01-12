import { useState } from 'react';
import { Link } from 'react-router-dom';

interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  icon: string;
  description: string;
}

const mockWeatherData: Record<string, WeatherData> = {
  'cairo': {
    city: 'Cairo',
    country: 'Egypt',
    temperature: 32,
    feelsLike: 35,
    humidity: 45,
    windSpeed: 12,
    condition: 'Sunny',
    icon: '☀️',
    description: 'Clear sky with bright sunshine'
  },
  'london': {
    city: 'London',
    country: 'United Kingdom',
    temperature: 15,
    feelsLike: 13,
    humidity: 78,
    windSpeed: 18,
    condition: 'Cloudy',
    icon: '☁️',
    description: 'Overcast with light clouds'
  },
  'new york': {
    city: 'New York',
    country: 'United States',
    temperature: 22,
    feelsLike: 24,
    humidity: 60,
    windSpeed: 15,
    condition: 'Partly Cloudy',
    icon: '⛅',
    description: 'Partly cloudy with occasional sunshine'
  },
  'tokyo': {
    city: 'Tokyo',
    country: 'Japan',
    temperature: 28,
    feelsLike: 31,
    humidity: 70,
    windSpeed: 8,
    condition: 'Humid',
    icon: '🌤️',
    description: 'Warm and humid with light breeze'
  },
  'paris': {
    city: 'Paris',
    country: 'France',
    temperature: 18,
    feelsLike: 17,
    humidity: 65,
    windSpeed: 10,
    condition: 'Clear',
    icon: '🌙',
    description: 'Clear evening sky'
  },
  'dubai': {
    city: 'Dubai',
    country: 'UAE',
    temperature: 42,
    feelsLike: 48,
    humidity: 30,
    windSpeed: 20,
    condition: 'Hot',
    icon: '🔥',
    description: 'Extremely hot and sunny'
  }
};

const WeatherApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const searchWeather = async (city: string) => {
    const query = city.toLowerCase().trim();
    if (!query) return;

    setLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const data = mockWeatherData[query];
    
    if (data) {
      setWeather(data);
      setError('');
      // Add to recent searches
      if (!recentSearches.includes(data.city)) {
        setRecentSearches(prev => [data.city, ...prev].slice(0, 5));
      }
    } else {
      setWeather(null);
      setError(`City "${city}" not found. Try: Cairo, London, New York, Tokyo, Paris, or Dubai`);
    }

    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchWeather(searchQuery);
  };

  const handleQuickSearch = (city: string) => {
    setSearchQuery(city);
    searchWeather(city);
  };

  return (
    <>
      {/* Header */}
      <section className="py-4" style={{ marginTop: '80px', background: 'var(--luxury-black-light)' }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/projects" className="btn btn-luxury-outline btn-sm">
              ← Back to Projects
            </Link>
            <h1 className="text-gold-gradient mb-0" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>
              Weather App
            </h1>
          </div>
        </div>
      </section>

      {/* App Content */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* Search */}
              <div className="demo-container mb-4">
                <div className="demo-header">
                  <h5 className="text-gold mb-0">Search Location</h5>
                </div>
                <div className="p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control luxury-input"
                        placeholder="Enter city name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button type="submit" className="btn btn-luxury-gold" disabled={loading}>
                        {loading ? 'Searching...' : 'Search'}
                      </button>
                    </div>
                  </form>
                  
                  {/* Quick Search Buttons */}
                  <div className="d-flex flex-wrap gap-2">
                    <span className="text-silver small me-2">Try:</span>
                    {['Cairo', 'London', 'Tokyo', 'Dubai'].map((city) => (
                      <button
                        key={city}
                        className="btn btn-sm btn-luxury-outline"
                        onClick={() => handleQuickSearch(city)}
                        style={{ padding: '4px 12px', fontSize: '0.8rem' }}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div 
                  className="mb-4 p-3"
                  style={{ 
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.5)'
                  }}
                >
                  <p className="text-danger mb-0">{error}</p>
                </div>
              )}

              {/* Weather Display */}
              {weather && (
                <div className="weather-card p-0 mb-4">
                  <div 
                    className="p-4 text-center"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--luxury-black-lighter) 0%, var(--luxury-black) 100%)'
                    }}
                  >
                    <span style={{ fontSize: '5rem' }}>{weather.icon}</span>
                    <h2 className="text-gold-gradient mb-1" style={{ fontSize: '4rem', fontWeight: 700 }}>
                      {weather.temperature}°C
                    </h2>
                    <p className="text-silver mb-0">{weather.condition}</p>
                  </div>
                  
                  <div className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3 pb-3" style={{ borderBottom: '1px solid var(--luxury-black-lighter)' }}>
                      <div>
                        <h3 className="text-gold mb-0">{weather.city}</h3>
                        <span className="text-silver small">{weather.country}</span>
                      </div>
                      <p className="text-silver mb-0 small">{weather.description}</p>
                    </div>
                    
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="p-3 text-center" style={{ background: 'var(--luxury-black)' }}>
                          <p className="text-silver small mb-1">Feels Like</p>
                          <p className="text-gold mb-0 h5">{weather.feelsLike}°C</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 text-center" style={{ background: 'var(--luxury-black)' }}>
                          <p className="text-silver small mb-1">Humidity</p>
                          <p className="text-gold mb-0 h5">{weather.humidity}%</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 text-center" style={{ background: 'var(--luxury-black)' }}>
                          <p className="text-silver small mb-1">Wind Speed</p>
                          <p className="text-gold mb-0 h5">{weather.windSpeed} km/h</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 text-center" style={{ background: 'var(--luxury-black)' }}>
                          <p className="text-silver small mb-1">Condition</p>
                          <p className="text-gold mb-0 h5">{weather.condition}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="demo-container mb-4">
                  <div className="demo-header">
                    <h5 className="text-gold mb-0">Recent Searches</h5>
                  </div>
                  <div className="p-3">
                    <div className="d-flex flex-wrap gap-2">
                      {recentSearches.map((city, index) => (
                        <button
                          key={index}
                          className="btn btn-sm"
                          style={{ 
                            background: 'var(--luxury-black)',
                            color: 'var(--luxury-silver)',
                            border: '1px solid var(--luxury-black-lighter)'
                          }}
                          onClick={() => handleQuickSearch(city)}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* No Search Yet */}
              {!weather && !error && (
                <div className="demo-container">
                  <div className="p-5 text-center">
                    <span style={{ fontSize: '4rem' }}>🌍</span>
                    <p className="text-silver mt-3 mb-0">
                      Search for a city to see the weather
                    </p>
                  </div>
                </div>
              )}

              {/* Tech Info */}
              <div className="mt-5 p-4" style={{ border: '1px solid var(--luxury-black-lighter)' }}>
                <h5 className="text-gold mb-3">Technical Highlights</h5>
                <ul className="text-silver mb-0 ps-3">
                  <li className="mb-2">Search functionality with mock data</li>
                  <li className="mb-2">Loading states and error handling</li>
                  <li className="mb-2">Recent searches history</li>
                  <li className="mb-2">Dynamic weather display with icons</li>
                  <li className="mb-2">Responsive card layout</li>
                  <li>Ready for real API integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeatherApp;
