const naviLinks = Array.from(document.querySelectorAll('a'));

const mobileNavi = document.getElementById('navi-mobile-wrapper');

const toggleMobileNavi = () => {
  mobileNavi.classList.toggle('hidden');
}

naviLinks.forEach((naviLink) => {
  naviLink.addEventListener('click', (e) => {
    e.preventDefault();
  });
});