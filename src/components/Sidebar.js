import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

// import style components
import Outer from './wrappers/Outer';
import Inner from './wrappers/Inner';
import ContentWrapper from './wrappers/ContentWrapper';
import SidebarWrapper from './wrappers/SidebarWrapper';


const List = styled.ul`
  margin: 5px 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  font-weight: bold;
`;

const ListItem = styled.li`
  list-style: none;
  color: #393939;
  padding-left: 10px;
  margin: 5px 0;
  font-weight: normal;
`;

const StyledLink = styled(Link)`
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  color: #393939;

  :hover {
    color: #ff4f0a;
  }
`;

const Sidebar = ({ data, children }) => {
  const { edges } = data.allProjectsJson;
  const projects = edges.filter(edge => edge.node.type === 'project');
  const exercises = edges.filter(edge => edge.node.type === 'exercise');

  return(
    <Outer>
      <Inner>

        <SidebarWrapper>
          <List>Intro
            <ListItem>
              <StyledLink to="/projects">What and Why?</StyledLink>
            </ListItem>
          </List>

          <List>Projects
            {projects.map((project, i) => (
              <ListItem key={i}>
                <StyledLink to={project.node.fields.slug}>{project.node.link_name}</StyledLink>
              </ListItem>
            ))}
          </List>

          <List>Exercises
            {exercises.map((exercise, i) => (
              <ListItem key={i}>
                <StyledLink to={exercise.node.fields.slug}>{exercise.node.link_name}</StyledLink>
              </ListItem>
            ))}
          </List>
        </SidebarWrapper>

        <ContentWrapper>
          {children()}
        </ContentWrapper>

      </Inner>
    </Outer>
  )
}

export default Sidebar