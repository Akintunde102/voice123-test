'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { PageMeta } from '@/src/app/type';
import Link from '@mui/material/Link';

interface PaginationProps {
    pageMeta?: PageMeta;
    page: number;
    handlePageUpdate: (page: number) => void;
}

export const Pagination = ({ pageMeta, page, handlePageUpdate }: PaginationProps) => {

    if (!pageMeta) {
        return <></>
    }

    const { totalPages } = pageMeta;

    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                m: 2,
                maxWidth: "1200px",
            }}
            alignItems="center"
        >
            <Button disabled={page === 1} onClick={() => handlePageUpdate(page - 1)}>Previous</Button>


            <Stack
                direction="row"
                spacing={2}
                sx={{
                    overflowX: "scroll",
                    maxWidth: {
                        xs: "200px",
                        sm: "400px",
                        md: "600px",
                    },
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                }}
                alignItems="center"
            >
                {
                    [...Array(totalPages)].map((_, i) => (
                        <Link
                            key={i + 1}
                            onClick={() => handlePageUpdate(i + 1)}
                            sx={{
                                ...(page === i + 1 && {
                                    bgcolor: 'primary.main',
                                    color: 'white',
                                    padding: "5px"
                                }),
                                cursor: "pointer",
                                textDecoration: "none",
                            }}
                        >
                            {i + 1}
                        </Link>
                    ))}
            </Stack>

            <Button disabled={page === totalPages} onClick={() => handlePageUpdate(page + 1)}>Next</Button>
        </Stack>


    )
}
