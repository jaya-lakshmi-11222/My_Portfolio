import React from 'react';
import { Grid, Button } from '@mui/material';
import './skill.css';
import Html from '../Data/htmlimg.webp';
import Clang from '../Data/clangimg.png';
import Java from '../Data/javaimg.png';
import Python from '../Data/pythonimg.jpg';
import Css from '../Data/cssimg.png';
import Flask from '../Data/flaskimg.png';
import Mern from '../Data/mernimg.png';
import Sql from '../Data/sqlimg.png';
import { Link } from 'react-router-dom';


const Skill = () => {
  const projects = [
    {
      id: 1,
      title: 'MERN Stack',
      image: Mern,
    },
    {
      id: 2,
      title: 'Python',
      image: Python,
    },
    {
      id: 3,
      title: 'Java',
      image: Java,
    },
    {
        id: 3,
        title: 'C prog',
        image: Clang,
      },
      {
        id: 3,
        title: 'Basic Of SQL',
        image: Sql,
      },
      {
        id: 3,
        title: 'HTML',
        image: Html,
      },
      {
        id: 3,
        title: 'CSS',
        image: Css,
      },
      {
        id: 3,
        title: 'Flask',
        image: Flask,
      },
  ];
  const openGitHubProfile = () => {
    
    const githubProfileUrl = 'https://github.com/jaya-lakshmi-11222';
    window.open(githubProfileUrl, '_blank');
  }
  return (
    <Grid
      className='fullcontainer'
      container
      spacing={3}
      id="projects"

    >
      {projects.map((project) => (
        <Grid
          key={project.id}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          style={{ paddingTop: '100px' }}
        >
          <div className="cardpadding">
            <div className="card">
              <img src={project.image} alt={project.title} className="card-image" />
              <div className="card-details">
                <h3>{project.title}</h3>
                <div className="buttongroup">
                  <Button variant="contained" onClick={openGitHubProfile}>
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Skill;
