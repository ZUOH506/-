const charactersData = {
    ningguo: {
        name: "宁国府",
        description: "宁国府是《红楼梦》中贾府的一支，为宁国公贾演所建",
        children: [
            {
                id: "jia_yan",
                name: "贾演",
                title: "宁国公",
                avatar: null,
                description: "宁国府的开创者，因功被封宁国公",
                family: "贾",
                children: [
                    {
                        id: "jia_daihua",
                        name: "贾代化",
                        title: "世袭一等神威将军",
                        avatar: null,
                        description: "贾演之子，世袭爵位",
                        family: "贾",
                        children: [
                            {
                                id: "jia_jing",
                                name: "贾敬",
                                title: "乙卯科进士",
                                avatar: null,
                                description: "贾代化之子，后修道炼丹",
                                family: "贾",
                                children: [
                                    {
                                        id: "jia_zhen",
                                        name: "贾珍",
                                        title: "世袭三品爵威烈将军",
                                        avatar: "https://img.zhaoyy.cn/douban/87honglou/贾珍-李志新.jpg",
                                        description: "贾敬之子，宁国府当家人",
                                        family: "贾",
                                        children: [
                                        {
                                                id: "you_shi",
                                                name: "尤氏",
                                                title: "❤️ 贾珍之妻",
                                                avatar: "https://img.zhaoyy.cn/douban/87honglou/尤氏-王贵娥.jpg",
                                                description: "宁国府当家奶奶，尤二姐、尤三姐之姐",
                                                family: "尤",
                                                children: []
                                            },
                                            {
                                                id: "jia_rong",
                                                name: "贾蓉",
                                                title: "五品龙禁尉",
                                                avatar: "https://img.zhaoyy.cn/douban/87honglou/贾蓉-杨俊勇.jpg",
                                                description: "贾珍之子，秦可卿之夫",
                                                family: "贾",
                                                children: [
                                                    {
                                                        id: "qin_keqing",
                                                        name: "秦可卿",
                                                        title: "贾蓉之妻",
                                                        avatar: "https://img.zhaoyy.cn/douban/87honglou/秦可卿-张蕾.jpg",
                                                        description: "金陵十二钗之一，秦业养女，贾蓉之妻",
                                                        family: "秦",
                                                        children: []
                                                    }
                                                ]
                                            },
                                            {
                                                id: "you_ernv",
                                                name: "尤二姐",
                                                title: "尤氏之妹",
                                                avatar: "https://img.zhaoyy.cn/douban/87honglou/尤二姐-张明明.jpg",
                                                description: "尤氏继母之女，后为贾琏外室",
                                                family: "尤",
                                                children: []
                                            },
                                            {
                                                id: "you_sanjie",
                                                name: "尤三姐",
                                                title: "尤氏之妹",
                                                avatar: "https://img.zhaoyy.cn/douban/87honglou/尤三姐-周月.jpg",
                                                description: "尤氏继母之女，性格刚烈",
                                                family: "尤",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        id: "jia_xichun",
                                        name: "贾惜春",
                                        title: "贾府四春之一",
                                        avatar: "https://img.zhaoyy.cn/douban/87honglou/贾惜春-胡泽红.jpg",
                                        description: "贾珍胞妹，金陵十二钗之一，后出家为尼",
                                        family: "贾",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    rongguo: {
        name: "荣国府",
        description: "荣国府是《红楼梦》中贾府的另一支，为荣国公贾源所建",
        children: [
            {
                id: "jia_yuan",
                name: "贾源",
                title: "荣国公",
                avatar: null,
                description: "荣国府的开创者，因功被封荣国公",
                family: "贾",
                children: [
                    {
                        id: "jia_daishan",
                        name: "贾代善",
                        title: "世袭荣国公",
                        avatar: null,
                        description: "贾源之子，贾母之夫",
                        family: "贾",
                        children: [
                            {
                                id: "shi_taijun",
                                name: "贾母",
                                title: "❤️ 贾代善之妻",
                                avatar: "https://img.zhaoyy.cn/douban/87honglou/贾母-李婷.jpg",
                                description: "金陵世勋史侯家小姐，贾府最高权威",
                                family: "史",
                                children: [
                                    {
                                        id: "yuanyang",
                                        name: "鸳鸯",
                                        title: "贾母贴身丫鬟",
                                        avatar: "https://img.zhaoyy.cn/douban/87honglou/鸳鸯-郑铮.jpg",
                                        description: "贾母最信任的丫鬟",
                                        family: "贾",
                                        children: []
                                    }
                                ]
                            },
                            {
                                id: "jia_she",
                                name: "贾赦",
                                title: "世袭一等将军",
                                avatar: "https://img.zhaoyy.cn/douban/87honglou/贾赦-李颉.jpg",
                                description: "贾代善长子，贾琏、迎春之父",
                                family: "贾",
                                children: [
                                    {
                                        id: "xing_furen",
                                        name: "邢夫人",
                                        title: "❤️ 贾赦正妻",
                                        avatar: "https://img.zhaoyy.cn/douban/87honglou/邢夫人-夏明辉.jpg",
                                        description: "贾赦正妻，迎春嫡母，出身一般",
                                        family: "邢",
                                        children: []
                                    },
                                    {
                                        id: "jia_lian",
                                        name: "贾琏",
                                        title: "同知",
                                        avatar: "https://img.zhaoyy.cn/douban/87honglou/贾琏-高宏亮.jpg",
                                        description: "贾赦长子，王熙凤之夫，协助管家",
                                        family: "贾",
                                        children: [
                                            {
                                                id: "wang_xifeng",
                                                name: "王熙凤",
                                                title: "❤️ 贾琏之妻",
                                                avatar: "https://img.zhaoyy.cn/douban/87honglou/王熙凤-邓婕.jpg",
                                                description: "荣国府当家奶奶，王夫人侄女，精明强干",
                                                family: "王",
                                                children: []
                                            },
                                            {
                                                id: "ping_er",
                                                name: "平儿",
                                                title: "贾琏之妾",
                                                avatar: "https://img.zhaoyy.cn/douban/87honglou/平儿-沈琳.jpg",
                                                description: "王熙凤陪嫁丫鬟，贾琏通房大丫鬟",
                                                family: "王",
                                                children: []
                                            },
                                            {
                                                id: "qiu_tong",
                                                name: "秋桐",
                                                title: "贾琏之妾",
                                                avatar: "https://img.zhaoyy.cn/douban/87honglou/秋桐-沈璐.jpg",
                                                description: "贾琏之妾，原为贾赦丫鬟",
                                                family: "贾",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        id: "jia_yinchun",
                                        name: "贾迎春",
                                        title: "贾府四春之一",
                                        avatar: "https://img.zhaoyy.cn/douban/87honglou/贾迎春-金莉莉.jpg",
                                        description: "贾赦庶女，金陵十二钗之一，性格懦弱",
                                        family: "贾",
                                        children: []
                                    }
                                ]
                            },
                            {
                                id: "jia_zheng",
                                name: "贾政",
                                title: "工部员外郎",
                                avatar: "https://img.zhaoyy.cn/douban/87honglou/贾政-任大惠.jpg",
                                description: "贾代善次子，宝玉、元春、探春之父",
                                family: "贾",
                                children: [
                                    {
                                        id: "wang_furen",
                                        name: "王夫人",
                                        title: "❤️ 贾政正妻",
                                        avatar: "https://img.zhaoyy.cn/douban/87honglou/王夫人-周贤珍.jpg",
                                        description: "荣国府当家太太，宝玉生母，性情慈善",
                                        family: "王",
                                        children: [
                                            {
                                                id: "jin_chuan",
                                                name: "金钏",
                                                title: "王夫人丫鬟",
                                                avatar: null,
                                                description: "王夫人贴身丫鬟，后投井自尽",
                                                family: "王",
                                                children: []
                                            },
                                            {
                                                id: "yu_chuan",
                                                name: "玉钏",
                                                title: "王夫人丫鬟",
                                                avatar: "https://img.zhaoyy.cn/douban/87honglou/玉钏-于洁.jpg",
                                                description: "金钏之妹，王夫人贴身丫鬟",
                                                family: "王",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        id: "zhao_poniang",
                                        name: "赵姨娘",
                                        title: "💔 贾政之妾",
                                        avatar: null,
                                        description: "贾政妾室，贾探春、贾环之母",
                                        family: "贾",
                                        children: [
                                            {
                                                id: "jia_huan",
                                                name: "贾环",
                                                title: "贾政之子",
                                                avatar: null,
                                                description: "贾政与赵姨娘所生，宝玉同父异母弟",
                                                family: "贾",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        id: "jia_yuanchun",
                                        name: "贾元春",
                                        title: "贤德妃",
                                        avatar: "https://img.zhaoyy.cn/douban/87honglou/贾元春-成梅.jpg",
                                        description: "贾政长女，入宫为妃，贾府荣耀的象征",
                                        family: "贾",
                                        children: []
                                    },
                                    {
                                        id: "jia_zhu",
                                        name: "贾珠",
                                        title: "秀才",
                                        avatar: null,
                                        description: "贾政长子，李纨之夫，早逝",
                                        family: "贾",
                                        children: [
                                            {
                                                id: "li_wan",
                                                name: "李纨",
                                                title: "贾珠之妻",
                                                avatar: "https://img.zhaoyy.cn/douban/87honglou/李纨-孙梦泉.jpg",
                                                description: "金陵十二钗之一，贾珠之妻，贾兰之母",
                                                family: "李",
                                                children: [
                                                    {
                                                        id: "jia_lan",
                                                        name: "贾兰",
                                                        title: "贾珠之子",
                                                        avatar: null,
                                                        description: "李纨之子，贾珠遗腹子",
                                                        family: "贾",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: "jia_baoyu",
                                        name: "贾宝玉",
                                        title: "贾府公子",
                                        avatar: "https://img.zhaoyy.cn/douban/87honglou/贾宝玉-欧阳奋强.jpg",
                                        description: "贾政次子，衔玉而生，厌恶功名，钟情女儿",
                                        family: "贾",
                                        children: [
                                            {
                                                id: "xi_ren",
                                                name: "袭人",
                                                title: "宝玉贴身丫鬟",
                                                avatar: "https://img.zhaoyy.cn/douban/87honglou/袭人-袁枚.jpg",
                                                description: "宝玉贴身丫鬟，金陵又副册之首",
                                                family: "贾",
                                                children: []
                                            },
                                            {
                                                id: "qing_wen",
                                                name: "晴雯",
                                                title: "宝玉丫鬟",
                                                avatar: "https://img.zhaoyy.cn/douban/87honglou/晴雯-安雯.jpg",
                                                description: "宝玉丫鬟，金陵又副册之首",
                                                family: "贾",
                                                children: []
                                            },
                                            {
                                                id: "xue_baochai",
                                                name: "薛宝钗",
                                                title: "宝二奶奶",
                                                avatar: "https://img.zhaoyy.cn/douban/87honglou/薛宝钗-张莉.jpg",
                                                description: "薛姨妈之女，金陵十二钗之一，后与宝玉成婚",
                                                family: "薛",
                                                children: []
                                            },
                                            {
                                                id: "lin_daiyu",
                                                name: "林黛玉",
                                                title: "黛玉",
                                                avatar: "https://img.zhaoyy.cn/douban/87honglou/林黛玉-陈晓旭.jpg",
                                                description: "贾宝玉姑表妹，金陵十二钗之首",
                                                family: "林",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        id: "jia_tanchun",
                                        name: "贾探春",
                                        title: "贾府四春之一",
                                        avatar: "https://img.zhaoyy.cn/douban/87honglou/贾探春-东方闻樱.jpg",
                                        description: "贾政庶女，金陵十二钗之一，精明能干",
                                        family: "贾",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    fourFamilies: {
        jia: {
            name: "贾家",
            description: "金陵四大家族之首，开国功臣之后，世袭爵位",
            members: ["贾演", "贾源", "贾代化", "贾代善", "贾敬", "贾赦", "贾政", "贾珍", "贾琏", "贾珠", "贾宝玉", "贾蓉", "贾元春", "贾迎春", "贾探春", "贾惜春"]
        },
        shi: {
            name: "史家",
            description: "金陵世勋史侯家，贾母娘家",
            members: ["贾母"]
        },
        wang: {
            name: "王家",
            description: "都太尉统制县伯王公之后，王夫人、王熙凤娘家",
            members: ["王夫人", "王熙凤"]
        },
        xue: {
            name: "薛家",
            description: "紫薇舍人薛公之后，皇商世家",
            members: ["薛宝钗", "薛姨妈"]
        }
    },
    xueFamily: [
        {
            id: "xue_yima",
            name: "薛姨妈",
            title: "薛夫人",
            avatar: null,
            description: "王夫人之妹，薛宝钗、薛蟠之母",
            family: "薛",
            children: [
                {
                    id: "xue_baochai",
                    name: "薛宝钗",
                    title: "薛大小姐",
                    avatar: "https://img.zhaoyy.cn/douban/87honglou/薛宝钗-张莉.jpg",
                    description: "薛姨妈之女，金陵十二钗之一，后与宝玉成婚",
                    family: "薛",
                    children: []
                },
                {
                    id: "xue_pan",
                    name: "薛蟠",
                    title: "呆霸王",
                    avatar: "https://img.zhaoyy.cn/douban/87honglou/薛蟠-陈洪海.jpg",
                    description: "薛姨妈之子，薛宝钗之兄，纨绔子弟",
                    family: "薛",
                    children: [
                        {
                            id: "xia_jingui",
                            name: "夏金桂",
                            title: "薛蟠之妻",
                            avatar: "https://img.zhaoyy.cn/douban/87honglou/夏金桂-杨晓玲.jpg",
                            description: "薛蟠正妻，性格泼辣",
                            family: "夏",
                            children: []
                        },
                        {
                            id: "xiang_ling",
                            name: "香菱",
                            title: "💔 薛蟠之妾",
                            avatar: "https://img.zhaoyy.cn/douban/87honglou/香菱-陈剑月.jpg",
                            description: "甄士隐之女，薛蟠买为妾，本名英莲",
                            family: "甄",
                            children: []
                        }
                    ]
                }
            ]
        }
    ],
    relationships: [
        { from: "shi_taijun", to: "jia_daishan", relation: "夫妻" },
        { from: "jia_daishan", to: "jia_she", relation: "父子" },
        { from: "jia_daishan", to: "jia_zheng", relation: "父子" },
        { from: "jia_she", to: "xing_furen", relation: "夫妻" },
        { from: "jia_she", to: "jia_lian", relation: "父子" },
        { from: "jia_she", to: "jia_yinchun", relation: "父女" },
        { from: "jia_lian", to: "wang_xifeng", relation: "夫妻" },
        { from: "jia_lian", to: "ping_er", relation: "妾" },
        { from: "jia_lian", to: "qiu_tong", relation: "妾" },
        { from: "jia_zheng", to: "wang_furen", relation: "夫妻" },
        { from: "jia_zheng", to: "zhao_poniang", relation: "妾" },
        { from: "jia_zheng", to: "jia_yuanchun", relation: "父女" },
        { from: "jia_zheng", to: "jia_zhu", relation: "父子" },
        { from: "jia_zheng", to: "jia_baoyu", relation: "父子" },
        { from: "jia_zheng", to: "jia_tanchun", relation: "父女" },
        { from: "jia_yan", to: "jia_daihua", relation: "父子" },
        { from: "jia_daihua", to: "jia_jing", relation: "父子" },
        { from: "jia_jing", to: "jia_zhen", relation: "父子" },
        { from: "jia_jing", to: "jia_xichun", relation: "父女" },
        { from: "jia_zhen", to: "you_shi", relation: "夫妻" },
        { from: "jia_zhen", to: "jia_rong", relation: "父子" },
        { from: "jia_zhen", to: "you_ernv", relation: "妻妹" },
        { from: "jia_zhen", to: "you_sanjie", relation: "妻妹" },
        { from: "jia_rong", to: "qin_keqing", relation: "夫妻" },
        { from: "jia_zhu", to: "li_wan", relation: "夫妻" },
        { from: "li_wan", to: "jia_lan", relation: "母子" },
        { from: "zhao_poniang", to: "jia_huan", relation: "母子" },
        { from: "zhao_poniang", to: "jia_tanchun", relation: "母女" },
        { from: "wang_furen", to: "xue_yima", relation: "姐妹" },
        { from: "xue_yima", to: "xue_baochai", relation: "母女" },
        { from: "xue_yima", to: "xue_pan", relation: "母子" },
        { from: "xue_pan", to: "xia_jingui", relation: "夫妻" },
        { from: "xue_pan", to: "xiang_ling", relation: "妾" },
        { from: "xue_baochai", to: "jia_baoyu", relation: "表兄妹/夫妻" },
        { from: "lin_daiyu", to: "jia_baoyu", relation: "姑表兄妹" },
        { from: "wang_furen", to: "wang_xifeng", relation: "姑侄" }
    ]
};

const actorImages = {
    "贾宝玉-欧阳奋强": "https://img.zhaoyy.cn/douban/87honglou/贾宝玉-欧阳奋强.jpg",
    "林黛玉-陈晓旭": "https://img.zhaoyy.cn/douban/87honglou/林黛玉-陈晓旭.jpg",
    "薛宝钗-张莉": "https://img.zhaoyy.cn/douban/87honglou/薛宝钗-张莉.jpg",
    "王熙凤-邓婕": "https://img.zhaoyy.cn/douban/87honglou/王熙凤-邓婕.jpg",
    "贾母-李婷": "https://img.zhaoyy.cn/douban/87honglou/贾母-李婷.jpg",
    "王夫人-周贤珍": "https://img.zhaoyy.cn/douban/87honglou/王夫人-周贤珍.jpg",
    "贾元春-成梅": "https://img.zhaoyy.cn/douban/87honglou/贾元春-成梅.jpg",
    "贾迎春-金莉莉": "https://img.zhaoyy.cn/douban/87honglou/贾迎春-金莉莉.jpg",
    "贾探春-东方闻樱": "https://img.zhaoyy.cn/douban/87honglou/贾探春-东方闻樱.jpg",
    "贾惜春-胡泽红": "https://img.zhaoyy.cn/douban/87honglou/贾惜春-胡泽红.jpg",
    "贾珍-李志新": "https://img.zhaoyy.cn/douban/87honglou/贾珍-李志新.jpg",
    "贾蓉-杨俊勇": "https://img.zhaoyy.cn/douban/87honglou/贾蓉-杨俊勇.jpg",
    "贾赦-李颉": "https://img.zhaoyy.cn/douban/87honglou/贾赦-李颉.jpg",
    "贾琏-高宏亮": "https://img.zhaoyy.cn/douban/87honglou/贾琏-高宏亮.jpg",
    "贾政-任大惠": "https://img.zhaoyy.cn/douban/87honglou/贾政-任大惠.jpg",
    "史湘云-郭霄珍": "https://img.zhaoyy.cn/douban/87honglou/史湘云-郭霄珍.jpg",
    "袭人-袁枚": "https://img.zhaoyy.cn/douban/87honglou/袭人-袁枚.jpg",
    "晴雯-安雯": "https://img.zhaoyy.cn/douban/87honglou/晴雯-安雯.jpg",
    "紫鹃-徐丽霞": "https://img.zhaoyy.cn/douban/87honglou/紫鹃-徐丽霞.jpg",
    "秦可卿-张蕾": "https://img.zhaoyy.cn/douban/87honglou/秦可卿-张蕾.jpg",
    "平儿-沈琳": "https://img.zhaoyy.cn/douban/87honglou/平儿-沈琳.jpg",
    "尤三姐-周月": "https://img.zhaoyy.cn/douban/87honglou/尤三姐-周月.jpg",
    "尤二姐-张明明": "https://img.zhaoyy.cn/douban/87honglou/尤二姐-张明明.jpg",
    "尤氏-王贵娥": "https://img.zhaoyy.cn/douban/87honglou/尤氏-王贵娥.jpg",
    "妙玉-姬玉": "https://img.zhaoyy.cn/douban/87honglou/妙玉-姬玉.jpg",
    "薛蟠-陈洪海": "https://img.zhaoyy.cn/douban/87honglou/薛蟠-陈洪海.jpg",
    "夏金桂-杨晓玲": "https://img.zhaoyy.cn/douban/87honglou/夏金桂-杨晓玲.jpg",
    "香菱-陈剑月": "https://img.zhaoyy.cn/douban/87honglou/香菱-陈剑月.jpg",
    "李纨-孙梦泉": "https://img.zhaoyy.cn/douban/87honglou/李纨-孙梦泉.jpg",
    "鸳鸯-郑铮": "https://img.zhaoyy.cn/douban/87honglou/鸳鸯-郑铮.jpg",
    "邢夫人-夏明辉": "https://img.zhaoyy.cn/douban/87honglou/邢夫人-夏明辉.jpg",
    "秋桐-沈璐": "https://img.zhaoyy.cn/douban/87honglou/秋桐-沈璐.jpg",
    "玉钏-于洁": "https://img.zhaoyy.cn/douban/87honglou/玉钏-于洁.jpg"
};