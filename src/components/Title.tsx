import { Helmet } from 'react-helmet'
import LogoP from '../assets/LogoP.png'

export const Title = () => {
    return (
        <Helmet>
            <title>A Performance Digital | Plataforma de agência de Marketing Digital</title>
            <link rel="icon" type="image/png" href={LogoP} sizes="16x16" />
        </Helmet>        
    )
}