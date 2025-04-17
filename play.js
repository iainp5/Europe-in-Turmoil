last_space = 69
LAST_STRATEGY_CARD = 110
LAST_STABILITY_CARD = 20

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

const S_FRENCH_CATHOLIC_CHURCH = 4

const SCORING_CARDS = [ 6, 7, 8, 43, 53 ]
const GREAT_WAR_EVENTS = [C_ENTENTE_CORDIALE, C_THE_DUAL_ALLIANCE, C_TRIPLE_ALLIANCE, C_WAR_IN_THE_BALKANS, C_BALKAN_CIVIL_WAR, C_PERFIDIOUS_ITALY, C_SPLENDID_ISOLATION ]

H = 80
W = 114
INF_DX = 33
INF_DY = 10
LIB = "Liberal"
AUT = "Authoritarian"
/*
const coordinates = document.getElementById('coordinates')

        map.addEventListener('mousemove', (event) => {
            const rect = map.getBoundingClientRect();
            const x = Math.floor(event.clientX - rect.left);
            const y = Math.floor(event.clientY - rect.top);
            coordinates.textContent = `X: ${x}, Y: ${y}`;
        });
*/
const ui = {
    favicon: document.getElementById("favicon"),
	turn_info: document.getElementById("turn_info"),

	turn: document.getElementById("turn_marker"),
	round: document.getElementById("action_round"),
	tension: document.getElementById("tension"),
	navy_br: document.getElementById("navy_br"),
	navy_ger: document.getElementById("navy_ger"),
	high_water: document.getElementById("high_water"),
	vp: document.getElementById("vp"),

	event_reminder_list: document.getElementById("event_reminder_list"),

	played_card: document.getElementById("played_card"),
	hand: document.getElementById("hand"),
	stability_hand: document.getElementById("stability_hand"),
	stability_discard: document.getElementById("stability_discard"),
	opp_hand: document.getElementById("opp_hand"),
	discard: document.getElementById("discard"),
	removed: document.getElementById("removed"),
	persistent: document.getElementById("persistent"),

}

function create_ui() {
    // CREATE SPACES
    ui.spaces = []
    ui.lib_infl = []
    ui.lib_infl2 = []
    ui.lib_infl3 = []
    ui.auth_infl = []
    ui.auth_infl2 = []
    ui.auth_infl3 = []

    for (let s = 0; s <= last_space; s++) {
        let x = spaces[s].x
        let y = spaces[s].y

        let space_s = document.createElement("div")
        register_action(space_s, "space", s)
        space_s.className = "space"
        space_s.id = "space_" + s
        space_s.style.left = x + "px"
        space_s.style.top = y + "px"
        space_s.style.width = W + "px"
        space_s.style.height = H + "px"
        ui.spaces[s] = space_s

        let auth_v = document.createElement("div")
		auth_v.className = "marker comInfl hide"
		auth_v.style.left = x + 84 - 25 + "px"
		auth_v.style.top = y + 55 - 25 + "px"
		ui.auth_infl[s] = auth_v

		let auth_v2 = document.createElement("div")
		auth_v2.className = "marker comInfl hide"
		auth_v2.style.left = x + 84 - 25 + INF_DX + "px"
		auth_v2.style.top = y + 55 - 25 + INF_DY + "px"
		ui.auth_infl2[s] = auth_v2

		let auth_v3 = document.createElement("div")
		auth_v3.className = "marker comInfl hide"
		auth_v3.style.left = x + 84 - 25 + 5 + INF_DX + "px"
		auth_v3.style.top = y + 55 - 25 + 5 + INF_DY + "px"
		ui.auth_infl3[s] = auth_v3

		let lib_v = document.createElement("div")
		lib_v.className = "marker lib_infl hide"
		lib_v.style.left = x + 33 - 25 + "px"
		lib_v.style.top = y + 55 - 25 + "px"
		ui.lib_infl[s] = lib_v

		let lib_v2 = document.createElement("div")
		lib_v2.className = "marker lib_infl hide"
		lib_v2.style.left = x + 33 - 25 - INF_DX + "px"
		lib_v2.style.top = y + 55 - 25 + INF_DY + "px"
		ui.lib_infl2[s] = lib_v2

		let lib_v3 = document.createElement("div")
		lib_v3.className = "marker lib_infl hide"
		lib_v3.style.left = x + 33 - 25 - 5 - INF_DX + "px"
		lib_v3.style.top = y + 55 - 25 + 5 + INF_DY + "px"
		ui.lib_infl3[s] = lib_v3

		document.getElementById("spaces").append(space_s)
		document.getElementById("markers").appendChild(auth_v)
		document.getElementById("markers").appendChild(auth_v2)
		document.getElementById("markers").appendChild(auth_v3)
		document.getElementById("markers").appendChild(lib_v)
		document.getElementById("markers").appendChild(lib_v2)
		document.getElementById("markers").appendChild(lib_v3)
    }

	ui.naval = []
	for (let n = 0; n <= naval_race_names.length; n++) {
		let naval_n = document.createElement("div")
		register_action(naval_n, "space", n)
		naval_n.className = "space"
		naval_n.id = "naval_" + n
		naval_n.style.left = 2803 + "px"
		naval_n.style.top = naval_race_names[n] + "px"
		naval_n.style.width = W + "px"
		naval_n.style.height = H + "px"
		ui.naval[n] = naval_n
	} 

    ui.cards_strategy = []
	for (let c = 1; c <= LAST_STRATEGY_CARD; ++c) {
		const card_e = document.createElement("div")
		register_action(card_e, "card", c)
		card_e.className = "card strategy_" + c
		ui.cards_strategy[c] = card_e
	}

	ui.cards_stability = []
	for (let c = 1; c <= LAST_STABILITY_CARD; ++c) {
		const card_e = document.createElement("div")
		register_action(card_e, "stability_card", c)
		card_e.className = "card stability_" + c
		ui.cards_stability[c] = card_e
	}
	ui.great_war_markers = []
	for (let c of GREAT_WAR_EVENTS) {
		const marker_c = document.createElement("div")
		marker_c.className = "marker"
		marker_c.id = "great_war_" + c
		ui.great_war_markers.push(marker_c)
	}
}

