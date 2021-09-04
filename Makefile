build:
	docker build . -t pursuit-portal-browser-dock

run:
	docker run --rm --net pursuit_network --name portal-browser -p 5007:5007 pursuit-portal-browser-dock
