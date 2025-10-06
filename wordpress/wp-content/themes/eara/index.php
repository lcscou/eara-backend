<?php get_header(); ?>
<main id="site-main">
    <?php
    if ( have_posts() ) :
        while ( have_posts() ) : the_post();
            the_content();
        endwhile;
    endif;
    ?>

    <?php echo print_r($wp_post_types) ;?>
</main>
<?php get_footer(); ?>
