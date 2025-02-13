import { CountContext } from '@/app/context/countContext'
import { useContext } from 'react'
import C from './c'

const B = ({count}) => {
    const value=useContext(CountContext)
    
    return (
        <div>
            B component - count is {value}
            <C />
        </div>
    )
}

export default B
