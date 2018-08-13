window.gamehame = window.gamehame || {};

window.gamehame.Station = class Station {
  constructor(posX, posY, radius) {
    this.radius = radius;
    this.sprite = kontra.sprite({
      x: posX,
      y: posY,
      color: 'green',
      width: 20,
      height: 20,

      radius: radius,

      render: function () {
        this.draw();

        // green transparent
        this.context.fillStyle = 'rgba(0, 255, 0, 0.5)';
        this.context.beginPath();
        this.context.arc(
          this.x + (this.width / 2),
          this.y + (this.height / 2),
          this.radius, 0, 2 * Math.PI
        );
        this.context.fill();
      }
    });
  }

  update() {
    this.sprite.update();
  }

  render() {
    this.sprite.render();
  }
}
