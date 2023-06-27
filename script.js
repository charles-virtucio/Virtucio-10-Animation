const femaleCharacter = document.getElementById('female-character');
const headline1 = document.getElementById('headline1');
const headline2 = document.getElementById('headline2');
const subheadline = document.getElementById('subheadline');
const learnMoreBtn = document.getElementById('learn-more-btn');
const logo = document.getElementById('logo');
const replayBtn = document.getElementById('replay-btn');


femaleCharacter.style.opacity = '1';
headline1.style.left = '50%';
headline2.style.right = '0';
subheadline.style.opacity = '1';
learnMoreBtn.style.opacity = '1';
logo.style.right = '10px';

replayBtn.addEventListener('click', replayAnimation);


function replayAnimation() {
  
  femaleCharacter.style.opacity = '0';
  headline1.style.left = '50%';
  headline2.style.right = '0';
  subheadline.style.opacity = '0';
  learnMoreBtn.style.opacity = '0';
  logo.style.right = '10px';

  void femaleCharacter.offsetHeight;
  void headline1.offsetHeight;
  void headline2.offsetHeight;
  void subheadline.offsetHeight;
  void learnMoreBtn.offsetHeight;
  void logo.offsetHeight;

  
  femaleCharacter.style.opacity = '1';
  headline1.style.left = '50%';
  headline2.style.right = '0';
  subheadline.style.opacity = '1';
  learnMoreBtn.style.opacity = '1';
  logo.style.right = '10px';
}
