type Coffee = {
  title: string;
  text: string;
  price: number;
  img: string;
};

type TabContent = {
  id: number;
  price: number;
  title: string;
  text: string;
  sort: string;
  weight: string;
  img: string;
};

export const coffee: Array<Coffee> = [
  {
    title: 'REVO Origin',
    price: 139.0,
    text: 'hậu ngọt, ít đắng, vị chua dâu',
    img: '/prointeractive/images/origin.png',
  },
  {
    title: 'REVO Morning',
    price: 99.0,
    text: 'đắng, hậu ngọt, hương hoa',
    img: '/prointeractive/images/morning.png',
  },
  {
    title: 'REVO F',
    price: 89.0,
    text: 'hậu ngọt, ít đắng hậu ngọt, ít đắng',
    img: '/prointeractive/images/origin.png',
  },
  {
    title: 'REVO Đậm Đà',
    price: 75.0,
    text: 'đậm đà, đắng, truyền thống',
    img: '/prointeractive/images/DamDa.png',
  },

  {
    title: 'REVO Morning',
    price: 99.0,
    text: 'đắng, hậu ngọt, hương hoa',
    img: '/prointeractive/images/morning.png',
  },

  {
    title: 'REVO Everyday',
    price: 85.0,
    text: 'cân bằng, hậu đắng, vị chocolate ',
    img: '/prointeractive/images/everyday.png',
  },
];

export const tabContent: Array<TabContent> = [
  {
    id: 1,
    price: 285,
    title: 'Giftset Cà phê phin Việt Nam',
    text:
      'Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.',
    sort: 'Fine Robusta Blend',
    weight: '700 - 800m',
    img: '/prointeractive/images/tab1.png',
  },
  {
    id: 2,
    price: 290,
    title: '2Giftset Cà phê phin Việt Nam',
    text:
      '2Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.',
    sort: '2Fine Robusta Blend',
    weight: '700 - 800m',
    img: '/prointeractive/images/tab1.png',
  },
  {
    id: 3,
    price: 295,
    title: '3Giftset Cà phê phin Việt Nam',
    text:
      '2Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.',
    sort: '2Fine Robusta Blend',
    weight: '700 - 800m',
    img: '/prointeractive/images/tab1.png',
  },
];
