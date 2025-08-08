import { Helmet } from 'react-helmet'
import favicon from '../assets/logotipo.png'

export const Title = () => {
    return (
        <Helmet>
            <title>A Performance Digital | Plataforma de agência de Marketing Digital</title>
            <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        </Helmet>        
    )
}