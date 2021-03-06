function hex(x) {
    var hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}
function rgb2hex(color) {
    var rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (rgb) {
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    } else {
        return color;
    }
}

jQuery(document).ready(function ($) {
    $('#ibs-event-limit').on('change', '', {}, function (event) {
        var value = $(this).val().toLowerCase();
        switch (value) {
            case 'yes' :
                break;
            case 'no' :
                break;
            default :
                try {
                    value = parseInt(value);
                    if (isNaN(value)) {
                        value = 'no';
                    } else {
                        if (value > 20) {
                            value = 20;
                        }
                    }
                } catch (err) {
                    value = 'no';
                }
        }
        $(this).val(value);
    });
    $('.qtip-table').on('change', 'input', {}, function (event) {
        qtip_handler();
    });
    function qtip_handler() {
        var b = $("input[name='ibs_calendar_options[qtip][style]']:checked").val();
        var c = $('#qtip-rounded').is(':checked') ? 'qtip-rounded' : '';
        var d = $('#qtip-shadow').is(':checked') ? 'qtip-shadow' : '';
        var styles = $.trim(b + ' ' + c + ' ' + d.replace('  ', ' '));
        $('#test-qtip').val(styles);
        $('#test-qtip').qtip({
            content: {'text': '<p> Current qtip classes test</p><p>' + styles + '</p>'},
            position: {
                my: 'bottom center',
                at: 'top center'
            },
            show: {ready: true
            },
            style: {
                classes: styles
            }
        });
    }
    ;
    qtip_handler();

});

