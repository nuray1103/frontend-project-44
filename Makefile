install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-rum

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix