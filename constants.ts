import { Flight, Accommodation, DayPlan, ChecklistItem, GroupType, ShoppingItem } from './types';

export const FLIGHTS: Flight[] = [
  {
    id: 'f1',
    date: '12/3 (三)',
    type: 'Departure',
    route: 'TPE (桃園) ➔ CTS (新千歲)',
    time: '08:35 - 13:15',
    terminal: 'T2 出發 / T1 抵達',
    passengers: '全員',
    group: GroupType.ALL
  },
  {
    id: 'f2',
    date: '12/8 (一)',
    type: 'Return',
    route: 'CTS (新千歲) ➔ TPE (桃園)',
    time: '14:40 - 18:20',
    terminal: 'T1 出發 / T2 抵達',
    passengers: '耀云一家',
    group: GroupType.A
  },
  {
    id: 'f3',
    date: '12/9 (二)',
    type: 'Return',
    route: 'CTS (新千歲) ➔ TPE (桃園)',
    time: '14:40 - 18:20',
    terminal: 'T1 出發 / T2 抵達',
    passengers: '媽媽 & 耀庭',
    group: GroupType.B
  }
];

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: 'h1',
    name: 'HOUSE HOTEL 友達 (Tomodachi)',
    dates: '12/3 - 12/8 (5晚)',
    location: '札幌市區 (請確認具體地址)',
    note: '主要住宿點',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=HOUSE+HOTEL+Tomodachi+Sapporo'
  },
  {
    id: 'h2',
    name: '新民宿 (待定)',
    dates: '12/8 - 12/9 (1晚)',
    location: '札幌市區',
    note: 'Group B 專用，12/8 上午 11:00 切換',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sapporo+Station'
  }
];

