const images = () => {
  const imgPopup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img');


  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (event) => {
    event.preventDefault();

    let target = event.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
      let a = document.querySelector('body');
      document.querySelector('body').style.overflow = 'hidden';

    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.querySelector('body').style.overflow = 'auto';
    }

  })
}

export default images;