// ======================== LAYOUT ===================
function layout_turn() {
    ui.turn.style.top = 330 + 'px'
    ui.turn.style.left = 88 + view.turn * 44 + 'px'
}

function layout_round() {
    ui.round.style.top = 373 + 'px'
    ui.round.style.left = 88 + view.round * 44 + 'px'
}

function layout_tension() {
    ui.tension.style.top = 617 + 'px'
	ui.tension.style.left = 2130 + view.tension * 44 + 'px'
}

function layout_vp() {
	if (view.vp < -20)
		view.vp = -21
	if (view.vp > 20)
		view.vp = 21
	if (view.vp === 0) {
		ui.vp.style.top = 1015 + 'px'
		ui.vp.style.left = 2263 + 'px'
	} else if (view.vp < -15) {
		ui.vp.style.top = 835 + 'px'
		ui.vp.style.left = 2263 + (20 + view.vp) * 44 + 'px'
	} else if (view.vp < -10) {
		ui.vp.style.top = 879 + 'px'
		ui.vp.style.left = 2263 + (-11 - view.vp) * 44 + 'px'
	} else if (view.vp < -5) {
		ui.vp.style.top = 927 + 'px'
		ui.vp.style.left = 2263 + (10 + view.vp) * 44 + 'px'
	} else if (view.vp < 0) {
		ui.vp.style.top = 969 + 'px'
		ui.vp.style.left = 2263 + (-1 - view.vp) * 44 + 'px'
	} else if (view.vp > 15) {
		ui.vp.style.top = 1195 + 'px'
		ui.vp.style.left = 2263 + (20 - view.vp) * 44 + 'px'
	} else if (view.vp > 10) {
		ui.vp.style.top = 1147 + 'px'
		ui.vp.style.left = 2263 + (-11 + view.vp) * 44 + 'px'
	} else if (view.vp > 5) {
		ui.vp.style.top = 1104 + 'px'
		ui.vp.style.left = 2263 + (10 - view.vp) * 44 + 'px'
	} else if (view.vp > 0) {
		ui.vp.style.top = 1060 + 'px'
		ui.vp.style.left = 2263 + (-1 + view.vp) * 44 + 'px'
	}
}