export const ITINERARY: DayPlan[] = [
  {
    day: 1,
    date: '12/3 (三)',
    title: '抵達札幌 & 暖身補給',
    items: [
      { 
        time: '13:15', 
        title: '抵達新千歲機場', 
        description: '入境後搭乘 JR 快速 Airport 號至札幌站，轉車前往民宿。',
        mapUrl: 'https://maps.app.goo.gl/OfficialNewChitoseAirportLink'
      },
      { 
        time: '16:00', 
        title: '民宿 Check-in', 
        description: '入住 HOUSE HOTEL 友達，放行李、休息。',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=HOUSE+HOTEL+Tomodachi+Sapporo'
      },
      { 
        time: '16:30', 
        title: '札幌啤酒博物館', 
        description: '參觀紅磚建築、拍照留念。', 
        isHighlight: true,
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sapporo+Beer+Museum'
      },
      { 
        time: '17:30', 
        title: 'Ario 札幌商場購物', 
        description: 'UNIQLO 購買外套、發熱衣。',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ario+Sapporo'
      },
      { 
        time: '晚餐', 
        title: '餃子の王将 (Ario店)', 
        description: '日式中華料理，適合家庭。', 
        tags: ['美食'],
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Gyoza+no+Ohsho+Ario+Sapporo'
      },
      { 
        time: '19:30', 
        title: '生活採買', 
        description: '超市(早餐水果)、藥妝(奶粉尿布)、運動用品。' 
      },
    ]
  },
  {
    day: 2,
    date: '12/4 (四)',
    title: '札幌市區經典巡禮',
    items: [
      { 
        time: '09:30', 
        title: '二條市場', 
        description: '感受海鮮市場活力，哈密瓜、烤扇貝。', 
        tags: ['美食'],
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nijo+Market'
      },
      { 
        time: '11:00', 
        title: '大通公園 & 札幌計時台', 
        description: '札幌地標散步拍照。',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sapporo+Clock+Tower'
      },
      { 
        time: '12:30', 
        title: '成吉思汗烤肉', 
        description: '推薦：達摩 或 松尾。', 
        tags: ['必吃'],
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Genghis+Khan+Daruma'
      },
      { 
        time: '14:30', 
        title: '狸小路商店街', 
        description: '逛街、藥妝、伴手禮採買。',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tanukikoji+Shopping+Street'
      },
      { 
        time: '18:30', 
        title: '海膽丼専門店 凪～nagi', 
        description: '位於狸小路，享受新鮮海膽。', 
        tags: ['美食'],
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Uni+Murakami+Sapporo'
      },
    ]
  },
  {
    day: 3,
    date: '12/5 (五)',
    title: '雪國童話・包車一日遊',
    items: [
      { time: '08:30', title: '民宿出發', description: '包車接送開始一日遊。' },
      { 
        time: '11:00', 
        title: '旭山動物園', 
        description: '觀賞企鵝散步、北極熊、海豹。', 
        isHighlight: true,
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Asahiyama+Zoo'
      },
      { 
        time: '14:30', 
        title: '白鬚瀑布', 
        description: '欣賞藍色冰瀑與霧淞絕景。', 
        isHighlight: true,
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shirahige+Waterfall'
      },
      { 
        time: '16:00', 
        title: '精靈露台 (Ningle Terrace)', 
        description: '森林小木屋，點燈後如童話世界。',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ningle+Terrace'
      },
      { time: '19:00', title: '返回札幌市區', description: '結束包車行程。' },
    ]
  },
  {
    day: 4,
    date: '12/6 (六)',
    title: '小樽懷舊之旅 (JR火車)',
    items: [
      { time: '09:00', title: '前往小樽', description: '札幌站搭乘 JR 函館本線前往小樽站。' },
      { 
        time: '10:00', 
        title: '三角市場', 
        description: '早午餐：海鮮丼飯。體力好可步行至鱗友朝市。', 
        tags: ['美食'],
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sankaku+Market+Otaru'
      },
      { 
        time: '12:30', 
        title: '小樽運河 & 堺町通', 
        description: '北菓樓、六花亭、LeTAO甜點、小樽音樂盒堂。', 
        isHighlight: true,
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Otaru+Canal'
      },
      { time: '傍晚', title: '返回札幌', description: '搭乘 JR 返回市區休息。' },
    ]
  },
  {
    day: 5,
    date: '12/7 (日)',
    title: '札幌慢活 & 頂級自助餐',
    items: [
      { 
        time: '白天', 
        title: '市區自由行', 
        description: '推薦：北海道神宮、北海道大學，或狸小路補貨。',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hokkaido+Jingu'
      },
      { 
        time: '18:00', 
        title: '札幌鶴雅自助餐廳', 
        description: '地點：紅磚露台 (Akarenga Terrace)。需預約。', 
        tags: ['大餐', '預約'],
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tsuruga+Buffet+Dining+Sapporo'
      },
    ]
  },
  {
    day: 6,
    date: '12/8 (一)',
    title: '分道揚鑣 & 白色戀人',
    items: [
      { time: '11:00', title: '退房 & 分開', description: '辦理退房，行程分開。' },
    ],
    splitPlan: {
      groupA: [
        { time: '11:30', title: '前往機場', description: '搭乘 JR 或巴士前往新千歲機場。' },
        { time: '14:40', title: '飛機起飛', description: '回程 TPE。' },
      ],
      groupB: [
        { time: '11:30', title: '寄放行李', description: '前往新民宿寄放行李。' },
        { 
          time: '13:30', 
          title: '白色戀人公園', 
          description: '參觀巧克力工廠、歐風庭園。', 
          isHighlight: true,
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shiroi+Koibito+Park'
        },
        { 
          time: '18:30', 
          title: '燒肉 十太 (Jutta)', 
          description: '晚餐享用燒肉。', 
          tags: ['美食'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Yakiniku+Jutta+Sapporo'
        },
      ]
    }
  },
  {
    day: 7,
    date: '12/9 (二)',
    title: '最後巡禮 & 返家 (Group B)',
    items: [
      { time: '早上', title: '最後整理', description: '民宿附近早餐、整理行李。' },
      { time: '11:30', title: '前往機場', description: '前往新千歲機場 (T1)。' },
      { 
        time: '12:40', 
        title: '機場最後採買', 
        description: '多啦A夢樂園、拉麵道場、伴手禮。',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=New+Chitose+Airport'
      },
      { time: '14:40', title: '飛機起飛', description: 'Group B 回程。' },
      { time: '18:20', title: '抵達桃園', description: '平安返家。' },
    ]
  }
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 'c1', text: '護照 (效期需6個月以上)', category: '重要文件' },
  { id: 'c2', text: 'Visit Japan Web QR Code', category: '重要文件' },
  { id: 'c3', text: '網卡/漫遊已開通', category: '通訊' },
  { id: 'c4', text: '日幣現金 (市場/老店用)', category: '財務' },
  { id: 'c5', text: '防滑鞋/靴 (重要！)', category: '衣物裝備' },
  { id: 'c6', text: '保濕用品 (乳液、護唇膏)', category: '衣物裝備' },
  { id: 'c7', text: '嬰幼兒備品 (奶粉/尿布)', category: '兒童' },
  { id: 'c8', text: '推車雨罩/防寒罩', category: '兒童' },
  { id: 'c9', text: '常備藥品', category: '健康' },
];

