<?php

/**
 * @file
 * Default theme implementation to display a block.
 *
 * Available variables:
 * - $block->subject: Block title.
 * - $content: Block content.
 * - $block->module: Module that generated the block.
 * - $block->delta: An ID for the block, unique within each module.
 * - $block->region: The block region embedding the current block.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - block: The current template type, i.e., "theming hook".
 *   - block-[module]: The module generating the block. For example, the user
 *     module is responsible for handling the default user navigation block. In
 *     that case the class would be 'block-user'.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Helper variables:
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $block_zebra: Outputs 'odd' and 'even' dependent on each block region.
 * - $zebra: Same output as $block_zebra but independent of any block region.
 * - $block_id: Counter dependent on each block region.
 * - $id: Same output as $block_id but independent of any block region.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 * - $block_html_id: A valid HTML ID and guaranteed unique.
 *
 * @see bootstrap_preprocess_block()
 * @see template_preprocess()
 * @see template_preprocess_block()
 * @see bootstrap_process_block()
 * @see template_process()
 *
 * @ingroup templates
 */
?>

<div class="row top-shap">
  <div class="container">
    <div class="col-sm-6">
<?php if ($logo): ?>
        <a class="logo navbar-btn pull-left hidden-xs" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
          <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
        </a>
    <?php endif; ?>
    </div>
    <div class="col-sm-6 col-md-5">
      <div class="sh-contacts">
        <div class="col-xs-6 razd">
          <p><a href="/catalog" class="atop">Магазин волос</a></p>
          <p class="phone"><a href="tel:+375293663000">+375 (29) 366-30-00</a></p>
          <p class="adr">10:00–20:00, г. Минск</p>
          <p class="adr">ул. Немига, 3, 2 эт., №13</p>
          
        </div>
        <div class="col-xs-6 razd">
          <p><a href="/saloon" class="atop">Салон красоты</a></p>
          <p class="phone"><a href="tel:+375293133003">+375 (29) 313-30-03</a></p>
          <p class="adr">10:00–21:00, г. Минск</p>
          <p class="adr">пр-т Дзержинского, 9</p>
          
        </div>
      </div>
    </div>
  </div>
</div>

<header id="navbar" role="banner" class="navbar-static-top">
  <div class="<?php print $container_class; ?>">
    <div class="navbar-header">
      <?php if (!empty($site_name)): ?>
        <a class="name navbar-brand hidden-sm hidden-lg hidden-md mybrand" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><?php print $site_name; ?></a>
      <?php endif; ?>
      <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">Меню</button>
      <?php endif; ?>
    </div>

    <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
      <div class="navbar-collapse collapse" id="navbar-collapse">
        <nav role="navigation">
          <div class="row">
          <?php if (!empty($primary_nav)): ?>
            <?php print render($primary_nav); ?>
          <?php endif; ?>
          <?php if (!empty($secondary_nav)): ?>
            <?php print render($secondary_nav); ?>
          <?php endif; ?>
          <div class="so-link pull-right">
            <div class="so-but"><a href="https://vk.com/salonhairshopby"><div class="vk"></div></a></div>
            <div class="so-but"><a href="https://www.instagram.com/salon.hairshop.by/"><div class="insta"></div></a></div>
          </div>
          </div>    
          <?php if (!empty($page['navigation'])): ?>
            <div class="row navy hidden-sm hidden-md hidden-lg">
            <?php print render($page['navigation']); ?>
            </div>
          <?php endif; ?>
        </nav>
      </div>
    <?php endif; ?>
  </div>
</header>
<?php if (!empty($page['navigation'])): ?>
<div class="row hidden-xs grey">
  <div class="container navy-sm">    
    <?php print render($page['navigation']); ?>    
  </div>
</div>
<?php endif; ?>