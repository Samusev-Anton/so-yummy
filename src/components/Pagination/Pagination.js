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
        for (let i = 1; i <= 5; i++) {
            firstPages.push(
                <PageButton
                    key={i}
                    onClick={() => handleClick(i)}
                    className={i === currentPage ? 'active' : ''}
                >
                {i}
                </PageButton>
            );
        }

        const lastPages = [];
        for (let i = totalPages - 4; i <= totalPages; i++) {
            lastPages.push(
                <PageButton
                    key={i}
                    onClick={() => handleClick(i)}
                    className={i === currentPage ? 'active' : ''}
                >
                {i}
            </PageButton>
            );
        }

        pageButtons.push(...firstPages);
        pageButtons.push(
            <PageButton key="ellipsis1" disabled>
            ...
            </PageButton>
        );
        pageButtons.push(
            <PageButton
                key={currentPage - 1}
                onClick={() => handleClick(currentPage - 1)}
            >
            {currentPage - 1}
            </PageButton>
        );
        pageButtons.push(
            <PageButton
                key={currentPage}
                onClick={() => handleClick(currentPage)}
                className="active"
            >
            {currentPage}
            </PageButton>
        );
        pageButtons.push(
            <PageButton
                key={currentPage + 1}
                onClick={() => handleClick(currentPage + 1)}
            >
            {currentPage + 1}
            </PageButton>
        );
        pageButtons.push(
            <PageButton key="ellipsis2" disabled>
            ...
            </PageButton>
        );
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
};

