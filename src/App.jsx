import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLandingCard = styled.div`
  border: 1px solid black;
  width: 120px;
  margin: 10px auto;
  padding: 9px;
  > .username {
    font-size: 20px;
    color: black;
    transition: 0.2s;

    &:hover {
      color: red;
    }

    + .dob {
      color: grey;
    }
  }
`;
export const StyledDiv = styled.div`
  display: flex;
  align-content: start;
  flex-wrap: wrap;
`;

export const StyledCenterDiv = styled.div`
  text-align: center;
`;

function App() {
  const [data, setData] = useState(0);

  const navigate = useNavigate();

  const handleClick = (iso) => navigate(`province/${iso}`);

  useEffect(() => {
    fetch("https://covid-api.com/api/regions")
      .then((response) => response.json())
      .then((data) => setData(data))
      // .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        <StyledCenterDiv>
          <h1>Covid 19</h1>
        </StyledCenterDiv>

        <h3>Propagación del Virus</h3>
        <p>
          El virus SARS-CoV-2, que causa la enfermedad COVID-19, se propaga
          principalmente a través de pequeñas partículas líquidas expulsadas por
          una persona infectada al toser, estornudar, hablar, o incluso al
          respirar. El contacto cercano con personas infectadas y tocar
          superficies contaminadas también puede ser una vía de transmisión.
        </p>
        <p>
          Explora información actualizada, recursos de salud confiables y
          noticias relevantes para mantenerte informado mientras navegamos
          juntos por estos tiempos sin precedentes.
        </p>
      </div>
      <StyledDiv>
        {/* {JSON.stringify(data.data)} */}
        {data?.data?.map((e) => (
          <>
            <StyledLandingCard onClick={() => handleClick(e.iso)} key={e.iso}>
              <h1 className="username">{e.name}</h1>
              <p className="dob">
                ISO: <span>{e.iso}</span>
              </p>
            </StyledLandingCard>
          </>
        ))}
        {/* {data.map((item) => (
        <>{item}</>
      ))} */}
      </StyledDiv>
    </>
  );
}

export default App;
