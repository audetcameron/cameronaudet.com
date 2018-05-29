<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Bootstrap_4
 */

?>

</div><!-- #content -->

<footer id="colophon" class="site-footer text-center bg-white mt-4 text-muted">

	<section class="footer-widgets text-left">
		<div class="container">
			<div class="row">
				<?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
					<div class="col">
						<aside class="widget-area footer-1-area mb-2">
							<?php dynamic_sidebar( 'footer-1' ); ?>
						</aside>
					</div>
				<?php endif; ?>

				<?php if ( is_active_sidebar( 'footer-2' ) ) : ?>
					<div class="col">
						<aside class="widget-area footer-2-area mb-2">
							<?php dynamic_sidebar( 'footer-2' ); ?>
						</aside>
					</div>
				<?php endif; ?>

				<?php if ( is_active_sidebar( 'footer-3' ) ) : ?>
					<div class="col">
						<aside class="widget-area footer-3-area mb-2">
							<?php dynamic_sidebar( 'footer-3' ); ?>
						</aside>
					</div>
				<?php endif; ?>

				<?php if ( is_active_sidebar( 'footer-4' ) ) : ?>
					<div class="col">
						<aside class="widget-area footer-4-area mb-2">
							<?php dynamic_sidebar( 'footer-4' ); ?>
						</aside>
					</div>
				<?php endif; ?>
			</div>
			<!-- /.row -->
		</div>
	</section>




		
		<div class="copyright-info">
			© 2018, Cameron Audet. All rights reserved.
		</div>
		


	<!-- /.container -->
</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-119563624-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-119563624-1');
</script>


</body>
</html>
