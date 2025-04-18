
"use strict"

// vim:set foldmethod=marker:

const {spaces, strategy_cards, stability_cards} = require("./data.js")

var game, view, states = {}

// BEGIN AUTO CONSTANTS

// CARDS
const C_ADMIRAL_VON_TIRPITZ = 1
const C_STATE_SECULARISM_IN_FRANCE = 2
const C_SECOND_INTERNATIONAL = 3
const C_FRANZ_FERDINAND = 4
const C_DREYFUS_AFFAIR = 5
const C_FRANCE_SCORING = 6
const C_AUSTRIA_HUNGARY_SCORING = 7
const C_RUSSIA_SCORING = 8
const C_RUSSO_JAPANESE_WAR = 9
const C_ENTENTE_CORDIALE = 10
const C_FOREIGN_INVESTMENTS = 11
const C_MAGYARIZATION = 12
const C_TRADITIONALISM = 13
const C_RADICAL_PARTY_FOUNDED = 14
const C_LORD_FISHER = 15
const C_STYMIED = 16
const C_EIGHT_NATION_ALLIANCE = 17
const C_BERNHARD_VON_BÜLOW = 18
const C_UNION_OF_LIBERATION = 19
const C_BONAPARTISM___MONARCHISM = 20
const C_PRUSSIAN_SPIRIT = 21
const C_SOCIALIST_MOVEMENTS = 22
const C_THIRD_DEPARTMENT___OKHRANA = 23
const C_TSARIST_REPRESSION = 24
const C_LEGACY_OF_BISMARCK = 25
const C_FRANCO_RUSSIAN_ALLIANCE = 26
const C_THE_DUAL_ALLIANCE = 27
const C_SCRAMBLE_FOR_AFRICA = 28
const C_TWO_POWER_STANDARD = 29
const C_MILITARY_TRADITION = 30
const C_STATUS_QUO = 31
const C_COPENHAGENIZATION = 32
const C_MODERNISM = 33
const C_GOVERNMENT_SPONSORED_ART = 34
const C_ABSOLUTISM = 35
const C_MARCH_OF_HISTORY = 36
const C_FERDINAND_ESTERHAZY = 37
const C_KULTURKAMPF = 38
const C_SPIRITISM_AND_MYSTICISM = 39
const C_INDECISIVENESS = 40
const C_DREYFUS_REHABILITATED = 41
const C_THE_KAISER_INTERVENES = 42
const C_BALKANS_SCORING = 43
const C_SECOND_HAGUE_CONFERENCE = 44
const C_BELGIAN_RULE_IN_CONGO = 45
const C_LIBERALS_GAIN_POWER_IN_UK = 46
const C_YOUNG_TURK_REVOLUTION = 47
const C_ENVER_PASHA = 48
const C_AUSTRIA_ANNEXES_BOSNIA = 49
const C_SCHLIEFFEN_PLAN_ADOPTED = 50
const C_NORWEGIAN_INDEPENDENCE = 51
const C_CONRAD_VON_HÖTZENDORF = 52
const C_GERMAN_SCORING = 53
const C_TRADITIONALISTS_GAIN_POWER = 54
const C_VISCOUNT_GREY = 55
const C_CONTROL_OF_THE_CHANNEL = 56
const C_NAVAL_BILL___FLEET_LAW = 57
const C_US_INTERVENTIONISM = 58
const C_DECLARATION_OF_INDEPENDENCE = 59
const C_LEGACY_OF_1848 = 60
const C_RUSSIAN_COLLAPSE = 61
const C_JOZEF_PIŁSUDSKI = 62
const C_OCTOBER_MANIFESTO = 63
const C_DIAGONAL_POLITICS = 64
const C_SECOND_DUMA_DISBANDED = 65
const C_HENRY_WILSON = 66
const C_LANDSLIDE_ELECTORAL_VICTORY = 67
const C_TRIPLE_ALLIANCE = 68
const C_PRINCE_HEINRICH = 69
const C_WINSTON_CHURCHILL = 70
const C_LOCAL_UPRISING = 71
const C_MILITARY_PARADE = 72
const C_CENTRAL_AUTHORITY = 73
const C_VON_BETHMANN_HOLLWEG = 74
const C_JEAN_JAURES = 75
const C_GEORGES_CLEMENCEAU = 76
const C_ALSACE_LORRAINE = 77
const C_REVOLUTION_OF_1905 = 78
const C_VICTOR_CHERNOV = 79
const C_TANGIER_CRISIS = 80
const C_RAOUL_VILLAIN = 81
const C_AGADIR_CRISIS = 82
const C_GAVRILO_PRINCIP = 83
const C_BALKAN_FEDERATION = 84
const C_PATRIOTISM___NATIONALISM = 85
const C_PARLIAMENT_ACT_OF_1911 = 86
const C_WAR_IN_THE_BALKANS = 87
const C_US_NON_INTERVENTIONISM = 88
const C_STOLYPIN_LAND_REFORMS = 89
const C_BALKAN_CIVIL_WAR = 90
const C_FUNERAL_OF_EDWARD_VII = 91
const C_FREEDOM_AND_ACCORD_PARTY = 92
const C_RAID_ON_THE_SUBLIME_PORTE = 93
const C_PERFIDIOUS_ITALY = 94
const C_SPLENDID_ISOLATION = 95
const C_YUGOSLAVIA = 96
const C_EXILES_ESCAPE_RETURN = 97
const C_REINHOLD_VON_SYDOW = 98
const C_FRANCO_BRITISH_NAVAL_COOPERATION = 99
const C_ARMS_TRADERS_INDUSTRY = 100
const C_ARISTIDE_BRIAND = 101
const C_GERMAN_ARMY_EXPANSION = 102
const C_BLACK_HAND = 103
const C_ATTEMPTED_NEUTRALITY = 104
const C_ROSA_LUXEMBURG = 105
const C_PREVENTATIVE_WAR = 106
const C_MITTELEUROPA = 107
const C_WELTPOLITIK = 108
const C_LEOPOLD_VON_BERCHTOLD = 109
const C_ISTVAN_TISZA = 110

const EXTRA_STYMIED = 116
const C_POPULAR_UPROAR = 4

// SPACES

const S_BRITANNY_NORMANDY = 0
const S_PICARDY = 1
const S_BEAU_MONDE = 2
const S_FRENCH_WRITERS = 3
const S_FRENCH_CATHOLIC_CHURCH = 4
const S_FAUVISM = 5
const S_PARIS = 6
const S_FRENCH_ARMY = 7
const S_BORDEAUX = 8
const S_DIJON = 9
const S_NICE = 10
const S_COLONIALS = 11
const S_HANOVER_OLDENBURG = 12
const S_KIEL = 13
const S_JUGENDSTIL = 14
const S_EAST_PRUSSIA = 15
const S_IMPERIAL_ARMY = 16
const S_WILHELM_II = 17
const S_BERLIN = 18
const S_SILESIA = 19
const S_ALSACE_LORRAINE = 20
const S_INDUSTRIALIISTS = 21
const S_SAXONY = 22
const S_BAVARIA = 23
const S_BOHEMIA = 24
const S_MORAVIA = 25
const S_GALICIA_PRZEMESYL = 26
const S_VIENNESE_SECESSION = 27
const S_VIENNA = 28
const S_BUDAPEST = 29
const S_ALTO_ADIGE = 30
const S_TRIESTE = 31
const S_CATHOLIC_CHURCH = 32
const S_DUAL_MONARCHY = 33
const S_TRANSYLVANIA = 34
const S_CROATIA = 35
const S_FINLAND = 36
const S_SIBERIA = 37
const S_SAINT_PETERSBURG = 38
const S_BOURGEOISIE = 39
const S_BALTIC_STATES = 40
const S_NICOLAS_II = 41
const S_MOSCOW = 42
const S_SYMBOLISM = 43
const S_POLAND = 44
const S_TSARIST_ARMY = 45
const S_BELARUS = 46
const S_THE_UKRAINE = 47
const S_ORTHODOX_CHURCH = 48
const S_CRIMEA = 49
const S_BOSNIA = 50
const S_SERBIA = 51
const S_ROMANIA = 52
const S_MONTENEGRO = 53
const S_BULGARIA = 54
const S_MACEDONIA = 55
const S_GREECE = 56
const S_NORWAY = 57
const S_SWEDEN = 58
const S_DENMARK = 59
const S_NETHERLANDS = 60
const S_BELGIUM = 61
const S_SWITZERLAND = 62
const S_SPAIN_PORTUGAL = 63
const S_MOROCCO = 64
const S_ALGERIA = 65
const S_TUNISIA = 66
const S_ITALY = 67
const S_LIBYA = 68
const S_CONSTANTINOPLE = 69
const S_GREAT_BRITAIN = 70
const S_EGYPT = 71
const S_OTTOMAN_EMPIRE = 72

const N_PRE_DREADNOUGHT = 0
const N_HMS_DREADNOUGHT = 1
const N_NASSAU_CLASS = 2
const N_BELLEROPHON_CLASS = 3
const N_HELGOLAND_CLASS = 4
const N_COLOSSUS_CLASS = 5
const N_KAISER_CLASS = 6
const N_ORION_CLASS = 7
const N_MOLTKE_CLASS = 8
const N_KING_GEORGE_V_CLASS = 9
const N_KONIG_CLASS = 10
const N_QUEEN_ELIZABETH_CLASS = 11
const N_BAYERN_CLASS = 12
const N_REVENGE_CLASS = 13

const NAVAL_SPACES = [N_PRE_DREADNOUGHT, N_HMS_DREADNOUGHT, N_NASSAU_CLASS, N_BELLEROPHON_CLASS, N_HELGOLAND_CLASS, N_COLOSSUS_CLASS, N_KAISER_CLASS, N_ORION_CLASS, N_MOLTKE_CLASS, N_KING_GEORGE_V_CLASS, N_KONIG_CLASS, N_QUEEN_ELIZABETH_CLASS, N_BAYERN_CLASS, N_REVENGE_CLASS ]

const AUT = "Authoritarian"
const LIB = "Liberal"
const PLAYERS = [ AUT , LIB ]

const NAVAL_REQ = [4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 10]
const LAST_NAVAL = 13
const GREAT_WAR = [-4, -3, -2, -1, 0]
const TENSION = [0, 1 , 2, 3, 4, 5, 6]
const LAST_STRATEGY_CARD = 110
const SCORING_CARDS = [ 6, 7, 8, 43, 53 ]
const SWITCH_EVENTS = [C_BELGIAN_RULE_IN_CONGO, C_TANGIER_CRISIS, C_AGADIR_CRISIS]
const AUTO_RESOLVE_EVENTS = [C_STATE_SECULARISM_IN_FRANCE, C_LEGACY_OF_BISMARCK, C_TWO_POWER_STANDARD, C_MARCH_OF_HISTORY, C_ABSOLUTISM, C_JEAN_JAURES, C_US_INTERVENTIONISM, C_US_NON_INTERVENTIONISM, C_REINHOLD_VON_SYDOW]
const ONE_TURN_EVENTS = [C_DREYFUS_AFFAIR, C_ABSOLUTISM, C_MARCH_OF_HISTORY, C_LEGACY_OF_BISMARCK]
const RED_EVENTS = [C_ENTENTE_CORDIALE, C_UNION_OF_LIBERATION, C_YOUNG_TURK_REVOLUTION, C_ENVER_PASHA, C_OCTOBER_MANIFESTO, C_JEAN_JAURES, C_REVOLUTION_OF_1905, C_VICTOR_CHERNOV ]

const SOCIO_GOVERNMENT = 1
const SOCIO_MONARCHY = 2
const SOCIO_CHURCH = 3
const SOCIO_WORKERS = 4
const SOCIO_BOURGOISIE = 5
const SOCIO_FARMERS = 6
const SOCIO_ARMY = 7
const SOCIO_INTELLECTUALS = 8
const SOCIO_ANNEX = 9

const SOCIO_NAMES = [null, 'Government', 'Monarchy', 'Church', 'Workers', 'Bourgoisie', 'Farmers', 'Army', 'Intellectuals', 'Annex']

const R_FRANCE = "France"
const R_AUSTRIA_HUNGARY = "Austria-Hungary"
const R_RUSSIA = "Russia"
const R_BALKANS = "Balkans"
const R_GERMANY = "Germany"
const R_INDEPENDENT = "Independent"

const N_FRANCE = 0
const N_AUSTRIA_HUNGARY = 1
const N_RUSSIA = 2
const N_BALKANS = 3
const N_GERMANY = 4
const N_INDEPENDENT = 5
const N_BRITAIN = 6

const COUNTRIES = ["France", "Austria-Hungary", "Russia", "Balkans", "Germany", "Independent", "Britain"]
const ADJ_INDEPENDENTS = [[S_BELGIUM, S_SWITZERLAND, S_SPAIN_PORTUGAL, S_MOROCCO, S_ALGERIA, S_TUNISIA, S_ITALY], [S_SWITZERLAND, S_ITALY], [S_NORWAY, S_SWEDEN, S_CONSTANTINOPLE], [S_ITALY, S_CONSTANTINOPLE], [S_BELGIUM, S_NETHERLANDS, S_DENMARK, S_NORWAY, S_SWEDEN, S_SWITZERLAND]]

const card_name = strategy_cards.map(x => x ? clean_name(x.name) : "")
const stability_card_name = stability_cards.map(x => x ? clean_name(x.name) : "")
const quoted_card_name = strategy_cards.map(x => x ? `\u201c` + clean_name(x.name) + `\u201d` : "")
const quoted_stability_card_name = stability_cards.map(x => x ? `\u201c` + clean_name(x.name) + `\u201d` : "")

const FRANCE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const GERMANY = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
const AUSTRIA_HUNGARY = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
const RUSSIA = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
const BALKLANS = [50, 51, 52, 53, 54, 55, 56]
const INDEPENDENTS = [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69]
const ALL_SPACES = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69 ]
const COUNTRY_SPACES = [FRANCE, AUSTRIA_HUNGARY, RUSSIA, BALKLANS, GERMANY, INDEPENDENTS]
const LAST_SPACE = 69

const INFL_SHIFT = 5
const INFL_MASK = 0b11111

exports.scenarios = [
	"Standard",
]

exports.roles = [ AUT, LIB ]

function load_game(state) {
	state.active = PLAYERS.indexOf(state.active)
	return state
}

function save_game(state) {
	state.active = PLAYERS[state.active]
	return state
}

// --- SET UP ---

exports.setup = function (seed, scenario, _options) {
	game = {
		seed: seed,
		log: [],
		undo: [],
		summary: [],
		active: 0,
		state: 'place_starting_infl',

		turn: 0,
        round: 0,
		great_war: 0,
		tension: 0,
		vp: 0,
		aut_naval_position: 0,		
		lib_naval_position: 0,
		aut_naval_attempted_this_turn: 0,
		lib_naval_attempted_this_turn: false,

		infl: [],
		authoritarian_hand: [],
		liberal_hand: [],
		playable_cards: [],
		
		strategy_deck: [],
		strategy_discard: [],
		strategy_removed: [],
		persistent_events: [],

		aut_stability: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		aut_stability_discard: [],
		lib_stability: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		lib_stability_discard: []

	}
	// Set starting influence
	for (let s of ALL_SPACES) {
		set_infl(LIB, s, spaces[s].lib_infl)
		set_infl(AUT, s, spaces[s].auth_infl)
	}

	log_h1("Europe in Turmoil: Prelude to the Great War")
    log_h2("Discretionary Support Points")
	if (scenario === "Standard")
		standard_setup()
	else
		throw new Error("Unknown scenario:", scenario)
	start_game()

	return save_game(game)
}

exports.view = function (state, current) {
    
    game = load_game(state)

	view = {
		log: game.log,
		active: PLAYERS[game.active],
		prompt: null,
		actions: null,

		turn: game.turn,
        round: game.round,
		phasing_player: game.phasing_player,
		vp: game.vp,
		tension: game.tension,
		great_war: game.great_war,
		black_hand: game.black_hand,
		
		played_card: game.played_card,
		vm_event: game.vm_event,
		discard: game.discard,
		infl: game.infl,
		lib_naval: game.lib_naval_position,
		lib_naval_plus: game.lib_naval_attempted,
		aut_naval: game.aut_naval_position,
		aut_naval_plus: game.aut_naval_attempted,
		persistent_events: game.persistent_events,
		strategy_deck: game.strategy_deck.length,
		strategy_removed: game.strategy_removed,
		strategy_discard: game.strategy_discard,
		liberal_hand: game.liberal_hand.length,
		authoritarian_hand: game.authoritarian_hand.length,

		hand: []
    }
	if (game.high_water)
		view.high_water = game.high_water
	if (game.scoring_card) {
		view.scoring_card = game.scoring_card
		view.show_stability = game.show_stability
		view.lib_stability_card = game.lib_stability_card
		view.aut_stability_card = game.aut_stability_card
		if (game.aut_stability_card_2)
			view.aut_stability_card_2 = game.aut_stability_card_2
		if (game.aut_stability_card_3)
			view.aut_stability_card_3 = game.aut_stability_card_3
		if (game.lib_stability_card_2)
			view.lib_stability_card_2 = game.lib_stability_card_2
		if (game.lib_stability_card_3)
			view.lib_stability_card_3 = game.lib_stability_card_3
	}
	if (current === LIB) {
		view.hand = game.liberal_hand
		if (game.view_opp_hand)
			view.opp_hand = game.authoritarian_hand
		if (game.scoring_card) {
			view.stability_hand = game.lib_stability
		}
	} else if (current === AUT) {
		view.hand = game.authoritarian_hand
		if (game.scoring_card) {
			view.stability_hand = game.aut_stability
			view.lib_stability_card = game.lib_stability_card
		}
		if (game.view_opp_stability) {
			view.view_opp_stability = true
			view.stability_hand = game.lib_stability
		}
	}
	if (current === PLAYERS[game.active]) {
		if (game.selected_space >= 0)
			view.selected_space = game.selected_space
	}
	
	if (game.state === "game_over") {
		view.prompt = game.victory
	} else if (current === "Observer" || PLAYERS[game.active] !== current ) {
		if (states[game.state]) {
			let inactive = states[game.state].inactive
			if (!inactive)
				inactive = "resolve " + get_quoted_card_name()
			view.prompt = `Waiting for ${PLAYERS[game.active]} to ${inactive}.`
		} else {
			view.prompt = "A Unknown state: " + game.state
		}
	} else {
		view.actions = {}

		if (states[game.state])
			states[game.state].prompt(game.active)
		else
			view.prompt = "B Unknown state: " + game.state
		if (view.actions.undo === undefined) {
			if (game.undo && game.undo.length > 0)
				view.actions.undo = 1
			else
				view.actions.undo = 0
		}
	}

    save_game(game)
	return view
}

function standard_setup() {
	game.starting_infl = [2, 2, 3, 3, 1, 1]
}

function start_game() {
    game.active = 0
	game.temp = 0
	game.ops = 2
	game.strategy_deck = draw_deck()
	game.playable_cards = [C_FRANZ_FERDINAND, C_DREYFUS_AFFAIR, C_BONAPARTISM___MONARCHISM, C_FRANCO_RUSSIAN_ALLIANCE, C_FERDINAND_ESTERHAZY, C_VISCOUNT_GREY, C_US_INTERVENTIONISM, C_HENRY_WILSON, C_TRIPLE_ALLIANCE, C_JEAN_JAURES, C_GEORGES_CLEMENCEAU, C_GAVRILO_PRINCIP, C_ARMS_TRADERS_INDUSTRY]
	draw_cards(game.strategy_deck, game.liberal_hand, game.authoritarian_hand, 8, 8)
	log('.0 SP:')
}


// =============== OPERATIONS FUNCTIONS ==========================

function add_infl(space) {
	push_undo()
	
	if (game.persistent_events.includes(C_BALKAN_FEDERATION)) {
		if (spaces[space].country !== R_BALKANS) {
			game.balkan_federation_tracker = false
		}
	}

	if (game.active === game.dreyfus_affair && spaces[space].country === R_FRANCE) {
		logi(`C${C_DREYFUS_AFFAIR}`)
		if (check_opp_control(space)) {
			if (game.active === 1 && game.persistent_events.includes(C_GEORGES_CLEMENCEAU)) {
				logi(`C${C_GEORGES_CLEMENCEAU}`)
				game.ops -=2
			} else
				game.ops -= 4
		} else {
			game.ops -= 2
		}
	}  else if (game.persistent_events.includes(C_LEOPOLD_VON_BERCHTOLD) && get_country(N_BALKANS).includes(space)) {
		logi(`C${C_LEOPOLD_VON_BERCHTOLD}`)
		if (check_opp_control(space))
			game.ops -= 4
		else
			game.ops -= 2
	}
	else if (check_opp_control(space)) {
		if (game.active === 1 && spaces[space].country === R_FRANCE) // WHAT IS THIS?
			game.ops --
		else {
			game.ops -= 2
			if (game.ops < 0) {
				if (!game.bf_logged) {
					logi(`C${C_BALKAN_FEDERATION}`)
					game.bf_logged = true
				}
				game.balkan_federation_tracker = false
			}
		}
	} else {
		game.ops --
	}

	if (game.active === 0) {
		increase_infl(AUT, space)
	} else {
		increase_infl(LIB, space)
	}
	summary_influence(space)

	// Check Balkan Federation is true and condition has been met
	if (
		game.ops === 0 &&
		game.active === 1 &&
		game.persistent_events.includes(C_BALKAN_FEDERATION) &&
		game.balkan_federation_tracker
	) {
		game.ops ++
		if (!game.bf_logged) {
			logi(`C${C_BALKAN_FEDERATION}`)
			game.bf_logged = true
		}
		game.balkan_federation_tracker = false
	}
}

function add_infl_free(space) {
	push_undo()
	game.ops--
	if (game.active === 0)
		increase_infl(AUT, space)
	else
		increase_infl(LIB, space)
	summary_influence(space)
}

function add_limited_infl(space, max_infl) {
	push_undo()
	game.ops --
	if (!game.vm_influence_added) {
		game.vm_influence_added = {}
	}
	if (!game.vm_influence_added[space]) {
		game.vm_influence_added[space] = 0
	}
	if (game.active === 0) {
		increase_infl(AUT, space)
	} else {
		increase_infl(LIB, space)
	}
	summary_influence(space)
	game.vm_influence_added[space] ++
}

function break_control(space) {
	push_undo()
	let opp_infl = 0
	let own_infl = 0
	let req = 0
	if (game.active === 0) {
		opp_infl = get_infl(game.infl, LIB, space)
		req = opp_infl - spaces[space].stability + 1
		own_infl = get_infl(game.infl, AUT, space)
		set_infl(AUT, space, req)
	} else {
		opp_infl = get_infl(game.infl, AUT, space)
		req = opp_infl - spaces[space].stability + 1
		own_infl = get_infl(game.infl, LIB, space)
		set_infl(LIB, space, req)
	}
	log(`Added ${req - own_infl} SP to %${space}.`)
}

function match_infl(space) {
	push_undo()
	game.ops --
	if (game.active === 0) {
		set_infl(AUT, space, get_infl(game.infl, LIB, space))
	} else {
		set_infl(LIB, space, get_infl(game.infl, AUT, space))
	}
}

function remove_infl(space) {
	push_undo()
	if (game.remove_opponent_infl) {
		if (game.active === 0) {
			decrease_infl(LIB, space)
		} else {
			decrease_infl(AUT, space)
		}
	} else {
	if (game.active === 0) {
			decrease_infl(AUT, space)
		} else {
			decrease_infl(LIB, space)
		}
	}
	summary_influence(space)
	game.ops--
	
	if (game.vm_influence_added && game.vm_influence_added[space] >= 0) {
		game.vm_influence_added[space]++
	}
	if (game.vm_country_added) {
		let c = COUNTRIES.indexOf(spaces[space].country)
		game.vm_country_added[c] ++
	}
}

function remove_all_infl(space) {
	push_undo()
	if (game.remove_opponent_infl) {
		if (game.active === 0) {
			set_infl(LIB, space, 0)
			log(`Removed all Liberal SP from %${space}`)
		} else {
			set_infl(AUT, space, 0)
			log(`Removed all Authoritarian SP from %${space}`)
		}
	} else {
	if (game.active === 0) {
			set_infl(AUT, space, 0)
			log(`Removed all Liberal SP from %${space}`)
		} else {
			set_infl(LIB, space, 0)
			log(`Removed all Liberal SP from %${space}`)
		}
	}
	
	game.ops--
	
	if (game.vm_influence_added && game.vm_influence_added[space] >= 0) {
		game.vm_influence_added[space]++
	}
	if (game.vm_country_added) {
		let c = COUNTRIES.indexOf(spaces[space].country)
		game.vm_country_added[c] ++
	}
}

function remove_limited_infl(space) {
	push_undo()
	game.ops --
	if (!game.vm_influence_added)
		game.vm_influence_added = {}
	if (!game.vm_influence_added[space])
		game.vm_influence_added[space] = 0
	if (game.remove_opponent_infl) {
		if (game.active === 0)
			decrease_infl(LIB, space)
		else
			decrease_infl(AUT, space)
	} else {
		if (game.active === 0)
			decrease_infl(AUT, space)
		else
			decrease_infl(LIB, space)
	}
	game.vm_influence_added[space] ++
	if (game.vm_country_added) {
		let c = COUNTRIES.indexOf(spaces[space].country)
		game.vm_country_added[c] ++
	}
	summary_influence(space)
}

function replace_infl(space) {
	push_undo()
	game.ops --
	if (!game.vm_influence_added)
		game.vm_influence_added = {}
	if (!game.vm_influence_added[space])
		game.vm_influence_added[space] = 0
	if (game.active === 0) {
		decrease_infl(LIB, space)
		increase_infl(AUT, space)
	} else {
		decrease_infl(AUT, space)
		increase_infl(LIB, space)
	}
	game.vm_influence_added[space] ++
	summary_influence(space)
}

function replace_all_infl(space) {
	push_undo()
	game.ops --
	let opp_infl = 0
	let own_infl = 0
	if (game.active === 0) {
		opp_infl = get_infl(game.infl, LIB, space)
		own_infl = get_infl(game.infl, AUT, space)
		set_infl(LIB, space, 0)
		set_infl(AUT, space, own_infl + opp_infl)
	} else {
		opp_infl = get_infl(game.infl, AUT, space)
		own_infl = get_infl(game.infl, LIB, space)
		set_infl(AUT, space, 0)
		set_infl(LIB, space, own_infl + opp_infl)
	}
	log(`Replaced ${pluralize(opp_infl, 'SP')} in %${space}.`)
}

function goto_add_infl() {
	game.infl_at_start = game.infl
	game.state = 'add_influence'
}

function goto_helgoland(side) {
	if (game.active !== side)
		change_player()
	game.phasing_player = game.active
	game.round ++
	log_helgoland_banner()
	log('.' + side + ' may make an additional Naval Arms Race Attempt.')
	game.state = 'helgoland'
}

function goto_resolve_stability() {
	game.show_stability = true
	game.state = 'resolve_stability'
}

function get_roll() {
	if (game.not_using_konig) {
		delete game.not_using_konig
		return game.konig_roll
	} else if (check_konig())
		return null
	else {
		return roll_d6()
	}
}

// --------------- WAR AND CRISIS FUNCTIONS ---------------------

function check_crisis() {
	let roll = get_roll()
	if (roll === null)
		return true
	log(`Crisis roll: D${roll}`)
	if (game.tension > 0) {
		roll += game.tension
		logi('+' + game.tension + ' tension')
	}
	roll += great_war_status()
	if (roll > 6) {
		goto_great_war()
		return true
	} else {
		log('Game continues.')
		return false
	}
}

function great_war_status() {
	let status = GREAT_WAR[game.great_war]
	logi(`${status} Great War Track`)
	if (!game.persistent_events.includes(C_FRANCO_RUSSIAN_ALLIANCE)) {
		logi(`-2 Three Emperor League`)
		status -= 2
	}
	if (game.persistent_events.includes(C_BALKAN_CIVIL_WAR)) {
		logi('+1 C' + C_BALKAN_CIVIL_WAR)
		status ++
	}
	if (game.persistent_events.includes(C_WAR_IN_THE_BALKANS)) {
		logi('+1 C' + C_WAR_IN_THE_BALKANS)
		status ++
	}
	return status
}

// =============== UTILITY  FUNCTIONS ============================

function aut_naval_position() {
	if (game.high_water)
		return game.high_water
	else
		return game.aut_naval_position
}

function is_auto_resolve(card) {
	if (AUTO_RESOLVE_EVENTS.includes(card))
		return true
	else if (card === C_LORD_FISHER) {
		if (game.lib_naval_position >= 1)
			return true
	} else if (card === C_DECLARATION_OF_INDEPENDENCE) {
		for (let s of get_country(N_BALKANS))
			if (is_uncontrolled(s))
				return false
		return true
	}
		return false
}

function change_player() {
    clear_undo()
    game.active === 0 ? game.active = 1 : game.active = 0
}

function check_vm_next() {
	if (game.ops === 0 && !game.vm_infl_to_do ||
		game.vm_event === C_DREYFUS_REHABILITATED ||
		game.vm_event === C_JOZEF_PIŁSUDSKI
	) {
		summary_flush()
		vm_next()
	}
}

function check_balkan_federation() {
	if (game.persistent_events.includes(C_BALKAN_FEDERATION)) {
		game.balkan_federation_tracker = true
	}
}

function check_colossus() {
	if (game.return_state === 'vm_colossus') {
		game.state = 'vm_colossus'
		if (game.active !== game.phasing_player)
			change_player()
		return true
	}
	return false
}

function check_ena() {
	if (game.played_card === C_EIGHT_NATION_ALLIANCE) {
		logi(`Loses 1 VP for playing C${C_EIGHT_NATION_ALLIANCE} for Operations.`)
		if (game.active === 0)
			game.vp --	
		else
			game.vp ++
		if (check_vp())
			return true
	}
	return false
}

function check_scoring_events() {
	if (game.active_country === N_BALKANS && game.persistent_events.includes(C_ENVER_PASHA)) {
		remove_from_persistent_events(C_ENVER_PASHA)
		permanently_remove(C_ENVER_PASHA)
	}
	if (game.active_country === N_RUSSIA && game.persistent_events.includes(C_VICTOR_CHERNOV)) {
		remove_from_persistent_events(C_VICTOR_CHERNOV)
		permanently_remove(C_VICTOR_CHERNOV)
	}
}

function check_event_resolution() {
	if (check_colossus())
		return
	if (game.vm_event_to_do && event_is_playable(game.played_card)) {
		game.state = 'resolve_opponent_event'
		return
	} else {
		end_round()
	}
}