function layout_navy() {
	ui.navy_br.style.top = 170 + view.lib_naval * 105 + 'px'
	ui.navy_ger.style.top = 170 + view.aut_naval * 105 + 'px'
	
	ui.navy_br.style.left = 2695 + 'px'
	ui.navy_ger.style.left = 2750 + 'px'

	if (view.high_water) {
		ui.high_water.style.left = 2750 + 'px'
		ui.high_water.style.top = 170 + view.high_water * 105 + 'px'
		ui.high_water.classList.remove('hide')
	} else {
		ui.high_water.classList.add('hide')
	}
	console.log('view.lib_naval_plus', view.lib_naval_plus)
	if (view.lib_naval_plus)
		ui.navy_br.classList.add('plus')
	else
		ui.navy_br.classList.remove('plus')
	if (view.aut_naval_plus)
		ui.navy_ger.classList.add('plus')
	else
		ui.navy_ger.classList.remove('plus')
}

function layout_great_war() {
	let league = document.getElementById("league")
	if (view.persistent_events.includes(C_RUSSIAN_COLLAPSE)) {
		league.classList.remove("emp3")
		league.classList.remove("alliance")
		league.classList.add("russian_collapse")
	}
	else if (view.persistent_events.includes(C_FRANCO_RUSSIAN_ALLIANCE)){
		league.classList.remove("emp3")
		league.classList.add("alliance")
	}
	let great_war = []
	for (let c of view.persistent_events) {
		if (GREAT_WAR_EVENTS.includes(c))
			great_war.push(c)
	}
	if (great_war.length > 0) {
		let x = 0
		for (let c of great_war) {
			let marker = ui.great_war_markers[GREAT_WAR_EVENTS.indexOf(c)]
			marker.style.top = 537 + 'px'
			marker.style.left = 2262 + x * 44 + 'px'
			document.getElementById("markers").appendChild(marker)
			x ++
		}
	}
}

function layout_black_hand() {
	let hand = document.getElementById("black_hand")
	if (view.black_hand) {
		hand.style.top = spaces[view.black_hand].y + 80 + "px"
		hand.style.left = spaces[view.black_hand].x + 60	 + "px"
		hand.classList.remove('hide')
	} else {
		hand.classList.add('hide')
	}
}

// ACTIONS 
let action_register = []

function register_action(target, action, id) {
	target.my_action = action
	target.my_id = id
	target.onmousedown = on_click_action
	action_register.push(target)
}

function is_action(action, arg) {
	//console.log('action register', action_register)
	//console.log(view.actions, 'action', action, view.actions[action], arg)
	return !!(view.actions && view.actions[action] && view.actions[action].includes(arg))
	//if (!view.actions || !Array.isArray(view.actions[action])) return false
	//return view.actions[action].includes(arg)
}

function on_click_action(evt) {
	if (evt.button === 0)
		send_action(evt.target.my_action, evt.target.my_id)
}

// UTILILTY FUNCTIONS

function layout_inf_markers(cn, one, two, three, v, ctl) {
    //console.log('layout_infl, cn', cn, 'one', one, 'two', two, 'three', three, 'v', v, 'ctl', ctl)
	if (ctl)
		cn += " ctl"
	if (v > 20) {
		one.className = cn + " v" + 10
		two.className = cn + " v" + 10
		three.className = cn + " v" + (v - 20)
	} else if (v > 10) {
		one.className = cn + " v" + 10
		two.className = cn + " v" + (v - 10)
		three.className = "hide"
	} else if (v > 0) {
		one.className = cn + " v" + v
		two.className = "hide"
		three.className = "hide"
	} else {
		one.className = "hide"
		two.className = "hide"
		three.className = "hide"
	}
}

const INFL_SHIFT = 5
const INFL_MASK = 0b11111

function get_infl(side, space) {
	if (side === LIB) {
		return view.infl[space] & INFL_MASK; // Extract last 5 bits
	  } else if (side === AUT) {
		return (view.infl[space] >> INFL_SHIFT) & INFL_MASK; // Extract first 5 bits
	  }
}

let discard_toggle = document.getElementById("discard_panel").classList.contains("hide")
function toggle_discard() {
	discard_toggle = !discard_toggle
	document.getElementById("discard_panel").classList.toggle("hide", discard_toggle)
}

// =============== LOG FUNCTIONS =============================

