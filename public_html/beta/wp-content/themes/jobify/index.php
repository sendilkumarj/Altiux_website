<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme and one of the
 * two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Jobify
 * @since Jobify 1.0
 */

get_header(); ?>


	<header class="page-header">
		<h1 class="page-title"><?php echo apply_filters( 'jobify_job_archives_title', __( 'All Jobs', 'jobify' ) ); ?></h1>
	</header>

	<div id="primary" class="content-area">
		<div id="content" class="site-content full" role="main">
			<div class="entry-content">
				<?php echo do_shortcode( '[jobs]' ); ?>
			</div>
		</div><!-- #content -->

	</div><!-- #primary -->
                     <div class="container">
						<?php dynamic_sidebar( 'widget-area-front-page' ); ?>
					</div>
<?php get_footer(); ?>