function check_naval_awards () {
	if (game.active === 0) {
		log(`N${NAVAL_SPACES[game.aut_naval_position]}:`)
		if (game.high_water === game.aut_naval_position) {
			delete game.high_water
			log('No effect.')
		}
		else if (game.aut_naval_position === N_HMS_DREADNOUGHT) {
			if (game.lib_naval_position === N_PRE_DREADNOUGHT)
				game.vm_event = 301
			else 
				log('No effect.')
		} else if (game.aut_naval_position === N_NASSAU_CLASS) {
			if (game.lib_naval_position < N_NASSAU_CLASS)
				log('All opponent 3+ Ops cards are worth -1 Op until opponent reaches this box.')
			else 
				log('Effect cancelled.')
		} else if (game.aut_naval_position === N_BELLEROPHON_CLASS) {
			if (game.lib_naval_position < N_BELLEROPHON_CLASS) {
				log('-2 VP')
				game.vp -= 2
			} else {
				log('-1 VP')
				game.vp --
			}
			if (check_vp())
				return
		}
		else if (game.aut_naval_position === N_HELGOLAND_CLASS) {
			if (game.lib_naval_position < N_HELGOLAND_CLASS) {
				log('Until opponent reaches this box, may take one additional action round each turn, which must be a Naval Arms Race attempt with (-1 to the roll).')
				game.helgoland = 0
			} else { 
				log('Cancels Liberal bonus.')
				delete game.helgoland
			}
		} else if (game.aut_naval_position === N_COLOSSUS_CLASS) {
			if (game.lib_naval_position < N_COLOSSUS_CLASS)
				log('Until opponent reaches this box, may play a card for both Ops and Event once per turn.')
			else
				log('Cancels Liberal bonus.')
		} else if (game.aut_naval_position === N_KAISER_CLASS) {
			if (game.lib_naval_position < N_KAISER_CLASS) {
				log('-2 VP')
				game.vp -= 2
			} else {
				log('-1 VP')
				game.vp --
			}
			if (check_vp())
				return
		}
		else if (game.aut_naval_position === N_ORION_CLASS) {
			if (game.lib_naval_position < N_ORION_CLASS) {
				log('Until opponent reaches this box, may look at opponents hand at the end of their second action round.')
				game.orion = 0
			} else {
				log('Cancels Liberal bonus.')
				delete game.orion
			}
		} else if (game.aut_naval_position === N_MOLTKE_CLASS) {
			if (game.lib_naval_position < N_MOLTKE_CLASS) {
				log('Until opponent reaches this box, may play 1 additional Stability card during Scoring.')
				game.moltke = 0
			} else {
				log('Cancels Liberal bonus.')
				delete game.moltke
			}
		} else if (game.aut_naval_position === N_KING_GEORGE_V_CLASS) {
			if (game.lib_naval_position < N_KING_GEORGE_V_CLASS) {
				log('-2 VP')
				game.vp -= 2
			} else {
				log('-1 VP')
				game.vp --
			}
			if (check_vp())
				return
		} else if (game.aut_naval_position === N_KONIG_CLASS) {
			if (game.lib_naval_position < N_KONIG_CLASS) {
				log('Until opponent reaches this box, may re-roll one die each turn.')
				game.konig = false
			} else {
				log('Cancels Liberal bonus.')
				delete game.konig
			}
		} else if (game.aut_naval_position === N_QUEEN_ELIZABETH_CLASS) {
			if (game.lib_naval_position < N_QUEEN_ELIZABETH_CLASS) {
				log('-2 VP')
				game.vp -= 2
			} else {
				log('-1 VP')
				game.vp --
			}
			if (check_vp())
				return
		} else if (game.aut_naval_position === N_BAYERN_CLASS) {
			if (game.lib_naval_position < N_BAYERN_CLASS)
				game.vm_event = 312
			else
				log('No effect.')
		} else if (game.aut_naval_position === N_REVENGE_CLASS) {
			if (game.lib_naval_position < N_REVENGE_CLASS) {
				log('-4 VP')
				game.vp -= 4
				if (check_vp())
					return
			}
		}
	} else {
		log(`N${NAVAL_SPACES[game.lib_naval_position]}:`)
		if (game.lib_naval_position === N_HMS_DREADNOUGHT) {
			if (aut_naval_position() === N_PRE_DREADNOUGHT)
				game.vm_event = 301
			else 
				log('No effect.')
		} else if (game.lib_naval_position === N_NASSAU_CLASS) {
			if (aut_naval_position() < N_NASSAU_CLASS) 
				log('All opponent 3+ Ops cards are worth -1 Op until opponent reaches this box.')
			else
				log('Effect cancelled.')	
		} else if (game.lib_naval_position === N_BELLEROPHON_CLASS) {
			if (aut_naval_position() < N_BELLEROPHON_CLASS) {
				log('+2 VP')
				game.vp += 2
			} else {
				log('+1 VP')
				game.vp ++
			}
			if (check_vp())
				return
		}
		else if (game.lib_naval_position === N_HELGOLAND_CLASS) {
			if (aut_naval_position() < N_HELGOLAND_CLASS) {
				game.helgoland = 1
				log('Until opponent reaches this box, may take one additional action round each turn, which must be a Naval Arms Race attempt with (-1 to the roll).')
			} else { 
				delete game.helgoland
				log('Cancels Authoritarian bonus.')
			}
		} else if (game.lib_naval_position === N_COLOSSUS_CLASS) {
			if (aut_naval_position() < N_COLOSSUS_CLASS)
				log('Until opponent reaches this box, may play a card for both Ops and Event once per turn.')
			else 
			log('No effect.')
		} else if (game.lib_naval_position === N_KAISER_CLASS) {
			if (aut_naval_position() < N_KAISER_CLASS) {
				log('+2 VP')
				game.vp += 2
			} else {
				log('+1 VP')
				game.vp ++
			}
			if (check_vp())
				return
		} else if (game.lib_naval_position === N_ORION_CLASS) {
			if (aut_naval_position() < N_ORION_CLASS) {
				log('Until opponent reaches this box, may look at opponents hand at the end of their second action round.')
				game.orion = 1
			} else {
				log('Cancels Authoritarian bonus.')
				delete game.orion
			}
		} else if (game.lib_naval_position === N_MOLTKE_CLASS) {
			if (aut_naval_position() < N_MOLTKE_CLASS) {
				log('Until opponent reaches this box, may play 1 additional Stability card during Scoring.')
				game.moltke = 1
			} else {
				log('Cancels Authoritarian bonus.')
				delete game.moltke
			}
		} else if (game.lib_naval_position === N_KING_GEORGE_V_CLASS) {
			if (aut_naval_position() < N_KING_GEORGE_V_CLASS) {
				log('+2 VP')
				game.vp += 2
			} else {
				log('+1 VP')
				game.vp ++
			}
			if (check_vp())
				return
		} else if (game.lib_naval_position === N_KONIG_CLASS) {
			if (aut_naval_position() < N_KONIG_CLASS) {
				log('Until opponent reaches this box, may re-roll one die each turn.')
				game.konig = false
			} else {
				log('Cancels Liberal bonus.')
				delete game.konig
			}
		} else if (game.lib_naval_position === N_QUEEN_ELIZABETH_CLASS) {
			if (aut_naval_position() < N_QUEEN_ELIZABETH_CLASS) {
				log('+2 VP')
				game.vp += 2
			} else {
				log('+1 VP')
				game.vp ++
			}
			if (check_vp())
				return
		} else if (game.lib_naval_position === N_BAYERN_CLASS) {
			if (aut_naval_position() < N_BAYERN_CLASS)
				game.vm_event = 312
			else
				log('No effect.')
		} else if (game.lib_naval_position === N_REVENGE_CLASS) {
			if (aut_naval_position() < N_REVENGE_CLASS) {
				log('+4 VP')
				game.vp += 4
				if (check_vp())
					return
			}
		}
	}
}

function check_control(space) {
	if (game.active === 0 && check_aut_control(space)) {
		return true
	} else if (game.active === 1 && check_lib_control(space)) {
		return true
	} else {
		return false
	}
}

function check_opp_control(space) {
	if (game.active === 0 && check_lib_control(space)) {
		return true
	} else if (game.active === 1 && check_aut_control(space)) {
		return true
	} else {
		return false
	}
}

function check_aut_control(space) {
	if (space === S_OTTOMAN_EMPIRE)
		return true
	else if (space === S_GREAT_BRITAIN || space === S_EGYPT)
		return false
	else if (space === game.black_hand) {
		if ((get_infl(game.infl, AUT, space) +2 - get_infl(game.infl, LIB, space)) >= spaces[space].stability)
			return true
	} else if ((get_infl(game.infl, AUT, space) - get_infl(game.infl, LIB, space)) >= spaces[space].stability)
		return true
	else 
		return false
}

function check_lib_control(space) {
	if (space === S_GREAT_BRITAIN || space === S_EGYPT)
		return true
	else if (space === S_OTTOMAN_EMPIRE)
		return false
	else if (space === game.black_hand) {
		if ((get_infl(game.infl, LIB, space) - (get_infl(game.infl, AUT, space) + 2)) >= spaces[space].stability)
			return true
	} else if ((get_infl(game.infl, LIB, space) - get_infl(game.infl, AUT, space)) >= spaces[space].stability)
		return true
	else 
		return false
}

function control_socio_country(socio, country) {
	for (let s of get_country(country)) {
		if (game.active === 0) {
			if (get_socio_1(s) === socio || get_socio_2(s) === socio)
				if (check_aut_control(s))
					return true
		} else {
			if (get_socio_1(s) === socio || get_socio_2(s) === socio)
				if (check_lib_control(s))
					return true
		}
	}
	return false
}

function has_opp_infl(space) {
	if (game.active === 0) {
		if (get_infl(game.infl, LIB, space) > 0)
			return true
	} else {
		if (get_infl(game.infl, AUT, space) > 0)
			return true
	}
	return false
}

function has_own_infl(space) {
	if (game.active === 0) {
		if (get_infl(game.infl, AUT, space) > 0)
			return true
	} else {
		if (get_infl(game.infl, LIB, space) > 0)
			return true
	}
	return false
}

function is_own_controlled(space) {
	if (game.active === 0) {
		if (check_aut_control(space))
			return true
	} else {
		if (check_lib_control(space))
			return true
	}
	return false
}

function no_authoritarian(space) {
	if (space === view.black_hand)
		return false
	else if (get_infl(game.infl, AUT, space) === 0)
		return true
	else 
		return false
}

function no_liberal(space) {
	if (get_infl(game.infl, LIB, space) === 0)
		return true
	else 
		return false
}

function is_uncontrolled(space) {
	if (!check_aut_control(space) && !check_lib_control(space))
		return true
	else
		return false
}

function is_battleground(space) {
	if (spaces[space].battleground)
		return true
	else
		return false
}

function clean_name(str) {
	if (str && str.slice(-1) === '*') {
		return str.slice(0, -1)
	} else {
		return str
	}
}

function count_adj(space) {
	let aut_adj = 0
	let lib_adj = 0

	let adjacent_spaces = get_adjusted_adjacency(space)
	for (let adj_space_id of adjacent_spaces) {
		if (check_aut_control(adj_space_id)) {
			aut_adj++
		} 
		if (check_lib_control(adj_space_id)) {
			lib_adj++
		}
	}
	return {aut_adj, lib_adj}
}

function count_scoring_cards() {
	let scoring_check
	if (game.active === 0) {
		scoring_check = game.authoritarian_hand.filter(card => SCORING_CARDS.includes(card)).length
	} else {
		scoring_check = game.liberal_hand.filter(card => SCORING_CARDS.includes(card)).length
	}
	return scoring_check
}

function event_is_playable(card) {
	if (card === C_SECOND_INTERNATIONAL) {
		if (game.tension > 2)
			return false 
		else
			return true
	} else if (card === C_EIGHT_NATION_ALLIANCE) {
		if (vm_eight_nation_alliance_cards().length > 0)
			return true
	} else if (card === C_BERNHARD_VON_BÜLOW) {
		if (count_aut_monarchist() >= 3 && !game.persistent_events.includes(C_VON_BETHMANN_HOLLWEG))
			return true
	} else if (card === C_DREYFUS_REHABILITATED) {
		if (game.dreyfus_rehabilitated)
			return true
	} else if (card === C_CONTROL_OF_THE_CHANNEL) {
		if (
			game.active === 0 && (game.aut_naval_position > game.lib_naval_position) ||
			game.active === 1 && (game.lib_naval_position > game.aut_naval_position)
		) {
			return true
		}
	} else if (card === C_PRINCE_HEINRICH) {
		if (game.aut_naval_position > game.lib_naval_position)
			return true
	} else if (card === C_WINSTON_CHURCHILL) {
		if (game.high_water) {
			if (game.lib_naval_position > game.high_water)
				return true
		}
		else if (game.lib_naval_position > game.aut_naval_position)
			return true
	} else if (card === C_RUSSIAN_COLLAPSE) {
		let count = check_presence(N_RUSSIA)
		if (count.lib_battlegrounds >= 3)
			return true
	} else if (card === C_FRANCO_BRITISH_NAVAL_COOPERATION) {
		if (game.persistent_events.includes(C_ENTENTE_CORDIALE))
			return true	
	}

	else if (game.playable_cards.includes(card)) {
		return true
	} else if (strategy_cards[card].playable) {
		return true
	} else {
		return false
	}
}

function select_card(card) {
	game.played_card = card
	remove_from_hand(card)
	game.state = 'play_card'
}
function finish_select_card() {
	if (!SCORING_CARDS.includes(game.played_card))
		game.ops = get_card_ops(game.played_card)
}

function finish_play_card() {
	if (event_is_playable(game.played_card)) {
		if (
			(game.active === 0 && strategy_cards[game.played_card].side === 'L') ||
			(game.active === 1 && strategy_cards[game.played_card].side === 'A')
		) {
			game.vm_event_to_do = true
		}
	}
}

function add_to_hand(card) {
	if (game.active === 0)
		game.authoritarian_hand.push(card)
	else 
		game.liberal_hand.push(card)
}

function remove_from_hand(card) {
	if (game.active === 0)
		game.authoritarian_hand = game.authoritarian_hand.filter(c => c !== card)
	else 
		game.liberal_hand = game.liberal_hand.filter(c => c !== card)
}

const pluralize = (count, noun, suffix = 's') => {
	if (Math.abs(count) === 1) {
		return `${count} ${noun}`
	} else {
		if (noun.endsWith('ch'))
            noun = noun + 'e'
        if (noun.endsWith('y') && !/[aeiou]y$/.test(noun))
			noun = noun.slice(0, -1) + 'ie'
		return `${count} ${noun}${suffix}`
	}
}

function prompt_event(str) {
	if (this_card() >= 200)
		view.prompt = stability_card_name[this_card() - 200] + ": " + str
	else if (this_card() > 0)
		view.prompt = card_name[this_card()] + ": " + str
	else
		view.prompt = str
}

function get_quoted_card_name() {
	if (this_card() >= 200)
		return quoted_stability_card_name[this_card() - 200]
	else
		return quoted_card_name[this_card()]
}

function this_card() {
	/*if (game.scoring_card) {
		if (game.active === 0) {
			if (game.aut_stability_card_2 > 0)
				return game.aut_stability_card_2 + 200
			else
				return game.aut_stability_card + 200
		} else {
			return game.lib_stability_card + 200
		}
	} else */
	if (game.vm_event && game.vm_event > 0 && game.vm_event < 300)
		return game.vm_event
	else
		return game.played_card
}

function draw_deck() {
	let deck = []
	for (let c = 1; c <= LAST_STRATEGY_CARD; ++c)
		if (strategy_cards[c].era === "V")
			deck.push(c)
	return deck
}

function add_edwardian() {
	for (let c = 1; c <= LAST_STRATEGY_CARD; ++c)
		if (strategy_cards[c].era === "E")
			game.strategy_deck.push(c)
	log_h3('Edwardian Era cards added to draw deck')
}

function add_georgian() {
	for (let c = 1; c <= LAST_STRATEGY_CARD; ++c)
		if (strategy_cards[c].era === "G")
			game.strategy_deck.push(c)
	log_h3('Georgian Era cards added to draw deck')
}

function rounds_remaining() {
	if (game.turn <3) {
		return 7 - game.round
	}
	return 8 - game.round
}

function count_scoring_cards() {
	let hand = game.active === 0 ? game.authoritarian_hand : game.liberal_hand
	let n = 0
	for (let c of hand) {
		if (SCORING_CARDS.includes(c))
			n++
	}
	return n
}

function draw_cards(deck, liberal_hand, authoritarian_hand, lib_hand_limit, aut_hand_limit) {
	clear_undo()
	let turn = "aut"
	let did_reshuffle = false
	while (liberal_hand.length < lib_hand_limit || authoritarian_hand.length < aut_hand_limit) {
		if (deck.length === 0) {
			did_reshuffle = true
			reshuffle(deck)
		} else if (turn === "aut" && authoritarian_hand.length < aut_hand_limit) {
			authoritarian_hand.push(draw_card(deck))
			turn = "lib"
		} else if (turn === "aut" && authoritarian_hand.length >= aut_hand_limit) {
			turn = "lib"
		} else if (turn === "lib" && liberal_hand.length < lib_hand_limit) {
			liberal_hand.push(draw_card(deck))
			turn = "aut"
		} else if (turn === "lib" && liberal_hand.length >= lib_hand_limit) {
			turn = "aut"
		} else {
			break
		}
	}
	if (deck.length === 0) {
		log("Deck is empty.")
		if (!did_reshuffle)
			reshuffle(deck)
	}
}

function draw_card(deck) {
	if (deck.length === 0)
		reshuffle(deck)
	const randomIndex = Math.floor(random(deck.length))
	return deck.splice(randomIndex, 1)[0]
}

function reshuffle(deck) {
	log_h3("--- Reshuffle ---")
	deck.push(...game.strategy_discard)
	game.strategy_discard = []
}

function discard_card(hand) {
	let card = Math.floor(random(hand.length))
	let discarded_card = hand.splice(card, 1)[0]
	log(`Discarded C${discarded_card}.`)
	game.strategy_discard.push(discarded_card)
	return discarded_card
}

function discard_strategy(card) {
	if (game.authoritarian_hand.includes(card) && SCORING_CARDS.includes(card))
		return
	if (!game.strategy_discard.includes(card))
		game.strategy_discard.push(card)
}

function add_to_persistent_events(card) {
	if (card === C_WAR_IN_THE_BALKANS) {
		if (game.persistent_events.includes(C_BALKAN_CIVIL_WAR)) {
			permanently_remove(C_WAR_IN_THE_BALKANS)
			return
		}
	}
	if (card === C_BALKAN_CIVIL_WAR) {
		if (game.persistent_events.includes(C_WAR_IN_THE_BALKANS)) {
			permanently_remove(C_BALKAN_CIVIL_WAR)
			return
		}
	}
	if (card === C_SPLENDID_ISOLATION) {
		if (game.persistent_events.includes(C_ENTENTE_CORDIALE)) {
			game.persistent_events[game.persistent_events.indexOf(C_ENTENTE_CORDIALE)] = C_SPLENDID_ISOLATION
			game.persistent_events.push(C_ENTENTE_CORDIALE)
			return
		}
	}
	game.persistent_events.push(card)
	remove_from_discard(card)
	adj_great_war(card)
}

function adj_great_war(card) {
	let i = [C_WAR_IN_THE_BALKANS, C_BALKANS_SCORING, C_SPLENDID_ISOLATION]
	if (i.includes(card))
		game.great_war ++
}

function remove_from_persistent_events(card) {
	if (game.persistent_events.includes(card)) {
		log(`Cancels effect of C${card}.`)
		game.persistent_events = game.persistent_events.filter(c => c !== card)
		permanently_remove(card)
	}
}

function increase_infl(side, space) {
	let infl = get_infl(game.infl, side, space)
	set_infl(side, space, infl + 1)
}

function decrease_infl(side, space) {
	let infl = get_infl(game.infl, side, space)
	set_infl(side, space, infl - 1)
}

function get_infl(from, side, space) {
	if (side === LIB) {
		return from[space] & INFL_MASK; // Extract last 5 bits
	} else if (side === AUT) {
		return (from[space] >> INFL_SHIFT) & INFL_MASK
	}
}

function get_socio_1(space) {
	if (space === S_BELGIUM && game.persistent_events.includes(C_BELGIAN_RULE_IN_CONGO))
		return SOCIO_ANNEX
	else 
		return spaces[space].socio_1
}

function get_socio_2(space) { 
	return spaces[space].socio_2
}

function set_infl(side, space, value) {
	if (value > 31)
		throw new Error("Too much influence")
	if (side === LIB) {
	  game.infl[space] = (game.infl[space] & ~INFL_MASK) | value; // Clear & set bits 0-4
	} else if (side === AUT) {
	  game.infl[space] = (game.infl[space] & ~(INFL_MASK << INFL_SHIFT)) | (value << INFL_SHIFT); // Clear & set bits 5-9
	}
}

function get_card_ops(card) {
	let ops = strategy_cards[card].ops
	if (ops >= 3) {
		if (game.active === 0 && game.lib_naval_position >= 2 && aut_naval_position() < 2) {
			ops --
			if (game.state === 'play_card') 
				log('-1 Op N' + N_NASSAU_CLASS)
		} else if (game.active === 1 && game.aut_naval_position >= 2 && game.lib_naval_position < 2) {
			ops --
			if (
				game.state === 'play_card' ||
				game.state === 'two_power_standard'
			) 
				log('-1 Op N' + N_NASSAU_CLASS)
		}
	}
	if (game.active === 0 && game.persistent_events.includes(C_ABSOLUTISM)) {
		if (game.state === 'play_card') 
			log('+1 Op C' + C_ABSOLUTISM)
		ops++
	} else if (game.active === 1 && game.persistent_events.includes(C_MARCH_OF_HISTORY)) {
		if (
			game.state === 'play_card' ||
			game.state === 'two_power_standard'
		) 
			log('+1 Op C' + C_MARCH_OF_HISTORY)
		ops++
	}

	if (game.active === 0 && game.stymied && game.stymied.AUT !== 0) {
		if (
			game.state === 'play_card'
		) {
			if (ops > 2) {
				log(`${pluralize(game.stymied.AUT,'Op')} C${C_STYMIED}.`)
			} else {
				if (ops > 1) {
					log(`-1 Op C${C_STYMIED}.`)
				}
			}
		}
		ops += game.stymied.AUT
		if (ops < 1) {
			ops = 1
		}
	}
	if (game.active === 1 && game.stymied && game.stymied.LIB < 0) {
		if (
			game.state === 'play_card' ||
			game.state === 'two_power_standard'
		) {
			if (ops > 2) {
				log(`${pluralize(game.stymied.LIB,'Op')} C${C_STYMIED}.`)
			} else if (ops > 1) {
				log(`-1 Op C${C_STYMIED}.`)
			}
		}
		ops += game.stymied.LIB
		if (ops < 1) {
			ops = 1
		}
	}
	return ops
}

function get_country(country_id) {
	let country = COUNTRY_SPACES[country_id]
	let adj_country = new Set(country)
	if (game.persistent_events.includes(C_AUSTRIA_ANNEXES_BOSNIA)) {
		if (country_id === N_AUSTRIA_HUNGARY)
			adj_country.add(S_BOSNIA)
	}
	if (game.persistent_events.includes(C_STATE_SECULARISM_IN_FRANCE))
		adj_country.delete(S_FRENCH_CATHOLIC_CHURCH)
	return Array.from(adj_country)
}

function get_socio_spaces(socio) {
	let valid_spaces = []
	for (let s of ALL_SPACES) {
		if (socio.includes(get_socio_1(s)) || socio.includes(get_socio_2(s)))
			valid_spaces.push(s)
	}
	if (!game.persistent_events.includes(C_NORWEGIAN_INDEPENDENCE))
		valid_spaces = valid_spaces.filter(s => s !== S_NORWAY)

	if (game.persistent_events.includes(C_STATE_SECULARISM_IN_FRANCE))
		valid_spaces = valid_spaces.filter(s => s !== S_FRENCH_CATHOLIC_CHURCH)
	if (game.remove_opponent_infl)
		valid_spaces = valid_spaces.filter(s => has_opp_infl(s))
	return valid_spaces
}

function random(range) {
	return (game.seed = game.seed * 200105 % 34359738337) % range
}

function roll_d6() {
	clear_undo()
	return random(6) + 1
}
function check_konig() {
	clear_undo()
	let roll = 0
	if (konig() && !game.konig_used) {
		game.konig_roll = random(6) + 1
		game.return_state = game.state
		if (game.active !== game.phasing_player) {
			game.switched_players = true
			change_player()
		}
		game.state = 'konig'
		return true
	}
	return false
}

function konig() {
	if (game.phasing_player === 0) {
		if (game.aut_naval_position >= N_KONIG_CLASS && game.lib_naval_position < N_KONIG_CLASS)
			return true
	} else {
		if (game.lib_naval_position >= N_KONIG_CLASS && aut_naval_position() < N_KONIG_CLASS)
			return true  
	}
	return false
}

function konig_prompt() {
	view.prompt = 'Konig Class: Continue.'
	gen_action('continue')
}

function remove_from_discard(card) {
	game.strategy_discard = game.strategy_discard.filter(c => c !== card)
}

function permanently_remove(card) {
	game.persistent_events = game.persistent_events.filter(c => c !== card)
	remove_from_discard(card)
	game.strategy_removed.push(card)
}

function score_country(country) {
	if (game.state === 'final_scoring')
		log_h4(COUNTRIES[game.active_country])
	else
		log_h4('Scoring:')
	let value_presence = get_value(country)
	let value_domination = value_presence * 2
	let value_control = value_presence * 3

	let aut_vp = 0
	let lib_vp = 0
	let presence = check_presence(country)
	let adj_ind = count_adj_ind(country)
	log('Authoritarian:')
	if (presence.aut_control) {
		logi(`-${value_control} VP Control`)
		aut_vp -= value_control
	}
	else if (presence.aut_domination) {
		logi(`-${value_domination} VP Domination`)
		aut_vp -= value_domination
	}
	else if (presence.aut_spaces) {
		logi(`-${value_presence} VP Presence`)
		aut_vp -= value_presence
	}
	if (presence.aut_battlegrounds > 0) {
		logi(`-${presence.aut_battlegrounds} VP Battlegrounds`)
		aut_vp -= presence.aut_battlegrounds
	}
	if (adj_ind.aut > 0) {
		logi(`-${adj_ind.aut} VP Independents`)
		aut_vp -= adj_ind.aut
	}
	if (aut_vp === 0)
		logi(`-${aut_vp} VP`)

	log('Liberal:')
	if (presence.lib_control) {
		logi(`+${value_control} VP Control`)
		lib_vp += value_control
	}
	else if (presence.lib_domination) {
		logi(`+${value_domination} VP Domination`)
		lib_vp += value_domination
	}
	else if (presence.lib_spaces) {
		logi(`+${value_presence} VP Presence`)
		lib_vp += value_presence
	}
	if (presence.lib_battlegrounds > 0) {
		logi(`+${presence.lib_battlegrounds} VP Battlegrounds`)
		lib_vp += presence.lib_battlegrounds
	}
	if (adj_ind.lib > 0) {
		logi(`+${adj_ind.lib} VP Independents`)
		aut_vp += adj_ind.lib
	}
	if (!lib_vp === 0)
		logi(`+${lib_vp} VP`)
	
	let change_vp = lib_vp + aut_vp
	game.vp += lib_vp + aut_vp
	if (game.state === 'final_scoring') {
		if ((lib_vp + aut_vp) > 0)
			log_h4(`Total: +${lib_vp + aut_vp} VP`)
		else
			log_h4(`Total: ${lib_vp + aut_vp} VP`)
		if (game.vp > 0)
			log(`Score is +${game.vp} VP`)
		else
			log(`Score is ${game.vp} VP`)
	} else {
		if (change_vp <= 0)
			log_h4(`Scoring total: ${change_vp} VP`)
		else
			log_h4(`Scoring total: +${change_vp} VP`)
		log_br()
	}
}

function get_value(country) {
	let value
	if (country === N_FRANCE || country === N_RUSSIA || country === N_GERMANY)
		value = 3
	else
		value = 2
	return value
}

function battlegrounds(country) {
	let battlegrounds = 0
	for (let s of get_country(country)) {
		if (is_battleground(s))
			battlegrounds++
	}
	return battlegrounds
}

function check_presence(country) {
	let lib_spaces = 0
	let aut_spaces = 0
	let lib_battlegrounds = 0
	let aut_battlegrounds = 0

	for (let s of get_country(country)) {
		if (check_lib_control(s)) {
			lib_spaces++
			if (is_battleground(s))
				lib_battlegrounds++
		}
		if (check_aut_control(s)) {
			aut_spaces++
			if (is_battleground(s))
				aut_battlegrounds++
		}
	}
	
	let lib_domination = lib_battlegrounds > aut_battlegrounds && lib_spaces > aut_spaces && lib_spaces - lib_battlegrounds > 0
	let aut_domination = aut_battlegrounds > lib_battlegrounds && aut_spaces > lib_spaces && aut_spaces - aut_battlegrounds > 0
	let total_battlegrounds = battlegrounds(country)
	let lib_control = lib_battlegrounds === total_battlegrounds && lib_spaces > aut_spaces
	let aut_control = aut_battlegrounds === total_battlegrounds && aut_spaces > lib_spaces
	return {
		lib_spaces: lib_spaces,
		aut_spaces: aut_spaces,
		lib_battlegrounds: lib_battlegrounds,
		aut_battlegrounds: aut_battlegrounds,
		lib_domination: lib_domination,
		aut_domination: aut_domination,
		lib_control: lib_control,
		aut_control: aut_control
	}
}

function count_adj_ind(country) {
	let aut_ind = 0
	let lib_ind = 0
	for (let s of ADJ_INDEPENDENTS[country])
		if (check_aut_control(s))
			aut_ind ++
		else if (check_lib_control(s))
			lib_ind ++
	return {aut: aut_ind, lib: lib_ind}
}

function count_aut_monarchist() {
	let m = 0
	for (let s of ALL_SPACES)
		if (check_aut_control(s) && (get_socio_1(s) === SOCIO_MONARCHY || get_socio_2(s) === SOCIO_MONARCHY))
			m++
	return m
}

// ====================== OPERATIONS ============================

function do_sc(space) {
	let roll = get_roll()
	if (roll === null)
		return true
	log(`%${space}: D${roll}`)
	// Get SC ops
	let card_ops
	if (game.revolution_1905) {
		card_ops = game.tension
		logi(`+${game.tension} tension`)
	} else if (game.sc_ops) {
		card_ops = game.sc_ops
		logi(`+${card_ops} event`)
	} else {
		card_ops = get_card_ops(this_card())
		logi(`+${card_ops} card ops`)
	}
	roll += card_ops
	// Get support check modifiers // TODO: Check this is used
	if (game.support_check_modifier > 0) {
		roll += game.support_check_modifier
		logi(`+${game.support_check_modifier} event`)
	}
	if (
		game.active === 1 &&
		game.persistent_events.includes(C_BALKAN_FEDERATION) &&
		game.balkan_federation_tracker
	) {
		roll++
		logi(`+1 C${C_BALKAN_FEDERATION}`)
	}
	
	// Check for adjacency
	const adj = count_adj(space)
	if (adj.aut_adj > 0 || adj.lib_adj > 0) {
		if (game.active === 0) {
			roll += adj.aut_adj
			if (game.sc_cancel_opp_adj)
				adj.lib_adj = 0
			roll -= adj.lib_adj
			if (adj.aut_adj > 0)
				logi(`+${adj.aut_adj} adjacency`)
			if (adj.lib_adj > 0)
				logi(`-${adj.lib_adj} opponent adjacency`)
		} else {
			roll += adj.lib_adj
			if (game.sc_cancel_opp_adj)
				adj.aut_adj = 0
			roll -= adj.aut_adj
			if (adj.lib_adj > 0)
				logi(`+${adj.lib_adj} adjacency`)
			if (adj.aut_adj > 0)
				logi(`-${adj.aut_adj} opponent adjacency`)
		}
	}
	//Stability and final support check calcs
	const stability = spaces[space].stability
	logi(`-${stability*2} stability (x2)`)
	const change_infl = Math.max(0, roll - stability*2)
	if (change_infl > 0) {
		if (game.active === 0) {
			let starting_opp_infl = get_infl(game.infl, LIB, space) 
			if (change_infl > starting_opp_infl) {
				const residual = change_infl - starting_opp_infl
				set_infl(LIB, space, 0)
				let starting_infl = get_infl(game.infl, AUT, space)
				let new_infl = Math.min(starting_infl + residual, stability)
				set_infl(AUT, space, new_infl)
			} else {
				set_infl(LIB, space, starting_opp_infl - change_infl)
			}
		} else {
			let starting_opp_infl = get_infl(game.infl, AUT, space) 
			if (change_infl > starting_opp_infl) {
				const residual = change_infl - starting_opp_infl
				set_infl(AUT, space, 0)
				let starting_infl = get_infl(game.infl, LIB, space)
				let new_infl = Math.min(starting_infl + residual, stability)
				set_infl(LIB, space, new_infl)
			} else {
				set_infl(AUT, space, starting_opp_infl - change_infl)
			}
		}
		log(change_infl + ' SP for .' + game.active + '.')
	} else {
		log('No change SP.')
	}
	delete game.selected_space
}

function do_naval_attempt() {
	let roll = get_roll()
	if (roll === null)
		return true
	logi(`D${roll}`)
	roll += game.ops
	logi(`+${game.ops} card ops`)
	if (game.helgoland === true) {
		roll --
		logi(`-1 N${N_HELGOLAND_CLASS}`)
	}

	if ((game.active === 0 && game.aut_naval_attempted ) || (game.active === 1 && game.lib_naval_attempted )) {
		roll++
		logi('+1 previous attempts')
	}
	if (
		(game.active === 0 && strategy_cards[this_card()].side === 'A') ||
		(game.active === 1 && strategy_cards[this_card()].side === 'L')
	) {
		roll++
		logi('+1 playing own card')
	}
	if (game.active === 1 && game.persistent_events.includes(C_LORD_FISHER)) {
		roll ++
		logi('+1 C' + C_LORD_FISHER)
	}
	if (game.active === 0 && game.persistent_events.includes(C_REINHOLD_VON_SYDOW)) {
		roll += 2
		logi('+2 C' + C_REINHOLD_VON_SYDOW)
	}

	if (game.active === 0) {
		game.aut_naval_attempted_this_turn ++
		if (roll >= NAVAL_REQ[game.aut_naval_position]) {
			log(`Success: ${roll} >= ${NAVAL_REQ[game.aut_naval_position]}`)
			game.aut_naval_position ++
			if (game.aut_naval_position === game.high_water)
				delete game.high_water
			delete game.aut_naval_attempted
			check_naval_awards()
			game.state = 'naval_attempt_success'
		} else {
			log(`Fail: ${roll} < ${NAVAL_REQ[game.aut_naval_position]}`)
			game.aut_naval_attempted = true
			game.state = 'naval_attempt_fail'
		}
	} else {
		game.lib_naval_attempted_this_turn = true
		if (roll >= NAVAL_REQ[game.lib_naval_position]) {
			log(`Success: ${roll} >= ${NAVAL_REQ[game.lib_naval_position]}`)
			game.lib_naval_position ++
			delete game.lib_naval_attempted
			check_naval_awards()
			game.state = 'naval_attempt_success'
		} else {
			log(`Fail: ${roll} < ${NAVAL_REQ[game.lib_naval_position]}`)
			game.lib_naval_attempted = true
			game.state = 'naval_attempt_fail'
		}
	}
}

// ====================== SELECTING SPACES =======================

