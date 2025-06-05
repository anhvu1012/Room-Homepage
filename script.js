const naviLinks = Array.from(document.querySelectorAll('a'));

naviLinks.forEach((naviLink) => {
  naviLink.addEventListener('click', (e) => {
    e.preventDefault();
  });
});


const mobileNavi = document.getElementById('navi-mobile-wrapper');

const toggleMobileNavi = () => {
  mobileNavi.classList.toggle('hidden');
};


const slideImgs = Array.from(document.getElementsByClassName('slideImgs'));
const slideInfos = Array.from(document.getElementsByClassName('info-article'));
let slideIndex = 1;

const changeSlideIndex = (n) => {
  slideIndex += n;
  showSlideImgs(slideIndex);
};

const showSlideImgs = (n) => {
  if (n > slideImgs.length){
    slideIndex = 1;
  } else if (n < 1){
    slideIndex = slideImgs.length;
  }

  slideImgs.forEach((img) => {
    img.style.display = 'none';
  });
  slideInfos.forEach((info) => {
    info.style.display = 'none';
  })

  slideImgs[slideIndex-1].style.display = 'block';
  slideInfos[slideIndex-1].style.display = 'flex';
};

showSlideImgs(slideIndex);