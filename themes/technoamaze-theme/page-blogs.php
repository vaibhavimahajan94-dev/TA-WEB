<?php
/**
 * Template Name: Insights & Blogs Archive
 * Description: Dynamic WordPress blog listing page rendering all published posts from WP-Admin.
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

get_header();

$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$blog_query = new WP_Query(array(
    'post_type'      => 'post',
    'post_status'    => 'publish',
    'posts_per_page' => 9,
    'paged'          => $paged
));
?>

<!-- BLOGS ARCHIVE HERO -->
<section class="ta-blogs-archive-hero">
  <div class="ta-container" style="max-width:900px;margin:0 auto;">
    <h1 class="ta-blogs-archive-title">Insights, Engineering &amp; Innovation</h1>
    <p class="ta-blogs-archive-desc">Expert perspectives, technical guides, and industry analyses on AI, Cloud Infrastructure, Custom Software, and Digital Transformation.</p>
  </div>
</section>

<!-- BLOGS LISTING GRID -->
<main id="main-content" class="ta-blogs-archive-body" style="background:var(--ta-surface);min-height:60vh;padding:20px 0 80px;">
  <div class="ta-container" style="max-width:1240px;margin:0 auto;padding:0 20px;">

    <?php if ($blog_query->have_posts()) : ?>
      <div class="ta-blogs-grid">
        <?php while ($blog_query->have_posts()) : $blog_query->the_post();
            $categories = get_the_category();
            $cat_name = !empty($categories) ? esc_html($categories[0]->name) : 'Tech Insight';
            $thumb = function_exists('technoamaze_get_blog_thumbnail') 
                ? technoamaze_get_blog_thumbnail(get_the_ID(), 'medium_large') 
                : (has_post_thumbnail() ? get_the_post_thumbnail_url(get_the_ID(), 'medium_large') : 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&q=80');
            $read_time = function_exists('technoamaze_reading_time') ? technoamaze_reading_time(get_the_ID()) : '5 min read';
        ?>
          <article id="post-<?php the_ID(); ?>" class="ta-blog-card">
            <div class="ta-blog-card-thumb-wrap">
              <a href="<?php the_permalink(); ?>">
                <img class="ta-blog-card-thumb" src="<?php echo esc_url($thumb); ?>" alt="<?php the_title_attribute(); ?>" loading="lazy">
              </a>
              <span class="ta-blog-card-badge"><?php echo $cat_name; ?></span>
            </div>

            <div class="ta-blog-card-body">
              <div class="ta-blog-card-meta">
                <span><i class="fa-regular fa-calendar"></i> <?php echo get_the_date('M j, Y'); ?></span> &bull; 
                <span><i class="fa-regular fa-clock"></i> <?php echo esc_html($read_time); ?></span>
              </div>

              <h2 class="ta-blog-card-title">
                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
              </h2>

              <div class="ta-blog-card-excerpt">
                <?php echo wp_trim_words(get_the_excerpt(), 22, '...'); ?>
              </div>

              <div class="ta-blog-card-footer">
                <span style="font-size:0.85rem;color:var(--ta-muted);">By <?php the_author(); ?></span>
                <a href="<?php the_permalink(); ?>" class="ta-blog-read-more">Read Article &rarr;</a>
              </div>
            </div>
          </article>
        <?php endwhile; wp_reset_postdata(); ?>
      </div>

      <!-- Pagination -->
      <div class="ta-pagination" style="text-align:center;margin-top:40px;">
        <?php
        echo paginate_links(array(
            'total'   => $blog_query->max_num_pages,
            'current' => $paged,
            'prev_text' => '&laquo; Previous',
            'next_text' => 'Next &raquo;',
        ));
        ?>
      </div>

    <?php else : ?>
      <div style="text-align:center;padding:80px 20px;background:#fff;border-radius:14px;max-width:600px;margin:60px auto;border:1px solid var(--ta-border);">
        <i class="fa-regular fa-newspaper" style="font-size:48px;color:var(--ta-accent);margin-bottom:16px;"></i>
        <h2 style="font-size:1.6rem;margin-bottom:8px;">No Insights Published Yet</h2>
        <p style="color:var(--ta-muted);margin-bottom:24px;">New articles and technical case studies are being authored. Check back soon or visit WP-Admin to publish the first blog post!</p>
        <?php if (current_user_can('edit_posts')) : ?>
          <a href="<?php echo esc_url(admin_url('post-new.php')); ?>" class="ta-btn-cta">+ Publish a Blog Post in WP-Admin</a>
        <?php endif; ?>
      </div>
    <?php endif; ?>

  </div>
</main>

<?php
get_footer();
