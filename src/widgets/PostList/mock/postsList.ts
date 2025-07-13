import type { IPost } from '@/entities/Post';

export const POSTS_LIST: IPost[] = [
  {
    id: '1',
    title: 'Пост о горный водопад',
    imgUrl: 'https://images.unsplash.com/photo-1503264116251-35a269479413',
    imgAlt: 'Горный водопад',
    text: 'Это место идеально для отдыха и медитации. Горный водопад поражает своей мощью и красотой. Звуки падающей воды создают успокаивающую атмосферу. Природа вокруг завораживает своей силой.',
    author: {
      userId: '4',
      name: 'Елена Кузнецова',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      posts: [1, 3, 4],
      albums: [104],
      todos: [204]
    }
  },
  {
    id: '2',
    title: 'Пост о пустыня и дюны',
    imgUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    imgAlt: 'Пустыня и дюны',
    text: 'Песок меняет форму под воздействием ветра. Идеальное место для приключений и исследований. Здесь можно почувствовать одиночество и величие природы. Пустыня и дюны создают уникальный и суровый пейзаж. Каждый закат в пустыне — это настоящее шоу красок.',
    author: {
      userId: '5',
      name: 'Дмитрий Васильев',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      posts: [2, 7, 8, 12],
      albums: [105],
      todos: [205]
    }
  },
  {
    id: '3',
    title: 'Пост о морской маяк',
    imgUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    imgAlt: 'Морской маяк',
    text: 'Морской маяк стоит на страже побережья и помогает морякам. Его свет виден издалека и служит ориентиром. Это символ надежды и безопасности.',
    author: {
      userId: '4',
      name: 'Елена Кузнецова',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      posts: [1, 3, 4],
      albums: [104],
      todos: [204]
    }
  },
  {
    id: '4',
    title: 'Пост о океан и волны',
    imgUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    imgAlt: 'Океан и волны',
    text: 'Идеальное место для серфинга и отдыха. Песок и соленый воздух наполняют энергией. Океан и волны создают мощное и завораживающее зрелище. Здесь можно почувствовать силу природы и свободу. Каждая волна уникальна и неповторима.',
    author: {
      userId: '4',
      name: 'Елена Кузнецова',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      posts: [1, 3, 4],
      albums: [104],
      todos: [204]
    }
  },
  {
    id: '5',
    title: 'Пост о птицы в небе',
    imgUrl: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63',
    imgAlt: 'Птицы в небе',
    text: 'Птицы в небе создают красивый и живой рисунок. Каждая птица уникальна в своем полете. Их полет символизирует свободу и легкость.',
    author: {
      userId: '2',
      name: 'Мария Петрова',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      posts: [5, 11, 13, 14],
      albums: [102],
      todos: [202]
    }
  },
  {
    id: '6',
    title: 'Пост о лесная тропа',
    imgUrl: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
    imgAlt: 'Лесная тропа',
    text: 'Каждый шаг по этой тропе наполняет энергией. Звуки природы помогают расслабиться и забыть о суете. Лесная тропа ведет в мир тишины и спокойствия. Здесь можно встретить множество животных и птиц. Идеальное место для прогулок и медитации.',
    author: {
      userId: '3',
      name: 'Иван Смирнов',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      posts: [6, 9, 15],
      albums: [103],
      todos: [203]
    }
  },
  {
    id: '7',
    title: 'Пост о полевые цветы',
    imgUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
    imgAlt: 'Полевые цветы',
    text: 'Их аромат наполняет воздух свежестью и легкостью. Идеальное место для фотосессий и отдыха. Они символизируют красоту и хрупкость природы. Полевые цветы радуют глаз своей яркостью и разнообразием.',
    author: {
      userId: '5',
      name: 'Дмитрий Васильев',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      posts: [2, 7, 8, 12],
      albums: [105],
      todos: [205]
    }
  },
  {
    id: '8',
    title: 'Пост о пустыня и дюны',
    imgUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    imgAlt: 'Пустыня и дюны',
    text: 'Песок меняет форму под воздействием ветра. Пустыня и дюны создают уникальный и суровый пейзаж. Здесь можно почувствовать одиночество и величие природы.',
    author: {
      userId: '5',
      name: 'Дмитрий Васильев',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      posts: [2, 7, 8, 12],
      albums: [105],
      todos: [205]
    }
  },
  {
    id: '9',
    title: 'Пост о река в горах',
    imgUrl: 'https://images.unsplash.com/photo-1468071174046-657d9d351a40',
    imgAlt: 'Река в горах',
    text: 'Вода здесь кристально прозрачная и холодная. Природа вокруг завораживает своей красотой. Звуки воды создают успокаивающую атмосферу. Река в горах течет быстро и чисто. Это место идеально подходит для рыбалки и отдыха.',
    author: {
      userId: '3',
      name: 'Иван Смирнов',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      posts: [6, 9, 15],
      albums: [103],
      todos: [203]
    }
  },
  {
    id: '10',
    title: 'Пост о городская улица ночью',
    imgUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
    imgAlt: 'Городская улица ночью',
    text: 'Прохожие спешат по своим делам, создавая особую атмосферу. Город никогда не спит, и это чувствуется в каждом уголке. Ночная улица города наполнена огнями и жизнью. Здесь можно увидеть контрасты современности и истории.',
    author: {
      userId: '1',
      name: 'Алексей Иванов',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      posts: [10],
      albums: [101],
      todos: [201]
    }
  },
  {
    id: '11',
    title: 'Пост о лесная тропа',
    imgUrl: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
    imgAlt: 'Лесная тропа',
    text: 'Звуки природы помогают расслабиться и забыть о суете. Идеальное место для прогулок и медитации. Каждый шаг по этой тропе наполняет энергией.',
    author: {
      userId: '2',
      name: 'Мария Петрова',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      posts: [5, 11, 13, 14],
      albums: [102],
      todos: [202]
    }
  },
  {
    id: '12',
    title: 'Пост о пустыня и дюны',
    imgUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    imgAlt: 'Пустыня и дюны',
    text: 'Здесь можно почувствовать одиночество и величие природы. Песок меняет форму под воздействием ветра. Идеальное место для приключений и исследований. Пустыня и дюны создают уникальный и суровый пейзаж.',
    author: {
      userId: '5',
      name: 'Дмитрий Васильев',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      posts: [2, 7, 8, 12],
      albums: [105],
      todos: [205]
    }
  },
  {
    id: '13',
    title: 'Пост о городская улица ночью',
    imgUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
    imgAlt: 'Городская улица ночью',
    text: 'Прохожие спешат по своим делам, создавая особую атмосферу. Здесь можно увидеть контрасты современности и истории. Идеальное место для ночных прогулок и фотографий.',
    author: {
      userId: '2',
      name: 'Мария Петрова',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      posts: [5, 11, 13, 14],
      albums: [102],
      todos: [202]
    }
  },
  {
    id: '14',
    title: 'Пост о океан и волны',
    imgUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    imgAlt: 'Океан и волны',
    text: 'Океан и волны создают мощное и завораживающее зрелище. Здесь можно почувствовать силу природы и свободу. Идеальное место для серфинга и отдыха. Песок и соленый воздух наполняют энергией.',
    author: {
      userId: '2',
      name: 'Мария Петрова',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      posts: [5, 11, 13, 14],
      albums: [102],
      todos: [202]
    }
  },
  {
    id: '15',
    title: 'Пост о городской парк весной',
    imgUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    imgAlt: 'Городской парк весной',
    text: 'Городской парк весной наполняется жизнью и красками. Каждый уголок парка радует глаз. Идеальное место для отдыха от городской суеты.',
    author: {
      userId: '3',
      name: 'Иван Смирнов',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      posts: [6, 9, 15],
      albums: [103],
      todos: [203]
    }
  }
]

