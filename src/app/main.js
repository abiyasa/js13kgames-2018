window.gamehame = window.gamehame || {};

window.gamehame.start = function () {
  kontra.init();

  let hero = new window.gamehame.Hero();
  let stations = [
    new window.gamehame.Station(10, 100, 150),
    new window.gamehame.Station(200, 200, 90)
  ]

  let loop = kontra.gameLoop({
    update(dt) {
      stations.forEach(station => station.update(dt));

      // check for coverage
      if (!hero.isDead) {
        let isInCoverage = 0;
        stations.forEach(station => {
          if (hero.isInCoverage(station)) {
            isInCoverage++;
          }
        });
        if (isInCoverage > 0) {
          hero.connect();
        } else {
          hero.disconnect();
        }
      }

      hero.update(dt);
    },

    render() {
      stations.forEach(st => st.render());
      hero.render();
    }
  });

  loop.start();
};

window.gamehame.start();