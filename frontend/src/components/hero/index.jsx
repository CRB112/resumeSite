export default function Hero() {
    return (
        <div style={{
            position: "fixed", top: 0, left: 0,
            width: "100vw", height: "100vh",
            display: "flex", justifyContent: "center", alignItems: "center",
            pointerEvents: "none", zIndex: 1,
            color: "white", fontSize: "3rem", fontWeight: "bold",
        }}>
            Connor Banning
        </div>
    )
  }