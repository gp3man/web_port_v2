import React from 'react'
import { BentoGrid } from './ui/bento-grid'
import { BentoGridItem } from './ui/bento-grid'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Skeleton } from './ui/skeleton';

const BentoMain = () => {
  const items = [
    {
      title: "Tech Stack",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      icon: <PaperPlaneIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Trainings",
      description: "A deep dive into the education that got me here.",
      header: <Skeleton />,
      icon: <PaperPlaneIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      icon: <PaperPlaneIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Hobbies",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      icon: <PaperPlaneIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      icon: <PaperPlaneIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton />,
      icon: <PaperPlaneIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <PaperPlaneIcon className="h-4 w-4 text-neutral-500" />,
    },
  ]

  return (
    <div className='mainGrid'>
      <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  )
}

export default BentoMain