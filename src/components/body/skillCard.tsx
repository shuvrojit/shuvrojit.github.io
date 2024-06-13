"use client";

import { SkillCardTypes } from "@/types";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const SkillContainer = styled.div`
  min-width: 360px;
max-width: 480px;
  border: 2px solid black;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  p {
    font-size: 1rem;
    letter-spacing: 0.2px;
    line-height: 1.1;
  }
  a {
    font-size: 0.9rem;
  }
`;

const SkillCardTitle = styled.h2`
  font-family: "Lato";
  font-size: 1.3rem;
  font-weight: 700;
`;

const ExtIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  transition: 0.3s;
  background-color: #91ccf5;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #b3e0ff;
  }
`;

const SkillsToolsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const SkillsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SkillCard = ({
  title,
  description,
  title_icon,
  tools_icons,
  external_icon,
}: SkillCardTypes) => {
  return (
    <>
      <SkillContainer>
        <Image src={title_icon} width={40} height={40} />
        <SkillCardTitle> {title} </SkillCardTitle>
        <p>{description}</p>

        <SkillsBottom>
          <SkillsToolsContainer>
            {tools_icons.map((icon, index) => (
              <Image
                title={icon.title}
                key={index}
                src={icon.path}
                width={40}
                height={40}
              />
            ))}
          </SkillsToolsContainer>
          <ExtIcon>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5253 5.49475L10.5206 7.49475L15.0782 7.50541L5.47473 17.0896L6.88752 18.5052L16.5173 8.89479L16.5065 13.5088L18.5065 13.5134L18.5253 5.51345L10.5253 5.49475Z"
                fill="currentColor"
              />
            </svg>
          </ExtIcon>
        </SkillsBottom>
      </SkillContainer>
    </>
  );
};

export default SkillCard;
