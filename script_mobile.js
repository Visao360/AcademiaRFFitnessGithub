(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"borderSize":0,"shadow":false,"scrollBarMargin":2,"class":"Player","width":"100%","borderRadius":0,"definitions": [{"playbackBarBackgroundColorDirection":"vertical","borderSize":0,"right":"0.25%","class":"ViewerArea","progressBorderSize":0,"surfaceReticleOpacity":0.6,"playbackBarProgressBorderRadius":0,"progressBarBorderRadius":0,"vrPointerSelectionTime":2000,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"paddingLeft":0,"subtitlesTop":0,"id":"MainViewer_mobile","progressRight":0,"subtitlesOpacity":1,"playbackBarHeadShadowOpacity":0.7,"progressBarBorderSize":0,"subtitlesTextShadowColor":"#000000","subtitlesBackgroundColor":"#000000","vrPointerSelectionColor":"#FF6600","toolTipTextShadowOpacity":0,"surfaceReticleSelectionOpacity":1,"subtitlesGap":0,"subtitlesShadow":false,"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontStyle":"normal","progressOpacity":1,"toolTipDisplayTime":600,"displayTooltipInTouchScreens":true,"toolTipHorizontalAlign":"center","playbackBarHeadShadowBlurRadius":1.5,"subtitlesVerticalAlign":"bottom","playbackBarLeft":0,"paddingRight":0,"progressBarBackgroundColorDirection":"vertical","subtitlesHorizontalAlign":"center","vrPointerColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarBackgroundOpacity":1,"progressBarBorderColor":"#0066FF","subtitlesFontWeight":"normal","progressBarBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"toolTipPaddingRight":5,"playbackBarHeadShadowColor":"#000000","toolTipFontFamily":"Georgia","toolTipTextShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"toolTipShadowColor":"#333333","progressBackgroundColorDirection":"vertical","subtitlesPaddingBottom":5,"progressBorderRadius":0,"subtitlesPaddingRight":5,"transitionDuration":500,"playbackBarHeadBackgroundColorRatios":[0,1],"translationTransitionDuration":1000,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"propagateClick":true,"subtitlesBorderColor":"#FFFFFF","firstTransitionDuration":0,"toolTipBorderColor":"#767676","toolTipFontWeight":"normal","playbackBarHeadShadowVerticalLength":0,"subtitlesPaddingLeft":5,"playbackBarBorderRadius":0,"minHeight":25,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"playbackBarProgressBorderColor":"#000000","minWidth":50,"subtitlesTextShadowOpacity":1,"subtitlesBorderSize":0,"toolTipShadowSpread":0,"subtitlesBottom":50,"toolTipBackgroundColor":"#000000","toolTipShadowOpacity":0,"toolTipOpacity":0.5,"toolTipBorderSize":1,"progressLeft":0,"borderRadius":0,"playbackBarHeadOpacity":1,"toolTipTextShadowBlurRadius":1,"toolTipPaddingTop":3,"subtitlesTextShadowHorizontalLength":1,"progressBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"paddingTop":0,"subtitlesTextDecoration":"none","playbackBarProgressOpacity":1,"toolTipFontSize":6.5,"paddingBottom":0,"playbackBarOpacity":1,"toolTipShadowBlurRadius":1,"playbackBarHeadBorderRadius":0,"toolTipBorderRadius":1,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarBottom":5,"subtitlesFontColor":"#FFFFFF","progressBackgroundColor":["#FFFFFF"],"displayTooltipInSurfaceSelection":true,"doubleClickAction":"toggle_fullscreen","toolTipPaddingBottom":3,"playbackBarBorderSize":0,"height":"100%","progressBarBackgroundColor":["#3399FF"],"subtitlesEnabled":true,"subtitlesFontFamily":"Arial","playbackBarHeadShadowHorizontalLength":0,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingLeft":5,"transitionMode":"blending","progressBackgroundColorRatios":[0.01],"toolTipFontColor":"#FFFFFF","progressBarOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeight":10,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"progressBottom":0,"surfaceReticleColor":"#FFFFFF","subtitlesPaddingTop":5,"left":0,"shadow":false,"progressHeight":10,"progressBackgroundOpacity":1},{"initialPosition":{"hfov":125,"yaw":175.68,"pitch":-3.54,"class":"PanoramaCameraPosition"},"manualRotationSpeed":200,"idleSequence":"this.sequence_CF3C4443_C366_8A08_41B0_490EBEBD78A4","initialSequence":"this.sequence_CF3C4443_C366_8A08_41B0_490EBEBD78A4","automaticZoomSpeed":10,"hoverFactor":0,"timeToIdle":5000,"class":"PanoramaCamera","id":"panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_camera"},{"borderSize":0,"class":"IconButton","width":35,"borderRadius":0,"cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_D7B35BF8_C652_B477_41BD_50082ACCDDBF_mobile","paddingBottom":0,"data":{"name":"LOCALIZA\u00c7\u00c3O"},"backgroundColorDirection":"vertical","horizontalAlign":"center","toolTipHorizontalAlign":"center","backgroundColorRatios":[],"paddingRight":0,"transparencyActive":true,"backgroundOpacity":0.3,"height":35,"verticalAlign":"middle","backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_D844FBFB_C84E_128C_41D2_07E00645785D.source'), '_blank')","mode":"push","propagateClick":false,"minHeight":1,"minWidth":1,"shadow":false,"iconURL":"skin/IconButton_D7B35BF8_C652_B477_41BD_50082ACCDDBF.png"},{"initialPosition":{"hfov":120,"yaw":174.3,"pitch":-14.21,"class":"PanoramaCameraPosition"},"manualRotationSpeed":200,"idleSequence":"this.sequence_CF3C8443_C366_8A08_41E3_F5FA3AC964F4","initialSequence":"this.sequence_CF3C8443_C366_8A08_41E3_F5FA3AC964F4","automaticZoomSpeed":10,"hoverFactor":0,"manualZoomSpeed":4,"timeToIdle":5000,"class":"PanoramaCamera","id":"panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_camera"},{"toolTipOpacity":1,"toolTipBorderSize":1,"borderSize":0,"toolTipShadowOpacity":1,"class":"IconButton","toolTipBackgroundColor":"#F6F6F6","width":35,"borderRadius":0,"toolTip":trans('IconButton_D6915553_C652_DDB9_41DF_887180F1CC4E_mobile.toolTip'),"cursor":"hand","paddingLeft":0,"paddingTop":0,"toolTipShadowHorizontalLength":0,"id":"IconButton_D6915553_C652_DDB9_41DF_887180F1CC4E_mobile","toolTipFontSize":6,"toolTipBorderRadius":1,"data":{"name":"FULLSCREEN"},"toolTipTextShadowOpacity":0,"toolTipShadowBlurRadius":1,"horizontalAlign":"center","toolTipHorizontalAlign":"center","paddingRight":0,"toolTipDisplayTime":600,"toolTipFontStyle":"normal","paddingBottom":0,"backgroundOpacity":0,"toolTipPaddingBottom":2,"transparencyActive":true,"toolTipShadowVerticalLength":0,"height":41.75,"toolTipFontFamily":"Arial","verticalAlign":"middle","toolTipTextShadowColor":"#000000","toolTipPaddingRight":3,"toolTipPaddingLeft":3,"toolTipShadowColor":"#333333","toolTipFontColor":"#606060","maxHeight":64,"maxWidth":64,"propagateClick":false,"mode":"toggle","toolTipBorderColor":"#767676","toolTipFontWeight":"normal","minHeight":1,"minWidth":1,"shadow":false,"toolTipShadowSpread":0,"iconURL":"skin/IconButton_D6915553_C652_DDB9_41DF_887180F1CC4E.png","toolTipTextShadowBlurRadius":1,"toolTipPaddingTop":2},{"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_t.jpg","overlays":["this.overlay_D2AAB424_C39E_8A08_41E6_1CD690AB005D"],"pitch":0,"id":"panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75","partial":false,"label":trans('panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75.label'),"hfovMax":130,"adjacentPanoramas":[{"distance":63.53,"yaw":178.01,"select":"this.overlay_D2AAB424_C39E_8A08_41E6_1CD690AB005D.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","panorama":"this.panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297","data":{"overlayID":"overlay_D2AAB424_C39E_8A08_41E6_1CD690AB005D"}}],"frames":[{"thumbnailUrl":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":12288,"colCount":24,"url":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","rowCount":4},{"width":6144,"colCount":12,"url":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"rowCount":1},{"width":9216,"colCount":6,"url":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","rowCount":1},{"width":12288,"colCount":6,"url":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","rowCount":1}]}}],"hfov":360,"data":{"label":"Entrada RF Fitness"},"hfovMin":"130%"},{"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_t.jpg","overlays":["this.overlay_D058D154_C3AB_8A08_41B2_3376018FE5CF"],"pitch":0,"id":"panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8","partial":false,"label":trans('panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8.label'),"hfovMax":130,"adjacentPanoramas":[{"distance":67.56,"yaw":170.71,"select":"this.overlay_D058D154_C3AB_8A08_41B2_3376018FE5CF.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","panorama":"this.panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297","data":{"overlayID":"overlay_D058D154_C3AB_8A08_41B2_3376018FE5CF"}}],"frames":[{"thumbnailUrl":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":12288,"colCount":24,"url":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","rowCount":4},{"width":6144,"colCount":12,"url":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"rowCount":1},{"width":9216,"colCount":6,"url":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","rowCount":1},{"width":12288,"colCount":6,"url":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","rowCount":1}]}}],"hfov":360,"data":{"label":"Meio Academia 2"},"hfovMin":"135%"},{"borderSize":0,"class":"IconButton","width":35,"borderRadius":0,"cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_D6CBCE57_C656_CFB9_41D4_52E69F4236C9_mobile","paddingBottom":0,"data":{"name":"INSTAGRAM"},"backgroundColorDirection":"vertical","horizontalAlign":"center","toolTipHorizontalAlign":"center","backgroundColorRatios":[],"paddingRight":0,"transparencyActive":true,"backgroundOpacity":0.3,"height":35,"verticalAlign":"middle","backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_D8442BFB_C84E_128C_41DE_106DCB6BEBB6.source'), '_blank')","mode":"push","propagateClick":false,"minHeight":1,"minWidth":1,"shadow":false,"iconURL":"skin/IconButton_D6CBCE57_C656_CFB9_41D4_52E69F4236C9.png"},{"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_t.jpg","overlays":["this.overlay_D14601D6_C39B_8A08_41D5_22230C7C01E8","this.overlay_D0A7FC60_C3AA_9A08_41D0_2F77DCC3242D"],"pitch":0,"id":"panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297","partial":false,"label":trans('panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297.label'),"hfovMax":130,"adjacentPanoramas":[{"distance":3.9,"yaw":161.95,"select":"this.overlay_D14601D6_C39B_8A08_41D5_22230C7C01E8.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","panorama":"this.panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC","data":{"overlayID":"overlay_D14601D6_C39B_8A08_41D5_22230C7C01E8"}},{"distance":82.33,"yaw":-1.29,"select":"this.overlay_D0A7FC60_C3AA_9A08_41D0_2F77DCC3242D.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","panorama":"this.panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75","data":{"overlayID":"overlay_D0A7FC60_C3AA_9A08_41D0_2F77DCC3242D"}}],"frames":[{"thumbnailUrl":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":12288,"colCount":24,"url":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","rowCount":4},{"width":6144,"colCount":12,"url":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"rowCount":1},{"width":9216,"colCount":6,"url":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","rowCount":1},{"width":12288,"colCount":6,"url":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","rowCount":1}]}}],"hfov":360,"data":{"label":"Recep\u00e7\u00e3o RF Fitness"},"hfovMin":"135%"},{"initialPosition":{"hfov":120,"yaw":-175.94,"pitch":-17.42,"class":"PanoramaCameraPosition"},"manualRotationSpeed":200,"idleSequence":"this.sequence_CF3CA443_C366_8A08_41CA_7276AB6A0F1D","initialSequence":"this.sequence_CF3CA443_C366_8A08_41CA_7276AB6A0F1D","automaticZoomSpeed":10,"hoverFactor":0,"manualZoomSpeed":4,"timeToIdle":5000,"class":"PanoramaCamera","id":"panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_camera"},{"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","id":"MainViewer_mobilePanoramaPlayer","touchControlMode":"drag_rotation","aaEnabled":true,"displayPlaybackBar":true,"arrowKeysAction":"translate","surfaceSelectionEnabled":false,"viewerArea":"this.MainViewer_mobile","mouseControlMode":"drag_rotation","zoomEnabled":true},{"borderSize":0,"class":"IconButton","width":35,"borderRadius":0,"cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_D36BAD2B_C6AE_CDE9_41E5_C10E800FD30B_mobile","data":{"name":"MUDO"},"horizontalAlign":"center","toolTipHorizontalAlign":"center","paddingRight":0,"paddingBottom":0,"backgroundOpacity":0,"transparencyActive":true,"height":35,"verticalAlign":"middle","rollOverIconURL":"skin/IconButton_D36BAD2B_C6AE_CDE9_41E5_C10E800FD30B_rollover.png","pressedIconURL":"skin/IconButton_D36BAD2B_C6AE_CDE9_41E5_C10E800FD30B_pressed.png","mode":"toggle","propagateClick":false,"minHeight":0,"minWidth":0,"shadow":false,"iconURL":"skin/IconButton_D36BAD2B_C6AE_CDE9_41E5_C10E800FD30B.png"},{"borderSize":0,"class":"IconButton","width":35,"borderRadius":0,"cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_D627151C_C653_5DAF_41DB_ABD412B5317E_mobile","data":{"name":"FACEBOOK"},"horizontalAlign":"center","toolTipHorizontalAlign":"center","paddingRight":0,"paddingBottom":0,"backgroundOpacity":0,"transparencyActive":true,"height":35,"verticalAlign":"middle","click":"this.openLink(this.translate('LinkBehaviour_D8452BFB_C84E_128C_41C2_6C65632484B0.source'), '_blank')","maxHeight":26,"maxWidth":26.5,"propagateClick":false,"mode":"push","minHeight":1,"minWidth":1,"shadow":false,"iconURL":"skin/IconButton_D627151C_C653_5DAF_41DB_ABD412B5317E.png"},{"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_t.jpg","overlays":["this.overlay_D0CCB21D_C3A6_8E3B_41D6_882BDD2BE5CB"],"pitch":0,"id":"panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC","partial":false,"label":trans('panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC.label'),"hfovMax":130,"adjacentPanoramas":[{"distance":9.25,"yaw":-179.52,"select":"this.overlay_D0CCB21D_C3A6_8E3B_41D6_882BDD2BE5CB.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","panorama":"this.panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8","data":{"overlayID":"overlay_D0CCB21D_C3A6_8E3B_41D6_882BDD2BE5CB"}}],"frames":[{"thumbnailUrl":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":12288,"colCount":24,"url":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","rowCount":4},{"width":6144,"colCount":12,"url":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"rowCount":1},{"width":9216,"colCount":6,"url":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","rowCount":1},{"width":12288,"colCount":6,"url":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","rowCount":1}]}}],"hfov":360,"data":{"label":"Meio Academia 1"},"hfovMin":"135%"},{"borderSize":0,"shadow":false,"class":"Container","data":{"name":"Container5062"},"borderRadius":0,"scrollBarMargin":1,"scrollBarWidth":5,"gap":9,"paddingLeft":0,"scrollBarOpacity":0.5,"paddingTop":0,"id":"Container_D777FE48_C65F_4FA8_41E2_FAF33D8062CA_mobile","width":"15.206%","horizontalAlign":"center","scrollBarColor":"#000000","paddingRight":0,"toolTipHorizontalAlign":"center","paddingBottom":0,"children":["this.IconButton_D6915553_C652_DDB9_41DF_887180F1CC4E_mobile","this.IconButton_D627151C_C653_5DAF_41DB_ABD412B5317E_mobile","this.IconButton_D7B35BF8_C652_B477_41BD_50082ACCDDBF_mobile","this.IconButton_D6CBCE57_C656_CFB9_41D4_52E69F4236C9_mobile","this.IconButton_D6E74784_C657_5C98_41E6_7868EB2D9090_mobile","this.IconButton_D36BAD2B_C6AE_CDE9_41E5_C10E800FD30B_mobile"],"backgroundOpacity":0,"scrollBarVisible":"rollOver","contentOpaque":false,"bottom":"0.84%","verticalAlign":"top","height":"97.107%","overflow":"scroll","layout":"vertical","propagateClick":false,"minHeight":10,"minWidth":10,"right":"0.32%"},{"borderSize":0,"class":"IconButton","width":35,"borderRadius":0,"cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_D6E74784_C657_5C98_41E6_7868EB2D9090_mobile","paddingBottom":0,"data":{"name":"WHATSAPP"},"backgroundColorDirection":"vertical","horizontalAlign":"center","toolTipHorizontalAlign":"center","backgroundColorRatios":[],"paddingRight":0,"transparencyActive":true,"backgroundOpacity":0.3,"height":35,"verticalAlign":"middle","backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_D8446BFB_C84E_128C_41BA_42F10F951963.source'), '_blank')","mode":"push","propagateClick":false,"minHeight":1,"minWidth":1,"shadow":false,"iconURL":"skin/IconButton_D6E74784_C657_5C98_41E6_7868EB2D9090.png"},{"manualZoomSpeed":4,"idleSequence":"this.sequence_CF20E443_C366_8A08_41D2_997F84DCB555","class":"PanoramaCamera","hoverFactor":0,"initialPosition":{"hfov":120,"yaw":167.18,"pitch":-1.65,"class":"PanoramaCameraPosition"},"manualRotationSpeed":200,"timeToIdle":5000,"initialSequence":"this.sequence_CF20E443_C366_8A08_41D2_997F84DCB555","displayOriginPosition":{"hfov":165,"yaw":167.18,"pitch":-90,"class":"RotationalCameraDisplayPosition","stereographicFactor":1},"displayMovements":[{"easing":"linear","duration":2000,"class":"TargetRotationalCameraDisplayMovement"},{"easing":"cubic_in_out","targetHfov":120,"class":"TargetRotationalCameraDisplayMovement","targetPitch":-1.65,"targetStereographicFactor":0,"duration":3000}],"automaticZoomSpeed":10,"id":"panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_camera"},{"items":["this.PanoramaPlayListItem_D8D222B3_C846_129C_41D2_781D80B84628","this.PanoramaPlayListItem_D8D362B3_C846_129C_41E8_826E1CF26B0A","this.PanoramaPlayListItem_D8D202B3_C846_129C_41E3_E5908D0168FB","this.PanoramaPlayListItem_D8D2F2B3_C846_129C_41D1_5F9515A16BC8"],"class":"PlayList","id":"mainPlayList"},{"data":{"label":"Audio Final"},"loop":false,"audio":"this.audiores_DBD493DC_C36A_8E39_41CF_80DF61B59D7F","autoplay":true,"class":"MediaAudio","id":"audio_D42AE754_C36D_9608_41B6_2BDF95B500EA"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":5.31,"yawDelta":32.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":5.31,"yawDelta":295,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":5.31,"yawDelta":32.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_CF3C4443_C366_8A08_41B0_490EBEBD78A4"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":5.31,"yawDelta":32.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":5.31,"yawDelta":295,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":5.31,"yawDelta":32.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_CF3C8443_C366_8A08_41E3_F5FA3AC964F4"},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":178.01,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 03"},"vfov":12,"hfov":12,"verticalAlign":"middle","image":"this.AnimatedImageResource_D809C071_C846_6D9C_41E0_20582820B2D7","horizontalAlign":"center","pitch":-1.52,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D2258608_C39F_7618_41E4_9528E49041E4"],"data":{"label":"Circle Arrow 03","hasPanoramaAction":true},"id":"overlay_D2AAB424_C39E_8A08_41E6_1CD690AB005D"},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":170.71,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 03"},"vfov":12,"hfov":12,"verticalAlign":"middle","image":"this.AnimatedImageResource_D836D071_C846_6D9C_41D0_9BC1E9FA2D35","horizontalAlign":"center","pitch":-1.43,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D0680173_C3AB_8A08_41E1_7091F836E0F8"],"data":{"label":"Circle Arrow 03","hasPanoramaAction":true},"id":"overlay_D058D154_C3AB_8A08_41B2_3376018FE5CF"},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"roll":-5.44,"distance":50,"yaw":161.95,"class":"HotspotPanoramaOverlayImage","rotationY":21.35,"data":{"label":"Circle Arrow 04 Left"},"verticalAlign":"middle","hfov":21.03,"vfov":16.98,"image":"this.AnimatedImageResource_D8098071_C846_6D9C_41DB_6C775D508FB5","horizontalAlign":"center","pitch":-23.55,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D157A1E5_C39B_8A0B_41E4_734424DF33CA"],"data":{"label":"Circle Arrow 04 Left","hasPanoramaAction":true},"id":"overlay_D14601D6_C39B_8A08_41D5_22230C7C01E8"},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":-1.29,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 03"},"vfov":19.34,"hfov":18.72,"verticalAlign":"middle","image":"this.AnimatedImageResource_D8365071_C846_6D9C_41B9_ADE32C9D2A8F","horizontalAlign":"center","pitch":-1.17,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D0B4AC60_C3AA_9A08_41D9_EE42A26CEFF5"],"data":{"label":"Circle Arrow 03","hasPanoramaAction":true},"id":"overlay_D0A7FC60_C3AA_9A08_41D0_2F77DCC3242D"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":5.31,"yawDelta":32.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":5.31,"yawDelta":295,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":5.31,"yawDelta":32.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_CF3CA443_C366_8A08_41CA_7276AB6A0F1D"},{"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"yaw":-179.52,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 03"},"vfov":13.76,"hfov":15.68,"verticalAlign":"middle","image":"this.AnimatedImageResource_D8366071_C846_6D9C_41D8_5BC5B5D002B6","horizontalAlign":"center","pitch":-10.41,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D0D6121D_C3A6_8E3B_41E1_08726DC8573A"],"data":{"label":"Circle Arrow 03","hasPanoramaAction":true},"id":"overlay_D0CCB21D_C3A6_8E3B_41D6_882BDD2BE5CB"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":5.31,"yawDelta":32.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":5.31,"yawDelta":295,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":5.31,"yawDelta":32.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_CF20E443_C366_8A08_41D2_997F84DCB555"},{"camera":"this.panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_camera","media":"this.panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","id":"PanoramaPlayListItem_D8D222B3_C846_129C_41D2_781D80B84628"},{"camera":"this.panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_camera","media":"this.panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","id":"PanoramaPlayListItem_D8D362B3_C846_129C_41E8_826E1CF26B0A"},{"camera":"this.panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_camera","media":"this.panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","id":"PanoramaPlayListItem_D8D202B3_C846_129C_41E3_E5908D0168FB"},{"camera":"this.panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_camera","media":"this.panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","id":"PanoramaPlayListItem_D8D2F2B3_C846_129C_41D1_5F9515A16BC8"},{"mp3Url":trans('audiores_DBD493DC_C36A_8E39_41CF_80DF61B59D7F.mp3Url'),"class":"AudioResource","id":"audiores_DBD493DC_C36A_8E39_41CF_80DF61B59D7F"},{"frameCount":24,"frameDuration":41,"colCount":4,"class":"AnimatedImageResource","levels":[{"height":1200,"width":800,"url":"media/res_D7709FD4_C3AE_B608_41E5_DC35055A5171_0.png","class":"ImageResourceLevel"}],"rowCount":6,"id":"AnimatedImageResource_D809C071_C846_6D9C_41E0_20582820B2D7"},{"mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_D8D362B3_C846_129C_41E8_826E1CF26B0A, 176.12307692307692, -0.8894454382826467, 125 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_D2258608_C39F_7618_41E4_9528E49041E4"},{"frameCount":24,"frameDuration":41,"colCount":4,"class":"AnimatedImageResource","levels":[{"height":1200,"width":800,"url":"media/res_D7709FD4_C3AE_B608_41E5_DC35055A5171_0.png","class":"ImageResourceLevel"}],"rowCount":6,"id":"AnimatedImageResource_D836D071_C846_6D9C_41D0_9BC1E9FA2D35"},{"mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_D8D362B3_C846_129C_41E8_826E1CF26B0A, 0, 0, 125 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_D0680173_C3AB_8A08_41E1_7091F836E0F8"},{"frameCount":24,"frameDuration":41,"colCount":4,"class":"AnimatedImageResource","levels":[{"height":804,"width":536,"url":"media/res_D7714FD4_C3AE_B608_41E0_07BFC2BDC9D2_0.png","class":"ImageResourceLevel"}],"rowCount":6,"id":"AnimatedImageResource_D8098071_C846_6D9C_41DB_6C775D508FB5"},{"mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_D8D202B3_C846_129C_41E3_E5908D0168FB, -177.7846153846154, -1.4436493738819312, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_D157A1E5_C39B_8A0B_41E4_734424DF33CA"},{"frameCount":24,"frameDuration":41,"colCount":4,"class":"AnimatedImageResource","levels":[{"height":1200,"width":800,"url":"media/res_D7709FD4_C3AE_B608_41E5_DC35055A5171_0.png","class":"ImageResourceLevel"}],"rowCount":6,"id":"AnimatedImageResource_D8365071_C846_6D9C_41B9_ADE32C9D2A8F"},{"mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_D8D222B3_C846_129C_41D2_781D80B84628, 0, 0, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_D0B4AC60_C3AA_9A08_41D9_EE42A26CEFF5"},{"frameCount":24,"frameDuration":41,"colCount":4,"class":"AnimatedImageResource","levels":[{"height":1200,"width":800,"url":"media/res_D7709FD4_C3AE_B608_41E5_DC35055A5171_0.png","class":"ImageResourceLevel"}],"rowCount":6,"id":"AnimatedImageResource_D8366071_C846_6D9C_41D8_5BC5B5D002B6"},{"mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_D8D2F2B3_C846_129C_41D1_5F9515A16BC8, -176.6769230769231, 0.7731663685152066, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_D0D6121D_C3A6_8E3B_41E1_08726DC8573A"}],"scrollBarWidth":10,"gap":10,"paddingLeft":0,"scrollBarOpacity":0.5,"paddingTop":0,"vrPolyfillScale":0.5,"id":"rootPlayer","mouseWheelEnabled":true,"paddingBottom":0,"backgroundColorDirection":"vertical","horizontalAlign":"left","toolTipHorizontalAlign":"center","backgroundColorRatios":[0],"scrollBarColor":"#000000","paddingRight":0,"buttonToggleFullscreen":"this.IconButton_D6915553_C652_DDB9_41DF_887180F1CC4E_mobile","scrollBarVisible":"rollOver","contentOpaque":false,"backgroundOpacity":1,"defaultVRPointer":"laser","height":"100%","backgroundPreloadEnabled":true,"verticalAlign":"top","backgroundColor":["#FFFFFF"],"mobileMipmappingEnabled":false,"children":["this.MainViewer_mobile","this.Container_D777FE48_C65F_4FA8_41E2_FAF33D8062CA_mobile"],"overflow":"hidden","defaultMenu":["fullscreen","mute","rotation"],"downloadEnabled":true,"buttonToggleMute":"this.IconButton_D36BAD2B_C6AE_CDE9_41E5_C10E800FD30B_mobile","layout":"absolute","propagateClick":true,"mediaActivationMode":"window","desktopMipmappingEnabled":false,"start":"this.playAudioList([this.audio_D42AE754_C36D_9608_41B6_2BDF95B500EA], true); this.init(); if(!this.get('fullscreenAvailable')) { [this.IconButton_D6915553_C652_DDB9_41DF_887180F1CC4E_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","minHeight":20,"left":379.15,"minWidth":20,"data":{"name":"Player468","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"pitch":1,"rate":1},"defaultLocale":"pt"},"scripts":{"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMainViewer":TDV.Tour.Script.getMainViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaByName":TDV.Tour.Script.getMediaByName,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getKey":TDV.Tour.Script.getKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"init":TDV.Tour.Script.init,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"downloadFile":TDV.Tour.Script.downloadFile,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showWindow":TDV.Tour.Script.showWindow,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playAudioList":TDV.Tour.Script.playAudioList,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"registerKey":TDV.Tour.Script.registerKey,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"initQuiz":TDV.Tour.Script.initQuiz,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"historyGoForward":TDV.Tour.Script.historyGoForward,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizStart":TDV.Tour.Script.quizStart,"mixObject":TDV.Tour.Script.mixObject,"unregisterKey":TDV.Tour.Script.unregisterKey,"existsKey":TDV.Tour.Script.existsKey,"setLocale":TDV.Tour.Script.setLocale,"setValue":TDV.Tour.Script.setValue,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPixels":TDV.Tour.Script.getPixels,"cloneCamera":TDV.Tour.Script.cloneCamera,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getOverlays":TDV.Tour.Script.getOverlays,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"shareSocial":TDV.Tour.Script.shareSocial,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"executeJS":TDV.Tour.Script.executeJS,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"isPanorama":TDV.Tour.Script.isPanorama,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"translate":TDV.Tour.Script.translate,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initItemWithComps":TDV.Tour.Script._initItemWithComps}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.14.js.map
})();
//Generated with v2022.1.14, Tue Oct 11 2022