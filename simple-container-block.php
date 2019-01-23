<?php
/**
 * Simple Container Block
 *
 * @package     TimJensen\SimpleContainerBlock
 * @author      Tim Jensen <tim@timjensen.us>
 * @license     GPL-2.0-or-later
 *
 * @wordpress-plugin
 *
 * Plugin Name: Simple Container Block
 * Plugin URI:  https://github.com/timothyjensen/simple-container-block
 * Description: Provides a simple, lightweight container for other blocks.
 * Version:     1.1.0
 * Author:      Tim Jensen
 * Author URI:  https://www.timjensen.us
 * Text Domain: simple-container-block
 * License:     GPL-2.0-or-later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

namespace TimJensen\SimpleContainerBlock;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! defined( 'SIMPLE_CONTAINER_BLOCK_PLUGIN_FILE' ) ) {
	define( 'SIMPLE_CONTAINER_BLOCK_PLUGIN_FILE', __FILE__ );
}

require_once __DIR__ . '/init.php';
