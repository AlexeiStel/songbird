const birdsData = [
  [       
    {
      id: 1,
      name: 'Альпийская завирушка',
      species: 'Prunella collaris',
      description:  'Песня представляет собой журчащую неторопливую звонкую трель без определённой структуры. Она напоминает одновременно песню полевого жаворонка (но менее разнообразная и звучная) и лесной завирушки.',
      image: 'https://www.ebirds.ru/images/e/302.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/JPBSNBUUEF/XC416731-Alpine%20Accentor%2C%20180524-002.mp3'
    },
    {
      id: 2,
      name: 'Поползень',
      species: 'Sitta europaea',
      description: 'Голос обычно громкий, звуковой репертуар весьма разнообразен. Наиболее обычная позывка — короткое «твит...» или «цит...», часто издаваемые быстрыми сериями по 2–4 крика. Пение представляет собой серии повторяющихся громких чистых свистов.',
      image: 'https://www.ebirds.ru/images/e/382.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC572661-2020.06.30_12.24_01.mp3'
    },
    {
      id: 3,
      name: 'Лазоревка',
      species: 'Cyanistes caeruleus',
      description: 'Достаточно громкий и высокий. Основные позывки: высокое «сии...» — одиночные или сериями, комбинированные фразы «пит-пит-чиррр...» или «тиррр-ти-ти-ти...». Песня представляет собой длинные фразы из повторяющихся коротких свистов.',
      image: 'https://www.ebirds.ru/images/e/379.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC570150-Mesange%20bleue%20cris%20de%20vol.mp3'
    },
    {
      id: 4,
      name: 'Ремез',
      species: 'Remiz pendulinus',
      description: 'Голос очень высокий и писклявый. Типичная позывка — тихий тонкий свист «тсиииуу...», иногда издаёт и более короткие свисты. Песня сложная, состоит из разнообразных чередующихся трелей, свистов.',
      image: 'https://www.ebirds.ru/images/e/373.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/UXGZWVYDFE/XC533537-2020010306_1048_Remiz%20pendulinus_hiver_cris.mp3'
    },
    {
      id: 5,
      name: 'Белобровик',
      species: 'Turdus iliacus',
      description: 'Поют много с прилёта до середины лета, чаще всего — на вершинах самых высоких деревьев (в тундре — кустов). Песня состоит из двух частей, по продолжительности преобладает подпесня — набор негромких неразборчивых щебетаний и верещаний.',
      image: 'https://www.ebirds.ru/images/e/367.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC575262-Grive%20mauvis%20chant.mp3'
    },
    {
      id: 6,
      name: 'Королёк',
      species: 'Regulus regulus',
      description: 'Позывки, которые можно слышать достаточно регулярно и по которым обычно и находят этих птиц, звучат как короткие, очень высокие и относительно тихие сигналы «тци» или «тцы», иногда объединяющиеся в короткую трельку.',
      image: 'https://www.ebirds.ru/images/e/338.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HVLWWLJFGV/XC574300-Roitelet%20hupp%C3%A9%20poligny.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Авдотка',
      species: 'Burhinus oedicnemus',
      description: 'Обитатель открытых ландшафтов с разреженной растительностью. Гнездится в щебнистых, глинистых и песчаных пустынях и полупустынях, сухих степях, на солончаках, пустошах, в массивах бугристых песков в долинах рек в степной и лесостепной зонах. Перелётная птица.',
      image: 'https://www.ebirds.ru/images/e/128.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/PNYKOPBQBQ/XC573601-BUROED010720-T013%20%282%29.mp3'
    },
    {
      id: 2,
      name: 'Азиатский бекас',
      species: 'Gallinago stenura',
      description: 'Спугнутый бекас издаёт при взлёте резкий крик «вжик», но иногда слетает молча. Токовый полёт самца сопровождается различными звуками, производимыми как голосом, так и с помощью крайних рулевых перьев. Перед началом пикирования самец летает, размеренно повторяя односложные крики «жжик».',
      image: 'https://www.ebirds.ru/images/e/166.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC288302-Gallinago%20stenura%20150507_003%2CAAAA2.MP3'
    },
    {
      id: 3,
      name: 'Золотистая ржанка',
      species: 'Pluvialis apricaria',
      description: 'Контактный крик в стае — мелодичный односложный свист «пиы» или «плии». Этот же крик птицы издают при беспокойстве около птенцов. Песня самца во время полёта представляет собой красивый, повторяющийся флейтовый свист,',
      image: 'https://www.ebirds.ru/images/e/130.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MHVQXRLBKS/XC580614-Goudplevier%20200521%202310%201a.mp3'
    },
    {
      id: 4,
      name: 'Клуша',
      species: 'Larus fuscus',
      description: 'Гнездится на лишённых растительности островках недалеко от берега моря или по берегам озёр. Гнездо меньших размеров, чем у серебристой чайки, напоминает гнездо сизой чайки. Для постройки использует мох, сухую траву, кусочки тростника.',
      image: 'https://www.ebirds.ru/images/e/185.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/NZLSHDONSA/XC553220-Lesser-Black-Back-Gull.mp3'
    },
    {
      id: 5,
      name: 'Краснозобик',
      species: 'Calidris ferruginea',
      description: 'Вне сезона размножения сравнительно молчалив, удаётся слышать лишь негромкую позыв-ку «прип». В сезон размножения издаваемые звуки разнообразнее, причём ещё на миграциях самцы начинают издавать в полёте крики «риру-риру-риру...»',
      image: 'https://www.ebirds.ru/images/e/157.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TLPLNAINFU/XC577751-SNI-364_01-TUNDRASNIPE-r%C3%B8dstilkVANNAREID11072020.mp3'
    },
    {
      id: 6,
      name: 'Моевка',
      species: 'Rissa tridactyla',
      description: 'Возвращается на места гнездования (на Мурманском побережье) в марте или позже. Гнездится на узких карнизах и выступах крутых скал, обычно колониями. Оба родителя строят гнездо, которое состоит из мха и водорослей и имеет диаметр примерно 30 см.',
      image: 'https://www.ebirds.ru/images/e/184.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HNYFHZLJOD/XC559365-200517-KW2%20clip.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Аист',
      species: 'Ciconia ciconia',
      description:  'Взрослые птицы не способны издавать голосовых сигналов, кроме тихого шипения; при брачных демонстрациях, которые самцы устраивают, стоя на крупном гнезде, они закидывают голову назад и стучат клювом. Птенцы в гнезде подают негромкие каркающие сигналы.',
      image: 'https://www.ebirds.ru/images/e/27.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XUDFGWMRXG/XC521611-White%20Stork%20Bill%20Clapping_180120_EstanyDivars.825wav.mp3'
    },
    {
      id: 2,
      name: 'Египетская цапля',
      species: 'Bubulcus ibis',
      description: 'Встречается в тропиках и на юге умеренной зоны на всех континентах. В европейскую часть России заходит северным краем ареала, известны лишь несколько колоний на побережье Каспия, в частности, — в дельте Волги. Птицы из северных популяций зимуют в тропиках.',
      image: 'https://www.ebirds.ru/images/e/20.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/NOJNUVZEHB/XC478435-Gardeboeufxc2.mp3'
    },
    {
      id: 3,
      name: 'Волчок',
      species: 'Ixobrychus minutus',
      description: 'Голос - это негромкие хрипловатые звуки, издали похожие на ритмичный собачий лай, вблизи же — на глуховатое придыхание. Эти крики являются «песней» волчка, их можно слышать в мае и июне, в остальное время он молчалив.',
      image: 'https://www.ebirds.ru/images/e/17.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VMQQRCTSHV/XC566756-tarab1.mp3'
    },
    {
      id: 4,
      name: 'Выпь',
      species: 'Botaurus stellaris',
      description: 'Голос своеобразен: весной и в начале лета самцы обозначают своё присутствие в зарослях низким, гулким двухсложным уханьем: «у-нуммб». В тихую погоду этот звук разносится на несколько километров. Чаще его можно слышать по ночам.',
      image: 'https://www.ebirds.ru/images/e/16.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HRHQNZTQAN/XC545485-STE-024%20bak%2012%2004%2020%20puka%2019%2030.mp3'
    },
    {
      id: 5,
      name: 'Каравайка',
      species: 'Plegadis falcinellus',
      description: 'Гнездится колониями, часто совместно с цаплями и бакланами, на деревьях или в зарослях тростника. Искусно построенное гнездо представляет собой неглубокую «ажурную» постройку, нередко просвечивающую насквозь, из сухих листьев тростника и веток.',
      image: 'https://www.ebirds.ru/images/e/25.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC357886-ibis%20falcinelle.mp3'
    },
    {
      id: 6,
      name: 'Кваква',
      species: 'Nycticorax nycticorax',
      description: 'Голос — скрипучее «кв... кв...», именно благодаря ему вид получил своё русское название. Иногда пишут, что голос кваквы похож на скрип мокрой резины. Чаще всего его приходится слышать в гнездовых колониях.',
      image: 'https://www.ebirds.ru/images/e/18.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC580668-JAREK-MATUSIAK-823%20%283.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Нырок',
      species: 'Aythya nyroca',
      description: 'Гнездится отдельными парами. Отлетает на зимовки сравнительно рано. Питается преимущественно семенами и вегетативными частями высших водных растений.',
      image: 'https://www.ebirds.ru/images/e/55.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC219563-150320_45%20%282%29%20podgorza%C5%82ka.mp3'
    },
    {
      id: 2,
      name: 'Белощекая казарка',
      species: 'Branta leucopsis',
      description: 'В период гнездования явно тяготеет к приморскому ландшафту, гнездится преимущественно на островах и косах. В оптимальных местах под прикрытием колоний крупных чаек или хищных птиц образует крупные колонии из сотен гнёзд.',
      image: 'https://www.ebirds.ru/images/e/30.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MNQLBOLQFS/XC552438-Vitkindad_G%C3%A5s_Hj%C3%A4lstaviken_April2020_NikonD500_DSC_7613-038751.mp3'
    },
    {
      id: 3,
      name: 'Большой крохаль',
      species: 'Mergus merganser',
      description: 'Появляется в гнездовых областях в конце марта или начале апреля. Гнездится на лесных реках и больших озёрах с прозрачной водой, богатых рыбой. Гнезда устраивает в дуплах. На островах он может поселяться в завалах камней, под корягами или кучами тростника.',
      image: 'https://www.ebirds.ru/images/e/65.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC475545-Storskrake_04.mp3'
    },
    {
      id: 4,
      name: 'Гоголь',
      species: 'Bucephala clangula',
      description: 'Во время брачных демонстраций самец издаёт пронзительный скрежет «бибиииззз, сюрприииззз», самка отвечает скрипучим «беррр-беррр». Обычный голос самки — хрипловатое карканье. Крылья у летящих взрослых самцов издают высокий частый звенящий свист.',
      image: 'https://www.ebirds.ru/images/e/59.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC531106-MixPre-135%20%282%29%20g%C4%85go%C5%82%20skrzyd%C5%82a.mp3'
    },
    {
      id: 5,
      name: 'Лебедь-шипун',
      species: 'Cygnus olor',
      description: 'Крылья летящих птиц издают характерный ритмичный шипящий звон. Голос негромкий, напоминает хрюканье и короткие поросячьи повизгивания. Самка, охраняющая гнездо, по-гусиному шипит, опуская изогнутую шею со взъерошенными перьями.',
      image: 'https://www.ebirds.ru/images/e/40.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC549767-JAREK-MATUSIAK-A-519%20%282%29%20%C5%82%C4%85b%C4%99dzie%20start.mp3'
    },
    {
      id: 6,
      name: 'Луток',
      species: 'Mergellus albellus',
      description: 'Весенняя миграция в средней полосе обычно проходит в апреле. Обитает на небольших лесных озёрах, старицах, медленно текущих реках. Гнезда устраивает исключительно в дуплах. В питании большую роль играют различные водные беспозвоночные.',
      image: 'https://www.ebirds.ru/images/e/67.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VXZDHTKCBO/Smew.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Беркут',
      species: 'Aquila chrysaetos',
      description: 'Основу питания составляют зайцы, суслики, сурки, крупные птицы. Отмечены успешные нападения на лисиц, оленят, глухарей, гусей. Часто питается падалью, особенно в зимний период. Охотничий участок пары может иметь площадь более 100 км2.',
      image: 'https://www.ebirds.ru/images/e/89.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC453324-Kungs%C3%B6rn_01.mp3'
    },
    {
      id: 2,
      name: 'Бородач',
      species: 'Gypaetus barbatus',
      description: 'В отличие от прочих падальщиков способен питаться даже крупными костями, сухожилиями, копытами, сухими обрывками шкуры. Может ловить и живую добычу. Брачный сезон начинается в январе или феврале и сопровождается воздушными играми.',
      image: 'https://www.ebirds.ru/images/e/94.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/UXGZWVYDFE/XC144936-Gypaetus%20barbatus_pos%C3%A9_C_F%20Deroussen_2013042300.mp3'
    },
    {
      id: 3,
      name: 'Змееяд',
      species: 'Circaetus gallicus',
      description: 'Предпочитает мозаичные биотопы с болотами и полянами. Основные требования к местам обитания — высокая численность змей и отсутствие беспокойства. Часто парит невысоко над землёй, высматривая добычу, нередко караулит её, сидя на присаде. ',
      image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/PQDMTRPGRL/XC568545-200614-000_HP10N6_17h03_Cgallicus.mp3'
    },
    {
      id: 4,
      name: 'Канюк',
      species: 'Buteo buteo',
      description: 'Питается в основном мелкими грызунами, при спаде численности полёвок и других мышевидных грызунов может питаться лягушками, птенцами, даже червями и моллюсками. Высматривает добычу на открытом месте в парящем полёте с высоты 30–50 м.',
      image: 'https://www.ebirds.ru/images/e/81.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC581056-Ormvr%C3%A5k_03.mp3'
    },
    {
      id: 5,
      name: 'Орлан-белохвост',
      species: 'Haliaeetus albicilla',
      description: 'В питании преобладает рыба массой до 3 кг, питается также млекопитающими размером до зайца, больными и ослабленными птицами, падалью, отбросами. Добычу ловит с бреющего полёта, рыбу выхватывает когтями из поверхностного слоя воды.',
      image: 'https://www.ebirds.ru/images/e/90.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MCFGTDXKHO/XC577967-200713_09T1_SA_XC.mp3'
    },
    {
      id: 6,
      name: 'Луговой лунь',
      species: 'Circus pygargus',
      description: 'Самец в токовом полёте издаёт мелодичные посвисты «тюв, тюву тюв», самка отвечает ему глухим «тююв». При беспокойстве самка издаёт серию криков «тюку-тюку», завершающиеся повышающимся визгом. Выпрашивая корм у самца, самка пищит, как птенец.',
      image: 'https://www.ebirds.ru/images/e/75.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC573274-JAREK-MATUSIAK-715%20b%C5%82otniak%20%C5%82%C4%85kowy%20f%20np.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Камышница',
      species: 'Gallinula chloropus',
      description: 'Гнездо прячет в густых зарослях, практически всегда оно располагается на воде или над водой. Старается прикрыть его и сверху, если нет естественной защиты, — загибает над ним листья болотных растений наподобие крыши беседки.',
      image: 'https://www.ebirds.ru/images/e/122.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/FFFADKCCII/XC572898-MH-D51.mp3'
    },
    {
      id: 2,
      name: 'Коростель',
      species: 'Crex Crex',
      description: 'Весной самцы много кричат, по этому звуку коростеля проще всего обнаружить в природе, он же послужил основой для его латинского названия. Обычно крик бывает отчётливо сдвоенным, но при сильном возбуждении некоторые самцы перестают «двоить» и начинают кричать с постоянными интервалами.',
      image: 'https://www.ebirds.ru/images/e/121.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TVVXDBKYFX/XC573232-Rale%20des%20genets%2C%20chant%2C%200101-011328.WAV.Mp3'
    },    
    {
      id: 3,
      name: 'Лысуха',
      species: 'Fulica atra',
      description: 'Насиживают и воспитывают птенцов оба родителя. После размножения, перед отлётом на зимовки, формирует скопления из десятков и даже сотен и тысяч птиц. Отлетает несколько раньше большинства водоплавающих. Обратно прилетает в апреле.',
      image: 'https://www.ebirds.ru/images/e/123.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/EDRTTPSCEN/XC574905-Foulque%20macroule%20200524_1600_0CA_Marais%20d%27Harchies_Digue%20d%27Harchies_Mixpre%20513.mp3'
    },
    {
      id: 4,
      name: 'Пастушок',
      species: 'Rallus aquaticus',
      description: 'Весной и в начале лета выдаёт своё присутствие голосом: ритмичными металлическими выкриками «дзит, дзит». Кричать может и днём, но чаще его голос раздаётся в сумерках или ночью(пронзительное «поросячье» взвизгивание при беспокойстве).',
      image: 'https://www.ebirds.ru/images/e/117.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VJHWYWADLY/XC579743-Ra%20juv.mp3'
    },
    {
      id: 5,
      name: 'Стрепет',
      species: 'Tetrax tetrax',
      description: 'Обычно молчалив, иногда можно слышать сигналы, передаваемые как «пуль-пуль-пуль». Голос самца в период токования — повторяемые с большими паузами (около 10 секунд) сухие хриплые трескучие сигналы «пррт», приглушённые.',
      image: 'https://www.ebirds.ru/images/e/126.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC416638-LS109081%20Little%20Bustard%20call%20C.mp3'
    },
    {
      id: 6,
      name: 'Султанка',
      species: 'Porphyrio poliocephalus',
      description: 'Держится в зарослях тростника или другой высокой околоводной растительности, скрытна и осторожна. Ловко лазает по стеблям растений, ходит и бегает, часто забирается по брюхо в воду, но плавать не любит. Взлетает неохотно, летит обычно низко над землёй или водой.',
      image: 'https://www.ebirds.ru/images/e/124.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC460193-LS101092%20Grey-headed%20Swamphen%20calls%20A.mp3'
    }
  ]
];

export default birdsData;