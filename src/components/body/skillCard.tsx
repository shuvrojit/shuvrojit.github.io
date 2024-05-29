"use client";

import { SkillCardTypes } from "@/types";
import styled from "styled-components";
import Link from "next/link";

const SkillContainer = styled.div`
  max-width: 400px;
  max-height: 400px;
  border: 2px solid black;
  padding: 2.5rem 3.5rem;
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

const SkillCard = ({ title, description, link }: SkillCardTypes) => {
  return (
    <>
      <SkillContainer>
        <SkillCardTitle> {title} </SkillCardTitle>
        <p>{description}</p>
        <Link href={link}>
          See Work
          <hr />
        </Link>
      </SkillContainer>
    </>
  );
};

export default SkillCard;
