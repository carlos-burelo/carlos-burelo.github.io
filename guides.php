<!DOCTYPE html>
<html>
<head>
	<!--Google Fonts-->
	<link href="https://fonts.googleapis.com/css?family=Overpass:600,900&display=swap" rel="stylesheet">
	<!--App Content-->
	<meta content="My Personal Website"name="description">
	<meta content="Carlos Fernando Burelo Juarez" name="author">
	<meta content="Blog" name="apple-mobile-web-app-title">
	<meta content="Blog" name="application-name">
	<meta content="#ffffff" name="msapplication-TileColor">
	<meta content="#ffffff" name="theme-color">
	<meta content="Website" property="og:type">
	<meta content="Blog Personal" property="og:title">
	<meta content="Blog Personal" property="og:description">
	<meta content="summary_large_image" name="twitter:card">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
	<!--Css-->
	<link href="css/style.css" rel="stylesheet">
	<title>Guides</title>
	<!--Favicons-->
	<link href="fav/apple-touch-icon.png" rel="apple-touch-icon" sizes="120x120">
	<link href="fav/favicon-380.png" rel="icon" sizes="380x380" type="image/png">
	<link href="fav/favicon-240.png" rel="icon" sizes="240x240" type="image/png">
	<link href="fav/favicon-192.png" rel="icon" sizes="192x192" type="image/png">
	<link href="fav/favicon-128.png" rel="icon" sizes="128x128" type="image/png">
	<link href="fav/web-icon.png" rel="icon" sizes="120x120" type="image/png">
	<link href="fav/web-icon.png" rel="shortcut icon">
	<!--App Manifest-->
	<meta content="fav/browserconfig.xml" name="msapplication-config">
	<link href="site.webmanifest" rel="manifest">
	<script type="application/ld+json">
	{
	 "@context": "http://schema.org",
	 "@type": "WebSite",
	 "name": "Carlos Burelo",
	 "url": "https://carlos-burelo.web.app/"
	}
	</script>
	<script type="application/ld+json">
	{
	 "@context": "http://schema.org",
	 "@type": "Organization",
	 "name": "Carlos Burelo",
	 "url": "https://carlos-burelo.web.app/",
	 "logo": "https://carlos-burelo.web.app/fav/web-icon.png",
	 "telephone": "+52 914 137 8906",
	 "email": "carlosfernandoburelo@gmail.com",
	 "address": {
	   "@type": "PostalAddress",
	   "addressLocality": "Mexico, Tabasco",
	   "postalCode": "86690",
	   "streetAddress": "Morelos"
	 }
	}