let log_event = 0
let event_n = 0
let event_side = null

function sub_card_name(_match, p1) {
	let x = p1 | 0
	if (SCORING_CARDS.includes(x))
		return `<span class="scoring_card_name" onmouseenter="on_focus_card_tip(${x})" onmouseleave="on_blur_card_tip()">${strategy_cards[x].name.replace("*", "")}</span>`
	else
		return `<span class="card_name" onmouseenter="on_focus_card_tip(${x})" onmouseleave="on_blur_card_tip()">${strategy_cards[x].name.replace("*", "")}</span>`
}

function sub_stability_card_name(_match, p1) {
	let x = p1 | 0
	return `<span class="card_name" onmouseenter="on_focus_stability_card_tip(${x})" onmouseleave="on_blur_stability_card_tip()">${stability_cards[x].name}</span>`
}

function sub_space_name(_match, p1) {
	let id = p1 | 0
	let name = spaces[id].name
	return `<span class="space_tip" onmouseenter="on_focus_space_tip(${id})" onmouseleave="on_blur_space_tip(${id})" onclick="on_click_space_tip(${id})">${name}</span>`
}

function sub_naval_race_name(_match, p1) {
	let id = p1 | 0
	let name = naval_race_names[id].name
	return `<span class="naval_tip" onmouseenter="on_focus_naval_tip(${id})" onmouseleave="on_blur_naval_tip(${id})" onclick="on_click_naval_tip(${id})">${name}</span>`
}

const die = {
	D1: '<span class="die white d1"></span>',
	D2: '<span class="die white d2"></span>',
	D3: '<span class="die white d3"></span>',
	D4: '<span class="die white d4"></span>',
	D5: '<span class="die white d5"></span>',
	D6: '<span class="die white d6"></span>',
}

function sub_die(match) {
	return die[match] || match
}

const PLAYER_NAMES = {
	'.0': 'Authoritarian',
	'.1': 'Liberal'
}

function sub_player_name(match) {
	return PLAYER_NAMES[match] || match
}

function sub_minus(match) {
	return "\u2012" + match.substring(1)
}


function on_log(text, ix) {
	let p = document.createElement("div")
	let event_string = text.match(/^C(\d+)/)
	if (event_string)
		event_n = parseInt(event_string[1])

	if (text.match(/^>>/)) {
		text = text.substring(2)
		p.className = "ii"
	}
	if (text.match(/^>/)) {
		text = text.substring(1)
		p.className = "i"
	}

	text = text.replace(/_/g, " ")
	text = text.replace(/C(\d+)/g, sub_card_name)
	text = text.replace(/P(\d+)/g, sub_stability_card_name)
	text = text.replace(/N(\d+)/g, sub_naval_race_name)
	text = text.replace(/%(\d+)/g, sub_space_name)
	text = text.replace(/D[1-6]/g, sub_die)
	text = text.replace(/\.[0-1]/g, sub_player_name)
	text = text.replace(/-\d/g, sub_minus)

	if (text.match(/^\.h1/)) {
		text = text.substring(4)
		p.className = "h1"
		log_event = 0
	} else if (text.match(/^\.h2/)) {
		text = text.substring(4)
		p.className = "h2"
		log_event = 0
	} else if (text.match(/^\.N\.L/)) {
		text = text.replace(".N.L", "")
		p.className = "h2 lib"
		log_event = 0
	} else if (text.match(/^\.O\.L/)) {
		text = "operations"
		p.className = "h2 lib"
		log_event = 0
	} else if (text.match(/\.V\.L/)) {
		text = "event"
		p.className = "h2 lib"
		log_event = 0
	} else if (text.match(/^\.S\.L/)) {
		text = text.replace(".S.L", "")
		p.className = "h2 lib"
		log_event = 0
	} else if (text.match(/^\.P\.L/)) {
		text = "passed"
		p.className = "h2 lib"
		log_event = 0
	} else if (text.match(/^\.T\.L/)) {
		text = "event and operations"
		p.className = "h2 lib"
		log_event = 0
	} else if (text.match(/^\.N\.A/)) {
		text = text.replace(".N.A", "")
		p.className = "h2 aut"
		log_event = 0
	} else if (text.match(/^\.O\.A/)) {
		text = "operations"
		p.className = "h2 aut"
		log_event = 0
	} else if (text.match(/\.V\.A/)) {
		text = "event"
		p.className = "h2 aut"
		log_event = 0
	} else if (text.match(/^\.S\.A/)) {
		text = text.replace(".S.A", "")
		p.className = "h2 aut"
		log_event = 0
	} else if (text.match(/^\.P\.A/)) {
		text = "passed"
		p.className = "h2 aut"
		log_event = 0
	} else if (text.match(/^\.T\.A/)) {
		text = "event and operations"
		p.className = "h2 aut"
		log_event = 0
	} else if (text.match(/^\.A/)) {
		text = text.replace(".A", "")
		p.className = "h2 aut"
		log_event = 0
	} else if (text.match(/^\.L/)) {
		text = text.replace(".L", "")
		p.className = "h2 lib"
		log_event = 0
	} else if (text.match(/^\.h3/)) {
		text = text.substring(4)
		p.className = "h3"
		log_event = 0
	} else if (text.match(/^\.h4/)) {
		text = text.substring(4)
		p.className = "h4"
		log_event = 0
	} else if (text.match(/^\.h5/)) {
		text = text.substring(4)
		p.className = "h5"
		log_event = 0
	} 

	// Group events
	// Reset group box counters (when log is rewound)
	if (ix <= log_event) log_event = 0

	if (!SCORING_CARDS.includes(event_n)) {
		if (text.match(/^.E:/)) {
			p.classList.add("header")
			log_event = ix
			text = text.replace(".E:", "")
		}
		if (text.match(/\.L$/)) {
			event_side = "lib"
			text = text.replace(".L", "")
		} else if (text.match(/\.A$/)) {
			event_side = "aut"
			text = text.replace(".A", "")
		} else if (text.match(/\.N$/)) {
			event_side = "both"
			text = text.replace(".N", "")
		}
		if (log_event && text === "") {
			log_event = 0
			event_side = null
		}
		if (log_event)
			p.classList.add("group", "event", event_side)
	}
	p.innerHTML = text
	return p
}

