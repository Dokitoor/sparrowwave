export function Stats() {
  const stats = [
    { label: "Clients Served", value: "10+" },
    { label: "Projects Delivered", value: "15+" },
    { label: "Years Engineering", value: "5+" },
    { label: "Uptime Achieved", value: "97.9%" },
  ];

  return (
    <section className="py-16 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-primary text-5xl md:text-6xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="font-secondary text-xs font-semibold text-blue-200 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
