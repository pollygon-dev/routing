import './About.css'

export default function About() {
  return (
    <div className="about">
      <h2>About Our Application</h2>
      <p>This Single Page Application demonstrates the power of React routing and component-based architecture.</p>
      
      <div className="tech-section">
        <h3>Technologies Used</h3>
        <ul>
          <li><strong>React:</strong> Component-based UI library</li>
          <li><strong>React Router:</strong> Declarative routing for React applications</li>
          <li><strong>React Hooks:</strong> useState for state management</li>
          <li><strong>CSS:</strong> Styling for component design</li>
        </ul>
      </div>

      <div className="features-section">
        <h3>Key Features</h3>
        <ul>
          <li>🔐 User authentication with predefined accounts</li>
          <li>🧭 Client-side routing with React Router patterns</li>
          <li>📱 Responsive design</li>
          <li>🎨 Modern UI components</li>
        </ul>
      </div>

      <div className="conclusion">
        <p>This application follows React best practices and demonstrates proper component composition, state management, and routing implementation.</p>
      </div>
    </div>
  );
}