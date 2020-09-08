let TabBlock = {
    s: {
        animLen: 200
    },

    init: function() {
        TabBlock.bindUIActions();
        TabBlock.hideInactive();
    },

    bindUIActions: function() {
        $('.tabBlock-tabs').on('click', '.tabBlock-tab', function(){
            TabBlock.switchTab($(this));
        });
    },

    hideInactive: function() {
        let $tabBlocks = $('.tabBlock');

        $tabBlocks.each(function(i) {
            let
                $tabBlock = $($tabBlocks[i]),
                $panes = $tabBlock.find('.tabBlock-pane'),
                $activeTab = $tabBlock.find('.tabBlock-tab.is-active');

            $panes.hide();
            $($panes[$activeTab.index()]).show();
        });
    },

    switchTab: function($tab) {
        let $context = $tab.closest('.tabBlock');

        if (!$tab.hasClass('is-active')) {
            $tab.siblings().removeClass('is-active');
            $tab.addClass('is-active');

            TabBlock.showPane($tab.index(), $context);
        }
    },

    showPane: function(i, $context) {
        let $panes = $context.find('.tabBlock-pane');

        $panes.slideUp(TabBlock.s.animLen);
        $($panes[i]).slideDown(TabBlock.s.animLen);
    }
};

$(function() {
    TabBlock.init();
});