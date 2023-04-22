import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { RowTable } from '../../CategoryRecipes/CategoryRecipes.styled';
import { CardMeal } from '../../CardMeal/CardMeal';
import { NeedSearching } from '../NeedSearching/NeedSearching';
import { Pagination } from '../../Pagination/Pagination';
import { PaginationWrapper } from '../../Pagination/Pagination.styled';

export const SearchedRecipesList = ({ recipes }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let itemsPerPage;
  if (isDesktop) {
    itemsPerPage = 12;
  } else {
    itemsPerPage = 6;
  }

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return recipes.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  return (
    <div>
      {recipes.length > 0 ? (
        <>
          <RowTable>
            {getPaginatedData().slice(0, 100).map((recipe) => (
              <CardMeal meal={recipe} key={recipe._id} />
            ))}
          </RowTable>
          {totalPages > 1 && (
            < PaginationWrapper>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
            </PaginationWrapper>
          )}
        </>
      ) : (
        <NeedSearching />
      )}
    </div>
  )
}


