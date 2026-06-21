export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "10px",
            color: "#22d3ee",
          }}
        >
          🚀 Lakshya Current Affairs & PCS Academy
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#d1d5db",
          }}
        >
          AI Powered Learning Platform | हिंदी + English
        </p>
      </div>

      <section
        style={{
          background: "#111827",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "30px",
        }}
      >
        <h2>📚 Current Affairs Dashboard</h2>

        <ul>
          <li>📰 Daily Current Affairs</li>
          <li>📅 Weekly Current Affairs</li>
          <li>📖 Monthly Current Affairs</li>
          <li>🎯 Exam Focused Notes</li>
        </ul>
      </section>

      <section
        style={{
          background: "#111827",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "30px",
        }}
      >
        <h2>🎯 Popular Exams</h2>

        <ul>
          <li>UPPSC PCS</li>
          <li>UPSSSC PET</li>
          <li>Lekhpal</li>
          <li>RO/ARO</li>
          <li>Health Education Officer</li>
          <li>UGC NET Psychology</li>
        </ul>
      </section>

      <section
        style={{
          background: "#111827",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "30px",
        }}
      >
        <h2>💰 Resources</h2>

        <ul>
          <li>
            <a
              href="https://palratiraj.gumroad.com/l/qhfrbw"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Premium PDF Store
            </a>
          </li>

          <li>
            <a
              href="https://www.amazon.in/dp/B0F91P764L"
              target="_blank"
              rel="noopener noreferrer"
            >
              📚 Research Methodology Book
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/@LakshyCivilServices"
              target="_blank"
              rel="noopener noreferrer"
            >
              ▶️ YouTube Channel
            </a>
          </li>

          <li>
            <a
              href="https://whatsapp.com/channel/0029Vb7vDqq4IBhGjuC9j21p"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 WhatsApp Channel
            </a>
          </li>

          <li>
            <a
              href="https://lakshyacivilservicesacademy.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              📝 Blogger
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/glam.tec/"
              target="_blank"
              rel="noopener noreferrer"
            >
              👍 Facebook Page
            </a>
          </li>
        </ul>
      </section>

      <section
        style={{
          background: "#111827",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "30px",
        }}
      >
        <h2>🤖 Future AI Features</h2>

        <ul>
          <li>AI Current Affairs Assistant</li>
          <li>AI MCQ Generator</li>
          <li>AI Study Planner</li>
          <li>Timer Based Mock Tests</li>
          <li>Correct Answer Green / Wrong Answer Red</li>
          <li>Jump To Question</li>
          <li>Student Dashboard</li>
          <li>Leaderboard</li>
        </ul>
      </section>

      <footer
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#9ca3af",
        }}
      >
        © 2026 Lakshya Current Affairs & PCS Academy
      </footer>
    </main>
  );
}