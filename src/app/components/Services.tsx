const Services = () => {
  const services = [
    {
      title: 'Appointment Scheduling',
      description: 'Efficient management of patient appointments, reminders, and follow-ups.',
      icon: '📅',
    },
    {
      title: 'Medical Transcription',
      description: 'Accurate and timely transcription of medical records and reports.',
      icon: '📝',
    },
    {
      title: 'Patient Support',
      description: 'Professional communication and support for patient inquiries.',
      icon: '🤝',
    },
    {
      title: 'Insurance Coordination',
      description: 'Handle insurance verifications and claim processing efficiently.',
      icon: '📋',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive virtual assistance solutions for healthcare professionals
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
