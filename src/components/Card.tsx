import Image from 'next/image';
import React from 'react'

interface propsTpye {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsTpye> = ({title, desc, img, tags}) => {
  return (
    <div className="border border-[#F3B806] w-[300px] sm:w-[350px]" data-aos="fade-left">
        <div>
        <Image
        className='w-[300px] sm:w-[350px] h-auto '
        src={img}
        width={350}
        height={350}
        alt={title}
        />
        </div>

        <div className='p-4 flex flex-col gap-4'>
            <div className='text-2xl font-extralight'>{title}</div>
            <div>{desc}</div>
            <div>
                {tags.map((el) => (
                    <div className='tags' key={el}>
                        {el}
                    </div>))}
            </div>
        </div>

    </div>



  )
}

export default Card