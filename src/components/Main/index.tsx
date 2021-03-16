import * as S from './styles'

const Main = ({ title = 'Cefalia Avaçando', description = 'Typescript, ReactJS, NextJs e Styled Components' }) => (
  <S.Wrapper>
    <S.Logo src="/img/cefalia.svg" alt="Cefalia com + vermelho no canto superior direito."/>
    <S.Title> {title} </S.Title>
    <S.Description> {description} </S.Description>
    <S.Illustration src="/img/hero1.svg" alt="Imagem de uma pessoa azul com uma lampada em cima da cabeça como se tivesse uma ideia" />
  </S.Wrapper>

)
export default Main