export const SHOPPING_ITEMS: ShoppingItem[] = [
  // 實用補給品
  {
    category: 'supplies',
    name: '極暖/特級極暖 (HeatTech)',
    brand: 'UNIQLO',
    location: 'Ario 札幌商場 (Day 1)',
    note: '室內禦寒打底必備，可趁 Day 1 在 Ario 札幌商場採購。'
  },
  {
    category: 'supplies',
    name: '防水防風手套',
    note: '玩雪或在戶外停留時非常重要。'
  },
  {
    category: 'supplies',
    name: '嬰幼兒奶粉 / 尿布',
    brand: 'Merries / Moony',
    location: '藥妝店',
    note: '通常更便宜且好用。在藥妝店一次採買足夠份量。'
  },
  {
    category: 'supplies',
    name: '保濕乳霜 / 護手霜',
    note: '飯店暖氣強烈，皮膚容易乾燥，需加強保濕。'
  },
  {
    category: 'supplies',
    name: '蒸氣眼罩',
    note: '長途飛行與旅遊放鬆必備。'
  },
  {
    category: 'supplies',
    name: '痠痛貼布',
    note: '旅遊期間緩解疲勞。'
  },
  // 伴手禮
  {
    category: 'souvenirs',
    name: '雙層乳酪蛋糕',
    brand: 'LeTAO',
    location: '小樽堺町通 / 機場',
    note: '經典必吃，口感入口即化。'
  },
  {
    category: 'souvenirs',
    name: '白色戀人餅乾',
    brand: 'ISHIYA',
    location: '白色戀人公園 / 機場',
    note: '經典中的經典，機場貨源充足。'
  },
  {
    category: 'souvenirs',
    name: '六花亭點心',
    brand: '六花亭',
    location: '小樽 / 機場 / 市區',
    note: '葡萄奶油夾心餅、草莓巧克力等，種類多樣。'
  },
  {
    category: 'souvenirs',
    name: '三色年輪蛋糕',
    brand: '北菓樓',
    location: '小樽 / 機場 / 市區',
    note: '夢不思議泡芙、妖精之森年輪蛋糕。'
  },
  {
    category: 'souvenirs',
    name: '生巧克力',
    brand: "ROYCE'",
    location: '機場 / 百貨',
    note: '入境後在機場購買，有保冷包裝，保持新鮮。'
  },
  {
    category: 'souvenirs',
    name: '薯條三兄弟',
    brand: 'Calbee',
    location: '機場 / 部分超市',
    note: '鹹食伴手禮首選，在機場免稅店大量採購。'
  }
];