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

<div class="my-social">
  <div><a href="viber://chat?number=%2B375293133003"><div class="my-vib"></div></a></div>
  <!--<div><a href="https://api.whatsapp.com/send?phone=375291656449"><div class="my-wha"></div></a></div>
   <div><a href="https://telegram.me/naletko"><div class="my-tel"></div></a></div> -->
  <div><a href="https://vk.com/write-37299211"><div class="my-vk"></div></a></div>
  <div class="hidden-sm hidden-md hidden-lg"><a href="tel:+375293133003" onclick=”ga(‘send’, ‘event’, ‘cell’, ‘phone’><div class="my-phone"></div></a></div>  
  <!-- <div><a href="https://www.messenger.com/t/naletko.by"><div class="my-mes"></div></a></div>
  <div><a href="#"><div class="my-mail"></div></a></div>
  -->
</div>
<div class="my-chat">
  <div class="chat-rel">
  <div class="chat-circle">
  </div>
  <div class="chat-pulse">
  </div>
  <div class="my-chat-button">
    <div class="chat-icon">
    </div>
    <div class="chat-icon-text">
    </div>  
    <a href="#" id="chat"></a>
  </div>
  </div>
</div>