function valid_spaces_infl() {
	let valid_spaces_set = new Set()
	for (let s of ALL_SPACES) {
		let player_influence = game.active === 0 ? get_infl(game.infl_at_start, AUT, s) : get_infl(game.infl_at_start, LIB, s)
		if (player_influence > 0) {
			if (
				game.ops > 1 ||
				!check_opp_control(s)
			) {
				valid_spaces_set.add(s)
			}
			let adjacent_spaces = get_adjusted_adjacency(s)
			for (let adj_space_id of adjacent_spaces) {
				if (adj_space_id >= 0) {
					const opponent_control = check_opp_control(adj_space_id)
					if (game.ops >= 2 || !opponent_control) {
						valid_spaces_set.add(adj_space_id)
					}
					if (game.ops === 1 && opponent_control && game.persistent_events.includes(C_BALKAN_FEDERATION) && game.active === 1 && spaces[adj_space_id].country === R_BALKANS) {
						valid_spaces_set.add(adj_space_id)
					}
				}
			}
		}
	}
	if (game.active === 0) {
		valid_spaces_set.add(S_CONSTANTINOPLE)
		valid_spaces_set.add(S_CRIMEA)
	}
	if (game.active === 1) {
		valid_spaces_set.add(S_BRITANNY_NORMANDY)
		valid_spaces_set.add(S_NETHERLANDS)
		valid_spaces_set.add(S_BELGIUM)
		valid_spaces_set.add(S_GREECE)
		valid_spaces_set.add(S_LIBYA)
	}
	let valid_spaces = Array.from(valid_spaces_set)

	//Special checks for Dreyfus Affair
	if (game.active === game.dreyfus_affair) {
		if (game.ops < 4)
			valid_spaces = valid_spaces.filter( s => !(spaces[s].country === R_FRANCE && check_opp_control(s)))
		if (game.ops < 2)
			valid_spaces = valid_spaces.filter( s => spaces[s].country !== R_FRANCE)
	}

	//Special checks for Leopold von Berchtold
	if (game.persistent_events.includes(C_LEOPOLD_VON_BERCHTOLD) && !game.state.startsWith('vm')) {
		if (game.ops < 4)
			valid_spaces = valid_spaces.filter( s => !(spaces[s].country === R_BALKANS && check_opp_control(s)))
		if (game.ops < 2)
			valid_spaces = valid_spaces.filter( s => spaces[s].country !== R_BALKANS)
	}

	//Special checks for Legacy of Bismarck
	if (game.persistent_events.includes(C_LEGACY_OF_BISMARCK) && !game.state.startsWith('vm'))
		valid_spaces = valid_spaces.filter(s => spaces[s].country !== R_BALKANS)

	if (!game.persistent_events.includes(C_NORWEGIAN_INDEPENDENCE))
		valid_spaces = valid_spaces.filter(s => s !== S_NORWAY)

	//Special checks for Balkan Federation
	if (game.bf_logged)
		valid_spaces = valid_spaces.filter(s => spaces[s].country === R_BALKANS)

	return valid_spaces
}

function valid_spaces_remove_infl() {
	let valid_spaces = []
	for (let s of ALL_SPACES) {
		if (game.remove_opponent_infl) {	
			if (has_opp_infl(s))
				valid_spaces.push(s)
		} else {
			if (has_own_infl(s))
				valid_spaces.push(s)
		}
	}
	return valid_spaces
}

function valid_spaces_remove_infl_country() {
	let valid_spaces = valid_spaces_remove_infl()
	valid_spaces = valid_spaces.filter(s => spaces[s].country === COUNTRIES[game.active_country])
	return valid_spaces
}

function valid_spaces_sc() {
	let valid_spaces = []
	for (let s of ALL_SPACES) {
		if (s === game.sc_1) continue
		let infl
		if (game.active === 0)
			infl = get_infl(game.infl, LIB, s)
		else
			infl = get_infl(game.infl, AUT, s)
		if (infl !== 0)
			valid_spaces.push(s)
		}
	//Special checks for Legacy of Bismarck
	if (game.persistent_events.includes(C_LEGACY_OF_BISMARCK) && !game.state.startsWith('vm'))
		valid_spaces = valid_spaces.filter(s => spaces[s].country !== R_BALKANS)

	//Special checks for Balkan Federation
	if (game.balkan_federation_tracker)
		valid_spaces = valid_spaces.filter(s => spaces[s].country === R_BALKANS)

	if (game.black_hand)
		valid_spaces = valid_spaces.filter(s => s !== game.black_hand)
	return valid_spaces
}

function valid_spaces_sc_country(country) {
	let valid_spaces = valid_spaces_sc()
	valid_spaces = valid_spaces.filter(s => spaces[s].country === country)
	if (game.persistent_events.includes(C_AUSTRIA_ANNEXES_BOSNIA) && country === R_AUSTRIA_HUNGARY)
		valid_spaces.push(S_BOSNIA)
	return valid_spaces
}

function valid_spaces_sc_socio() {
	let valid_spaces = valid_spaces_sc()
	let valid_socios = [game.socio_1]
	if (game.socio_2)
		valid_socios.push(game.socio_2)
	valid_spaces = valid_spaces.filter(s => valid_socios.includes(get_socio_1(s)) || valid_socios.includes(get_socio_2(s)) )
	return valid_spaces
}

function valid_spaces_setup() {
	let valid_spaces = []
	for (let i = 0; i <= LAST_SPACE; i++) {
		if (i === S_NORWAY) continue
		if (game.active === 0) {
			let infl = get_infl(game.infl, LIB, i)
			if (infl === 0)
				valid_spaces.push(i)
		} else {
			let infl = get_infl(game.infl, AUT, i)
			if (infl === 0)
				valid_spaces.push(i)
		}
	}
	return valid_spaces
}

// ====================== MOVING THROUGH TURNS ============================

function end_round() {
	let removed_cards = [...game.strategy_removed, ...game.persistent_events]
	if (game.played_card && !removed_cards.includes(game.played_card))
		discard_strategy(game.played_card)
	if (game.vm_event && !removed_cards.includes(game.vm_event) && game.vm_event <= LAST_STRATEGY_CARD)
		discard_strategy(game.vm_event)
	if (game.two_power_standard === 0)
		delete game.two_power_standard
	if (game.helgoland === true)
		delete game.helgoland
	delete game.played_card
	delete game.temp
	delete game.vm_event
	delete game.remove_opponent_infl
	delete game.vm_infl_to_do
	delete game.vm_event_to_do
	delete game.infl_at_start
	delete game.sc_1
	delete game.balkan_federation_tracker
	delete game.bf_logged
	delete game.return_state
	delete game.konig_roll
	game.discard = false

	// Check for incorrect states
	for (let c of game.strategy_discard) {
		if (c >= 200) 
			throw new Error(`Non-strategy card in discard: ${c}`)
		if (c === null)
			throw new Error(`Null in discard`)
	}

	// Check for duplicate card entries
	let card_check = [...game.strategy_deck, ...game.strategy_discard, ...game.strategy_removed, ...game.persistent_events, ...game.authoritarian_hand, ... game.liberal_hand]
	card_check = card_check.filter(card => card <= LAST_STRATEGY_CARD)
	function check_duplicates(array) {
		return new Set(array).size !== array.length
	}
	function find_duplicates(array) {
		const duplicates = array.filter((item, index) => array.indexOf(item) !== index)
		return [...new Set(duplicates)]
	}
	card_check = card_check.sort((a, b) => a - b)
	if (check_duplicates(card_check)) {
		const duplicates = find_duplicates(card_check)
		console.log('game.strategy_deck',game.strategy_deck, 'game.strategy_discard',game.strategy_discard, 'game.strategy_removed', game.strategy_removed, 'game.persistent_events', game.persistent_events, 'game.authoritarian_hand', game.authoritarian_hand, 'game.liberal_hand', game.liberal_hand)
		throw new Error(`Duplicate cards detected: ${duplicates.join(', ')}`)
	}
	if (game.turn <= 3) {
		if (card_check.length !== 38) {
			console.log('cards', card_check)
			console.log('game.strategy_deck',game.strategy_deck, 'game.strategy_discard',game.strategy_discard, 'game.strategy_removed', game.strategy_removed, 'game.persistent_events', game.persistent_events, 'game.authoritarian_hand', game.authoritarian_hand, 'game.liberal_hand', game.liberal_hand)
			throw new Error(`Wrong number of cards: ${card_check.length}`)
		}
	} else if (game.turn <= 7) {
		if (card_check.length !== 81) {
			throw new Error(`Wrong number of cards: ${card_check.length}`)
		}
	} else if (card_check.length !== 110) {
		throw new Error(`Wrong number of cards: ${card_check.length}`)
	}
	// Check for Orion Class
	if (game.round === 2 && game.phasing_player === game.orion && !game.orion_used) {
		game.active = game.phasing_player
		game.view_opp_hand = game.active === 0 ? game.authoritarian_hand : game.liberal_hand
		log_h4('N' + N_ORION_CLASS)
		log('.' + (1 - game.active) + ' reveals:')
		for (let c of game.view_opp_hand)
			logi('C' + c)
		game.state = 'orion'
		return
	}
	delete game.orion_used
	
	// Check if last round

	if (
		game.turn <= 3 && game.round === 7 && game.phasing_player === 1 ||
		game.turn <= 3 && game.round > 7 ||
		game.turn > 3 && game.round === 8 && game.phasing_player === 1 ||
		game.round > 8
	) {
		if (game.popular_uproar) {
			log_gap(`Authoritarian player receives an extra round due to P${C_POPULAR_UPROAR}.`)
			delete game.popular_uproar
		}
		else if (game.helgoland >= 0) {
			goto_helgoland(game.helgoland)
			return
		} else {
			end_turn()
			return
		}
	}

	// Resolve end action round
	if (game.phasing_player === 0) {
		if (game.active === 0)
			change_player()
		game.phasing_player = 1
	} else {
		game.round ++
		log_h2("Action Round " + game.round)
		game.phasing_player = 0
		if (game.active !== 0)
			change_player()
		dreyfus_rehabilitated()
	}
	if (game.active === 1 && game.two_power_standard > 0) {
		log_gap('.LC' + C_TWO_POWER_STANDARD)
		game.state = 'two_power_standard'
	} else {
		game.state = 'choose_card'
	}
}

function end_turn() {
	clear_undo()
	end_one_turn_events()
	game.state = 'verify_held_cards'
}

function end_one_turn_events() {
	let no_longer_in_effect = []
	for (let e of ONE_TURN_EVENTS) {
		if (game.persistent_events.includes(e)) {
			end_one_turn_event(e)
			no_longer_in_effect.push(e)
		}
	}
	if (game.dreyfus_affair >= 0) {
		delete game.dreyfus_affair
		game.persistent_events = game.persistent_events.filter( c => c !== C_DREYFUS_AFFAIR)
		no_longer_in_effect.push(C_DREYFUS_AFFAIR)
	}
	if (game.stymied) { //TODO: Update for EiT version 
		delete game.stymied
		game.persistent_events = game.persistent_events.filter( c => c !== EXTRA_STYMIED)
		no_longer_in_effect.push(C_STYMIED)
	}
	if (no_longer_in_effect.length > 0) {
		log('No longer in effect:')
		for (let c of no_longer_in_effect)
			logi("C" + c)
	}
}

function end_one_turn_event(event) {
	game.persistent_events = game.persistent_events.filter(n => n !== event)
	game.strategy_removed.push(event)
}

function new_turn() {
	clear_undo()
	game.turn ++
	game.round = 1
	game.active = 0
	game.phasing_player = 0
	game.aut_naval_attempted_this_turn = 0
	game.lib_naval_attempted_this_turn = false
	delete game.selected_space
	delete game.colossus
	delete game.konig_used

	// New Turn
	log_h1("Turn " + game.turn)
	if (game.turn === 4) 
		add_edwardian()
	if (game.turn === 8)
		add_georgian()
	if (game.turn > 1) {
		let hand_limit = 8
		if (game.turn >= 4)
			hand_limit ++
		draw_cards(game.strategy_deck, game.authoritarian_hand, game.liberal_hand, hand_limit, hand_limit)
	}
	log_h2("Action Round " + game.round)
	game.state = 'choose_card'
}

// === ACTIONS ===========

function gen_action(action, argument) {
	if (argument === undefined) {
		view.actions[action] = 1
	} else {
		if (!(action in view.actions)) {
			view.actions[action] = []
		}
		view.actions[action].push(argument)
	}
}

function gen_action_card(card) {
	gen_action("card", card)
}

function gen_action_stability_card(card) {
	gen_action("stability_card", card)
}

function gen_action_space(space) {
	gen_action("space", space)
}


exports.action = function (state, player, action, arg) {
	game = load_game(state)
	if (states[game.state] && action in states[game.state]) {
		states[game.state][action](arg, player)
	} else {
		if (action === "undo" && game.undo && game.undo.length > 0)
			pop_undo()
		else
			throw new Error("Invalid action: " + action)
	}
    return save_game(game)
}

// ======== LOG FUNCTIONS =============

function log(msg) {
	game.log.push(msg)
}

function log_br() {
	if (game.log.length > 0 && game.log[game.log.length - 1] !== "")
		game.log.push("")
}

function logi(msg) {
	log(">" + msg)
}

function log_h1(msg) {
	log_br()
	log(".h1 " + msg)
	log_br()
}

function log_h2(msg) {
	log_br()
	log(".h2 " + msg)
	log_br()
}

function log_h3(msg) {
	log_br()
	log(".h3 " + msg)
	log_br()
}

function log_h4(msg) {
	log_br()
	log(".h4 " + msg)
}

function log_gap(msg) {
	log_br()
	log(msg)
}

function log_colossus_banner() {
	log_br()
	if (game.active === 0)
		log('.T.A')
	else
		log('.T.L')
	log_br()
	finish_select_card()
}

function log_helgoland_banner() {
	log_br()
	if (game.active === 0)
		log('.N.AN' + N_HELGOLAND_CLASS)
	else
		log('.N.LN' + N_HELGOLAND_CLASS)
	log_br()
}

function log_ops_banner() {
	log_br()
	if (game.active === 0)
		log('.O.A')
	else
		log('.O.L')
	log_br()
	finish_select_card()
}

function log_pass_banner() {
	log_br()
	if (game.active === 0)
		log('.P.A')
	else
		log('.P.L')
	log_br()
}

function log_event_banner(n) {
	log_br()
	if (game.active === 0)
		log('.V.A')
	else
		log('.V.L')
	log_br()
	log_event(n)
}

function log_struggle_banner(n) {
	log_br()
	if (game.active === 0)
		log('.S.AC' + n)
	else
		log('.S.LC' + n)
	log_br()
}

function log_event(n) {
	log_br()
	if (strategy_cards[n].side === "A")
		log(".E:C" + n + ".A")
	else if (strategy_cards[n].side === "L")
		log(".E:C" + n + ".L")
	else
		log(".E:C" + n + ".N")
}

// Fast deep copy for objects without cycles
function object_copy(original) {
	if (Array.isArray(original)) {
		let n = original.length
		let copy = new Array(n)
		for (let i = 0; i < n; ++i) {
			let v = original[i]
			if (typeof v === "object" && v !== null)
				copy[i] = object_copy(v)
			else
				copy[i] = v
		}
		return copy
	} else {
		let copy = {}
		for (let i in original) {
			let v = original[i]
			if (typeof v === "object" && v !== null)
				copy[i] = object_copy(v)
			else
				copy[i] = v
		}
		return copy
	}
}

function clear_undo() {
	if (game.undo.length > 0)
		game.undo = []
}

function push_undo() {
	let copy = {}
	for (let k in game) {
		let v = game[k]
		if (k === "undo")
			continue
		else if (k === "log")
			v = v.length
		else if (typeof v === "object" && v !== null)
			v = object_copy(v)
		copy[k] = v
	}
	game.undo.push(copy)
}

function pop_undo() {
	let save_log = game.log
	let save_undo = game.undo
	game = save_undo.pop()
	save_log.length = game.log
	game.log = save_log
	game.undo = save_undo
}

// ============= INFLUENCE SUMMARY =============

function summary_influence(space) {
	map_set(game.summary, space, map_get(game.summary, space, 0) + 1)
}

function summary_flush() {
	if (game.summary.length > 0) {
		map_for_each(game.summary, (space, n) => {
			game.log.push(">" + n + " %" + space)
		})
		map_clear(game.summary)
	} 
}

// ============ MAP AND SET FUNCTIONS ===========

function array_insert_pair(array, index, key, value) {
	for (let i = array.length; i > index; i -= 2) {
		array[i] = array[i-2]
		array[i+1] = array[i-1]
	}
	array[index] = key
	array[index+1] = value
}

function map_clear(map) {
	map.length = 0
}

function map_get(map, key, missing) {
	let a = 0
	let b = (map.length >> 1) - 1
	while (a <= b) {
		let m = (a + b) >> 1
		let x = map[m<<1]
		if (key < x)
			b = m - 1
		else if (key > x)
			a = m + 1
		else
			return map[(m<<1)+1]
	}
	return missing
}

function map_set(map, key, value) {
	let a = 0
	let b = (map.length >> 1) - 1
	while (a <= b) {
		let m = (a + b) >> 1
		let x = map[m<<1]
		if (key < x)
			b = m - 1
		else if (key > x)
			a = m + 1
		else {
			map[(m<<1)+1] = value
			return
		}
	}
	array_insert_pair(map, a<<1, key, value)
}

function map_for_each(map, f) {
	for (let i = 0; i < map.length; i += 2)
		f(map[i], map[i+1])
}


// ----------------------- VICTORY AND END GAME -------------//

function do_final_scoring() {
	game.final_scoring = game.final_scoring.filter(n => n !== game.active_country)

	score_country(game.active_country)
}

function goto_game_over(result, victory) {
	game.state = "game_over"
	game.active = "None"
	game.result = result
	game.victory = victory
	log_h1("Game Over")
	log(game.victory)
	return
}

function goto_great_war() {
	delete_temp_vars()
	log('The Great War breaks out.')
	log_h2('The Great War')
	log_h3('Participants')
	game.central_powers = [N_GERMANY]
	if (game.persistent_events.includes(C_THE_DUAL_ALLIANCE) || three_emperor_league())
		game.central_powers.push(N_AUSTRIA_HUNGARY)
	if (three_emperor_league()) {
		game.central_powers.push(N_RUSSIA)
		if (game.persistent_events.includes(C_BALKAN_CIVIL_WAR) || game.persistent_events.includes(C_WAR_IN_THE_BALKANS))
			game.central_powers.push(N_BALKANS)
	}
	
	game.entente = [N_FRANCE]
	if ((game.persistent_events.includes(C_ENTENTE_CORDIALE) || game.persistent_events.includes(C_SCHLIEFFEN_PLAN_ADOPTED)) && !game.persistent_events.includes(C_SPLENDID_ISOLATION))
		game.entente.push(N_BRITAIN)
	if (game.persistent_events.includes(C_FRANCO_RUSSIAN_ALLIANCE))
		game.entente.push(N_RUSSIA)
	if ((game.persistent_events.includes(C_BALKAN_CIVIL_WAR) || game.persistent_events.includes(C_WAR_IN_THE_BALKANS)) && !game.central_powers.includes(N_RUSSIA))
		game.entente.push(N_BALKANS)

	log_h4('Central Powers:')
	for (let n of game.central_powers)
		log(COUNTRIES[n])
	log_h4('Entente:')
	for (let n of game.entente)
		log(COUNTRIES[n])
	log_h3('War Resolution')
	game.final_scoring = [...game.central_powers, ...game.entente]
	game.final_scoring = game.final_scoring.filter(n => n !== N_BRITAIN)
	game.state = 'great_war_roll'
}

function goto_great_war_choose() {
	delete game.gw_round
	if (game.gw_winner === 0) {
		if (!check_aut_control(S_ITALY) || !check_aut_control(S_CONSTANTINOPLE)) {
			if (game.active !== 0)
				change_player()
			game.state = 'war_losses_control'
			return
		}
	}
	if (game.gw_winner === 1) {
		if (!check_lib_control(S_ITALY) || !check_lib_control(S_CONSTANTINOPLE)) {
			if (game.active !== 1)
				change_player()
			game.state = 'war_losses_control'
			return
		}
	}
	game.central_powers = game.central_powers.filter( n => n !== game.active_country)
	game.entente = game.entente.filter( n => n !== game.active_country)
	game.entente = game.entente.filter( n => n !== N_BRITAIN)
	delete game.active_country
	if (game.central_powers.length === 0 && game.entente.length === 0) {
		log_h3('Final Scoring')
		game.state = 'final_scoring'
	} else {
		if (game.gw_winner >= 0) {
			if (game.active !== game.gw_winner)
				change_player()
			game.state = 'war_losses_choose'
		} else {
			game.state = 'war_losses_choose'
			if (game.gw_initiative === 0)
				game.gw_initiative = 1
			else
				game.gw_initiative = 0
			if (game.active !== game.gw_initiative)
				change_player()
		}
	}
}

function goto_great_war_losses() {
	if (game.gw_winner === 0) {
		if (game.central_powers.includes(game.active_country)) {
			game.gw_round = 1
			game.infl_at_start = game.infl
			log('Placed SP:')
			game.state = 'war_losses_add'
			if (game.active !== 0)
				change_player()
		} else {
			game.gw_round = 0
			log('Removed SP:')
			game.state = 'war_losses_remove'
			if (game.active !== 1)
				change_player()
		}
	} else if (game.gw_winner === 1) {
		if (game.central_powers.includes(game.active_country)) {
			game.gw_round = 0
			log('Removed SP:')
			game.state = 'war_losses_remove'
			if (game.active !== 0)
				change_player()
		} else {
			game.gw_round = 1
			game.infl_at_start = game.infl
			log('Placed SP:')
			game.state = 'war_losses_add'
			if (game.active !== 1)
				change_player()
		}
	} else {
		game.gw_round = 0
		log('Removed SP:')
		game.state = 'war_losses_remove'
	}
}

function goto_great_war_losses_roll() {
	log_h4(COUNTRIES[game.active_country])
	if (game.gw_winner === 0) {
		if (game.central_powers.includes(game.active_country)) {
			game.state = 'war_losses_roll'
			if (game.active !== 0)
				change_player()
		} else {
			game.state = 'war_losses_roll'
			if (game.active !== 1)
				change_player()
		}
	} else if (game.gw_winner === 1) {
		if (game.central_powers.includes(game.active_country)) {
			game.state = 'war_losses_roll'
			if (game.active !== 0)
				change_player()
		} else {
			game.state = 'war_losses_roll'
			if (game.active !== 1)
				change_player()
		}
	} else {
		if (game.central_powers.includes(game.active_country)) {
			if (game.active !== 0)
				change_player()
		} else {
			if (game.active !== 1)
				change_player()
		}
		game.state = 'war_losses_roll'
	}
}

function great_war_add() {
	let spaces = valid_spaces_infl()
	let active_spaces = [...get_country(game.active_country), ...ADJ_INDEPENDENTS[game.active_country]]
	spaces = spaces.filter( s => active_spaces.includes(s))
	return spaces
}

function three_emperor_league() {
	if (!game.persistent_events.includes(C_RUSSIAN_COLLAPSE) && !game.persistent_events.includes(C_FRANCO_RUSSIAN_ALLIANCE))
		return true
	else
		return false
}

function gw_winner() {
	if (game.gw_winner >=0)
		return true
	else
		return false
}

function check_vp() {
	if (game.vp >= 20) {
		goto_game_over(LIB, `${LIB} won an Automatic Victory!`)
		return true
	} else if (game.vp <= -20) {
		goto_game_over(AUT, `${AUT} won an Automatic Victory!`)
		return true
	}
	return false

}

// --------------------------- VM ENGINE -------------------

function goto_vm(proc) {
	console.log('gotovm', proc)
	let old_vm = game.vm
	game.state = "vm"
	game.vm = {
		prompt: 0,
		fp: proc,
		ip: 0,
	}
	if (old_vm) {
		game.vm.return_vm = old_vm
	}
	vm_exec()
}

function vm_exec() {
	vm_inst(0)()
}

function vm_inst(a) {
	console.log('game.vm.fp', game.vm.fp, 'game.vm.ip', game.vm.ip, 'a', a)
	return CODE[game.vm.fp][game.vm.ip][a]
}

function vm_next() {
	if (game.summary.length > 0)
		summary_flush()
	game.vm.ip++
	vm_exec()
}

function vm_log() {
	log(vm_operand(1))
	vm_next()
}

function vm_operand(a) {
	let x = CODE[game.vm.fp][game.vm.ip][a]
	if (a > 0 && typeof x === "function")
		return x()
	return x
}

function vm_if() {
	console.log('if', vm_operand(1))
	if (!vm_operand(1)) {
		let balance = 1
		while (balance > 0) {
			++game.vm.ip
			switch (vm_operand(0)) {
				case vm_if:
					++balance
					break
				case vm_endif:
					--balance
					break
				case vm_else:
					if (balance === 1)
						--balance
					break
			}
			if (game.vm.ip < 0 || game.vm.ip > CODE[game.vm.fp].length)
				throw "ERROR"
		}
	}
	vm_next()
}

function vm_else() {
	console.log('else')
	vm_goto(vm_endif, vm_if, 1, 1)
}

function vm_endif() {
	console.log('endif')
	vm_next()
}

function vm_goto(op, nop, dir, step) {
	let balance = 1
	while (balance > 0) {
		game.vm.ip += dir
		if (vm_inst(0) === op)
			--balance
		if (vm_inst(0) === nop)
			++balance
		if (game.vm.ip < 0 || game.vm.ip > CODE[game.vm.fp].length)
			throw "ERROR"
	}
	game.vm.ip += step
	vm_exec()
}

function event_prompt(str) {
	if (typeof str === "undefined")
		str = CODE[game.vm.fp][game.vm.prompt][1]
	if (typeof str === "function")
		str = str()
	if (!str) {
		str = ""
	}
	return str
}

function vm_prompt() {
	if (game.vm.prompt)
		game.vm._prompt = game.vm.prompt
	game.vm.prompt = game.vm.ip
	vm_next()
}

function vm_return() {
	delete_temp_vars()
	if (finish_admiral_von_tirpitz())
		return
	if (check_colossus())
		return
	if (end_stability())
		return
	else
		vm_end_event()
	delete game.active_country
}

function delete_temp_vars() {
	delete game.vm_influence_added
	delete game.vm_country_added
	delete game.temp
	delete game.infl_at_start
	delete game.sc_1
	delete game.revolution_1905
	delete game.sc_ops
	delete game.discard
	delete game.valid_spaces
	delete game.view_opp_stability
	delete game.socio
	delete game.socio_1
	delete game.socio_2
	delete game.vm_max_infl
	delete game.vm_tsarist_repression
	delete game.sc_cancel_opp_adj
	delete game.view_opp_hand
	delete game.space
	delete game.switched_players
	delete game.remove_opponent_infl
}

function vm_end_event() {
	if (game.vm_infl_to_do) {
		if (game.active !== game.phasing_player)
			change_player()
		game.ops = get_card_ops(game.played_card)
		game.state = 'resolve_opponent_event'
	} else {
		game.state = 'end_round'
	}
}

// ------------------------- VM EVENTS ---------------------

function vm_advance_naval() {
	if (game.active === 0)
		game.aut_naval_position += vm_operand(1)
	else
		game.lib_naval_position += vm_operand(1)
	log(`Advances Naval Marker ${pluralize(vm_operand(1), 'space')}.`)
	check_naval_awards()
	vm_next()
}

function vm_add_to_playable() {
	add_to_playable(vm_operand(1))
	vm_next()
}

function vm_add_to_persistent_events() {
	add_to_persistent_events(game.vm_event)
	vm_next()
}

function vm_remove_from_peristent_events() {
	remove_from_persistent_events(vm_operand(1))
	vm_next()
}

function vm_add_vp(n) {
	game.vp += vm_operand(1)
	if (check_vp())
		return
	vm_next()
}

function vm_add_opp_infl(space) {
	push_undo()
	if (game.active === 0)
		increase_infl(LIB, space)
	else 
		increase_infl(AUT, space)
	summary_influence(space)
}

function vm_add_limited_infl_free_socio_per_country() {
	game.vm_max_infl = vm_operand(1)
	game.vm_max_country = vm_operand(2)
	game.vm_country_added = [0, 0, 0, 0, 0]
	game.ops = vm_operand(3)
	game.socio = [vm_operand(4)]
	if (vm_operand(5))
		game.socio.push(vm_operand(5))
	if (vm_operand(6))
		game.socio.push(vm_operand(6))
	log('Placed SP:')
	game.state = 'vm_add_limited_infl_free_socio_per_country'
}

function vm_add_limited_infl_socio_scoring() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	game.socio = [vm_operand(3)]
	if (vm_operand(4))
		game.socio.push(vm_operand(4))
	if (vm_operand(5))
		game.socio.push(vm_operand(5))
	log('Placed SP:')
	game.state = 'vm_add_limited_infl_socio_scoring'
}

function vm_add_limited_infl_all_opp_controlled_country() {
	game.vm_max_infl = vm_operand(1)
	game.active_country = vm_operand(2)
	log('Placed SP:')
	game.state = 'vm_add_limited_infl_all_opp_controlled_country'
}

function vm_add_limited_infl_free_country() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	game.active_country = vm_operand(3)
	log('Placed SP:')
	game.state = 'vm_add_limited_infl_free_country'
}

function vm_add_limited_infl_free_socio() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	game.socio = vm_operand(3)
	log('Placed SP:')
	game.state = 'vm_add_limited_infl_free_socio'
}

function vm_add_limited_infl_free_spaces() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	game.valid_spaces = []
	game.valid_spaces.push(vm_operand(3))
	if (vm_operand(4))
		game.valid_spaces.push(vm_operand(4))
	if (vm_operand(5))
		game.valid_spaces.push(vm_operand(5))
	if (vm_operand(6))
		game.valid_spaces.push(vm_operand(6))
	if (vm_operand(7))
		game.valid_spaces.push(vm_operand(7))
	if (vm_operand(8))
		game.valid_spaces.push(vm_operand(8))
	log('Placed SP:')
	game.state = 'vm_add_limited_infl_free_spaces'
}

function vm_add_infl_free() {
	game.ops = vm_operand(1)
	log('Placed SP:')
	game.state = 'vm_add_infl_free'
}

function vm_add_infl_free_space() {
	game.ops = vm_operand(1)
	game.valid_spaces = vm_operand(2)
	log('Placed SP:')
	game.state = 'vm_add_infl_free_space'
}

function vm_add_infl_free_space_adj() {
	game.ops = vm_operand(1)
	game.space = vm_operand(2)
	log('Placed SP:')
	game.state = 'vm_add_infl_free_space_adj'
}

function vm_add_infl_free_space_country() {
	game.ops = vm_operand(1)
	game.active_country = vm_operand(2)
	log('Placed SP:')
	game.state = 'vm_add_infl_free_space_country'
}

function vm_add_infl_free_country() {
	game.ops = vm_operand(1)
	game.active_country = vm_operand(2)
	log('Placed SP:')
	game.state = 'vm_add_infl_free_country'
}

function vm_add_infl_free_not_opp_controlled_countries() {
	game.ops = vm_operand(1)
	game.active_country = [...get_country(vm_operand(2)), ...get_country(vm_operand(3))]
	log('Placed SP:')
	game.state = 'vm_add_infl_free_not_opp_controlled_countries'
}

function vm_add_infl_free_socio() {
	game.ops = vm_operand(1)
	game.socio = [vm_operand(2)]
	log('Placed SP:')
	game.state = 'vm_add_infl_free_socio'
}

function vm_add_limited_infl_no_aut() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	log('Placed SP:')
	game.state = 'vm_add_limited_infl_no_aut'
}

function vm_add_limited_infl_own_controlled_spaces() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	log('Placed SP:')
	game.state = 'vm_add_limited_infl_own_controlled_spaces'
}

function vm_add_limited_infl_uncontrolled_scoring() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	log('Placed SP:')
	game.state = 'vm_add_limited_infl_uncontrolled_scoring'
}

function vm_add_limited_infl_not_opp_controlled_country() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	game.active_country = vm_operand(3)
	log('Placed SP:')
	game.state = 'vm_add_limited_infl_not_opp_controlled_country'
}

function vm_add_limited_infl_not_opp_controlled_spaces() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	game.valid_spaces = [vm_operand(3)]
	if (vm_operand(4))
		game.valid_spaces.push(vm_operand(4))
	if (vm_operand(5))
		game.valid_spaces.push(vm_operand(5))
	log('Placed SP:')
	game.state = 'vm_add_limited_infl_not_opp_controlled_spaces'
}

function vm_add_infl_free_outside() {
	game.ops = vm_operand(1)
	log('Placed SP:')
	game.state = 'vm_add_infl_free_outside'
}

function vm_add_limited_infl_uncontrolled_ind() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	log('Placed SP:')
	game.state = 'vm_add_limited_infl_uncontrolled_ind'
}

function vm_add_limited_infl_uncontrolled_ind_scoring() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	log('Placed SP:')
	game.state = 'vm_add_limited_infl_uncontrolled_ind_scoring'
}

function vm_break_control() {
	game.space = vm_operand(1)
	game.state = 'vm_break_control'
}

function vm_change_player() {
	change_player()
	vm_next()
}

