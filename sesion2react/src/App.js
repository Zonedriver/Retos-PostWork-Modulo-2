//import logo from './logo.svg';
import './App.css';
import Hero from './Components/Herobox'
import AntiHero from './Components/AntiHeroBox'
import ImgS from './img/superman.JPG'
import ImgW from './img/wonder.JPG'
import ImgB from './img/batman.JPG'
import ImgA from './img/azrael.jpg'
import CicloDeVida from './CicloDeVidaDeUnComponente/state'
import Contador from './CicloDeVidaDeUnComponente/contador'
import ContadorHooks from './ContadorHooks/Contador'
import FormEscuela from './Formulario/Form'
import Reto from './RetoSesion4/Reto'
import FormListClass from './Sesion5/FormListClass'
import FormListCFH from './Sesion5/FormListCFH'
import RenderizadoCondicional from './Sesion5/ejemplo2'

function App() {
  return (
    <div /*className="App"*/>
    <CicloDeVida/>
    <Contador/>
    <Hero className="Hero-Superman" name="Jon Kent" heroName="Superman">
        <img 
          src={ImgS}
          alt="Superman"
        />
        <h2>Biografia de Superman</h2>
        <p>
          Superman was born on the fictional planet Krypton and was named Kal-El. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside, near the fictional town of Smallville. He was found and adopted by farmers Jonathan and Martha Kent, who named him Clark Kent. Clark developed various superhuman abilities, such as incredible strength and impervious skin. His adoptive parents advised him to use his abilities for the benefit of humanity, and he decided to fight crime. To protect his personal life, he changes into a colorful costume and uses the alias "Superman" when fighting crime. Clark resides in the fictional American city of Metropolis, where he works as a journalist for the Daily Planet. Superman's supporting characters include his love interest and fellow journalist Lois Lane, Daily Planet photographer Jimmy Olsen and editor-in-chief Perry White, and his arch-enemy Lex Luthor.
        </p>
        <a href="https://en.wikipedia.org/wiki/Superman">Wikipedia</a>

    </Hero>
    <Hero className="Hero-Mujer-Maravilla" name="Diana Prince" heroName="Wonder Woman">
          <img 
            src={ImgW}
            alt="Wonder Woman"
          />
          <h2>Biografia de Wonder Woman</h2>
          <p>
            Wonder Woman's Bronze Age origin story relates that she was sculpted from clay by her mother Queen Hippolyta and was given a life as an Amazon, along with superhuman powers as gifts by the Greek gods. In 2011, DC changed her background with the retcon that she is the biological daughter of Zeus and Hippolyta, jointly raised by her mother and her aunts Antiope and Menalippe. The character has changed in depiction over the decades, including briefly losing her powers entirely in the late 1960s; by the 1980s, artist George Perez gave her an athletic look and emphasized her Amazonian heritage.[13][14] She possesses an arsenal of magical items, including the Lasso of Truth, a pair of indestructible bracelets, a tiara which serves as a projectile, and, in older stories, a range of devices based on Amazon technology.
          </p>
          <a href="https://en.wikipedia.org/wiki/Wonder_Woman">Wikipedia</a>
      </Hero>
      <Hero className="Hero-Batman" name="Bruce Wayne" heroName="Batman">
          <img 
            src={ImgB}
            alt="Batman"
          />
          <h2>Biografia de Batman</h2>
          <p>
            Batman is the alias of Bruce Wayne, a wealthy American playboy, philanthropist, and industrialist who resides in Gotham City. Batman's origin story features him swearing vengeance against criminals after witnessing the murder of his parents Thomas and Martha, a vendetta tempered with the ideal of justice. He trains himself physically and intellectually, crafts a bat-inspired persona, and monitors the Gotham streets at night. Kane, Finger, and other creators accompanied Batman with supporting characters, including his sidekick Robin; allies Alfred Pennyworth, James Gordon, and Catwoman; and foes such as the Penguin, the Riddler, Two-Face, and his archenemy, the Joker.
          </p>
          <a href="https://en.wikipedia.org/wiki/Batman">Wikipedia</a>
      </Hero>
      <AntiHero className="AntiHero-Azrael" name="Jean-Paul Valley" heroName="Azrael">
      <img 
          src={ImgA} width="300" height="400" style={{ alignSelf: 'center' }}
          alt="Azrael"
        />
        <h2>Biografia de Azrael</h2>
        <p>
          The original version, Jean-Paul Valley, was created by Denny O'Neil, Joe Quesada, and Peter Milligan, and debuted in Batman: Sword of Azrael #1 (October 1992). The second character to assume the alias was Michael Washington Lane, in Azrael: Death's Dark Knight #1 (May 2009). Both iterations are vigilantes and members of an assassin group created by the Order of St. Dumas, a secretive organization seeking to restore justice to Gotham City. Azrael is typically portrayed as an antihero and ally of the superhero Batman, though the two have also been at odds due to the former's violent nature and twisted sense of justice indoctrinated by the Order.
        </p>
        <a href="https://en.wikipedia.org/wiki/Azrael_(DC_Comics)">Wikipedia</a>        
      </AntiHero>  
      <CicloDeVida/>
      <Contador/>
      Sesion 4
      <ContadorHooks/>
      <FormEscuela/>
      <Reto/>
      <FormListClass/>
      <FormListCFH/>
      <RenderizadoCondicional/>
    </div>

  );
}

export default App;