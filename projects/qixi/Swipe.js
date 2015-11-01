/////////
//ҳ�滬�� //
/////////


/**
 * [Swipe description]
 * @param {[type]} container [ҳ�������ڵ�]
 * @param {[type]} options   [����]
 */
function Swipe(container) {
    // ��ȡ��һ���ӽڵ�
    var element = container.find(":first");
    var swipe = {};

    // liҳ������
    var slides = element.find(">");

    // ��ȡ�����ߴ�
    var width = container.width();
    var height = container.height();

    // ����liҳ���ܿ��
    element.css({
        width: (slides.length * width) + 'px',
        height: height + 'px'
    });

    // ����ÿһ��ҳ��li�Ŀ��
    $.each(slides, function(index) {
        var slide = slides.eq(index); // ��ȡ��ÿһ��liԪ��    
        slide.css({
            width: width + 'px',
            height: height + 'px'
        });
    });

    // ���������ƶ�
    swipe.scrollTo = function(x, speed) {
        // ִ�ж����ƶ�
        element.css({
            'transition-timing-function' : 'linear',
            'transition-duration'        : speed + 'ms',
            'transform'                  : 'translate3d(-' + x + 'px,0px,0px)'
        });
        return this;
    };

    return swipe;
}