function vm_gain_vp() {
	let vp_gain = vm_operand(1)
	if (game.active === 0) {
		game.vp -= vp_gain
		log(`-${vp_gain} VP`)
	} else {
		game.vp += vp_gain
		log(`+${vp_gain} VP`)
	}
	if (check_vp())
		return
	vm_next()
}

function vm_eliminate(space) {
	log(`Eliminated %${space}.`)
	set_infl(LIB, space, 0)
	set_infl(AUT, space, 0)
}

function get_adjusted_adjacency(space) {
	let adjacent_spaces = new Set(spaces[space].adjacent)
	let eliminated_space

	if (game.persistent_events.includes(C_STATE_SECULARISM_IN_FRANCE))
		eliminated_space = S_FRENCH_CATHOLIC_CHURCH

	if (adjacent_spaces.has(eliminated_space)) {
		spaces[eliminated_space].adjacent.forEach(adj_space_id => adjacent_spaces.add(adj_space_id))
		adjacent_spaces.delete(eliminated_space) 
	}

	adjacent_spaces.delete(space)

	return Array.from(adjacent_spaces)
}

function vm_match_opp_infl_country() {
	game.ops = vm_operand(1)
	game.active_country = vm_operand(2)
	game.state = 'vm_match_opp_infl_country'
}

function vm_play_from_discard() {
	game.discard = true
	game.state = 'vm_play_from_discard'
}

function vm_remove_infl_country() {
	game.ops = vm_operand(1)
	log('Removed SP:')
	game.state = 'vm_remove_infl_country'
}

function vm_remove_opp_infl_space() {
	game.ops = vm_operand(1)
	game.temp = vm_operand(2)
	game.remove_opponent_infl = true
	log('Removed SP:')
	game.state = 'vm_remove_opp_infl_space'
}

function vm_remove_opp_infl_country() {
	game.ops = vm_operand(1)
	game.active_country = vm_operand(2)
	game.remove_opponent_infl = true
	log('Removed SP:')
	game.state = 'vm_remove_opp_infl_country'
}

function vm_remove_opp_infl_country_excl_space() {
	game.ops = vm_operand(1)
	game.active_country = vm_operand(2)
	game.temp = vm_operand(3)
	game.remove_opponent_infl = true
	log('Removed SP:')
	game.state = 'vm_remove_opp_infl_country_excl_space'
}

function vm_remove_limited_opp_infl() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	game.remove_opponent_infl = true
	log('Removed SP:')
	game.state = 'vm_remove_limited_infl'
}

function vm_remove_limited_opp_infl_spaces() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	game.remove_opponent_infl = true
	game.valid_spaces = []
	game.valid_spaces.push(vm_operand(3))
	if (vm_operand(4) )
		game.valid_spaces.push(vm_operand(4))
	if (vm_operand(5))
		game.valid_spaces.push(vm_operand(5))
	if (vm_operand(6))
		game.valid_spaces.push(vm_operand(6))
	if (vm_operand(7))
		game.valid_spaces.push(vm_operand(7))
	log('Removed SP:')
	game.state = 'vm_remove_limited_infl_spaces'
}

function vm_remove_limited_opp_infl_socio() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	game.socio = [vm_operand(3)]
	game.remove_opponent_infl = true
	log('Removed SP:')
	game.state = 'vm_remove_limited_infl_socio'
}

function vm_remove_limited_opp_infl_socios_country() {
	game.vm_max_infl = vm_operand(1)
	game.vm_max_country = vm_operand(2)
	game.vm_country_added = [0, 0, 0, 0, 0]
	game.ops = vm_operand(3)
	game.remove_opponent_infl = true
	game.socio = [vm_operand(4)]
	if (vm_operand(5))
		game.socio.push(vm_operand(5))
	if (vm_operand(6))
		game.socio.push(vm_operand(6))
	log('Removed SP:')
	game.state = 'vm_remove_limited_infl_socios_country'
}

function vm_remove_limited_opp_infl_country_both_present() {
	game.vm_max_infl = vm_operand(1)
	game.active_country = vm_operand(2)
	game.remove_opponent_infl = true
	log('Removed SP:')
	game.state = 'vm_remove_limited_infl_country_both_present'
}

function vm_replace_limited_opp_socio() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	game.socio = [vm_operand(3)]
	log('Replaced SP:')
	game.state = 'vm_replace_limited_opp_socio'	
}

function vm_replace_opp_country() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	game.active_country = vm_operand(3)
	log('Replaced SP:')
	game.state = 'vm_replace_opp_country'
}

function vm_replace_opp_space() {
	game.vm_max_infl = vm_operand(1)
	game.ops = vm_operand(2)
	game.space = [vm_operand(3)]
	if (vm_operand(4))
		game.space.push(vm_operand(4))
	if (vm_operand(5))
		game.space.push(vm_operand(5))
	log('Replaced SP:')
	game.state = 'vm_replace_opp_space'
}

function vm_reset_stability() {
	let side = vm_operand(1)
	reset_stability(side)
	vm_next()
}
function reset_stability(side) {
	if (side === AUT) {
		game.aut_stability_discard = []
		game.aut_stability = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
	} else {
		game.lib_stability_discard = []
		game.lib_stability = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	}
	log('All ' + side + ' stability cards become available.')
}

function vm_retreat_german_navy() {
	if (!game.high_water)
		game.high_water = game.aut_naval_position
	game.aut_naval_position -= vm_operand(1)
	log(`German naval marker retreats ${pluralize(vm_operand(1), 'space')}.`)
	if (game.aut_naval_position < 0)
		game.aut_naval_position = 0
	vm_next()
}

function vm_sc_country_ops() {
	game.ops = vm_operand(1)
	game.sc_ops = vm_operand(2)
	game.state = 'vm_support_check_country_prep'
}

function vm_sc_country() {
	game.ops = vm_operand(1)
	game.active_country = vm_operand(2)
	game.state = 'vm_support_check_country_prep'
}

function vm_sc_space() {
	game.ops = vm_operand(1)
	game.space = vm_operand(2)
	game.state = 'vm_support_check_space'
}

function vm_sc_socio_no_opp_adj() {
	game.ops = vm_operand(1)
	game.sc_cancel_opp_adj = true
	game.socio_1 = vm_operand(2)
	if (vm_operand(3))
		game.socio_2 = vm_operand(3)
	log(pluralize(game.ops, 'Support check') + ':')
	game.state = 'vm_support_check_socio_prep'
}

function vm_recover_from_discard_ops() {
	game.temp = vm_operand(1)
	game.discard = true
	game.state = 'vm_claim_discarded_card'
}

function vm_score_country() {
	game.scoring_card = game.vm_event
	game.show_stability = false
	game.active_country = SCORING_CARDS.indexOf(game.vm_event)
	goto_stability()
}

function goto_stability() {
	game.temp = 0
	game.limit = 1
	if (game.active === game.moltke) 
		game.limit ++
	if (game.active === 0 && game.active_country === N_BALKANS && game.persistent_events.includes(C_ENVER_PASHA))
		game.limit ++
	if (game.active === 1 && game.active_country === N_RUSSIA && game.persistent_events.includes(C_VICTOR_CHERNOV))
		game.limit ++
	game.state = 'select_stability'
}

function vm_permanently_remove() {
	permanently_remove(game.vm_event)
	vm_next()
}

function vm_discard_stability() {
	let c = game.vm_event - 200
	if (game.aut_stability_card === c)
		delete game.aut_stability_card
	if (game.aut_stability_card_2 === c)
		delete game.aut_stability_card_2
	if (game.aut_stability_card_3 === c)
		delete game.aut_stability_card_3
	if (game.lib_stability_card === c)
		delete game.lib_stability_card
	if (game.lib_stability_card_2 === c)
		delete game.lib_stability_card_2
	if (game.active === 0) {
		game.aut_stability_discard.push(c)
	} else {
		game.lib_stability_discard.push(c)
	}
	vm_next()
}

function vm_do_crisis() {
	if (jean_jaures())
		return
	game.state = 'vm_crisis_roll'
}

function vm_decrease_tension() {
	decrease_tension(vm_operand(1))
	vm_next()
}

function decrease_tension(n) {
	game.tension -= n
	if (game.tension >= 0 )
		log(`-${n} tension`)
	else { 
		log(`-${n + game.tension} tension`)
		if (game.active === 0) {
			game.vp += game.tension
			log(`Gain ${n - (n + game.tension)} VP for reducing tension below zero.`)
		}
		else {
			game.vp -= game.tension
			log(`Gain ${n - (n + game.tension)} VP for reducing tension below zero.`)
		}
		game.tension = 0
	}
}

function vm_increase_tension() {
	increase_tension(vm_operand(1))
	vm_next()
}

function increase_tension(increase) {
	if (check_franz_ferdinand()) {
		if (game.tension > 3) {
			penalty_vp(increase)
		} else if ((game.tension + increase) > 3) {
			let extra = game.tension + increase - 3
			log(`Tension may not rise above 3 due to C${C_FRANZ_FERDINAND}.`)
			game.tension = 3
			penalty_vp(extra)
		} else {
			game.tension += increase
			log(`Tension increases to ${game.tension}.`)			
		}
	} else {
		game.tension += increase
		log(`Tension increases to ${game.tension}.`)
		if (game.tension > 6) {
			let extra = game.tension - 6
			game.tension = 6
			penalty_vp(extra)
			if (check_vp())
				return
		}
	}
}

function penalty_vp(n) {
	if (check_franz_ferdinand())
		log(`Lose ${pluralize(n, 'VP')} for increasing tension (C${C_FRANZ_FERDINAND}).`)
	else
		log(`Lose ${pluralize(n, 'VP')} for increasing tension above 6.`)
	if (game.active === 0) {
		game.vp += n
	} else {
		game.vp -= n
	}
}

function vm_remove_from_playable() {
	remove_from_playable(vm_operand(1))
	vm_next()
}

function remove_from_playable(card) {
	if (game.persistent_events.includes(card))
		log(`Cancels effect of C${card}.`)
	else
		log(`Prevents play of C${card}.`)
	game.playable_cards = game.playable_cards.filter( c => c !== card)
}

// ------------------------- VM FOR STRATEGY CARDS --------------

function check_franz_ferdinand() {
	if (game.persistent_events.includes(C_FRANZ_FERDINAND)) {
		if (check_aut_control(S_VIENNA) && check_aut_control(S_BUDAPEST))
			return true
	} else
		return false
}

function vm_absolutism() {
	add_to_persistent_events(C_ABSOLUTISM)
	log('+1 OPs value for cards played by the Authoritarian player for the rest of the turn.')
	vm_next()
}

function vm_admiral_von_tirpitz() {
	log('Removed SP:')
	game.temp = 0
	game.ops = 2
	game.state = 'vm_admiral_von_tirpitz'
}

function vm_agadir_crisis() {
	game.state = 'vm_agadir_crisis'
}

function vm_arms_traders() {
	vm_gain_vp(game.tension)
}

function vm_austria_annexes_bosnia() {
	add_to_persistent_events(C_AUSTRIA_ANNEXES_BOSNIA)
	log('For the rest of the game, the Bosnia space is considered to be a part of both the Austria-Hungary scoring region and the Balkans scoring region.')
	vm_next()
}

function vm_belgian_rule_in_congo() {
	game.state = 'vm_belgian_rule_in_congo'
}

function vm_black_hand() {
	game.state = 'vm_black_hand'
}

function vm_central_authority() {
	game.vm_max_infl = 1
	game.state = 'vm_central_authority'
}

function vm_control_of_the_channel() {
	if (
		game.active === 0 && (game.aut_naval_position > game.lib_naval_position) ||
		game.active === 1 && (game.lib_naval_position > game.aut_naval_position)
	) {
		game.discard = true
		game.state = 'vm_play_from_discard'
	} else {
		log('Not ahead on the Naval Arms Race.')
		vm_next()
	}
}

function vm_dreyfus_affair() {
	if (game.active === 0)
		game.dreyfus_affair = 1
	else 
		game.dreyfus_affair = 0
	log('All costs for opponent to place SP in France are doubled for the rest of the turn.')
	vm_next()
}

function dreyfus_rehabilitated() {
	if (check_lib_control(S_FRENCH_WRITERS))
		game.dreyfus_rehabilitated = true
	else
		game.dreyfus_rehabilitated = false
}

function vm_dual_alliance() {
	add_to_persistent_events(C_THE_DUAL_ALLIANCE)
	game.great_war ++
	vm_next()
}
function vm_eight_nation_alliance() {
	game.state = 'vm_eight_nation_alliance'
}

function vm_eight_nation_alliance_cards() {
	let hand
	if (game.active === 0)
		hand = game.authoritarian_hand.filter(c => strategy_cards[c].side === 'L')
	else
		hand = game.liberal_hand.filter(c => strategy_cards[c].side === 'A')
	return hand
}

function vm_entente_cordiale() {
	add_to_persistent_events(C_ENTENTE_CORDIALE)
	game.great_war ++
	vm_next()
}

function vm_exiles_escape() {
	game.temp = 0
	game.vm_max_infl = 1
	game.state = 'vm_exiles_escape'
}

function vm_ferdinand_esterhazy() {
	change_player()
	game.state = 'vm_ferdinand_esterhazy'
}

function vm_franco_russian_alliance() {
	add_to_persistent_events(C_FRANCO_RUSSIAN_ALLIANCE)
	vm_next()
}

function vm_freedom_and_accord_party() {
	game.ops = get_infl(game.infl, LIB, S_CONSTANTINOPLE)
	game.active_country = N_BALKANS
	game.state = 'vm_add_infl_free_country'
}

function vm_foreign_investments() {
	game.temp = 0
	game.vm_max_infl = 2
	log('Removed SP:')
	game.state = 'vm_foreign_investments'
}

function vm_franz_ferdinand() {
	add_to_persistent_events(C_FRANZ_FERDINAND)
	log('While Vienna and Budapest are under Authoritarian control, Tension cannot rise higher than 3.')
	vm_next()
}

function vm_jean_jaures() {
	log('For the rest of the game, whenever a Crisis roll will be made, Liberal player may lose 1 VP to reduce Tension by 1.')
	add_to_persistent_events(C_JEAN_JAURES)
	vm_next()
}

function jean_jaures() {
	if (game.persistent_events.includes(C_JEAN_JAURES)) {
		if (game.active === 0) {
			game.switched_players = true
			change_player()
		}
		log(`C${C_JEAN_JAURES}:`)
		game.state = 'vm_jean_jaures'
		return true
	} else
		return false
}

function vm_legacy_of_1848() {
	game.view_opp_hand = []
	for (let c of game.authoritarian_hand) {
		if (RED_EVENTS.includes(c))
			game.view_opp_hand.push(c)
	}
	game.state = 'vm_legacy_of_1848'
}

function vm_legacy_of_bismarck() {
	add_to_persistent_events(C_LEGACY_OF_BISMARCK)
	log(`For the rest of the turn, no OPs may be spent in the Balkans and the cards C${C_WAR_IN_THE_BALKANS} and C${C_BALKAN_CIVIL_WAR} do not cause Crisis Rolls.`)
	vm_next()
}

function vm_lord_fisher() {
	add_to_persistent_events(C_LORD_FISHER)
	log('Liberal Naval Arms Race attempts receive an additional +1 for the rest of the game.')
	if (game.lib_naval_position === 0) {
		game.lib_naval_position ++
		check_naval_awards()
	}
	if (game.vm_event > 300) {
		goto_vm(game.vm_event)
	} else 
		vm_next()
}
function vm_march_of_history() {
	add_to_persistent_events(C_MARCH_OF_HISTORY)
	log('+1 OPs value for cards played by the Liberal Player for the rest of the turn.')
	vm_next()
}

function vm_military_parade() {
	game.state = 'vm_military_parade'
} 

function vm_mitteleuropa() {
	game.state = 'vm_mitteleuropa'
}

function mitteleuropa() {
	let spaces = [S_DENMARK, S_CONSTANTINOPLE, S_ITALY]
	spaces = [...spaces, ...get_country(N_GERMANY), ...get_country(N_AUSTRIA_HUNGARY), ...get_country(N_BALKANS)]
	return spaces
}

function vm_october_manifesto() {
	add_to_persistent_events(C_OCTOBER_MANIFESTO)
	add_to_playable(C_SECOND_DUMA_DISBANDED)
	vm_next()
}

function vm_prince_heinrich() {
	let vp = game.aut_naval_position - game.lib_naval_position
	log(`-$${vp} VP`)
	game.vp -= vp
	if (check_vp())
		return
	vm_next()
}

function vm_raid_on_the_sublime_porte() {
	game.remove_opponent_infl = true
	game.state = 'vm_raid_on_the_sublime_porte'
}

function vm_rosa_luxemburg() {
	game.state = 'vm_rosa_luxemburg'
}

function vm_parliament_act_1911() {
	log('+1 VP')
	game.vp ++
	let c = [S_BELGIUM, S_NETHERLANDS, S_SPAIN_PORTUGAL, S_DENMARK, S_NORWAY, S_SWEDEN]
	for (let s of c) {
		if (check_lib_control(s)) {
			game.vp ++
			log(`+1 VP %${s}`)
		}
	}
	if (check_vp())
		return
	vm_next()
}

function vm_perfidious_italy() {
	if (game.persistent_events.includes(C_TRIPLE_ALLIANCE)) {
		game.persistent_events[game.persistent_events.indexOf(C_TRIPLE_ALLIANCE)] = C_PERFIDIOUS_ITALY
		game.persistent_events.push(C_TRIPLE_ALLIANCE)
	} else {
		add_to_persistent_events(C_PERFIDIOUS_ITALY)
		game.great_war ++
	}	
	vm_next()
}

function vm_scramble_for_africa() {
	game.ops = 3
	game.valid_spaces = [S_MOROCCO, S_ALGERIA, S_TUNISIA, S_LIBYA]
	if (game.persistent_events.includes(C_BELGIAN_RULE_IN_CONGO))
		game.valid_spaces.push(S_BELGIUM)
	log('Placed SP:')
	game.state = 'vm_scramble_for_africa'
}

function vm_second_duma_disbanded() {
	game.state = 'vm_second_duma_disbanded'
}
function vm_second_hague_conference() {
	game.state = 'vm_second_hague_conference'
}

function vm_state_secularism() {
	add_to_persistent_events(C_STATE_SECULARISM_IN_FRANCE)
	vm_eliminate(S_FRENCH_CATHOLIC_CHURCH)
	vm_next()
}

function vm_stymied() {
	if (!game.stymied) {
		game.stymied = { AUT: 0, LIB: 0 }
	}
	if (game.active === 0) {
		game.stymied.LIB--
		log(`${game.stymied.LIB} to Liberal Ops for the rest of the turn.`)
	} else {
		game.stymied.AUT--
		log(`${game.stymied.AUT} to Authoritarian Ops for the rest of the turn.`)
	}
	if (!game.persistent_events.includes(EXTRA_STYMIED))
		game.persistent_events.push(EXTRA_STYMIED)
	vm_next()
}

function vm_tangier_crisis() {
	game.state = 'vm_tangier_crisis'
}

function vm_third_department() {
	game.view_opp_stability = true
	game.state = 'vm_third_department'
}

function vm_traditionalists_gain_power() {
	game.ops = 4
	game.temp = 0
	game.socio = [ SOCIO_ARMY, SOCIO_FARMERS]
	game.state = 'vm_traditionalists_gain_power'
	log('Removed SP:')
}

function vm_triple_alliance() {
	add_to_persistent_events(C_TRIPLE_ALLIANCE)
	game.great_war++
	vm_next()
}

function vm_tsarist_repression() {
	game.state = 'vm_tsarist_repression'
}

function vm_two_power_standard() {
	game.two_power_standard = 2
	if (game.aut_naval_position > game.lib_naval_position)
		game.two_power_standard ++
	log(`For the next ${game.two_power_standard} action rounds the Liberal player must make ${game.two_power_standard} consecutive Naval Arms Race attempts.`)
	vm_next()
}

function vm_us_interventionism() {
	add_to_persistent_events(C_US_INTERVENTIONISM)
	remove_from_playable(C_ARMS_TRADERS_INDUSTRY)
	log('+2 to Liberal Great War rolls if Entente Cordiale is in effect. All Liberal Stability cards become available. Prevents play of Arms Traders / Industry.')
	game.lib_stability = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	game.lib_stability_discard = []
	vm_next()
}

function vm_victor_chernov() {
	add_to_persistent_events(C_VICTOR_CHERNOV)
	log('Next Scoring in Russia, play an additional Stability card.')
	game.victor_chernov = true
	add_to_playable(C_SECOND_DUMA_DISBANDED)
	vm_next()
}

function vm_viscount_grey() {
	if (game.era === 'G')
		game.ops = 4
	else 
		game.ops = 3
	game.state = 'vm_viscount_grey_choose'
}

function vm_winston_churchill() {
	game.ops = 0
	if (game.high_water)
		game.temp = (game.lib_naval_position - game.high_water)
	else 
		game.temp = (game.lib_naval_position - game.aut_naval_position)	
	game.state = 'vm_winston_churchill'
}

function vm_yugoslavia() {
	game.state = 'vm_yugoslavia'
}

function vm_young_turk_revolution() {
	add_to_persistent_events(C_YOUNG_TURK_REVOLUTION)
	add_to_playable(C_FREEDOM_AND_ACCORD_PARTY)
	add_to_playable(C_RAID_ON_THE_SUBLIME_PORTE)
	game.vm_max_infl = 1
	game.ops = 2
	game.valid_spaces = get_country(N_BALKANS)
	game.valid_spaces.push(S_CONSTANTINOPLE)
	game.state = 'vm_add_limited_infl_free_spaces'
}

function vm_take_control() {
	game.valid_spaces = vm_operand(1)
	game.state = 'vm_take_control'
}

function vm_take_control_uncontrolled_socio_scoring() {
	game.socio = [vm_operand(1)]
	game.state = 'vm_take_control_uncontrolled_socio_scoring'
}

function vm_take_control_uncontrolled_space_country() {
	game.ops = vm_operand(1)
	game.active_country = vm_operand(2)
	game.state = 'vm_take_control_uncontrolled_space_country'
}

function vm_do_take_control(space) {
	if (game.active === 0) {
		let current_infl = get_infl(game.infl, AUT, space)
		let opponent_infl = get_infl(game.infl, LIB, space)
		let stability = spaces[space].stability

		if ((current_infl - opponent_infl) < stability) 
			set_infl(AUT, space, stability + opponent_infl)
	} else if (game.active === 1) {
		let current_infl = get_infl(game.infl, LIB, space)
		let opponent_infl = get_infl(game.infl, AUT, space)
		let stability = spaces[space].stability

		if ((current_infl - opponent_infl) < stability) 
			set_infl(LIB, space, stability + opponent_infl)
	}
	log('Took control of %' + space + '.')
}

function vm_give_control(space) {
	push_undo()
	game.ops --
	if (game.active === 0) {
		let current_infl = get_infl(game.infl, LIB, space)
		let opponent_infl = get_infl(game.infl, AUT, space)
		let stability = spaces[space].stability

		if ((current_infl - opponent_infl) < stability) 
			set_infl(LIB, space, stability + opponent_infl)
		log('Liberal takes control of %' + space + '.')
	} else if (game.active === 1) {
		let current_infl = get_infl(game.infl, AUT, space)
		let opponent_infl = get_infl(game.infl, LIB, space)
		let stability = spaces[space].stability

		if ((current_infl - opponent_infl) < stability) 
			set_infl(AUT, space, stability + opponent_infl)
		log('Authoritarian takes control of %' + space + '.')
	}
}

function vm_revolution_1905() {
	game.ops = get_card_ops(C_REVOLUTION_OF_1905)
	add_to_persistent_events(C_REVOLUTION_OF_1905)
	add_to_playable(C_OCTOBER_MANIFESTO)
	game.revolution_1905 = true
	game.active_country = N_RUSSIA
	game.state = 'vm_support_check_country_prep'
}

function add_to_playable(card) {
	if (!game.playable_cards.includes(card))
		game.playable_cards.push(card)
	log(`Allows play of C${card}.`)
}

// ------------------------ VM STABILITY CARDS ------------

function vm_absolutist_rule() {
	if (
		control_socio_country(SOCIO_MONARCHY, game.active_country) ||
		game.active_country === N_FRANCE && check_aut_control(S_PARIS)
	) {
		if (
			control_socio_country(SOCIO_GOVERNMENT, game.active_country) ||
			control_socio_country(SOCIO_ARMY, game.active_country) ||
			control_socio_country(SOCIO_ANNEX, game.active_country)
		) {
			log('-2 VP')
			game.vp -=2
			if (check_vp())
				return
		} else 
			log('Does not control the Monarch space and at least one other Government, Annex, or Army space in the scoring region.')
	} else {
		log('Does not control the Monarch space and at least one other Government, Annex, or Army space in the scoring region.')
	}
	vm_next()
}

function end_stability() {
	if (game.scoring_card) {
		if (game.lib_stability_card === C_POPULAR_UPROAR || game.lib_stability_card_2 === C_POPULAR_UPROAR || game.lib_stability_card_3 === C_POPULAR_UPROAR) {
			game.lib_stability_discard.push(C_POPULAR_UPROAR)
			delete game.lib_stability_card
			delete game.lib_stability_card_2
			delete game.lib_stability_card_3
			end_popular_uproar()
			return
		}
		if (game.active === 0) {
			if (game.aut_stability_card_3 || game.aut_stability_card_2 || game.aut_stability_card)
				goto_resolve_stability()
			else if (game.lib_stability_card || game.lib_stability_card_2) {
				change_player()
				goto_resolve_stability()
			} else 
				goto_scoring()
		} else {
			if (game.lib_stability_card || game.lib_stability_card_2) {
				goto_resolve_stability()
			} else if (game.aut_stability_card) {
				change_player()
				goto_resolve_stability()
			} else 
				goto_scoring()
		}
		return true
	} 
	return false
}

function goto_scoring() {
	game.vm_event = game.scoring_card
	game.state = 'scoring'
}

function end_popular_uproar() {
	check_scoring_events()
	delete game.scoring_card
	delete game.show_stability
	change_player()
}

function vm_anarchist_attack() {
	let c = get_country(game.active_country)
	let worker = false
	let intellectual = false
	let n = 0
	for (let s of c) {
		if ((get_socio_1(s) === SOCIO_WORKERS || get_socio_2(s) === SOCIO_WORKERS) && check_lib_control(s))
			worker = true
		if ((get_socio_1(s) === SOCIO_INTELLECTUALS || get_socio_2(s) === SOCIO_INTELLECTUALS) && check_lib_control(s))
			intellectual = true
	}
	if (worker) 
		n++
	if (intellectual)
		n++
	if (n > 0)
		log('Removed SP:')
	if (n >= 2) {
		game.ops = 3
		game.remove_opponent_infl = true
		game.state = 'vm_anarchist_attack'
	} else if (n === 1) {
		game.ops = 1
		game.remove_opponent_infl = true
		game.state = 'vm_anarchist_attack'
	} else {
		log('No controlled Intellectual or Worker spaces in the Scoring Region.')
		vm_next()
	}
}

function vm_naval_law_amendment() {
	game.state = 'vm_naval_law_amendment'
}

function do_free_naval_attempt() {
	let roll = roll_d6()
	logi(`D${roll}`)
	game.ops = 2
	roll += game.ops
	logi(`+${game.ops} card ops`)

	if ((game.active === 0 && game.aut_naval_attempted ) || (game.active === 1 && game.lib_naval_attempted )) {
		roll++
		logi('+1 previous attempts')
	}
	if (game.active === 1 && game.persistent_events.includes(C_LORD_FISHER)) {
		roll ++
		logi('+1 C' + C_LORD_FISHER)
	}
	if (game.active === 0 && game.persistent_events.includes(C_REINHOLD_VON_SYDOW)) {
		roll += 2
		logi('+2 C' + C_REINHOLD_VON_SYDOW)
	}

	if (game.active === 0) {
		if (roll >= NAVAL_REQ[game.aut_naval_position]) {
			log(`Success: ${roll} >= ${NAVAL_REQ[game.aut_naval_position]}`)
			game.aut_naval_position ++
			delete game.aut_naval_attempted
			check_naval_awards()
			game.state = 'vm_naval_law_amendment_success'
		} else {
			log(`Fail: ${roll} < ${NAVAL_REQ[game.aut_naval_position]}`)
			game.state = 'vm_naval_law_amendment_fail'
		}
	}
}

function popular_uproar() {
	let country = get_country(game.active)
	for (let s of country) {
		if (get_socio_1(s) === SOCIO_ANNEX || get_socio_2(s) === SOCIO_ANNEX) {
			if (check_lib_control(s))
				return true
		}
	}
	let adj = []
	if (game.active_country === N_FRANCE)
		adj = [S_SPAIN_PORTUGAL, S_MOROCCO, S_ALGERIA, S_TUNISIA, S_ITALY, S_SWITZERLAND, S_BELGIUM]
	else if (game.active_country === N_GERMANY)
		adj = [S_BELGIUM, S_NETHERLANDS, S_SWITZERLAND, S_NORWAY, S_DENMARK, S_SWEDEN]
	else if (game.active_country === N_AUSTRIA_HUNGARY)
		adj = [S_SWITZERLAND, S_ITALY]
	else if (game.active_country === N_RUSSIA)
		adj = [S_NORWAY, S_SWEDEN, S_CONSTANTINOPLE]
	else
		adj = [S_ITALY, S_CONSTANTINOPLE]

	for (let s of adj) {
		if (get_socio_1(s) === SOCIO_ANNEX || get_socio_2(s) === SOCIO_ANNEX) {
			if (check_lib_control(s))
				return true
		}
	}
	return false
}

function vm_popular_uproar() {
	log('Scoring ends. Authoritarian will receive an extra Action Round.')
	game.popular_uproar = true
	game.ops = 1
	log('Placed SP:')
	game.state = 'vm_popular_uproar'
}

function vm_secret_treaty_clauses() {
	let c = get_country(game.active_country)
	let annex = 0
	for (let s of c) {
		if ((get_socio_1(s) === SOCIO_ANNEX || get_socio_2(s) === SOCIO_ANNEX) && check_aut_control(s)) 
			annex ++
	}
	let adj = []
	if (game.active_country === N_FRANCE)
		adj = [S_SPAIN_PORTUGAL, S_MOROCCO, S_ALGERIA, S_TUNISIA, S_ITALY, S_SWITZERLAND, S_BELGIUM]
	else if (game.active_country === N_GERMANY)
		adj = [S_BELGIUM, S_NETHERLANDS, S_SWITZERLAND, S_NORWAY, S_DENMARK, S_SWEDEN]
	else if (game.active_country === N_AUSTRIA_HUNGARY)
		adj = [S_SWITZERLAND, S_ITALY]
	else if (game.active_country === N_RUSSIA)
		adj = [S_NORWAY, S_SWEDEN, S_CONSTANTINOPLE]
	else
		adj = [S_ITALY, S_CONSTANTINOPLE]
	for (let s of adj) {
		if (check_aut_control(s))
			annex ++
	}
	if (annex >= 2) {
		game.temp = false
		game.state = 'vm_secret_treaty_clauses_draw'
	} else {
		log('Does not control a total of 2 Annex or adjacent Independent spaces.')
		vm_next()
	}
}

function vm_support_of_the_farmers() {
	let count = 0
	for (let s of get_country(game.active_country)) {
		if (get_socio_1(s) === SOCIO_FARMERS || get_socio_2(s) === SOCIO_FARMERS) {
			if (check_aut_control(s))
				count ++
		}
	}
	game.temp = count
	if (game.temp > 0) {	
		game.vm_max_infl = 1
		game.socio = [SOCIO_CHURCH, SOCIO_GOVERNMENT]
		game.ops = game.temp
		log('Placed SP:')
		game.state = 'vm_add_limited_infl_socio_scoring'
	} else {
		log('No Authoritarian controlled Farmer spaces.')
		vm_next()
	}
}

function control_in_country(n, country) {
	let count = 0
	if (game.active === 0) 
		count = get_country(country).filter(s => check_aut_control(s)).length
	else 
		count = get_country(country).filter(s => check_lib_control(s)).length
	if (count >= n) {
		return true
	} else
		return false
}

// ------------------------- VM FOR NAVAL ARMS RACE --------------//

function vm_bayern() {
	game.temp = 0
	game.state = 'vm_bayern'
}

function vm_colossus() {
	game.state = 'vm_colossus_ops'
}


// ------------------------- STATES ------------------------- //

states.start = {
    inactive: 'start',
    prompt() {
        view.prompt = 'Start'
    }
}

states.place_starting_infl = {
	inactive: 'place discretionary SPs',
	prompt() {
		let n = game.temp + 1
		let m = game.starting_infl.length
		view.prompt = `Setup ${n} / ${m}: `
		if (game.ops > 0) {
			view.prompt += `Place ${pluralize(game.ops, 'discretionary SP')}.`
			for (let space_id of valid_spaces_setup())
				gen_action_space(space_id)
		} else if (game.ops === 0) {
			view.prompt += "Done."
			if (n === m)
				gen_action("start")
			else
				gen_action("done")
		}
	},
	space(space) {
		add_infl(space)
	},
	done() {
		summary_flush()
		game.temp ++
		game.ops = game.starting_infl[game.temp]
		change_player()
		log(`.${game.active} SP:`)
	},
	start() {
		summary_flush()
		delete game.starting_infl
		delete game.temp
		new_turn()
		clear_undo()
		game.state = 'choose_card'
	},
}

