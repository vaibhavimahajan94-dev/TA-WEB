<?php
/**
 * TechnoAmaze Corporate IT Theme - Main Index Template
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

get_header();
?>

<div class="ta-container" style="max-width:1200px;margin:120px auto 60px;padding:0 20px;">
  <header class="ta-archive-header" style="margin-bottom:40px;text-align:center;">
    <h1 style="font-family:var(--ta-font-head);font-size:2.5rem;color:var(--ta-ink);margin-bottom:12px;">
      <?php single_post_title(); ?>
    </h1>
    <p style="color:var(--ta-muted);font-size:1.1rem;">
      <?php bloginfo('description'); ?>
    </p>
  </header>

  <?php if (have_posts()) : ?>
    <div class="ta-posts-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:30px;">
      <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('ta-post-card'); ?> style="background:var(--ta-card-bg);border:1px solid var(--ta-border);border-radius:12px;overflow:hidden;padding:24px;box-shadow:0 4px 16px rgba(0,0,0,0.04);">
          <?php if (has_post_thumbnail()) : ?>
            <div class="ta-post-thumb" style="margin:-24px -24px 20px -24px;max-height:200px;overflow:hidden;">
              <?php the_post_thumbnail('medium_large', array('style' => 'width:100%;height:100%;object-fit:cover;')); ?>
            </div>
          <?php endif; ?>
          <h2 style="font-size:1.4rem;margin-bottom:12px;">
            <a href="<?php the_permalink(); ?>" style="color:var(--ta-ink);text-decoration:none;">
              <?php the_title(); ?>
            </a>
          </h2>
          <div style="font-size:0.9rem;color:var(--ta-muted);margin-bottom:14px;">
            <span><i class="fa-regular fa-calendar"></i> <?php echo get_the_date(); ?></span> &bull; 
            <span><i class="fa-regular fa-user"></i> <?php the_author(); ?></span>
          </div>
          <div style="color:var(--ta-ink);line-height:1.6;margin-bottom:20px;">
            <?php the_excerpt(); ?>
          </div>
          <a href="<?php the_permalink(); ?>" style="color:var(--ta-accent);font-weight:600;text-decoration:none;">
            Read Article &rarr;
          </a>
        </article>
      <?php endwhile; ?>
    </div>

    <div class="ta-pagination" style="margin-top:50px;text-align:center;">
      <?php the_posts_pagination(); ?>
    </div>
  <?php else : ?>
    <div style="text-align:center;padding:60px 20px;">
      <h2>No articles found.</h2>
      <p style="color:var(--ta-muted);">Please check back later or search for other topics.</p>
    </div>
  <?php endif; ?>
</div>

<?php
get_footer();
