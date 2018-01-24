import React, { Component } from 'react';
import Player from '../components/Player';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="main-wrapper-first">
			<header>
				<div className="container">
					<div className="header-wrap">
						<div className="header-top d-flex justify-content-between align-items-center">
							<div className="logo">
							<ul class="nav navbar-nav">
							<li className="scroll"><a href="#player" className="primary-btn d-inline-flex align-items-center"><span className="mr-10">HisMusic Player</span></a></li>
							</ul>
							</div>
							{/* <div className="main-menubar d-flex align-items-center">
								<nav className="hide">
									<a href="/">Home</a>
									<a href="generic.html">Generic</a>
									<a href="elements.html">Elements</a>
								</nav>
								<div className="menu-bar"><span className="lnr lnr-menu"></span></div>
							</div> */}
						</div>
					</div>
				</div>
			</header>
			<div className="banner-area">
				<div className="container">
					<div className="row justify-content-center height align-items-center">
						<div className="col-lg-8">
							<div className="banner-content text-center">
								<span className="text-white top text-uppercase">Re-imagining the way</span>
								<h1 className="text-white text-uppercase">All our music is toward Him</h1>
								<a target="_blank" href="http://www.hismusic.co.kr" className="primary-btn d-inline-flex align-items-center"><span className="mr-10">Buy</span><span className="lnr lnr-arrow-right"></span></a>
							</div>
						</div>
					</div>
				</div>
			</div>

			
			<section className="featured-area" id="player">
			<Player />
				<div className="container">
				
					<div className="row">
						<div className="col-md-4">
							<div className="single-feature d-flex flex-wrap justify-content-between">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="lnr lnr-sun"></span>
								</div>
								<div className="desc">
									<h6 className="title text-uppercase">Stunning Visuals</h6>
									<p>Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-feature d-flex flex-wrap justify-content-between">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="lnr lnr-code"></span>
								</div>
								<div className="desc">
									<h6 className="title text-uppercase">Clean Code</h6>
									<p>Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by uninstall utility </p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-feature d-flex flex-wrap justify-content-between">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="lnr lnr-clock"></span>
								</div>
								<div className="desc">
									<h6 className="title text-uppercase">Punctuality</h6>
									<p>If you own an Iphone, you’ve probably already worked out how much fun it is to use it to watch movies-it has that nice big screen</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	
			<section className="service-area">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="section-title text-center">
								<h3 className="text-white">Our Offered Services</h3>
								<span className="text-white text-uppercase">Re-imagining the way</span>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-sm-6">
							<div className="single-service">
								<div className="thumb" style={{"background": "url(img/s1.jpg)"}}>
									<div className="overlay overlay-content d-flex justify-content-center align-items-center">
										<a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
									</div>
								</div>
								<div className="desc">
									<h6 className="text-uppercase text-white">Creative Design</h6>
									<p className="text-white">WordPress, the premier free open-source blogging utility, has gone through several upgrades in</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="single-service">
								<div className="thumb" style={{"background": "url(img/s2.jpg)"}}>
									<div className="overlay overlay-content d-flex justify-content-center align-items-center">
										<a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
									</div>
								</div>
								<div className="desc">
									<h6 className="text-uppercase text-white">Driving Lesson</h6>
									<p className="text-white">The buying of large-screen TVs has absolutely skyrocketed lately. It seems that everyone wants one – </p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="single-service">
								<div className="thumb" style={{"background": "url(img/s3.jpg)"}}>
									<div className="overlay overlay-content d-flex justify-content-center align-items-center">
										<a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
									</div>
								</div>
								<div className="desc">
									<h6 className="text-uppercase text-white">Climbing Stairs</h6>
									<p className="text-white">Having used discount toner cartridges for twenty years, there have been a lot of changes in the </p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="single-service">
								<div className="thumb" style={{"background": "url(img/s4.jpg);"}}>
									<div className="overlay overlay-content d-flex justify-content-center align-items-center">
										<a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
									</div>
								</div>
								<div className="desc">
									<h6 className="text-uppercase text-white">Bike Accident</h6>
									<p className="text-white">Every avid independent filmmaker has dre amed about making that special interest documentary, or </p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="single-service">
								<div className="thumb" style={{"background": "url(img/s5.jpg)"}}>
									<div className="overlay overlay-content d-flex justify-content-center align-items-center">
										<a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
									</div>
								</div>
								<div className="desc">
									<h6 className="text-uppercase text-white">Car Driving</h6>
									<p className="text-white">Looking to buy a new computer Overwhelmed by all of the options available to you? Stressed by the </p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="single-service">
								<div className="thumb" style={{"background": "url(img/s6.jpg)"}}>
									<div className="overlay overlay-content d-flex justify-content-center align-items-center">
										<a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
									</div>
								</div>
								<div className="desc">
									<h6 className="text-uppercase text-white">Beach HoTel</h6>
									<p className="text-white">Shure’s Music Phone Adapter (MPA) is our favorite iPhone solution, since it lets you use the headphones </p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="single-service">
								<div className="thumb" style={{"background": "url(img/s7.jpg)"}}>
									<div className="overlay overlay-content d-flex justify-content-center align-items-center">
										<a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
									</div>
								</div>
								<div className="desc">
									<h6 className="text-uppercase text-white">Under Passway</h6>
									<p className="text-white">Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="single-service">
								<div className="thumb" style={{"background": "url(img/s8.jpg)"}}>
									<div className="overlay overlay-content d-flex justify-content-center align-items-center">
										<a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
									</div>
								</div>
								<div className="desc">
									<h6 className="text-uppercase text-white">Dawn to dusk</h6>
									<p className="text-white">Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	
		</div>
		<div className="main-wrapper">
			<section className="amazing-works-area">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="section-title text-center">
								<h3>Our Amazing Works</h3>
								<span className="text-uppercase">Re-imagining the way</span>
							</div>
						</div>
					</div>
					<div className="active-works-carousel mt-40">
						<div className="item">
							<div className="thumb" style={{"background": "url(img/w1.jpg)"}}></div>
							<div className="caption text-center">
								<h6 className="text-uppercase">Vector Illustration</h6>
								<p>LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to</p>
							</div>
						</div>
						
					</div>
			</section>
		</div>
		<div className="main-wrapper">
		
			<section className="story-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-3">
							<div className="story-title">
								<h3 className="text-white">Our Untold Story</h3>
								<span className="text-uppercase text-white">Re-imagining the way</span>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="story-box">
								<h6 className="text-uppercase">From the part of beginning</h6>
								<p>Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization. Societies are becoming more inter-connected. Thoughts from different</p>
								<a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
							</div>
						</div>
					</div>
				</div>
			</section>
	
			<section className="subscription-area">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="section-title text-center">
								<h3>Subscribe for our Newsletter</h3>
								<span className="text-uppercase">Re-imagining the way</span>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div id="mc_embed_signup">
								<form target="_blank" novalidate action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscription relative">
									<input type="email" name="EMAIL" placeholder="Email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email address'" required/>
									<div style={{"position": "absolute", "left": "-5000px;"}}>
										<input type="text" name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value=""/>
									</div>
									<button className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></button>
									<div className="info"></div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
	
			<section className="footer-widget-area">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="single-widget d-flex flex-wrap justify-content-between">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="lnr lnr-pushpin"></span>
								</div>
								<div className="desc">
									<h6 className="title text-uppercase">Address</h6>
									<p>56/8, panthapath, west <br/> dhanmondi, kalabagan, <br/>Dhaka - 1205</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-widget d-flex flex-wrap justify-content-between">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="lnr lnr-earth"></span>
								</div>
								<div className="desc">
									<h6 className="title text-uppercase">Email Address</h6>
									<div className="contact">
										<a href="mailto:info@dataarc.com">info@dataarc.com</a> <br/>
										<a href="mailto:support@dataarc.com">support@dataarc.com</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-widget d-flex flex-wrap justify-content-between">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="lnr lnr-phone"></span>
								</div>
								<div className="desc">
									<h6 className="title text-uppercase">Phone Number</h6>
									<div className="contact">
										<a href="tel:1545">012 4562 982 3612</a> <br/>
										<a href="tel:54512">012 6321 956 4587</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		
			<footer>
				<div className="container">
					<div className="footer-content d-flex justify-content-between align-items-center flex-wrap">
						<div className="logo">
							<img src="img/logo.png" alt=""/>
						</div>
						<div className="copy-right-text">Copyright &copy; 2017  |  All rights reserved to Dinomuz inc. This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></div>
						<div className="footer-social">
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a href="#"><i className="fa fa-dribbble"></i></a>
							<a href="#"><i className="fa fa-behance"></i></a>
						</div>
					</div>
				</div>
			</footer>
	
		</div>

            </div>
        );
    }
}

export default Home;