states.choose_card = {
	inactive: 'play a card',
	prompt() {
		view.prompt = "Action Round: "
		if (
			(game.active === 0 && game.authoritarian_hand.length === 0) ||
			(game.active === 1 && game.liberal_hand.length === 0)
		) {
			view.prompt += "No cards remaining."
			gen_action('pass')
		} else {
			view.prompt += "Play a card."
			let available_cards
			if (game.active === 0) {
				available_cards = game.authoritarian_hand
			} else {
				available_cards = game.liberal_hand
			}
			for (let card of available_cards) {
				gen_action_card(card)
			}
		}
	},
	card(card) {
		push_undo()
		// Check if player is at risk of losing game due to held scoring card
		if (!SCORING_CARDS.includes(card)) {
			let scoring_cards_count = count_scoring_cards()

			if (game.turn >= 4) {
				if (game.round !== 9 && scoring_cards_count >= 9 - game.round) {
					game.temp = card
					game.state = 'confirm_card'
					return
				}	
			}
			else if (game.round !== 8 && scoring_cards_count >= 8 - game.round) {
				game.temp = card
				game.state = 'confirm_card'
				return
			}
		}
		select_card(card)
	},
	pass() {
		log_pass_banner()
		end_round()
	},
}

states.play_card = {
	get inactive() {
		return `play ${quoted_card_name[game.played_card]}`
	},
	prompt() {
		view.prompt = "Play " + quoted_card_name[game.played_card] + "."

		if (SCORING_CARDS.includes(game.played_card)) {
			gen_action('event')
			return
		}

		// Check for events
		if (event_is_playable(game.played_card)) {
			if (
				(game.active === 0 &&
					strategy_cards[game.played_card].side !== 'L' &&
					game.aut_naval_position >= N_COLOSSUS_CLASS &&
					game.lib_naval_position < N_COLOSSUS_CLASS &&
					!game.colossus) ||
				(game.active === 1 &&
					strategy_cards[game.played_card].side !== 'A' &&
					game.lib_naval_position >= N_COLOSSUS_CLASS &&
					aut_naval_position() < N_COLOSSUS_CLASS &&
					!game.colossus)
			) {
				gen_action('colossus')
			}
			/*if (
				(game.active === DEM &&
					cards[game.played_card].side !== 'C' &&
					game.dem_tst_position >= 8 &&
					game.com_tst_position < 8 &&
					!game.tst_8) ||
				(game.active === COM &&
					cards[game.played_card].side !== 'D' &&
					game.com_tst_position >= 8 &&
					game.dem_tst_position < 8 &&
					!game.tst_8)
			) {
				gen_action('tst_8')
			}*/

			// Continue with normal logic
			if (strategy_cards[game.played_card].side === 'A') {
				if (game.active === 0) view.actions.event = 1
				if (game.active === 1) view.actions.opp_event = 1
			} else if (strategy_cards[game.played_card].side === 'L') {
				if (game.active === 1) view.actions.event = 1
				if (game.active === 0) view.actions.opp_event = 1
			} else {
				view.actions.event = 1
			}
		} else {
			if (strategy_cards[game.played_card].side === 'A') {
				if (game.active === 0) view.actions.event = 0
				if (game.active === 1) view.actions.opp_event = 0
			} else if (strategy_cards[game.played_card].side === 'L') {
				if (game.active === 1) view.actions.event = 0
				if (game.active === 0) view.actions.opp_event = 0
			} else {
				view.actions.event = 0
			}
		}

		gen_action('infl')
		gen_action('sc')

		if (game.active === 1 && !game.lib_naval_attempted_this_turn && game.lib_naval_position < 13)
			gen_action('naval')
		else if (
			game.persistent_events.includes(C_VON_BETHMANN_HOLLWEG) &&
			game.active === 0 && 
			game.aut_naval_attempted_this_turn < 2 && 
			game.aut_naval_position < 13
		) {
			gen_action('naval')
		}
		else if (
			!game.persistent_events.includes(C_VON_BETHMANN_HOLLWEG) &&
			game.active === 0 && 
			game.aut_naval_attempted_this_turn < 1 && 
			game.aut_naval_position < 13
		) {
			gen_action('naval')
		}
		/*else
			view.actions.naval = 0 */
	},
	event() {
		push_undo()
		if (SCORING_CARDS.includes(game.played_card)) {
			log_struggle_banner(game.played_card)
		} else {
			log_event_banner(game.played_card)
		}
		game.vm_infl_to_do = false
		if (SWITCH_EVENTS.includes(game.played_card))
			change_player()
		game.vm_event = game.played_card
		goto_vm(game.vm_event)
	},
	opp_event() {
		push_undo()
		log_ops_banner()
		log_event(game.played_card)
		game.vm_infl_to_do = true
		game.vm_event = game.played_card
		if (is_auto_resolve(game.played_card) || SWITCH_EVENTS.includes(game.played_card)) {
			goto_vm(game.vm_event)
		} else {
			change_player()
			goto_vm(game.vm_event)
		}
	},
	infl() {
		push_undo()
		log_ops_banner()
		log(`C${game.played_card}.`)
		log('Placed SP:')
		if (check_ena())
			return
		finish_play_card()
		check_balkan_federation()
		goto_add_infl()
	},
	naval() {
		push_undo()
		log_ops_banner()
		log(`C${game.played_card}.`)
		log('Naval Arms Race Attempt:')
		if (check_ena())
			return
		finish_play_card()
		game.state = 'naval_attempt'
	},
	sc() {
		push_undo()
		log_ops_banner()
		log('Support Checks:')
		if (check_ena())
			return
		finish_play_card()
		game.ops = 2
		game.state = 'support_check_prep'
	},
	tst_7() { /* Cancel opponent event */
		push_undo()
		log_ops_banner()
		if (check_ligachev_non_event())
			return
		log(`Event cancelled using TST Award.`)
		game.tst_7 = true
		game.vm_infl_to_do = true
		game.state = 'resolve_opponent_event'
	},
	colossus() { /* Play card for ops and event */
		push_undo()
		log_colossus_banner()
		game.vm_event_to_do = true
		game.vm_infl_to_do = true
		game.colossus = true
		game.state = 'vm_colossus'
	},
	end_round() {
		end_round()
	},
}

states.confirm_card = {
	inactive: 'play a card',
	prompt() {
		let scoring_cards_count = count_scoring_cards()
		view.prompt = `${pluralize(scoring_cards_count, 'scoring card')} in hand with ${pluralize(8-game.round,'Action Round')} remaining. Scoring cards may not be held. Continue?`
		gen_action('continue')
	},
	continue() {
		push_undo()
		select_card(game.temp)
	},
}

