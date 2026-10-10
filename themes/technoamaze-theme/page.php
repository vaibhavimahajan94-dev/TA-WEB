<?php
/**
 * TechnoAmaze Corporate IT Theme - Generic Page Template
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

get_header();
?>

<main id="main-content" class="ta-standard-page" style="min-height:60vh;padding:120px 20px 60px;">
  <div class="ta-container" style="max-width:1100px;margin:0 auto;">
    <?php while (have_posts()) : the_post(); ?>
      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="ta-page-header" style="margin-bottom:40px;text-align:center;">
          <h1 style="font-family:var(--ta-font-head);font-size:2.8rem;color:var(--ta-ink);margin-bottom:12px;">
            <?php the_title(); ?>
          </h1>
        </header>

        <div class="ta-page-content" style="line-height:1.8;font-size:1.05rem;color:var(--ta-ink);">
          <?php the_content(); ?>
        </div>
      </article>
    <?php endwhile; ?>
  </div>
</main>

<?php
get_footer();
