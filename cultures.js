(function(){
	var string = '';
	var cultures = ['welsh',
	'scottish',
	'galician',
	'malay',
	'bornean',
	'sumatran',
	'balinese',
	'cajun',
	'assyrian',
	'circassian',
	'francoprovencal',
	'chechen',
	'karelian',
	'bashkir',
	'buryat',
	'mordvin',
	'chuvash',
	'mari',
	'udmurt',
	'mazanderani',
	'luri',
	'kho',
	'north_german',
	'south_german',
	'ashkenazi',
	'dutch',
	'flemish',
	'wallonian',
	'boer',
	'alemannic',
	'swedish',
	'danish',
	'norwegian',
	'icelandic',
	'finnish',
	'sami',
	'british',
	'irish',
	'australian',
	'north_italian',
	'south_italian',
	'maltese',
	'basque',
	'spanish',
	'catalan',
	'portuguese',
	'french',
	'occitan',
	'breton',
	'croat',
	'serb',
	'bulgarian',
	'albanian',
	'slovene',
	'bosniak',
	'romanian',
	'hungarian',
	'polish',
	'lithuanian',
	'czech',
	'slovak',
	'russian',
	'byelorussian',
	'ukrainian',
	'ugrian',
	'latvian',
	'estonian',
	'greek',
	'georgian',
	'armenian',
	'sephardic',
	'turkish',
	'azerbaijani',
	'north_caucasian',
	'maghrebi',
	'misri',
	'mashriqi',
	'bedouin',
	'berber',
	'persian',
	'uzbek',
	'kazak',
	'kirgiz',
	'tajik',
	'uighur',
	'pashtun',
	'baluchi',
	'hazara',
	'turkmen',
	'kurdish',
	'tatar',
	'mongol',
	'kalmyk',
	'siberian',
	'yakut',
	'tibetan',
	'assamese',
	'bihari',
	'manipuri',
	'nepali',
	'oriya',
	'sinhala',
	'avadhi',
	'panjabi',
	'kashmiri',
	'sindi',
	'rajput',
	'kannada',
	'malayalam',
	'telegu',
	'vietnamese',
	'khmer',
	'batak',
	'dayak',
	'malagasy',
	'filipino',
	'moro',
	'javan',
	'moluccan',
	'thai',
	'mon',
	'khmu',
	'lao',
	'shan',
	'burmese',
	'kachin',
	'karen',
	'japanese',
	'manchu',
	'han',
	'korean',
	'ainu',
	'hakka',
	'miao',
	'min',
	'zhuang',
	'yi',
	'yue',
	'polynesian',
	'hawaiian',
	'melanesian',
	'micronesian',
	'maori',
	'yuanzhumin',
	'aborigine',
	'zapotec',
	'mayan',
	'nahua',
	'tarascan',
	'quechua',
	'guarani',
	'aimara',
	'amazonian',
	'patagonian',
	'guajiro',
	'tupinamba',
	'metis',
	'dakota',
	'cherokee',
	'muskogean',
	'pueblo',
	'inuit',
	'cree',
	'navajo',
	'athabaskan',
	'salish',
	'nez_perce',
	'siouan',
	'comanche',
	'algonquian',
	'iroquoian',
	'caddoan',
	'paiute',
	'hokan',
	'apache',
	'oodham',
	'mixtec',
	'muisca',
	'miskito',
	'cariban',
	'yankee',
	'dixie',
	'mexican',
	'central_american',
	'caribeno',
	'north_andean',
	'south_andean',
	'peruvian',
	'bolivian',
	'ecuadorian',
	'chilean',
	'venezuelan',
	'argentine',
	'uruguayan',
	'paraguayan',
	'colombian',
	'platinean',
	'brazilian',
	'sulista',
	'nordestino',
	'amazonic',
	'paulista',
	'afro_american',
	'afro_caribbean',
	'afro_caribeno',
	'afro_brazilian',
	'afro_antillean',
	'akan',
	'bambara',
	'bassa',
	'dyula',
	'edo',
	'ewe',
	'fon',
	'fulbe',
	'haratin',
	'hausa',
	'ibibio',
	'ibo',
	'kissi',
	'kru',
	'mande',
	'bidan',
	'mossi',
	'senufo',
	'songhai',
	'tiv',
	'tuareg',
	'wolof',
	'yoruba',
	'bakongo',
	'baguirmi',
	'fang',
	'kanuri',
	'luba',
	'lunda',
	'mongo',
	'sara',
	'teda',
	'equatorial_bantu',
	'fluvian_bantu',
	'nilotic',
	'amhara',
	'afar',
	'azande',
	'baganda',
	'beja',
	'dinka',
	'fur',
	'kikuyu',
	'luo',
	'maasai',
	'nuer',
	'nuba',
	'oromo',
	'ruanda',
	'rundi',
	'sidama',
	'somali',
	'sudanese',
	'sukuma',
	'swahili',
	'tigray',
	'unyamwezi',
	'lacustrine_bantu',
	'chewa',
	'herero',
	'khoisan',
	'lomwe',
	'makua',
	'nguni',
	'ovimbundu',
	'sena',
	'shona',
	'sotho',
	'tonga',
	'tswana',
	'xhosa',
	'yao',
	'zulu',
	'kavango_bantu',
	'anglo_canadian',
	'franco_canadian',
	'sorb',
	'tuvan',
	'corsican',
	'yemenite',
	'szekely',
	'hindustani',
	'lushai',
	'bundeli',
	'pahari',
	'gondi',
	'bageli',
	'chhattisgarhi',
	'naga',
	'deccani',
	'gujarati',
	'tamil',
	'bengali',
	'marathi',
	'pathan'];

	for (var i = 0; i < cultures.length; i++) {
		string += '				if = {\n';
		string += '					limit = {\n';
		string += '						country_has_primary_culture = cu:'+cultures[i]+'\n';
		string += '					}\n';
		string += '					if = {\n';
		string += '						limit = {\n';
		string += '							any_scope_state = {\n';
		string += '								owner = ROOT\n';
		string += '								is_capital = no\n';
		string += '								any_scope_pop = { culture = cu:'+cultures[i]+' }\n';
		string += '							}\n';
		string += '						}\n';
		string += '						random_scope_state = {\n';
		string += '							limit = {\n';
		string += '								owner = ROOT\n';
		string += '								is_capital = no\n';
		string += '								any_scope_pop = { culture = cu:'+cultures[i]+' }\n';
		string += '							}\n';
		string += '							save_temporary_scope_as = migration_fixes_home_'+cultures[i]+'_state\n';
		string += '						}\n';
		string += '					}\n';
		string += '					else = {\n';
		string += '						random_scope_state = {\n';
		string += '							limit = {\n';
		string += '								owner = ROOT\n';
		string += '								is_capital = yes\n';
		string += '							}\n';
		string += '							save_temporary_scope_as = migration_fixes_home_'+cultures[i]+'_state\n';
		string += '						}\n';
		string += '					}\n';
		string += '					every_scope_state = {\n';
		string += '						limit = {\n';
		string += '							owner = ROOT\n';
		string += '							NOT = { any_scope_pop = { culture = cu:'+cultures[i]+' } }\n';
		string += '							OR = {\n';
		string += '								is_incorporated = yes\n';
		string += '								NOT = { has_state_trait = state_trait_severe_malaria }\n';
		string += '								owner = { has_technology_researched = quinine }\n';
		string += '							}\n';
		string += '							OR = {\n';
		string += '								is_incorporated = yes\n';
		string += '								is_split_state = no\n';
		string += '								owner = { NOT = { has_law = law_type:law_no_colonial_affairs } }\n';
		string += '								NOT = { any_neighbouring_state = { owner = { is_country_type = decentralized } } }\n';
		string += '							}\n';
		string += '							OR = {\n';
		string += '								is_isolated_from_market = no\n';
		string += '								AND = {\n';
		string += '									is_coastal = yes\n';
		string += '									has_building = building_port\n';
		string += '								}\n';
		string += '							}\n';
		string += '						}\n';
		string += '						save_temporary_scope_as = migration_fixes_target_'+cultures[i]+'_state\n';
		string += '						scope:migration_fixes_home_'+cultures[i]+'_state = {\n';
		string += '							random_scope_pop = {\n';
		string += '								limit = {\n';
		string += '									culture = cu:'+cultures[i]+'\n';
		string += '									NOT = { is_pop_type = slaves }\n';
		string += '								}\n';
		string += '								move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '							}\n';
		string += '						}\n';
		string += '						if = {\n';
		string += '							limit = {\n';
		string += '								is_incorporated = no\n';
		string += '							}\n';
		string += '							scope:migration_fixes_target_'+cultures[i]+'_state = {\n';
		string += '								every_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_home_'+cultures[i]+'_state\n';
		string += '								}\n';
		string += '							}\n';
		string += '						}\n';
		string += '					}\n';
		string += '				}\n';
	}

    console.log(string);
})();
