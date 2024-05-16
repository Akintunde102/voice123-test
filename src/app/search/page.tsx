'use client'
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { SearchForm } from '@/src/components/Search/SearchForm';
import Paper from '@mui/material/Paper';
import { Results } from '@/src/components/Search/Results';

import axios from "axios";
import { toNumber, useSafeRouter, useSafeSearchParams } from "@/src/app/utils";
import { VOICE123_SEARCH_API_URL } from "@/src/config";
import { PageMeta } from '../type';
import LinearProgress from '@mui/material/LinearProgress';
import { Pagination } from '@/src/components/Search/Pagination';

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "#ddc",
  },
  headerPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ddd",
    height: { xs: "auto", sm: "80px" },
    padding: "10px 10px",
  },
  contentBox: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: "10px 10px",
    flexDirection: "column",
  },
  gridContainer: {
    width: { xs: '100%', sm: '100%' },
    maxWidth: "1200px",
    padding: "10px",
  },
};

export default function SearchListPage() {
  const pageParams = useSafeSearchParams()

  const router = useSafeRouter()


  const searchParamValue = pageParams.get('q');
  const pageParamValue = pageParams.get('page');

  const page = pageParamValue ? toNumber(pageParamValue) : 1;

  const [result, setResult] = React.useState<any[]>([]);
  const [searchQuery, setSearchQuery] = React.useState(searchParamValue || "");

  const [pageMeta, setPageMeta] = React.useState<PageMeta | null>();

  const [loading, setLoading] = React.useState(false);

  const [matchingValue, setMatchingValue] = React.useState<string>("");


  const handlePageUpdate = (newPage: number) => {
    router.push(`/search?q=${searchQuery}&page=${newPage}`);
  }

  const handleFormSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e && e.preventDefault();
    router.push(`/search?q=${searchQuery}&page=1`);
  }

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e && e.preventDefault();

    setLoading(true);

    const { headers, data: { providers } } = await axios.get(
      VOICE123_SEARCH_API_URL,
      {
        params: {
          keywords: searchQuery,
          page,
        },
      },
    );


    if (providers.length !== 0) {
      setPageMeta({
        pageSize: toNumber(headers["x-list-page-size"]),
        currentPage: toNumber(headers["x-list-current-page"]),
        totalPages: toNumber(headers["x-list-total-pages"]),
        totalRows: toNumber(headers["x-list-total-rows"]),
      });

      setResult(providers);

      setMatchingValue(searchQuery)
    }


    setLoading(false);
  }

  useEffect(() => {
    handleSubmit()
  }, [pageParamValue, searchParamValue])

  return (
    <>
      <Box sx={styles.mainContainer}>
        <Paper
          component={"div"}
          elevation={1}
          sx={styles.headerPaper}
        >
          <SearchForm
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSubmit={handleFormSubmit}
            loading={loading}
          />
        </Paper>
        {
          loading ? <LinearProgress /> : <></>
        }

        <Box sx={styles.contentBox}>
          {result.length === 0 ? <></> : <Pagination pageMeta={pageMeta || undefined} page={page} handlePageUpdate={handlePageUpdate} />}
          <Results items={result} searchQuery={searchQuery} matchingValue={matchingValue} loading={loading} />
        </Box>
      </Box>
    </>
  );
}
