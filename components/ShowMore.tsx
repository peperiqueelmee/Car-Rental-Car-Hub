'use client';

import { CustomButton } from '@/components';
import { ShowMoreProps } from '@/types';

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    setLimit(newLimit);
  };
  return (
    <>
      <div className='w-full gap-4 mt-10 flex-center'>
        {!isNext && (
          <CustomButton
            title='Show More'
            btnType='button'
            containerStyles='bg-primary-blue rounded-full text-white'
            handleClick={handleNavigation}
          />
        )}
      </div>
    </>
  );
};

export default ShowMore;
