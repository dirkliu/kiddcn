// ���������¼�
var animationEnd = (function() {
    var explorer = navigator.userAgent;
    if (~explorer.indexOf('WebKit')) {
        return 'webkitAnimationEnd';
    }
    return 'animationend';
})();


///////////
//�ƶ��� //
///////////
var lamp = {
    elem: $('.b_background'),
    bright: function() {
        this.elem.addClass('lamp-bright');
    },
    dark: function() {
        this.elem.removeClass('lamp-bright');
    }
};

var container = $("#content");
var swipe = Swipe(container);
visualWidth = container.width();
visualHeight = container.height();

// ҳ�������ָ����λ��
function scrollTo(time, proportionX) {
    var distX = visualWidth * proportionX;
    swipe.scrollTo(distX, time);
}

// ��ȡ����
var getValue = function(className) {
    var $elem = $('' + className + '');
    //��·��·������
    return {
        height: $elem.height(),
        top: $elem.position().top
    };
};

// �ŵ�Y��
var bridgeY = function() {
    var data = getValue('.c_background_middle');
    return data.top;
}();

////////
//СŮ�� //
////////
var girl = {
    elem: $('.girl'),
    getHeight: function() {
        return this.elem.height();
    },
    setOffset: function() {
        this.elem.css({
            left: visualWidth / 2,
            top: bridgeY - this.getHeight()
        });
    }
};

// ����СŮ��λ��
girl.setOffset();


// ������ʱ����ҳ��
swipe.scrollTo(visualWidth * 2, 0);


function doorAction(left, right, time) {
    var $door = $('.door');
    var doorLeft = $('.door-left');
    var doorRight = $('.door-right');
    var defer = $.Deferred();
    var count = 2;
    // �ȴ��������
    var complete = function() {
        if (count == 1) {
            defer.resolve();
            return;
        }
        count--;
    }
    doorLeft.transition({
        'left': left
    }, time, complete);
    doorRight.transition({
        'left': right
    }, time, complete);
    return defer;
}

// ����
function openDoor() {
    return doorAction('-50%', '100%', 2000);
}

// ����
function shutDoor() {
    return doorAction('0%', '50%', 2000);
}

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
    });

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

    // �߽��̵�
    function walkToShop(runTime) {
        var defer = $.Deferred();
        var doorObj = $('.door');
        // �ŵ�����
        var offsetDoor = doorObj.offset();
        var doorOffsetLeft = offsetDoor.left;
        var doorOffsetTop = offsetDoor.top;
        // С����ǰ������
        var posBoy = $boy.position();
        var boyPoxLeft = posBoy.left;
        var boyPoxTop = posBoy.top;

        // �м�λ��
        var boyMiddle = $boy.width() / 2;
        var doorMiddle = doorObj.width() / 2;
        var doorTopMiddle = doorObj.height() / 2;


        // ��ǰ��Ҫ�ƶ�������
        instanceX = (doorOffsetLeft + doorMiddle) - (boyPoxLeft + boyMiddle);

        // Y������
        // top = ����ײ���top - ���м���topֵ
        instanceY = boyPoxTop + boyHeight - doorOffsetTop + (doorTopMiddle);

        // ��ʼ��·
        var walkPlay = stratRun({
            transform: 'translateX(' + instanceX + 'px),translateY(-' + instanceY + 'px),scale(0.5,0.5)',
            opacity: 0.1
        }, 2000);
        // ��·���
        walkPlay.done(function() {
            $boy.css({
                opacity: 0
            });
            defer.resolve();
        });
        return defer;
    }

    // �߳���
    function walkOutShop(runTime) {
        var defer = $.Deferred();
        restoreWalk();
        // ��ʼ��·
        var walkPlay = stratRun({
            transform: 'translateX(' + instanceX + 'px),translateY(0),scale(1,1)',
            opacity: 1
        }, runTime);
        // ��·���
        walkPlay.done(function() {
            defer.resolve();
        });
        return defer;
    }


    // �����ƶ�����
    function calculateDist(direction, proportion) {
        return (direction == "x" ?
                visualWidth : visualHeight) * proportion;
    }

    return {
        // ��ʼ��·
        walkTo: function(time, proportionX, proportionY) {
            var distX = calculateDist('x', proportionX);
            var distY = calculateDist('y', proportionY);
            return walkRun(time, distX, distY);
        },
        // �߽��̵�
        toShop: function() {
            return walkToShop.apply(null, arguments);
        },
        // �߳��̵�
        outShop: function() {
            return walkOutShop.apply(null, arguments);
        },
        // ֹͣ��·
        stopWalk: function() {
            pauseWalk();
        },
        setColoer: function(value) {
            $boy.css('background-color', value)
        },
        // ��ȡ�к��Ŀ��
        getWidth: function() {
            return $boy.width();
        },
        // ��λ��ʼ״̬
        resetOriginal: function() {
            this.stopWalk();
            // �ָ�ͼƬ
            $boy.removeClass('slowWalk slowFlolerWalk').addClass('boyOriginal');
        },
        // ת����
        rotate: function(callback) {
            restoreWalk();
            $boy.addClass('boy-rotate');
            // ����ת�����
            if (callback) {
                $boy.on(animationEnd, function() {
                    callback();
                    $(this).off();
                });
            }
        },
        // ȡ��
        talkFlower: function() {
            $boy.addClass('slowFlolerWalk');
        }
    }
}