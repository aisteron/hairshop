<?php
/**
 * @file
 * The primary PHP file for this theme.
 */
function hairshop_preprocess_page(&$variables, $hook) {
   //some other stuff
if (isset($variables['node'])) { 
    $variables['theme_hook_suggestions'][] = 'page__type__'. $variables['node']->type;
    $variables['theme_hook_suggestions'][] = "page__node__" . $variables['node']->nid;
  }
if(arg(0) == 'taxonomy' && arg(1) == 'term' && is_numeric(arg(2))) {
    $term = taxonomy_term_load(arg(2));
    if ($term->vid==5){ // 4 указывает на номер словаря, для которого мы определяем новый шаблон.     
      $variables['theme_hook_suggestions'][] = 'page__voc__catalog';
    }
  }

}

function hairshop_preprocess_node(&$vars) {
  if($vars['view_mode'] == 'teaser') {
    $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->type . '__teaser';   
    $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->nid . '__teaser';
  }
}

function hairshop_preprocess_commerce_cart_block(&$vars) {
  $order_wrapper = entity_metadata_wrapper('commerce_order', $vars['order']);
  $quantity = commerce_line_items_quantity($order_wrapper->commerce_line_items, commerce_product_line_item_types());
  $quantity_text = format_plural($quantity, '@count item', '@count items', array(), array('context' => 'product count on a Commerce order'));
  $total = $order_wrapper->commerce_order_total->value();
  $total_text = commerce_currency_format($total['amount'], $total['currency_code']);
 
  $vars['contents_view'] = t('@quantity', array('@quantity' => $quantity));
}

function hairshop_page_alter(&$page) {
  if (isset($page['content_left'])) {
    $GLOBALS['region_content_left'] = $page['content_left'];
  }
}