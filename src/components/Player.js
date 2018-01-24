import React, { Component } from 'react';

class Player extends Component {
    render() {
        return (


<div class="row">
<link rel="stylesheet" href="resources/css/foundation.min.css"/>
    <link rel="stylesheet" href="css/styles.css"/>
			<div class="large-8 medium-10 small-11 large-centered medium-centered small-centered columns" id="amplitude-player">
				<div class="row">
					<div class="large-6 medium-6 small-12 columns" id="amplitude-left">
					<img amplitude-song-info="cover_art_url" amplitude-main-song-info="true"/>
						<div id="player-left-bottom">
							<div id="time-container">
								<span class="current-time">
									<span class="amplitude-current-minutes" amplitude-main-current-minutes="true"></span>:<span class="amplitude-current-seconds" amplitude-main-current-seconds="true"></span>
								</span>
								<input type="range" class="amplitude-song-slider" amplitude-main-song-slider="true" step=".1"/>
								<span class="duration">
									<span class="amplitude-duration-minutes" amplitude-main-duration-minutes="true"></span>:<span class="amplitude-duration-seconds" amplitude-main-duration-seconds="true"></span>
								</span>
							</div>

							<div id="control-container">
								<div id="repeat-container">
									<div class="amplitude-repeat" id="repeat"></div>
								</div>

								<div id="central-control-container">
									<div id="central-controls">
										<div class="amplitude-prev" id="previous"></div>
										<div class="amplitude-play-pause" amplitude-main-play-pause="true" id="play-pause"></div>
										<div class="amplitude-next" id="next"></div>
									</div>
								</div>

								<div id="shuffle-container">
									<div class="amplitude-shuffle amplitude-shuffle-off" id="shuffle"></div>
								</div>
							</div>

							<div id="meta-container">
								<span amplitude-song-info="name" amplitude-main-song-info="true" class="song-name"></span>

								<div class="song-artist-album">
									<span amplitude-song-info="artist" amplitude-main-song-info="true"></span>
									<span amplitude-song-info="album" amplitude-main-song-info="true"></span>
								</div>
							</div>
						</div>
					</div>
					<div class="large-6 medium-6 small-12 columns" id="amplitude-right">
						<div class="song amplitude-song-container amplitude-play-pause" amplitude-song-index="0">
							<div class="song-now-playing-icon-container">
								<div class="play-button-container">

								</div>
								<img class="now-playing" src="img/now-playing.svg"/>
							</div>
							<div class="song-meta-data">
								<span class="song-title">Risin' High (feat Raashan Ahmad)</span>
								<span class="song-artist">Ancient Astronauts</span>
							</div>
							<a href="https://switchstancerecordings.bandcamp.com/track/risin-high-feat-raashan-ahmad" class="bandcamp-link" target="_blank">
								<img class="bandcamp-grey" src="img/bandcamp-grey.svg"/>
								<img class="bandcamp-white" src="img/bandcamp-white.svg"/>
							</a>
							<span class="song-duration">3:30</span>
						</div>
						<div class="song amplitude-song-container amplitude-play-pause" amplitude-song-index="1">
							<div class="song-now-playing-icon-container">
								<div class="play-button-container">

								</div>
								<img class="now-playing" src="img/now-playing.svg"/>
							</div>
							<div class="song-meta-data">
								<span class="song-title">The Gun</span>
								<span class="song-artist">Lorn</span>
							</div>
							<a href="https://lorn.bandcamp.com/" class="bandcamp-link" target="_blank">
								<img class="bandcamp-grey" src="img/bandcamp-grey.svg"/>
								<img class="bandcamp-white" src="img/bandcamp-white.svg"/>
							</a>
							<span class="song-duration">3:16</span>
						</div>
						<div class="song amplitude-song-container amplitude-play-pause" amplitude-song-index="2">
							<div class="song-now-playing-icon-container">
								<div class="play-button-container">

								</div>
								<img class="now-playing" src="img/now-playing.svg"/>
							</div>
							<div class="song-meta-data">
								<span class="song-title">Anvil</span>
								<span class="song-artist">Lorn</span>
							</div>
							<a href="https://lorn.bandcamp.com/" class="bandcamp-link" target="_blank">
								<img class="bandcamp-grey" src="img/bandcamp-grey.svg"/>
								<img class="bandcamp-white" src="img/bandcamp-white.svg"/>
							</a>
							<span class="song-duration">3:32</span>
						</div>
						<div class="song amplitude-song-container amplitude-play-pause" amplitude-song-index="3">
							<div class="song-now-playing-icon-container">
								<div class="play-button-container">

								</div>
								<img class="now-playing" src="img/now-playing.svg"/>
							</div>
							<div class="song-meta-data">
								<span class="song-title">I Came Running</span>
								<span class="song-artist">Ancient Astronauts</span>
							</div>
							<a href="https://switchstancerecordings.bandcamp.com/track/i-came-running" class="bandcamp-link" target="_blank">
								<img class="bandcamp-grey" src="img/bandcamp-grey.svg"/>
								<img class="bandcamp-white" src="img/bandcamp-white.svg"/>
							</a>
							<span class="song-duration">3:30</span>
						</div>
						<div class="song amplitude-song-container amplitude-play-pause" amplitude-song-index="4">
							<div class="song-now-playing-icon-container">
								<div class="play-button-container">

								</div>
								<img class="now-playing" src="img/now-playing.svg"/>
							</div>
							<div class="song-meta-data">
								<span class="song-title">First Snow</span>
								<span class="song-artist">Emancipator</span>
							</div>
							<a href="https://emancipator.bandcamp.com" class="bandcamp-link" target="_blank">
								<img class="bandcamp-grey" src="img/bandcamp-grey.svg"/>
								<img class="bandcamp-white" src="img/bandcamp-white.svg"/>
							</a>
							<span class="song-duration">5:12</span>
						</div>
						<div class="song amplitude-song-container amplitude-play-pause" amplitude-song-index="5">
							<div class="song-now-playing-icon-container">
								<div class="play-button-container">

								</div>
								<img class="now-playing" src="img/now-playing.svg"/>
							</div>
							<div class="song-meta-data">
								<span class="song-title">Terrain</span>
								<span class="song-artist">pg.lost</span>
							</div>
							<a href="https://pglost.bandcamp.com/track/terrain" class="bandcamp-link" target="_blank">
								<img class="bandcamp-grey" src="img/bandcamp-grey.svg"/>
								<img class="bandcamp-white" src="img/bandcamp-white.svg"/>
							</a>
							<span class="song-duration">5:29</span>
						</div>
						<div class="song amplitude-song-container amplitude-play-pause" amplitude-song-index="6">
							<div class="song-now-playing-icon-container">
								<div class="play-button-container">

								</div>
								<img class="now-playing" src="img/now-playing.svg"/>
							</div>
							<div class="song-meta-data">
								<span class="song-title">Vorel</span>
								<span class="song-artist">Russian Circles</span>
							</div>
							<a href="https://russiancircles.bandcamp.com/track/vorel" class="bandcamp-link" target="_blank">
								<img class="bandcamp-grey" src="img/bandcamp-grey.svg"/>
								<img class="bandcamp-white" src="img/bandcamp-white.svg"/>
							</a>
							<span class="song-duration">5:29</span>
						</div>
						<div class="song amplitude-song-container amplitude-play-pause" amplitude-song-index="7">
							<div class="song-now-playing-icon-container">
								<div class="play-button-container">

								</div>
								<img class="now-playing" src="img/now-playing.svg"/>
							</div>
							<div class="song-meta-data">
								<span class="song-title">Intro / Sweet Glory</span>
								<span class="song-artist">Jimkata</span>
							</div>
							<a href="http://jimkata.bandcamp.com/track/intro-sweet-glory" class="bandcamp-link" target="_blank">
								<img class="bandcamp-grey" src="img/bandcamp-grey.svg"/>
								<img class="bandcamp-white" src="img/bandcamp-white.svg"/>
							</a>
							<span class="song-duration">2:39</span>
						</div>
						<div class="song amplitude-song-container amplitude-play-pause" amplitude-song-index="8">
							<div class="song-now-playing-icon-container">
								<div class="play-button-container">

								</div>
								<img class="now-playing" src="img/now-playing.svg"/>
							</div>
							<div class="song-meta-data">
								<span class="song-title">Offcut #6</span>
								<span class="song-artist">Little People</span>
							</div>
							<a href="https://littlepeople.bandcamp.com/track/offcut-6" class="bandcamp-link" target="_blank">
								<img class="bandcamp-grey" src="img/bandcamp-grey.svg"/>
								<img class="bandcamp-white" src="img/bandcamp-white.svg"/>
							</a>
							<span class="song-duration">1:00</span>
						</div>
						<div class="song amplitude-song-container amplitude-play-pause" amplitude-song-index="9">
							<div class="song-now-playing-icon-container">
								<div class="play-button-container">

								</div>
								<img class="now-playing" src="img/now-playing.svg"/>
							</div>
							<div class="song-meta-data">
								<span class="song-title">Dusk To Dawn</span>
								<span class="song-artist">Emancipator</span>
							</div>
							<a href="https://emancipator.bandcamp.com/track/dusk-to-dawn-2" class="bandcamp-link" target="_blank">
								<img class="bandcamp-grey" src="img/bandcamp-grey.svg"/>
								<img class="bandcamp-white" src="img/bandcamp-white.svg"/>
							</a>
							<span class="song-duration">5:25</span>
						</div>
						<div class="song amplitude-song-container amplitude-play-pause" amplitude-song-index="10">
							<div class="song-now-playing-icon-container">
								<div class="play-button-container">

								</div>
								<img class="now-playing" src="img/now-playing.svg"/>
							</div>
							<div class="song-meta-data">
								<span class="song-title">Anthem</span>
								<span class="song-artist">Emancipator</span>
							</div>
							<a href="https://emancipator.bandcamp.com/track/anthem" class="bandcamp-link" target="_blank">
								<img class="bandcamp-grey" src="img/bandcamp-grey.svg"/>
								<img class="bandcamp-white" src="img/bandcamp-white.svg"/>
							</a>
							<span class="song-duration">5:40</span>
						</div>
					</div>
				</div>
			</div>
		</div>









        );
    }
}

export default Player;