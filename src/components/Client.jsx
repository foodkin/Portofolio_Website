import clientData from '../data/client';

const Client = () => {
  const looped = [...clientData, ...clientData, ...clientData];

  return (
    <section
      id="client"
      className="py-20"
      style={{ background: 'linear-gradient(180deg, #111827 0%, #1f2937 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Trusted By
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Clients I've Worked With</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
      </div>

      <div
        className="relative overflow-hidden py-2"
        style={{
          maskImage: 'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)'
        }}
      >
        <div
          className="flex items-center"
          style={{
            animation: `marquee ${clientData.length * 5}s linear infinite`,
            width: 'max-content'
          }}
        >
          {looped.map((client, idx) => (
            <a
              key={idx}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={client.name}
              className="flex-shrink-0 mx-3 group"
            >
              <div
                className="flex items-center justify-center px-8 transition-all duration-300 client-card"
                style={{ width: '190px', height: '76px' }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.3333%); }
        }
        .client-card {
          background: rgba(255, 255, 255, 0.07);
          border: 0.5px solid rgba(255, 255, 255, 0.15);
        }
        .client-card:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Client;