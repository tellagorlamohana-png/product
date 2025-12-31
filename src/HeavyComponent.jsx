import React from "react";

const HeavyComponent = React.memo(() => {
  console.log("🔥 HeavyComponent rendered");

  // Simulate heavy UI work
  const items = Array.from({ length: 5000 }, (_, i) => i);

  return (
    <div style={{ padding: "20px", border: "2px solid #444" }}>
      <h2>Heavy Component</h2>
      <p>This component is expensive to render.</p>
      <ul>
        {items.slice(0, 10).map((item) => (
          <li key={item}>Item {item}</li>
        ))}
      </ul>
    </div>
  );
});

export default HeavyComponent;
