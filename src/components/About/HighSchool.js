import React from 'react';
import images from './images.js';

const HighSchool = () => {
  return (
    <div id="high-school" className='container-fluid'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2>U.A. HIGH SCHOOL</h2>
                    <p>U.A. is the #1 ranked high school for heroics and is considered as the top Hero Academy in Japan. Students are separated based on their abilities into specific Departments and Classes - A, B, C, D, E, F, G, H, I, J, and K. At the entrance, there is a security wall nicknamed the "U.A. Barrier" that automatically closes if a person does not have a Student ID Card or Special Entry Permission ID. Many precautions have been made to keep members of the press and villains out.</p>
                    <p>U.A. was originally a day school, but it was later turned into a boarding school.</p>
                    <p>U.A. executes a six-day school week where the only day off is Sunday.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src={images.hs1} alt="My Hero Academia High School"></img>
                </div>
                <div className='col-lg-6'>
                    <img src={images.hs2} alt="My Hero Academia High School"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HighSchool;