import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my portfolio!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Fitness: Become the Best Version of Yourself'
              label='Fitness'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Photography:  Is an Art, and You are the Artist'
              label='Photography'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Coding: The Flight Path of my Dreams'
              label='Coding'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Traveling: New Adventures Await!'
              label='Travel'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Follow my Journey on Youtube as an Instructor'
              label='Youtube'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;