import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledCenterDiv, StyledDiv } from "./App";
import styled from "styled-components";
import virusimg from "../src/assets/home-bg.jpg";

const StyledProvinceCard = styled.div`
  border: 1px solid black;
  width: 200px;
  margin: 10px auto;
  padding: 9px;
  > .username {
    font-size: 20px;
    color: black;
    transition: 0.2s;

    + .dob {
      color: grey;
    }
  }
`;

export const StyledCenterImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Provinces = () => {
  const { id } = useParams();

  const [data, setData] = useState(0);

  useEffect(() => {
    fetch(`https://covid-api.com/api/provinces/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      // .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <StyledCenterDiv>
        <StyledCenterImg src={virusimg} alt="img" />
      </StyledCenterDiv>
      <StyledCenterDiv>
        <h1>Provincias </h1>
      </StyledCenterDiv>

      <StyledDiv>
        {data?.data?.map((e) => (
          <>
            <StyledProvinceCard onClick={() => handleClick(e.iso)} key={e.iso}>
              <h1 className="username">{e.province}</h1>
              <p className="dob">
                ISO: <span>{e.iso}</span>
              </p>
              <p className="dob"></p>
              Country: <span>{e.name}</span>
              <p className="dob">
                Location:{" "}
                <span>
                  lat {e.lat} - long {e.long}
                </span>
              </p>
            </StyledProvinceCard>
          </>
        ))}
      </StyledDiv>
    </>
  );
};

export default Provinces;
