import React from 'react'
import { BentoGrid } from './ui/bento-grid'
import { BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'
const BentoMain = () => {

  return (
    <div className='mainGrid' id='main'>
      <BentoGrid className="max-w-4xl mx-auto">
      {gridItems.map(({id, title, description, icon}) => (
        <BentoGridItem
          key={id}
          id={id}
          title={title}
          description={description}
          className={id === 1 || id === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  )
}

export default BentoMain