import React from 'react'
// import booksimg from '../books-img-1.jpg';
import booksimg from '../../images/books-img-1.jpg'
import logo from '../../images/logo512.png';
import { FeaturedBooks } from './FeaturedBooks';
import { Authors } from './Authors';
import { Category } from './Category';
import { Header } from '../Header';

export const HomePage = () => {
    return (<>
    <Header/>
        <section className="bg-img">
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                {/* <!-- Indicators/dots --> */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                {/* <!-- The slideshow/carousel --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active position">
                        <div className="row align position">
                            <div className="col-sm-12 col-md-6">
                                <p>THE BOOMWARM EDITORS'</p>
                                <h1 className='animation-bottom'>Featured Books of the</h1>
                                <h1><b className='animation-bottom'>February</b></h1>
                                <button className='btn btn-dark p-2 mt-3 animation-left'>See More</button>
                            </div>
                            <div className="col-sm-12 col-md-6 enimation-right">
                                <img src={booksimg} className='booksImg' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active position">
                        <div className="row align position">
                            <div className="col-sm-12 col-md-6">
                                <p>THE BOOMWARM EDITORS'</p>
                                <h1 className='animation-bottom'>Featured Books of the</h1>
                                <h1><b className='animation-bottom'>February</b></h1>
                                <button className='btn btn-dark p-2 mt-3 animation-left'>See More</button>
                            </div>
                            <div className="col-sm-12 col-md-6 enimation-right">
                                <img src={booksimg} className='booksImg' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active position">
                        <div className="row align position">
                            <div className="col-sm-12 col-md-6">
                                <p>THE BOOMWARM EDITORS'</p>
                                <h1 className='animation-bottom'>Featured Books of the</h1>
                                <h1><b className='animation-bottom'>February</b></h1>
                                <button className='btn btn-dark p-2 mt-3 animation-left'>See More</button>
                            </div>
                            <div className="col-sm-12 col-md-6 enimation-right">
                                <img src={booksimg} className='booksImg' alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Left and right controls/icons --> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

        </section>
        <section>
                <FeaturedBooks />
        </section>
        <section>
            <Authors/>
        </section>
        <section>
            <Category/>
        
        </section>
    </>

    )
}
