( function() {
    var registerBlockType = wp.blocks.registerBlockType;

    registerBlockType( 'gb/basic-01', {
        title: __( 'GB Basic', 'GB' ),
        icon: 'generic',
        category: 'common',
        
        edit: function( props ) {
                        return wp.element.createElement(
                'p',
                { className: props.className },
                'Hello there, I am block.'
            );
        },

    } );
})();