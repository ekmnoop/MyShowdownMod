'use strict';

// 0 is normally effective
// 1 is super-effective
// 2 is not very effective
// 3 is immune, no effect

//@type {{[k: string]: TypeData}}
let BattleTypeChart = {
	"Air": {
		damageTaken: {
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 0,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Light": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
	},
	"Bat": {
		damageTaken: {
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 1,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 2,
			"Grass": 0,
			"Ground": 0,
			"Ice": 1,
			"Light": 1,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 1,
			"Steel": 0,
			"Water": 0,
		},
	},
	"Bird": {
		damageTaken: {
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 0,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 0,
			"Ice": 0,
			"Light": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 1,
			"Steel": 0,
			"Water": 0,
		},
	},
	"Bug": {
		damageTaken: {
			"Air": 0,
			"Bat": 0,
			"Bird": 1,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 1,
			"Fish": 0,
			"Flying": 1,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 2,
			"Ice": 0,
			"Light": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 2,
			"Rock": 1,
			"Steel": 0,
			"Water": 0,
		},
		HPivs: {"atk": 30, "def": 30, "spd": 30},
		HPdvs: {"atk": 13, "def": 13},
	},
	"Dark": {
		damageTaken: {
			prankster: 3,
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 1,
			"Dark": 2,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 1,
			"Fighting": 1,
			"Fire": 0,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 2,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Light": 1,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 3,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
		HPivs: {},
	},
	"Dragon": {
		damageTaken: {
			"Air": 2,
			"Bat": 0,
			"Bird": 0,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 1,
			"Electric": 0,
			"Fairy": 1,
			"Fighting": 0,
			"Fire": 2,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 2,
			"Ice": 1,
			"Light": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 2,
		},
		HPivs: {"atk": 30},
		HPdvs: {"def": 14},
	},
	"Electric": {
		damageTaken: {
			par: 3,
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 2,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 0,
			"Fish": 0,
			"Flying": 2,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 1,
			"Ice": 0,
			"Light": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
		HPivs: {"spa": 30},
		HPdvs: {"atk": 14},
	},
	"Fairy": {
		damageTaken: {
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 2,
			"Dark": 2,
			"Dragon": 3,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 2,
			"Fire": 0,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Light": 0,
			"Normal": 0,
			"Poison": 1,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 1,
			"Water": 0,
		},
	},
	"Fighting": {
		damageTaken: {
			"Air": 0,
			"Bat": 1,
			"Bird": 0,
			"Bug": 2,
			"Dark": 2,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 1,
			"Fighting": 0,
			"Fire": 0,
			"Fish": 0,
			"Flying": 1,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Light": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 1,
			"Rock": 2,
			"Steel": 2,
			"Water": 0,
		},
		HPivs: {"def": 30, "spa": 30, "spd": 30, "spe": 30},
		HPdvs: {"atk": 12, "def": 12},
	},
	"Fire": {
		damageTaken: {
			brn: 3,
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 2,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 1,
			"Light": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 1,
			"Steel": 0,
			"Water": 1,
		},
		HPivs: {"atk": 30, "spa": 30, "spe": 30},
		HPdvs: {"atk": 14, "def": 12},
	},
	"Fish": {
		damageTaken: {
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 0,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Light": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
	},
	"Flying": {
		damageTaken: {
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 1,
			"Fairy": 0,
			"Fighting": 2,
			"Fire": 0,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 3,
			"Ice": 1,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 1,
			"Steel": 0,
			"Water": 0,
		},
		HPivs: {"hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30},
		HPdvs: {"atk": 12, "def": 13},
	},
	"Ghost": {
		damageTaken: {
			trapped: 3,
			"Air": 0,
			"Bat": 2,
			"Bird": 0,
			"Bug": 2,
			"Dark": 1,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 3,
			"Fire": 0,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 1,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Light": 1,
			"Normal": 3,
			"Poison": 2,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
		HPivs: {"def": 30, "spd": 30},
		HPdvs: {"atk": 13, "def": 14},
	},
	"Grass": {
		damageTaken: {
			powder: 3,
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 1,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 2,
			"Fairy": 2,
			"Fighting": 0,
			"Fire": 1,
			"Fish": 0,
			"Flying": 1,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 2,
			"Ice": 1,
			"Light": 3,
			"Normal": 0,
			"Poison": 1,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 2,
		},
		HPivs: {"atk": 30, "spa": 30},
		HPdvs: {"atk": 14, "def": 14},
	},
	"Ground": {
		damageTaken: {
			sandstorm: 3,
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 3,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 0,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 1,
			"Ground": 0,
			"Ice": 1,
			"Light": 0,
			"Normal": 0,
			"Poison": 2,
			"Psychic": 0,
			"Rock": 2,
			"Steel": 0,
			"Water": 1,
		},
		HPivs: {"spa": 30, "spd": 30},
		HPdvs: {"atk": 12},
	},
	"Ice": {
		damageTaken: {
			hail: 3,
			frz: 3,
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 1,
			"Fire": 1,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 2,
			"Light": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 1,
			"Steel": 0,
			"Water": 0,
		},
		HPivs: {"atk": 30, "def": 30},
		HPdvs: {"def": 13},
	},
	"Light": {
		damageTaken: {
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 0,
			"Dark": 3,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 0,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 2,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Light": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
	},
	"Normal": {
		damageTaken: {
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 1,
			"Fire": 0,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 3,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Light": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
	},
	"Poison": {
		damageTaken: {
			psn: 3,
			tox: 3,
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 2,
			"Fighting": 2,
			"Fire": 0,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 0,
			"Light": 0,
			"Normal": 0,
			"Poison": 2,
			"Psychic": 1,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
		HPivs: {"def": 30, "spa": 30, "spd": 30},
		HPdvs: {"atk": 12, "def": 14},
	},
	"Psychic": {
		damageTaken: {
			"Air": 0,
			"Bat": 1,
			"Bird": 0,
			"Bug": 1,
			"Dark": 1,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 3,
			"Fighting": 2,
			"Fire": 0,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 1,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Light": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 2,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
		HPivs: {"atk": 30, "spe": 30},
		HPdvs: {"def": 12},
	},
	"Rock": {
		damageTaken: {
			"Air": 3,
			"Bat": 2,
			"Bird": 2,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 1,
			"Fire": 2,
			"Fish": 0,
			"Flying": 2,
			"Ghost": 0,
			"Grass": 1,
			"Ground": 1,
			"Ice": 0,
			"Light": 2,
			"Normal": 2,
			"Poison": 2,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 1,
		},
		HPivs: {"def": 30, "spd": 30, "spe": 30},
		HPdvs: {"atk": 13, "def": 12},
	},
	"Steel": {
		damageTaken: {
			psn: 3,
			tox: 3,
			"Air": 0,
			"Bat": 3,
			"Bird": 2,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 2,
			"Electric": 1,
			"Fairy": 2,
			"Fighting": 1,
			"Fire": 1,
			"Fish": 0,
			"Flying": 2,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 2,
			"Light": 2,
			"Normal": 2,
			"Poison": 2,
			"Psychic": 0,
			"Rock": 2,
			"Steel": 2,
			"Water": 0,
		},
		HPivs: {"spd": 30},
		HPdvs: {"atk": 13},
	},
	"Water": {
		damageTaken: {
			"Air": 0,
			"Bat": 0,
			"Bird": 0,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 1,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 2,
			"Fish": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 1,
			"Ground": 0,
			"Ice": 2,
			"Light": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 2,
			"Water": 2,
		},
		HPivs: {"atk": 30, "def": 30, "spa": 30},
		HPdvs: {"atk": 14, "def": 13},
	},
};

exports.BattleTypeChart = BattleTypeChart;
