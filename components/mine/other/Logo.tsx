import { Snowflake } from 'lucide-react';
import { Sun } from 'lucide-react';


interface LogoProps{
    color: string
}

const Logo = ({color}: LogoProps) => {
  return (
    <span className={`flex items-center text-${color} gap-2`} >
        <Snowflake />
        <Sun />
    </span>

  )
}

export default Logo