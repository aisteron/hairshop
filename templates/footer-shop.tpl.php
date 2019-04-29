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

<div class="row grey foot">
  <div class="container">
    <div class="col-sm-3 mar50" id="contacts">
      <?php print render($page['footer']); ?>
    </div>
    <div class="col-sm-3 mar50">
      <?php print render($page['footer_2']); ?>
      <?php if (!empty($page['navigation'])): ?>
            <?php print render($page['navigation']); ?>    
      <?php endif; ?>
    </div>
    <div class="col-sm-6 mar50">
      <div class="row">
      <div class="col-md-6 mar50">
        <p class="rtecenter fo-buttons"><a href="#" id="obr" class="fo-but btn">Обратный звонок</a></p>
        <p class="rtecenter fo-buttons"><a href="/form/quest" id="quest" class="fo-but btn">Задать вопрос</a></p>
      </div>
      <div class="col-md-6 mar50">
        <img src="/sites/all/themes/hairshop/images/bepaid.png" class="img-responsive">
      </div>
      </div>
      <?php print render($page['footer_3']); ?>
    </div>
  </div>
  <div class="copy container">
    <p class="rtecenter mar50"><small>Дизайн и разработка сайта - <a href="https://naletko.by">Творческая мастерская Александра Налетко</a></small></p>
  </div>
</div>
<div class="row dark-form" id="cb-body">
  <div class="col-sm-3 white form-col" id="cb-form">
    <div class="close hide-form">X</div>
    <div class="form-call">
      <?php print render($page['form_callback']); ?>
    </div>
  </div>
</div>

