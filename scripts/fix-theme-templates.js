const fs = require('fs');
const path = require('path');

const themeDir = path.resolve(__dirname, '..', 'themes', 'technoamaze-theme');
const files = fs.readdirSync(themeDir).filter(f => f.endsWith('.php'));

files.forEach(f => {
  const filePath = path.join(themeDir, f);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix local images
  content = content.replace(/src="(?:\.\.\/)?images\/([^"]+)"/g, 'src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/$1"');
  content = content.replace(/src='(?:\.\.\/)?images\/([^']+)'/g, 'src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/$1"');

  // If front-page.php, inject dynamic WP_Query for ta-blog
  if (f === 'front-page.php') {
    const blogGridRegex = /<div class="ta-blog-grid" data-reveal-group>([\s\S]*?)<\/div>\s*<div class="ta-partners">/;
    const dynamicBlogGrid = `<div class="ta-blog-grid" data-reveal-group>
        <?php
        $home_blogs = new WP_Query(array(
            'post_type'      => 'post',
            'post_status'    => 'publish',
            'posts_per_page' => 3
        ));
        if ($home_blogs->have_posts()) :
            while ($home_blogs->have_posts()) : $home_blogs->the_post();
                $b_thumb = has_post_thumbnail() 
                    ? get_the_post_thumbnail_url(get_the_ID(), 'medium_large') 
                    : 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&q=80';
        ?>
          <article class="ta-blog-card">
            <div class="ta-blog-card-img">
              <a href="<?php the_permalink(); ?>">
                <img src="<?php echo esc_url($b_thumb); ?>" alt="<?php the_title_attribute(); ?>" loading="lazy">
              </a>
              <div class="ta-blog-date">
                <strong><?php echo get_the_date('d'); ?></strong>
                <span><?php echo get_the_date('M Y'); ?></span>
              </div>
            </div>
            <div class="ta-blog-card-body">
              <div class="ta-blog-meta">
                <span><svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" /></svg> <?php the_author(); ?></span>
                <span><svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg> <?php echo get_comments_number(); ?> Comments</span>
              </div>
              <h3 class="ta-blog-card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
              <a href="<?php the_permalink(); ?>" class="ta-blog-readmore">Read More<span class="ta-blog-rm-line"></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
            </div>
          </article>
        <?php
            endwhile;
            wp_reset_postdata();
        endif;
        ?>
      </div>
      <div style="text-align:center;margin:32px 0 20px;">
        <a href="<?php echo esc_url(home_url('/blogs/')); ?>" class="ta-btn-cta" style="display:inline-block;padding:12px 28px;">View All Insights &rarr;</a>
      </div>
      <div class="ta-partners">`;

    if (blogGridRegex.test(content)) {
      content = content.replace(blogGridRegex, dynamicBlogGrid);
      console.log('front-page.php: Injected dynamic WP_Query for ta-blog');
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated images & links in: ${f}`);
});

console.log('All theme PHP templates updated successfully.');
