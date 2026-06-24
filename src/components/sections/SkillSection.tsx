export default function SkillSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "80px 20px",
        backgroundColor: "#0f0f0f",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: "2rem",
            marginBottom: "40px",
          }}
        >
          Skill Section
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              style={{
                height: "200px",
                border: "1px solid #333",
                borderRadius: "16px",
                backgroundColor: "#1a1a1a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "18px",
              }}
            >
              Skill {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}