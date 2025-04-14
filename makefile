default: rules.js

rules.js: events.txt
	node tools/gencode.js > /tmp/events.inc
	sed -i \
		-e '/BEGIN EVENTS/,/END EVENTS/{//!d}' \
		-e '/BEGIN EVENTS/r /tmp/events.inc' \
		rules.js