states.vm_bayern = {
	inactive: 'use Bayern Class ability',
	prompt() {
		let hand = game.active === 0 ? game.authoritarian_hand : game.liberal_hand
		if (game.temp === 2 || hand.length === 0) {
			view.prompt = 'Bayern Class: Draw cards.'
			gen_action('draw')
		} else if (game.temp >= 0) {
			view.prompt = 'Bayern Class: Discard 2 Strategy Cards.'
			for (let c of hand)
				gen_action_card(c)
		} else {
			view.prompt = 'Bayern Class: Done.'
			gen_action('done')
		}
	},
	card(c) {
		push_undo()
		remove_from_hand(c)
		discard_strategy(c)
		game.temp ++
	},
	draw() {
		if (game.active === 0)
			draw_cards(game.strategy_deck, game.liberal_hand, game.authoritarian_hand, game.liberal_hand.length, game.authoritarian_hand.length + 3)
		else 
			draw_cards(game.strategy_deck, game.liberal_hand, game.authoritarian_hand, game.liberal_hand.length + 3, game.authoritarian_hand.length)
		delete game.temp
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_colossus = {
	inactive: 'use Colossus Class ability',
	prompt() {
		if (game.vm_event_to_do && game.vm_infl_to_do) {
			view.prompt = 'Colossus Class: Play for both Ops and Event.'
			gen_action('event')
			gen_action('ops')
		}
		else if (!game.vm_event_to_do && game.vm_infl_to_do) {
			view.prompt = 'Colossus Class: Event resolved. Use Ops.'
			gen_action('ops')
		}
		else if (game.vm_event_to_do && !game.vm_infl_to_do) {
			view.prompt = 'Colossus Class: Operations resolved. Use Event.'
			gen_action('event')
		}
		else if (!game.vm_event_to_do && !game.vm_infl_to_do) {
			view.prompt = 'Colossus Class: Done.'
			gen_action('end_round')
		}
	},
	event() {
		push_undo()
		log_event(game.played_card)
		game.vm_event_to_do = false
		game.return_state = 'vm_colossus'
		if (SWITCH_EVENTS.includes(game.played_card))
			change_player()
		game.vm_event = game.played_card
		goto_vm(game.vm_event)
	},
	ops() {
		push_undo()
		log_gap('Operations:')
		game.vm_infl_to_do = false
		game.return_state = 'vm_colossus'
		if (check_ena())
			return
		goto_vm(300 + N_COLOSSUS_CLASS)
	},
	end_round() {
		push_undo()
		end_round()
	},
}

states.resolve_opponent_event = {
	get inactive() {
		return `play ${quoted_card_name[game.played_card]}`
	},
	prompt() {
		view.prompt = "Play " + quoted_card_name[game.played_card]
		if (game.vm_infl_to_do) {
			view.prompt += " \u2014 opponent's Event resolved."
			gen_action('infl')
			gen_action('sc')
		} else if (game.vm_event_to_do) {
			// Check for Tiananmen Square Track ability - play opponent card without triggering event
			/*if (
				(game.active === DEM && game.dem_tst_position >= 7 && game.com_tst_position < 7 && !game.tst_7) ||
				(game.active === COM && game.com_tst_position >= 7 && game.dem_tst_position < 7 && !game.tst_7)
			) {
				gen_action('tst_7')
			}*/
			view.prompt += ` \u2014 you must resolve opponent's Event.`
			gen_action('opp_event')
		} else {
			prompt_event("Done.")
			gen_action('end_round')
		}
	},
	infl() {
		push_undo()
		log_gap('Placed SP:')
		goto_add_infl()
	},
	sc() {
		push_undo()
		log_gap('Support Checks:')
		game.ops = 2
		game.state = 'support_check_prep'
	},
	opp_event() {
		delete game.vm_event_to_do
		game.vm_event = game.played_card
		log_event(game.played_card)
		if (is_auto_resolve(game.played_card) || SWITCH_EVENTS.includes(game.played_card)) {
			goto_vm(game.vm_event)
		} else {
			change_player()
			goto_vm(game.vm_event)
		}
	},
	tst_7() {
		push_undo()
		log('Event cancelled using TST Award.')
		game.tst_7 = true
		game.vm_event_to_do = false
	},
	end_round() {
		push_undo()
		end_round()
	},
}

states.end_round = {
	prompt() {
		prompt_event('Done.')
		gen_action('done')
	},
	done() {
		push_undo()
		end_round()
	}
}

states.add_influence = {
	inactive: 'place SPs',
	prompt() {
		if (game.ops <= 0) {
			view.prompt = 'Place SPs: Done.'
			gen_action('done')
		} else if (valid_spaces_infl().length === 0) {
			view.prompt = 'Place SPs: No spaces remaining.'
			gen_action('done')
		} else {
			view.prompt = `Place ${pluralize(game.ops, "SP")}.`
			for (let s of valid_spaces_infl()) {
				gen_action_space(s)
			}
		}
	},
	space(space) {
		add_infl(space)
	},
	done() {
		summary_flush()
		check_event_resolution()
	},
}

states.support_check_prep = {
	inactive: 'do Support Checks',
	prompt() {
		if (game.not_using_konig) {
			konig_prompt()
		}
		else if (valid_spaces_sc().length === 0 && game.ops > 0) {
			view.prompt = 'Support Checks: No targets remaining. Pass.'
			gen_action('pass')
		} else if (game.ops === 0) {
			view.prompt = 'Support Checks: Done.'
			gen_action('done')
		} else if (game.ops > 0) {
			view.prompt = `Support Checks ${3 - game.ops}/2: Choose a space.`
			for (let space_id of valid_spaces_sc()) {
				gen_action_space(space_id)
			}
		}
	},
	space(space) {
		push_undo()
		if (!game.sc_1)
			game.sc_1 = space
		game.selected_space = space
				// Check for Balkan Federatopm - check on first Support Check only
				if (game.persistent_events.includes(C_BALKAN_FEDERATION)) {
					if (game.active === 1 && game.ops > 1) {
						if (
							spaces[game.selected_space].country === R_BALKANS &&
							game.active === 1
						) {
							game.state = 'balkan_federation_check'
							return
						}
					}
				}
		game.state = 'do_support_check'
	},
	done() {
		check_event_resolution()
	},
	pass() {
		check_event_resolution()
	}
}

states.balkan_federation_check = {
	inactive: 'decide Balkan Federation',
	prompt() {
		view.prompt = 'Balkan Federation: Will both Support Checks be in the Balkans?'
		gen_action('yes')
		gen_action('no')
	},
	yes() {
		push_undo()
		game.balkan_federation_tracker = true
		game.state = 'do_support_check'
	},
	no() {
		push_undo()
		game.state = 'do_support_check'
	},
}

states.do_support_check = {
	inactive: 'do Support Checks',
	prompt() {
		if (game.not_using_konig)
			konig_prompt()
		else {
			view.prompt = `Support Check in ${spaces[game.selected_space].name}: Roll a die.`
			gen_action('roll')
		}
	},
	roll() {
		if (do_sc(game.selected_space))
			return
		finish_sc_roll()
	},
	continue() {
		if (do_sc(game.selected_space))
			throw new Error("Konig error")
		finish_sc_roll()
	}
}

function finish_sc_roll() {
	game.ops--
	if (game.ops > 0)
		log_br()
	game.state = 'support_check_prep'
}

states.naval_attempt = {
	inactive: 'do Naval Arms Race Attempt',
	prompt() {
		if (game.not_using_konig) {
			konig_prompt()
		} else {
			view.prompt = 'Naval Arms Race Attempt: Roll a die.'
			gen_action('roll')
		}
	},
	roll() {
		push_undo()
		if (check_von_bethmann_hollweg()) {
			game.aut_naval_attempted_this_turn ++
			end_round()
		} else
			do_naval_attempt()
	},
	continue() {
		if (do_naval_attempt())
			throw new Error("Konig error")
	}
}

function check_von_bethmann_hollweg() {
	if (game.active === 0 && game.persistent_events.includes(C_VON_BETHMANN_HOLLWEG) && !game.aut_naval_attempted) {
		log(`Naval Arms Race attempt fails due to C${C_VON_BETHMANN_HOLLWEG}.`)
		game.aut_naval_attempted = true
		return true
	}
	return false
}

states.naval_attempt_success = {
	inactive: 'do Naval Arms Race Attempt',
	prompt() {
		if (game.vm_event > 300) { // TODO magic number
			view.prompt = 'Naval Arms Race: Successful. Claim award.'
			gen_action('claim')
		} else {
			view.prompt = 'Naval Arms Race: Successful.'
			gen_action('end_round')
		}
	},
	claim() {
		push_undo()
		goto_vm(game.vm_event)
	},
	end_round() {
		push_undo()
		end_round()
	},
}

states.naval_attempt_fail = {
	inactive: 'do Naval Arms Race Attempt',
	prompt() {
		view.prompt = 'Naval Arms Race: Failed.'
		gen_action('end_round')
	},
	end_round() {
		push_undo()
		end_round()
	},
}

states.helgoland = {
	inactive: 'resolve Helgoland Class ability',
	prompt() {
		view.prompt = 'Helgoland Class: You may make a Naval Arms Race attempt.'
		gen_action('pass')
		let hand = game.active === 0 ? game.authoritarian_hand : game.liberal_hand
		for (let c of hand) {
			if (SCORING_CARDS.includes(c)) continue
			gen_action_card(c)
		}
	},
	card(c) {
		push_undo()
		game.played_card = c
		remove_from_hand(c)
		game.ops = get_card_ops(c)
		game.helgoland = true
		log(`C${c}`)
		game.state = 'naval_attempt'
	},
	pass() {
		log_pass_banner()
		end_round()
	}
}

states.konig = {
	inactive: 'decide whether to re-roll',
	prompt() {
		if (game.switched_players)
			view.prompt = `Konig Class: Opponent rolled a ${game.konig_roll}. You may choose to re-roll.`	
		else 
			view.prompt = `Konig Class: You rolled a ${game.konig_roll}. You may choose to re-roll.`
		gen_action('pass')
		gen_action('reroll')
	},
	reroll() {
		push_undo()
		log('Roll: D' + game.konig_roll)
		log('Chose to re-roll using N' + N_KONIG_CLASS)
		game.konig_used = true
		game.using_konig = true
		game.state = game.return_state
		if (game.switched_players) {
			change_player()
			delete game.switched_players
		}
	},
	pass() {
		push_undo()
		game.not_using_konig = true
		game.state = game.return_state
		if (game.switched_players) {
			change_player()
			delete game.switched_players
		}
	}
}

states.orion = {
	inactive: 'use Orion Class ability',
	prompt() {
		view.prompt = `Orion Class: Look at Opponent's Hand.`
		gen_action('done')
	},
	done() {
		game.orion_used = true
		delete game.view_opp_hand
		end_round()
	}
}

states.two_power_standard = {
	inactive: 'resolve Two Power Standard',
	prompt() {
		view.prompt = 'Two Power Standard: Choose a card for a Naval Arms Race Attempt.'
		let rounds = rounds_remaining()
		let scoring_card_count = count_scoring_cards()
		let can_play_scoring_cards = scoring_card_count >= rounds
		for (let c of game.liberal_hand) {
			if (SCORING_CARDS.includes(c) && !can_play_scoring_cards) continue
			gen_action_card(c)
		}
	},
	card(c) {
		push_undo()
		game.played_card = c
		remove_from_hand(c)
		game.ops = get_card_ops(c)
		log(`C${c}`)
		game.two_power_standard --
		game.state = 'naval_attempt'
	}
}

states.select_stability = {
	inactive: 'choose a Stability card',
	prompt() {
		if (game.active === 0 && game.active_country === N_BALKANS && game.persistent_events.includes(C_ENVER_PASHA) && game.moltke === 0) {
			view.prompt = 'Choose 3 Stability cards due to Enver Pasha and Moltke Class.'
		} else if (game.active === 1 && game.active_country === N_RUSSIA && game.persistent_events.includes(C_VICTOR_CHERNOV) && game.moltke === 1) {
			view.prompt = 'Choose 3 Stability cards due to Victor Chernov and Moltke Class.'
		} else if (game.active === game.moltke) {
			view.prompt = 'Choose 2 Stability cards due to Moltke Class.'
		} else if (game.active === 0 && game.active_country === N_BALKANS && game.persistent_events.includes(C_ENVER_PASHA)) {
			view.prompt = 'Choose 2 Stability cards due to Enver Pasha.'
		} else
			view.prompt = 'Choose a Stability card.'
		let cards = game.active === 0 ? game.aut_stability : game.lib_stability
		for (let c of cards) {
			if (c === game.aut_stability_card) continue
			gen_action_stability_card(c)
		}
	},
	stability_card(c) {
		push_undo()
		game.temp ++
		if (game.active === 0) {
			game.aut_stability = game.aut_stability.filter(n => n !== c)
			if (!game.aut_stability_card)
				game.aut_stability_card = c
			else if (!game.aut_stability_card_2)
				game.aut_stability_card_2 = c
			else
				game.aut_stability_card_3 = c
		} else {
			game.lib_stability = game.lib_stability.filter(n => n !== c)
			if (!game.lib_stability_card)
				game.lib_stability_card = c
			else if (!game.lib_stability_card_2)
				game.lib_stability_card_2 = c
			else
				game.lib_stability_card_3 = c
		}
		if (game.active === 0 && game.aut_stability.length === 1) {
			log('.0 has 1 Stability card remaining. All Stability cards become available.')
			game.aut_stability = [game.aut_stability, ...game.aut_stability_discard]
			game.aut_stability_discard = []
		}
		if (game.active === 1 && game.lib_stability.length === 1) {
			log('.1 has 1 Stability card remaining. All Stability cards become available.')
			game.lib_stability = [game.lib_stability, ...game.lib_stability_discard]
			game.lib_stability_discard = []
		}
		if (game.temp === game.limit)
			game.state = 'confirm_stability'
	}
}

states.confirm_stability = {
	inactive: 'choose a Stability card',
	prompt() {
		confirm_stability()
		gen_action('done')
	},
	done() {
		push_undo()
		if (game.aut_stability_card && game.lib_stability_card)
			goto_resolve_stability()
		else {
			change_player()
			goto_stability()
		}
	}
}

function confirm_stability() {
	if (game.active === 0) {
		view.prompt = `Chose ${stability_cards[game.aut_stability_card].name}`
		if (game.aut_stability_card_2)
			view.prompt += `, ${stability_cards[game.aut_stability_card_2].name}`
		if (game.aut_stability_card_3)
			view.prompt += `, ${stability_cards[game.aut_stability_card_2].name}`
	} else {
		view.prompt = `Chose ${stability_cards[game.lib_stability_card].name}`
		if (game.lib_stability_card_2)
			view.prompt += `, ${stability_cards[game.lib_stability_card_2].name}`
		if (game.lib_stability_card_3)
			view.prompt += `, ${stability_cards[game.lib_stability_card_3].name}`
	}
	view.prompt += '.'
}

states.resolve_stability = {
	inactive: 'resolve Stability card',
	prompt() {
		view.prompt = 'Play a Stability card.'
		if (game.active === 0) {
			if (game.aut_stability_card)
				gen_action_stability_card(game.aut_stability_card)
			if (game.aut_stability_card_2)
				gen_action_stability_card(game.aut_stability_card_2)
			if (game.aut_stability_card_3)
				gen_action_stability_card(game.aut_stability_card_3)
		} else {
			if (game.lib_stability_card)
				gen_action_stability_card(game.lib_stability_card)
			if (game.lib_stability_card_2)
				gen_action_stability_card(game.lib_stability_card_2)
			if (game.lib_stability_card_3)
				gen_action_stability_card(game.lib_stability_card_3)
		}
	},
	stability_card(c) {
		push_undo()
		game.vm_event = 200 + c
		log(`P${c}`)
		goto_vm(game.vm_event)
	}
}

states.verify_held_cards = {
	inactive: 'verify held cards',
	prompt() {
		view.prompt = 'End Turn: Verify held cards.'
		gen_action('verify')
	},
	verify() {
		log_br()
		log_h2('Verify held cards')
		const aut_has_scoring_card = game.authoritarian_hand.some(card => SCORING_CARDS.includes(card))
		const lib_has_scoring_card = game.liberal_hand.some(card => SCORING_CARDS.includes(card))
		if (!aut_has_scoring_card && !lib_has_scoring_card) {
			log('No held scoring cards.')
		}
		if (aut_has_scoring_card && lib_has_scoring_card) {
			log('Both players have held scoring cards')
			goto_game_over('Draw', `The game is tied due to held scoring cards!`)
		} else if (aut_has_scoring_card) {
			log('Authoritarian player has a held scoring card')
			goto_game_over(LIB, `${LIB} won by held scoring card!`)
		} else if (lib_has_scoring_card) {
			log('Liberal player has a held scoring card')
			goto_game_over(AUT, `${AUT} won by held scoring card!`)
		} else if (game.turn === 10) {
			clear_undo()
			log_h2('Final Scoring')
			game.state = 'final_scoring'
		} else {
			new_turn()
		}
	},
}

states.great_war_roll = {
	inactive: 'perform Great War roll',
	prompt() {
		view.prompt = 'The Great War: Roll a die.'
		gen_action('roll')
	},
	roll() {
		let roll = roll_d6()
		if (game.active === 0) {
			log('.0 Great War roll:')
			logi('D' + roll)
			if (three_emperor_league()) {
				roll += 2
				logi('+2 Three Emperor League')
			}
			if (game.persistent_events.includes(C_THE_DUAL_ALLIANCE)) {
				roll += 2
				logi('+2 C' + C_THE_DUAL_ALLIANCE)
			}
			if (game.persistent_events.includes(C_TRIPLE_ALLIANCE)) {
				roll += 2
				logi('+2 C' + C_TRIPLE_ALLIANCE)
			}
			if (game.persistent_events.includes(C_SCHLIEFFEN_PLAN_ADOPTED)) {
				roll ++
				logi('+1 C' + C_SCHLIEFFEN_PLAN_ADOPTED)
			}
			if (game.persistent_events.includes(C_VON_BETHMANN_HOLLWEG)) {
				roll ++
				logi('+1 C' + C_VON_BETHMANN_HOLLWEG)
			}
			if (game.persistent_events.includes(C_GERMAN_ARMY_EXPANSION)) {
				roll ++
				logi('+1 C' + C_GERMAN_ARMY_EXPANSION)
			}
			if (game.aut_naval_position > game.lib_naval_position) {
				roll ++
				logi('+1 Naval Arms Race')
			}
			if (check_aut_control(S_ITALY) || check_aut_control(S_CONSTANTINOPLE)) {
				roll ++
				logi('+1 controlling Italy or Constantinople')				
			}
			game.aut_gw_roll = roll
		} else {
			log('.1 Great War roll:')
			logi('D' + roll)
			if (game.persistent_events.includes(C_ENTENTE_CORDIALE)) {
				roll += 2
				logi('+2 C' + C_ENTENTE_CORDIALE)
			}
			if (game.persistent_events.includes(C_FRANCO_RUSSIAN_ALLIANCE)) {
				roll += 2
				logi('+2 C' + C_FRANCO_RUSSIAN_ALLIANCE)
			}
			if (game.persistent_events.includes(C_US_INTERVENTIONISM) && game.persistent_events.includes(C_US_INTERVENTIONISM)) {
				roll += 2
				logi('+2 C' + C_US_INTERVENTIONISM)
			}
			if (game.lib_naval_position > game.aut_naval_position) {
				roll ++
				logi('+1 Naval Arms Race')
			}
			if (check_lib_control(S_ITALY) || check_lib_control(S_CONSTANTINOPLE)) {
				roll ++
				logi('+1 controlling Italy or Constantinople')				
			}
			game.lib_gw_roll = roll
		}
		if (game.lib_gw_roll && game.aut_gw_roll) {
			if (game.aut_gw_roll > game.lib_gw_roll) {
				log('Central Powers win the Great War!')
				log('-4 VP')
				game.vp -= 4
				game.gw_winner = 0
			} else if (game.lib_gw_roll > game.aut_gw_roll) {
				log('Entente wins the Great War!')
				log('+4 VP')
				game.vp += 4
				game.gw_winner = 0
			} else {
				log('Both sides lose the Great War!')
			}
			if (game.gw_winner >= 0) {
				if (game.active !== game.gw_winner)
					change_player()
			} else {
				if (game.active !== 1)
					change_player()
				game.gw_initiative = 1
			}
			log_h3('War Losses')
			game.state = 'war_losses_choose'
		} else {
			change_player()
		}
	}
}

states.war_losses_choose = {
	inactive: 'choose a Scoring Region',
	prompt() {
		view.prompt = 'Chose a Scoring Region to apply War Losses.'
		let regions = [...game.central_powers, ...game.entente]
		for (let r of regions) {
			if (r === N_AUSTRIA_HUNGARY)
				gen_action('Austria_Hungary')
			else
				gen_action(COUNTRIES[r])
		}
	},
	France(){
		push_undo()
		game.active_country = N_FRANCE
		goto_great_war_losses_roll()
	}, 
	Austria_Hungary() {
		push_undo()
		game.active_country = N_AUSTRIA_HUNGARY
		goto_great_war_losses_roll()
	},
	Russia() {
		push_undo()
		game.active_country = N_RUSSIA
		goto_great_war_losses_roll()
	},
	Balkans() {
		push_undo()
		game.active_country = N_BALKANS
		goto_great_war_losses_roll()
	}, 
	Germany() {
		push_undo()
		game.active_country = N_GERMANY
		goto_great_war_losses_roll()
	}
}

states.war_losses_roll = {
	inactive: 'apply War Losses',
	prompt() {
		view.prompt = `War Losses ${COUNTRIES[game.active_country]}: Roll a die.`
		gen_action('roll')
	},
	roll() {
		game.ops = roll_d6()
		log_gap('.' + game.active + ' War Losses: D' + game.ops)
		if (game.gw_round > 0) {
			log('Removed SP:')
			game.state = 'war_losses_remove'
		} else
			goto_great_war_losses()
	}
}

states.war_losses_remove = {
	inactive: 'apply War Losses',
	prompt() {
		let available = false
		if (game.ops > 0) {
			view.prompt = `War Losses ${COUNTRIES[game.active_country]}: Remove ${pluralize(game.ops, 'SP')} from ${COUNTRIES[game.active_country]} or adjacent independent spaces.`
			let region = [...get_country(game.active_country), ... ADJ_INDEPENDENTS[game.active_country]]
			for (let s of region) {
				if (has_own_infl(s)) {
					gen_action_space(s)
					available = true
				}
			}
		}
		if (game.ops === 0 || !available) {
			view.prompt = `War Losses ${COUNTRIES[game.active_country]}: Done.`
			gen_action('done')
		}
	},
	space(s) {
		remove_infl(s)
	},
	done() {
		summary_flush()
		game.gw_round++
		if (game.gw_round === 3) {
			goto_great_war_choose()
		} else {
			change_player()
			game.state = 'war_losses_roll'
		}
	}
}

states.war_losses_add = {
	inactive: 'apply War Losses',
	prompt() {
		let available = false
		if (game.ops > 0) {
			view.prompt = `War Losses ${COUNTRIES[game.active_country]}: Add ${pluralize(game.ops, 'SP')} to ${COUNTRIES[game.active_country]} or adjacent independent spaces.`
			for (let s of great_war_add()) {
				gen_action_space(s)
				available = true
			}
		}
		if (game.ops === 0 || !available) {
			view.prompt = `War Losses ${COUNTRIES[game.active_country]}: Done.`
			gen_action('done')
		}

	},
	space(s) {
		add_infl(s)
	},
	done() {
		summary_flush()
		change_player()
		game.gw_round++
		game.state = 'war_losses_roll'
	}
}

states.war_losses_control = {
	inactive: 'take control of Constantinople and Italy',
	prompt() {
		view.prompt = 'War Losses: Take control of Constantinople and Italy.'
		let done = true
		if (game.active === 0) {
			if (!check_aut_control(S_CONSTANTINOPLE)) {
				gen_action_space(S_CONSTANTINOPLE)
				done = false
			} if (!check_aut_control(S_ITALY)) {
				gen_action_space(S_ITALY)
				done = false
			}
		}
		if (game.active === 1) {
			if (!check_lib_control(S_CONSTANTINOPLE)) {
				gen_action_space(S_CONSTANTINOPLE)
				done = false
			} if (!check_lib_control(S_ITALY)) {
				gen_action_space(S_ITALY)
				done = false
			}
		}
		if (done) {
			view.prompt = 'War Losses: Take control of Constantinople and Italy: Done.'
			gen_action('done')
		}
	},
	space(s) {
		vm_do_take_control(s)
	},
	done() {
		goto_great_war_choose()
	}
}

states.final_scoring = {
	inactive: 'finish Final Scoring',
	prompt() {
		if (game.final_scoring.length > 0) {
			view.prompt = `Final Scoring: Select a region to score.`
			for (let r of game.final_scoring) {
				if (r === N_AUSTRIA_HUNGARY)
					gen_action('Austria_Hungary')
				else
					gen_action(COUNTRIES[r])
			}
		} else {
			view.prompt = 'Final Scoring: Done.'
			gen_action('done')
		}
	},
	France(){
		push_undo()
		game.active_country = N_FRANCE
		do_final_scoring()
	}, 
	Austria_Hungary() {
		push_undo()
		game.active_country = N_AUSTRIA_HUNGARY
		do_final_scoring()
	},
	Russia() {
		push_undo()
		game.active_country = N_RUSSIA
		do_final_scoring()
	},
	Balkans() {
		push_undo()
		game.active_country = N_BALKANS
		do_final_scoring()
	}, 
	Germany() {
		push_undo()
		game.active_country = N_GERMANY
		do_final_scoring()
	},
	done() {
		if (game.vp < 0) {
			goto_game_over(AUT, `${AUT} wins on Victory Point Track!`)
		} else if (game.vp > 0) {
			goto_game_over(LIB, `${LIB} wins on Victory Point Track!`)
		} else if (game.gw_winner === 0) {
			goto_game_over(AUT, `${AUT} wins on Victory Point Track!`)
		} else if (game.gw_winner === 1) {
			goto_game_over(LIB, `${LIB} wins on Victory Point Track!`)
		} else {
			goto_game_over('Double loss', `Both players lose!`)
		}
	}
}

// =========================== VM STATES ===============================
states.vm_add_limited_infl_socio_scoring = {
	prompt() {
		let available = false
		if (game.ops > 0) {
			prompt_event(`Place ${game.vm_max_infl} SP ${event_prompt()}.`)
			for (let s of get_country(game.active_country)) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (game.socio.includes(get_socio_1(s)) || game.socio.includes(get_socio_2(s))) {
					gen_action_space(s)
					available = true
				}
			}
		}
		if (!available) {
			prompt_event('Place SP: Done.')
			gen_action('done')
		}	
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_limited_infl_uncontrolled_scoring = {
	prompt() {
		let available = false
		if (game.vm_max_infl === 1 && game.ops > 0) {
			prompt_event(`${event_prompt()}.`)
			for (let s of get_country(game.active_country)) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (is_uncontrolled(s)) {
					gen_action_space(s)
					available = true
				}
			}
		}
		if (!available) {
			prompt_event('Place SP: Done.')
			gen_action('done')
		}	
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_infl = {
	prompt() {
		if (game.ops > 0) {
			view.prompt = `Place ${pluralize(game.ops, 'SP')}.`
			for (let s of ALL_SPACES)
				gen_action_space(s)
		} else {
			view.prompt = 'Place SP: Done.'
			gen_action('done')
		}
	},
	space(s) {
		add_infl(s)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_infl_free = {
	prompt() {
		if (game.ops > 0) {
			view.prompt = `Place ${pluralize(game.ops, 'SP')}.`
			for (let s of ALL_SPACES) {
				if (!game.persistent_events.includes(C_NORWEGIAN_INDEPENDENCE) && s === S_NORWAY) continue
				gen_action_space(s)
			}
		} else {
			view.prompt = 'Place SPs: Done.'
			gen_action('done')
		}
	},
	space(s) {
		add_infl_free(s)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}
	
states.vm_add_infl_free_space = {
	prompt() {
		if (game.ops > 0) {
			prompt_event(`Place ${pluralize(game.ops, 'SP')} in ${spaces[game.valid_spaces].name}.`)
			gen_action_space(game.valid_spaces)
		} else {
			prompt_event('Place SPs: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_infl_free(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_add_infl_free_space_adj ={
	prompt() {
		if (game.ops > 0) {
			prompt_event(`Place ${pluralize(game.ops, 'SP')} ${event_prompt()}.`)
			let spaces = [game.space, ...get_adjusted_adjacency(game.space)]
			for (let s of spaces)
				gen_action_space(s)
		} else {
			prompt_event('Place SPs: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_infl_free(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_add_infl_free_space_country = {
	prompt() {
		if (game.ops > 0) {
			prompt_event(`Place ${pluralize(game.ops, 'SP')} in a space in ${COUNTRIES[game.active_country]}.`)
			if (!game.space) {
				for (let s of get_country(game.active_country))
					gen_action_space(s)
			} else {
				gen_action_space(game.space)
			}
		} else {
			prompt_event('Place SPs: Done.')
			gen_action('done')
		}
	},
	space(s) {
		game.space = s
		add_infl_free(s)
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_add_infl_free_country = {
	prompt() {
		if (game.ops > 0) {
			prompt_event(`Place ${pluralize(game.ops, 'SP')} in ${COUNTRIES[game.active_country]}.`)
			for (let s of get_country(game.active_country))
				gen_action_space(s)
		} else {
			prompt_event('Place SPs: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_infl_free(s)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_infl_free_socio = {
	prompt() {
		if (game.ops > 0 ) {
			prompt_event(`Place ${game.ops} SP in ${event_prompt()} spaces.`)
			for (let s of get_socio_spaces(game.socio)) {
				gen_action_space(s)
			}
		} else {
			prompt_event('Place SPs: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_infl_free(s)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_infl_free_outside = {
	prompt() {
		if (game.ops > 0) {
			prompt_event('Place 1 SP outside the Scoring region.')
			for (let s of ALL_SPACES) {
				if (s === S_NORWAY && !game.persistent_events.includes(C_NORWEGIAN_INDEPENDENCE)) continue
				if (spaces[s].country === COUNTRIES[game.active_country]) continue
				gen_action_space(s)
			}
		} else {
			prompt_event('Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_infl_free(s)
	},
	done() {
		push_undo()
		vm_next()
	}
}
states.vm_add_infl_free_not_opp_controlled_countries = {
	prompt() {
		gen_action('done')
		if (game.ops > 0) {
			prompt_event(`Place ${game.ops} SP ${event_prompt()}.`)
			for (let s of game.active_country) {
				if (!check_opp_control(s))
					gen_action_space(s)
			}
		} else
			prompt_event('Place SP: Done.')
	},
	space(s) {
		add_infl_free(s)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_limited_infl_own_controlled_spaces = {
	prompt() {
		let available = false
		if (game.ops > 0) {
			prompt_event(`${event_prompt()}.`)
			for (let s of ALL_SPACES) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (!is_own_controlled(s)) continue
				gen_action_space(s)
				available = true
			}
		} 
		if (!available) {
			prompt_event('Place SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_limited_infl_all_opp_controlled_country = {
	prompt() {
		let available = false
			view.prompt = `Place ${game.vm_max_infl} SP ${event_prompt()}.`
			for (let s of get_country(game.active_country)) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (check_opp_control(s)) {
					gen_action_space(s)
					available = true
				}
			}
		if (!available) {
			view.prompt = 'Place SP: Done.'
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_limited_infl_free_spaces = {
	prompt() {
		let spaces = false
		if (game.ops === 0) {
			view.prompt = 'Place SP: Done.'
			gen_action('done')
			return
		}
		view.prompt = `${event_prompt()}.`
		for (let s of game.valid_spaces) {
			if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
			gen_action_space(s)
			spaces = true
		}
		if (!spaces) {
			view.prompt = 'Place SP: Done.'
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_limited_infl_free_country = {
	prompt() {
		let available = false
		if (game.ops > 0) {
			prompt_event(`${event_prompt()}.`)
			for (let s of ALL_SPACES) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (spaces[s].country === COUNTRIES[game.active_country]){
					gen_action_space(s)
					available = true
				}
			}
		}
		if (game.ops === 0 ) {
			prompt_event('Place SPs: Done.')
			gen_action('done')
		}
		if (!available) {
			prompt_event('Place SPs: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_limited_infl_free_socio = {
	prompt() {
		let available = false
		if (game.ops > 0) {
			prompt_event(`${event_prompt()}.`)
			for (let s of ALL_SPACES) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (get_socio_1(s) === game.socio || get_socio_2(s) === game.socio) {
					gen_action_space(s)
					available = true
				}
			}
		}
		if (game.ops === 0 || !available) {
			prompt_event('Place SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_limited_infl_free_socio_per_country = {
	prompt() {
		let available = false
		if (game.ops > 0 ) {
			prompt_event(`Add ${game.vm_max_infl} SP ${event_prompt()}.`)
			for (let s of get_socio_spaces(game.socio)) {
				let c = COUNTRIES.indexOf(spaces[s].country)
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (game.vm_country_added && game.vm_country_added[c] === game.vm_max_country) continue
				if (spaces[s].country === R_INDEPENDENT) continue
				else {
					gen_action_space(s)
					available = true
				}
			}}
		if (!available || game.ops === 0) {
			prompt_event('Place SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_add_limited_infl_no_aut = {
	prompt() {
		let available = false
		if (game.ops > 0) {
			prompt_event(`Place ${game.vm_max_infl} SP ${event_prompt()}.`)
			for (let s of ALL_SPACES) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (!game.persistent_events.includes(C_NORWEGIAN_INDEPENDENCE) && s === S_NORWAY) continue
				if (no_authoritarian(s)) {
					gen_action_space(s)
					available = true
				}
			}
		}
		if (game.ops === 0 || !available) {
			prompt_event('Place SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_limited_infl_not_opp_controlled_country = {
	prompt() {
		let available = false
		if (game.ops > 0) {
			prompt_event(`${event_prompt()}.`)
			for (let s of get_country(game.active_country)) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (!check_opp_control(s)) {
					gen_action_space(s)
					available = true
				}
			}
		}
		if (game.ops === 0 || !available) {
			prompt_event('Place SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_limited_infl_not_opp_controlled_spaces = {
	prompt() {
		gen_action('done')
		if (game.ops > 0) {
			view.prompt = `Place ${game.vm_max_infl} SP ${event_prompt()}.`
			for (let s of game.valid_spaces) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (!check_opp_control(s))
					gen_action_space(s)
			}
		} else
			view.prompt = 'Place SP: Done.'
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_limited_infl_uncontrolled_ind = {
	prompt() {
		let available = false
		if (game.ops > 0) {
			view.prompt = `Place ${game.vm_max_infl} SP in up to ${game.ops} uncontrolled Independent spaces.`
			for (let s of get_country(N_INDEPENDENT)) {
				if (s === S_NORWAY && !game.persistent_events.includes(C_NORWEGIAN_INDEPENDENCE)) continue
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (is_uncontrolled(s)) {
					gen_action_space(s)
					available = true
				}
			}
		} else {
			view.prompt = 'Place SP: Done.'
			gen_action('done')
		}
		if (!available) {
			view.prompt = 'Place SP: Done.'
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_add_limited_infl_uncontrolled_ind_scoring = {
	prompt() {
		let available = false
		if (game.ops > 0) {
			prompt_event(`Place ${game.vm_max_infl} SP in up to ${game.ops} adjacent uncontrolled Independent spaces.`)
			for (let s of ADJ_INDEPENDENTS[game.active_country]) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (is_uncontrolled(s)) {
					gen_action_space(s)
					available = true
				}
			}
		} else {
			prompt_event('Place SP: Done.')
			gen_action('done')
		}
		if (!available) {
			prompt_event('Place SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_break_control = {
	prompt() {
		prompt_event(`${event_prompt()}.`)
		gen_action_space(game.space)
	},
	space(s) {
		break_control(s)
		vm_next()
	}
}

states.vm_match_opp_infl_country = {
	prompt() {
		if (game.ops > 0) {
			prompt_event(`${event_prompt()}.`)
			for (let s of get_country(game.active_country))
				gen_action_space(s)
		} else {
			prompt_event('Done.')
			gen_action('done')
		}
	},
	space(s) {
		match_infl(s)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_remove_infl_country ={
	prompt() {
		let available = false
		if (game.ops > 0) {
			if (!game.active_country) {
				prompt_event(`Remove ${game.ops} SP from spaces in a single region.`)
				for (let s of ALL_SPACES) {
					if (spaces[s].country === R_INDEPENDENT) continue
					if (has_own_infl(s)) {
						gen_action_space(s)
						available = true
					}
				}
			} else {
				prompt_event(`Remove ${game.ops} SP from spaces in ${COUNTRIES[game.active_country]}.`)
				for (let s of get_country(game.active_country)) {
					if (has_own_infl(s)) {
						gen_action_space(s)
						available = true
					}
				}
			}
		}
		if (!available) {
			prompt_event('Remove SP: Done.')
			gen_action('done')
		}
		if (game.ops === 0) {
			prompt_event('Remove SP: Done.')
			gen_action('done')
		}

	},
	space(s) {
		if (!game.active_country)
			game.active_country = COUNTRIES.indexOf(spaces[s].country)
		remove_infl(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_remove_limited_infl = {
	prompt() {
		if (game.ops > 0 ) {
			prompt_event(`${event_prompt()}.`)
			for (let s of ALL_SPACES) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (has_opp_infl(s))
					gen_action_space(s)
			}
		} else {
			prompt_event(`Place SPs: Done.`)
			gen_action('done')
		}
	},
	space(s) {
		remove_limited_infl(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_remove_limited_infl_country_both_present = {
	prompt() {
		let available = false
		prompt_event(`Remove ${game.vm_max_infl} SP ${event_prompt()}.`)
		for (let s of get_country(game.active_country)) {
			if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
			if (has_own_infl(s) && has_opp_infl(s)) {
				gen_action_space(s)
				available = true
			}
		}
		if (!available) {
			prompt_event('Remove SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		remove_limited_infl(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_remove_limited_infl_socio = {
	inactive: 'resolve Stability card',
	prompt() {
		let available = false
		if (game.ops > 0 ) {
			prompt_event(`Remove ${game.vm_max_infl} SP ${event_prompt()}.`)
			for (let s of get_socio_spaces(game.socio)) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (has_opp_infl(s)) {
					gen_action_space(s)
					available = true
				}
			}
		}
		if (!available || game.ops === 0) {
			prompt_event('Remove SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		remove_limited_infl(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}
states.vm_remove_limited_infl_socios_country = {
	prompt() {
		let available = false
		if (game.ops > 0 ) {
			prompt_event(`Remove ${game.vm_max_infl} SP ${event_prompt()}.`)
			for (let s of get_socio_spaces(game.socio)) {
				let c = COUNTRIES.indexOf(spaces[s].country)
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (game.vm_country_added && game.vm_country_added[c] === game.vm_max_country) continue
				else {
					gen_action_space(s)
					available = true
				}
			}}
		if (!available || game.ops === 0) {
			prompt_event('Remove SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		remove_limited_infl(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_remove_opp_infl_space = {
	prompt() {
		let available = false
		if (game.ops > 0) {
			prompt_event(`Remove ${pluralize(game.ops, 'SP')} ${event_prompt()}.`)
			if (has_opp_infl(game.temp)) {
				gen_action_space(game.temp)
				available = true
			}
		} if (game.ops === 0 || !available) {
			prompt_event('Remove SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		remove_infl(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_remove_opp_infl_country = {
	prompt() {
		if (game.ops > 0 && valid_spaces_remove_infl_country().length === 0) {
			prompt_event(`Remove SP: Done.`)
				gen_action('done')
		} else if (game.ops > 0) {
			prompt_event(`Remove ${pluralize(game.ops, 'SP')} from ${COUNTRIES[game.active_country]}.`)
			for (let s of valid_spaces_remove_infl_country()) {
				gen_action_space(s)
			}
		} else {
			prompt_event(`Remove SP: Done.`)
			gen_action('done')
		}
	},
	space(s) {
		remove_infl(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}	
}

states.vm_remove_opp_infl_country_excl_space = {
	prompt() {
		let available = false
		if (game.ops > 0 ) {
			prompt_event(`Remove ${pluralize(game.ops, 'SP')} ${event_prompt()}.`)
			for (let s of valid_spaces_remove_infl_country()) {
				if (s === game.temp) continue
				gen_action_space(s)
				available = true
			}
		} 
		if (game.ops === 0 || !available) {
			prompt_event(`Remove SP: Done.`)
			gen_action('done')
		}
	},
	space(s) {
		remove_infl(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_remove_limited_infl_spaces = {
	prompt() {
		if (game.ops > 0) {
			let spaces = false
			for (let s of game.valid_spaces) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (game.remove_opponent_infl && !has_opp_infl(s)) continue
				gen_action_space(s)
				spaces = true
			}
			if (spaces)
				prompt_event(`${event_prompt()}.`)
			else {
				prompt_event(`Remove SP: Done.`)
				gen_action('done')
			}
		} else {
			prompt_event('Remove SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		remove_limited_infl(s, game.vm_max_infl)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_replace_limited_opp_socio = {
	prompt() {
		let available = false
		if (game.ops > 0) {
			prompt_event(`${event_prompt()}`)
			for (let s of get_socio_spaces(game.socio)) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (has_opp_infl(s)) {
					gen_action_space(s)
					available = true
				}
			}
		}
		if (game.ops === 0 || !available) {
			prompt_event('Done.')
			gen_action('done')
		} 
	},
	space(s) {
		replace_infl(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_replace_opp_country = {
	prompt() {
		let available = false
		if (game.ops > 0) {
			prompt_event(`${event_prompt()}`)
			for (let s of get_country(game.active_country)) {
				if (has_opp_infl(s)) {
					gen_action_space(s)
					available = true
				}
			}
		}
		if (game.ops === 0 || !available) {
			prompt_event('Done.')
			gen_action('done')
		} 
	},
	space(s) {
		replace_infl(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_replace_opp_space = {
	prompt() {
		let available = false
		if (game.ops > 0) {
			prompt_event(`${event_prompt()}`)
			for (let s of game.space) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (has_opp_infl(s)) {
					gen_action_space(s)
					available = true
				}
			}
		}
		if (game.ops === 0) {
			prompt_event('Done.')
			gen_action('done')
		} else if (!available) {
			prompt_event('No SP to replace.')
			gen_action('pass')
		}
	},
	space(s) {
		replace_infl(s)
		check_vm_next()
	},
	pass() {
		push_undo()
		log('No SP to replace.')
		summary_flush()
		vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_support_check_prep = {
	prompt() {
		if (game.ops > 0 && valid_spaces_sc().length > 0) {
			view.prompt = `Support checks: select a space. ${pluralize(game.ops, 'Support Check')} remaining.`
			for (let s of valid_spaces_sc())
				gen_action_space(s)
		} else if (game.ops > 0 && valid_spaces_sc()) {
			view.prompt = 'Support checks: no available spaces. Done.'
			gen_action('done')
		} else {
			view.prompt = 'Support checks: Done.'
			gen_action('done')
		}
	},
	space(space) {
		push_undo()
		game.selected_space = space
		game.state = 'vm_do_support_check'
	},
	done() {
		vm_next()
	}
}

states.vm_do_support_check = {
	prompt() {
		if (game.not_using_konig) {
			konig_prompt()
		} else {
			view.prompt = `Support Check in ${spaces[game.selected_space].name}: Roll a die.`
			gen_action('roll')
		}
	},
	roll() {
		if (do_sc(game.selected_space))
			return
		finish_vm_support_check()
	},
	continue() {
		if (do_sc(game.selected_space))
			throw new Error("Konig error")
		finish_vm_support_check()
	}
}

function finish_vm_support_check() {
		game.ops--
		game.state = 'vm_support_check_prep'
}

states.vm_support_check_country_prep = {
	prompt() {
		if (game.ops > 0 && valid_spaces_sc_country(COUNTRIES[game.active_country]).length > 0) {
			view.prompt = `Support checks: select a space in ${COUNTRIES[game.active_country]}. ${pluralize(game.ops, 'Support Check')} remaining.`
			for (let s of valid_spaces_sc_country(COUNTRIES[game.active_country]))
				gen_action_space(s)
		} else if (game.ops > 0 && valid_spaces_sc_country(COUNTRIES[game.active_country]).length === 0) {
			view.prompt = 'Support checks: no available spaces. Done.'
			gen_action('done')
		} else {
			view.prompt = 'Support checks: Done.'
			gen_action('done')
		}
	},
	space(space) {
		push_undo()
		game.selected_space = space
		game.state = 'vm_do_support_check_country'
	},
	done() {
		vm_next()
	}
}

states.vm_do_support_check_country = {
	prompt() {
		if (game.not_using_konig) {
			konig_prompt()
		} else {
			view.prompt = `Support Check in ${spaces[game.selected_space].name}: Roll a die.`
			gen_action('roll')
		}
	},
	roll() {
		if (do_sc(game.selected_space))
			return
		game.ops--
		game.state = 'vm_support_check_country_prep'
	},
	continue() {
		if (do_sc(game.selected_space))
			throw new Error("Konig error")
		game.ops--
		game.state = 'vm_support_check_country_prep'
	}
}

states.vm_support_check_space = {
	prompt() {
		if (game.not_using_konig) {
			konig_prompt()
		} else if (game.ops > 0 && has_opp_infl(game.space)) {
			view.prompt = `Support Check in ${spaces[game.space].name}: Roll a die.`
			gen_action('roll')
		} else if (game.ops > 0 && !has_opp_infl(game.space)) {
			view.prompt = `Support Check: no opponent SP. Pass.`
			gen_action('pass')
		} else {
			view.prompt = `Support Check: Done.`
			gen_action('done')
		}
	},
	roll() {
		if (do_sc(game.space))
			return
		game.ops--
	},
	continue() {
		if (do_sc(game.space))
			throw new Error("Konig error")
		game.ops--
	},
	pass() {
		push_undo()
		summary_flush()
		vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_support_check_socio_prep = {
	prompt() {
		if (game.ops > 0 && valid_spaces_sc_socio().length > 0) {
			view.prompt = `Support checks: select a space. ${pluralize(game.ops, 'Support Check')} remaining.`
			for (let s of valid_spaces_sc_socio())
				gen_action_space(s)
		} else if (game.ops > 0 && valid_spaces_sc_socio().length === 0) {
			view.prompt = 'Support checks: no available spaces. Done.'
			gen_action('done')
		} else {
			view.prompt = 'Support checks: Done.'
			gen_action('done')
		}
	},
	space(space) {
		push_undo()
		game.selected_space = space
		game.state = 'vm_do_support_check_socio'
	},
	done() {
		vm_next()
	}
}

states.vm_do_support_check_socio = {
	prompt() {
		if (game.not_using_konig) {
			konig_prompt()
		} else { 
			view.prompt = `Support Check in ${spaces[game.selected_space].name}: Roll a die.`
			gen_action('roll')
		}
	},
	roll() {
		if (do_sc(game.selected_space))
			return
		game.ops--
		game.state = 'vm_support_check_socio_prep'
	},
	continue() {
		if (do_sc(game.selected_space))
			throw new Error("Konig error")
		game.ops--
		game.state = 'vm_support_check_socio_prep'
	}
}

states.vm_play_from_discard = {
	prompt() {
		prompt_event('Play any non-Scoring card in the discard pile for the event.')
		let card = false
		for (let c of game.strategy_discard) {
			if (c === C_EIGHT_NATION_ALLIANCE) continue
			if (!event_is_playable(c)) continue
			if (!SCORING_CARDS.includes(c)) {
				gen_action('pass')
				gen_action_card(c)
				card = true
			}
		}
		if (!card) {
			prompt_event('No non-Scoring cards in discard.')
			gen_action('done')
		}
	},
	card(c) {
		push_undo()
		log(`Selected C${c}.`)
		if (game.active === 0 && strategy_cards[c].side === 'L' ||
			game.active === 1 && strategy_cards[c].side ===  'A'
		) {
			change_player()
		}
		log_event(c)
		game.vm_event = c
		goto_vm(c)
	},
	pass() {
		log('Did not take a card.')
		vm_next()
	},
	done(){
		log('No non-Scoring cards in discard.')
		vm_next()
	}
}

states.vm_take_control = {
	prompt() {
		let already_controlled = true
		prompt_event(`Take control of ${spaces[game.valid_spaces].name}.`)
		if (
			game.active === 0 && !check_aut_control(game.valid_spaces) ||
			game.active === 1 && !check_lib_control(game.valid_spaces)
		) {
			already_controlled = false
			gen_action_space(game.valid_spaces)
		}
		if (already_controlled) {
			prompt_event('Take control: Done.')
			gen_action('done')
		}
	},
	space(space) {
		push_undo()
		vm_do_take_control(space)
	},
	done() {
		push_undo()
		vm_next()
	},
}

states.vm_take_control_uncontrolled_socio_scoring  = {
	prompt() {
		let already_controlled = true
		prompt_event(`${event_prompt()} ${COUNTRIES[game.active_country]}.`)
		for (let s of get_country(game.active_country)) {
			if (is_uncontrolled(s) && (game.socio.includes(get_socio_1(s)) || game.socio.includes(get_socio_2(s)))) {
				already_controlled = false
				gen_action_space(s)
			}
		}
		if (already_controlled) {
			prompt_event('Take control: Done.')
			gen_action('done')
		}
	},
	space(space) {
		push_undo()
		vm_do_take_control(space)
	},
	done() {
		push_undo()
		vm_next()
	},
}

states.vm_take_control_uncontrolled_space_country = {
	prompt() {
		let already_controlled = true
		if (game.ops > 0) {
			prompt_event(`${event_prompt()} ${COUNTRIES[game.active_country]}.`)
			for (let s of get_country(game.active_country)) {
				if (is_uncontrolled(s) ) {
					already_controlled = false
					gen_action_space(s)
				}
			}
		}
		if (game.ops === 0 || already_controlled) {
			prompt_event('Take control: Done.')
			gen_action('done')
		}
	},
	space(space) {
		push_undo()
		game.ops --
		vm_do_take_control(space)
	},
	done() {
		push_undo()
		vm_next()
	},
}

states.vm_claim_discarded_card = {
	prompt() {
		gen_action('done')
		if (game.temp) {
			prompt_event(`Select a ${pluralize(game.temp, 'Op')} card from the discard.`)
			for (let c of game.strategy_discard) {
				if (strategy_cards[c].ops === game.temp)
					gen_action_card(c)
			}
		} else {
			prompt_event('Select a card: Done.')
		}
	}, 
	card(c) {
		push_undo()
		remove_from_discard(c)
		add_to_hand(c)
		delete game.temp
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_colossus_ops = {
	prompt() {
		view.prompt = `Colossus Class: Play ${quoted_card_name[this_card()]} for Operations.`
		gen_action('infl')
		gen_action('sc')
		if (game.active === 1 && !game.lib_naval_attempted_this_turn && game.lib_naval_position < 13)
			gen_action('naval')
		else if (
			game.persistent_events.includes(C_VON_BETHMANN_HOLLWEG) &&
			game.active === 0 && 
			game.aut_naval_attempted_this_turn < 2 && 
			game.aut_naval_position < N_REVENGE_CLASS
		) {
			gen_action('naval')
		}
		else if (
			!game.persistent_events.includes(C_VON_BETHMANN_HOLLWEG) &&
			game.active === 0 && 
			game.aut_naval_attempted_this_turn < 1 && 
			game.aut_naval_position < 13
		) {
			gen_action('naval')
		}
	},
	infl() {
		push_undo()
		game.ops = get_card_ops(this_card())
		log('Placed SP:')
		check_balkan_federation()
		goto_add_infl()
	},
	sc() {
		push_undo()
		game.ops = 2
		game.state = 'support_check_prep'
	},
	naval() {
		push_undo()
		game.ops = get_card_ops(this_card())
		log('Naval Arms Race Attempt:')
		game.state = 'naval_attempt'
	},
}

states.vm_crisis_roll = {
	inactive: 'do Crisis Roll',
	prompt() {
		if (game.not_using_konig) {
			konig_prompt()
		} else {
			view.prompt = 'Make a Crisis Roll.'
			gen_action('roll')
		}
	},
	roll() {
		if (check_crisis())
			return
		else
			vm_next()
	},
	continue() {
		if (check_crisis())
			return
		else
			vm_next()
	}
}

states.vm_admiral_von_tirpitz = {
	prompt() {
		view.prompt = `${quoted_card_name[game.vm_event]}: Remove up to 2 influence from Germany.`
		if (game.temp < 2) {
			for (let s of GERMANY) {
				if (get_infl(game.infl, AUT, s) > 0)
					gen_action_space(s)
			}
		}
		if (game.temp === 0)
			gen_action('pass')
		else
			gen_action('done')
	},
	space(s) {
		remove_infl(s)
		game.temp ++
	},
	pass() {
		push_undo()
		logi('None')
		vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		log(`German Navy Marker advances ${pluralize(game.temp, 'space')}`)
		game.aut_naval_position ++
		check_naval_awards()
		if (game.vm_event > 300) {
			if (game.temp === 2)
				game.finish_admiral_von_tirpitz = true
			goto_vm(game.vm_event)
			return
		}
		if (game.temp === 2) {
			game.aut_naval_position ++
			check_naval_awards()
			if (game.vm_event > 300) {
				goto_vm(game.vm_event)
				return
			}
		}
		vm_next()
	}
}

function finish_admiral_von_tirpitz() {
	if (game.finish_admiral_von_tirpitz) {
		delete game.finish_admiral_von_tirpitz
		game.aut_naval_position++
		game.vm_event = C_ADMIRAL_VON_TIRPITZ
		check_naval_awards()
		if (game.vm_event > 300) {
			goto_vm(game.vm_event)
			return true
		}
	}
	return false
}

states.vm_agadir_crisis = {
	prompt() {
		prompt_event('Choose to lose 1 VP or gain 1 VP')
		gen_action('gain')
		gen_action('lose')
	},
	lose() {
		push_undo()
		log('Liberal chooses to lose 1 VP.')
		game.vp -= 1
		if (check_vp())
			return
		if (check_aut_control(S_MOROCCO)) {
			log('Morocco aleady Authoritarian controlled.')
			vm_next()
		} else {
			game.ops = 1
			game.state = 'vm_agadir_crisis_add'
		}
	},
	gain() {
		push_undo()
		game.vp += 1
		if (check_vp())
			return
		log('Liberal chooses to gain 1 VP.')
		increase_tension(2)
		game.state = 'vm_crisis_roll'
	}
}

states.vm_agadir_crisis_add = {
	prompt() {
		if (game.ops > 0 ) {
			prompt_event('Place enough Authoritarian SP in Morocco for control.')
			gen_action_space(S_MOROCCO)
		} else {
			prompt_event('Done.')
			gen_action('done')
		}
	},
	space(s) {
		vm_give_control(s)
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_belgian_rule_in_congo = {
	prompt() {
		prompt_event('Chose to lose 2 VP or allow Belgian Rule in Congo to occur.')
		gen_action('vp')
		gen_action('occur')
	},
	vp() {
		push_undo()
		log('Liberal player chooses to lose 2 VP')
		game.vp -= 2
		if (check_vp())
			return
		vm_next()
	},
	occur() {
		push_undo()
		add_to_persistent_events(C_BELGIAN_RULE_IN_CONGO)
		log('For the rest of the game Belgium is treated as an Annex space.')
		if (!check_aut_control(S_BELGIUM)) {
			change_player()
			game.valid_spaces = S_BELGIUM
			game.state = 'vm_take_control'
		} else {
			vm_next()
		}
	}
}

states.vm_black_hand = {
	prompt() {
		prompt_event('Place the Black Hand marker in Serbia, Bosnia, Montenegro, or Macedonia.')
		let spaces = [S_SERBIA, S_BOSNIA, S_MONTENEGRO, S_MACEDONIA]
		for (let s of spaces)
			gen_action_space(s)
	},
	space(s) {
		push_undo()
		game.black_hand = s
		log(`Placed marker in %${s}`)
		log('No Support Checks allowed. Counts as 2 Authoritarian SP which may never be removed.')
		vm_next()
	}
}

states.vm_central_authority = {
	prompt() {
		prompt_event('Choose a Scoring Region')
		for (let name of COUNTRIES) {
			if (name === R_INDEPENDENT) continue
			if (name === R_AUSTRIA_HUNGARY)
				gen_action('Austria_Hungary')
			else 
				gen_action(name)
		}
	},
	France(){
		push_undo()
		game.active_country = N_FRANCE
		game.state = 'vm_central_authority_add'
	}, 
	Austria_Hungary() {
		push_undo()
		game.active_country = N_AUSTRIA_HUNGARY
		game.state = 'vm_central_authority_add'
	},
	Russia() {
		push_undo()
		game.active_country = N_RUSSIA
		game.state = 'vm_central_authority_add'
	},
	Balkans() {
		push_undo()
		game.active_country = N_BALKANS
		game.state = 'vm_central_authority_add'
	}, 
	Germany() {
		push_undo()
		game.active_country = N_GERMANY
		game.state = 'vm_central_authority_add'
	}
}
states.vm_central_authority_add = {
	prompt() {
		prompt_event(`Place 1 Authoritarian SP in all Authoritarian-controlled spaces in ${COUNTRIES[game.active_country]}.`)
		let available = false
		for (let s of get_country(game.active_country)) {
			if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
			if (check_aut_control(s)) {
				gen_action_space(s)
				available = true
			}
		}
		if (!available) {
			prompt_event('Place SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_eight_nation_alliance = {
	prompt() {
		view.prompt = `Eight Nation Alliance: Play an opponent's card. Event does not occur.`
		for (let card of vm_eight_nation_alliance_cards()) {
			gen_action_card(card)
		}
	},
	card(card) {
		push_undo()
		remove_from_hand(card)
		game.vm_event = card
		log(`Played C${game.vm_event}.`)
		game.state = 'vm_eight_nation_alliance_play'
	},
}

states.vm_eight_nation_alliance_play = {
	prompt() {
		view.prompt = `Play ${card_name[this_card()]} for:`
		gen_action('infl')
		gen_action('sc')
	},
	infl() {
		push_undo()
		log('Placed SP:')
		game.ops = get_card_ops(game.vm_event)
		game.state = 'vm_add_infl'
	},
	sc() {
		push_undo()
		log('Support Checks:')
		game.ops = 2
		game.state = 'vm_support_check_prep'
	},
	naval() {
		push_undo()
		log_gap(`Played C${game.vm_event} to the Naval Arms Race`)
		game.state = 'vm_naval_arms_race' //TODO: add this!
	},
}

states.vm_ferdinand_esterhazy = {
	prompt() {
		if (game.temp === 1) {
			view.prompt = `${quoted_card_name[this_card()]}: Done.`
			gen_action('done')
		} else if (game.liberal_hand.length > 0) {
			view.prompt = `${quoted_card_name[this_card()]}: Discard a card.`
			gen_action('discard')
		} else {
			view.prompt = `${quoted_card_name[this_card()]}: No cards in hand. Done.`
			gen_action('done')
		}
	},
	discard() {
		let c = discard_card(game.liberal_hand)
		if (strategy_cards[c].side === 'A') {
			change_player()
			game.vm_event = c	
			goto_vm(c)
		} else {
			log('No effect.')
			game.temp = 1
		}
	},
	done() {
		vm_next()
	}
}

states.vm_exiles_escape ={
	prompt() {
		let available = false
		if (game.temp < 4) {
			prompt_event('Remove up to 4 Liberal SP from the Siberia space.')
			if (has_own_infl(S_SIBERIA)) {
				gen_action_space(S_SIBERIA)
				available = true
			}
		} 
		if (game.temp < 4 && !available)
			prompt_event('No further SP to remove.')
		if (game.temp === 4) 
			prompt_event('Remove SP: Done.')
		gen_action('done')
	},
	space(s) {
		game.temp ++
		remove_infl(s)
	},
	done() {
		if (game.temp === 0)
			vm_next()
		else
			game.state = 'vm_exiles_escape_add'
	}
}

states.vm_exiles_escape_add = {
	prompt() {
		if (game.temp > 0 ) {
			prompt_event(`Add ${pluralize(game.temp, 'SP')} spaces in Russia, no more than 1 per space.`)
			for (let s of COUNTRY_SPACES[N_RUSSIA]) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (s === S_SIBERIA) continue
				gen_action_space(s)
			}
		} else {
			prompt_event('Add SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		game.temp --
		add_limited_infl(s, game.vm_max_infl)
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_foreign_investments = {
	prompt() {
		let workers = [...get_country(N_FRANCE), ... get_country(N_GERMANY)]
		if (game.temp < 4) {
			prompt_event('Remove up to 4 Liberal SP from Worker spaces in France and/or Germany.')
			for (let s of workers) {
				if (get_socio_1(s) === SOCIO_WORKERS || get_socio_2(s) === SOCIO_WORKERS ){
					if (get_infl(game.infl, LIB, s) > 0)
						gen_action_space(s)
				}
			}
		} else 
			prompt_event('Remove SP: Done.')
		gen_action('done')
	},
	space(s) {
		remove_infl(s)
		game.temp ++
		if (game.temp === 4) {
			summary_flush()
			log('Placed SP:')
			game.state = 'vm_foreign_investments_add'
		}
	},
	done() {
		push_undo()
		if (game.temp === 0) {
			logi('None')
			vm_next()
		} else {
			summary_flush()
			log('Placed SP:')
			game.state = 'vm_foreign_investments_add'
		}
	}
}

states.vm_foreign_investments_add = {
	prompt() {
		let spaces = [...get_country(N_RUSSIA), ... get_country(N_AUSTRIA_HUNGARY), ...get_country(N_BALKANS)]
		if (game.temp >0 ) {
			prompt_event(`Add ${pluralize(game.temp, 'SP')} spaces in Russia, Austria-Hungary, or The Balkans, no more than 2 per space.`)
			for (let s of spaces) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				gen_action_space(s)
			}
		} else {
			prompt_event('Add SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, 2)
		game.temp --
		if (game.temp === 0 && game.phasing_player === 1) {
			summary_flush()
			vm_next()
		}
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_jean_jaures = {
	inactive: 'decide Jean Jaures',
	prompt() {
		view.prompt = 'Jean Jaures: Choose to give up 1 VP to reduce tension by 1.'
		gen_action('reduce')
		gen_action('pass')
	},
	reduce() {
		push_undo()
		decrease_tension(1)
		log('-1 VP')
		game.vp --
		if (game.switched_players)
			change_player()
		continue_crisis()
	},
	pass() {
		push_undo()
		log('Passed')
		if (game.switched_players)
			change_player()
		continue_crisis()
	}
}

function continue_crisis() {
	if (game.scoring_card)
		game.state = 'scoring_crisis'
	else
		game.state = 'vm_crisis_roll'
}

states.vm_legacy_of_1848 = {
	prompt() {
		if (game.view_opp_hand.length > 0) {
			view.prompt = `Play a Red Event from your opponent's hand, or play Legacy of 1848 for Operations.`
			for (let card of game.opp_hand) {
				gen_action_card(card)
				gen_action('ops')
			}
		} else {
			view.prompt = `Authoritarian has no Red Events. Play ${quoted_card_name[C_LEGACY_OF_1848]} for Operations.`
			gen_action('ops')
		}
	},
	card(card) {
		push_undo()
		log(`Chose to play C${card} for the event`)
		log(`C${card}:`)
		let card_index = game.authoritarian_hand.indexOf(card)
		game.authoritarian_hand.splice(card_index, 1)
		game.vm_event = card
		delete game.view_opp_hand
		goto_vm(card)
	},
	ops() {
		push_undo()
		if (game.view_opp_hand.length === 0) {
			log('No red events.')
		}
		log("C" + C_LEGACY_OF_1848 + " played for Operations.")
		delete game.view_opp_hand
		game.state = 'vm_legacy_of_1848_ops'
	},
}

states.vm_legacy_of_1848_ops = {
	prompt() {
		view.prompt = `Play ${quoted_card_name[this_card()]}.`
		gen_action('infl')
		gen_action('sc')
		if (
			(game.active === 0 && game.aut_naval_attempted_this_turn === 0 && game.aut_naval_position < LAST_NAVAL) ||
			(game.active === 1 && game.lib_naval_attempted_this_turn === 0 && game.lib_naval_position < LAST_NAVAL)
		) {
			gen_action('naval')
		}
	},
	infl() {
		push_undo()
		game.ops = get_card_ops(this_card())
		log('Placed SP:')
		game.state = 'vm_add_infl'
	},
	sc() {
		push_undo()
		game.ops = 2
		game.state = 'vm_support_check_prep'
	},
	naval() {
		push_undo()
		game.ops = get_card_ops(this_card())
		log('Naval Arms Race Attempt:')
		game.state = 'vm_naval_attempt'
	},
}

states.vm_military_parade = {
	prompt() {
		let army = false
		prompt_event('Choose an Authoritarian controlled Army space')
		for (let s of get_socio_spaces([SOCIO_ARMY])) {
			if (check_aut_control(s)) {
				gen_action_space(s)
				army = true
			}
		} 
		if (!army) {
			prompt_event('No Authoritarian controlled Army spaces. Pass')
			gen_action('pass')
		}
	},
	space(s) {
		push_undo()
		game.space = s
		game.valid_spaces = get_adjusted_adjacency(s)
		game.vm_max_infl = 1
		game.state = 'vm_military_parade_add'
	},
	pass() {
		push_undo()
		vm_next()
	}
}

states.vm_military_parade_add = {
	prompt() {
		let available = false
		prompt_event(`Place 1 SP in each space adjacent to ${spaces[game.space].name}.`)
		for (let s of game.valid_spaces) {
			if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
			gen_action_space(s)
			available = true
		}
		if (!available) {
			prompt_event('Place SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_mitteleuropa = {
	prompt() {
		prompt_event('Retreat the German Navy marker up to 2 spaces.')
		gen_action('one')
		gen_action('two')
		gen_action('pass')
	},
	one() {
		push_undo()
		game.high_water = game.aut_naval_position
		game.aut_naval_position --
		game.ops = 4
		log('Placed SP:')
		game.state = 'vm_mitteleuropa_add'
	},
	two() {
		game.high_water = game.aut_naval_position
		game.aut_naval_position -= 2
		game.ops = 8
		log('Placed SP:')
		game.state = 'vm_mitteleuropa_add'
	},
	pass() {
		log('Did not retreat the German Navy marker.')
		vm_next()
	}
}

states.vm_mitteleuropa_add = {
	prompt() {
		if (game.ops > 0) {
			prompt_event(`Place SPs: ${pluralize(game.ops, 'Op')} remaining.`)
			for (let s of mitteleuropa())
				gen_action_space(s)
		} else {
			prompt_event(`Place SPs: Done.`)
			gen_action('done')
		}
	},
	space(s) {
		add_infl(s)
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}

}

states.vm_raid_on_the_sublime_porte = {
	prompt() {
		prompt_event('Remove all Liberal SP from Constantinople.')
		gen_action_space(S_CONSTANTINOPLE)
	},
	space(s) {
		remove_all_infl(s)
		delete game.remove_opponent_infl
		game.temp = 0
		log('Removed SP:')
		game.state = 'vm_raid_on_the_sublime_porte_remove'
	}
}

states.vm_raid_on_the_sublime_porte_remove = {
	prompt() {
		if (game.temp < 4) {
			prompt_event('Remove up to 4 Authoritarian SP from Constantinople.')
			gen_action_space(S_CONSTANTINOPLE)
		} else {
			prompt_event('Remove SP: Done.')
		}
		gen_action('done')
	},
	space(s) {
		remove_infl(s)
		game.temp ++
	},
	done() {
		if (game.temp === 0) {
			logi('None')
			vm_next()
		} else {
			push_undo()
			summary_flush()
			log('Placed	SP:')
			game.state = 'vm_raid_on_the_sublime_porte_add'
		}
	}
}

states.vm_raid_on_the_sublime_porte_add = {
	prompt() {
		prompt_event(`Place ${pluralize(game.temp, 'SP')} in spaces in the Balkans.`)
		if (game.temp > 0) {
			for (let s of get_country(N_BALKANS)) {
				if (s === S_CONSTANTINOPLE) continue
				gen_action_space(s)
			}
		} else {
			prompt_event('Place SP: Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_infl(s)
		game.temp --
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_rosa_luxemburg = {
	prompt() {
		if (game.not_using_konig) {
			konig_prompt()
		} else {
			prompt_event('Roll a die.')
			gen_action('roll')
		}
	},
	roll() {
		roll_rosa_luxemburg()
	},
	continue() {
		if (roll_rosa_luxemburg())
			throw new Error("Konig error")
	}
}

function roll_rosa_luxemburg() {
	let roll = get_roll()
	if (roll === null)
		return true
	log(`Roll: D${roll}`)
	let modifier = 0
	for (let s of get_country(N_GERMANY)) {
		if ((get_socio_1(s) === SOCIO_WORKERS || get_socio_2(s) === SOCIO_WORKERS) && check_lib_control(s))
			modifier++
		if ((get_socio_1(s) === SOCIO_INTELLECTUALS || get_socio_2(s) === SOCIO_INTELLECTUALS) && check_lib_control(s))
			modifier++
	}
	if (modifier > 0)
		logi('+' + modifier + ' from Liberal controlled Worker and Intellectual spaces')
	roll += modifier
	if (roll > 4) {
		game.discard = true
		game.state = 'vm_rosa_luxemburg_red'
	} else
		vm_next()
}

states.vm_rosa_luxemburg_red = {
	prompt() {
		let red = false
		gen_action('pass')
		prompt_event('Choose a Liberal Red Event from the discard pile.')
		for (let c of game.strategy_discard) {
			if (RED_EVENTS.includes(c)) {
				gen_action_card(c)
				red = true
			}
		}
		if (!red)
			prompt_event('No available cards to choose.')
	},
	card(c) {
		push_undo()
		remove_from_discard(c)
		game.vm_event = c
		game.state = 'vm_rosa_luxemburg_play'
	},
	pass() {
		push_undo()
		vm_next()
	}
}

states.vm_rosa_luxemburg_play = {
	prompt() {
		view.prompt = `Play ${strategy_cards[game.vm_event].name} for the event.`
		gen_action('event')
	},
	event() {
		push_undo()
		log_event(game.vm_event)
		goto_vm(game.vm_event)
	}
}

states.vm_scramble_for_africa = {
	prompt() {
		if (game.ops > 0) {
			if (game.valid_spaces.includes(S_BELGIUM))
				view.prompt = 'Place 3 SP in the following space(s): Morocco, Algeria, Tunisia, Libya and/or Belgium.'
			else 
				view.prompt = 'Place 3 SP in the following space(s): Morocco, Algeria, Tunisia, and/or Libya.'
			for (let s of game.valid_spaces)
				gen_action_space(s)
		} else {
			view.prompt = 'Place SP: Done.'
			gen_action('done')
		}
	},
	space(s) {
		add_infl(s)
		check_vm_next()
	},
	done(s){
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_second_duma_disbanded = {
	prompt() {
		prompt_event('Select a space in Russia to relocate Liberal SP.')
		for (let s of get_country(N_RUSSIA)) {
			if (has_opp_infl(s))
				gen_action_space(s)
		}
	},
	space(s) {
		push_undo()
		game.space = s
		log (`Selected %${s}`)
		game.state = 'vm_second_duma_disbanded_relocate'
	}
}

states.vm_second_duma_disbanded_relocate = {
	prompt() {
		prompt_event(`Relocate all Liberal SP in ${spaces[game.space].name} to Sibera.`)
		gen_action_space(S_SIBERIA)
	},
	space(s) {
		let starting_lib_infl = get_infl(game.infl, LIB, S_SIBERIA) 
		let move = get_infl(game.infl, LIB, game.space)
		set_infl(LIB, game.space, 0)
		set_infl(LIB, S_SIBERIA, starting_lib_infl + move)
		log(`Relocated ${pluralize(move, 'SP')} to %${S_SIBERIA}.`)
		vm_next()
	}
}

states.vm_second_hague_conference = {
	prompt() {
		prompt_event('Choose whether talks succeed or fail.')
		gen_action('succeed')
		gen_action('fail')
	},
	succeed() {
		log('Talks succeed.')
		game.ops = 4
		game.vm_max_infl = 1
		game.state = 'vm_second_hague_conference_success'
	},
	fail() {
		push_undo()
		log('Talks fail.')
		increase_tension(1)
		log('-2 VP')
		game.vp -= 2
		vm_next()
	}
}

states.vm_second_hague_conference_success = {
	prompt() {
		if (game.ops >0) {
			prompt_event('Place 4 Authoritarian SPs in Army and/or Monarch spaces, no more than 1 per space.')
			for (let s of ALL_SPACES) {
				if (game.vm_influence_added && game.vm_influence_added[s] && game.vm_influence_added[s] === game.vm_max_infl) continue
				if (get_socio_1(s) === SOCIO_ARMY || get_socio_2(s) === SOCIO_ARMY)
					gen_action_space(s)
				if (get_socio_1(s) === SOCIO_MONARCHY || get_socio_2(s) === SOCIO_MONARCHY)
					gen_action_space(s)
			}
		} else {
			prompt_event('Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_limited_infl(s, game.vm_max_infl)
		check_vm_next()
	},
	done() {
		push_undo()
		vm_next()
	}
}

states.vm_tangier_crisis = {
	prompt() {
		prompt_event('Choose to either lose 3 VP or allow Tangier Crisis to occur.')
		gen_action('vp')
		gen_action('occur')
	},
	vp() {
		push_undo()
		log('Liberal player chose to lose 3 VP.')
		game.vp -= 3
		if (check_vp())
			return
		vm_return()
	},
	occur() {
		push_undo()
		log('Liberal player chose not to lose 3 VP.')
		change_player()
		vm_next()
	}
}

states.vm_third_department = {
	prompt() {
		if (game.temp > 0) {
			view.prompt = `${quoted_card_name[this_card()]}: Done.`
			gen_action('done')
		} else {
			view.prompt = `${quoted_card_name[this_card()]}: Discard a Liberal Stability card.`
			for (let c of game.lib_stability)
				gen_action_stability_card(c)
		}
	},
	stability_card(c) {
		push_undo()
		log(`Discarded P${c}.`)
		game.lib_stability = game.lib_stability.filter( n => n !== c )
		game.lib_stability_discard.push(c)
		game.temp = 1
		if (game.phasing_player === 0)
			vm_next()
	},
	done() {
		vm_next()
	}
}

states.vm_traditionalists_gain_power = {
	prompt() {
		prompt_event('Choose a Scoring Region')
		for (let name of COUNTRIES) {
			if (name === R_INDEPENDENT) continue
			if (name === R_BALKANS) continue
			if (name === R_AUSTRIA_HUNGARY)
				gen_action('Austria_Hungary')
			else 
				gen_action(name)
		}
	},
	France(){
		push_undo()
		game.active_country = N_FRANCE
		game.state = 'vm_traditionalists_gain_power_remove'
	}, 
	Austria_Hungary() {
		push_undo()
		game.active_country = N_AUSTRIA_HUNGARY
		game.state = 'vm_traditionalists_gain_power_remove'
	},
	Russia() {
		push_undo()
		game.active_country = N_RUSSIA
		game.state = 'vm_traditionalists_gain_power_remove'
	},
	Balkans() {
		push_undo()
		game.active_country = N_BALKANS
		game.state = 'vm_traditionalists_gain_power_remove'
	}, 
	Germany() {
		push_undo()
		game.active_country = N_GERMANY
		game.state = 'vm_traditionalists_gain_power_remove'
	}
}

states.vm_traditionalists_gain_power_remove = {
	prompt() {
		let available_infl = false
		gen_action('done')
		prompt_event('Remove up to 4 Authoritarian SP from Farmer and/or Army spaces.')
		for (let s of get_country(game.active_country)) {
			if (game.socio.includes(get_socio_1(s) || game.socio.includes(get_socio_2(s)))) {
				if (has_own_infl(s)) {
					gen_action_space(s)
					available_infl = true
				}
			}
		}
		if (!available_infl && game.ops === 4)
			prompt_event('No SP to remove.')
		if (game.ops === 0)
			prompt_event('Remove SP. Done.')
	},
	space(space) {
		remove_infl(space)
		game.temp ++
	},
	done() {
		push_undo()
		summary_flush()
		if (game.temp === 0) {
			vm_next()
			log('None.')
		} else {
			log('Placed SP:')
			game.ops = game.temp
			game.state = 'vm_traditionalists_gain_power_add'
		}
	},
}

states.vm_traditionalists_gain_power_add = {
	prompt() {
		if (game.ops > 0) {
			prompt_event(`Add ${game.ops} SP to Government spaces in ${COUNTRIES[game.active_country]}`)
			for (let s of get_country(game.active_country)) {
				if (get_socio_1(s) === SOCIO_GOVERNMENT || get_socio_2(s) === SOCIO_GOVERNMENT)
					gen_action_space(s)
			}
		} else {
			prompt_event('Done.')
			gen_action('done')
		}
	},
	space(s) {
		add_infl_free(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_tsarist_repression = {
	prompt() {
		if (game.not_using_konig) {
			konig_prompt()
		} else {
			prompt_event('Roll a die.')
			gen_action('roll')
		}
	},
	roll() {
		roll_tsarist_repression()
	},
	continue() {
		if (roll_tsarist_repression())
			throw new Error("Konig error")
	}
}

function roll_tsarist_repression() {
	let roll = get_roll()
	if (roll === null)
		return true
	log(`Roll: D${roll}`)
	if (game.turn > 3 && game.turn < 8) {
		logi('+1 Edwardian Era')
		roll ++
	}
	if (game.turn > 7) {
		logi('+2 Georgian Era')
		roll =+ 2
	}
	game.ops = roll
	game.temp = 0
	game.remove_opponent_infl = true
	if (roll < 6) {
		log(`Influence will be relocated to %${S_SIBERIA}.`)
		game.vm_tsarist_repression = S_SIBERIA
	} else {
		log(`Influence will be relocated to %${S_SAINT_PETERSBURG}.`)
		game.vm_tsarist_repression = S_SAINT_PETERSBURG
	}
	game.state = 'vm_tsarist_repression_remove'
}

states.vm_tsarist_repression_remove = {
	prompt() {
		let available_infl = false
		if (game.ops > 0) {
			prompt_event(`Remove ${game.ops} SPs from spaces in Russia.`)
			for (let s of get_country(N_RUSSIA)) {
				if (s === game.vm_tsarist_repression) continue
				if (get_infl(game.infl, LIB, s) > 0) {
					available_infl = true
					gen_action_space(s)
				}
			}
		}
		if (!available_infl || game.ops === 0) {
			prompt_event('Remove SP: Done.')
			gen_action('done')
		}
	},
	space(space) {
		remove_infl(space)
		game.temp ++
		if (game.ops === 0) {
			summary_flush()
			game.ops = game.temp
			log('Placed SP:')
			game.state = 'vm_tsarist_repression_add'
		}
	},
	done() {
		push_undo()
		summary_flush()
		if (game.temp === 0) {
			logi('None')
			vm_next()
		} else {
			game.ops = game.temp
			log('Placed SP:')
			game.state = 'vm_tsarist_repression_add'
		}
	},
}

states.vm_tsarist_repression_add = {
	prompt() {
		if (game.ops > 0) {
			prompt_event(`Add ${game.ops} SP to ${spaces[game.vm_tsarist_repression].name}`)
			gen_action_space(game.vm_tsarist_repression)
		} else {
			prompt_event('Done.')
			gen_action('done')
		}
	},
	space(s) {
		game.ops --
		vm_add_opp_infl(s)
		check_vm_next()
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_viscount_grey_choose = {
	prompt() {
		prompt_event('Play to place SPs or a Support Check.')
		gen_action('infl')
		gen_action('sc')
	},
	infl() {
		push_undo()
		log('Placed SP:')
		game.infl_at_start = game.infl
		game.state = 'vm_viscount_grey_sp'
	},
	sc() {
		push_undo()
		game.ops = 1
		game.sc_cancel_opp_adj = true
		game.state = 'vm_support_check_prep'
	}
}

states.vm_viscount_grey_sp = {
	prompt() {
		if (game.ops > 0) {
			prompt_event(`Place ${pluralize(game.ops, 'SP')}.`)
			for (let s of valid_spaces_infl())
				gen_action_space(s)
		} else {
			prompt_event(`Place SP: Done.`)
			gen_action('done')
		}
	},
	space(s) {
		add_infl_free(s)
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_winston_churchill = {
	prompt() {
		prompt_event(`Discard up to ${pluralize(game.temp, 'card')}.`)
		for (let c of game.liberal_hand)
			gen_action_card(c)
		if (game.ops === 0)
			gen_action('pass')
		if (game.ops > 0)
			gen_action('done')
	},
	card(c) {
		push_undo()
		log(`Discarded C${c}.`)
		remove_from_hand(c)
		discard_strategy(c)
		game.ops ++
		if (game.temp === game.ops)
			game.state = 'vm_winston_churchill_draw'
	},
	pass() {
		log('Did not discard.')
		vm_next()
	},
	done() {
		game.state = 'vm_winston_churchill_draw'
	}
}

states.vm_winston_churchill_draw = {
	prompt() {
		prompt_event('Draw replacement cards.')
		gen_action('draw')
	},
	draw() {
		log(`Drew ${pluralize(game.ops, 'card')}.`)
		draw_cards(game.strategy_deck, game.liberal_hand, game.authoritarian_hand, game.liberal_hand.length + game.ops, game.authoritarian_hand.length)
		vm_next()
	}
}

states.vm_yugoslavia = {
	prompt() {
		prompt_event('Roll a die.')
		gen_action('roll')
	},
	roll () {
		clear_undo()
		let roll = roll_d6()
		log(`.${game.active} roll: D${roll}`)
		let i = [S_SERBIA, S_MONTENEGRO, S_BOSNIA, S_CROATIA, S_MACEDONIA]
		for (let s of i) {

			if (check_control(s)) {
				roll ++
				logi(`+1 %${s}`)
			}
		}
		if (game.active === 0) {
			game.temp = roll
			change_player()
		} else {
			if (game.temp >= roll) {
				log('Authoritarian wins.')
				add_to_persistent_events(C_YUGOSLAVIA)
				remove_from_playable(C_GAVRILO_PRINCIP)
				game.ops = 1
				change_player()
				game.state = 'vm_yugoslavia_replace'
			} else {
				permanently_remove(C_YUGOSLAVIA)
				log('Liberal wins.')
				vm_next()
			}
		}
	}
}

states.vm_yugoslavia_replace = {
	prompt() {
		if (game.ops > 0) {
			prompt_event('Replace all Liberal SP with Authoritarian SP in one space.')
			let i = [S_SERBIA, S_MONTENEGRO, S_BOSNIA, S_CROATIA, S_MACEDONIA]
			for (let s of i) {
				if (has_opp_infl(s))
					gen_action_space(s)
			}
		} else {
			prompt_event('Replace SPs: Done.')
			gen_action('done')
		}
	}, 
	space(s) {
		replace_all_infl(s)
	},
	done() {
		push_undo()
		vm_next()
	}
}

// ======================== VM SCORING STATES ========================

states.scoring = {
	inactive: 'finish scoring',
	prompt() {
		view.prompt = `Score ${COUNTRIES[game.active_country]}.`
		gen_action('score')
	},
	score() {
		push_undo()
		score_country(game.active_country)
		check_scoring_events()
		if (jean_jaures())
			return
		game.state = 'scoring_crisis'
	}
}

states.scoring_crisis = {
	inactive: 'make a crisis roll',
	prompt() {
		if (game.not_using_konig)
			konig_prompt()
		else {
			view.prompt = 'Make a Crisis Roll.'
			gen_action('roll')
		}
	},
	roll() {
		delete game.scoring_card
		delete game.show_stability
		if (check_crisis())
			return
		else
			vm_return()
	},
	continue() {
		delete game.scoring_card
		delete game.show_stability
		if (check_crisis())
			return
		else
			vm_return()
	}
}

states.vm_anarchist_attack = {
	prompt() {
		view.prompt = `Anarchist Attack: Remove ${game.ops} support from a Monarch or Government space in ${COUNTRIES[game.active_country]}.`
		let available = false
		if (game.ops > 0){
			for (let s of get_country(game.active_country)) {
				if ((get_socio_1(s) === SOCIO_GOVERNMENT || get_socio_1(s) === SOCIO_MONARCHY) && has_opp_infl(s)) {
					gen_action_space(s)
					available = true
				}
			}
		}
		if (game.ops === 0) {
			view.prompt = 'Anarchist Attack: Done.'
			gen_action('done')
		} else if (!available) {
			view.prompt = 'Anarchist Attack: No influence to remove.'
			gen_action('done')
		}
	},
	space(s) {
		remove_infl(s)
	},
	done() {
		push_undo()
		summary_flush()
		vm_next()
	}
}

states.vm_naval_law_amendment = {
	prompt() {
		if (game.not_using_konig) {
			konig_prompt()
		} else {
			view.prompt = 'Naval Law Amendment: Make a 2 Ops Naval Arms Race Attempt.'
			gen_action('roll')
		}
	},
	roll() {
		push_undo()
		if (check_von_bethmann_hollweg())
			vm_next()
		else 
			do_free_naval_attempt()
	},
	continue() {
		if (do_free_naval_attempt())
			throw new Error("konig error")
	}
}

states.vm_naval_law_amendment_success = {
	inactive: 'do Naval Arms Race Attempt',
	prompt() {
		if (game.vm_event > 300) { // TODO magic number
			view.prompt = 'Naval Arms Race: Successful. Claim award.'
			gen_action('claim')
		} else {
			view.prompt = 'Naval Arms Race: Successful.'
			gen_action('done')
		}
	},
	claim() {
		push_undo()
		goto_vm(game.vm_event)
	},
	done() {
		push_undo()
		vm_next()
	},
}

states.vm_naval_law_amendment_fail = {
	inactive: 'do Naval Arms Race Attempt',
	prompt() {
		view.prompt = 'Naval Arms Race: Failed.'
		gen_action('done')
	},
	done() {
		push_undo()
		vm_next()
	},
}

states.vm_popular_uproar = {
	prompt() {
		if (game.ops > 0) {
			view.prompt = `Place ${game.ops} SP in the Scoring Region.`
			for (let s of get_country(game.active_country)) {
				gen_action_space(s)
			}
		} else {
			view.prompt = 'Place SP: Done.'
			gen_action('done')
		}
	},
	space(s) {
		add_infl_free(s)
	},
	done() {
		push_undo()
		game.aut_stability.push(game.aut_stability_card)
		delete game.aut_stability_card
		if (game.aut_stability_card_2) {
			game.aut_stability.push(game.aut_stability_card_2)
			delete game.aut_stability_card_2
		}
		if (game.aut_stability_card_3) {
			game.aut_stability.push(game.aut_stability_card_3)
			delete game.aut_stability_card_3
		}
		game.authoritarian_hand.push(game.scoring_card)
		if (game.lib_stability_card) {
			game.lib_stability.push(game.lib_stability_card)
		}
		if (game.lib_stability_card && game.lib_stability_card !== C_POPULAR_UPROAR) {
			game.lib_stability.push(game.lib_stability_card)
			delete game.lib_stability_card
		}
		if (game.lib_stability_card_2 && game.lib_stability_card_2 !== C_POPULAR_UPROAR) {
			game.lib_stability.push(game.lib_stability_card_2)
			delete game.lib_stability_card_2
		}
		if (game.lib_stability_card_3 && game.lib_stability_card_3 !== C_POPULAR_UPROAR) {
			game.lib_stability.push(game.lib_stability_card_3)
			delete game.lib_stability_card_3
		}
		vm_next()
	}
}

states.vm_secret_treaty_clauses_draw = {
	prompt() {
		view.prompt = 'Secret Treaty Clauses: Draw a Strategy card.'
		gen_action('draw')
	},
	draw() {
		draw_cards(game.strategy_deck, game.liberal_hand, game.authoritarian_hand, game.liberal_hand.length, game.authoritarian_hand.length +1)
		game.state = 'vm_secret_treaty_clauses'
	},
}

states.vm_secret_treaty_clauses = {
	prompt() {
		if (!game.temp) {
			prompt_event('Discard a Strategy card.')
			for (let c of game.authoritarian_hand)
				gen_action_card(c)
		} else {
			prompt_event('Done.')
			gen_action('done')
		}
	},
	done() {
		push_undo()
		vm_next()
	},
	card(c) {
		push_undo()
		game.temp = true
		remove_from_hand(c)
		discard_strategy(c)
		log(`Discarded C${c}.`)
	}
}

/* ====================== EVENTS ====================== */

// BEGIN EVENTS
const CODE = []

CODE[1] = [ // Admiral von Tirpitz*
	[ vm_permanently_remove ],
	[ vm_increase_tension, 1 ],
	[ vm_do_crisis ],
	[ vm_admiral_von_tirpitz ],
	[ vm_return ],
]

CODE[2] = [ // State Secularism in France*
	[ vm_state_secularism ],
	[ vm_return ],
]

CODE[3] = [ // Second International*
	[ vm_permanently_remove ],
	[ vm_prompt, 'in up to 4 space(s) with no Authoritarian SP' ],
	[ vm_add_limited_infl_no_aut, 1, 4 ],
	[ vm_return ],
]

CODE[4] = [ // Franz Ferdinand*
	[ vm_franz_ferdinand ],
	[ vm_prompt, ' Place 1 Authoritarian SP in up to 3 space(s) in Austria-Hungary not under Liberal control' ],
	[ vm_add_limited_infl_not_opp_controlled_country, 1, 3, N_AUSTRIA_HUNGARY ],
	[ vm_return ],
]

CODE[5] = [ // Dreyfus Affair
	[ vm_dreyfus_affair ],
	[ vm_prompt, 'Place 2 SP in space(s) in France' ],
	[ vm_add_infl_free_country, 2, N_FRANCE ],
	[ vm_return ],
]

CODE[6] = [ // France Scoring
	[ vm_score_country ],
	[ vm_return ],
]

CODE[7] = [ // Austria-Hungary Scoring
	[ vm_score_country ],
	[ vm_return ],
]

CODE[8] = [ // Russia Scoring
	[ vm_score_country ],
	[ vm_return ],
]

CODE[9] = [ // Russo-Japanese War*
	[ vm_permanently_remove ],
	[ vm_prompt, 'Remove 4 Authoritarian SP from the Tsarist Army, Nicolas II and/or Government spaces in Russia, no more than 2 per space' ],
	[ vm_remove_limited_opp_infl_spaces, 2, 4, S_TSARIST_ARMY, S_NICOLAS_II, S_SAINT_PETERSBURG, S_MOSCOW ],
	[ vm_return ],
]

CODE[10] = [ // Entente Cordiale*
	[ vm_add_to_playable, C_HENRY_WILSON ],
	[ vm_entente_cordiale ],
	[ vm_prompt, 'Place 4 Liberal SP in spaces in France not under Authoritarian control (no more than 2 per space)' ],
	[ vm_add_limited_infl_not_opp_controlled_country, 2, 4, N_FRANCE ],
	[ vm_return ],
]

CODE[11] = [ // Foreign Investments
	[ vm_foreign_investments ],
	[ vm_return ],
]

CODE[12] = [ // Magyarization*
	[ vm_permanently_remove ],
	[ vm_add_infl_free_space, 3, S_BUDAPEST ],
	[ vm_sc_country, 1, N_AUSTRIA_HUNGARY ],
	[ vm_return ],
]

CODE[13] = [ // Traditionalism
	[ vm_prompt, 'Place 4 Authoritarian SP in Farmer spaces (no more than 2 per space)' ],
	[ vm_add_limited_infl_free_socio, 2, 4, SOCIO_FARMERS ],
	[ vm_return ],
]

CODE[14] = [ // Radical Party Founded*
	[ vm_permanently_remove ],
	[ vm_prompt, 'Place 1 Liberal SP in up to 4 space(s) in France not under Authoritarian Control' ],
	[ vm_add_limited_infl_not_opp_controlled_country, 1, 4, N_FRANCE ],
	[ vm_return ],
]

CODE[15] = [ // Lord Fisher*
	[ vm_lord_fisher ],
	[ vm_return ],
]

CODE[16] = [ // Stymied
	[ vm_stymied ],
	[ vm_return ],
]

CODE[17] = [ // Eight Nation Alliance
	[ vm_eight_nation_alliance ],
	[ vm_return ],
]

CODE[18] = [ // Bernhard von Bülow*
	[ vm_play_from_discard ],
	[ vm_return ],
]

CODE[19] = [ // Union of Liberation*
	[ vm_permanently_remove ],
	[ vm_add_to_playable, C_VICTOR_CHERNOV ],
	[ vm_remove_opp_infl_country, 2, N_RUSSIA ],
	[ vm_sc_country, 1, N_RUSSIA ],
	[ vm_return ],
]

CODE[20] = [ // Bonapartism / Monarchism*
	[ vm_permanently_remove ],
	[ vm_take_control, S_FRENCH_ARMY ],
	[ vm_sc_country, 1, N_FRANCE ],
	[ vm_return ],
]

CODE[21] = [ // Prussian Spirit*
	[ vm_permanently_remove ],
	[ vm_add_infl_free_country, 3, N_GERMANY ],
	[ vm_return ],
]

CODE[22] = [ // Socialist Movements
	[ vm_prompt, 'Worker' ],
	[ vm_add_infl_free_socio, 2, SOCIO_WORKERS ],
	[ vm_return ],
]

CODE[23] = [ // Third Department / Okhrana*
	[ vm_permanently_remove ],
	[ vm_third_department ],
	[ vm_return ],
]

CODE[24] = [ // Tsarist Repression*
	[ vm_permanently_remove ],
	[ vm_tsarist_repression ],
	[ vm_return ],
]

CODE[25] = [ // Legacy of Bismarck
	[ vm_legacy_of_bismarck ],
	[ vm_return ],
]

CODE[26] = [ // Franco-Russian Alliance*
	[ vm_franco_russian_alliance ],
	[ vm_prompt, 'in non-Authoritarian controlled space(s) in France and/or Russia' ],
	[ vm_add_infl_free_not_opp_controlled_countries, 2, N_FRANCE, N_RUSSIA ],
	[ vm_return ],
]

CODE[27] = [ // The Dual Alliance*
	[ vm_dual_alliance ],
	[ vm_prompt, 'in non-Liberal controlled spaces in Austria-Hungary and/or Germany' ],
	[ vm_add_infl_free_not_opp_controlled_countries, 2, N_AUSTRIA_HUNGARY, N_GERMANY ],
	[ vm_return ],
]

CODE[28] = [ // Scramble for Africa*
	[ vm_permanently_remove ],
	[ vm_scramble_for_africa ],
	[ vm_return ],
]

CODE[29] = [ // Two-power Standard*
	[ vm_permanently_remove ],
	[ vm_two_power_standard ],
	[ vm_return ],
]

CODE[30] = [ // Military Tradition
	[ vm_prompt, 'Army' ],
	[ vm_add_infl_free_socio, 2, SOCIO_ARMY ],
	[ vm_return ],
]

CODE[31] = [ // Status Quo*
	[ vm_permanently_remove ],
	[ vm_prompt, 'Bourgeoisie' ],
	[ vm_add_infl_free_socio, 3, SOCIO_BOURGOISIE ],
	[ vm_return ],
]

CODE[32] = [ // Copenhagenization*
	[ vm_permanently_remove ],
	[ vm_increase_tension, 1 ],
	[ vm_do_crisis ],
	[ vm_retreat_german_navy, 2 ],
	[ vm_return ],
]

CODE[33] = [ // Modernism
	[ vm_prompt, 'Place 4 Liberal SP in Intellectual spaces, no more than 2 per space' ],
	[ vm_add_limited_infl_free_socio, 2, 4, SOCIO_INTELLECTUALS ],
	[ vm_return ],
]

CODE[34] = [ // Government-sponsored Art
	[ vm_prompt, 'Place 1 Authoritarian SP in each Intellectual space (except Bosnia and Siberia)' ],
	[ vm_add_limited_infl_free_spaces, 1, 6, S_FRENCH_WRITERS, S_FAUVISM, S_JUGENDSTIL, S_VIENNESE_SECESSION, S_SYMBOLISM, S_DENMARK ],
	[ vm_return ],
]

CODE[35] = [ // Absolutism*
	[ vm_absolutism ],
	[ vm_return ],
]

CODE[36] = [ // March of History*
	[ vm_march_of_history ],
	[ vm_return ],
]

CODE[37] = [ // Ferdinand Esterhazy
	[ vm_ferdinand_esterhazy ],
	[ vm_return ],
]

CODE[38] = [ // Kulturkampf
	[ vm_sc_socio_no_opp_adj, 2, SOCIO_INTELLECTUALS, SOCIO_CHURCH ],
	[ vm_return ],
]

CODE[39] = [ // Spiritism and Mysticism
	[ vm_prompt, 'from up to 4 Church, Monarch, and/or Bourgeoise spaces (no more than 2 SP per scoring region)' ],
	[ vm_remove_limited_opp_infl_socios_country, 1, 2, 4, SOCIO_CHURCH, SOCIO_MONARCHY, SOCIO_BOURGOISIE ],
	[ vm_return ],
]

CODE[40] = [ // Indecisiveness
	[ vm_decrease_tension, 1 ],
	[ vm_add_infl_free, 1 ],
	[ vm_return ],
]

CODE[41] = [ // Dreyfus Rehabilitated*
	[ vm_permanently_remove ],
	[ vm_remove_from_playable, C_DREYFUS_AFFAIR ],
	[ vm_remove_from_playable, C_FERDINAND_ESTERHAZY ],
	[ vm_prompt, 'from the French Armed Forces space.' ],
	[ vm_remove_opp_infl_space, 2, S_FRENCH_ARMY ],
	[ vm_prompt, 'from other French space(s)' ],
	[ vm_remove_opp_infl_country_excl_space, 2, N_FRANCE, S_FRENCH_ARMY ],
	[ vm_sc_country, 1, N_FRANCE ],
	[ vm_return ],
]

CODE[42] = [ // The Kaiser Intervenes
	[ vm_increase_tension, 1 ],
	[ vm_add_infl_free, 1 ],
	[ vm_return ],
]

CODE[43] = [ // Balkans Scoring
	[ vm_score_country ],
	[ vm_return ],
]

CODE[44] = [ // Second Hague Conference*
	[ vm_permanently_remove ],
	[ vm_second_hague_conference ],
	[ vm_return ],
]

CODE[45] = [ // Belgian Rule in Congo*
	[ vm_belgian_rule_in_congo ],
	[ vm_return ],
]

CODE[46] = [ // Liberals gain Power in UK*
	[ vm_permanently_remove ],
	[ vm_prompt, 'in one Government space per Scoring Region' ],
	[ vm_add_limited_infl_free_socio_per_country, 1, 1, 4, SOCIO_GOVERNMENT ],
	[ vm_add_infl_free_country, 1, N_INDEPENDENT ],
	[ vm_return ],
]

CODE[47] = [ // Young Turk Revolution*
	[ vm_prompt, 'Place 2 Liberal SP in 2 spaces, either in Constantinople and/or space(s) in the Balkan Region' ],
	[ vm_young_turk_revolution ],
	[ vm_sc_country, 2, N_BALKANS ],
	[ vm_return ],
]

CODE[48] = [ // Enver Pasha*
	[ vm_add_to_persistent_events ],
	[ vm_log, 'During the next Balkan Scoring, Authoritarian player may play 1 additional Stability card if he controls Macedonia.' ],
	[ vm_add_to_playable, C_FREEDOM_AND_ACCORD_PARTY ],
	[ vm_add_to_playable, C_RAID_ON_THE_SUBLIME_PORTE ],
	[ vm_add_infl_free_space, 2, S_CONSTANTINOPLE ],
	[ vm_return ],
]

CODE[49] = [ // Austria Annexes Bosnia*
	[ vm_austria_annexes_bosnia ],
	[ vm_increase_tension, 1 ],
	[ vm_do_crisis ],
	[ vm_prompt, 'Place 3 Authoritarian SP in Bosnia' ],
	[ vm_add_limited_infl_free_spaces, 3, 3, S_BOSNIA ],
	[ vm_return ],
]

CODE[50] = [ // Schlieffen Plan Adopted*
	[ vm_add_to_persistent_events ],
	[ vm_log, 'UK is a mandatory participant in the Great War (unless Splendid Isolation marker in on the Great War track). +1 to Authoritarian Great War rolls.' ],
	[ vm_add_infl_free_space, 1, S_BELGIUM ],
	[ vm_return ],
]

CODE[51] = [ // Norwegian Independence*
	[ vm_add_to_persistent_events ],
	[ vm_log, 'From now on, SP can be placed in Norway and Support Checks can be made in Norway.' ],
	[ vm_add_infl_free_space, 2, S_NORWAY ],
	[ vm_return ],
]

CODE[52] = [ // Conrad von Hötzendorf*
	[ vm_permanently_remove ],
	[ vm_increase_tension, 1 ],
	[ vm_prompt, 'Place 1 Authoritarian SP in each Austrian-Hungarian Army and Government space' ],
	[ vm_add_limited_infl_free_spaces, 1, 3, S_VIENNA, S_BUDAPEST, S_GALICIA_PRZEMESYL ],
	[ vm_return ],
]

CODE[53] = [ // German Scoring
	[ vm_score_country ],
	[ vm_return ],
]

CODE[54] = [ // Traditionalists Gain Power*
	[ vm_permanently_remove ],
	[ vm_traditionalists_gain_power ],
	[ vm_return ],
]

CODE[55] = [ // Viscount Grey
	[ vm_viscount_grey ],
	[ vm_return ],
]

CODE[56] = [ // Control of the Channel*
	[ vm_permanently_remove ],
	[ vm_control_of_the_channel ],
	[ vm_return ],
]

CODE[57] = [ // Naval Bill / Fleet Law*
	[ vm_permanently_remove ],
	[ vm_increase_tension, 1 ],
	[ vm_do_crisis ],
	[ vm_advance_naval, 1 ],
	[ vm_return ],
]

CODE[58] = [ // US Interventionism*
	[ vm_us_interventionism ],
	[ vm_return ],
]

CODE[59] = [ // Declaration of Independence*
	[ vm_permanently_remove ],
	[ vm_if, ()=>!is_auto_resolve(C_DECLARATION_OF_INDEPENDENCE) ],
	[ vm_prompt, 'Take control of one non-Liberal controlled space in ' ],
	[ vm_take_control_uncontrolled_space_country, 1, N_BALKANS ],
	[ vm_else ],
	[ vm_log, 'No uncontrolled space in the Balkans.' ],
	[ vm_endif ],
	[ vm_return ],
]

CODE[60] = [ // Legacy of 1848*
	[ vm_permanently_remove ],
	[ vm_legacy_of_1848 ],
	[ vm_return ],
]

CODE[61] = [ // Russian Collapse*
	[ vm_add_to_persistent_events ],
	[ vm_remove_from_peristent_events, C_FRANCO_RUSSIAN_ALLIANCE ],
	[ vm_remove_from_playable, C_FRANCO_RUSSIAN_ALLIANCE ],
	[ vm_increase_tension, 1 ],
	[ vm_do_crisis ],
	[ vm_return ],
]

CODE[62] = [ // Jozef Piłsudski*
	[ vm_permanently_remove ],
	[ vm_prompt, 'SP in Poland and/or spaces adjacent to Poland' ],
	[ vm_add_infl_free_space_adj, 2, S_POLAND ],
	[ vm_sc_space, 1, S_POLAND ],
	[ vm_return ],
]

CODE[63] = [ // October Manifesto*
	[ vm_october_manifesto ],
	[ vm_prompt, 'Place 5 Liberal SP in spaces in Russia (no more than 2 per space)' ],
	[ vm_add_limited_infl_free_country, 2, 5, N_RUSSIA ],
	[ vm_return ],
]

CODE[64] = [ // Diagonal Politics*
	[ vm_permanently_remove ],
	[ vm_prompt, 'Add 1 Liberal SP to each Authoritarian controlled space in Germany' ],
	[ vm_add_limited_infl_all_opp_controlled_country, 1, N_GERMANY ],
	[ vm_return ],
]

CODE[65] = [ // Second Duma Disbanded*
	[ vm_permanently_remove ],
	[ vm_second_duma_disbanded ],
	[ vm_return ],
]

CODE[66] = [ // Henry Wilson*
	[ vm_permanently_remove ],
	[ vm_prompt, 'Replace 1 Authoritarian SP with Liberal SP on the French Armed Forces space' ],
	[ vm_replace_opp_space, 1, 1, S_FRENCH_ARMY ],
	[ vm_sc_country, 1, N_FRANCE ],
	[ vm_return ],
]

CODE[67] = [ // Landslide Electoral Victory
	[ vm_prompt, 'Place a Liberal SP in 4 Liberal-controlled spaces' ],
	[ vm_add_limited_infl_own_controlled_spaces, 1, 4 ],
	[ vm_return ],
]

CODE[68] = [ // Triple Alliance*
	[ vm_triple_alliance ],
	[ vm_take_control, S_ITALY ],
	[ vm_return ],
]

CODE[69] = [ // Prince Heinrich*
	[ vm_permanently_remove ],
	[ vm_prince_heinrich ],
	[ vm_return ],
]

CODE[70] = [ // Winston Churchill*
	[ vm_permanently_remove ],
	[ vm_winston_churchill ],
	[ vm_return ],
]

CODE[71] = [ // Local Uprising
	[ vm_increase_tension, 1 ],
	[ vm_prompt, 'Annex' ],
	[ vm_add_infl_free_socio, 3, SOCIO_ANNEX ],
	[ vm_return ],
]

CODE[72] = [ // Military Parade
	[ vm_military_parade ],
	[ vm_return ],
]

CODE[73] = [ // Central Authority
	[ vm_central_authority ],
	[ vm_return ],
]

CODE[74] = [ // von Bethmann-Hollweg*
	[ vm_add_to_persistent_events ],
	[ vm_log, 'Authoritarian player may make an additional Naval Arms Race attempt each turn. While the German Navy marker is not flipped to its +1 side, Authoritarian Naval Arms Race automatically fail. +1 to Authoritarian Great War rolls.' ],
	[ vm_remove_from_playable, C_BERNHARD_VON_BÜLOW ],
	[ vm_return ],
]

CODE[75] = [ // Jean Jaures*
	[ vm_jean_jaures ],
	[ vm_decrease_tension, 1 ],
	[ vm_return ],
]

CODE[76] = [ // Georges Clemenceau*
	[ vm_log, ()=>`For the rest of the game, cancels +1 OPs cost to place SPs in Authoritarian controlled spaces in France.` ],
	[ vm_remove_from_playable, C_BONAPARTISM___MONARCHISM ],
	[ vm_add_to_persistent_events ],
	[ vm_prompt, 'from each SP in France containing SP from both players' ],
	[ vm_remove_limited_opp_infl_country_both_present, 1, N_FRANCE ],
	[ vm_return ],
]

CODE[77] = [ // Alsace-Lorraine*
	[ vm_permanently_remove ],
	[ vm_if, ()=>check_aut_control(S_ALSACE_LORRAINE) ],
	[ vm_add_vp, 2 ],
	[ vm_else ],
	[ vm_log, ()=>`%${S_ALSACE_LORRAINE} not Authoritarian contolled.` ],
	[ vm_endif ],
	[ vm_prompt, 'Place 2 Authortarian SP in Alsace-Lorraine' ],
	[ vm_add_limited_infl_free_spaces, 2, 2, S_ALSACE_LORRAINE ],
	[ vm_increase_tension, 1 ],
	[ vm_return ],
]

CODE[78] = [ // Revolution of 1905*
	[ vm_increase_tension, 1 ],
	[ vm_revolution_1905 ],
	[ vm_do_crisis ],
	[ vm_return ],
]

CODE[79] = [ // Victor Chernov*
	[ vm_victor_chernov ],
	[ vm_prompt, 'Replace 3 Authoritarian SP in Russia by Liberal SP (1 per space)' ],
	[ vm_replace_opp_country, 1, 3, N_RUSSIA ],
	[ vm_return ],
]

CODE[80] = [ // Tangier Crisis*
	[ vm_permanently_remove ],
	[ vm_tangier_crisis ],
	[ vm_if, ()=>check_aut_control(S_FRENCH_ARMY) ],
	[ vm_add_infl_free_space_country, 2, N_FRANCE ],
	[ vm_else ],
	[ vm_add_infl_free_space, 2, S_FRENCH_ARMY ],
	[ vm_endif ],
	[ vm_increase_tension, 1 ],
	[ vm_do_crisis ],
	[ vm_return ],
]

CODE[81] = [ // Raoul Villain*
	[ vm_permanently_remove ],
	[ vm_gain_vp, 1 ],
	[ vm_remove_from_peristent_events, C_JEAN_JAURES ],
	[ vm_remove_from_playable, C_JEAN_JAURES ],
	[ vm_return ],
]

CODE[82] = [ // Agadir Crisis*
	[ vm_permanently_remove ],
	[ vm_agadir_crisis ],
	[ vm_return ],
]

CODE[83] = [ // Gavrilo Princip*
	[ vm_permanently_remove ],
	[ vm_remove_from_peristent_events, C_FRANZ_FERDINAND ],
	[ vm_increase_tension, 2 ],
	[ vm_do_crisis ],
	[ vm_return ],
]

CODE[84] = [ // Balkan Federation*
	[ vm_add_to_persistent_events ],
	[ vm_log, 'For the remainder of the turn, the Liberal player receives +1 to the OPs value fo a card that uses all its Operations in the Balkans.' ],
	[ vm_add_infl_free_country, 1, N_BALKANS ],
	[ vm_return ],
]

CODE[85] = [ // Patriotism / Nationalism*
	[ vm_permanently_remove ],
	[ vm_prompt, 'Replace 3 Liberal SP in Workers Spaces by Authoritarian SP (max 1 per space)' ],
	[ vm_replace_limited_opp_socio, 1, 3, SOCIO_WORKERS ],
	[ vm_return ],
]

CODE[86] = [ // Parliament Act of 1911*
	[ vm_permanently_remove ],
	[ vm_parliament_act_1911 ],
	[ vm_return ],
]

CODE[87] = [ // War in the Balkans*
	[ vm_add_to_persistent_events ],
	[ vm_remove_from_peristent_events, C_LEOPOLD_VON_BERCHTOLD ],
	[ vm_increase_tension, 1 ],
	[ vm_if, ()=>!game.persistent_events.includes(C_LEGACY_OF_BISMARCK) ],
	[ vm_do_crisis ],
	[ vm_else ],
	[ vm_log, ()=>`No Crisis Roll due to C${C_LEGACY_OF_BISMARCK}.` ],
	[ vm_endif ],
	[ vm_remove_opp_infl_country, 3, N_BALKANS ],
	[ vm_return ],
]

CODE[88] = [ // US Non-Interventionism*
	[ vm_remove_from_playable, C_US_INTERVENTIONISM ],
	[ vm_remove_from_peristent_events, C_US_INTERVENTIONISM ],
	[ vm_add_to_playable, C_ARMS_TRADERS_INDUSTRY ],
	[ vm_reset_stability, AUT ],
	[ vm_return ],
]

CODE[89] = [ // Stolypin Land Reforms*
	[ vm_permanently_remove ],
	[ vm_prompt, 'At each Russian Farmer space, remove one Liberal SP and add one Authoritarian SP' ],
	[ vm_replace_opp_space, 1, 3, S_BELARUS, S_THE_UKRAINE, S_CRIMEA ],
	[ vm_return ],
]

CODE[90] = [ // Balkan Civil War*
	[ vm_add_to_persistent_events ],
	[ vm_increase_tension, 1 ],
	[ vm_if, ()=>!game.persistent_events.includes(C_LEGACY_OF_BISMARCK) ],
	[ vm_do_crisis ],
	[ vm_else ],
	[ vm_log, ()=>`No Crisis Roll due to C${C_LEGACY_OF_BISMARCK}.` ],
	[ vm_endif ],
	[ vm_prompt, 'add enough Liberal SP in a Balkan space to match Authoritarian SP there' ],
	[ vm_match_opp_infl_country, 1, N_BALKANS ],
	[ vm_return ],
]

CODE[91] = [ // Funeral of Edward VII*
	[ vm_decrease_tension, 1 ],
	[ vm_prompt, 'Place a Liberal SP in each Monarch space' ],
	[ vm_add_limited_infl_free_socio, 1, 6, SOCIO_MONARCHY ],
	[ vm_return ],
]

CODE[92] = [ // Freedom and Accord Party*
	[ vm_permanently_remove ],
	[ vm_prompt, 'Place enough Liberal SP in Constantinope to break Authoritarian control' ],
	[ vm_break_control, S_CONSTANTINOPLE ],
	[ vm_freedom_and_accord_party ],
	[ vm_return ],
]

CODE[93] = [ // Raid on the Sublime Porte*
	[ vm_add_to_persistent_events ],
	[ vm_remove_from_playable, C_FREEDOM_AND_ACCORD_PARTY ],
	[ vm_do_crisis ],
	[ vm_raid_on_the_sublime_porte ],
	[ vm_return ],
]

CODE[94] = [ // Perfidious Italy*
	[ vm_perfidious_italy ],
	[ vm_remove_from_peristent_events, C_TRIPLE_ALLIANCE ],
	[ vm_remove_from_playable, C_TRIPLE_ALLIANCE ],
	[ vm_prompt, 'Place 2 Liberal SP in both Italy and Libya spaces' ],
	[ vm_add_limited_infl_free_spaces, 2, 4, S_ITALY, S_LIBYA ],
	[ vm_return ],
]

CODE[95] = [ // Splendid Isolation*
	[ vm_add_to_persistent_events ],
	[ vm_remove_from_peristent_events, C_ENTENTE_CORDIALE ],
	[ vm_remove_from_playable, C_ENTENTE_CORDIALE ],
	[ vm_remove_from_playable, C_HENRY_WILSON ],
	[ vm_remove_from_playable, C_VISCOUNT_GREY ],
	[ vm_prompt, 'Remove one Liberal SP from each of the following spaces: the Netherlands, Belgium, Norway, Sweden, and Paris' ],
	[ vm_remove_limited_opp_infl_spaces, 1, 5, S_NETHERLANDS, S_BELGIUM, S_NORWAY, S_SWEDEN, S_PARIS ],
	[ vm_return ],
]

CODE[96] = [ // Yugoslavia*
	[ vm_yugoslavia ],
	[ vm_return ],
]

CODE[97] = [ // Exiles Escape/Return*
	[ vm_exiles_escape ],
	[ vm_return ],
]

CODE[98] = [ // Reinhold von Sydow*
	[ vm_add_to_persistent_events ],
	[ vm_log, '+2 modifier to all Authoritarian Naval Arms Race attempts for the rest of the game.' ],
	[ vm_return ],
]

CODE[99] = [ // Franco-British Naval Cooperation*
	[ vm_permanently_remove ],
	[ vm_if, ()=>game.lib_naval_position < game.aut_naval_position ],
	[ vm_advance_naval, 2 ],
	[ vm_else ],
	[ vm_advance_naval, 1 ],
	[ vm_endif ],
	[ vm_return ],
]

CODE[100] = [ // Arms Traders/Industry
	[ vm_arms_traders ],
	[ vm_return ],
]

CODE[101] = [ // Aristide Briand*
	[ vm_add_to_persistent_events ],
	[ vm_remove_from_peristent_events, C_GEORGES_CLEMENCEAU ],
	[ vm_remove_from_playable, C_GEORGES_CLEMENCEAU ],
	[ vm_if, ()=>check_lib_control(S_PARIS) ],
	[ vm_gain_vp, 1 ],
	[ vm_prompt, 'Place 1 Liberal SP in 4 Worker and/or Farmer spaces in France' ],
	[ vm_add_limited_infl_free_spaces, 1, 4, S_BRITANNY_NORMANDY, S_PICARDY, S_BORDEAUX, S_DIJON, S_NICE ],
	[ vm_else ],
	[ vm_prompt, 'Place 1 Liberal SP in 2 Worker and/or Farmer spaces in France' ],
	[ vm_add_limited_infl_free_spaces, 1, 2, S_BRITANNY_NORMANDY, S_PICARDY, S_BORDEAUX, S_DIJON, S_NICE ],
	[ vm_endif ],
	[ vm_return ],
]

CODE[102] = [ // Army Expansion*
	[ vm_add_to_persistent_events ],
	[ vm_prompt, 'in each Army space in Germany not under Liberal control' ],
	[ vm_add_limited_infl_not_opp_controlled_spaces, 1, 3, S_IMPERIAL_ARMY, S_KIEL, S_EAST_PRUSSIA ],
	[ vm_increase_tension, 1 ],
	[ vm_return ],
]

CODE[103] = [ // Black Hand*
	[ vm_add_to_persistent_events ],
	[ vm_black_hand ],
	[ vm_return ],
]

CODE[104] = [ // Attempted Neutrality
	[ vm_prompt, 'Place 1 Liberal SP in three Independent spaces' ],
	[ vm_add_limited_infl_free_country, 1, 3, N_INDEPENDENT ],
	[ vm_return ],
]

CODE[105] = [ // Rosa Luxemburg*
	[ vm_permanently_remove ],
	[ vm_rosa_luxemburg ],
	[ vm_return ],
]

CODE[106] = [ // Preventative War*
	[ vm_gain_vp, 2 ],
	[ vm_remove_infl_country, 3 ],
	[ vm_decrease_tension, 2 ],
	[ vm_return ],
]

CODE[107] = [ // Mitteleuropa*
	[ vm_mitteleuropa ],
	[ vm_return ],
]

CODE[108] = [ // Weltpolitik*
	[ vm_permanently_remove ],
	[ vm_gain_vp, 4 ],
	[ vm_change_player ],
	[ vm_prompt, 'Remove 1 Authoritarian SP from 4 different spaces' ],
	[ vm_remove_limited_opp_infl, 1, 4 ],
	[ vm_decrease_tension, 1 ],
	[ vm_return ],
]

CODE[109] = [ // Leopold von Berchtold*
	[ vm_add_to_playable, C_GAVRILO_PRINCIP ],
	[ vm_prompt, 'in the Balkans region' ],
	[ vm_add_infl_free_country, 1, N_BALKANS ],
	[ vm_if, ()=>(!game.persistent_events.includes(C_WAR_IN_THE_BALKANS) && !game.persistent_events.includes(C_BALKAN_CIVIL_WAR)) ],
	[ vm_add_to_persistent_events ],
	[ vm_log, 'While the Balkan Wars marker is not on the Great War status track, the cost to place SP in the Balkans is doubled for the rest of the game' ],
	[ vm_else ],
	[ vm_permanently_remove ],
	[ vm_endif ],
	[ vm_return ],
]

CODE[110] = [ // Istvan Tisza*
	[ vm_permanently_remove ],
	[ vm_prompt, 'in Transylvania, Budapest, and Galicia/Przemśyl' ],
	[ vm_add_limited_infl_free_spaces, 1, 3, S_TRANSYLVANIA, S_BUDAPEST, S_GALICIA_PRZEMESYL ],
	[ vm_decrease_tension, 1 ],
	[ vm_return ],
]

CODE[201] = [ // Workers Unite
	[ vm_prompt, 'Take control of each non-Authoritarian controlled Worker space in' ],
	[ vm_take_control_uncontrolled_socio_scoring, SOCIO_WORKERS ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[202] = [ // Farmer Collectives
	[ vm_prompt, 'in up to two Farmer space(s) in the Scoring Region' ],
	[ vm_add_limited_infl_socio_scoring, 1, 2, SOCIO_FARMERS ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[203] = [ // Testimonials
	[ vm_if, ()=>control_socio_country(SOCIO_CHURCH, game.active_country) ],
	[ vm_prompt, 'in up to two Farmer, Worker, and/or Annex space(s) in the Scoring Region' ],
	[ vm_add_limited_infl_socio_scoring, 1, 2, SOCIO_FARMERS, SOCIO_WORKERS, SOCIO_ANNEX ],
	[ vm_else ],
	[ vm_log, 'Does not control a Church space.' ],
	[ vm_endif ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[204] = [ // Popular Uproar
	[ vm_if, ()=>popular_uproar() ],
	[ vm_popular_uproar ],
	[ vm_else ],
	[ vm_log, 'Liberal does not control an Annex space in (or adjacent to) the Scoring Region.' ],
	[ vm_discard_stability ],
	[ vm_endif ],
	[ vm_return ],
]

CODE[205] = [ // Intelligentsia
	[ vm_if, ()=>control_socio_country(SOCIO_INTELLECTUALS, game.active_country) ],
	[ vm_decrease_tension, 1 ],
	[ vm_recover_from_discard_ops, 2 ],
	[ vm_else ],
	[ vm_log, 'No controlled Intellectual space.' ],
	[ vm_endif ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[206] = [ // Left-wing Governments
	[ vm_if, ()=>control_socio_country(SOCIO_GOVERNMENT, game.active_country) ],
	[ vm_prompt, 'Place 1 Liberal SP in up to three uncontrolled space(s) in the Scoring Region' ],
	[ vm_add_limited_infl_uncontrolled_scoring, 1, 3 ],
	[ vm_else ],
	[ vm_log, 'No controlled Intellectual space.' ],
	[ vm_endif ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[207] = [ // Anarchist Attack
	[ vm_anarchist_attack ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[208] = [ // Blockade
	[ vm_if, ()=>game.lib_naval_position > game.aut_naval_position ],
	[ vm_prompt, 'from up to two Annex space(s)' ],
	[ vm_remove_limited_opp_infl_socio, 1, 2, SOCIO_ANNEX ],
	[ vm_else ],
	[ vm_log, 'British Navy is not ahead on Naval Arms Race Track.' ],
	[ vm_endif ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[209] = [ // Silent Majority
	[ vm_if, ()=>control_in_country(4, game.active_country) ],
	[ vm_add_infl_free_outside, 1 ],
	[ vm_else ],
	[ vm_log, 'Does not control at least four spaces in the Scoring Region.' ],
	[ vm_endif ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[210] = [ // Most Favoured Nation
	[ vm_add_limited_infl_uncontrolled_ind_scoring, 1, 2 ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[211] = [ // Support of the Farmers
	[ vm_prompt, 'in Church and/or Government space(s) in the Scoring Region (max 1 per space)' ],
	[ vm_support_of_the_farmers ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[212] = [ // Absolutist Rule
	[ vm_absolutist_rule ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[213] = [ // Support of the Generals
	[ vm_if, ()=>control_socio_country(SOCIO_ARMY, game.active_country) ],
	[ vm_increase_tension, 1 ],
	[ vm_sc_country_ops, 1, 3 ],
	[ vm_else ],
	[ vm_log, 'No controlled Army space.' ],
	[ vm_endif ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[214] = [ // Secret Treaty Clauses
	[ vm_secret_treaty_clauses ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[215] = [ // Most Favoured Nation
	[ vm_add_limited_infl_uncontrolled_ind_scoring, 1, 2 ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[216] = [ // Naval Law Amendment
	[ vm_if, ()=>game.lib_naval_position > game.aut_naval_position ],
	[ vm_naval_law_amendment ],
	[ vm_else ],
	[ vm_log, 'German Navy is not behind on the Naval Arms Race track.' ],
	[ vm_endif ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[217] = [ // Elitist Art
	[ vm_if, ()=>control_socio_country(SOCIO_INTELLECTUALS, game.active_country) ],
	[ vm_gain_vp, 1 ],
	[ vm_else ],
	[ vm_log, 'No controlled Intellectual space.' ],
	[ vm_endif ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[218] = [ // Government Suppression
	[ vm_if, ()=>control_socio_country(SOCIO_GOVERNMENT, game.active_country) ],
	[ vm_prompt, 'Place 1 Authoritarian SP in up to three uncontrolled space(s) in the Scoring Region' ],
	[ vm_add_limited_infl_uncontrolled_scoring, 1, 3 ],
	[ vm_else ],
	[ vm_log, 'Authoritarian does not control a Government space.' ],
	[ vm_endif ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[219] = [ // Ecclesial Influence
	[ vm_if, ()=>control_socio_country(SOCIO_CHURCH, game.active_country) ],
	[ vm_prompt, 'SP in Farmer, Worker, and/or Army space(s) in the Scoring Region' ],
	[ vm_add_limited_infl_socio_scoring, 2, 2, SOCIO_FARMERS, SOCIO_WORKERS, SOCIO_ARMY ],
	[ vm_else ],
	[ vm_log, 'Does not control the Church space.' ],
	[ vm_endif ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[220] = [ // Limited Franchise
	[ vm_if, ()=>control_socio_country(SOCIO_BOURGOISIE, game.active_country) ],
	[ vm_prompt, 'in Government and/or Monarchy space(s) in the Scoring Region' ],
	[ vm_add_limited_infl_socio_scoring, 2, 2, SOCIO_GOVERNMENT, SOCIO_MONARCHY ],
	[ vm_else ],
	[ vm_log, 'Authoritarian does not control a Bourgeoisie space.' ],
	[ vm_endif ],
	[ vm_discard_stability ],
	[ vm_return ],
]

CODE[301] = [ // HMS Dreadnought
	[ vm_add_limited_infl_uncontrolled_ind, 1, 2 ],
	[ vm_return ],
]

CODE[305] = [ // Colossus Class
	[ vm_colossus ],
	[ vm_return ],
]

CODE[312] = [ // Bayern Class
	[ vm_bayern ],
	[ vm_return ],
]
// END EVENTS