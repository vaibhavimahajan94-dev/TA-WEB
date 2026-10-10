<?php
/**
 * TechnoAmaze Corporate IT Theme - Single Blog Post Template
 * Dynamic WordPress post template matching the original pixel-perfect blog layout.
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

get_header();

while (have_posts()) : the_post();
    $post_id    = get_the_ID();
    $categories = get_the_category();
    $category_name = !empty($categories) ? esc_html($categories[0]->name) : 'Tech Insight';
    $category_link = !empty($categories) ? esc_url(get_category_link($categories[0]->term_id)) : esc_url(home_url('/blogs/'));
    
    $thumb_url = function_exists('technoamaze_get_blog_thumbnail') 
        ? technoamaze_get_blog_thumbnail($post_id, 'full') 
        : (has_post_thumbnail() ? get_the_post_thumbnail_url($post_id, 'full') : 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&h=600&fit=crop&q=85');
    
    $reading_time = function_exists('technoamaze_reading_time') ? technoamaze_reading_time($post_id) : '5 min read';
    $post_url     = urlencode(get_permalink());
    $post_title   = urlencode(get_the_title());
?>

  <!-- BLOG HERO -->
  <div class="blog-hero">
    <img class="blog-hero-img" src="<?php echo esc_url($thumb_url); ?>" alt="<?php the_title_attribute(); ?>">
    <div class="blog-hero-overlay">
      <div class="blog-hero-content">
        <a href="<?php echo $category_link; ?>" class="blog-category-badge">
          <i class="fa-solid fa-layer-group"></i> <?php echo $category_name; ?>
        </a>
        <h1 class="blog-hero-title"><?php the_title(); ?></h1>
        <div class="blog-hero-meta">
          <span><i class="fa-solid fa-user"></i> <?php the_author(); ?></span>
          <span><i class="fa-solid fa-calendar"></i> <?php echo get_the_date('F j, Y'); ?></span>
          <span><i class="fa-solid fa-clock"></i> <?php echo esc_html($reading_time); ?></span>
        </div>
      </div>
    </div>
  </div>

  <!-- BLOG LAYOUT -->
  <div class="blog-layout">
    <article class="blog-article">
      <a href="<?php echo esc_url(home_url('/blogs/')); ?>" class="blog-back-btn">
        <i class="fa-solid fa-arrow-left"></i> Back to all Insights
      </a>

      <!-- Article Content -->
      <div class="blog-content" style="line-height:1.85;font-size:1.05rem;">
        <?php the_content(); ?>
      </div>

      <!-- Post Tags -->
      <?php if (has_tag()) : ?>
        <div class="blog-tags">
          <span style="font-weight:600;margin-right:6px;align-self:center;">Tags:</span>
          <?php
          $tags = get_the_tags();
          if ($tags) {
              foreach ($tags as $tag) {
                  echo '<a href="' . esc_url(get_tag_link($tag->term_id)) . '" class="blog-tag">#' . esc_html($tag->name) . '</a>';
              }
          }
          ?>
        </div>
      <?php endif; ?>

      <!-- Social Sharing -->
      <div class="blog-share">
        <span class="blog-share-label">Share this article:</span>
        <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $post_url; ?>" target="_blank" rel="noopener" class="blog-share-btn fb" aria-label="Share on Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://twitter.com/intent/tweet?text=<?php echo $post_title; ?>&url=<?php echo $post_url; ?>" target="_blank" rel="noopener" class="blog-share-btn tw" aria-label="Share on X / Twitter"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo $post_url; ?>" target="_blank" rel="noopener" class="blog-share-btn ln" aria-label="Share on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="https://api.whatsapp.com/send?text=<?php echo $post_title . '%20' . $post_url; ?>" target="_blank" rel="noopener" class="blog-share-btn wa" aria-label="Share on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
      </div>
    </article>

    <!-- SIDEBAR -->
    <aside>
      <!-- Author Card -->
      <div class="blog-sidebar-card blog-author-card">
        <img class="blog-author-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="<?php the_author(); ?>">
        <h3 class="blog-author-name"><?php the_author(); ?></h3>
        <p class="blog-author-role">Technology Editorial Team</p>
        <p class="blog-author-bio">Sharing insights, architectural patterns, and practical guides on enterprise software development, cloud infrastructure, and AI engineering.</p>
      </div>

      <!-- Recent / Related Articles -->
      <div class="blog-sidebar-card">
        <h3 class="blog-sidebar-title">Recent Insights</h3>
        <?php
        $recent_posts = new WP_Query(array(
            'post_type'      => 'post',
            'post_status'    => 'publish',
            'posts_per_page' => 4,
            'post__not_in'   => array($post_id)
        ));

        if ($recent_posts->have_posts()) :
            while ($recent_posts->have_posts()) : $recent_posts->the_post();
                $rec_thumb = has_post_thumbnail() 
                    ? get_the_post_thumbnail_url(get_the_ID(), 'thumbnail') 
                    : 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop';
        ?>
          <a href="<?php the_permalink(); ?>" class="blog-related-item">
            <img class="blog-related-img" src="<?php echo esc_url($rec_thumb); ?>" alt="<?php the_title_attribute(); ?>">
            <div class="blog-related-info">
              <h4><?php the_title(); ?></h4>
              <span><i class="fa-regular fa-calendar"></i> <?php echo get_the_date('M j, Y'); ?></span>
            </div>
          </a>
        <?php
            endwhile;
            wp_reset_postdata();
        else :
            echo '<p style="color:var(--ta-muted);font-size:0.9rem;">No other articles yet.</p>';
        endif;
        ?>
      </div>

      <!-- Contact CTA -->
      <div class="blog-sidebar-card" style="background:linear-gradient(135deg,var(--ta-ink) 0%,#202236 100%);color:#fff;text-align:center;">
        <h4 style="font-family:var(--ta-font-head);font-size:1.2rem;margin-bottom:10px;color:#fff;">Build Next-Gen Software</h4>
        <p style="font-size:0.88rem;color:rgba(255,255,255,0.78);line-height:1.6;margin-bottom:18px;">Partner with Techno Amaze to bring your digital vision to life with custom engineering and cloud scalability.</p>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="ta-btn-cta" style="display:inline-block;padding:10px 22px;font-size:0.9rem;">Get Solution &rarr;</a>
      </div>
    </aside>
  </div>

<?php
endwhile;

get_footer();