const pluralize = (count, noun, suffix = 's') => {
	if (Math.abs(count) === 1) {
		return `${count} ${noun}`
	} else {
		return `${count} ${noun}${suffix}`
	}
}

// ================= VISUAL FUNCTIONS =========================

function on_focus_card_tip(card_number) {
	document.getElementById("tooltip").className = "card strategy_" + card_number
}

function on_blur_card_tip() {
	document.getElementById("tooltip").classList = "card hide"
}

function on_focus_stability_card_tip(card_number) {
	document.getElementById("tooltip").className = "card stability_card stability_" + card_number
}

function on_blur_stability_card_tip() {
	document.getElementById("tooltip").classList = "card stability_card hide"
}

function on_focus_space_tip(id) {
	ui.spaces[id].classList.add("tip")
}

function on_blur_space_tip(id) {
	ui.spaces[id].classList.remove("tip")
}

function on_click_space_tip(id) {
	scroll_into_view(ui.spaces[id])
}

function on_focus_naval_tip(id) {
	ui.naval[id].classList.add("tip")
}

function on_blur_naval_tip(id) {
	ui.naval[id].classList.remove("tip")
}

function on_click_naval_tip(id) {
	scroll_into_view(ui.naval[id])
}

// ON UPDATE

function on_update() {
	if (!ui.spaces)
		create_ui()

	roles.Authoritarian.stat.textContent = `${pluralize(view.authoritarian_hand,'card')}`
	roles.Liberal.stat.innerText = `${pluralize(view.liberal_hand, 'card')}`
	ui.turn_info.innerText = `Strategy deck: ${pluralize(view.strategy_deck, 'card')}`

	// UPDATE TRACK MARKERS
    layout_turn()
    layout_round()
    layout_tension()
	layout_vp()
	layout_navy()
	layout_great_war()
	layout_black_hand()
    // UPDATE INFLUENCE MARKERS
    // UPDATE INFLUENCE VALUES
	for (let s = 0; s <= last_space; ++s) {
		const lib_infl = get_infl(LIB, s)
		const auth_infl = get_infl(AUT, s)
        if (s === view.black_hand) {
			layout_inf_markers(
				"marker lib_infl",
				ui.lib_infl[s],
				ui.lib_infl2[s],
				ui.lib_infl3[s],
				lib_infl,
				lib_infl - (auth_infl + 2) >= spaces[s].stability
			) 
			layout_inf_markers(
				"marker auth_infl",
				ui.auth_infl[s],
				ui.auth_infl2[s],
				ui.auth_infl3[s],
				auth_infl,
				(auth_infl + 2)- lib_infl >= spaces[s].stability
			)
		} else {
			layout_inf_markers(
				"marker lib_infl",
				ui.lib_infl[s],
				ui.lib_infl2[s],
				ui.lib_infl3[s],
				lib_infl,
				lib_infl - auth_infl >= spaces[s].stability
			) 
			layout_inf_markers(
				"marker auth_infl",
				ui.auth_infl[s],
				ui.auth_infl2[s],
				ui.auth_infl3[s],
				auth_infl,
				auth_infl - lib_infl >= spaces[s].stability
			)
		}
	}
	// MARKERS
	if (view.persistent_events.includes(C_STATE_SECULARISM_IN_FRANCE))
		document.getElementById("secularism").classList.remove("hide")
	else 
		document.getElementById("secularism").classList.add("hide")

	if (view.persistent_events.includes(C_AUSTRIA_ANNEXES_BOSNIA))
		document.getElementById("bosnia").classList.remove("hide")
	else 
		document.getElementById("bosnia").classList.add("hide")

	if (view.persistent_events.includes(C_SCHLIEFFEN_PLAN_ADOPTED))
		document.getElementById("schlieffen").classList.remove("hide")
	else
		document.getElementById("schlieffen").classList.add("hide")
	
	if (view.persistent_events.includes(C_US_INTERVENTIONISM))
		document.getElementById("us_interventionism").classList.remove("hide")
	else
		document.getElementById("us_interventionism").classList.add("hide")

	if (view.persistent_events.includes(C_VON_BETHMANN_HOLLWEG))
		document.getElementById("von_bethmann_hollweg").classList.remove("hide")
	else
		document.getElementById("von_bethmann_hollweg").classList.add("hide")

	if (view.persistent_events.includes(C_NORWEGIAN_INDEPENDENCE))
		document.getElementById("norway").classList.remove("hide")
	else
		document.getElementById("norway").classList.add("hide")

	if (view.persistent_events.includes(C_BELGIAN_RULE_IN_CONGO))
		document.getElementById("belgium").classList.remove("hide")
	else
		document.getElementById("belgium").classList.add("hide")

	if (view.persistent_events.includes(C_GERMAN_ARMY_EXPANSION))
		document.getElementById("german_army_expansion").classList.remove("hide")
	else
		document.getElementById("german_army_expansion").classList.add("hide")

    // UPDATE CARD DISPLAYS
	ui.hand.replaceChildren()
	for (let c of view.hand) { 
		ui.hand.appendChild(ui.cards_strategy[c])
	}
		

	// OPPONENT HAND
	ui.opp_hand.replaceChildren()
	if (view.opp_hand) {
		for (let c of view.opp_hand)
			ui.opp_hand.appendChild(ui.cards_strategy[c])
	}
	
	// DISCARD PANEL
	ui.discard.replaceChildren()
	if (view.discard) {
		document.getElementById("discard_panel").classList.remove("hide")
		for (let c of view.strategy_discard)
			ui.discard.appendChild(ui.cards_strategy[c])
	} else
		document.getElementById("discard_panel").classList.toggle("hide", discard_toggle)

	// PERSISTENT EVENTS
	ui.persistent.replaceChildren()
	for (let c of view.persistent_events)
		if (c <= LAST_STRATEGY_CARD)
			ui.persistent.appendChild(ui.cards_strategy[c])

	// PLAYED CARD PANEL
	ui.played_card.replaceChildren()
	if (!view.scoring_card) {
		if (view.played_card > 0)
			ui.played_card.appendChild(ui.cards_strategy[view.played_card])
		if (view.vm_event > 0 && view.vm_event < 111)
			ui.played_card.appendChild(ui.cards_strategy[view.vm_event])
	} else {
		ui.played_card.appendChild(ui.cards_strategy[view.scoring_card])
		if (view.aut_stability_card) {
			ui.played_card.appendChild(ui.cards_stability[view.aut_stability_card])
			if (!view.show_stability)
				ui.cards_stability[view.aut_stability_card].classList.add('back')
			else
				ui.cards_stability[view.aut_stability_card].classList.remove('back')
		}
		if (view.aut_stability_card_2) {
			ui.played_card.appendChild(ui.cards_stability[view.aut_stability_card_2])
			if (!view.show_stability)
				ui.cards_stability[view.aut_stability_card_2].classList.add('back')
			else
				ui.cards_stability[view.aut_stability_card_2].classList.remove('back')
		}
		if (view.aut_stability_card_3) {
			ui.played_card.appendChild(ui.cards_stability[view.aut_stability_card_3])
			if (!view.show_stability)
				ui.cards_stability[view.aut_stability_card_3].classList.add('back')
			else
				ui.cards_stability[view.aut_stability_card_3].classList.remove('back')
		} 
		if (view.lib_stability_card) {
			ui.played_card.appendChild(ui.cards_stability[view.lib_stability_card])
			if (!view.show_stability)
				ui.cards_stability[view.lib_stability_card].classList.add('back')
			else
				ui.cards_stability[view.lib_stability_card].classList.remove('back')
		}
		if (view.lib_stability_card_2) {
			ui.played_card.appendChild(ui.cards_stability[view.lib_stability_card_2])
			if (!view.show_stability)
				ui.cards_stability[view.lib_stability_card_2].classList.add('back')
			else
				ui.cards_stability[view.lib_stability_card_2].classList.remove('back')
		}
		if (view.lib_stability_card_3) {
			ui.played_card.appendChild(ui.cards_stability[view.lib_stability_card_3])
			if (!view.show_stability)
				ui.cards_stability[view.lib_stability_card_3].classList.add('back')
			else
				ui.cards_stability[view.lib_stability_card_3].classList.remove('back')
		}
	}

	// STABILITY PANEL
	ui.stability_hand.replaceChildren()
	if (view.scoring_card && view.scoring_card > 0) {
		if (view.stability_hand && view.stability_hand.length > 0)
			for (let c of view.stability_hand) {
				ui.stability_hand.appendChild(ui.cards_stability[c])
				ui.cards_stability[c].classList.remove('back')
			}
	}
	if (view.view_opp_stability)
		for (let c of view.stability_hand) {
			ui.stability_hand.appendChild(ui.cards_stability[c])
		}

    // ACTIONS
	for (let e of action_register)
		e.classList.toggle("action", is_action(e.my_action, e.my_id))

	for (let s = 0; s <= last_space; ++s) {
		ui.spaces[s].classList.toggle("selected", view.selected_space === s)
	}

	if (view.persistent_events.includes(C_STATE_SECULARISM_IN_FRANCE))
		ui.spaces[S_FRENCH_CATHOLIC_CHURCH].classList.toggle("secularism", S_FRENCH_CATHOLIC_CHURCH)

	action_button("reroll", "Re-Roll")
	action_button("reduce", "Reduce Tension")
	action_button("colossus", "Event and Operations")
	action_button("claim", "Claim Award")
	action_button("lose", "Lose VP")
	action_button("gain", "Gain VP")
	action_button("one", "One Space")
	action_button("two", "Two Spaces")
	action_button("yes", "Yes")
	action_button("no", "No")
	action_button("vp", "VP")
	action_button("occur", "Allow Event")
	action_button("draw", "Draw")
	action_button("continue", "Continue")
	action_button("ops", "Operations")
	action_button("fail", "Fail")
	action_button("succeed", "Succeed")
	action_button("Austria_Hungary", "Austria-Hungary")
	action_button("Balkans", "Balkans")
	action_button("France", "France")
	action_button("Germany", "Germany")
	action_button("Russia", "Russia")
	action_button("verify", "Verify")
    action_button("discard", "Discard")
	action_button("score", "Score Country")
	action_button("play", "Play")
	action_button("event", "Event")
	action_button("opp_event", "Opponent Event")
    action_button("naval", "Naval Arms Race")
    action_button("infl", "Support Points")
    action_button("sc", "Support Check")
    action_button("start", "Start")
    action_button("roll", "Roll")
    action_button("pass", "Pass")
	action_button("done", "Done")
	action_button("end_round", "End Round")
	action_button("undo", "Undo")
}