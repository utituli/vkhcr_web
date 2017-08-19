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
        <b>Adresa</b>: ${address} <br />
        <b>Předseda</b>: ${chairleader} <br />
        <b>Email</b>: ${email} <br />
        <b>Mše svatá</b>: ${holyMass} <br />
      </p>

      <div class="socialpanel center">
        <a href="${url}"class="waves-effect waves-light btn-floating btn social web" target="_blank"><i class="material-icons">language</i> Visit website</a>
        <a href="${facebook}" class="waves-effect waves-light btn-floating btn social facebook" target="_blank"><i class="fa fa-facebook"></i> Sign in with vk</a>
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

    address: 'Kozí 8, 602 00 Brno',
    chairleader: 'Kateřina Stoklásková',
    email: 'predseda@vkhbrno.cz',
    holyMass: `Studentské mše pondělí 19:00, středa 7:30 a 19:00 v kostele
      Nanebevzetí Panny Marie ("u jezuitů"); úterý 19:00 Petrov (katedrála)`
  },
  {
    city: 'hradec',
    name: 'Salaš HK',
    url: 'http://www.salas.hk',
    facebook: 'https://www.facebook.com/salas/',
    address: 'Velké náměstí 32, 500 03 Hradec Králové',
    chairleader: 'Helena Vítů',
    email: 'predseda.salas@gmail.com, salas@salas.hk',
    holyMass: 'každou středu v akademickém kostele Nanebevzetí Panny Marie od 19:30, poté vždy program (přednáška/beseda/koncert/divadlo).'
  },
  {
    city: 'olomouc',
    name: 'VKH Olomouc',
    url: 'http://www.vkholomouc.cz',
    facebook: 'https://www.facebook.com/vkholomouc/',
    address: 'Křížkovského 2, 772 01 Olomouc',
    chairleader: 'Michal Štverák',
    email: 'predseda.vkholomouc@seznam.cz',
    holyMass: 'každou středu akademického roku v 19:00 v kostele Panny Marie Sněžné'
  },
  {
    city: 'ostrava',
    name: 'VKH Ostrava',
    url: 'http://www.vysokoskolaci.info',
    facebook: 'https://www.facebook.com/vkhostrava/',
    address: 'Kostelní náměstí 1, 728 02 Ostrava-Moravská Ostrava',
    chairleader: 'Tereza Pavlicová',
    email: 'predseda@vysokoskolaci.info',
    holyMass: 'každé úterý akademického roku v 19:00 v kostele v Ostravě-Pustkovci a po mši společenství na různá témata'
  },
  {
    city: 'praha',
    name: 'VKH Praha',
    url: 'http://www.vkhpraha.cz',
    facebook: 'https://www.facebook.com/vkhpraha/',
    address: 'Křižovnické náměstí 2, 110 00 Praha 1',
    chairleader: 'Ludmila Bažantová',
    email: 'predseda@vkhpraha.cz',
    holyMass: 'každá středa akademického roku v 19:00 v kostele sv.Ignáce na Karlově Náměstí'
  },
  {
    city: 'zlin',
    name: 'RR49 Zlín',
    url: 'http://www.rr49.cz',
    facebook: 'https://www.facebook.com/RR49.cz/',
    address: 'Sadová 149, 760 01 Zlín',
    chairleader: 'Kateřina Řmotová',
    email: 'katkarmotova@rr49.cz',
    holyMass: 'každé pondělí v akademickém roce v kostele sv. Jakuba a sv. Filipa ve Zlíně, začátek 18:30'
  }
].map(Item).join(''));
