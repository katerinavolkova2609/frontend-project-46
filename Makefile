publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js

install:
	npm ci

make lint:
	npx eslint .

test:
	npx -n --experimental-vm-modules jest
	
test-coverage:
	npx jest --coverage