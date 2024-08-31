import { ProjectInterface } from "@/types";
import styled from "styled-components";
import Link from "next/link";

const WorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const WorksItem = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;
const WorksTitle = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  h2 {
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    text-decoration: underline;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }
`;

const WorksDescription = styled.p`
  font-size: 1rem;
  font-family: Lato, sans-serif;
  font-weight: 400;
  margin-bottom: 20px;
`;

const ProjectView = ({ projectData }: ProjectInterface[]) => {
  return (
    <>
      <WorksContainer>
        {projectData.map((data, index) => (
          <WorksItem key={index}>
            <WorksTitle>
              <Link href="https://dribbble.com/shuvrojit/collections/7198179-WRITELIKEPRO">
                <h2>{data.name}</h2>
              </Link>
              <p>
                {data.platform} / {data.year}
              </p>
            </WorksTitle>
            <WorksDescription>{data.description}</WorksDescription>
          </WorksItem>
        ))}
      </WorksContainer>
    </>
  );
};

export default ProjectView;
