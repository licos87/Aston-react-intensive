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
      albums: [
        { // Альбом 1 для автора 4
          id: 1001,
          title: 'Название альбома',
          photo: [
            {id: 1, url: 'https://picsum.photos/id/101/200/150'},
            {id: 2, url: 'https://picsum.photos/id/102/200/150'},
            {id: 3, url: 'https://picsum.photos/id/103/200/150'},
            {id: 4, url: 'https://picsum.photos/id/104/200/150'},
            {id: 5, url: 'https://picsum.photos/id/105/200/150'}
          ]
        },
        { // Альбом 2 для автора 4
          id: 1002,
          title: 'Название альбома',
          photo: [
            {id: 6, url: 'https://picsum.photos/id/106/200/150'},
            {id: 7, url: 'https://picsum.photos/id/107/200/150'},
            {id: 8, url: 'https://picsum.photos/id/108/200/150'},
            {id: 9, url: 'https://picsum.photos/id/109/200/150'},
            {id: 10, url: 'https://picsum.photos/id/110/200/150'}
          ]
        },
        { // Альбом 3 для автора 4
          id: 1003,
          title: 'Название альбома',
          photo: [
            {id: 11, url: 'https://picsum.photos/id/111/200/150'},
            {id: 12, url: 'https://picsum.photos/id/112/200/150'},
            {id: 13, url: 'https://picsum.photos/id/113/200/150'},
            {id: 14, url: 'https://picsum.photos/id/114/200/150'},
            {id: 15, url: 'https://picsum.photos/id/115/200/150'}
          ]
        },
        { // Альбом 4 для автора 4
          id: 1004,
          title: 'Название альбома',
          photo: [
            {id: 16, url: 'https://picsum.photos/id/116/200/150'},
            {id: 17, url: 'https://picsum.photos/id/117/200/150'},
            {id: 18, url: 'https://picsum.photos/id/118/200/150'},
            {id: 19, url: 'https://picsum.photos/id/119/200/150'},
            {id: 20, url: 'https://picsum.photos/id/120/200/150'}
          ]
        },
        { // Альбом 5 для автора 4
          id: 1005,
          title: 'Название альбома',
          photo: [
            {id: 21, url: 'https://picsum.photos/id/121/200/150'},
            {id: 22, url: 'https://picsum.photos/id/122/200/150'},
            {id: 23, url: 'https://picsum.photos/id/123/200/150'},
            {id: 24, url: 'https://picsum.photos/id/124/200/150'},
            {id: 25, url: 'https://picsum.photos/id/125/200/150'}
          ]
        }
      ],
      todos: [
        'Купить подарки',
        'Записаться на курсы',
        'Позвонить друзьям',
        'Закончить проект',
        'Прочитать книгу'
      ]
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
      albums: [
        { // Альбом 1 для автора 5
          id: 2001,
          title: 'Название альбома',
          photo: [
            {id: 26, url: 'https://picsum.photos/id/126/200/150'},
            {id: 27, url: 'https://picsum.photos/id/127/200/150'},
            {id: 28, url: 'https://picsum.photos/id/128/200/150'},
            {id: 29, url: 'https://picsum.photos/id/129/200/150'},
            {id: 30, url: 'https://picsum.photos/id/130/200/150'}
          ]
        },
        { // Альбом 2 для автора 5
          id: 2002,
          title: 'Название альбома',
          photo: [
            {id: 31, url: 'https://picsum.photos/id/131/200/150'},
            {id: 32, url: 'https://picsum.photos/id/132/200/150'},
            {id: 33, url: 'https://picsum.photos/id/133/200/150'},
            {id: 34, url: 'https://picsum.photos/id/134/200/150'},
            {id: 35, url: 'https://picsum.photos/id/135/200/150'}
          ]
        },
        { // Альбом 3 для автора 5
          id: 2003,
          title: 'Название альбома',
          photo: [
            {id: 36, url: 'https://picsum.photos/id/136/200/150'},
            {id: 37, url: 'https://picsum.photos/id/137/200/150'},
            {id: 38, url: 'https://picsum.photos/id/138/200/150'},
            {id: 39, url: 'https://picsum.photos/id/139/200/150'},
            {id: 40, url: 'https://picsum.photos/id/140/200/150'}
          ]
        },
        { // Альбом 4 для автора 5
          id: 2004,
          title: 'Название альбома',
          photo: [
            {id: 41, url: 'https://picsum.photos/id/141/200/150'},
            {id: 42, url: 'https://picsum.photos/id/142/200/150'},
            {id: 43, url: 'https://picsum.photos/id/143/200/150'},
            {id: 44, url: 'https://picsum.photos/id/144/200/150'},
            {id: 45, url: 'https://picsum.photos/id/145/200/150'}
          ]
        },
        { // Альбом 5 для автора 5
          id: 2005,
          title: 'Название альбома',
          photo: [
            {id: 46, url: 'https://picsum.photos/id/146/200/150'},
            {id: 47, url: 'https://picsum.photos/id/147/200/150'},
            {id: 48, url: 'https://picsum.photos/id/148/200/150'},
            {id: 49, url: 'https://picsum.photos/id/149/200/150'},
            {id: 50, url: 'https://picsum.photos/id/150/200/150'}
          ]
        }
      ],
      todos: [
        'Подготовить отчет',
        'Встреча с командой',
        'Отправить электронную почту',
        'Сделать презентацию',
        'Проверить статистику'
      ]
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
      albums: [
        { // Альбом 1 для автора 4 (продолжение нумерации ID фотографий)
          id: 1006,
          title: 'Название альбома',
          photo: [
            {id: 51, url: 'https://picsum.photos/id/151/200/150'},
            {id: 52, url: 'https://picsum.photos/id/152/200/150'},
            {id: 53, url: 'https://picsum.photos/id/153/200/150'},
            {id: 54, url: 'https://picsum.photos/id/154/200/150'},
            {id: 55, url: 'https://picsum.photos/id/155/200/150'}
          ]
        },
        { // Альбом 2 для автора 4
          id: 1007,
          title: 'Название альбома',
          photo: [
            {id: 56, url: 'https://picsum.photos/id/156/200/150'},
            {id: 57, url: 'https://picsum.photos/id/157/200/150'},
            {id: 58, url: 'https://picsum.photos/id/158/200/150'},
            {id: 59, url: 'https://picsum.photos/id/159/200/150'},
            {id: 60, url: 'https://picsum.photos/id/160/200/150'}
          ]
        },
        { // Альбом 3 для автора 4
          id: 1008,
          title: 'Название альбома',
          photo: [
            {id: 61, url: 'https://picsum.photos/id/161/200/150'},
            {id: 62, url: 'https://picsum.photos/id/162/200/150'},
            {id: 63, url: 'https://picsum.photos/id/163/200/150'},
            {id: 64, url: 'https://picsum.photos/id/164/200/150'},
            {id: 65, url: 'https://picsum.photos/id/165/200/150'}
          ]
        },
        { // Альбом 4 для автора 4
          id: 1009,
          title: 'Название альбома',
          photo: [
            {id: 66, url: 'https://picsum.photos/id/166/200/150'},
            {id: 67, url: 'https://picsum.photos/id/167/200/150'},
            {id: 68, url: 'https://picsum.photos/id/168/200/150'},
            {id: 69, url: 'https://picsum.photos/id/169/200/150'},
            {id: 70, url: 'https://picsum.photos/id/170/200/150'}
          ]
        },
        { // Альбом 5 для автора 4
          id: 1010,
          title: 'Название альбома',
          photo: [
            {id: 71, url: 'https://picsum.photos/id/171/200/150'},
            {id: 72, url: 'https://picsum.photos/id/172/200/150'},
            {id: 73, url: 'https://picsum.photos/id/173/200/150'},
            {id: 74, url: 'https://picsum.photos/id/174/200/150'},
            {id: 75, url: 'https://picsum.photos/id/175/200/150'}
          ]
        }
      ],
      todos: [
        'Организовать встречу',
        'Обновить базу данных',
        'Ответить на письма',
        'Провести анализ',
        'Запустить тесты'
      ]
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
      albums: [
        { // Альбом 1 для автора 4
          id: 1011,
          title: 'Название альбома',
          photo: [
            {id: 76, url: 'https://picsum.photos/id/176/200/150'},
            {id: 77, url: 'https://picsum.photos/id/177/200/150'},
            {id: 78, url: 'https://picsum.photos/id/178/200/150'},
            {id: 79, url: 'https://picsum.photos/id/179/200/150'},
            {id: 80, url: 'https://picsum.photos/id/180/200/150'}
          ]
        },
        { // Альбом 2 для автора 4
          id: 1012,
          title: 'Название альбома',
          photo: [
            {id: 81, url: 'https://picsum.photos/id/181/200/150'},
            {id: 82, url: 'https://picsum.photos/id/182/200/150'},
            {id: 83, url: 'https://picsum.photos/id/183/200/150'},
            {id: 84, url: 'https://picsum.photos/id/184/200/150'},
            {id: 85, url: 'https://picsum.photos/id/185/200/150'}
          ]
        },
        { // Альбом 3 для автора 4
          id: 1013,
          title: 'Название альбома',
          photo: [
            {id: 86, url: 'https://picsum.photos/id/186/200/150'},
            {id: 87, url: 'https://picsum.photos/id/187/200/150'},
            {id: 88, url: 'https://picsum.photos/id/188/200/150'},
            {id: 89, url: 'https://picsum.photos/id/189/200/150'},
            {id: 90, url: 'https://picsum.photos/id/190/200/150'}
          ]
        },
        { // Альбом 4 для автора 4
          id: 1014,
          title: 'Название альбома',
          photo: [
            {id: 91, url: 'https://picsum.photos/id/191/200/150'},
            {id: 92, url: 'https://picsum.photos/id/192/200/150'},
            {id: 93, url: 'https://picsum.photos/id/193/200/150'},
            {id: 94, url: 'https://picsum.photos/id/194/200/150'},
            {id: 95, url: 'https://picsum.photos/id/195/200/150'}
          ]
        },
        { // Альбом 5 для автора 4
          id: 1015,
          title: 'Название альбома',
          photo: [
            {id: 96, url: 'https://picsum.photos/id/196/200/150'},
            {id: 97, url: 'https://picsum.photos/id/197/200/150'},
            {id: 98, url: 'https://picsum.photos/id/198/200/150'},
            {id: 99, url: 'https://picsum.photos/id/199/200/150'},
            {id: 100, url: 'https://picsum.photos/id/200/200/150'}
          ]
        }
      ],
      todos: [
        'Закончить документацию',
        'Обновить зависимости',
        'Проверить баги',
        'Встреча с менеджером',
        'Создать миграции'
      ]
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
      albums: [
        { // Альбом 1 для автора 2
          id: 2006,
          title: 'Название альбома',
          photo: [
            {id: 101, url: 'https://picsum.photos/id/201/200/150'},
            {id: 102, url: 'https://picsum.photos/id/202/200/150'},
            {id: 103, url: 'https://picsum.photos/id/203/200/150'},
            {id: 104, url: 'https://picsum.photos/id/204/200/150'},
            {id: 105, url: 'https://picsum.photos/id/205/200/150'}
          ]
        },
        { // Альбом 2 для автора 2
          id: 2007,
          title: 'Название альбома',
          photo: [
            {id: 106, url: 'https://picsum.photos/id/206/200/150'},
            {id: 107, url: 'https://picsum.photos/id/207/200/150'},
            {id: 108, url: 'https://picsum.photos/id/208/200/150'},
            {id: 109, url: 'https://picsum.photos/id/209/200/150'},
            {id: 110, url: 'https://picsum.photos/id/210/200/150'}
          ]
        },
        { // Альбом 3 для автора 2
          id: 2008,
          title: 'Название альбома',
          photo: [
            {id: 111, url: 'https://picsum.photos/id/211/200/150'},
            {id: 112, url: 'https://picsum.photos/id/212/200/150'},
            {id: 113, url: 'https://picsum.photos/id/213/200/150'},
            {id: 114, url: 'https://picsum.photos/id/214/200/150'},
            {id: 115, url: 'https://picsum.photos/id/215/200/150'}
          ]
        },
        { // Альбом 4 для автора 2
          id: 2009,
          title: 'Название альбома',
          photo: [
            {id: 116, url: 'https://picsum.photos/id/216/200/150'},
            {id: 117, url: 'https://picsum.photos/id/217/200/150'},
            {id: 118, url: 'https://picsum.photos/id/218/200/150'},
            {id: 119, url: 'https://picsum.photos/id/219/200/150'},
            {id: 120, url: 'https://picsum.photos/id/220/200/150'}
          ]
        },
        { // Альбом 5 для автора 2
          id: 2010,
          title: 'Название альбома',
          photo: [
            {id: 121, url: 'https://picsum.photos/id/221/200/150'},
            {id: 122, url: 'https://picsum.photos/id/222/200/150'},
            {id: 123, url: 'https://picsum.photos/id/223/200/150'},
            {id: 124, url: 'https://picsum.photos/id/224/200/150'},
            {id: 125, url: 'https://picsum.photos/id/225/200/150'}
          ]
        }
      ],
      todos: [
        'Проверить почту',
        'Запланировать отпуск',
        'Обновить сайт',
        'Созвониться с партнерами',
        'Подготовить отчет'
      ]
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
      albums: [
        { // Альбом 1 для автора 3
          id: 3001,
          title: 'Название альбома',
          photo: [
            {id: 126, url: 'https://picsum.photos/id/226/200/150'},
            {id: 127, url: 'https://picsum.photos/id/227/200/150'},
            {id: 128, url: 'https://picsum.photos/id/228/200/150'},
            {id: 129, url: 'https://picsum.photos/id/229/200/150'},
            {id: 130, url: 'https://picsum.photos/id/230/200/150'}
          ]
        },
        { // Альбом 2 для автора 3
          id: 3002,
          title: 'Название альбома',
          photo: [
            {id: 131, url: 'https://picsum.photos/id/231/200/150'},
            {id: 132, url: 'https://picsum.photos/id/232/200/150'},
            {id: 133, url: 'https://picsum.photos/id/233/200/150'},
            {id: 134, url: 'https://picsum.photos/id/234/200/150'},
            {id: 135, url: 'https://picsum.photos/id/235/200/150'}
          ]
        },
        { // Альбом 3 для автора 3
          id: 3003,
          title: 'Название альбома',
          photo: [
            {id: 136, url: 'https://picsum.photos/id/236/200/150'},
            {id: 137, url: 'https://picsum.photos/id/237/200/150'},
            {id: 138, url: 'https://picsum.photos/id/238/200/150'},
            {id: 139, url: 'https://picsum.photos/id/239/200/150'},
            {id: 140, url: 'https://picsum.photos/id/240/200/150'}
          ]
        },
        { // Альбом 4 для автора 3
          id: 3004,
          title: 'Название альбома',
          photo: [
            {id: 141, url: 'https://picsum.photos/id/241/200/150'},
            {id: 142, url: 'https://picsum.photos/id/242/200/150'},
            {id: 143, url: 'https://picsum.photos/id/243/200/150'},
            {id: 144, url: 'https://picsum.photos/id/244/200/150'},
            {id: 145, url: 'https://picsum.photos/id/245/200/150'}
          ]
        },
        { // Альбом 5 для автора 3
          id: 3005,
          title: 'Название альбома',
          photo: [
            {id: 146, url: 'https://picsum.photos/id/246/200/150'},
            {id: 147, url: 'https://picsum.photos/id/247/200/150'},
            {id: 148, url: 'https://picsum.photos/id/248/200/150'},
            {id: 149, url: 'https://picsum.photos/id/249/200/150'},
            {id: 150, url: 'https://picsum.photos/id/250/200/150'}
          ]
        }
      ],
      todos: [
        'Забронировать билеты',
        'Починить компьютер',
        'Оформить подписку',
        'Сходить в спортзал',
        'Приготовить ужин'
      ]
    }
  },
  // ... и так далее для остальных постов
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
      albums: [
        { // Альбом 1 для автора 5
          id: 2006,
          title: 'Название альбома',
          photo: [
            {id: 151, url: 'https://picsum.photos/id/251/200/150'},
            {id: 152, url: 'https://picsum.photos/id/252/200/150'},
            {id: 153, url: 'https://picsum.photos/id/253/200/150'},
            {id: 154, url: 'https://picsum.photos/id/254/200/150'},
            {id: 155, url: 'https://picsum.photos/id/255/200/150'}
          ]
        },
        { // Альбом 2 для автора 5
          id: 2007,
          title: 'Название альбома',
          photo: [
            {id: 156, url: 'https://picsum.photos/id/256/200/150'},
            {id: 157, url: 'https://picsum.photos/id/257/200/150'},
            {id: 158, url: 'https://picsum.photos/id/258/200/150'},
            {id: 159, url: 'https://picsum.photos/id/259/200/150'},
            {id: 160, url: 'https://picsum.photos/id/260/200/150'}
          ]
        },
        { // Альбом 3 для автора 5
          id: 2008,
          title: 'Название альбома',
          photo: [
            {id: 161, url: 'https://picsum.photos/id/261/200/150'},
            {id: 162, url: 'https://picsum.photos/id/262/200/150'},
            {id: 163, url: 'https://picsum.photos/id/263/200/150'},
            {id: 164, url: 'https://picsum.photos/id/264/200/150'},
            {id: 165, url: 'https://picsum.photos/id/265/200/150'}
          ]
        },
        { // Альбом 4 для автора 5
          id: 2009,
          title: 'Название альбома',
          photo: [
            {id: 166, url: 'https://picsum.photos/id/266/200/150'},
            {id: 167, url: 'https://picsum.photos/id/267/200/150'},
            {id: 168, url: 'https://picsum.photos/id/268/200/150'},
            {id: 169, url: 'https://picsum.photos/id/269/200/150'},
            {id: 170, url: 'https://picsum.photos/id/270/200/150'}
          ]
        },
        { // Альбом 5 для автора 5
          id: 2010,
          title: 'Название альбома',
          photo: [
            {id: 171, url: 'https://picsum.photos/id/271/200/150'},
            {id: 172, url: 'https://picsum.photos/id/272/200/150'},
            {id: 173, url: 'https://picsum.photos/id/273/200/150'},
            {id: 174, url: 'https://picsum.photos/id/274/200/150'},
            {id: 175, url: 'https://picsum.photos/id/275/200/150'}
          ]
        }
      ],
      todos: [
        'Посетить врача',
        'Заплатить за квартиру',
        'Купить продукты',
        'Посетить музей',
        'Проверить уровень масла'
      ]
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
      albums: [
        { // Альбом 1 для автора 5
          id: 2011,
          title: 'Название альбома',
          photo: [
            {id: 176, url: 'https://picsum.photos/id/276/200/150'},
            {id: 177, url: 'https://picsum.photos/id/277/200/150'},
            {id: 178, url: 'https://picsum.photos/id/278/200/150'},
            {id: 179, url: 'https://picsum.photos/id/279/200/150'},
            {id: 180, url: 'https://picsum.photos/id/280/200/150'}
          ]
        },
        { // Альбом 2 для автора 5
          id: 2012,
          title: 'Название альбома',
          photo: [
            {id: 181, url: 'https://picsum.photos/id/281/200/150'},
            {id: 182, url: 'https://picsum.photos/id/282/200/150'},
            {id: 183, url: 'https://picsum.photos/id/283/200/150'},
            {id: 184, url: 'https://picsum.photos/id/284/200/150'},
            {id: 185, url: 'https://picsum.photos/id/285/200/150'}
          ]
        },
        { // Альбом 3 для автора 5
          id: 2013,
          title: 'Название альбома',
          photo: [
            {id: 186, url: 'https://picsum.photos/id/286/200/150'},
            {id: 187, url: 'https://picsum.photos/id/287/200/150'},
            {id: 188, url: 'https://picsum.photos/id/288/200/150'},
            {id: 189, url: 'https://picsum.photos/id/289/200/150'},
            {id: 190, url: 'https://picsum.photos/id/290/200/150'}
          ]
        },
        { // Альбом 4 для автора 5
          id: 2014,
          title: 'Название альбома',
          photo: [
            {id: 191, url: 'https://picsum.photos/id/291/200/150'},
            {id: 192, url: 'https://picsum.photos/id/292/200/150'},
            {id: 193, url: 'https://picsum.photos/id/293/200/150'},
            {id: 194, url: 'https://picsum.photos/id/294/200/150'},
            {id: 195, url: 'https://picsum.photos/id/295/200/150'}
          ]
        },
        { // Альбом 5 для автора 5
          id: 2015,
          title: 'Название альбома',
          photo: [
            {id: 196, url: 'https://picsum.photos/id/296/200/150'},
            {id: 197, url: 'https://picsum.photos/id/297/200/150'},
            {id: 198, url: 'https://picsum.photos/id/298/200/150'},
            {id: 199, url: 'https://picsum.photos/id/299/200/150'},
            {id: 200, url: 'https://picsum.photos/id/300/200/150'}
          ]
        }
      ],
      todos: [
        'Ответить на звонки',
        'Почистить снег',
        'Сдать отчёт',
        'Обновить резюме',
        'Написать статью'
      ]
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
      albums: [
        { // Альбом 1 для автора 3
          id: 3006,
          title: 'Название альбома',
          photo: [
            {id: 201, url: 'https://picsum.photos/id/301/200/150'},
            {id: 202, url: 'https://picsum.photos/id/302/200/150'},
            {id: 203, url: 'https://picsum.photos/id/303/200/150'},
            {id: 204, url: 'https://picsum.photos/id/304/200/150'},
            {id: 205, url: 'https://picsum.photos/id/305/200/150'}
          ]
        },
        { // Альбом 2 для автора 3
          id: 3007,
          title: 'Название альбома',
          photo: [
            {id: 206, url: 'https://picsum.photos/id/306/200/150'},
            {id: 207, url: 'https://picsum.photos/id/307/200/150'},
            {id: 208, url: 'https://picsum.photos/id/308/200/150'},
            {id: 209, url: 'https://picsum.photos/id/309/200/150'},
            {id: 210, url: 'https://picsum.photos/id/310/200/150'}
          ]
        },
        { // Альбом 3 для автора 3
          id: 3008,
          title: 'Название альбома',
          photo: [
            {id: 211, url: 'https://picsum.photos/id/311/200/150'},
            {id: 212, url: 'https://picsum.photos/id/312/200/150'},
            {id: 213, url: 'https://picsum.photos/id/313/200/150'},
            {id: 214, url: 'https://picsum.photos/id/314/200/150'},
            {id: 215, url: 'https://picsum.photos/id/315/200/150'}
          ]
        },
        { // Альбом 4 для автора 3
          id: 3009,
          title: 'Название альбома',
          photo: [
            {id: 216, url: 'https://picsum.photos/id/316/200/150'},
            {id: 217, url: 'https://picsum.photos/id/317/200/150'},
            {id: 218, url: 'https://picsum.photos/id/318/200/150'},
            {id: 219, url: 'https://picsum.photos/id/319/200/150'},
            {id: 220, url: 'https://picsum.photos/id/320/200/150'}
          ]
        },
        { // Альбом 5 для автора 3
          id: 3010,
          title: 'Название альбома',
          photo: [
            {id: 221, url: 'https://picsum.photos/id/321/200/150'},
            {id: 222, url: 'https://picsum.photos/id/322/200/150'},
            {id: 223, url: 'https://picsum.photos/id/323/200/150'},
            {id: 224, url: 'https://picsum.photos/id/324/200/150'},
            {id: 225, url: 'https://picsum.photos/id/325/200/150'}
          ]
        }
      ],
      todos: [
        'Сходить в магазин',
        'Постирать одежду',
        'Убрать в квартире',
        'Приготовить завтрак',
        'Погулять с собакой'
      ]
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
      albums: [
        { // Альбом 1 для автора 1
          id: 1,
          title: 'Название альбома',
          photo: [
            {id: 226, url: 'https://picsum.photos/id/326/200/150'},
            {id: 227, url: 'https://picsum.photos/id/327/200/150'},
            {id: 228, url: 'https://picsum.photos/id/328/200/150'},
            {id: 229, url: 'https://picsum.photos/id/329/200/150'},
            {id: 230, url: 'https://picsum.photos/id/330/200/150'}
          ]
        },
        { // Альбом 2 для автора 1
          id: 2,
          title: 'Название альбома',
          photo: [
            {id: 231, url: 'https://picsum.photos/id/331/200/150'},
            {id: 232, url: 'https://picsum.photos/id/332/200/150'},
            {id: 233, url: 'https://picsum.photos/id/333/200/150'},
            {id: 234, url: 'https://picsum.photos/id/334/200/150'},
            {id: 235, url: 'https://picsum.photos/id/335/200/150'}
          ]
        },
        { // Альбом 3 для автора 1
          id: 3,
          title: 'Название альбома',
          photo: [
            {id: 236, url: 'https://picsum.photos/id/336/200/150'},
            {id: 237, url: 'https://picsum.photos/id/337/200/150'},
            {id: 238, url: 'https://picsum.photos/id/338/200/150'},
            {id: 239, url: 'https://picsum.photos/id/339/200/150'},
            {id: 240, url: 'https://picsum.photos/id/340/200/150'}
          ]
        },
        { // Альбом 4 для автора 1
          id: 4,
          title: 'Название альбома',
          photo: [
            {id: 241, url: 'https://picsum.photos/id/341/200/150'},
            {id: 242, url: 'https://picsum.photos/id/342/200/150'},
            {id: 243, url: 'https://picsum.photos/id/343/200/150'},
            {id: 244, url: 'https://picsum.photos/id/344/200/150'},
            {id: 245, url: 'https://picsum.photos/id/345/200/150'}
          ]
        },
        { // Альбом 5 для автора 1
          id: 5,
          title: 'Название альбома',
          photo: [
            {id: 246, url: 'https://picsum.photos/id/346/200/150'},
            {id: 247, url: 'https://picsum.photos/id/347/200/150'},
            {id: 248, url: 'https://picsum.photos/id/348/200/150'},
            {id: 249, url: 'https://picsum.photos/id/349/200/150'},
            {id: 250, url: 'https://picsum.photos/id/350/200/150'}
          ]
        }
      ],
      todos: [
        'Проверить счета',
        'Заказать такси',
        'Позвонить родителям',
        'Подтвердить бронь',
        'Найти информацию'
      ]
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
      albums: [
        { // Альбом 1 для автора 2
          id: 2011,
          title: 'Название альбома',
          photo: [
            {id: 251, url: 'https://picsum.photos/id/351/200/150'},
            {id: 252, url: 'https://picsum.photos/id/352/200/150'},
            {id: 253, url: 'https://picsum.photos/id/353/200/150'},
            {id: 254, url: 'https://picsum.photos/id/354/200/150'},
            {id: 255, url: 'https://picsum.photos/id/355/200/150'}
          ]
        },
        { // Альбом 2 для автора 2
          id: 2012,
          title: 'Название альбома',
          photo: [
            {id: 256, url: 'https://picsum.photos/id/356/200/150'},
            {id: 257, url: 'https://picsum.photos/id/357/200/150'},
            {id: 258, url: 'https://picsum.photos/id/358/200/150'},
            {id: 259, url: 'https://picsum.photos/id/359/200/150'},
            {id: 260, url: 'https://picsum.photos/id/360/200/150'}
          ]
        },
        { // Альбом 3 для автора 2
          id: 2013,
          title: 'Название альбома',
          photo: [
            {id: 261, url: 'https://picsum.photos/id/361/200/150'},
            {id: 262, url: 'https://picsum.photos/id/362/200/150'},
            {id: 263, url: 'https://picsum.photos/id/363/200/150'},
            {id: 264, url: 'https://picsum.photos/id/364/200/150'},
            {id: 265, url: 'https://picsum.photos/id/365/200/150'}
          ]
        },
        { // Альбом 4 для автора 2
          id: 2014,
          title: 'Название альбома',
          photo: [
            {id: 266, url: 'https://picsum.photos/id/366/200/150'},
            {id: 267, url: 'https://picsum.photos/id/367/200/150'},
            {id: 268, url: 'https://picsum.photos/id/368/200/150'},
            {id: 269, url: 'https://picsum.photos/id/369/200/150'},
            {id: 270, url: 'https://picsum.photos/id/370/200/150'}
          ]
        },
        { // Альбом 5 для автора 2
          id: 2015,
          title: 'Название альбома',
          photo: [
            {id: 271, url: 'https://picsum.photos/id/371/200/150'},
            {id: 272, url: 'https://picsum.photos/id/372/200/150'},
            {id: 273, url: 'https://picsum.photos/id/373/200/150'},
            {id: 274, url: 'https://picsum.photos/id/374/200/150'},
            {id: 275, url: 'https://picsum.photos/id/375/200/150'}
          ]
        }
      ],
      todos: [
        'Записать идеи',
        'Проверить камеру',
        'Загрузить фотографии',
        'Отредактировать видео',
        'Подготовить текст'
      ]
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
      albums: [
        { // Альбом 1 для автора 5
          id: 2016,
          title: 'Название альбома',
          photo: [
            {id: 276, url: 'https://picsum.photos/id/376/200/150'},
            {id: 277, url: 'https://picsum.photos/id/377/200/150'},
            {id: 278, url: 'https://picsum.photos/id/378/200/150'},
            {id: 279, url: 'https://picsum.photos/id/379/200/150'},
            {id: 280, url: 'https://picsum.photos/id/380/200/150'}
          ]
        },
        { // Альбом 2 для автора 5
          id: 2017,
          title: 'Название альбома',
          photo: [
            {id: 281, url: 'https://picsum.photos/id/381/200/150'},
            {id: 282, url: 'https://picsum.photos/id/382/200/150'},
            {id: 283, url: 'https://picsum.photos/id/383/200/150'},
            {id: 284, url: 'https://picsum.photos/id/384/200/150'},
            {id: 285, url: 'https://picsum.photos/id/385/200/150'}
          ]
        },
        { // Альбом 3 для автора 5
          id: 2018,
          title: 'Название альбома',
          photo: [
            {id: 286, url: 'https://picsum.photos/id/386/200/150'},
            {id: 287, url: 'https://picsum.photos/id/387/200/150'},
            {id: 288, url: 'https://picsum.photos/id/388/200/150'},
            {id: 289, url: 'https://picsum.photos/id/389/200/150'},
            {id: 290, url: 'https://picsum.photos/id/390/200/150'}
          ]
        },
        { // Альбом 4 для автора 5
          id: 2019,
          title: 'Название альбома',
          photo: [
            {id: 291, url: 'https://picsum.photos/id/391/200/150'},
            {id: 292, url: 'https://picsum.photos/id/392/200/150'},
            {id: 293, url: 'https://picsum.photos/id/393/200/150'},
            {id: 294, url: 'https://picsum.photos/id/394/200/150'},
            {id: 295, url: 'https://picsum.photos/id/395/200/150'}
          ]
        },
        { // Альбом 5 для автора 5
          id: 2020,
          title: 'Название альбома',
          photo: [
            {id: 296, url: 'https://picsum.photos/id/396/200/150'},
            {id: 297, url: 'https://picsum.photos/id/397/200/150'},
            {id: 298, url: 'https://picsum.photos/id/398/200/150'},
            {id: 299, url: 'https://picsum.photos/id/399/200/150'},
            {id: 300, url: 'https://picsum.photos/id/400/200/150'}
          ]
        }
      ],
      todos: [
        'Составить список',
        'Купить билеты',
        'Забронировать отель',
        'Собрать чемодан',
        'Построить маршрут'
      ]
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
      albums: [
        { // Альбом 1 для автора 2
          id: 2021,
          title: 'Название альбома',
          photo: [
            {id: 301, url: 'https://picsum.photos/id/401/200/150'},
            {id: 302, url: 'https://picsum.photos/id/402/200/150'},
            {id: 303, url: 'https://picsum.photos/id/403/200/150'},
            {id: 304, url: 'https://picsum.photos/id/404/200/150'},
            {id: 305, url: 'https://picsum.photos/id/405/200/150'}
          ]
        },
        { // Альбом 2 для автора 2
          id: 2022,
          title: 'Название альбома',
          photo: [
            {id: 306, url: 'https://picsum.photos/id/406/200/150'},
            {id: 307, url: 'https://picsum.photos/id/407/200/150'},
            {id: 308, url: 'https://picsum.photos/id/408/200/150'},
            {id: 309, url: 'https://picsum.photos/id/409/200/150'},
            {id: 310, url: 'https://picsum.photos/id/410/200/150'}
          ]
        },
        { // Альбом 3 для автора 2
          id: 2023,
          title: 'Название альбома',
          photo: [
            {id: 311, url: 'https://picsum.photos/id/411/200/150'},
            {id: 312, url: 'https://picsum.photos/id/412/200/150'},
            {id: 313, url: 'https://picsum.photos/id/413/200/150'},
            {id: 314, url: 'https://picsum.photos/id/414/200/150'},
            {id: 315, url: 'https://picsum.photos/id/415/200/150'}
          ]
        },
        { // Альбом 4 для автора 2
          id: 2024,
          title: 'Название альбома',
          photo: [
            {id: 316, url: 'https://picsum.photos/id/416/200/150'},
            {id: 317, url: 'https://picsum.photos/id/417/200/150'},
            {id: 318, url: 'https://picsum.photos/id/418/200/150'},
            {id: 319, url: 'https://picsum.photos/id/419/200/150'},
            {id: 320, url: 'https://picsum.photos/id/420/200/150'}
          ]
        },
        { // Альбом 5 для автора 2
          id: 2025,
          title: 'Название альбома',
          photo: [
            {id: 321, url: 'https://picsum.photos/id/421/200/150'},
            {id: 322, url: 'https://picsum.photos/id/422/200/150'},
            {id: 323, url: 'https://picsum.photos/id/423/200/150'},
            {id: 324, url: 'https://picsum.photos/id/424/200/150'},
            {id: 325, url: 'https://picsum.photos/id/425/200/150'}
          ]
        }
      ],
      todos: [
        'Записать подкаст',
        'Опубликовать пост',
        'Сделать репост',
        'Ответить на комментарии',
        'Продвигать контент'
      ]
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
      albums: [
        { // Альбом 1 для автора 2
          id: 2026,
          title: 'Название альбома',
          photo: [
            {id: 326, url: 'https://picsum.photos/id/426/200/150'},
            {id: 327, url: 'https://picsum.photos/id/427/200/150'},
            {id: 328, url: 'https://picsum.photos/id/428/200/150'},
            {id: 329, url: 'https://picsum.photos/id/429/200/150'},
            {id: 330, url: 'https://picsum.photos/id/430/200/150'}
          ]
        },
        { // Альбом 2 для автора 2
          id: 2027,
          title: 'Название альбома',
          photo: [
            {id: 331, url: 'https://picsum.photos/id/431/200/150'},
            {id: 332, url: 'https://picsum.photos/id/432/200/150'},
            {id: 333, url: 'https://picsum.photos/id/433/200/150'},
            {id: 334, url: 'https://picsum.photos/id/434/200/150'},
            {id: 335, url: 'https://picsum.photos/id/435/200/150'}
          ]
        },
        { // Альбом 3 для автора 2
          id: 2028,
          title: 'Название альбома',
          photo: [
            {id: 336, url: 'https://picsum.photos/id/436/200/150'},
            {id: 337, url: 'https://picsum.photos/id/437/200/150'},
            {id: 338, url: 'https://picsum.photos/id/438/200/150'},
            {id: 339, url: 'https://picsum.photos/id/439/200/150'},
            {id: 340, url: 'https://picsum.photos/id/440/200/150'}
          ]
        },
        { // Альбом 4 для автора 2
          id: 2029,
          title: 'Название альбома',
          photo: [
            {id: 341, url: 'https://picsum.photos/id/441/200/150'},
            {id: 342, url: 'https://picsum.photos/id/442/200/150'},
            {id: 343, url: 'https://picsum.photos/id/443/200/150'},
            {id: 344, url: 'https://picsum.photos/id/444/200/150'},
            {id: 345, url: 'https://picsum.photos/id/445/200/150'}
          ]
        },
        { // Альбом 5 для автора 2
          id: 2030,
          title: 'Название альбома',
          photo: [
            {id: 346, url: 'https://picsum.photos/id/446/200/150'},
            {id: 347, url: 'https://picsum.photos/id/447/200/150'},
            {id: 348, url: 'https://picsum.photos/id/448/200/150'},
            {id: 349, url: 'https://picsum.photos/id/449/200/150'},
            {id: 350, url: 'https://picsum.photos/id/450/200/150'}
          ]
        }
      ],
      todos: [
        'Посетить семинар',
        'Пройти тест',
        'Изучить новую технологию',
        'Посмотреть вебинар',
        'Прочитать статью'
      ]
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
      albums: [
        { // Альбом 1 для автора 3
          id: 3011,
          title: 'Название альбома',
          photo: [
            {id: 351, url: 'https://picsum.photos/id/451/200/150'},
            {id: 352, url: 'https://picsum.photos/id/452/200/150'},
            {id: 353, url: 'https://picsum.photos/id/453/200/150'},
            {id: 354, url: 'https://picsum.photos/id/454/200/150'},
            {id: 355, url: 'https://picsum.photos/id/455/200/150'}
          ]
        },
        { // Альбом 2 для автора 3
          id: 3012,
          title: 'Название альбома',
          photo: [
            {id: 356, url: 'https://picsum.photos/id/456/200/150'},
            {id: 357, url: 'https://picsum.photos/id/457/200/150'},
            {id: 358, url: 'https://picsum.photos/id/458/200/150'},
            {id: 359, url: 'https://picsum.photos/id/459/200/150'},
            {id: 360, url: 'https://picsum.photos/id/460/200/150'}
          ]
        },
        { // Альбом 3 для автора 3
          id: 3013,
          title: 'Название альбома',
          photo: [
            {id: 361, url: 'https://picsum.photos/id/461/200/150'},
            {id: 362, url: 'https://picsum.photos/id/462/200/150'},
            {id: 363, url: 'https://picsum.photos/id/463/200/150'},
            {id: 364, url: 'https://picsum.photos/id/464/200/150'},
            {id: 365, url: 'https://picsum.photos/id/465/200/150'}
          ]
        },
        { // Альбом 4 для автора 3
          id: 3014,
          title: 'Название альбома',
          photo: [
            {id: 366, url: 'https://picsum.photos/id/466/200/150'},
            {id: 367, url: 'https://picsum.photos/id/467/200/150'},
            {id: 368, url: 'https://picsum.photos/id/468/200/150'},
            {id: 369, url: 'https://picsum.photos/id/469/200/150'},
            {id: 370, url: 'https://picsum.photos/id/470/200/150'}
          ]
        },
        { // Альбом 5 для автора 3
          id: 3015,
          title: 'Название альбома',
          photo: [
            {id: 371, url: 'https://picsum.photos/id/471/200/150'},
            {id: 372, url: 'https://picsum.photos/id/472/200/150'},
            {id: 373, url: 'https://picsum.photos/id/473/200/150'},
            {id: 374, url: 'https://picsum.photos/id/474/200/150'},
            {id: 375, url: 'https://picsum.photos/id/475/200/150'}
          ]
        }
      ],
      todos: [
        'Написать письмо',
        'Отправить посылку',
        'Запланировать звонок',
        'Купить билеты',
        'Забронировать номер'
      ]
    }
  }
];
