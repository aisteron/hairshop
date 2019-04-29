<?php

/**
 * @file
 * Bootstrap 7-5 template for Display Suite.
 *
 * Available variables:
 *
 * Layout:
 * - $classes: String of classes that can be used to style this layout.
 * - $contextual_links: Renderable array of contextual links.
 * - $layout_wrapper: wrapper surrounding the layout.
 *
 */
?>


<<?php print $layout_wrapper; print $layout_attributes; ?> class="<?php print $classes; ?>">

<?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
<?php endif; ?>

<div class="row slide">
<<?php print $left_wrapper; ?> class="col-sm-7 sl-left <?php print $left_classes; ?>">
<?php print $left; ?>
</<?php print $left_wrapper; ?>>

<<?php print $right_wrapper; ?> class="col-sm-5 sl-right <?php print $right_classes; ?>">
		<!--<div class="navi-slide">
			<a class="slide-left slide-control" href="#views-bootstrap-carousel-1" data-slide="prev">< Назад</a>
			<a class="slide-right slide-control" href="#views-bootstrap-carousel-1" data-slide="next">Вперед ></a>
		</div> -->
<?php print $right; ?>
</<?php print $right_wrapper; ?>>

</div>
</<?php print $layout_wrapper ?>>


<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