jQuery(document).ready(function ($) {
    $(document).find('body')
            .append(
                    '<div>'
                    + '<div id="dropdown-hiddendays" class="dropdown dropdown-tip">'
                    + '<ul class="dropdown-menu dropdown-list">'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><label><input class="header-button-item" value="0" type="checkbox" /> Sunday</label></li>'
                    + '<li><label><input class="header-button-item" value="1" type="checkbox" /> Monday</label></li>'
                    + '<li><label><input class="header-button-item" value="2" type="checkbox" /> Tuseday</label></li>'
                    + '<li><label><input class="header-button-item" value="3" type="checkbox" /> Wednesday</label></li>'
                    + '<li><label><input class="header-button-item" value="4" type="checkbox" /> Thursday</label></li>'
                    + '<li><label><input class="header-button-item" value="5" type="checkbox" /> Friday</label></li>'
                    + '<li><label><input class="header-button-item" value="6" type="checkbox" /> Saturday</label></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><a class="dropdown-update" rel="#dropdown-hiddendays" href="#">Update</a></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '</ul>'
                    + '</div>'


                    + '<div id="dropdown-header-left" class="dropdown dropdown-tip">'
                    + '<ul class="dropdown-menu dropdown-list">'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><label><input class="header-button-item" value="prevYear" type="checkbox" /> Prev Year</label></li>'
                    + '<li><label><input class="header-button-item" value="prev" type="checkbox" /> Prev</label></li>'
                    + '<li><label><input class="header-button-item" value="next" type="checkbox" /> Next</label></li>'
                    + '<li><label><input class="header-button-item" value="nextYear" type="checkbox" /> Next Year</label></li>'
                    + '<li><label><input class="header-button-item" value="today" type="checkbox" /> Today</label></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><label><input class="header-button-item" value="month" type="checkbox" /> Month</label></li>'
                    + '<li><label><input class="header-button-item" value="basicWeek" type="checkbox" /> Week(basic)</label></li>'
                    + '<li><label><input class="header-button-item" value="basicDay" type="checkbox" /> Day(basic)</label></li>'
                    + '<li><label><input class="header-button-item" value="agendaWeek" type="checkbox" /> Week(agenda)</label></li>'
                    + '<li><label><input class="header-button-item" value="agendaDay" type="checkbox" /> Day(agenda)</label></li>'
                    + '<li><label><input class="header-button-item" value="title" type="checkbox" /> Title</label></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><a class="dropdown-update" rel="#dropdown-header-center" href="#">Update</a></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '</ul>'
                    + '</div>'

                    + '<div id="dropdown-header-right" class="dropdown dropdown-tip">'
                    + '<ul class="dropdown-menu dropdown-list">'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><label><input class="header-button-item" value="month" type="checkbox" /> Month</label></li>'
                    + '<li><label><input class="header-button-item" value="basicWeek" type="checkbox" /> Week(basic)</label></li>'
                    + '<li><label><input class="header-button-item" value="agendaWeek" type="checkbox" /> Week(agenda)</label></li>'
                    + '<li><label><input class="header-button-item" value="basicDay" type="checkbox" /> Day(basic)</label></li>'
                    + '<li><label><input class="header-button-item" value="agendaDay" type="checkbox" /> Day(agenda)</label></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><label><input class="header-button-item" value="title" type="checkbox" /> Title</label></li>'
                    + '<li><label><input class="header-button-item" value="prevYear" type="checkbox" /> Prev Year</label></li>'
                    + '<li><label><input class="header-button-item" value="prev" type="checkbox" /> Prev</label></li>'
                    + '<li><label><input class="header-button-item" value="next" type="checkbox" /> Next</label></li>'
                    + '<li><label><input class="header-button-item" value="nextYear" type="checkbox" /> Next Year</label></li>'
                    + '<li><label><input class="header-button-item" value="today" type="checkbox" /> Today</label></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><a class="dropdown-update" rel="#dropdown-header-center" href="#">Update</a></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '</ul>'
                    + '</div>'

                    + '<div id="dropdown-header-center" class="dropdown dropdown-tip">'
                    + '<ul class="dropdown-menu dropdown-list">'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><label><input class="header-button-item" value="title" type="checkbox" /> Title</label></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><label><input class="header-button-item" value="month" type="checkbox" /> Month</label></li>'
                    + '<li><label><input class="header-button-item" value="basicWeek" type="checkbox" /> Week(basic)</label></li>'
                    + '<li><label><input class="header-button-item" value="basicDay" type="checkbox" /> Day(basic)</label></li>'
                    + '<li><label><input class="header-button-item" value="agendaWeek" type="checkbox" /> Week(agenda)</label></li>'
                    + '<li><label><input class="header-button-item" value="agendaDay" type="checkbox" /> Day(agenda)</label></li>'
                    + '<li><label><input class="header-button-item" value="title" type="checkbox" /> Title</label></li>'
                    + '<li><label><input class="header-button-item" value="prevYear" type="checkbox" /> Prev Year</label></li>'
                    + '<li><label><input class="header-button-item" value="prev" type="checkbox" /> Prev</label></li>'
                    + '<li><label><input class="header-button-item" value="next" type="checkbox" /> Next</label></li>'
                    + '<li><label><input class="header-button-item" value="nextYear" type="checkbox" /> Next Year</label></li>'
                    + '<li><label><input class="header-button-item" value="today" type="checkbox" /> Today</label></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><a class="dropdown-update" rel="#dropdown-header-center" href="#">Update</a></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '</ul>'
                    + '</div>'

                    + '<div id="dropdown-event-limit" class="dropdown dropdown-tip">'
                    + '<ul class="dropdown-menu">'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><label><input class="event-limit-item" value="true" name="eventlimit" type="radio" /> Yes limit to cell capacity</label></li>'
                    + '<li><label><input class="event-limit-item" value="false" name="eventlimit" type="radio" /> No limit</li>'
                    + '<li><label><input class="event-limit-item" value="number" name="eventlimit" type="radio" /> <input id="event-limit-number" min="1" max="20" inc="1" value="" type="number" /> Event limit<label></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><a class="dropdown-update"  rel="#dropdown-event-limit" href="#"> Update</a></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '</ul>'
                    + '</div>'

                    + '<div id="dropdown-height" class="dropdown dropdown-tip">'
                    + '<ul class="dropdown-menu">'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><label><input class="option-height-item" name="height" value="null" type="radio" /> Unset (default)</label></li>'
                    + '<li><label><input class="option-height-item" name="height" value="auto" type="radio" />Auto</li>'
                    + '<li><label><input class="option-height-item" name="height" value="number" type="radio" /> <input id="option-height" min="100" inc="50" value="" type="number" /> Height in pixels<label></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><a class="dropdown-update"  rel="#dropdown-height" href="#"> Update</a></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '</ul>'
                    + '</div>'

                    + '<div id="dropdown-dns" class="dropdown dropdown-tip">'
                    + '<ul class="dropdown-menu">'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><label>Sun </label> <input class="dns-item" name="dayNamesShort" value="Sun" type="text" size="10" /></li>'
                    + '<li><label>Mon </label> <input class="dns-item" name="dayNamesShort" value="Mon" type="text" size="10" /></li>'
                    + '<li><label>Tue </label> <input class="dns-item" name="dayNamesShort" value="Tue" type="text" size="10" /></li>'
                    + '<li><label>Wed </label> <input class="dns-item" name="dayNamesShort" value="Wed" type="text" size="10" /></li>'
                    + '<li><label>Thu </label> <input class="dns-item" name="dayNamesShort" value="Thu" type="text" size="10" /></li>'
                    + '<li><label>Fri </label> <input class="dns-item" name="dayNamesShort" value="Fri" type="text" size="10" /></li>'
                    + '<li><label>Sat </label> <input class="dns-item" name="dayNamesShort" value="Sat" type="text" size="10" /></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><a class="dropdown-update"  rel="#dropdown-day-names-short" href="#"> Update</a></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '</ul>'
                    + '</div>'

                    + '<div id="dropdown-feed-click" class="dropdown dropdown-tip">'
                    + '<ul class="dropdown-menu">'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><label><input class="feed-click-item" value="same" name="feedclick" type="radio" /> Same window</label></li>'
                    + '<li><label><input class="feed-click-item" value="new" name="feedclick" type="radio" /> New window</li>'
                    + '<li><label><input class="feed-click-item" value="url" name="feedclick" type="radio" /> <input id="feed-click-url" min="1" max="100" value="" type="text" /> URL<label></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '<li><a class="dropdown-update"  rel="#dropdown-feed-click" href="#"> Update</a></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '</ul>'
                    + '</div>'

                    + '<div id="dropdown-timeFormat" class="dropdown dropdown-tip">'
                    + '<div class="dropdown-panel">'
                    + '<div><label style="width:75px; display:inline-block"><b>24 hour</b></label><span style="width:auto;">H = 00...23,&nbsp;  HH = 00..23</span></div>'
                    + '<div><label style="width:75px; display:inline-block"><b>12 hour</b></label><span style="width:auto;">h = 1...12,&nbsp; hh = 01...12</span> </div>'
                    + '<div><label style="width:75px; display:inline-block"><b>Minute</b></label><span style="width:auto;">m = 1..59,&nbsp; mm = 01..59</span> </div>'
                    + '<div><label style="width:75px; display:inline-block"><b>Second</b></label><span style="width:auto;">s = 1..59,&nbsp; ss = 01..59</span></div>'
                    + '<div><label style="width:75px; display:inline-block"><b>Am/Pm</b></label><span style="width:auto;">A = AM PM,&nbsp; a =  am pm</span></div>'
                    + '<li><a class="dropdown-update"  rel="#dropdown-timeFormat" href="#"> close</a></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '</div>'
                    + '</div>'

                    + '<div id="dropdown-titleFormat" class="dropdown dropdown-tip">'
                    + '<div class="dropdown-panel">'
                    + '<div><label style="width:75px; display:inline-block"><b>Month</b></label><span style="width:auto;">M MM : 1..12;&nbsp; MMM : Jan;&nbsp; MMMM :January</span></div>'
                    + '<div><label style="width:75px; display:inline-block"><b>Day</b></label><span style="width:auto;">D DD : 1 01;&nbsp; Do : 1st;&nbsp; DDD DDDD : 1...365</span> </div>'
                    + '<div><label style="width:75px; display:inline-block"><b>Year</b></label><span style="width:auto;">YY : 15;&nbsp; YYYY : 2015</span> </div>'
                    + '<li><a class="dropdown-update"  rel="#dropdown-titleFormat" href="#"> close</a></li>'
                    + '<li class="dropdown-divider"></li>'
                    + '</div>'
                    + '</div>'
                    + '</div>');

    $('#dropdown-header-left').find('ul').sortable();
    $('#dropdown-header-center').find('ul').sortable();
    $('#dropdown-header-right').find('ul').sortable();

    $('.header-button-item').on('click', '', {}, function (event) {
        event.stopImmediatePropagation();
    });
    $('.dropdown-update').on('click', '', {}, function (event) {

    });
    //event limit

    $('#dropdown-event-limit').on('show', '', {}, function (event) {
        $('#dropdown-event-limit').find('input').prop('checked', false);
        $('#event-limit-number').prop('disabled', true);
        $('#event-limit-number').val('');
    });
    $('#dropdown-event-limit').on('hide', '', {}, function (event, dropdownData) {
        $('#dropdown-event-limit').find('input').each(function (index, item) {
            var target = $('#dropdown-event-limit').hasClass('ibs-options') ? $('#ibs-event-limit') : $('#ibs-sc-limit');
            if ($(item).attr('type') === 'radio' && $(item).is(':checked')) {
                switch ($(this).val()) {
                    case 'true' :
                        target.val('yes');
                        break;
                    case 'false' :
                        target.val('no');

                        break;
                    case 'number' :
                        target.val($('#event-limit-number').val());
                }
            }
        });
        $('#event-limit-number').prop('disabled', true);
        $('#event-limit-number').val('');
        if ($('#dropdown-event-limit').hasClass('ibs-shortcode')) {
            $('#shortcode-options').trigger('change');
        }
    });

    $('.event-limit-item').on('click', '', {}, function (event) {
        event.stopImmediatePropagation();
        switch ($(this).val()) {
            case 'true' :
            case 'false' :
                $('#event-limit-number').prop('disabled', true);
                break;
            case 'number' :
                $('#event-limit-number').prop('disabled', false);
                $('#event-limit-number').focus();

        }
    });

    //header left

    $('#dropdown-header-left').on('hide', '', {}, function (event) {
        var target = $('#dropdown-event-limit').hasClass('ibs-options') ? $('#ibs-header-left') : $('#ibs-sc-left');
        var result = [];
        $('#dropdown-header-left').find('input').each(function (index, item) {
            if ($(item).is(':checked')) {
                result.push($(item).val());
            }
        });
        if (result.length) {
            target.val(result.toString());
            if ($('#dropdown-event-limit').hasClass('ibs-shortcode')) {
                $('#shortcode-options').trigger('change');
            }
        }
    });

    // center 

    $('#dropdown-header-center').on('hide', '', {}, function (event) {
        var target = $('#dropdown-event-limit').hasClass('ibs-options') ? $('#ibs-header-center') : $('#ibs-sc-center');
        var result = [];
        $('#dropdown-header-center').find('input').each(function (index, item) {
            if ($(item).is(':checked')) {
                result.push($(item).val());
            }
        });
        if (result.length) {
            target.val(result.toString());
            if ($('#dropdown-event-limit').hasClass('ibs-shortcode')) {
                $('#shortcode-options').trigger('change');
            }
        }
    });

    //right

    $('#dropdown-header-right').on('hide', '', {}, function (event) {
        var target = $('#dropdown-event-limit').hasClass('ibs-options') ? $('#ibs-header-right') : $('#ibs-sc-right');
        $('#dropdown-event-limit').hasClass('ibs-shortcode')
        var result = [];
        $('#dropdown-header-right').find('input').each(function (index, item) {
            if ($(item).is(':checked')) {
                result.push($(item).val());
            }
        });
        if (result.length) {
            target.val(result.toString());
            if ($('#dropdown-event-limit').hasClass('ibs-shortcode')) {
                $('#shortcode-options').trigger('change');
            }
        }
    });
    $('#dropdown-hiddendays').on('hide', '', {}, function (event) {
        var result = [];
        $('#dropdown-hiddendays').find('input').each(function (index, item) {
            if ($(item).is(':checked')) {
                result.push($(item).val());
            }
        });
        if (result.length) {
            if ($('#dropdown-event-limit').hasClass('ibs-shortcode')) {
                $('#ibs-sc-hiddendays').val(result.toString());
                $('#shortcode-options').trigger('change');
            } else {
                $('#ibs-hiddendays').val(result.toString());
            }
        }
    });
    $('#dropdown-height').on('show', '', {}, function (event) {
        $('#dropdown-height').find('input').prop('checked', false);
        $('#option-height').prop('disabled', true);
        $('#option-height').val('');
    });
    $('#dropdown-height').on('hide', '', {}, function (event, dropdownData) {
        $('#dropdown-height').find('input').each(function (index, item) {
            var target = $('#dropdown-event-limit').hasClass('ibs-options') ? $('#ibs-height') : $('#ibs-sc-height');
            if ($(item).attr('type') === 'radio' && $(item).is(':checked')) {
                switch ($(this).val()) {
                    case 'null' :
                        target.val('null');
                        break;
                    case 'auto' :
                        target.val('auto');

                        break;
                    case 'number' :
                        target.val($('#option-height').val());
                }
            }
        });
        $('.option-height-item').on('click', '', {}, function (event) {
            event.stopImmediatePropagation();
            switch ($(this).val()) {
                case 'null' :
                case 'auto' :
                    $('#option-height').prop('disabled', true);
                    break;
                case 'number' :
                    $('#option-height').prop('disabled', false);
                    $('#option-height').focus();

            }
        });
    });
    $('.dns-item').on('click', '', {}, function (event) {
        event.stopImmediatePropagation();
        $(this).focus();
    });
    $('#dropdown-dns').on('hide', '', {}, function (event) {
        var result = [];
        $('#dropdown-dns').find('input').each(function (index, item) {
            result.push($(item).val());
        });
        if (result.length) {
            if ($('#dropdown-event-limit').hasClass('ibs-shortcode')) {
                $('#ibs-sc-dns').val(result.toString());
                $('#shortcode-options').trigger('change');
            } else {
                $('#ibs-day-names-short').val(result.toString());
            }
        }
    });
    $('#event-limit-number').prop('disabled', true);
    $('#event-limit-number').val('');
    if ($('#dropdown-event-limit').hasClass('ibs-shortcode')) {
        $('#shortcode-options').trigger('change');
    }

    $('.feed-color-box').click(function () {
        $('.feed-color-box').removeClass('feed-color-box-selected');
        $(this).addClass('feed-color-box-selected');
        var fid = $(this).attr('rel');
        var rgb = $(this).css('background-color');
        $('#ibs-feed-name-' + fid).css({'background-color': rgb, color: $('#colorpicker-fg-' + fid).val()});
        $('#colorpicker-bg-' + fid).val(rgb2hex(rgb));

    });
    var currentLangCode = $('#ibs-lang').attr('ref');
    $.each($.fullCalendar.langs, function (langCode) {
        $('#ibs-lang').append(
                $('<option/>')
                .attr('value', langCode)
                .prop('selected', langCode == currentLangCode)
                .text(langCode)
                );
    });


});