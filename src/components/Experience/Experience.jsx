import React from 'react';
import '../Experience/Experience.css'
import htmlimage from '../../img/html.png'
import cssimage from '../../img/css.png'
import jsimage from '../../img/js.png'
import reactimage from '../../img/react.png'
import reduximage from '../../img/redux.png'
import gitimage from '../../img/git.png'
import githubimage from '../../img/github.png'
import boostrapimage from '../../img/boostrap.png'
import nodeimage from '../../img/node.png'
import postgresimage from '../../img/postgresql-icon.png'
import sequelizeimage from '../../img/sequelize.png'
import firebaseimage from '../../img/Firebase.png'


const Experience = () => {
    return (
        <div className='container-experience'>

            <div className="awesome1" style={{textAlign: 'center'}}>
                <span>Mis</span>
                <span>Habilidades</span>
              
            {/* <div className="blur s-blur3" style={{ background: "#ABF1FF94" }}></div> */}
           
            </div>
           
            <div className="experience" id='experience'>
                <div className="achievement">
                    {/* darkMode */}
                    <div className="circle" ><img className='imge-habiliti' src={htmlimage} alt="" /></div>
                    <span  > </span>
                    <span>HTML</span>
                </div>
                <div className="achievement">
                    <div className="circle" ><img className='imge-habiliti' src={cssimage} alt="" /></div>
                    <span  > </span>
                    <span>CSS</span>
                </div>
                <div className="achievement">
                    <div className="circle" ><img className='imge-habiliti' src={jsimage} alt="" /></div>
                    <span > </span>
                    <span>JS</span>
                </div>
                <div className="achievement">
                    <div className="circle" ><img className='imge-habiliti' src={reactimage} alt="" /></div>
                    <span > </span>
                    <span>React</span>
                </div>

            </div>
            <div className="experience" id='experience'>

                <div className="achievement">
                    {/* darkMode */}
                    <div className="circle" ><img className='imge-habiliti' src={reduximage} alt="" /></div>
                    <span  > </span>
                    <span>Redux</span>
                </div>
                <div className="achievement">
                    <div className="circle" ><img className='imge-habiliti' src={gitimage} alt="" /></div>
                    <span  > </span>
                    <span>Git</span>
                </div>
                <div className="achievement">
                    <div className="circle" ><img className='imge-habiliti' src={githubimage} alt="" /></div>
                    <span > </span>
                    <span>GitHub</span>
                </div>
                <div className="achievement">
                    <div className="circle" ><img className='imge-habiliti' src={boostrapimage} alt="" /></div>
                    <span > </span>
                    <span>Boostrap</span>
                </div>

            </div>
            <div className="experience" id='experience'>

                <div className="achievement">
                    {/* darkMode */}
                    <div className="circle" ><img className='imge-habiliti' src={nodeimage} alt="" /></div>
                    <span  > </span>
                    <span>NodeJs</span>
                </div>
                <div className="achievement">
                    <div className="circle" ><img className='imge-habiliti' src={postgresimage} alt="" /></div>
                    <span  > </span>
                    <span>Postgres</span>
                </div>
                <div className="achievement">
                    <div className="circle" ><img className='imge-habiliti' src={sequelizeimage} alt="" /></div>
                    <span > </span>
                    <span>Sequalize</span>
                </div>
                <div className="achievement">
                    <div className="circle" ><img className='imge-habiliti' src={firebaseimage} alt="" /></div>
                    <span > </span>
                    <span>Firebase</span>
                   
                </div>
               

            </div>
            
          




        </div>

    );
};

export default Experience;