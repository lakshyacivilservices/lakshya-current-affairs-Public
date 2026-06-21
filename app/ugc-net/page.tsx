export default function UGCNetPage() {
  const subjects = [
    "Paper 1",
    "Economics",
    "Political Science",
    "Philosophy",
    "Psychology",
    "Sociology",
    "History",
    "Anthropology",
    "Commerce",
    "Education",
    "Social Work",
    "Management",
    "Public Administration",
    "Law",
    "Geography",
    "Mass Communication",
    "Computer Science",
    "Environmental Science",
    "Statistics",
    "Yoga",
    "Disaster Management",
    "Forestry",
    "Indian Knowledge System",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#22d3ee",
          fontSize: "3rem",
        }}
      >
        🎓 UGC NET Academy
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          marginBottom: "40px",
        }}
      >
        Complete UGC NET Preparation Portal
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "15px",
        }}
      >
        {subjects.map((subject) => (
          <div
            key={subject}
            style={{
              background: "#111827",
              padding: "18px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            {subject}
          </div>
        ))}
      </div>
    </main>
  );
}