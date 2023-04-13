import React from 'react';
import { PaginationContainer, PageButton, ArrowButton } from './Pagination.styled';

export const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageButtons = () => {
        const pageButtons = [];
    
    if (totalPages <= 10) {
        for (let i = 1; i <= totalPages; i++) {
            pageButtons.push(
                <PageButton
                    key={i}
                    onClick={() => handleClick(i)}
                    className={i === currentPage ? 'active' : ''}
                >
                {i}
                </PageButton>
            );
        }
        } else {
            const firstPages = [];
            const lastPages = [];
            let startPage, endPage;
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage >= totalPages - 5) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 4;
                endPage = currentPage + 5;
            }
    
        for (let i = startPage; i <= endPage; i++) {
            const pageButton = (
                <PageButton
                    key={i}
                    onClick={() => handleClick(i)}
                    className={i === currentPage ? 'active' : ''}
                >
                {i}
                </PageButton>
            );
            if (i <= 5) {
                firstPages.push(pageButton);
                } else if (i >= totalPages - 4) {
                    lastPages.push(pageButton);
                } else {
                    pageButtons.push(pageButton);
                }
            }
    
            if (startPage > 6) {
                pageButtons.unshift(
                    <PageButton key="ellipsis1" disabled>
                    ...
                    </PageButton>
                );
                pageButtons.unshift(
                    <PageButton key={1} onClick={() => handleClick(1)}>
                    {1}
                    </PageButton>
                );
            }
            if (endPage < totalPages - 5) {
                pageButtons.push(
                    <PageButton key="ellipsis2" disabled>
                    ...
                    </PageButton>
                );
                pageButtons.push(
                    <PageButton
                        key={totalPages}
                        onClick={() => handleClick(totalPages)}
                    >
                    {totalPages}
                    </PageButton>
                );
            }
            pageButtons.unshift(...firstPages);
            pageButtons.push(...lastPages);
        }
    
        return pageButtons;
    };

    return (
        <PaginationContainer>
            <ArrowButton
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
            {'<'}
            </ArrowButton>
            {renderPageButtons()}
            <ArrowButton
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
            {'>'}
            </ArrowButton>
        </PaginationContainer>
    );
}

