const Item = ({
  city,
  name,
  url,
  facebook,
  instagram,
  address,
  chairleader,
  email,
  holyMass
}) => `
<div class="col s12 m6 l4">
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="resources\\cities\\logo_${city}.png">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${name}<i class="material-icons right">more_vert</i></span>

    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${name}<i class="material-icons right">close</i></span>
      <p>
        <b>Předseda</b>: ${chairleader} <br />
        <b>Email</b>: ${email} <br />
        <b>Mše svatá</b>: ${holyMass} <br />
      </p>

      <div class="socialpanel center">
        <a href="${url}" class="waves-effect waves-light btn-floating btn social web" target="_blank"><i class="material-icons">language</i> Visit website</a>
        <a href="${facebook}" class="waves-effect waves-light btn-floating btn social facebook" target="_blank"><i class="fa fa-facebook"></i> Visit facebook</a>
      </div>
    </div>
  </div>
</div>
`;

$('.cities').html([{
    city: 'brno',
    name: 'VKH Brno',
    url: 'http://www.vkhbrno.cz',
    facebook: 'https://www.facebook.com/vkhbrno/',
    chairleader: 'Jan Najman',
    email: 'predseda@vkhbrno.cz',
    holyMass: 'pondělí 19:00, středa 7:30 a 19:00 v kostele Nanebevzetí Panny Marie ("u jezuitů") a úterý 19:00 v katedrále na Petrově'
  },
  {
    city: 'olomouc',
    name: 'VKH Olomouc',
    url: 'http://www.vkholomouc.cz',
    facebook: 'https://www.facebook.com/VKH-Olomouc-326371718219/',
    chairleader: 'Michal Štverák',
    email: 'predseda.vkholomouc@seznam.cz',
    holyMass: 'středa 19:00 v kostele Panny Marie Sněžné'
  },
  {
    city: 'praha',
    name: 'VKH Praha',
    url: 'http://www.vkhpraha.cz',
    facebook: 'https://www.facebook.com/VKH-Praha-509511169078475/',
    chairleader: 'Petr Barborka',
    email: 'predseda@vkhpraha.cz',
    holyMass: 'středa 19:00 v kostele sv. Ignáce na Karlově náměstí'
  },
  {
    city: 'ostrava',
    name: 'VKH Ostrava',
    url: 'http://www.vysokoskolaci.info',
    facebook: 'https://www.facebook.com/vkhostrava/',
    chairleader: 'Tereza Pavlicová',
    email: 'predseda@vysokoskolaci.info',
    holyMass: 'úterý 19:00 v kostele sv. Cyrila a Metoděje v Ostravě-Pustkovci'
  },
  {
    city: 'hradec',
    name: 'KAK Salaš',
    url: 'http://www.salas.hk',
    facebook: 'https://www.facebook.com/salas.hradec/',
    chairleader: 'Helena Vítů',
    email: 'predseda.salas@gmail.com, salas@salas.hk',
    holyMass: 'středa 19:30 v kostele Nanebevzetí Panny Marie na Velkém náměstí'
  },
  {
    city: 'zlin',
    name: 'RR49',
    url: 'http://www.rr49.cz',
    facebook: 'https://www.facebook.com/RR49.cz/',
    chairleader: 'Kateřina Řmotová',
    email: 'katkarmotova@rr49.cz',
    holyMass: 'pondělí 18:30 v kostele sv. Filipa a Jakuba ve Zlíně'
  }
].map(Item).join(''));
