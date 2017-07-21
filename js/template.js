const Item = ({
  city,
  name,
  url,
  facebook,
  instagram,
  text
}) => `
<div class="col s12 m6 l4">
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="logos\\logo_${city}.png">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${name}<i class="material-icons right">more_vert</i></span>

    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${name}<i class="material-icons right">close</i></span>
      <p>${text}</p>

      <div class="socialpanel center">
        <a href="${url}"class="waves-effect waves-light btn-floating btn social web" target="_blank"><i class="material-icons">language</i> Visit website</a>
        <a href="${facebook}" class="waves-effect waves-light btn-floating btn social facebook" target="_blank"><i class="fa fa-facebook"></i> Sign in with vk</a>
        <a href="${instagram}" class="waves-effect waves-light btn-floating social instagram" target="_blank"><i class="fa fa-instagram"></i> Sign in with instagram</a>
      </div>
    </div>
  </div>
</div>
`;

$('.members').html([{
    city: 'brno',
    name: 'VKH Brno',
    url: 'http://www.vkhbrno.cz',
    facebook: 'https://www.facebook.com/vkhbrno/',
    instagram: 'https://www.instagram.com/vkhbrno/',
    text: 'Tohle je BRNO!'
  },
  {
    city: 'hradec',
    name: 'Salaš HK',
    url: 'http://www.salas.hk',
    facebook: 'https://www.facebook.com/salas/',
    instagram: 'https://www.instagram.com/salas/',
    text: 'Tohle je Hradec!'
  },
  {
    city: 'olomouc',
    name: 'VKH Olomouc',
    url: 'http://www.vkholomouc.cz',
    facebook: 'https://www.facebook.com/vkholomouc/',
    instagram: 'https://www.instagram.com/vkholomouc/',
    text: 'Tohle je Olomouc!'
  },
  {
    city: 'ostrava',
    name: 'VKH Ostrava',
    url: 'http://www.vysokoskolaci.info',
    facebook: 'https://www.facebook.com/vkhostrava/',
    instagram: 'https://www.instagram.com/vkhostrava/',
    text: 'Vytěž ze sebe to nejlepší!'
  },
  {
    city: 'praha',
    name: 'VKH Praha',
    url: 'http://www.vkhpraha.cz',
    facebook: 'https://www.facebook.com/vkhpraha/',
    instagram: 'https://www.instagram.com/vkhpraha/',
    text: 'Tohle je Praha!'
  },
  {
    city: 'zlin',
    name: 'RR49 Zlín',
    url: 'http://www.rr49.cz',
    facebook: 'https://www.facebook.com/RR49.cz/',
    instagram: 'https://www.instagram.com/rr49/',
    text: 'Tohle je Zlín!'
  }
].map(Item).join(''));
