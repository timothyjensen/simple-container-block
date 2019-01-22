/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import {
  InnerBlocks,
  InspectorAdvancedControls
} from '@wordpress/editor';

const SimpleContainer = ( props ) => {
  return (
    <Fragment>
      <div id={ props.attributes.anchor } className={ props.attributes.className }>
        <InnerBlocks/>
      </div>

      <InspectorAdvancedControls>
        <TextControl
          label={ __( 'CSS ID', "simple-container-block" ) }
          value={ props.attributes.anchor || '' }
          onChange={ ( value ) => {
            props.setAttributes( {
              anchor: value
            } );
          } }
        />
      </InspectorAdvancedControls>
    </Fragment>
  );
};

export default SimpleContainer;
