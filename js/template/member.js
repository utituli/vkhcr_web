const Member = ({
  avatar,
  name,
  email,
  secondLine
}) => `
<li class="collection-item avatar">
  <img src="resources/members/${avatar}.jpg" alt="" class="circle">
  <span class="title">${name}</span>
  <p>Email: ${email} <br>
      ${secondLine}
  </p>
</li>
`;

$('.members ul').html([{
    avatar: 'lukas_hanzlik',
    name: '<b>Prezident</b> - Lukáš Hanzlík',
    email: 'prezident@vkhcr.org, lukas.hanzlik@vkhcr.org',
    secondLine: 'Telefon: +420 721 270 518'
  },
  {
    avatar: 'tomas_putna',
    name: '<b>Zástupce prezidenta, Propagace</b> - Tomáš Putna',
    email: 'tomas.putna@vkhcr.org, propagace@vkhcr.org',
    secondLine: '&nbsp;'
  },
  {
    avatar: 'kristyna_franova',
    name: '<b>Finance</b> - Kristýna Fráňová',
    email: 'finance@vrhcr.org',
    secondLine: '&nbsp;'
  },
  {
    avatar: 'monika_schottkova',
    name: '<b>Fundraising, Foreign affairs</b> - Monika Schottková',
    email: 'fundraising@vkhcr.org, foreignaffairs@vkhcr.org',
    secondLine: '&nbsp;'
  }
].map(Member).join(''));
