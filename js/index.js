window.onload = function {
  const parallax = document.querySelector('.parallax')

  if (parallax){
    const content = document.querySelector('.parallax__container')
    const clouds = document.querySelector('images-parallax__clouds')
    const mountains = document.querySelector('.images-parallax__mountains')
    const human = document.querySelector('.images-parallax__human')

    //Коэффициенты
    const forClouds = 40;
    const forMountains = 20;
    const forHuman = 10;
  }

  //Скорость анимации
  const speed = .05

  //Объявление переменных
  let positionX = 0, positionY = 0
  let coordXprocent = 0, coordYprocent = 0

  const setMouseParallaxStyle = () => {
    const distX = coordXprocent - positionX;
    const distY = coordYprocent - positionY;

  }
}