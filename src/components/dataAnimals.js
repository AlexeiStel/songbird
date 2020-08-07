const dataAnimals = [
    [ 
      {
        id: 1,
        name: 'Собака',
        species: 'Canis lupus familiaris',
        description: 'Самые верные друзья людей среди братьев наших меньших — это собаки. При встрече они виляют хвостом, смотрят умными глазами и заливаются звонким лаем. Собака — друг человека.',
        image: 'http://boobooka.com/wp-content/uploads/2017/12/%D0%BC-%D1%81-1.jpg',
        audio: '../assets/audio/Home/Sobaka_-_Lay_sobaki-2.mp3'
      },
      {
        id: 2,
        name: 'Кот',
        species: 'Felis silvestris catus',
        description: 'Кошка — млекопитающее семейства кошачьих отряда хищных. Являясь одиночным охотником на грызунов и других мелких животных, кошка — социальное животное, использующее для общения широкий диапазон звуковых сигналов, а также феромоны и движения тела.',
        image: 'http://boobooka.com/wp-content/uploads/2013/08/mur-kota.jpg',
        audio: '../assets/audio/Home/Myaukane_koshki_-_Myaukane_koshki.mp3'
      },
      {
        id: 3,
        name: 'Лошадь',
        species: 'Equus ferus caballus',
        description: 'Наиболее характерную особенность лошади составляют ноги, имеющие только один вполне развитый и одетый копытом палец. Череп вытянут и отличается относительно длинной лицевой частью.',
        image: 'http://boobooka.com/wp-content/uploads/2016/09/mini-5-200x115.jpg',
        audio: '../assets/audio/Home/zvuk-loshadi.mp3'
      },
      {
        id: 4,
        name: 'Корова',
        species: 'Bos taurus',
        description: 'Диапазон слуха у коров составляет от 23 Гц до 35 кГц. Их частота наилучшей чувствительности составляет 8 кГц, и они имеют самый низкий порог -21 дБ. Пороговые значения остроты локализации звука составляют в среднем 30 °.',
        image: 'http://boobooka.com/wp-content/uploads/2016/09/mini-15-200x115.jpg',
        audio: '../assets/audio/Home/Korova.mp3'
      },
      {
        id: 5,
        name: 'Свинья',
        species: 'Sus scrofa domesticus',
        description: 'Для свиней характерно слабое зрение, острый слух, тонкое обоняние, способность хорошо плавать; повышенная плодовитость, способность к быстрому росту и жироотложению.',
        image: 'http://boobooka.com/wp-content/uploads/2016/09/mini-18-200x115.jpg',
        audio: '../assets/audio/Home/Zvuki_prirody_-_Svinya.mp3'
      },
      {
        id: 6,
        name: 'Овца',
        species: 'Ovis aries',
        description: 'Все овцы обладают хорошим слухом и чувствительны к внезапному шуму. Боковое расположение глаз и горизонтально-вытянутые зрачки увеличивают угол обзора до приблизительно 270—320°, что позволяет животным смотреть назад, не поворачивая головы.',
        image: 'http://boobooka.com/wp-content/uploads/2017/02/mini-21-200x115.jpg',
        audio: '../assets/audio/Home/zvuki-barana.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Зубр',
        species: 'Bison bonasus',
        description: 'Зубры живут небольшими стадами величиной от трёх до двадцати животных, состоящих в основном из самок и молодых телят. Лидером в стаде зубров является самка. Самцы предпочитают жить поодиночке и присоединяются к стаду только во время яра для спаривания.',
        image: 'http://boobooka.com/wp-content/uploads/2019/02/mini-21-200x115.jpg',
        audio: '../assets/audio/Сloven-footed/zvuki-zubra.mp3'
      },
      {
        id: 2,
        name: 'Олень',
        species: 'Cervidae',
        description: 'Некоторые виды живут поодиночке, однако большинство видов живут в стадах. Часто это так называемые гаремные группы, в которых один самец возглавляет группу из нескольких самок и детёнышей, обороняя её от вторжения других соперников-самцов.',
        image: 'http://boobooka.com/wp-content/uploads/2018/03/mini-17-200x115.jpg',
        audio: '../assets/audio/Сloven-footed/zvuk-olenja.mp3'
      },
      {
        id: 3,
        name: 'Кенгуру',
        species: 'Macropus',
        description: 'Кенгуру является одним из символов Австралии. Это животное изображено на гербе Австралии, некоторых австралийских монетах, а также используется некоторыми из наиболее известных австралийских организаций.',
        image: 'http://boobooka.com/wp-content/uploads/2018/03/mini-15-200x115.jpg',
        audio: '../assets/audio/Сloven-footed/zvuki-kenguru.mp3'
      },
      {
        id: 4,
        name: 'Жираф',
        species: 'Giraffa camelopardalis',
        description: 'Среди всех млекопитающих у жирафов одна из наименьших потребностей во сне — от 10 минут до 2 часов в сутки; в среднем жирафы спят 1,9 часа в день. Спят жирафы как стоя, так и лёжа, согнув шею и положив голову на круп.',
        image: 'http://boobooka.com/wp-content/uploads/2018/03/mini-28-200x115.jpg',
        audio: '../assets/audio/Сloven-footed/zvuk-krika-molodogo-zhirafa.mp3'
      },
      {
        id: 5,
        name: 'Бегемот',
        species: 'Hippopotamus amphibius',
        description: 'Поведение бегемота отличается выраженной агрессивностью. Драки бегемотов-самцов часто приводят к гибели одного из участников. Бегемот является самым опасным для человека зверем Африки ',
        image: 'http://boobooka.com/wp-content/uploads/2018/03/mini-25-200x115.jpg',
        audio: '../assets/audio/Сloven-footed/hriplyj-rev-begemota.mp3'
      },
      {
        id: 6,
        name: 'Верблюд',
        species: 'Camelus',
        description: 'На спине у верблюдов имеются своеобразные «горбы». Верблюды в них запасают жир, окисляя который в случае большой жажды, они превращают в воду.',
        image: 'http://boobooka.com/wp-content/uploads/2017/03/mini-9-200x115.jpg',
        audio: '../assets/audio/Сloven-footed/zvuki-verbljuda.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Ёж',
        species: 'Erinaceus europaeus',
        description: 'После зимней спячки у ежей начинается брачный период. Между самцами часто происходят драки из-за самок. Самцы кусают друг друга за ноги, морду, толкаются, используют в бою свои иглы. Во время драки ежи громко сопят и фыркают.',
        image: 'http://boobooka.com/wp-content/uploads/2017/07/mini-14-200x115.jpg',
        audio: '../assets/audio/Rodents/zvuki-ezhika.mp3'
      },
      {
        id: 2,
        name: 'Заяц',
        species: 'Lepus',
        description: 'Отличаются длинными ушами, коротким поднятым хвостом, недоразвитыми ключицами, длинными задними лапами, что позволяет им двигаться прыжками. Русак может достигать скорости 70 км/ч.',
        image: 'http://boobooka.com/wp-content/uploads/2018/07/mini-14-200x115.jpg',
        audio: '../assets/audio/Rodents/zvuki-zajca.mp3'
      },
      {
        id: 3,
        name: 'Белка',
        species: 'Sciurus',
        description: 'Одной из широко известных отличительных особенностей многих белок является их способность запасать на зиму орехи. Некоторые виды белок закапывают их в землю, другие — прячут в дуплах деревьев.',
        image: 'http://boobooka.com/wp-content/uploads/2018/03/mini-20-200x115.jpg',
        audio: '../assets/audio/Rodents/zvuk-piska-belki.mp3'
      },
      {
        id: 4,
        name: 'Суслик',
        species: 'Spermophilus',
        description: 'Суслики известны своей привычкой при опасности вставать на задние лапы и издавать характерные свистящие звуки. Питаются суслики надземными и подземными частями растений, всегда неподалёку от нор. ',
        image: 'http://boobooka.com/wp-content/uploads/2018/03/mini-21-200x115.jpg',
        audio: '../assets/audio/Rodents/zvuki-suslika.mp3'
      },
      {
        id: 5,
        name: 'Бурундук',
        species: 'Tamias',
        description: 'На зиму бурундуки впадают в спячку. Они просыпаются среди зимы, подкрепляются немного, а затем снова засыпают. Весной выходят из нор в разное время, смотря по тому, какая стоит погода. ',
        image: 'http://boobooka.com/wp-content/uploads/2018/03/mini-22-200x115.jpg',
        audio: '../assets/audio/Rodents/zvuk-burunduka.mp3'
      },
      {
        id: 6,
        name: 'Шиншилла',
        species: 'Chinchilla',
        description: 'Шиншиллы издают очень интересные звуки: когда им что-то не нравится, они издают звук, похожий на кряканье или чириканье. Если их разозлить очень сильно, то они начинают издавать звуки, похожие на рычание, а порою при этом очень быстро щёлкают зубами.',
        image: 'http://boobooka.com/wp-content/uploads/2017/07/mini-28-200x115.jpg',
        audio: '../assets/audio/Rodents/zvuk-shinshilly.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Косуля',
        species: 'Capreolus',
        description: 'Небольшие олени обладающие стройным телосложением и длинной шеей, ноги тонкие и длинные. Голова небольшого размера с длинными и широкими ушами. Только самцы имеют небольшие дважды ветвящиеся рога, в сечении округлые.',
        image: 'http://boobooka.com/wp-content/uploads/2018/02/mini-1-200x115.jpg',
        audio: '../assets/audio/Herbivores/zvuk-kosuli.mp3'
      },
      {
        id: 2,
        name: 'Зебра',
        species: 'Hippotigris',
        description: 'Зебру невозможно приручить. По темпераменту они сильно отличаются от своих одомашненных собратьев. В их арсенале имеются клыки и копыта, которыми они активно пользуются при возникновении малейшей угрозы.',
        image: 'http://boobooka.com/wp-content/uploads/2018/07/mini-15-200x115.jpg',
        audio: '../assets/audio/Herbivores/zvuki-zebry.mp3'
      },
      {
        id: 3,
        name: 'Антилопа',
        species: 'Oryx illaqueatus',
        description: 'У всех антилоп ноги обыкновенно довольно длинные и стройные, хвост оканчивается пучком волос, шерсть короткая и окрашена в живые цвета; у многих антилоп существуют так называемые слёзные каналы под глазами.',
        image: 'http://boobooka.com/wp-content/uploads/2019/02/mini-30-200x115.jpg',
        audio: '../assets/audio/Herbivores/blejanie-antilopy.mp3'
      },
      {
        id: 4,
        name: 'Слон',
        species: ' Elephantidae',
        description: 'Слоновые хорошо слышат в области низких частот, вплоть до инфразвука, но наибольшая чувствительность их слуха на частоте около 1 кГц[17]. Слоны обладают музыкальным слухом и музыкальной памятью, способны различать мелодии из трёх нот.',
        image: 'http://boobooka.com/wp-content/uploads/2017/03/mini-5-200x115.jpg',
        audio: '../assets/audio/Herbivores/zvuk-slona.mp3'
      },
      {
        id: 5,
        name: 'Носорог',
        species: 'Rhinocerotidae',
        description: 'Днём носороги спят, активными их можно застать в сумерках и ночью. Это очень боязливые и осторожные звери, избегающие близости к человеку. Разогнавшись, носорог может достичь скорости 45 км/ч.',
        image: 'http://boobooka.com/wp-content/uploads/2018/03/mini-27-200x115.jpg',
        audio: '../assets/audio/Herbivores/zvuk-nosoroga.mp3'
      },
      {
        id: 6,
        name: 'Осёл',
        species: 'Equus asinus',
        description: 'Ослы имеют пресловутую репутацию упрямства, но это объясняется очень сильным чувством самосохранения. Ослы тонко понимают предел своих физических возможностей и не позволяют человеку переходить его.',
        image: 'http://boobooka.com/wp-content/uploads/2017/03/mini-14-200x115.jpg',
        audio: '../assets/audio/Herbivores/zvuki-osla.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Рысь',
        species: 'Lynx',
        description: 'Рысь — типичная кошка, хотя величиной с крупную собаку, которую отчасти напоминает своим укороченным телом и длинноногостью. От других кошачьих рыси отличаются коротким хвостом и кисточками на концах ушей.',
        image: 'http://boobooka.com/wp-content/uploads/2017/03/mini-2-200x115.jpg',
        audio: '../assets/audio/Predators/ryk-rysi.mp3'
      },
      {
        id: 2,
        name: 'Лисица',
        species: 'Vulpes',
        description: 'Во время гона и просто в состоянии возбуждения лисица издаёт отрывистый громкий лай; лисы, когда дерутся, пронзительно визжат. По голосу самка и самец различаются: самка делает тройной «взлай», заканчивающийся коротким воем, самец лает на манер собаки.',
        image: 'http://boobooka.com/wp-content/uploads/2017/07/mini-12-200x115.jpg',
        audio: '../assets/audio/Predators/krik-lisy.mp3'
      },
      {
        id: 3,
        name: 'Гепард',
        species: 'Acinonyx jubatus',
        description: 'Гепарды охотятся, преследуя добычу. Сначала они приближаются к выбранной жертве на расстояние около 10 метров, а затем пытаются поймать её в скоростном забеге. В погоне за жертвой развивают скорость до 130 км/ч, разгоняясь до 75 км/ч за 2 секунды.',
        image: 'http://boobooka.com/wp-content/uploads/2018/12/mini-1-200x115.jpeg',
        audio: '../assets/audio/Predators/tjavkane-geparda.mp3'
      },
      {
        id: 4,
        name: 'Леопард',
        species: 'Panthera pardus',
        description: 'Леопард прекрасно лазает по деревьям, нередко устраиваясь там на дневной отдых или в засаде, а порой даже ловит на деревьях обезьян. Он тихо подкрадывается к добыче на расстояние прыжка. Прыгает на добычу и душит её, но в случае неудачи не преследует.',
        image: 'http://boobooka.com/wp-content/uploads/2018/03/mini-30-200x115.jpg',
        audio: '../assets/audio/Predators/ryk-leoparda.mp3'
      },
      {
        id: 5,
        name: 'Тигр',
        species: 'Panthera tigris',
        description: 'В засаде тигр обычно выжидает, лёжа под ветром, а при приближении делает быстрый рывок на короткую дистанцию. При промахах преследует добычу не далее 100—150 м. Тигр может развить скорость до 60 км/ч практически на любой местности.',
        image: 'http://boobooka.com/wp-content/uploads/2019/02/mini-27-200x115.jpg',
        audio: '../assets/audio/Predators/zvuk-tigra.mp3'
      },
      {
        id: 6,
        name: 'Лев',
        species: 'Panthera leo',
        description: 'Львицы охотятся на открытых пространствах. Группа львиц способна защитить свою добычу от других хищников. Самки совершают основную часть охоты. Самцы в ней не участвуют, за исключением случаев, когда жертвой становится крупное животное.',
        image: 'http://boobooka.com/wp-content/uploads/2017/03/mini-200x115.jpg',
        audio: '../assets/audio/Predators/ryk-lva.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Кашалот',
        species: 'Physeter macrocephalus',
        description: 'Голосовые сигналы кашалота близки к сигналам других китов. Это стонущие звуки, щелчки и быстрый треск или скрип. Кашалоты, попавшие на мель, громко ревут. Голос кашалота очень громкий — издаваемые звуки могут достигать громкости около 116 децибел.',
        image: 'http://boobooka.com/wp-content/uploads/2019/02/mini-28-200x115.jpg',
        audio: '../assets/audio/Marine/protjazhnyj-voj-kashalota.mp3'
      },
      {
        id: 2,
        name: 'Касатка',
        species: 'Orcinus orca',
        description: 'В поисках рыбы стаи косаток обычно разворачиваются в цепь и плывут со скоростью около 5 км/ч. При этом эхолокационные сигналы позволяют определять своё положение относительно других, оставаться в контакте с ними и участвовать в деятельности группы.',
        image: 'http://boobooka.com/wp-content/uploads/2018/07/mini-200x115.jpg',
        audio: '../assets/audio/Marine/zvuk-kasatki.mp3'
      },    
      {
        id: 3,
        name: 'Морж',
        species: 'Odobenus rosmarus',
        description: 'Стадо моржей всегда выставляет часовых. Обоняние развито у моржей хорошо, и они чуют человека на большом расстоянии. Заметив опасность, часовой рёвом будит остальных и животные бросаются в море.',
        image: 'http://boobooka.com/wp-content/uploads/2018/03/mini-29-200x115.jpg',
        audio: '../assets/audio/Marine/kriki-morzha.mp3'
      },
      {
        id: 4,
        name: 'Тюлень',
        species: 'Phoca vitulina',
        description: 'Плавают за счёт движений задних ласт, которым помогают боковые изгибы мускулистой задней части тела. На коротких участках могут при необходимости развивать скорость до 24 км/ч. Тюлени прекрасно ныряют.',
        image: 'http://boobooka.com/wp-content/uploads/2017/07/mini-11-200x115.jpg',
        audio: '../assets/audio/Marine/golos-tjulenja.mp3'
      },
      {
        id: 5,
        name: 'Кит',
        species: 'Balaenoptera musculus',
        description: 'Голосовые сигналы синий кит использует для обмена сигналами с сородичами; они не используются для эхолокации. Звуки, издаваемые синим китом, имеют частоту преимущественно — 8—20 Гц, то есть являются инфразвуками.',
        image: 'http://boobooka.com/wp-content/uploads/2017/02/mini-16-200x115.jpg',
        audio: '../assets/audio/Marine/zvuk-izdavaemyj-kitom.mp3'
      },
      {
        id: 6,
        name: 'Дельфин',
        species: 'Delphinidae',
        description: 'Сигналы испускаются на очень высоких ультразвуковых частотах, недоступных человеческому слуху. Дельфины используют частоту до 200 кГц. У них примерно шесть уровней организации звуков: звук, слог, слово, фраза, абзац, контекст, есть свои диалекты.',
        image: 'http://boobooka.com/wp-content/uploads/2014/01/mini-delphiny-200x115.jpg',
        audio: '../assets/audio/Marine/Zvuki-prirody-Krik-del_finov.mp3'
      }
    ]
  ];
  
  export default dataAnimals;