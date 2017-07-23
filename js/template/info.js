const Info = ({
  id,
  header,
  body
}) => `
<div id="${id}" class="modal">
  <div class="modal-content">
    <h4>${header}</h4>
    <p>${body}</p>
  </div>
</div>
`;

$('.modals').html([
  {
    id: 'modalInfo',
    header: 'Informace o nás a naše cíle',
    body: `<p class="light">Vysokoškolské katolické hnutí je zde pro studenty. Je otevřené všem, kterým v dnešní době není lhostejný svět, žití křesťanství a kteří chtějí své vyznání přiblížit ostatním. Vysokoškolskému katolickému hnutí jsou vlastní křesťanské hodnoty,
      které se neustále snaží v mladých lidech obnovovat a prohlubovat.</p>
    <p class="light">Naší vizí je vysoká škola prožitá v tvůrčím prostředí mladých křesťanů, která dává příležitost k osobnímu a duchovnímu rozvoji, vzdělávání a poskytuje prostor pro sdílení, zábavu, zážitky i vztahy.</p>
    <p class="light">Našim cílem je vytvořit společenství, ve kterém se budeme doprovázet na cestě životem s Bohem. Prostředkem k tomu je připravit co možná nejkvalitnější program, také proto mezi sebou jednotlivá města spolupracují v rámci VKH ČR. Dalším
      cílem sdružení je přinášet hlubší poznání a šíření křesťanských hodnot, podporovat dobrovolnictví, vytvářet prostor pro vzájemné setkávání a obohacování a nabídnout možnost alternativního využití volného času.</p>
    <p class="light">VKH ČR organizuje a zprostředkovává vzdělávací a kulturní akce, vytváří kontakty a spolupracuje s dalšími organizacemi, tuzemskými i mezinárodními.</p>
    <p class="light">Působí nejen na celém území České republiky, ale snaží se také aktivně navazovat kontakty a spolupráci se zahraničními podobně zaměřenými sdruženími.</p>
  `
},
{
  id: 'modalHistory',
  header: 'Historie projektu',
  body: `  <p>Po roce 1989 začala v univerzitních městech České republiky spontánně vznikat vysokoškolská společenství. V průběhu let se rozrůstala do dalších měst, zvyšoval se počet a kvalita akcí a prohlubovala se vzájemná spolupráce. Dnes se ve
      větších městech setkáte se společenstvími studentů, která nabízí různorodý program. V menších městech existují společenství, jejichž činnost leží spíše na aktivitě vlastních členů.</p>
    <p class="light">Vysokoškolské katolické hnutí ČR bylo založeno na podzim 2002 po více jak roce neformálních setkání radních a členů vysokoškolských farností v Praze, Brně, Olomouci a jejich občasné spolupráci. Kontakty mezi jednotlivými hnutími existují
      již od jejich založení na začátku devadesátých let, a proto chápeme vznik VKH ČR jako jejich přirozené rozšíření. Na podzim 2004 bylo do sdružení přijato VKH Ostrava, později také KAK Salaš (Hradec Králové) a RR 49 (Zlín).</p>
    <p class="light">Dobrá spolupráce funguje i se studenty v dalších univerzitních městech po celé ČR.</p>
  `
},
{
  id: 'modalToldAboutUs',
  header: 'Řekli o VKH...',
  body: `                  <blockquote>
                      „Vysokoškolské katolické hnutí je především společenství, kde lidé mohou spolu studovat, bavit se a modlit. Je to prostor pro růst, vzdělání i vztahy. Je otevřené pro všechny, kteří mají zájem sdílet svůj život s ostatními podobného smýšlení.“
                      <br>
                      <b>P. Josef Stuchlý, SJ vysokoškolský kaplan</b>
                    </blockquote>

                    <blockquote>
                      „Díky různorodému a skvělému společenství mladých lidí jsem si zvýšila sebedůvěru, našla opravdová přátelství a naučila jsem se díky týmové práci dosahovat vyšších výsledků.“
                      <br><b>Petra</b>
                    </blockquote>
                    <blockquote>
                      „VKH mi dává společenství s mladými věřícími lidmi a možnosti seberealizace a prohlubování duchovního života. A také dává prostor pro vytváření nových přátelských i partnerských vztahů, kde od začátku má své místo i společné prožívání víry.„
                      <br><b>Kuba</b>
                    </blockquote>`
}

].map(Info).join(''));
