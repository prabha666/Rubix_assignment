

export default function Tiles() {
   const data = [
    {
      id: 1,
      content: "Introducing AI to children in an age appropriate manner",
    },
    {
      id: 2,
      content:
        "Gain awareness on AI and build an interactive story around it",
    },
    {
      id: 3,
      content: "Acquire programming skills in a user-friendly format",
    },
    {
      id: 4,
      content: "Exposure to mini projects on diverse topics",
    },
    {
      id: 5,
      content: "Train the teachers programme",
    },
  ];
  const colors = ["#29208a", "#801b48", "#FE5000", "#094a1d", "#996600"];
  return (
    <>
      <div
        id="segment"
        style={{
          backgroundColor: "#ccc",
          display: "flex",
          alignItems: "center",
          padding: "10px",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        {data.map((item, index) => (
          <div
            style={{
              zIndex: item.id,
              position: "relative",
            }}
          >
            <div
              style={{
                width: "180px",
                backgroundColor: colors[index],
                height: "30px",
                ...(index % 2 === 0
                  ? {
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      position: "absolute",
                      top: -30,
                    }
                  : {
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      position: "absolute",
                      bottom: -30,
                    }),
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  fontWeight: "bold",
                  width: "30px",
                  height: "30px",
                  padding: "1px",
                  marginLeft: "5rem",
                  textAlign: "center",
                  border: `solid 1px ${colors[index]}`,
                  color: colors[index],
                  ...(index % 2 === 0
                    ? {
                        marginTop: "-7px",
                        borderRadius: "150px",
                      }
                    : {
                        marginTop: "15px",
                        borderRadius: "150px",
                      }),
                }}
              >
                0{index + 1}
              </div>
            </div>
            <div
              key={item.id}
              style={{
                ...(index % 2 === 0
                  ? {
                      backgroundImage: "linear-gradient(#ebe8e8, #ccc)",
                    }
                  : {
                      backgroundImage: "linear-gradient(#ccc, #ebe8e8)",
                    }),
                height: "200px",
                width: "180px",
                boxShadow: "20px 0px 20px -20px #858585 ",
              }}
            >
              <div
                style={{
                  ...(index % 2 === 0
                    ? {}
                    : {
                        position: "absolute",
                        top: "3rem",
                      }),
                  textAlign: "center",
                }}
              >
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}