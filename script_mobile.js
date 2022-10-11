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
var script = {"start":"this.playAudioList([this.audio_D42AE754_C36D_9608_41B6_2BDF95B500EA], true); this.init(); if(!this.get('fullscreenAvailable')) { [this.IconButton_D6915553_C652_DDB9_41DF_887180F1CC4E_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","borderRadius":0,"backgroundColorRatios":[0],"shadow":false,"gap":10,"scrollBarMargin":2,"definitions": [{"borderRadius":0,"data":{"name":"FACEBOOK"},"borderSize":0,"width":35,"cursor":"hand","id":"IconButton_D627151C_C653_5DAF_41DB_ABD412B5317E_mobile","paddingLeft":0,"paddingTop":0,"paddingRight":0,"horizontalAlign":"center","paddingBottom":0,"height":35,"toolTipHorizontalAlign":"center","verticalAlign":"middle","click":"this.openLink(this.translate('LinkBehaviour_D8452BFB_C84E_128C_41C2_6C65632484B0.source'), '_blank')","transparencyActive":true,"backgroundOpacity":0,"maxHeight":26,"maxWidth":26.5,"mode":"push","class":"IconButton","minHeight":1,"propagateClick":false,"minWidth":1,"shadow":false,"iconURL":"skin/IconButton_D627151C_C653_5DAF_41DB_ABD412B5317E.png"},{"initialPosition":{"yaw":-175.94,"class":"PanoramaCameraPosition","hfov":120,"pitch":-17.42},"initialSequence":"this.sequence_CF3CA443_C366_8A08_41CA_7276AB6A0F1D","manualZoomSpeed":4,"idleSequence":"this.sequence_CF3CA443_C366_8A08_41CA_7276AB6A0F1D","timeToIdle":5000,"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"manualRotationSpeed":200,"id":"panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_camera"},{"hfov":360,"data":{"label":"Entrada RF Fitness"},"overlays":["this.overlay_D2AAB424_C39E_8A08_41E6_1CD690AB005D","this.panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_tcap0"],"hfovMin":"130%","thumbnailUrl":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_t.jpg","pitch":0,"id":"panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75","partial":false,"hfovMax":130,"label":trans('panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75.label'),"class":"Panorama","adjacentPanoramas":[{"distance":63.53,"yaw":178.01,"select":"this.overlay_D2AAB424_C39E_8A08_41E6_1CD690AB005D.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_D2AAB424_C39E_8A08_41E6_1CD690AB005D"},"panorama":"this.panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297","class":"AdjacentPanorama"}],"frames":[{"thumbnailUrl":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"width":12288,"colCount":24,"url":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":2,"width":6144,"colCount":12,"url":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":1,"width":3072,"colCount":6,"url":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"},{"rowCount":1,"width":9216,"colCount":6,"url":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_0/{face}/vr/0.jpg","height":1536,"tags":"mobilevr","class":"TiledImageResourceLevel"},{"rowCount":1,"width":12288,"colCount":6,"url":"media/panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel"}],"class":"ImageResource"}}],"vfov":180},{"borderRadius":0,"data":{"name":"FULLSCREEN"},"toolTipFontFamily":"Arial","borderSize":0,"width":35,"toolTipBorderRadius":1,"toolTipTextShadowOpacity":0,"toolTip":trans('IconButton_D6915553_C652_DDB9_41DF_887180F1CC4E_mobile.toolTip'),"cursor":"hand","toolTipBackgroundColor":"#F6F6F6","toolTipPaddingRight":3,"id":"IconButton_D6915553_C652_DDB9_41DF_887180F1CC4E_mobile","paddingLeft":0,"toolTipTextShadowBlurRadius":1,"paddingTop":0,"paddingRight":0,"horizontalAlign":"center","paddingBottom":0,"toolTipFontStyle":"normal","toolTipPaddingBottom":2,"toolTipShadowOpacity":1,"toolTipShadowHorizontalLength":0,"toolTipShadowBlurRadius":1,"toolTipFontSize":6,"height":41.75,"toolTipHorizontalAlign":"center","verticalAlign":"middle","toolTipDisplayTime":600,"backgroundOpacity":0,"transparencyActive":true,"toolTipFontColor":"#606060","maxHeight":64,"maxWidth":64,"toolTipBorderSize":1,"toolTipPaddingLeft":3,"mode":"toggle","class":"IconButton","toolTipShadowColor":"#333333","toolTipPaddingTop":2,"toolTipOpacity":1,"minHeight":1,"toolTipTextShadowColor":"#000000","toolTipFontWeight":"normal","propagateClick":false,"minWidth":1,"shadow":false,"toolTipShadowVerticalLength":0,"iconURL":"skin/IconButton_D6915553_C652_DDB9_41DF_887180F1CC4E.png","toolTipBorderColor":"#767676","toolTipShadowSpread":0},{"class":"PlayList","items":["this.PanoramaPlayListItem_DBBBA152_C89A_1E73_41E3_2804A4E71213","this.PanoramaPlayListItem_DBBB7152_C89A_1E73_4192_11CED851FBDB","this.PanoramaPlayListItem_DBBB9152_C89A_1E73_41C4_0A6243FB7FB6","this.PanoramaPlayListItem_DBBBF152_C89A_1E73_41DE_14B693EE2F36"],"id":"mainPlayList"},{"hfov":360,"data":{"label":"Recep\u00e7\u00e3o RF Fitness"},"overlays":["this.overlay_D14601D6_C39B_8A08_41D5_22230C7C01E8","this.overlay_D0A7FC60_C3AA_9A08_41D0_2F77DCC3242D","this.panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_tcap0"],"hfovMin":"135%","thumbnailUrl":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_t.jpg","pitch":0,"id":"panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297","partial":false,"hfovMax":130,"label":trans('panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297.label'),"class":"Panorama","adjacentPanoramas":[{"distance":3.9,"yaw":161.95,"select":"this.overlay_D14601D6_C39B_8A08_41D5_22230C7C01E8.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_D14601D6_C39B_8A08_41D5_22230C7C01E8"},"panorama":"this.panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC","class":"AdjacentPanorama"},{"distance":82.33,"yaw":-1.29,"select":"this.overlay_D0A7FC60_C3AA_9A08_41D0_2F77DCC3242D.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_D0A7FC60_C3AA_9A08_41D0_2F77DCC3242D"},"panorama":"this.panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75","class":"AdjacentPanorama"}],"frames":[{"thumbnailUrl":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"width":12288,"colCount":24,"url":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":2,"width":6144,"colCount":12,"url":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":1,"width":3072,"colCount":6,"url":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"},{"rowCount":1,"width":9216,"colCount":6,"url":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_0/{face}/vr/0.jpg","height":1536,"tags":"mobilevr","class":"TiledImageResourceLevel"},{"rowCount":1,"width":12288,"colCount":6,"url":"media/panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel"}],"class":"ImageResource"}}],"vfov":180},{"hfov":360,"data":{"label":"Meio Academia 1"},"overlays":["this.overlay_D0CCB21D_C3A6_8E3B_41D6_882BDD2BE5CB","this.panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_tcap0"],"hfovMin":"135%","thumbnailUrl":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_t.jpg","pitch":0,"id":"panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC","partial":false,"hfovMax":130,"label":trans('panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC.label'),"class":"Panorama","adjacentPanoramas":[{"distance":9.25,"yaw":-179.52,"select":"this.overlay_D0CCB21D_C3A6_8E3B_41D6_882BDD2BE5CB.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_D0CCB21D_C3A6_8E3B_41D6_882BDD2BE5CB"},"panorama":"this.panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8","class":"AdjacentPanorama"}],"frames":[{"thumbnailUrl":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"width":12288,"colCount":24,"url":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":2,"width":6144,"colCount":12,"url":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":1,"width":3072,"colCount":6,"url":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"},{"rowCount":1,"width":9216,"colCount":6,"url":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_0/{face}/vr/0.jpg","height":1536,"tags":"mobilevr","class":"TiledImageResourceLevel"},{"rowCount":1,"width":12288,"colCount":6,"url":"media/panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel"}],"class":"ImageResource"}}],"vfov":180},{"borderRadius":0,"backgroundColorRatios":[],"borderSize":0,"width":35,"cursor":"hand","paddingLeft":0,"data":{"name":"LOCALIZA\u00c7\u00c3O"},"id":"IconButton_D7B35BF8_C652_B477_41BD_50082ACCDDBF_mobile","backgroundColorDirection":"vertical","paddingTop":0,"paddingRight":0,"horizontalAlign":"center","paddingBottom":0,"height":35,"toolTipHorizontalAlign":"center","backgroundColor":[],"backgroundOpacity":0.3,"click":"this.openLink(this.translate('LinkBehaviour_D844FBFB_C84E_128C_41D2_07E00645785D.source'), '_blank')","transparencyActive":true,"verticalAlign":"middle","mode":"push","class":"IconButton","minHeight":1,"propagateClick":false,"minWidth":1,"iconURL":"skin/IconButton_D7B35BF8_C652_B477_41BD_50082ACCDDBF.png","shadow":false},{"borderRadius":0,"data":{"name":"MUDO"},"borderSize":0,"width":35,"cursor":"hand","id":"IconButton_D36BAD2B_C6AE_CDE9_41E5_C10E800FD30B_mobile","paddingLeft":0,"paddingTop":0,"paddingRight":0,"horizontalAlign":"center","paddingBottom":0,"height":35,"toolTipHorizontalAlign":"center","verticalAlign":"middle","pressedIconURL":"skin/IconButton_D36BAD2B_C6AE_CDE9_41E5_C10E800FD30B_pressed.png","transparencyActive":true,"backgroundOpacity":0,"rollOverIconURL":"skin/IconButton_D36BAD2B_C6AE_CDE9_41E5_C10E800FD30B_rollover.png","mode":"toggle","class":"IconButton","minHeight":0,"propagateClick":false,"minWidth":0,"shadow":false,"iconURL":"skin/IconButton_D36BAD2B_C6AE_CDE9_41E5_C10E800FD30B.png"},{"borderRadius":0,"backgroundColorRatios":[],"borderSize":0,"width":35,"cursor":"hand","paddingLeft":0,"data":{"name":"WHATSAPP"},"id":"IconButton_D6E74784_C657_5C98_41E6_7868EB2D9090_mobile","backgroundColorDirection":"vertical","paddingTop":0,"paddingRight":0,"horizontalAlign":"center","paddingBottom":0,"height":35,"toolTipHorizontalAlign":"center","backgroundColor":[],"backgroundOpacity":0.3,"click":"this.openLink(this.translate('LinkBehaviour_D8446BFB_C84E_128C_41BA_42F10F951963.source'), '_blank')","transparencyActive":true,"verticalAlign":"middle","mode":"push","class":"IconButton","minHeight":1,"propagateClick":false,"minWidth":1,"iconURL":"skin/IconButton_D6E74784_C657_5C98_41E6_7868EB2D9090.png","shadow":false},{"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColorDirection":"vertical","subtitlesBackgroundColor":"#000000","subtitlesVerticalAlign":"bottom","right":"0.25%","subtitlesHorizontalAlign":"center","playbackBarHeadShadowOpacity":0.7,"borderSize":0,"subtitlesFontSize":"3vmin","displayTooltipInSurfaceSelection":true,"toolTipTextShadowOpacity":0,"subtitlesBottom":50,"subtitlesPaddingLeft":5,"paddingLeft":0,"toolTipPaddingRight":5,"progressBarBorderColor":"#0066FF","id":"MainViewer_mobile","progressBarBackgroundColorRatios":[0],"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"progressBackgroundColorDirection":"vertical","progressBorderRadius":0,"playbackBarHeadShadowBlurRadius":1.5,"paddingRight":0,"playbackBarLeft":0,"subtitlesBackgroundOpacity":0.2,"progressLeft":0,"playbackBarHeadHeight":15,"toolTipFontStyle":"normal","playbackBarHeadShadowColor":"#000000","data":{"name":"Main Viewer"},"vrPointerSelectionColor":"#FF6600","subtitlesBorderColor":"#FFFFFF","vrPointerSelectionTime":2000,"toolTipFontColor":"#FFFFFF","subtitlesPaddingBottom":5,"subtitlesBorderSize":0,"subtitlesPaddingRight":5,"progressBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","toolTipFontSize":6.5,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipHorizontalAlign":"center","surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderSize":0,"firstTransitionDuration":0,"height":"100%","transitionDuration":500,"playbackBarProgressBackgroundColorRatios":[0],"toolTipDisplayTime":600,"playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"playbackBarBorderRadius":0,"subtitlesTextDecoration":"none","playbackBarProgressBorderColor":"#000000","displayTooltipInTouchScreens":true,"class":"ViewerArea","translationTransitionDuration":1000,"toolTipOpacity":0.5,"minHeight":25,"subtitlesTextShadowVerticalLength":1,"toolTipFontWeight":"normal","propagateClick":true,"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadShadow":true,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadOpacity":1,"toolTipBorderColor":"#767676","toolTipShadowSpread":0,"borderRadius":0,"minWidth":50,"subtitlesFontFamily":"Arial","subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadBorderRadius":0,"progressBarOpacity":1,"toolTipBackgroundColor":"#000000","playbackBarOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderRadius":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderColor":"#000000","toolTipTextShadowBlurRadius":1,"paddingTop":0,"progressBottom":0,"playbackBarHeadShadowVerticalLength":0,"progressBackgroundColorRatios":[0.01],"playbackBarBottom":5,"playbackBarProgressOpacity":1,"paddingBottom":0,"playbackBarBorderSize":0,"subtitlesPaddingTop":5,"progressRight":0,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowOpacity":0,"subtitlesShadow":false,"subtitlesFontWeight":"normal","toolTipPaddingBottom":3,"toolTipShadowBlurRadius":1,"doubleClickAction":"toggle_fullscreen","playbackBarBackgroundColor":["#FFFFFF"],"progressHeight":10,"progressOpacity":1,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeight":10,"subtitlesTop":0,"playbackBarHeadWidth":6,"surfaceReticleColor":"#FFFFFF","transitionMode":"blending","subtitlesEnabled":true,"progressBarBorderRadius":0,"surfaceReticleOpacity":0.6,"toolTipBorderSize":1,"progressBorderSize":0,"playbackBarProgressBorderSize":0,"toolTipPaddingLeft":5,"playbackBarBackgroundColorDirection":"vertical","subtitlesOpacity":1,"left":0,"progressBarBorderSize":0,"toolTipTextShadowColor":"#000000","subtitlesGap":0,"toolTipShadowColor":"#333333","toolTipPaddingTop":3,"shadow":false,"toolTipFontFamily":"Georgia","progressBackgroundOpacity":1,"playbackBarProgressBorderRadius":0,"subtitlesTextShadowColor":"#000000","playbackBarRight":0},{"loop":false,"audio":"this.audiores_DBD493DC_C36A_8E39_41CF_80DF61B59D7F","class":"MediaAudio","autoplay":true,"data":{"label":"Audio Final"},"id":"audio_D42AE754_C36D_9608_41B6_2BDF95B500EA"},{"gyroscopeVerticalDraggingEnabled":true,"id":"MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer_mobile","mouseControlMode":"drag_rotation","zoomEnabled":true,"arrowKeysAction":"translate","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","displayPlaybackBar":true},{"borderRadius":0,"backgroundColorRatios":[],"borderSize":0,"width":35,"cursor":"hand","paddingLeft":0,"data":{"name":"INSTAGRAM"},"id":"IconButton_D6CBCE57_C656_CFB9_41D4_52E69F4236C9_mobile","backgroundColorDirection":"vertical","paddingTop":0,"paddingRight":0,"horizontalAlign":"center","paddingBottom":0,"height":35,"toolTipHorizontalAlign":"center","backgroundColor":[],"backgroundOpacity":0.3,"click":"this.openLink(this.translate('LinkBehaviour_D8442BFB_C84E_128C_41DE_106DCB6BEBB6.source'), '_blank')","transparencyActive":true,"verticalAlign":"middle","mode":"push","class":"IconButton","minHeight":1,"propagateClick":false,"minWidth":1,"iconURL":"skin/IconButton_D6CBCE57_C656_CFB9_41D4_52E69F4236C9.png","shadow":false},{"initialPosition":{"yaw":174.3,"class":"PanoramaCameraPosition","hfov":120,"pitch":-14.21},"initialSequence":"this.sequence_CF3C8443_C366_8A08_41E3_F5FA3AC964F4","manualZoomSpeed":4,"idleSequence":"this.sequence_CF3C8443_C366_8A08_41E3_F5FA3AC964F4","timeToIdle":5000,"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"manualRotationSpeed":200,"id":"panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_camera"},{"initialPosition":{"yaw":175.68,"class":"PanoramaCameraPosition","hfov":125,"pitch":-3.54},"initialSequence":"this.sequence_CF3C4443_C366_8A08_41B0_490EBEBD78A4","idleSequence":"this.sequence_CF3C4443_C366_8A08_41B0_490EBEBD78A4","timeToIdle":5000,"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"manualRotationSpeed":200,"id":"panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_camera"},{"hfov":360,"data":{"label":"Meio Academia 2"},"overlays":["this.overlay_D058D154_C3AB_8A08_41B2_3376018FE5CF","this.panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_tcap0"],"hfovMin":"135%","thumbnailUrl":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_t.jpg","pitch":0,"id":"panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8","partial":false,"hfovMax":130,"label":trans('panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8.label'),"class":"Panorama","adjacentPanoramas":[{"distance":67.56,"yaw":170.71,"select":"this.overlay_D058D154_C3AB_8A08_41B2_3376018FE5CF.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_D058D154_C3AB_8A08_41B2_3376018FE5CF"},"panorama":"this.panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297","class":"AdjacentPanorama"}],"frames":[{"thumbnailUrl":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"width":12288,"colCount":24,"url":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_0/{face}/0/{row}_{column}.jpg","height":2048,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":2,"width":6144,"colCount":12,"url":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel"},{"rowCount":1,"width":3072,"colCount":6,"url":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel"},{"rowCount":1,"width":9216,"colCount":6,"url":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_0/{face}/vr/0.jpg","height":1536,"tags":"mobilevr","class":"TiledImageResourceLevel"},{"rowCount":1,"width":12288,"colCount":6,"url":"media/panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","class":"TiledImageResourceLevel"}],"class":"ImageResource"}}],"vfov":180},{"borderRadius":0,"gap":9,"scrollBarMargin":1,"borderSize":0,"data":{"name":"Container5062"},"width":"15.206%","id":"Container_D777FE48_C65F_4FA8_41E2_FAF33D8062CA_mobile","paddingLeft":0,"scrollBarOpacity":0.5,"paddingTop":0,"scrollBarWidth":5,"paddingRight":0,"children":["this.IconButton_D6915553_C652_DDB9_41DF_887180F1CC4E_mobile","this.IconButton_D627151C_C653_5DAF_41DB_ABD412B5317E_mobile","this.IconButton_D7B35BF8_C652_B477_41BD_50082ACCDDBF_mobile","this.IconButton_D6CBCE57_C656_CFB9_41D4_52E69F4236C9_mobile","this.IconButton_D6E74784_C657_5C98_41E6_7868EB2D9090_mobile","this.IconButton_D36BAD2B_C6AE_CDE9_41E5_C10E800FD30B_mobile"],"paddingBottom":0,"scrollBarColor":"#000000","horizontalAlign":"center","bottom":"0.84%","height":"97.107%","toolTipHorizontalAlign":"center","verticalAlign":"top","backgroundOpacity":0,"contentOpaque":false,"scrollBarVisible":"rollOver","layout":"vertical","overflow":"scroll","class":"Container","minHeight":10,"propagateClick":false,"minWidth":10,"right":"0.32%","shadow":false},{"displayOriginPosition":{"yaw":167.18,"class":"RotationalCameraDisplayPosition","stereographicFactor":1,"hfov":165,"pitch":-90},"manualZoomSpeed":4,"idleSequence":"this.sequence_CF20E443_C366_8A08_41D2_997F84DCB555","timeToIdle":5000,"hoverFactor":0,"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":167.18,"class":"PanoramaCameraPosition","hfov":120,"pitch":-1.65},"initialSequence":"this.sequence_CF20E443_C366_8A08_41D2_997F84DCB555","manualRotationSpeed":200,"displayMovements":[{"easing":"linear","duration":2000,"class":"TargetRotationalCameraDisplayMovement"},{"easing":"cubic_in_out","targetHfov":120,"targetPitch":-1.65,"duration":3000,"targetStereographicFactor":0,"class":"TargetRotationalCameraDisplayMovement"}],"id":"panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_camera"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":32.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":295},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":32.5}],"class":"PanoramaCameraSequence","id":"sequence_CF3CA443_C366_8A08_41CA_7276AB6A0F1D"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Circle Arrow 03"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_DB8F6F2F_C89A_03D1_41DA_137D1E954736","distance":100,"yaw":178.01,"verticalAlign":"middle","pitch":-1.52,"vfov":12,"horizontalAlign":"center","data":{"label":"Circle Arrow 03"},"class":"HotspotPanoramaOverlayImage","hfov":12,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D2258608_C39F_7618_41E4_9528E49041E4"],"maps":[],"id":"overlay_D2AAB424_C39E_8A08_41E6_1CD690AB005D"},{"distance":50,"useHandCursor":false,"image":"this.res_D9E8E226_C86A_1DD3_41E6_2012930A85CB","angle":0,"inertia":false,"class":"TripodCapPanoramaOverlay","rotate":true,"hfov":25.5,"id":"panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_tcap0"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75_camera","media":"this.panorama_CEE619FF_C367_7DF8_41E0_9C0AD7C80B75","id":"PanoramaPlayListItem_DBBBA152_C89A_1E73_41E3_2804A4E71213","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_camera","media":"this.panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297","id":"PanoramaPlayListItem_DBBB7152_C89A_1E73_4192_11CED851FBDB","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_camera","media":"this.panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC","id":"PanoramaPlayListItem_DBBB9152_C89A_1E73_41C4_0A6243FB7FB6","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_camera","media":"this.panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8","id":"PanoramaPlayListItem_DBBBF152_C89A_1E73_41DE_14B693EE2F36","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","end":"this.trigger('tourEnded')"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Circle Arrow 04 Left"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_DB8FDF2F_C89A_03D1_41E5_5667BEBF36D9","distance":50,"yaw":161.95,"verticalAlign":"middle","pitch":-23.55,"rotationY":21.35,"horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Circle Arrow 04 Left"},"class":"HotspotPanoramaOverlayImage","roll":-5.44,"hfov":21.03,"vfov":16.98}],"areas":["this.HotspotPanoramaOverlayArea_D157A1E5_C39B_8A0B_41E4_734424DF33CA"],"maps":[],"id":"overlay_D14601D6_C39B_8A08_41D5_22230C7C01E8"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Circle Arrow 03"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_DB8C1F2F_C89A_03D1_41D6_763C223E576B","distance":100,"yaw":-1.29,"verticalAlign":"middle","pitch":-1.17,"vfov":19.34,"horizontalAlign":"center","data":{"label":"Circle Arrow 03"},"class":"HotspotPanoramaOverlayImage","hfov":18.72,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D0B4AC60_C3AA_9A08_41D9_EE42A26CEFF5"],"maps":[],"id":"overlay_D0A7FC60_C3AA_9A08_41D0_2F77DCC3242D"},{"distance":50,"useHandCursor":false,"image":"this.res_D9E8E226_C86A_1DD3_41E6_2012930A85CB","angle":0,"inertia":false,"class":"TripodCapPanoramaOverlay","rotate":true,"hfov":25.5,"id":"panorama_CF2DFCF5_C366_9A0B_41A9_5D7B9577A297_tcap0"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Circle Arrow 03"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_DB8C6F2F_C89A_03D1_41E4_0029A50E4B49","distance":100,"yaw":-179.52,"verticalAlign":"middle","pitch":-10.41,"vfov":13.76,"horizontalAlign":"center","data":{"label":"Circle Arrow 03"},"class":"HotspotPanoramaOverlayImage","hfov":15.68,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D0D6121D_C3A6_8E3B_41E1_08726DC8573A"],"maps":[],"id":"overlay_D0CCB21D_C3A6_8E3B_41D6_882BDD2BE5CB"},{"distance":50,"useHandCursor":false,"image":"this.res_D9E8E226_C86A_1DD3_41E6_2012930A85CB","angle":0,"inertia":false,"class":"TripodCapPanoramaOverlay","rotate":true,"hfov":25.5,"id":"panorama_CF57E94A_C366_BA18_41DE_C8A7056426DC_tcap0"},{"mp3Url":trans('audiores_DBD493DC_C36A_8E39_41CF_80DF61B59D7F.mp3Url'),"class":"AudioResource","id":"audiores_DBD493DC_C36A_8E39_41CF_80DF61B59D7F"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":32.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":295},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":32.5}],"class":"PanoramaCameraSequence","id":"sequence_CF3C8443_C366_8A08_41E3_F5FA3AC964F4"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":32.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":295},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":32.5}],"class":"PanoramaCameraSequence","id":"sequence_CF3C4443_C366_8A08_41B0_490EBEBD78A4"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Circle Arrow 03"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_DB8CBF2F_C89A_03D1_41E1_0A157FE45C18","distance":100,"yaw":170.71,"verticalAlign":"middle","pitch":-1.43,"vfov":12,"horizontalAlign":"center","data":{"label":"Circle Arrow 03"},"class":"HotspotPanoramaOverlayImage","hfov":12,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D0680173_C3AB_8A08_41E1_7091F836E0F8"],"maps":[],"id":"overlay_D058D154_C3AB_8A08_41B2_3376018FE5CF"},{"distance":50,"useHandCursor":false,"image":"this.res_D9E8E226_C86A_1DD3_41E6_2012930A85CB","angle":0,"inertia":false,"class":"TripodCapPanoramaOverlay","rotate":true,"hfov":25.5,"id":"panorama_CF57E5EC_C366_8A18_41E2_4ED0012762C8_tcap0"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":32.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":295},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":32.5}],"class":"PanoramaCameraSequence","id":"sequence_CF20E443_C366_8A08_41D2_997F84DCB555"},{"frameDuration":41,"frameCount":24,"colCount":4,"rowCount":6,"levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_D7709FD4_C3AE_B608_41E5_DC35055A5171_0.png"}],"class":"AnimatedImageResource","id":"AnimatedImageResource_DB8F6F2F_C89A_03D1_41DA_137D1E954736"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_DBBB7152_C89A_1E73_4192_11CED851FBDB, 176.12307692307692, -0.8894454382826467, 125 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_D2258608_C39F_7618_41E4_9528E49041E4"},{"levels":[{"height":1024,"width":1024,"class":"ImageResourceLevel","url":"media/res_D9E8E226_C86A_1DD3_41E6_2012930A85CB_0.png"}],"class":"ImageResource","id":"res_D9E8E226_C86A_1DD3_41E6_2012930A85CB"},{"frameDuration":41,"frameCount":24,"colCount":4,"rowCount":6,"levels":[{"height":804,"width":536,"class":"ImageResourceLevel","url":"media/res_D7714FD4_C3AE_B608_41E0_07BFC2BDC9D2_0.png"}],"class":"AnimatedImageResource","id":"AnimatedImageResource_DB8FDF2F_C89A_03D1_41E5_5667BEBF36D9"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_DBBB9152_C89A_1E73_41C4_0A6243FB7FB6, -177.7846153846154, -1.4436493738819312, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_D157A1E5_C39B_8A0B_41E4_734424DF33CA"},{"frameDuration":41,"frameCount":24,"colCount":4,"rowCount":6,"levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_D7709FD4_C3AE_B608_41E5_DC35055A5171_0.png"}],"class":"AnimatedImageResource","id":"AnimatedImageResource_DB8C1F2F_C89A_03D1_41D6_763C223E576B"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_DBBBA152_C89A_1E73_41E3_2804A4E71213, 0, 0, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_D0B4AC60_C3AA_9A08_41D9_EE42A26CEFF5"},{"frameDuration":41,"frameCount":24,"colCount":4,"rowCount":6,"levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_D7709FD4_C3AE_B608_41E5_DC35055A5171_0.png"}],"class":"AnimatedImageResource","id":"AnimatedImageResource_DB8C6F2F_C89A_03D1_41E4_0029A50E4B49"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_DBBBF152_C89A_1E73_41DE_14B693EE2F36, -176.6769230769231, 0.7731663685152066, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 3)","id":"HotspotPanoramaOverlayArea_D0D6121D_C3A6_8E3B_41E1_08726DC8573A"},{"frameDuration":41,"frameCount":24,"colCount":4,"rowCount":6,"levels":[{"height":1200,"width":800,"class":"ImageResourceLevel","url":"media/res_D7709FD4_C3AE_B608_41E5_DC35055A5171_0.png"}],"class":"AnimatedImageResource","id":"AnimatedImageResource_DB8CBF2F_C89A_03D1_41E1_0A157FE45C18"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_DBBB7152_C89A_1E73_4192_11CED851FBDB, 0, 0, 125 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_D0680173_C3AB_8A08_41E1_7091F836E0F8"}],"borderSize":0,"width":"100%","paddingLeft":0,"left":379.15,"id":"rootPlayer","mouseWheelEnabled":true,"overflow":"hidden","scrollBarOpacity":0.5,"paddingTop":0,"scrollBarWidth":10,"paddingRight":0,"backgroundPreloadEnabled":true,"desktopMipmappingEnabled":false,"vrPolyfillScale":0.5,"paddingBottom":0,"scrollBarColor":"#000000","horizontalAlign":"left","children":["this.MainViewer_mobile","this.Container_D777FE48_C65F_4FA8_41E2_FAF33D8062CA_mobile"],"backgroundColorDirection":"vertical","mobileMipmappingEnabled":false,"height":"100%","toolTipHorizontalAlign":"center","downloadEnabled":true,"backgroundColor":["#FFFFFF"],"backgroundOpacity":1,"contentOpaque":false,"defaultVRPointer":"laser","buttonToggleFullscreen":"this.IconButton_D6915553_C652_DDB9_41DF_887180F1CC4E_mobile","verticalAlign":"top","layout":"absolute","mediaActivationMode":"window","scrollBarVisible":"rollOver","buttonToggleMute":"this.IconButton_D36BAD2B_C6AE_CDE9_41E5_C10E800FD30B_mobile","class":"Player","minHeight":20,"propagateClick":true,"minWidth":20,"defaultMenu":["fullscreen","mute","rotation"],"scripts":{"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"registerKey":TDV.Tour.Script.registerKey,"quizShowScore":TDV.Tour.Script.quizShowScore,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getKey":TDV.Tour.Script.getKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"openLink":TDV.Tour.Script.openLink,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"clone":TDV.Tour.Script.clone,"historyGoBack":TDV.Tour.Script.historyGoBack,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizStart":TDV.Tour.Script.quizStart,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"executeJS":TDV.Tour.Script.executeJS,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"init":TDV.Tour.Script.init,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"cloneBindings":TDV.Tour.Script.cloneBindings,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showWindow":TDV.Tour.Script.showWindow,"playAudioList":TDV.Tour.Script.playAudioList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"existsKey":TDV.Tour.Script.existsKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getComponentByName":TDV.Tour.Script.getComponentByName,"cloneCamera":TDV.Tour.Script.cloneCamera,"getOverlays":TDV.Tour.Script.getOverlays,"showPopupImage":TDV.Tour.Script.showPopupImage,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setValue":TDV.Tour.Script.setValue,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPixels":TDV.Tour.Script.getPixels,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"mixObject":TDV.Tour.Script.mixObject,"historyGoForward":TDV.Tour.Script.historyGoForward,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"downloadFile":TDV.Tour.Script.downloadFile,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"isPanorama":TDV.Tour.Script.isPanorama,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"translate":TDV.Tour.Script.translate,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMainViewer":TDV.Tour.Script.getMainViewer},"data":{"textToSpeechConfig":{"speechOnTooltip":false,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"name":"Player468","locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt"}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.14.js.map
})();
//Generated with v2022.1.14, Tue Oct 11 2022