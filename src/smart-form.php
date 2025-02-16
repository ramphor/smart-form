<?php
/**
 * Plugin Name: Smart Form
 * Description: A plugin to manage contact forms with ReactJS.
 * Version: 1.0
 * Author: Your Name
 */

defined('ABSPATH') or die('No script kiddies please!');

function sf_enqueue_scripts() {
    wp_enqueue_script('sf-react-app', plugins_url('/build/index.js', __FILE__), array('wp-element'), '1.0', true);
    wp_localize_script('sf-react-app', 'sf_ajax_object', array('ajax_url' => admin_url('admin-ajax.php')));
}

add_action('wp_enqueue_scripts', 'sf_enqueue_scripts');

function sf_handle_form_submission() {
    // Xử lý dữ liệu từ AJAX
    // Thêm mã bảo mật và kiểm tra spam ở đây

    wp_send_json_success('Form submitted successfully!');
}

add_action('wp_ajax_sf_submit_form', 'sf_handle_form_submission');
add_action('wp_ajax_nopriv_sf_submit_form', 'sf_handle_form_submission');