import React, { Component } from 'react';
 
class CatIndex extends Component {
//const CatIndex = () => {
 constructor(props) {
   super(props)
   state : {
     breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair'] 
    }
 };

  render(){
   return (
      <div>
        <CatList cats={breeds} />
      </div>
   );
  }

}

export default CatIndex;