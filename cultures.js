(function(){
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

	var string = 'namespace = migration_fixes\n';
	string += '\n';
	string += 'migration_fixes.1 = {\n';
	string += '	type = country_event\n';
	string += '	hidden = yes\n';
	string += '	immediate = {\n';
	string += '		if = {\n';
	string += '			limit = {\n';
	string += '				NOT = { has_variable = migration_fixes_active }\n';
	string += '			}\n';
	string += '			set_variable = migration_fixes_active\n';
	string += '		}\n';
	string += '		if = {\n';
	string += '			limit = {\n';
	string += '				OR = {\n';
	string += '					AND = {\n';
	string += '						month = 0\n';
	string += '						NOT = { has_variable = migration_fixes_jan }\n';
	string += '					}\n';
	string += '					AND = {\n';
	string += '						month = 1\n';
	string += '						NOT = { has_variable = migration_fixes_feb }\n';
	string += '					}\n';
	string += '					AND = {\n';
	string += '						month = 2\n';
	string += '						NOT = { has_variable = migration_fixes_mar }\n';
	string += '					}\n';
	string += '					AND = {\n';
	string += '						month = 3\n';
	string += '						NOT = { has_variable = migration_fixes_apr }\n';
	string += '					}\n';
	string += '					AND = {\n';
	string += '						month = 4\n';
	string += '						NOT = { has_variable = migration_fixes_may }\n';
	string += '					}\n';
	string += '					AND = {\n';
	string += '						month = 5\n';
	string += '						NOT = { has_variable = migration_fixes_jun }\n';
	string += '					}\n';
	string += '					AND = {\n';
	string += '						month = 6\n';
	string += '						NOT = { has_variable = migration_fixes_jul }\n';
	string += '					}\n';
	string += '					AND = {\n';
	string += '						month = 7\n';
	string += '						NOT = { has_variable = migration_fixes_aug }\n';
	string += '					}\n';
	string += '					AND = {\n';
	string += '						month = 8\n';
	string += '						NOT = { has_variable = migration_fixes_sep }\n';
	string += '					}\n';
	string += '					AND = {\n';
	string += '						month = 9\n';
	string += '						NOT = { has_variable = migration_fixes_oct }\n';
	string += '					}\n';
	string += '					AND = {\n';
	string += '						month = 10\n';
	string += '						NOT = { has_variable = migration_fixes_nov }\n';
	string += '					}\n';
	string += '					AND = {\n';
	string += '						month = 11\n';
	string += '						NOT = { has_variable = migration_fixes_dec }\n';
	string += '					}\n';
	string += '				}\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					month = 0\n';
	string += '				}\n';
	string += '				set_variable = migration_fixes_jan\n';
	string += '				remove_variable = migration_fixes_feb\n';
	string += '				remove_variable = migration_fixes_mar\n';
	string += '				remove_variable = migration_fixes_apr\n';
	string += '				remove_variable = migration_fixes_may\n';
	string += '				remove_variable = migration_fixes_jun\n';
	string += '				remove_variable = migration_fixes_jul\n';
	string += '				remove_variable = migration_fixes_aug\n';
	string += '				remove_variable = migration_fixes_sep\n';
	string += '				remove_variable = migration_fixes_oct\n';
	string += '				remove_variable = migration_fixes_nov\n';
	string += '				remove_variable = migration_fixes_dec\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					month = 1\n';
	string += '				}\n';
	string += '				remove_variable = migration_fixes_jan\n';
	string += '				set_variable = migration_fixes_feb\n';
	string += '				remove_variable = migration_fixes_mar\n';
	string += '				remove_variable = migration_fixes_apr\n';
	string += '				remove_variable = migration_fixes_may\n';
	string += '				remove_variable = migration_fixes_jun\n';
	string += '				remove_variable = migration_fixes_jul\n';
	string += '				remove_variable = migration_fixes_aug\n';
	string += '				remove_variable = migration_fixes_sep\n';
	string += '				remove_variable = migration_fixes_oct\n';
	string += '				remove_variable = migration_fixes_nov\n';
	string += '				remove_variable = migration_fixes_dec\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					month = 2\n';
	string += '				}\n';
	string += '				remove_variable = migration_fixes_jan\n';
	string += '				remove_variable = migration_fixes_feb\n';
	string += '				set_variable = migration_fixes_mar\n';
	string += '				remove_variable = migration_fixes_apr\n';
	string += '				remove_variable = migration_fixes_may\n';
	string += '				remove_variable = migration_fixes_jun\n';
	string += '				remove_variable = migration_fixes_jul\n';
	string += '				remove_variable = migration_fixes_aug\n';
	string += '				remove_variable = migration_fixes_sep\n';
	string += '				remove_variable = migration_fixes_oct\n';
	string += '				remove_variable = migration_fixes_nov\n';
	string += '				remove_variable = migration_fixes_dec\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					month = 3\n';
	string += '				}\n';
	string += '				remove_variable = migration_fixes_jan\n';
	string += '				remove_variable = migration_fixes_feb\n';
	string += '				remove_variable = migration_fixes_mar\n';
	string += '				set_variable = migration_fixes_apr\n';
	string += '				remove_variable = migration_fixes_may\n';
	string += '				remove_variable = migration_fixes_jun\n';
	string += '				remove_variable = migration_fixes_jul\n';
	string += '				remove_variable = migration_fixes_aug\n';
	string += '				remove_variable = migration_fixes_sep\n';
	string += '				remove_variable = migration_fixes_oct\n';
	string += '				remove_variable = migration_fixes_nov\n';
	string += '				remove_variable = migration_fixes_dec\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					month = 4\n';
	string += '				}\n';
	string += '				remove_variable = migration_fixes_jan\n';
	string += '				remove_variable = migration_fixes_feb\n';
	string += '				remove_variable = migration_fixes_mar\n';
	string += '				remove_variable = migration_fixes_apr\n';
	string += '				set_variable = migration_fixes_may\n';
	string += '				remove_variable = migration_fixes_jun\n';
	string += '				remove_variable = migration_fixes_jul\n';
	string += '				remove_variable = migration_fixes_aug\n';
	string += '				remove_variable = migration_fixes_sep\n';
	string += '				remove_variable = migration_fixes_oct\n';
	string += '				remove_variable = migration_fixes_nov\n';
	string += '				remove_variable = migration_fixes_dec\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					month = 5\n';
	string += '				}\n';
	string += '				remove_variable = migration_fixes_jan\n';
	string += '				remove_variable = migration_fixes_feb\n';
	string += '				remove_variable = migration_fixes_mar\n';
	string += '				remove_variable = migration_fixes_apr\n';
	string += '				remove_variable = migration_fixes_may\n';
	string += '				set_variable = migration_fixes_jun\n';
	string += '				remove_variable = migration_fixes_jul\n';
	string += '				remove_variable = migration_fixes_aug\n';
	string += '				remove_variable = migration_fixes_sep\n';
	string += '				remove_variable = migration_fixes_oct\n';
	string += '				remove_variable = migration_fixes_nov\n';
	string += '				remove_variable = migration_fixes_dec\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					month = 6\n';
	string += '				}\n';
	string += '				remove_variable = migration_fixes_jan\n';
	string += '				remove_variable = migration_fixes_feb\n';
	string += '				remove_variable = migration_fixes_mar\n';
	string += '				remove_variable = migration_fixes_apr\n';
	string += '				remove_variable = migration_fixes_may\n';
	string += '				remove_variable = migration_fixes_jun\n';
	string += '				set_variable = migration_fixes_jul\n';
	string += '				remove_variable = migration_fixes_aug\n';
	string += '				remove_variable = migration_fixes_sep\n';
	string += '				remove_variable = migration_fixes_oct\n';
	string += '				remove_variable = migration_fixes_nov\n';
	string += '				remove_variable = migration_fixes_dec\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					month = 7\n';
	string += '				}\n';
	string += '				remove_variable = migration_fixes_jan\n';
	string += '				remove_variable = migration_fixes_feb\n';
	string += '				remove_variable = migration_fixes_mar\n';
	string += '				remove_variable = migration_fixes_apr\n';
	string += '				remove_variable = migration_fixes_may\n';
	string += '				remove_variable = migration_fixes_jun\n';
	string += '				remove_variable = migration_fixes_jul\n';
	string += '				set_variable = migration_fixes_aug\n';
	string += '				remove_variable = migration_fixes_sep\n';
	string += '				remove_variable = migration_fixes_oct\n';
	string += '				remove_variable = migration_fixes_nov\n';
	string += '				remove_variable = migration_fixes_dec\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					month = 8\n';
	string += '				}\n';
	string += '				remove_variable = migration_fixes_jan\n';
	string += '				remove_variable = migration_fixes_feb\n';
	string += '				remove_variable = migration_fixes_mar\n';
	string += '				remove_variable = migration_fixes_apr\n';
	string += '				remove_variable = migration_fixes_may\n';
	string += '				remove_variable = migration_fixes_jun\n';
	string += '				remove_variable = migration_fixes_jul\n';
	string += '				remove_variable = migration_fixes_aug\n';
	string += '				set_variable = migration_fixes_sep\n';
	string += '				remove_variable = migration_fixes_oct\n';
	string += '				remove_variable = migration_fixes_nov\n';
	string += '				remove_variable = migration_fixes_dec\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					month = 9\n';
	string += '				}\n';
	string += '				remove_variable = migration_fixes_jan\n';
	string += '				remove_variable = migration_fixes_feb\n';
	string += '				remove_variable = migration_fixes_mar\n';
	string += '				remove_variable = migration_fixes_apr\n';
	string += '				remove_variable = migration_fixes_may\n';
	string += '				remove_variable = migration_fixes_jun\n';
	string += '				remove_variable = migration_fixes_jul\n';
	string += '				remove_variable = migration_fixes_aug\n';
	string += '				remove_variable = migration_fixes_sep\n';
	string += '				set_variable = migration_fixes_oct\n';
	string += '				remove_variable = migration_fixes_nov\n';
	string += '				remove_variable = migration_fixes_dec\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					month = 10\n';
	string += '				}\n';
	string += '				remove_variable = migration_fixes_jan\n';
	string += '				remove_variable = migration_fixes_feb\n';
	string += '				remove_variable = migration_fixes_mar\n';
	string += '				remove_variable = migration_fixes_apr\n';
	string += '				remove_variable = migration_fixes_may\n';
	string += '				remove_variable = migration_fixes_jun\n';
	string += '				remove_variable = migration_fixes_jul\n';
	string += '				remove_variable = migration_fixes_aug\n';
	string += '				remove_variable = migration_fixes_sep\n';
	string += '				remove_variable = migration_fixes_oct\n';
	string += '				set_variable = migration_fixes_nov\n';
	string += '				remove_variable = migration_fixes_dec\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					month = 11\n';
	string += '				}\n';
	string += '				remove_variable = migration_fixes_jan\n';
	string += '				remove_variable = migration_fixes_feb\n';
	string += '				remove_variable = migration_fixes_mar\n';
	string += '				remove_variable = migration_fixes_apr\n';
	string += '				remove_variable = migration_fixes_may\n';
	string += '				remove_variable = migration_fixes_jun\n';
	string += '				remove_variable = migration_fixes_jul\n';
	string += '				remove_variable = migration_fixes_aug\n';
	string += '				remove_variable = migration_fixes_sep\n';
	string += '				remove_variable = migration_fixes_oct\n';
	string += '				remove_variable = migration_fixes_nov\n';
	string += '				set_variable = migration_fixes_dec\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					any_scope_state = {\n';
	string += '						owner = ROOT\n';
	string += '						is_capital = no\n';
	string += '					}\n';
	string += '				}\n';

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
		string += '								any_scope_pop = {\n';
		string += '									culture = cu:'+cultures[i]+'\n';
		string += '									total_size > 0\n';
		string += '								}\n';
		string += '							}\n';
		string += '						}\n';
		string += '						random_scope_state = {\n';
		string += '							limit = {\n';
		string += '								owner = ROOT\n';
		string += '								is_capital = no\n';
		string += '								any_scope_pop = {\n';
		string += '									culture = cu:'+cultures[i]+'\n';
		string += '									total_size > 0\n';
		string += '								}\n';
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
		string += '							if = {\n';
		string += '								limit = {\n';
		string += '									any_scope_pop = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 10\n';
		string += '									}\n';
		string += '								}\n';
		string += '								random_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 10\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '								}\n';
		string += '							}\n';
		string += '							else_if = {\n';
		string += '								limit = {\n';
		string += '									any_scope_pop = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 20\n';
		string += '									}\n';
		string += '								}\n';
		string += '								random_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 20\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '								}\n';
		string += '							}\n';
		string += '							else_if = {\n';
		string += '								limit = {\n';
		string += '									any_scope_pop = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 40\n';
		string += '									}\n';
		string += '								}\n';
		string += '								random_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 40\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '								}\n';
		string += '							}\n';
		string += '							else_if = {\n';
		string += '								limit = {\n';
		string += '									any_scope_pop = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 80\n';
		string += '									}\n';
		string += '								}\n';
		string += '								random_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 80\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '								}\n';
		string += '							}\n';
		string += '							else_if = {\n';
		string += '								limit = {\n';
		string += '									any_scope_pop = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 160\n';
		string += '									}\n';
		string += '								}\n';
		string += '								random_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 160\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '								}\n';
		string += '							}\n';
		string += '							else_if = {\n';
		string += '								limit = {\n';
		string += '									any_scope_pop = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 320\n';
		string += '									}\n';
		string += '								}\n';
		string += '								random_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 320\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '								}\n';
		string += '							}\n';
		string += '							else_if = {\n';
		string += '								limit = {\n';
		string += '									any_scope_pop = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 640\n';
		string += '									}\n';
		string += '								}\n';
		string += '								random_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 640\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '								}\n';
		string += '							}\n';
		string += '							else_if = {\n';
		string += '								limit = {\n';
		string += '									any_scope_pop = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 1280\n';
		string += '									}\n';
		string += '								}\n';
		string += '								random_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 1280\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '								}\n';
		string += '							}\n';
		string += '							else_if = {\n';
		string += '								limit = {\n';
		string += '									any_scope_pop = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 2560\n';
		string += '									}\n';
		string += '								}\n';
		string += '								random_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 2560\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '								}\n';
		string += '							}\n';
		string += '							else_if = {\n';
		string += '								limit = {\n';
		string += '									any_scope_pop = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 5120\n';
		string += '									}\n';
		string += '								}\n';
		string += '								random_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 5120\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '								}\n';
		string += '							}\n';
		string += '							else_if = {\n';
		string += '								limit = {\n';
		string += '									any_scope_pop = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 10240\n';
		string += '									}\n';
		string += '								}\n';
		string += '								random_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 10240\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '								}\n';
		string += '							}\n';
		string += '							else_if = {\n';
		string += '								limit = {\n';
		string += '									any_scope_pop = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 20480\n';
		string += '									}\n';
		string += '								}\n';
		string += '								random_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '										total_size <= 20480\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '								}\n';
		string += '							}\n';
		string += '							else = {\n';
		string += '								random_scope_pop = {\n';
		string += '									limit = {\n';
		string += '										culture = cu:'+cultures[i]+'\n';
		string += '										strata = lower\n';
		string += '										NOT = { is_pop_type = slaves }\n';
		string += '									}\n';
		string += '									move_pop = scope:migration_fixes_target_'+cultures[i]+'_state\n';
		string += '								}\n';
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

	string += '			}\n';
	string += '		}\n';
	string += '		trigger_event = {\n';
	string += '			id = migration_fixes.1\n';
	string += '			days = 1\n';
	string += '		}\n';
	string += '	}\n';
	string += '}\n';

	console.log(string);
})();
