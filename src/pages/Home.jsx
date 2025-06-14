import './Home.css'

export default function Home({ currentUser }) {
  const features = [
    {
      id: 1,
      title: "User Authentication",
      description: "Secure login system with predefined user accounts",
      author: "Security Team"
    },
    {
      id: 2,
      title: "Routing System", 
      description: "Navigate between different pages seamlessly",
      author: "Development Team"
    },
    {
      id: 3,
      title: "Responsive Design",
      description: "Works perfectly on desktop and mobile devices",
      author: "UI/UX Team"
    }
  ];

  return (
    <div className="home">
      <h2>Welcome, {currentUser}!</h2>
      <p>You have successfully logged into our Single Page Application.</p>
      
      <h3>Application Features</h3>
      {features && features.map(feature => (
        <div key={feature.id} className="card">
          <h4>{feature.title}</h4>
          <p>Created by {feature.author}</p>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}