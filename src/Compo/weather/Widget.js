import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { options_W, url_W } from "../../API";
const Wrapper = styled.div`
  background-color: gray;
  width: 350px;
  height: 200px;
  border-radius: 0.5rem;
  // justify-content: center;
  margin: 15px;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  display: flex;
  justify-content: space-around;
  justify-items: center;
`;

const Name = styled.p`
  color: white;
  padding-top: 15px;

  font-size: 48px;
`;
const Description = styled.p`
  font-size: 15px;
  color: white;
  padding-left: 15px;
`;

const Temp = styled.p`
  color: white;
  font-size: 48px;
`;

function Widget({ lat, lon, data }) {
  const [DCity, DCountry] = data.split(" ");
  const [weatherDegree, SetweatherDegree] = useState();
  const loadOptions = async () => {
    try {
      const response = await fetch(`${url_W}${lat}/${lon}`, options_W);
      const result = await response.json();
      SetweatherDegree(Math.round(result.main.temp - 273.15));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadOptions();
  }, [DCity]);
  return (
    <Wrapper>
      <div>
        <Name>{DCity}</Name>
        <Description>{DCountry}</Description>
      </div>
      <Temp>{weatherDegree}°C</Temp>
    </Wrapper>
  );
}

export default Widget;
