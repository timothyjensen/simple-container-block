<?php
/**
 * Initializes the plugin files.
 *
 * @package     TimJensen\SimpleContainerBlock
 * @author      Tim Jensen <tim@timjensen.us>
 * @license     GNU General Public License 2.0+
 * @since       1.0.0
 */

namespace TimJensen\SimpleContainerBlock;

add_action( 'init', __NAMESPACE__ . '\\register_block' );
/**
 * Registers the block.
 */
function register_block() {
	// Only run if Gutenberg is available.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	$block_js  = 'block/build/script.js';
	$block_css = 'block/build/style.css';

	wp_register_script(
		'simple-container-block-js',
		plugins_url( $block_js, SIMPLE_CONTAINER_BLOCK_PLUGIN_FILE ),
		[
			'wp-i18n',
			'wp-blocks',
			'wp-element',
			'wp-components',
			'wp-editor',
		],
		filemtime( dirname( SIMPLE_CONTAINER_BLOCK_PLUGIN_FILE ) . '/' . $block_js )
	);

	register_block_type(
		'timothyjensen/simple-container-block', [
			'editor_script'   => 'simple-container-block-js',
			'attributes'      => [
				'anchor'    => [
					'type'    => 'string',
					'default' => '',
				],
				'className' => [
					'type'    => 'string',
					'default' => '',
				],
			],
		]
	);
}