</script>
</head>
<body>
	<script>
	document.body.className = "body-init";
	</script>
	<nav class="hidden-xs" id="nav-top">
		<div class="container-fluid">
			<a class="nav-logo" href="index.html"><img alt="Carlos Burelo" height="70" src="fav/web-icon.png"></a>
			<ul class="nav-items">
				<li>
					<a href="login.html">Log In</a>
				</li>
				<li>
					<a href="post.html">Guides</a>
				</li>
				<li>
					<a href="blog.html">Blog</a>
				</li>
				<li>
					<a href="index.html#services">Services</a>
				</li>
				<li>
					<a href="works.html"><span>Roms</span><span class="badge">6</span></a>
				</li>
				<li>
					<a href="index.html#contact">Contact</a>
				</li>
			</ul>
		</div>
	</nav>
	<nav class="visible-xs" id="nav-mobile">
		<a class="nav-icon" href="index.html"><img alt="Carlos Burelo icon" height="50" src="img/logos/story-of-ams-icon.png" width="50"></a> <a class="call-button" href="tel:+31202101455"><svg class="phone-icon" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"></svg>Carlos Burelo</a> <a class="hamburger" href="#menu" id="nav-hamburger" onclick="toggleMenu(event)">
		<div class="hamburger-bar hamburger-bar-1"></div>
		<div class="hamburger-bar hamburger-bar-2"></div>
		<div class="hamburger-bar hamburger-bar-3"></div></a>
	</nav>
	<nav class="visible-xs" id="nav-mobile-overlay">
		<a class="nav-logo" href="index.html"><img alt="Carlos Burelo" height="70" src="fav/web-icon.png"></a>
		<ul class="nav-items">
			<li>
				<a href="cases.html">Cases</a>
			</li>
			<li>
				<a href="index.html#services" onclick="">Services</a>
			</li>
			<li>
				<a href="works.html"><span>Careers</span><span class="badge">6</span></a>
			</li>
			<li>
				<a href="index.html#contact" onclick="">Contact</a>
			</li>
		</ul>
	</nav>
	<nav class="social-nav hidden-xs hidden-sm" id="nav-right">
		<ul class="nav-items">
			<li>
				<a href="https://twitter.com/CarlosBurelo9"  target="_blank"><img alt="Twitter" height="30" src="img/social/twitter.png" width="30"></a>
			</li>
			<li>
				<a href="https://www.facebook.com/carlos.burelo.773"  target="_blank"><img alt="Facebook" height="30" src="img/social/facebook.png" width="30"></a>
			</li>
			<li>
				<a href="https://github.com/carlos-burelo"  target="_blank"><img alt="LinkedIn" height="30" src="img/social/github.png" width="30"></a>
			</li>
			<li>
				<a href="https://t.me/CarlosBurelo"  target="_blank"><img alt="Medium" height="30" src="img/social/telegram.png" width="30"></a>
			</li>
		</ul>
	</nav>
	<div class="cases-page" id="cases">
		<div class="h1 background-text parallax parallax--landing">
			Guides
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-10 col-lg-push-1 col-sm-12">
					<div class="landing-content parallax-anchor cases__intro">
						<h1 class="h2 stripe-accent stripe-accent-left"><span>Desde conceptos hasta proyectos grandes<mark>.</mark></span></h1>
						<p class="intro-text big">Guias para aprender sobre el mundo del desarrollo android</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<a class="card--case" href="cases/bols.html">
					<div class="case__image__container">
						<div class="case__image" style="background-image:url(img/cases/bols/bols-header.jpg)"></div>
					</div>
					<div class="case__content">
						<div>
							<h4 class="bols case__company">Bols</h4>
							<h3 class="case__name">The Emporium of Treasures<mark>.</mark></h3>
							<h6 class="case__tags">Design <mark>&bull;</mark> Film <mark>&bull;</mark> Development</h6>
						</div>
						<p class="big view-more-btn">View case</p>
					</div></a> <a class="card--case card--case--left" href="cases/intersport-nike.html">
					<div class="case__image__container">
						<div class="case__image" style="background-image:url(img/cases/intersport-nike/nike-brafinder.jpg)"></div>
					</div>
					<div class="case__content">
						<div>
							<h4 class="intersport case__company">Intersport + Nike</h4>
							<h3 class="case__name">Fit for sport<mark>.</mark></h3>
							<h6 class="case__tags">Webapp <mark>&bull;</mark> Development</h6>
						</div>
						<p class="big view-more-btn">View case<svg viewbox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
						<path d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg></p>
					</div></a> <a class="card--case" href="cases/marqt.html">
					<div class="case__image__container">
						<div class="case__image" style="background-image:url(img/cases/marqt/marqt-header.jpg)"></div>
					</div>
					<div class="case__content">
						<div>
							<h4 class="marqt case__company">Marqt</h4>
							<h3 class="case__name">Authentic Experiences<mark>.</mark></h3>
							<h6 class="case__tags">Film <mark>&bull;</mark> Campaign</h6>
						</div>
						<p class="big view-more-btn">View case <svg viewbox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
						<path d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg></p>
					</div></a><a class="card--case card--case--left" href="cases/intersport.html">
					<div class="case__image__container">
						<div class="case__image" style="background-image:url(img/cases/intersport/intersport-header.jpg)"></div>
					</div>
					<div class="case__content">
						<div>
							<h4 class="intersport case__company">Intersport</h4>
							<h3 class="case__name">Making in-store shopping easier and more fun<mark>.</mark></h3>
							<h6 class="case__tags">App <mark>&bull;</mark> UX/UI Design <mark>&bull;</mark> Development</h6>
						</div>
						<p class="big view-more-btn">View case<svg viewbox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
						<path d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg></p>
					</div></a><a class="card--case" href="cases/wonderkind.html">
					<div class="case__image__container">
						<div class="case__image" style="background-image:url(img/cases/wonderkind/wonderkind-header.png)"></div>
					</div>
					<div class="case__content">
						<div>
							<h4 class="wonderkind case__company">Wonderkind</h4>
							<h3 class="case__name">A website for optimal A/B testing<mark>.</mark></h3>
							<h6 class="case__tags">Website <mark>&bull;</mark> Development <mark>&bull;</mark> Optimization</h6>
						</div>
						<p class="big view-more-btn">View case<svg viewbox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
						<path d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg></p>
					</div></a><a class="card--case card--case--left" href="cases/alliander.html">
					<div class="case__image__container">
						<div class="case__image" style="background-image:url(img/cases/alliander/alliander-preview.jpg)"></div>
					</div>
					<div class="case__content">
						<div>
							<h4 class="alliander case__company">Alliander</h4>
							<h3 class="case__name">A platform to discuss the future of energy<mark>.</mark></h3>
							<h6 class="case__tags">Platform <mark>&bull;</mark> UX/UI Design <mark>&bull;</mark> Development</h6>
						</div>
						<p class="big view-more-btn">View case<svg viewbox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
						<path d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg></p>
					</div></a>
				</div>
			</div>
		</div>
	</div>
	<div class="scroll-anchor" id="contact">
		<div class="container-fluid text-center">
			<h2>More Guides<mark>.</mark></h2>
			<a class="btn btn-primary hidden-xs" href="index.html"> Back
			</a>
			<a class="btn btn-default typeform-share" data-mode="popup" href="blog/2.html" rel="noopener noreferrer">Next
			</a>
		</div>
		<div class="container-animation hidden-xs">
			<div class="cross-s"><img src="img/icons/icon-cross-small.png"></div>
			<div class="cross-s"><img src="img/icons/icon-cross-small.png"></div>
			<div class="square"><img src="img/icons/icon-square.png"></div>
			<div class="square"><img src="img/icons/icon-square.png"></div>
			<div class="cross-s"><img src="img/icons/icon-cross-small.png"></div>
			<div class="cross-s"><img src="img/icons/icon-cross-small.png"></div>
			<div class="circle"><img src="img/icons/icon-circle.png"></div>
			<div class="circle"><img src="img/icons/icon-circle.png"></div>
			<div class="square"><img src="img/icons/icon-square.png"></div>
			<div class="lines"><img src="img/icons/icon-lines.png"></div>
			<div class="lines"><img src="img/icons/icon-lines.png"></div>
			<div class="cross-b"><img src="img/icons/icon-cross-big.png"></div>
			<div class="cross-s"><img src="img/icons/icon-cross-small.png"></div>
			<div class="circle"><img src="img/icons/icon-circle.png"></div>
			<div class="lines"><img src="img/icons/icon-lines.png"></div>
			<div class="square"><img src="img/icons/icon-square.png"></div>
			<div class="square"><img src="img/icons/icon-square.png"></div>
			<div class="circle"><img src="img/icons/icon-circle.png"></div>
			<div class="lines"><img src="img/icons/icon-lines.png"></div>
			<div class="cross-s"><img src="img/icons/icon-cross-small.png"></div>
		</div>
	</div>
	<div class="rectangle rectangle--1"></div>
	<div class="rectangle rectangle--2"></div>
	<div class="rectangle rectangle--3"></div>
	<div class="rectangle rectangle--4"></div>
	<div id="disclaimer">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-7">
					<div class="clearfix">
						<div class="disclaimer-col">
							<a class="logo" href="index.html"><img height="85" src="fav/web-icon.png"></a>
						</div>
						<div class="disclaimer-col center-col">
							<p>Carlos Burelo B.V.</p>
							<p><a href="mailto:carlosfernandoburelo@gmail.com">carlosfernandoburelo@gmail.com</a><br>
							<a href="tel:+31202101455">+31 20 210 1455</a></p>
						</div>
						<div class="disclaimer-col">
							<p><br></p>
							<p><a href="assets/terms-and-conditions.pdf" target="_blank">Terms &amp; Conditions</a><br>
							<a href="assets/privacy-policy.pdf" target="_blank">Privacy Policy</a></p>
						</div>
					</div>
				</div>
				<div class="col-lg-5">
					<label class="h4" for="mce-EMAIL">Newsletter</label>
					<form id="mc-form-newsletter" action="https://storyofams.us15.list-manage.com/subscribe/post?u=35cf2612bb33321a60e61d239&amp;id=37c990920c&amp;c=callback" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate="">
					  <div style="position: absolute; left: -5000px;" aria-hidden="true">
						<input class="js-validate-robot" type="text" name="b_35cf2612bb33321a60e61d239_37c990920c" tabindex="-1" value="">
					  </div>
					  <div class="input-group">
						<input class="mce-EMAIL form-control" id="mce-EMAIL" type="email" name="EMAIL" placeholder="Your email here..." value="">
						<span class="input-group-btn">
						  <button class="btn btn-small btn-primary" type="submit">
							<span>Subscribe</span>
						  </button>
						</span>
					  </div>
					</form>
				  </div>
				<div class="social-nav">
					<ul class="nav-items hidden-lg">
						<li>
							<a href="https://instagram.com/storyofams"  target="_blank"><img alt="Instagram" height="30" src="img/social/instagram.png" width="30"></a>
						</li>
						<li>
							<a href="https://www.facebook.com/Storyofams/"  target="_blank"><img alt="Facebook" height="30" src="img/social/facebook.png" width="30"></a>
						</li>
						<li>
							<a href="https://www.linkedin.com/company/16189715/"  target="_blank"><img alt="LinkedIn" height="30" src="img/social/linkedin.png" width="30"></a>
						</li>
						<li>
							<a href="https://medium.com/@storyofams"  target="_blank"><img alt="Medium" height="30" src="img/social/medium.png" width="30"></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<script src="js/scripts.js">
	</script>
</body>
</html>