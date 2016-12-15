<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
	<![endif]-->
     <link rel="stylesheet" href="wp-content/themes/twentythirteen/css/font-awesome.min.css"> 
  <link rel="stylesheet" href="wp-content/themes/twentythirteen/css/demo.css"> 
   <link href="wp-content/themes/twentythirteen/css/dcaccordion.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type='text/javascript' src="wp-content/themes/twentythirteen/js/jquery.cookie.js"></script>
<script type='text/javascript' src="wp-content/themes/twentythirteen/js/jquery.hoverIntent.minified.js"></script>
<script type='text/javascript' src="wp-content/themes/twentythirteen/js/jquery.dcjqaccordion.2.7.min.js"></script>
<script type="text/javascript">
$(document).ready(function($){
					$('#accordion-1').dcAccordion({
						eventType: 'click',
						autoClose: true,
						saveState: true,
						disableLink: true,
						speed: 'slow',
						showCount: true,
						autoExpand: true,
						cookie	: 'dcjq-accordion-1',
						classExpand	 : 'dcjq-current-parent'
					});
					$('#accordion-2').dcAccordion({
						eventType: 'click',
						autoClose: false,
						saveState: true,
						disableLink: true,
						speed: 'fast',
						classActive: 'test',
						showCount: true
					});
					$('#accordion-3').dcAccordion({
						eventType: 'click',
						autoClose: false,
						saveState: false,
						disableLink: false,
						showCount: false,
						speed: 'slow'
					});
					$('#accordion-4').dcAccordion({
						eventType: 'hover',
						autoClose: true,
						saveState: true,
						disableLink: true,
						menuClose: false,
						speed: 'slow',
						showCount: true
					});
					$('#accordion-5').dcAccordion({
						eventType: 'hover',
						autoClose: false,
						saveState: true,
						disableLink: true,
						menuClose: true,
						speed: 'fast',
						showCount: true
					});
					$('#accordion-6').dcAccordion({
						eventType: 'hover',
						autoClose: false,
						saveState: false,
						disableLink: false,
						showCount: false,
						menuClose: true,
						speed: 'slow'
					});
});
</script>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="page" class="hfeed site">
    <div id="header">
    <div id="logo">
        <img alt="" src="wp-content/themes/twentythirteen/images/logo.png" >
    </div>
    <div id="menu">
    <ul>
        <li class="active"><a href="about.html">ABOUT</a>
        <ul class="submenu sub1">
        <li><a href="meet_team.html">Company</a></li>
        <li><a href="vision.html">Vision &amp; Values</a></li>
        <li><a href="labs.html">Labs</a></li>
        </ul>
        </li>
        <li><a href="platform.html">PLATFORM</a>
        <ul class="submenu sub3">
        <li><a href="m2mplatform.html">M2M Platform</a></li>
        <li><a href="m2mgateway.html">M2M Gateway</a></li>
        <li><a href="tv_commerce.html">TV Commerce</a></li>
        </ul>
        </li>
        <li><a href="solutions.html">SOLUTIONS</a>
        <ul class="submenu sub4">
         
        <li><a href="#">Consumer Electronics</a></li>
        <li><a href="#">Health Care</a></li>
        <li><a href="#">Manufacturing</a></li>
        </ul>
        </li>
        <li><a href="services.html">SERVICES</a>
        <ul class="submenu sub2">
        <li><a href="ideation.html">Product Ideation</a></li>
        <li><a href="hardware.html">Hardware Design</a></li> 
        <li><a href="mobility.html">Mobility</a></li>
        <li><a href="product_testing.html">Product Development &amp; Testing</a></li>
        <li><a href="design.html">Design</a></li>
        <li><a href="analytics.html">Analytics &amp; Big Data</a></li>
        </ul>
        </li>
        <li><a >CAREERS</a><ul class="submenu subc">        <li><a href="careers.php">Careers</a></li>        <li><a href="benefits.php">Benefits</a></li>        <li><a href="jobs.php">Jobs</a></li>        <li><a href="campus.php">Campus</a></li>        </ul></li>
        <li><a href="contact.php">CONTACT</a></li>
        </ul>
    </div>
    <div id="search">  </div>
    <div class="clear"></div>
    </div>

    <div id="left-menu">
    <div id="search1">
        <input type="text"/>
        <a href="#" class="search1"><img src="images/src.png" alt=""/></a>
    </div>
    <ul>
    <li><a href="index.html">HOME</a></li>
    <ul class="accordion"  id="accordion-1">
    <li><a href="#">ABOUT</a>
    <ul class="sub">
        <li><a href="meet_team.html">Company</a></li>
        <li><a href="vision.html">Vision &amp; Values</a></li>
        <li><a href="labs.html">Labs</a></li>
        </ul>
    </li>
    </ul>
        
        
        <ul class="accordion"  id="accordion-2">
    <li class="active"><a href="#">PLATFORM</a>
    <ul class="sub">
         
        <li><a href="m2mplatform.html">M2M Platform</a></li>
        <li><a href="m2mgateway.html">M2M Gateway</a></li>
        <li><a href="tv_commerce.html">TV Commerce</a></li>
        </ul>
    </li>
    </ul>
        <ul class="accordion"  id="accordion-3">
    <li><a href="#">SOLUTIONS</a>
    <ul class="sub">
         
         
        <li><a href="#">Consumer Electronics</a></li>
        <li><a href="#">Health Care</a></li>
         <li><a href="#">Manufacturing</a></li>
        </ul>
    </li>
    </ul>
        
        <ul class="accordion"  id="accordion-4">
    <li><a href="#">SERVICES</a>
    <ul class="sub">
        <li><a href="ideation.html">Product Ideation</a></li>
        <li><a href="hardware.html">Hardware Design</a></li>
        <li><a href="mobility.html">Mobility</a></li>
        <li><a href="product_testing.html">Product Development &amp; Testing</a></li>
        <li><a href="design.html">Design</a></li>
        <li><a href="analytics.html">Analytics &amp; Big Data</a></li>
        </ul>
    </li>
    </ul>
       
        <ul class="accordion"  id="accordion-5">
        <li><a href="#" >CAREERS</a>
        <ul class="sub">        
        <li><a href="careers.php">Careers</a></li>        
        <li><a href="benefits.php">Benefits</a></li>        
        <li><a href="jobs.php">Jobs</a></li>        
        <li><a href="campus.php">Campus</a></li>        
        </ul>
        </li>
        </ul>
        
        
        <li><a href="contact.php">CONTACT</a></li>
        </ul>
    </div>
		<div class="about-wrapper">
