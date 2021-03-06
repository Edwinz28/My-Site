import React, { Component } from 'react';


class About extends Component {
  render() {

    if(this.props.data){
      var bio = this.props.data.bio;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="images/profilepic.JPG" alt="" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
               <div className="columns download">
                  <p>
                     <a href="files/EdwinZhangResume.pdf"className="button" download><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
      <div className="meme-banner"></div>

   </section>
    );
  }
}

export default About;
