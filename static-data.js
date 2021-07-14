
import React from 'react';
import InThoughtSvg from './assets/svg/in-thought.svg'; 
import NewIdeasSvg from './assets/svg/new-ideas.svg';
import TeachingSvg from './assets/svg/teaching.svg'


const onBoardData = [ 
   {
      id: 1,
      heading: 'New Concepts',
      subHeading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nobis ipsa architecto autem deleniti provident culpa eos earum molestias dignissimos.',
      svgComponent: <InThoughtSvg width={250} height={250} />,
      btnText: 'Next'
   },
   {
      id: 2,
      heading: 'Innovaite Programs',
      subHeading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nobis ipsa architecto autem deleniti provident culpa eos earum molestias dignissimos.',
      svgComponent: <NewIdeasSvg width={250} height={250} />,
      btnText: 'Next'
   },
   {
      id: 3,
      heading: 'Presonalised Coaching',
      subHeading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nobis ipsa architecto autem deleniti provident culpa eos earum molestias dignissimos.',
      svgComponent: <TeachingSvg width={250} height={250} />,
      btnText: 'Start'
   },
];

export { onBoardData };