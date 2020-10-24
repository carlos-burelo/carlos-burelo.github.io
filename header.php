<!DOCTYPE html>
<html lang ="es">
<head>
	<!--Google Fonts-->
	<link href="https://fonts.googleapis.com/css?family=Overpass:600,900&display=swap" rel="stylesheet"><!--App Content-->
	<meta content="Wellcome" name="description">
	<meta content="Carlos Burelo" name="author">
	<meta content="Carlos Burelo" name="apple-mobile-web-app-title">
	<meta content="Carlos Burelo" name="application-name">
	<meta content="#ffffff" name="msapplication-TileColor">
	<meta content="#ffffff" name="theme-color">
	<meta content="Website" property="og:type">
	<meta content="width" name="MobileOptimized">
	<meta content="true" name="HandheldFriendly">
	<meta content="Personal Development Blog for the Galaxy A30 and other devices" property="og:title">
	<meta content="fav/web-icon.png" property="og:image">
	<meta content="width=device-width, initial-scale=1, maximum-scale=5" name="viewport">
	<script src="https://kit.fontawesome.com/72a201a5f9.js" crossorigin="anonymous"></script>
	<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet">
	<link href="css/main.css" rel="stylesheet">
	<title>Carlos Burelo</title><!--Favicon-->
	<link href="fav/web-icon.png" rel="shortcut icon"><!--App Manifest-->
	<!-- <link href="manifest.json" rel="manifest"> -->
</head>
<body>
	<nav class="hidden-xs is-landing" id="nav-top">
		<div class="container-fluid">
			<a class="nav-logo" href="/">
			<img alt="Carlos Burelo" height="70" src="fav/web-icon.png"></a>
			<ul class="nav-items">
				<li>
					<a href="index.php">Home</a>
				</li>
				<li>
					<a href="login.php">Log In</a>
				</li>
				<li>
					<a href="guides">Guides</a>
				</li>
				<li>
					<a href="blog.php">Blog</a>
				</li>
				<li>
					<a href="works">Work's</a>
				</li>
				<li>
					<a href="index#disclaimer">Contact</a>
				</li>
			</ul>
		</div>
	</nav>
	<nav class="visible-xs" id="nav-mobile">
		<a class="nav-icon" href="/"><img alt="Carlos Burelo" height="50" width="50" src="fav/web-icon.png"></a><a class="hamburger" href="#menu" id="nav-hamburger" onclick="toggleMenu(event)">
		<div class="hamburger-bar hamburger-bar-1"></div>
		<div class="hamburger-bar hamburger-bar-2"></div>
		<div class="hamburger-bar hamburger-bar-3"></div></a>
	</nav>

	<nav class="visible-xs" id="nav-mobile-overlay">
		<a class="nav-logo" href="/">
		<img alt="Carlos Burelo" height="70" src="fav/web-icon.png"></a>
		<ul class="nav-items">
			<li>
				<a href="/cases">Cases</a>
			</li>
			<li>
				<a href="/#services" onclick="toggleMenu(event)">Services</a>
			</li>
			<li>
				<a href="/careers"><span>Careers</span><span class="badge">5</span></a>
			</li>
			<li>
				<a href="/#contact" onclick="toggleMenu(event)">Contact</a>
			</li>
		</ul>
	</nav>
	<nav class="social-nav hidden-xs hidden-sm" id="nav-right">
		<ul class="nav-items">
			<li><span><a href="https://twitter.com/CarlosBurelo9"><img alt="Twitter" height="30" src="img/social/twitter.png" width="30"></a></span></li>
			<li style="list-style: none"><span></span></li>
			<li><span><a href="https://www.facebook.com/carlos.burelo.773"><img alt="Facebook" height="30" src="img/social/facebook.png" width="30"></a></span></li>
			<li style="list-style: none"><span></span></li>
			<li><span><a href="https://github.com/carlos-burelo"><img alt="LinkedIn" height="30" src="img/social/github.png" width="30"></a></span></li>
			<li style="list-style: none"><span></span></li>
			<li><span><a href="https://t.me/CarlosBurelo"><img alt="Medium" height="30" src="img/social/telegram.png" width="30"></a></span></li>
			<li style="list-style: none"><span></span></li>
		</ul>
	</nav>