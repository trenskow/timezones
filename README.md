@trenskow/timezones
----

A small library for getting time zone information and associated countries.

# Usage

Import using the following example.

````javascript
import timezones from '@trenskow/timezones'
````

## Data

The data in returned has the following format.

````javascript
{
	"Africa/Abidjan": {
		"countries": [
			"CI",
			"BF",
			"GH",
			"GM",
			"GN",
			"IS",
			"ML",
			"MR",
			"SH",
			"SL",
			"SN",
			"TG"
		],
		"std": {
			"offset": {
				"minutes": 0,
				"duration": "+00:00"
			},
			"abbreviation": "GMT"
		}
	},
	"Africa/Accra": {
		"countries": [
			"GH"
		],
		"std": {
			"offset": {
				"minutes": 0,
				"duration": "+00:00"
			},
			"abbreviation": "GMT"
		}
	},
	"Africa/Addis_Ababa": {
		"countries": [
			"ET"
		],
		"std": {
			"offset": {
				"minutes": 180,
				"duration": "+03:00"
			},
			"abbreviation": "EAT"
		}
	},
	"Africa/Algiers": {
		"countries": [
			"DZ"
		],
		"std": {
			"offset": {
				"minutes": 60,
				"duration": "+01:00"
			},
			"abbreviation": "CET"
		}
	},
	"Africa/Asmara": {
		"countries": [
			"ER"
		],
		"std": {
			"offset": {
				"minutes": 180,
				"duration": "+03:00"
			},
			"abbreviation": "EAT"
		}
	},
	"Africa/Asmera": {
		"countries": [
			"ER"
		],
		"std": {
			"offset": {
				"minutes": 180,
				"duration": "+03:00"
			},
			"abbreviation": "EAT"
		}
	},
	"Africa/Bamako": {
		"countries": [
			"ML"
		],
		"std": {
			"offset": {
				"minutes": 0,
				"duration": "+00:00"
			},
			"abbreviation": "GMT"
		}
	},
	/* ... */
}
````

# LICENSE

3-Clause BSD (see LICENSE).
