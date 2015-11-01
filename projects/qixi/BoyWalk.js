/**
 * С����·
 * @param {[type]} container [description]
 */
function BoyWalk() {

    var container = $("#content");
    // ҳ���������
    var visualWidth = container.width();
    var visualHeight = container.height();

    // ��ȡ����
    var getValue = function(className) {
        var $elem = $('' + className + '');
        // ��·��·������
        return {
            height: $elem.height(),
            top: $elem.position().top
        };
    };
    // ·��Y��
    var pathY = function() {
        var data = getValue('.a_background_middle');
        return data.top + data.height / 2;
    }();

    var $boy = $("#boy");
    var boyWidth = $boy.width();
    var boyHeight = $boy.height();

    // �����¸߶�    
    $boy.css({
        top: pathY - boyHeight + 25
    })

    // ��ͣ��·
    function pauseWalk() {
        $boy.addClass('pauseWalk');
    }

    // �ָ���·
    function restoreWalk() {
        $boy.removeClass('pauseWalk');
    }

    // css3�Ķ����仯
    function slowWalk() {
        $boy.addClass('slowWalk');
    }

    // ��transition���˶�
    function stratRun(options, runTime) {
        var dfdPlay = $.Deferred();
        // �ָ���·
        restoreWalk();
        // �˶�������
        $boy.transition(
            options,
            runTime,
            'linear',
            function() {
                dfdPlay.resolve(); // �������
            });
        return dfdPlay;
    }

    // ��ʼ��·
    function walkRun(time, dist, disY) {
        time = time || 3000;
        // �Ŷ���
        slowWalk();
        // ��ʼ��·
        var d1 = stratRun({
            'left': dist + 'px',
            'top': disY ? disY : undefined
        }, time);
        return d1;
    }

    // �����ƶ�����
    function calculateDist(direction, proportion) {
        return (direction == "x" ?
                visualWidth : visualHeight) * proportion;
    }

    return {
        // ��ʼ��·
        walkTo: function(time, proportionX, proportionY) {
            var distX = calculateDist('x', proportionX)
            var distY = calculateDist('y', proportionY)
            return walkRun(time, distX, distY);
        },
        // ֹͣ��·
        stopWalk: function() {
            pauseWalk();
        },
        setColoer:function(value){
            $boy.css('background-color',value)
        }
    }
}