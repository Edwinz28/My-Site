import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var programming = this.props.data.programming.map(function (programming) {
        var className = 'bar-expand ' + programming.name.toLowerCase();
        return <li key={programming.name}><span style={{ width: programming.level }} className={className}></span><em>{programming.name}</em></li>
      })

      var web = this.props.data.web.map(function (web) {
        var className = 'bar-expand ' + web.name.toLowerCase();
        return <li key={web.name}><span style={{ width: web.level }} className={className}></span><em>{web.name}</em></li>
      })

      var other = this.props.data.other.map(function (other) {
        var className = 'bar-expand ' + other.name.toLowerCase();
        return <li key={other.name}><span style={{ width: other.level }} className={className}></span><em>{other.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Projects</span></h1>
          </div>

          <div className="nine columns main-col">
            <p>This section is being developed</p>
          </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills: Programming</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                {programming}
              </ul>
            </div>
          </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills: Web-Tooling</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                {web}
              </ul>
            </div>
          </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills: Other</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                {other}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
