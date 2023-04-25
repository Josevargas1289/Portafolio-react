import React from 'react';
import '../Portafolio/Portafolio.css'
import  Slide  from 'react-reveal/Slide';





const Portafolio = () => {
    return (
        <div className="portfolio" >
            <Slide bottom cascade duration = {2000} >

            {/* heading */}
            <div className='title-portafolio'>
                <span >Proyectos Recientes</span>
                <span>Portafolio</span>
            </div>
            <div className='container-p'>

                <div className='card-p p1'>
                    <div className='info-p if1'>
                        <h3 className='title-p animate__animated animate__fadeInBottomRight' > <i className='bx bxs-shopping-bag bx-sm bx-tada'> </i> eComerce</h3>

                        <p className='description-p'>Desarollado usando React, HTML, CSS, JS, Redux, Boostrap y NodeJS.</p>
                        <div className='container-btn'>
                            <a href="https://github.com/Josevargas1289/Ecomerce-AppReact.git" target='blank'>
                                <button className='btnP btn0'><i className='bx bxl-github bx-sm  bx-tada-hover'></i></button>
                            </a>
                            <a href="https://delightful-wisp-5363dd.netlify.app/" target='blank'>
                                <button className='btnP btn0'><i className='bx bxs-navigation bx-sm  bx-tada-hover'></i></button>
                            </a>
                        </div>

                    </div>
                </div>
                {/* <div className="blur-p s-blur5" style={{ background: "#ABF1FF94" }}></div> */}


                <div className='card-p p2'>
                    <div className='info-p if2'>
                        <h3 className='title-p animate__animated animate__fadeInBottomRight' > <i className='bx bxs-shopping-bag bx-sm bx-tada'> </i> eComerce</h3>
                        <p className='description-p'>Desarollado usando HTML, CSS y Vanilla JS </p>
                        <div className='container-btn'>
                            <a href="https://github.com/Josevargas1289/Ecomerce.git" target='blank'>
                                <button className='btnP btn1'><i className='bx bxl-github bx-sm  bx-tada-hover'></i></button>
                            </a>
                            <a href="https://chic-stroopwafel-cc6d4a.netlify.app/" target='blank'>
                                <button className='btnP btn1'><i className='bx bxs-navigation bx-sm  bx-tada-hover'></i></button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card-p p3'>
                    <div className='info-p if3 '>
                        <h3 className='title-p'><i className='bx bx-cricket-ball bx-sm bx-tada'></i> Pokedex</h3>
                        <p className='description-p'>Desarollado usando HTML, CSS y React, y peticiones a la API con ayuda de Axios</p>
                        <div className='container-btn'>
                            <a href="https://github.com/Josevargas1289/Pokedex-app.git" target='blank'>
                                <button className='btnP btn2'><i className='bx bxl-github bx-sm  bx-tada-hover'></i></button>
                            </a>
                            <a href="https://profound-froyo-7826bf.netlify.app/" target='blank'>
                                <button className='btnP btn2'><i className='bx bxs-navigation bx-sm  bx-tada-hover'></i></button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card-p p4'>
                    <div className='info-p if4'>
                        <h3 className='title-p'><i className='bx bxs-bug-alt bx-sm bx-tada'></i> Rick and Morty </h3>
                        <p className='description-p'>Desarollado usando HTML, CSS y React, y peticiones a la API con ayuda de Axios</p>
                        <div className='container-btn'>
                            <a href="https://github.com/Josevargas1289/rickandmorty.git" target='blank'>
                                <button className='btnP btn3'><i className='bx bxl-github bx-sm  bx-tada-hover'></i></button>
                            </a>
                            <a href="https://clinquant-dasik-e28497.netlify.app/" target='blank'>
                                <button className='btnP btn3'><i className='bx bxs-navigation bx-sm  bx-tada-hover'></i></button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card-p p5'>
                    <div className='info-p if5'>
                        <h1 className='title-p'><i className='bx bxs-log-in-circle bx-sm bx-tada'></i> Crud's</h1>
                        <p className='description-p'>Desarollado con Redux, React, HTML, CSS, permite crear, leer, actualizar y eliminar usuarios</p>
                        <div className='container-btn'>
                            <a href="https://github.com/Josevargas1289/CRUD-de-Usuarios.git" target='blank'>
                                <button className='btnP btn4'><i className='bx bxl-github bx-sm  bx-tada-hover'></i></button>
                            </a>
                            <a href="https://cheery-wisp-7d2e94.netlify.app/" target='blank'>
                                <button className='btnP btn4'><i className='bx bxs-navigation bx-sm  bx-tada-hover'></i></button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='card-p p6'>
                    <div className='info-p if6'>
                        <h1 className='title-p'><i className='bx bx-id-card bx-sm bx-tada'></i> Portafolio</h1>
                        <p className='description-p'>Desarrollado con HTML, CSS, React y Boostrap</p>
                        <div className='container-btn'>
                            <a href="https://github.com/Josevargas1289/Portafolio-react.git" target='blank'>
                                <button className='btnP btn5'><i className='bx bxl-github bx-sm  bx-tada-hover'></i></button>
                            </a>
                            <a href="https://josevargasportafolio.netlify.app/" target='blank'>
                                <button className='btnP btn5'><i className='bx bxs-navigation bx-sm  bx-tada-hover'></i></button>
                            </a>
                        </div>
                    </div>
                </div>
               



            </div>




            </Slide>


        </div>
    );
};

export default Portafolio;