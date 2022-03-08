import styled from 'styled-components'
import { About } from '../styles'
import { useState } from 'react'

import { AnimateSharedLayout } from 'framer-motion'
import { useScroll } from './useScroll'
import Toggle from './Toggle'
import { scrollReveal } from '../animation'

const Faqsection = () => {
  const [element, controls] = useScroll()
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initials="hidden"
    >
      <h2>
        Des questions ? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Mon parcours">
          <div className="answer">
            <p>
              J'ai obtenu mon baccalauréat scientifique mention bien et
              européenne en 2018.
            </p>
            <p>
              Après l'obtention de celui-ci, j'ai effectué un an de droit
              européen à l'Université Catholique de Lille.
            </p>
            <p>
              Outre les connaissances juridiques que j'ai acquises, cette année
              m'a permis de développer mon expression et ma compréhension de
              l'anglais. En effet, la moitié des cours était en anglais.{' '}
            </p>

            <p>
              Le droit ne me plaisant pas, je me suis tourné vers le domaine de
              l'informatique pour lequel j'avais déjà un certain attrait.
            </p>

            <p>
              Je suis actuellement en deuxième année à l'EPSI, école
              d'informatique préparant au Titre RNCP de Niveau I « Expert en
              Informatique et Système d’Information ».
            </p>
          </div>
        </Toggle>
        <Toggle title="Mes compétences">
          <div className="answer">
            <p>
              Passionné par le développement web et mobile, j'ai acquis des
              compétences dans ces domaines.
            </p>
            <p>WEB : React, Symfony, HTML, CSS, JavaScript</p>
            <p>MOBILE : Android JAVA, React Native, Flutter</p>
          </div>
        </Toggle>
        <Toggle title="Mes expériences professionnelles">
          <div className="answer">
            <p>
              Durant mes deux années à l'EPSI, j'ai eu l'occasion d'effectuer
              deux stages.
            </p>
            <p>
              Le premier stage était un stage d'une durée de sept semaines
              durant lesquelles j'ai occupé le poste de chef de projet web pour
              Laboclean, une entreprise de services à la personne. Ce stage
              consistait en la création d'un site vitrine pour l'entreprise
              ainsi qu'une harmonisation des réseaux sociaux.{' '}
            </p>
            <p>
              Le second était un stage d'une durée de sept semaines également.
              Ce stage a été effectué dans l'entreprise 1 Réussite Partagée.
              Durant ce stage, j'ai du améliorer une application mobile déjà
              existante créée avec le CMS GlideApps.
            </p>
          </div>
        </Toggle>
        <Toggle title="Mon auto-formation">
          <div className="answer">
            <p>
              Afin de monter rapidement en compétences, je n'hesite pas à
              m'améliorer via des formations en ligne sur divers langages.
            </p>
            <p>
              De ce fait, j'ai appris en autodidacte le React et je suis en
              train de me former en Node JS dans le but de devenir fullstack.
            </p>
          </div>
        </Toggle>
        <Toggle title="Mes qualités">
          <div className="answer">
            <p>
              Je suis très curieux. Passionné de culture générale, j'ai un goût
              prononcé pour l'apprentissage de nouveaux savoirs. Récemment, j'ai
              appris les bases de la langue des signes.
            </p>
            <p>
              Sérieux et motivé, je suis une personne investie totalement dans
              les projets et les missions qui me sont confiés.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  )
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
`
export default Faqsection
